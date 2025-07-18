import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/style.css'; // Asegúrate de que tu CSS personalizado esté importado
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado
import '../css/styleContact.css'; // Asegúrate de que tu CSS personalizado esté importado


import '../css/index.css'; // Asegúrate de que tu CSS personalizado esté importado 
import '../css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado
import "../scss/bootstrap.scss"; // Asegúrate de que tu CSS personalizado esté importado

const Contacto = () => {
const [loading, setLoading] = useState(true)

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
    <>
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
            <Link to="/contacto" className="nav-item nav-link active text-primary" style={{ fontSize: '1.2rem' }}>
              Contacto
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
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header mb-5 p-0 position-relative" style={{backgroundImage: 'url(img/bg-contacto.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
    {/* <!-- Capa oscura encima de la imagen --> */}
    <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(19, 19, 50, 0.603)', zIndex: 1}}></div>

    <div className="container-fluid page-header-inner py-5 position-relative" style={{zIndex: 2}}>
        <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Contacto</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                    <li className="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li className="breadcrumb-item"><a href="#">Paginas</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Contacto</li>
                </ol>
            </nav>
        </div>
    </div>
</div>

        {/* <!-- Page Header End --> */}

        {/* <!-- Booking Start --> */}
<div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container">
    <div className="bg-white shadow p-4 rounded">
      <div className="row align-items-center g-4">
        <div className="col-lg-10">
       <div className="row text-center text-md-start">
  <div className="col-md-4 mb-3 mb-md-0">
    <i className="fa fa-map-marker-alt text-primary me-2"></i>
    <strong>Ubicación:</strong><br/>
    Calle 27 de febrero No. 25, Las Terrenas
  </div>
  <div className="col-md-4 mb-3 mb-md-0">
    <i className="fa fa-envelope text-primary me-2"></i>
    <strong>Email:</strong><br/>
    grtransfer24@gmail.com
  </div>
  <div className="col-md-4">
    <i className="fab fa-whatsapp text-success me-2"></i>
    <strong>WhatsApp:</strong><br/>
    809-889-5003
  </div>
</div>

        </div>
        <div class="col-lg-2 text-center text-lg-end">
          <a href="https://wa.me/18098895003" 
   target="_blank" 
   class="btn btn-primary w-100 py-2">
   Reservar ahora
</a>

        </div>
      </div>
    </div>
  </div>
</div>

        {/* <!-- Booking End --> */}

        {/* <!-- Contact Start --> */}
<div className="container-xxl py-5" id="contact-section">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title text-center text-primary text-uppercase">Contáctanos</h6>
      <h1 className="mb-5"><span className="text-primary text-uppercase">Estamos</span> para ayudarte</h1>
    </div>

    <div className="row g-5">
      {/* <!-- Información de contacto --> */}
      <div className="col-12">
        <div className="row gy-4 text-center">
          <div className="col-md-4">
            <div className="bg-light rounded p-4 h-100">
              <i className="fa fa-envelope fa-2x text-primary mb-2"></i>
              <h6 className="text-uppercase">Correo</h6>
              <p className="mb-0">grtransfer24@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light rounded p-4 h-100">
              <i className="fa fa-phone-alt fa-2x text-primary mb-2"></i>
              <h6 className="text-uppercase">Teléfono</h6>
              <p className="mb-0">809-889-5003</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light rounded p-4 h-100">
              <i className="fa fa-map-marker-alt fa-2x text-primary mb-2"></i>
              <h6 className="text-uppercase">Ubicación</h6>
              <p className="mb-0">Santo Domingo, República Dominicana</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mapa --> */}
<div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
  <div className="rounded overflow-hidden h-100 shadow-sm border">
    <iframe
      className="w-100 h-100"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.055963393544!2d-69.541648!3d19.311445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaeb844b234a0fd%3A0xe88f9b0ac86e2f60!2sC.%2027%20de%20Febrero%2025%2C%20Las%20Terrenas%2022000%2C%20Rep%C3%BAblica%20Dominicana!5e0!3m2!1ses-419!2sdo!4v1718663611321!5m2!1ses-419!2sdo"
      frameborder="0"
      style={{minHeight: "350px", border: "0"}}
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0">
    </iframe>
  </div>
