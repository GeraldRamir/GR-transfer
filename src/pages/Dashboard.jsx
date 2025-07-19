import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import OneSignal from 'react-onesignal';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
const socket = io(BACKEND_URL);
const VAPID_PUBLIC_KEY = 'BDVdUnU_s9JGfHw-pt8gZPRwDiZg90QXGJqZ1m6mJNr7CnjU6nFCR4-ZgFKEPQGMMwn92kFtSqyZSdEOqjr8rQA'; // Pon aquí tu clave pública de VAPID

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for(let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function registrarServiceWorkerYSuscribir() {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado', registration);

        return registration.pushManager.getSubscription()
          .then(subscription => {
            if (subscription) {
              return subscription;
            }
            // Solicitar permiso y suscribir
            return registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
            });
          });
      })
      .then(subscription => {
        console.log('Suscripción obtenida:', subscription);

        // Serializar correctamente la suscripción con las keys en base64
        const subscriptionJson = {
          endpoint: subscription.endpoint,
          expirationTime: subscription.expirationTime,
          keys: {
            p256dh: arrayBufferToBase64(subscription.getKey('p256dh')),
            auth: arrayBufferToBase64(subscription.getKey('auth')),
          }
        };

        // Enviar la suscripción serializada al backend
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/subscribe`, {
          method: 'POST',
          body: JSON.stringify(subscriptionJson),
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          if (res.ok) {
            console.log('Suscripción enviada correctamente al backend');
          } else {
            console.error('Error al enviar suscripción al backend');
          }
        })
        .catch(err => {
          console.error('Error en fetch suscripción:', err);
        });
      })
      .catch(error => {
        console.error('Error al registrar SW o suscribirse:', error);
      });
  } else {
    console.warn('Push messaging no está soportado en este navegador');
  }
}

export default function Dashboard() {
  const [reservas, setReservas] = useState([]);
  const [clave, setClave] = useState('');
  const [autorizado, setAutorizado] = useState(false);
  const [hayClave, setHayClave] = useState(false);

    useEffect(() => {
    registrarServiceWorkerYSuscribir();
  }, []);

  //   useEffect(() => {
  //   async function initOneSignal() {
  //     await OneSignal.init({
  //       appId: "b415ff3d-1f45-434f-99d6-916c2d4bf901",
  //       notifyButton: {
  //         enable: true, // Muestra un botón flotante para activar notificaciones
  //       },
  //     });
  //   }

  //   initOneSignal();
  // }, []);

  // Verificar si hay clave y si hay acceso guardado
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
    if (acceso === 'true') setAutorizado(true);
  }, []);

  // Crear clave nueva
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

  // Verificar clave para acceso
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
      } else {
        toast.error(data.mensaje || 'Clave incorrecta');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error al verificar clave');
    }
  };

  // Cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem('accesoAdmin');
    setAutorizado(false);
    setClave('');
    setReservas([]);
  };

  // Obtener reservas solo si está autorizado
  const obtenerReservas = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/reservas`);
      if (!res.ok) throw new Error('Error al obtener reservas');
      const data = await res.json();
      setReservas(data);
    } catch (err) {
      console.error('Error:', err);
      toast.error('Error al cargar reservas');
    }
  };

  // Escuchar reservas y recibir nuevas desde socket
  useEffect(() => {
    if (!autorizado) return;

    obtenerReservas();

    socket.on('nueva-reserva', (nueva) => {
      setReservas((prev) => [nueva, ...prev]);
      toast.info(`Nueva reserva de ${nueva.nombre}`);
    });

    return () => {
      socket.off('nueva-reserva');
    };
  }, [autorizado]);

  // Exportar reservas a Excel
  const exportarExcel = () => {
    const ws = XLSX.utils.json_to_sheet(reservas);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reservas');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'reservas.xlsx');
  };

  // Eliminar una reserva
  const eliminarReserva = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/api/reservas/${id}`, {
        method: 'DELETE',
      });
      setReservas((prev) => prev.filter((r) => r._id !== id));
      toast.success('Reserva eliminada');
    } catch (err) {
      toast.error('Error al eliminar');
    }
  };


  const totalPersonas = reservas.reduce((acc, r) => acc + r.personas, 0);
  const ultimaReserva = reservas[0];
  const graficoData = reservas.reduce((acc, r) => {
    const fecha = r.fecha;
    acc[fecha] = (acc[fecha] || 0) + r.personas;
    return acc;
  }, {});
  const dataGrafico = Object.keys(graficoData).map(fecha => ({ fecha, personas: graficoData[fecha] }));


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

  return (
    <>
    {/* <!-- Header Start --> */}
    <div
      className="container-fluid px-0"
      style={{
        backgroundColor: '#1ABC9C',
        marginBottom: '-20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      <div className="row gx-0">
        {/* <!-- Logo grande (solo en pantallas grandes) --> */}
        <div className="col-lg-3 d-none d-lg-block">
          <Link
            to="/"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <img
              src="./img/logoGRtransfer.png"
              className="img-fluid w-50"
              alt="Logo GR Transfer"
            />
          </Link>
        </div>
    
        <div className="col-lg-9">
          {/* <!-- Parte superior con contacto y redes --> */}
          <div className="row gx-0 d-none d-lg-flex" style={{ backgroundColor: '#FCEED6' }}>
            <div className="col-lg-7 px-5 text-start">
              <div className="d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <small className="text-dark">Grtransfer24@gmail.com</small>
              </div>
              <div className="d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                <small className="text-dark">809-889-5003</small>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a className="text-dark me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-dark me-3" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-dark me-3" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="text-dark me-3" href="#"><i className="fab fa-instagram"></i></a>
                <a className="text-dark" href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
    
          {/* <!-- Navbar principal --> */}
          <nav
            className="navbar navbar-expand-lg navbar-dark p-0"
            id="navbart"
            style={{ backgroundColor: '#1ABC9C' }}
          >
            {/* <!-- Logo móvil --> */}
            <div className="d-flex justify-content-between align-items-center w-100 d-lg-none px-3 py-2">
              <a href="index.html" className="navbar-brand m-0">
                <img src="img/logoGRtransfer.png" alt="Logo móvil" style={{ height: '40px' }} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
    
            {/* <!-- Menú de navegación --> */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-2 text-uppercase fw-semibold">
                <Link to="/admin" className="nav-item nav-link active text-primary" style={{ fontSize: '1.2rem' }}>
                  Inicio
                </Link>
                <Link to="/admin/nosotrosAdmin" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
                  Nosotros
                </Link>
                <Link to="/admin/flotillasAdmin" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
                  Flotillas
                </Link>
                <Link to="/admin/destinosAdmin" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
                  Destinos
                </Link>
                <Link to="/admin/contactoAdmin" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
                  Contacto
                </Link>
                <Link to="/admin/dashboard" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
                  Dashboard
                </Link>
              </div>
            </div>
    
            {/* <!-- Botón especial a la derecha --> */}
            <div className="ms-auto d-flex align-items-stretch">
              <a
                href="https://wa.me/18098895003?text=Hola,%20quiero%20realizar%20una%20reserva%20rápida%20con%20GR%20TRANSFER"
                target="_blank"
                className="btn btn-primary rounded-0 d-none d-lg-flex align-items-center justify-content-center fw-bold text-light"
                style={{
                  backgroundColor: '#2C3E50',
                  borderColor: '#2C3E50',
                  padding: '48px 50px', // 🔽 reducido
                  fontSize: '1.1rem',
                  marginTop: '0px', // 🔽 elimina espacio extra
                  marginBottom: '-14px' // 🔽 elimina espacio extra
    
                }}
              >
                Reserva Rápida <i className="fa fa-car ms-2"></i>
              </a>
            </div>
          </nav>
    
          {/* <!-- Lema opcional --> */}
    {/* <!-- Lema opcional --> */}
    <div
      className="text-center d-none d-lg-block py-1"
      style={{
        backgroundColor: '#1ABC9C',
        color: 'white',
        fontSize: '1.05rem',
        marginRight: '390px',
        position: 'relative',
        top: '-25px' // 🔼 Solo mueve el lema hacia arriba
      }}
    >
      <em>Tu viaje comienza aquí. Comodidad, seguridad y confianza con GR Transfer.</em>
    </div>
    
        </div>
      </div>
    </div>
    {/* <!-- Header End --> */}
    
<div className="bg-body-tertiary min-vh-100">
  <ToastContainer />

  {/* Navbar Principal */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
    <div className="container-fluid">
      <span className="navbar-brand fs-4">📊 Panel de Reservas</span>
    </div>
  </nav>

  <div className="container py-4">
    
    {/* Sección de acciones */}
    <div className="d-flex justify-content-end mb-4 gap-2">
      <button onClick={exportarExcel} className="btn btn-success">
        📥 Exportar Excel
      </button>
      <button onClick={cerrarSesion} className="btn btn-danger">
        🔓 Cerrar sesión
      </button>
    </div>

    {/* Tarjetas resumen */}
    <div className="row g-4 mb-4">
      <div className="col-md-4">
        <div className="card text-bg-light shadow">
          <div className="card-body">
            <h5 className="card-title">Total Reservas</h5>
            <p className="display-6 fw-bold">{reservas.length}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-bg-light shadow">
          <div className="card-body">
            <h5 className="card-title">Personas Totales</h5>
            <p className="display-6 fw-bold">{totalPersonas}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-bg-light shadow">
          <div className="card-body">
            <h5 className="card-title">Última Reserva</h5>
            <p className="fw-bold mb-0">{ultimaReserva?.nombre}</p>
            <small className="text-muted">{ultimaReserva?.fecha}</small>
          </div>
        </div>
      </div>
    </div>

    {/* Gráfico */}
    <div className="card mb-5 shadow">
      <div className="card-header bg-primary text-white">📈 Personas por Fecha</div>
      <div className="card-body">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataGrafico}>
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="personas" fill="#0d6efd" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Lista de reservas */}
    <div className="card shadow border-0">
      <div className="card-header bg-primary text-white">📝 Lista de Reservas</div>
      <div className="p-4">
        <div className="row g-4">
          {reservas.map((r, index) => (
            <div key={r._id} className="col-md-6">
              <div className={`p-4 rounded shadow-sm text-dark border-start border-5 
                ${index % 4 === 0 ? 'bg-danger-subtle border-danger' :
                  index % 4 === 1 ? 'bg-warning-subtle border-warning' :
                  index % 4 === 2 ? 'bg-success-subtle border-success' :
                  'bg-info-subtle border-info'}`}>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h5 className="fw-bold mb-1">{r.nombre}</h5>
                    <small className="text-muted">{r.email}</small>
                  </div>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarReserva(r._id)}>
                    Eliminar
                  </button>
                </div>
                <p className="mb-1">📅 <strong>{r.fecha}</strong></p>
                <p className="mb-1">👥 {r.personas} persona(s)</p>
                <p className="fst-italic text-muted">{r.mensaje || 'Sin mensaje adicional'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
