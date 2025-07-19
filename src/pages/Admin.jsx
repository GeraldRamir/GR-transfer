import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/style.css'; // Asegúrate de que tu CSS personalizado esté importado
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado


import '../css/index.css'; // Asegúrate de que tu CSS personalizado esté importado 
import '../css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado
import "../scss/bootstrap.scss"; // Asegúrate de que tu CSS personalizado esté importado
import "../lib/owlcarousel/assets/owl.carousel.min.css"
import "../lib/animate/animate.min.css"
const EXPERIENCES = {
  relax: {
    title: 'Relajación Total',
    description: 'Explora playas ocultas y spas de lujo para desconectar y renovar tu energía.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    actionText: 'Reserva tu experiencia de relajación'
  },
  aventura: {
    title: 'Aventura Extrema',
    description: 'Descubre rutas secretas en la selva y cascadas para los amantes de la adrenalina.',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
    actionText: 'Reserva tu aventura'
  },
  sabor: {
    title: 'Tour Gastronómico',
    description: 'Saborea la cocina local en tours culinarios únicos y memorables.',
    image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
    actionText: 'Reserva tu tour gastronómico'
  },
  descubrimiento: {
    title: 'Descubrimiento Único',
    description: 'Navega y descubre rincones costeros inexplorados y llenos de historia.',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
    actionText: 'Reserva tu experiencia de descubrimiento'
  }
};



// import './index.css'

const Admin = () => {

const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null);

  const handleClose = () => setSelected(null);
    useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

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

      <div className="container-fluid bg-white p-0 min-vh-100">
        <div className="container-fluid bg-white p-0 min-vh-100">

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


        {/* <!-- Carousel Start --> */}
<div className="container-fluid p-0 mb-5">
  <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">

      {/* Slide 1 */}
      <div className="carousel-item active position-relative">
        <img
          className="w-100"
          src="img/indeximg-bg-1.jpg"
          style={{
            backgroundColor: 'rgba(19, 19, 50, 0.603)',
            zIndex: 1,
            height: '100vh'
          }}
          alt="Image"
        />
<div
  className="carousel-caption d-flex flex-column align-items-center justify-content-center"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    background: 'rgba(19, 19, 50, 0.603)' // sombreado azul oscuro
  }}
>
  <div className="p-3" style={{ maxWidth: '700px' }}>
    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
      Traslados Privados
    </h6>
    <h1 className="display-3 text-white mb-4 animated slideInDown">
      Movilidad Confiable en Las Terrenas
    </h1>
    <a
      href="https://wa.me/18098895003"
      target="_blank"
      rel="noopener noreferrer"
      className="btn py-md-3 px-md-5 me-3 animated slideInLeft"
      style={{ backgroundColor: '#FCEED6', color: '#2C3E50' }}
    >
      Reserve ahora
    </a>
    <a
      href="room.html"
      className="btn btn-light py-md-3 px-md-5 animated slideInRight"
      style={{
        backgroundColor: '#1ABC9C',
        color: '#FCEED6',
        borderColor: '#1ABC9C'
      }}
    >
      Otros destinos
    </a>
  </div>