</div>



      {/* <!-- Sección Legal / Abogacía --> */}
      <div className="col-md-6 d-flex align-items-center wow fadeInUp" data-wow-delay="0.3s">
        <div className="bg-light p-4 rounded shadow-sm w-100 position-relative">
          {/* <!-- Espacio para el logo legal --> */}
          <div className="text-center mb-3" id="espacio-logo-legal">
            <img src="img/logo-legal.png" alt="Logo Abogacía" style={{maxHeight: "80px"}} className="mb-2" />
            {/* <!-- Puedes reemplazar esa imagen por tu logo --> */}
          </div>

          <h4 className="text-primary mb-3 text-center">Protección Legal y Derechos del Cliente</h4>
          <p className="text-justify">
            GR Transfer no solo se preocupa por tu seguridad en el transporte, sino también por tu protección legal como cliente. Cumplimos con todas las regulaciones del sector y colaboramos con expertos legales para garantizar transparencia, derechos contractuales y soluciones rápidas en caso de incidentes.
          </p>
          <div className="bg-white p-3 rounded border mt-3">
            <strong>¿Tienes una inquietud legal?</strong> Nuestro equipo puede orientarte sobre:
            <ul className="mt-2 mb-0">
              <li>Condiciones del servicio</li>
              <li>Reembolsos y reclamos</li>
              <li>Protección de datos personales</li>
            </ul>
          </div>

          {/* <!-- Espacio libre para insertar contenido adicional --> */}
          <div id="espacio-abogacia-extra" className="mt-4">
            {/* <!-- Aquí puedes insertar enlaces, documentos legales o widgets --> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* <!-- Contact End --> */}
    
            {/* <!-- Newsletter Start --> */}
<div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="row justify-content-center">
    <div className="col-lg-10 border rounded p-1">
      <div className="border rounded text-center p-4 bg-white">
        <h4 className="mb-3">¿Por qué elegir <span className="text-primary text-uppercase">GR Transfer</span>?</h4>
        <p className="mb-4">
          Con GR Transfer tienes más que transporte: tienes confianza, seguridad y un servicio con respaldo legal. Nuestro compromiso no solo es llevarte a tu destino, también es proteger tus derechos como cliente.
        </p>
        <div className="row g-3 justify-content-center">
          <div className="col-md-4">
            <div className="p-3 bg-light rounded shadow-sm h-100">
              <i className="fa fa-shield-alt fa-2x text-primary mb-2"></i>
              <h6 className="text-uppercase">Seguridad Garantizada</h6>
              <small>Conductores certificados y seguimiento 24/7.</small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-light rounded shadow-sm h-100">
              <i className="fa fa-balance-scale fa-2x text-primary mb-2"></i>
              <h6 className="text-uppercase">Compromiso Legal</h6>
              <small>Protección al consumidor y respaldo jurídico.</small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-light rounded shadow-sm h-100">
              <i className="fa fa-star fa-2x text-primary mb-2"></i>
              <h6 className="text-uppercase">Experiencia Premium</h6>
              <small>Vehículos confortables y trato personalizado.</small>
            </div>
          </div>
        </div>

        {/* <!-- Espacio reservado para abogacía o texto adicional --> */}
        <div className="mt-4">
          <em><strong>¿Sabías que como cliente tienes derechos protegidos?</strong> Muy pronto compartiremos más información sobre cómo GR Transfer respalda tus viajes con asesoría legal.</em>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* <!-- Newsletter Start --> */}
        
 {/* <!-- Footer Start --> */}
<div className="container-fluid text-light footer wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor: '#2C3E50'}}>
  <div className="container pb-5">
    <div className="row g-5">
      {/* <!-- Información principal --> */}
      <div className="col-md-6 col-lg-4">
        <div className="rounded p-4" style={{backgroundColor: '#1ABC9C'}}>
          <a href="index.html"><h1 className="text-white text-uppercase mb-3">GR TRANSFER</h1></a>
          <p className="text-white mb-0">
            Bienvenido a <span className="fw-bold text-dark">GR TRANSFER</span>, tu puerta de entrada a experiencias inolvidables.
            Descubre traslados seguros, tours personalizados y la comodidad que transforma cada viaje en una aventura.
          </p>
        </div>
      </div>

      {/* <!-- Contacto --> */}
      <div className="col-md-6 col-lg-3">
        <h6 className="section-title text-start text-primary text-uppercase mb-4">Contacto</h6>
        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Calle 27 de febrero No.25, Las Terrenas</p>
        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+809-889-5003</p>
        <p className="mb-2"><i className="fa fa-envelope me-3"></i>Grtransfer24@gmail.com</p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
          <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* <!-- Servicios --> */}
      <div className="col-lg-5 col-md-12">
        <div className="row gy-5 g-4">
          <div className="col-md-6">
            <h6 className="section-title text-start text-primary text-uppercase mb-4">Servicios</h6>
            <a className="btn btn-link" href="#">Recogida en el aeropuerto</a>
            <a className="btn btn-link" href="#">Recogida en casa/hotel</a>
            <a className="btn btn-link" href="#">Chofer personalizados</a>
            <a className="btn btn-link" href="#">Traslado a puntos turísticos</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Créditos --> */}
  <div className="container">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          &copy; <a className="border-bottom" href="#">GR TRANSFER</a>, Todos los derechos reservados.
        </div>
        <div className="col-md-6 text-center me-auto">
          <div className="footer-menu">
            <span className="fw-bold" style={{fontSize: '20px'}}>Creada por: </span>
            <a className="border-bottom" style={{fontSize: '20px'}} href="https://portafolio-g.netlify.app/">Gerald Luciano</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Footer End --> */}
    </>
  )
}

export default Contacto