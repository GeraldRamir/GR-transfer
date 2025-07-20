import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'; // Asegúrate de que tu CSS personalizado esté importado
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado


import '../css/index.css'; // Asegúrate de que tu CSS personalizado esté importado 
import '../css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado
import "../scss/bootstrap.scss"; // Asegúrate de que tu CSS personalizado esté importado
import "../lib/owlcarousel/assets/owl.carousel.min.css"
import "../lib/animate/animate.min.css"

const Reservas = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

    const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    destino: '',
    fecha: '',
    personas: '',
  });

  
  const [alerta, setAlerta] = useState({
    visible: false,
    tipo: '',
    mensaje: '',
  });

  const mostrarAlerta = (tipo, mensaje) => {
    setAlerta({ visible: true, tipo, mensaje });
    setTimeout(() => {
      setAlerta({ visible: false, tipo: '', mensaje: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !form.nombre.trim() ||
    !form.correo.trim() ||
    !form.telefono.trim() ||
    !form.destino.trim() ||
    !form.fecha.trim() ||
    !form.personas.trim()
  ) {
    mostrarAlerta('danger', 'Por favor, completa todos los campos');
    return;
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reservas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error('Error al enviar reserva');

    // ✅ Notificar al admin (solo post, sin esperar resultado)
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/notify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Nueva reserva',
        body: `Reserva de ${form.nombre}`,
      }),
    }).catch(err => console.error('Error al notificar admin:', err));

    mostrarAlerta('success', 'Reserva enviada correctamente');

    setForm({
      nombre: '',
      correo: '',
      telefono: '',
      destino: '',
      fecha: '',
      personas: '',
    });
  } catch (error) {
    mostrarAlerta('danger', error.message);
  }
};



    useEffect(() => {
      // Simula carga, o aquí podrías hacer fetch de datos
      const timer = setTimeout(() => {
        setLoading(false) // Oculta spinner después de 1.5 seg o cuando termines tu lógica
      }, 1500)
  
      return () => clearTimeout(timer)
    }, [])
  
      if (loading) {
      // Mostrar spinner mientras loading sea true
      return (
        <div className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }

  return (
    
    <div className="container-fluid bg-white p-0 min-vh-100">
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
                    <Link to="/" className="nav-item nav-link " style={{ fontSize: '1.2rem' }}>
                      Inicio
                    </Link>
                    <Link to="/nosotros" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
                      Nosotros
                    </Link>
                    <Link to="/flotillas" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
                      Flotillas
                    </Link>
                    <Link to="/destinos" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
                      Destinos
                    </Link>
                    <Link to="/contacto" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
                      Contacto
                    </Link>
                    <Link to="/reserva" className="nav-item nav-link active text-primary" style={{ fontSize: '1.2rem' }}>
                      Reservar
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
        {/* <!-- Contenido principal --> */}    


                <div className="container mt-5 position-relative">
      <h2 className="mb-4 text-center">Formulario de Reserva</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Nombre completo</label>
          <input type="text" className="form-control" name="nombre" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" name="correo" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Teléfono</label>
          <input type="tel" className="form-control" name="telefono" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Destino</label>
          <input type="text" className="form-control" name="destino" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Fecha y hora</label>
          <input type="datetime-local" className="form-control" name="fecha" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Cantidad de personas</label>
          <input type="number" className="form-control" name="personas" onChange={handleChange} />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary mt-3 px-5">Enviar reserva</button>
        </div>
      </form>

     {/* Alerta centrada */}
{/* Alerta animada */}
      {alerta.visible && (
        <div
          className="position-fixed top-50 start-50 translate-middle bg-white p-4 shadow rounded text-center"
          style={{ zIndex: 9999, minWidth: '300px' }}
        >
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
          <lord-icon
            src={
              alerta.tipo === 'success'
                ? 'https://cdn.lordicon.com/rxgzsafd.json'
                : 'https://cdn.lordicon.com/juujmrhr.json'
            }
            trigger="loop"
            colors={alerta.tipo === 'success' ? '' : 'primary:#e83a30'}
            style={{ width: '100px', height: '100px' }}
          ></lord-icon>

          <div className={`alert alert-${alerta.tipo} mt-3`} role="alert">
            {alerta.mensaje}
          </div>
        </div>
      )}



    </div>
        {/* <!-- Footer Start --> */}
            {/* <!-- Footer Start --> */}
{/* <!-- Footer Start --> */}
<div
  className="container-fluid text-light footer wow fadeIn mt-5"
  data-wow-delay="0.1s"
  style={{ backgroundColor: '#2C3E50' }}
>
  <div className="container pb-5 pt-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-4">
        <div className="rounded p-4" style={{ backgroundColor: '#1ABC9C' }}>
          <a href="index.html">
            <h1 className="text-white text-uppercase mb-3">GR TRANSFER</h1>
          </a>
          <p className="text-white mb-0">
            Bienvenido a <span className="fw-bold text-dark">GR TRANSFER</span>, tu puerta de entrada a experiencias
            inolvidables. Descubre traslados seguros, tours personalizados y la comodidad que transforma cada viaje en
            una aventura.
          </p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <h6 className="section-title text-start text-primary text-uppercase mb-4">Contacto</h6>
        <p className="mb-2">
          <i className="fa fa-map-marker-alt me-3"></i>Calle 27 de febrero No.25 las terrenas
        </p>
        <p className="mb-2">
          <i className="fa fa-phone-alt me-3"></i>+809-889-5003
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope me-3"></i>Grtransfer24@gmail.com
        </p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-youtube"></i>
          </a>
          <a className="btn btn-outline-light btn-social" href="">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="col-lg-5 col-md-12">
        <div className="row gy-5 g-4">
          <div className="col-md-6">
            <h6 className="section-title text-start text-primary text-uppercase mb-4">Servicios</h6>
            <a className="btn btn-link" href="">
              recogida en el aeropuerto
            </a>
            <a className="btn btn-link" href="">
              recogida en casa/hotel
            </a>
            <a className="btn btn-link" href="">
              chofer personalizados
            </a>
            <a className="btn btn-link" href="">
              traslado a puntos turísticos
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          &copy; <a className="border-bottom" href="#">GR TRANSFER</a>, All Right Reserved.
        </div>
        <div className="col-md-6 text-center me-auto">
          <div className="footer-menu">
            <span className="fw-bold" style={{ fontSize: '20px' }}>Creada por: </span>
            <a className="border-bottom" style={{ fontSize: '20px' }} href="https://portafolio-g.netlify.app/">
              Gerald Luciano
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Footer End --> */}

    

           </div>





  );
};

export default Reservas;
