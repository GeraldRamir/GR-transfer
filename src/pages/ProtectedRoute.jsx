import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'; // Asegúrate de importar esto
import Dashboard from './Dashboard';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

export default function ProtectedRoute() {
  const [clave, setClave] = useState('');
  const [autorizado, setAutorizado] = useState(false);
  const [hayClave, setHayClave] = useState(false);
  const [loadingClave, setLoadingClave] = useState(true); // nuevo estado loading
  
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

      // Solo después de verificar la clave, leemos localStorage
      const acceso = localStorage.getItem('accesoAdmin');
      if (acceso === 'true') {
        setAutorizado(true);
      }
    } catch (error) {
      console.error('Error verificando clave:', error);
      setHayClave(false);
    } finally {
      setLoadingClave(false);
    }
  };

  verificarClaveExistente();
}, []);


  // Si está cargando la clave aún, no mostrar nada o un spinner
  if (loadingClave) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div>Cargando...</div>
      </div>
    );
  }

  const crearClave = async (e) => {
  e.preventDefault();

  if (!clave.trim()) {
    toast.error('La clave no puede estar vacía');
    return;
  }

  try {
    const res = await fetch(`${BACKEND_URL}/api/clave`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clave }),
    });

    if (!res.ok) {
      throw new Error('No se pudo crear la clave.');
    }

    toast.success('✅ Clave creada correctamente');
    setClave('');
    setHayClave(true); // Se cambia el estado para mostrar el formulario de ingreso
  } catch (error) {
    console.error('Error creando la clave:', error);
    toast.error('❌ Hubo un problema al crear la clave.');
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
        // navigate('/admin/dashboard'); // Redirección al dashboard
      } else {
        toast.error(data.mensaje || 'Clave incorrecta');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error al verificar clave');
    }
  };

  // El resto igual, con los formularios para crear o ingresar clave

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
            <button type="submit" className="btn btn-warning w-100">Crear clave</button>
          </form>
        </div>
      </div>
    );
  }

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
        <div className="text-center mt-3">
          <Link to="/admin/dashboard" className="text-decoration-none text-secondary">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

return <Dashboard />; // Si ya está autorizado, renderiza el Dashboard directamente

  // ... funciones crearClave, verificarClave, cerrarSesion igual que antes
}