</div>

      </div>

      {/* Slide 2 */}
      <div className="carousel-item position-relative">
        <img
          className="w-100"
          src="img/indexbg-img2.jpg"
          style={{
            backgroundColor: 'rgba(19, 19, 50, 0.603)',
            zIndex: 1,
            height: '100vh'
          }}
          alt="Image"
        />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center w-100 h-100">
          <div className="p-3" style={{ maxWidth: '700px' }}>
            <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
              Servicio Premium
            </h6>
            <h1 className="display-3 text-white mb-4 animated slideInDown">
              Comodidad y Seguridad a Tu Alcance
            </h1>
            <a
              href="https://wa.me/18098895003"
              target="_blank"
              rel="noopener noreferrer"
              className="btn py-md-3 px-md-5 me-3 animated slideInLeft"
              style={{ backgroundColor: '#FCEED6', color: '#2C3E50' }}
            >
              Solicitar ahora
            </a>
            {/* 
            <a
              href=""
              className="btn btn-light py-md-3 px-md-5 animated slideInRight"
              style={{
                backgroundColor: '#1ABC9C',
                color: '#FCEED6',
                borderColor: '#1ABC9C'
              }}
            >
              Más opciones
            </a>
            */}
          </div>
        </div>
      </div>
    </div>

    {/* Controles del carousel */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#header-carousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#header-carousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>



        {/* <!-- Carousel End --> */}


        {/* <!-- Booking Start --> */}
{/* <!-- SECCIÓN HERO O PRINCIPAL (div anterior al de las tarjetas) --> */}
{/* <div className="container-fluid px-0 position-relative">
<!-- <img src="img/banner.jpg" alt="" className="img-fluid w-100" style="height: 400px; object-fit: cover;"> --> */}


  {/* <!-- TARJETAS SUPERPUESTAS --> */}
<div className="container position-relative" id="featureCardsContainer" style={{ zIndex: 10 }}>

    <div className="row g-4">

      <div className="col-12 col-md-6 col-lg-3">
        <div className="feature-card wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <div className="icon-circle"><i className="fas fa-user-shield"></i></div>
          <h5>Choferes Confiables</h5>
          <p>Profesionales con experiencia, trato amable y conducción segura.</p>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className="feature-card wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
          <div className="icon-circle"><i className="fas fa-clock"></i></div>
          <h5>Puntualidad Total</h5>
          <p>Llegamos a tiempo, siempre. Tu horario es nuestra prioridad.</p>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className="feature-card wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
          <div className="icon-circle"><i className="fas fa-car-side"></i></div>
          <h5>Vehículos Premium</h5>
          <p>Viaja con estilo y confort en una flota moderna y bien equipada.</p>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className="feature-card wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
          <div className="icon-circle"><i className="fas fa-star"></i></div>
          <h5>Calidad Garantizada</h5>
          <p>Reconocidos por nuestros clientes por un servicio impecable.</p>
        </div>
      </div>

    </div>
  </div>
</div>

{/* <!-- SECCIÓN QUE VIENE DESPUÉS (opcional) --> */}
<div className="container-fluid py-5 mt-5">
  {/* <!-- contenido siguiente --> */}
</div>

   {/* SECCIÓN PRINCIPAL */}
      <div className="container my-5 py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="text-center mb-5">
          <h2 className="text-uppercase" style={{ color: '#27AE60' }}>
            ¿Qué quieres sentir hoy?
          </h2>
          <p className="text-muted">Selecciona una experiencia según la emoción que buscas</p>
        </div>

        <div className="row justify-content-center g-4">
          {Object.keys(EXPERIENCES).map((key) => (
            <div className="col-6 col-md-3" key={key}>
              <div
                className={`exp-box ${key}`}
                tabIndex="0"
                role="button"
                aria-haspopup="true"
                aria-controls="infoDrawer"
                aria-expanded={selected === key}
                onClick={() => setSelected(key)}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(key)}
              >
                <i className={`fas fa-${
                  key === 'relax' ? 'spa' :
                  key === 'aventura' ? 'mountain' :
                  key === 'sabor' ? 'pepper-hot' : 'compass'
                } fa-3x`}></i>
                <span className="d-block mt-2 text-capitalize">{key}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DRAWER LATERAL */}
      {selected && (
        <aside
          className="info-drawer open"
          id="infoDrawer"
          aria-hidden="false"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawerTitle"
        >
          <button
            className="close-btn"
            id="closeDrawer"
            onClick={handleClose}
            aria-label="Cerrar panel"
          >
            &times;
          </button>
          <div className="content text-center px-3">
            <h3 id="drawerTitle" className="mb-3">{EXPERIENCES[selected].title}</h3>
            <img
              src={EXPERIENCES[selected].image}
              alt={EXPERIENCES[selected].title}
              className="img-fluid rounded mb-3"
            />
            <p>{EXPERIENCES[selected].description}</p>
            <a
              href={`https://wa.me/18098895003?text=Hola,%20estoy%20interesado%20en%20${encodeURIComponent(EXPERIENCES[selected].title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-3"
            >
              {EXPERIENCES[selected].actionText}
            </a>
          </div>
        </aside>
      )}

      {/* ESTILOS RÁPIDOS */}
      <style>{`
        .exp-box {
          background-color: #1ABC9C;
          color: white;
          border-radius: 10px;
          padding: 30px 20px;
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s ease, background-color 0.3s ease;
          outline: none;
        }
        .exp-box:hover,
        .exp-box:focus {
          background-color: #17a589;
          transform: scale(1.05);
        }
        .info-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 350px;
          height: 100%;
          background: #fff;
          box-shadow: -4px 0 15px rgba(0, 0, 0, 0.3);
          z-index: 1050;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          overflow-y: auto;
        }
        .info-drawer.open {
          transform: translateX(0);
        }
        .info-drawer .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 2rem;
          background: none;
          border: none;
          color: #333;
          cursor: pointer;
        }
      `}</style>
{/* <!-- Inicio Modal --> */}
    {/* <div class="elfsight-app-5841fa61-2d8d-4b73-8871-d29d6ee35e27" data-elfsight-app-lazy></div> */}

        {/* <!-- Footer Start --> */}

        {/* <!-- Footer Start --> */}
       <div className="container-fluid  text-light footer wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: '#2C3E50' }}>
            <div className="container pb-5">
                <div className="row g-5">
               <div className="col-md-6 col-lg-4">
    <div className=" rounded p-4" style={{ backgroundColor: '#1ABC9C' }}>
        <a href="index.html"><h1 className="text-white text-uppercase mb-3">GR TRANSFER</h1></a>
       <p className="text-white mb-0">
    Bienvenido a <span className="fw-bold text-dark">GR TRANSFER</span>, tu puerta de entrada a experiencias inolvidables. Descubre traslados seguros, tours personalizados y la comodidad que transforma cada viaje en una aventura.
</p>

    </div>
</div>

                    <div className="col-md-6 col-lg-3">
                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Contacto</h6>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Calle 27 de febrero No.25 las terrenas</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+809-889-5003</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>Grtransfer24@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row gy-5 g-4">
                          {/* <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <a className="btn btn-link" href="">About Us</a>
                                <a className="btn btn-link" href="">Contact Us</a>
                                <a className="btn btn-link" href="">Privacy Policy</a>
                                <a className="btn btn-link" href="">Terms & Condition</a>
                                <a className="btn btn-link" href="">Support</a>
                            </div>  */}
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Servicios</h6>
                                <a className="btn btn-link" href="">recogida en el aeropuerto</a>
                                <a className="btn btn-link" href="">recogida en casa/hotel</a>
                                <a className="btn btn-link" href="">chofer personalizados</a>
                                <a className="btn btn-link" href="">traslado a puntos turísticos</a>
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

                            {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                        </div>
                        <div className="col-md-6 text-center me-auto">
                            <div className="footer-menu">
                                <span className="fw-bold" style={{ fontSize: '20px' }}>Creada por: </span> <a className="border-bottom" style={{ fontSize: '20px' }} href="https://portafolio-g.netlify.app/">Gerald Luciano</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer End  */}

        {/* <!-- Back to Top --> */}




    </div>

    </>
  )
}

export default Admin