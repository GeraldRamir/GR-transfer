import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

export default function ProtectedRoute({ children }) {
  const [clave, setClave] = useState('');
  const [autorizado, setAutorizado] = useState(false);
  const [hayClave, setHayClave] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verificarClaveExistente = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/clave`);
        if (!res.ok) throw new Error('Error al obtener clave');
        const data = await res.json();

        if (data.existe !== undefined) {
          setHayClave(data.existe);
        } else if (Array.isArray(data)) {
          setHayClave(data.length > 0);
        } else {
          setHayClave(false);
        }
      } catch (error) {
        console.error('Error verificando clave:', error);
        setHayClave(false);
      }
    };

    verificarClaveExistente();

    const acceso = localStorage.getItem('accesoAdmin');
    if (acceso === 'true') {
      setAutorizado(true);
      navigate('/admin/dashboard'); // Si ya está autorizado, redirige al dashboard
    }
  }, [navigate]);

  const crearClave = async (e) => {
    e.preventDefault();
    if (!clave.trim()) {
      toast.error('La clave no puede estar vacía');
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/clave`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clave }),
      });

      if (res.ok) {
        toast.success('Clave creada correctamente');
        setHayClave(true);
        setClave('');
      } else {
        const data = await res.json();
        toast.error(data.mensaje || 'Error al crear clave');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error de conexión al crear clave');
    }
  };

  const verificarClave = async (e) => {
    e.preventDefault();
    if (!clave.trim()) {
      toast.error('Debes ingresar la clave');
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/clave/verificar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clave }),
      });

      const data = await res.json();
      if (res.ok && data.acceso) {
        localStorage.setItem('accesoAdmin', 'true');
        setAutorizado(true);
        toast.success('Acceso concedido');
        setClave('');
        navigate('/admin/dashboard'); // <-- Aquí redirige al dashboard después de autorizar
      } else {
        toast.error(data.mensaje || 'Clave incorrecta');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error al verificar clave');
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem('accesoAdmin');
    setAutorizado(false);
    setClave('');
    // Opcional: redirigir al login o página principal
    navigate('/admin');
  };

  // Si no hay clave creada, mostrar formulario para crearla
  if (!hayClave) {
    return (
      <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="card shadow p-4 w-100" style={{ maxWidth: '400px' }}>
          <h4 className="text-center mb-4">🛠 Crear clave de administrador</h4>
          <form onSubmit={crearClave}>
            <input
              type="password"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              placeholder="Ingrese nueva clave"
              className="form-control mb-3"
            />
            <button type="submit" className="btn btn-success w-100">Crear clave</button>
          </form>
        </div>
      </div>
    );
  }

  // Si no está autorizado, mostrar formulario de acceso
  if (!autorizado) {
    return (
      <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="card shadow p-4 w-100" style={{ maxWidth: '400px' }}>
          <h4 className="text-center mb-4">🔐 Acceso Admin</h4>
          <form onSubmit={verificarClave}>
            <input
              type="password"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              placeholder="Ingrese clave"
              className="form-control mb-3"
            />
            <button type="submit" className="btn btn-primary w-100">Entrar</button>
          </form>
        </div>
      </div>
    );
  }

  // Si está autorizado, mostrar el contenido protegido
  return (
    <>
      {/* Puedes agregar un botón para cerrar sesión */}
      <button className="btn btn-danger mb-3" onClick={cerrarSesion}>Cerrar sesión</button>
      {children}
    </>
  );
}
