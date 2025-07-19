import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/style.css'; // Asegúrate de que tu CSS personalizado esté importado
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado
import '../css/styleNosotros.css'; // Asegúrate de que tu CSS personalizado esté importado


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

const NosotrosAdmin = () => {

const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null);
  const handleClose = () => setSelected(null);
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
        {/* <!-- Spinner Start --> */}
        {/* <!-- <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> -->
        <!-- Spinner End --> */}

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
        to="/admin"
        className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
      >
        <img
          src="../img/logoGRtransfer.png"
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
            <img src="../img/logoGRtransfer.png" alt="Logo móvil" style={{ height: '40px' }} />
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
            <Link to="/admin" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
              Inicio
            </Link>
            <Link to="/admin/nosotrosAdmin" className="nav-item nav-link active text-primary" style={{ fontSize: '1.2rem' }}>
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


        {/* <!-- Page Header Start --> */}
        {/* <!-- <div class="container-fluid page-header mb-5 p-0" style="background-image: url(img/carousel-1.jpg);">
            <div class="container-fluid page-header-inner py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div> --> */}
        {/* <!-- Page Header End --> */}


        {/* <!-- Booking Start --> */}
        {/* <!-- <div class="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container">
                <div class="bg-white shadow" style="padding: 35px;">
                    <div class="row g-2">
                        <div class="col-md-10">
                            <div class="row g-2">
                                <div class="col-md-3">
                                    <div class="date" id="date1" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input"
                                            placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="date" id="date2" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-select">
                                        <option selected>Adult</option>
                                        <option value="1">Adult 1</option>
                                        <option value="2">Adult 2</option>
                                        <option value="3">Adult 3</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-select">
                                        <option selected>Child</option>
                                        <option value="1">Child 1</option>
                                        <option value="2">Child 2</option>
                                        <option value="3">Child 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-primary w-100">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- Booking End --> */}


        {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <h6 className="section-title text-start" style={{ color: "#1ABC9C", textTransform: "uppercase" }}>Sobre nosotros</h6>
        <h1 className="mb-4" style={{ color: "#1ABC9C" }}>Descubre <span className="text-uppercase" style={{ color: "#2C3E50" }}>GR Transfer</span></h1>
        <p className="mb-4" style={{ color: "#34495E" }}>
          En GR TRANSFER, facilitamos tus viajes con traslados seguros, cómodos y puntuales a los destinos más emblemáticos de República Dominicana. Nos esforzamos por brindarte una experiencia personalizada que haga de cada viaje una aventura inolvidable.
        </p>

<div className="row g-3 pb-4">
  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
    <div className="border rounded p-1">
      <div className="border rounded text-center p-4">
        <i className="fa fa-shuttle-van fa-2x" style={{ color: "#1ABC9C" }}></i>
        <h2 className="mb-1">
          <span className="text-slide">
            <span>Rápido</span>
            <span>Seguro</span>
            <span>Confiable</span>
          </span>
        </h2>
        <p className="mb-0">Traslados</p>
      </div>
    </div>
  </div>

  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
    <div className="border rounded p-1">
      <div className="border rounded text-center p-4">
        <i className="fa fa-map-marker-alt fa-2x" style={{ color: "#1ABC9C" }}></i>
        <h2 className="mb-1">
          <span className="text-slide">
            <span>Playas</span>
            <span>Montañas</span>
            <span>Ciudades</span>
          </span>
        </h2>
        <p className="mb-0">Destinos</p>
      </div>
    </div>
  </div>

  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
    <div className="border rounded p-1">
      <div className="border rounded text-center p-4">
        <i className="fa fa-smile fa-2x" style={{ color: "#1ABC9C" }}></i>
        <h2 className="mb-1">
          <span className="text-slide">
            <span>Felicidad</span>
            <span>Satisfacción</span>
            <span>Confianza</span>
          </span>
        </h2>
        <p className="mb-0">Clientes</p>
      </div>
    </div>
  </div>
</div>


<a className="btn" href="https://wa.me/18098895003?text=Hola%2C%20me%20gustaría%20conocer%20más%20sobre%20los%20traslados%20de%20GR%20Transfer." target="_blank" style={{ backgroundColor: '#1ABC9C', color: 'white', padding: '12px 40px', fontWeight: 600, borderRadius: '0.375rem' }}>
  Conoce más
</a>

      </div>
      <div className="col-lg-6">
        <div className="row g-3">
          <div className="col-6 text-end">
            <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="../img/about-1.jpg" style={{ marginTop: "25%" }} alt="Imagen traslado 1"/>
          </div>
          <div className="col-6 text-start">
            <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="../img/about-2.jpg" alt="Imagen traslado 2"/>
          </div>
          <div className="col-6 text-end">
            <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="../img/about-3.jpg" alt="Imagen traslado 3"/>
          </div>
          <div className="col-6 text-start">
            <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="../img/about-4.jpg" alt="Imagen traslado 4"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* <!-- About End -->


        <!-- Team Start --> */}
<div className="container-xxl py-5">
    <div className="container">
       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
    <h6 className="section-title text-center text-primary text-uppercase">Clientes Satisfechos</h6>
    <h1 className="mb-5">QUIENES <span className="text-primary text-uppercase">Confían en Nosotros</span></h1>
</div>

<div className="row g-4">

    {/* <!-- Imagen 1 --> */}
    <div className="col-lg-3 col-md-6 wow fadeInUp" style={{ height: '413px' }} data-wow-delay="0.1s">
        <div className="rounded shadow overflow-hidden h-100 d-flex flex-column justify-content-between">
            <div className="position-relative">
                <img className="img-fluid w-100" src="../img/nosotros-clientes1.jpg" alt="Testimonio" style={{ height: '300px', objectFit: 'cover' }} />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <button className="btn btn-square mx-1" style={{ backgroundColor: '#1ABC9C', border: 'none' }}><i className="fas fa-user"></i></button>
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-map-marker-alt"></i></button>
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-comment"></i></button>
                </div>
            </div>
            <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-1">Recuerdo inolvidable</h5>
                <small className="d-block mb-2">"Una experiencia cómoda y segura. Excelente servicio."</small>
            </div>
        </div>
    </div>

    {/* <!-- Imagen 2 --> */}
    <div className="col-lg-3 col-md-6 wow fadeInUp" style={{ height: '413px' }} data-wow-delay="0.2s">
        <div className="rounded shadow overflow-hidden h-100 d-flex flex-column justify-content-between">
            <div className="position-relative">
                <img className="img-fluid w-100" src="../img/nosotros-cliente2.jpg" alt="Testimonio" style={{height: "300px", objectFit: "cover"}}/>
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-user"></i></button>
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-map-marker-alt"></i></button>
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-comment"></i></button>
                </div>
            </div>
            <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-1">Momentos especiales</h5>
                <small className="d-block mb-2">"Servicio amable, confiable y siempre a tiempo."</small>
            </div>
        </div>
    </div>

    {/* <!-- Imagen 3 --> */}
    <div className="col-lg-3 col-md-6 wow fadeInUp" style={{ height: '413px' }} data-wow-delay="0.3s">
        <div className="rounded shadow overflow-hidden h-100 d-flex flex-column justify-content-between">
            <div className="position-relative">
                <img className="img-fluid w-100" src="../img/nosotros-cliente3.jpg" alt="Testimonio" style={{height: "300px", objectFit: "cover"}}/>
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-user"></i></button>
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-map-marker-alt"></i></button>
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-comment"></i></button>
                </div>
            </div>
            <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-1">Viaje memorable</h5>
                <small className="d-block mb-2">"Una opción excelente para moverse con comodidad."</small>
            </div>
        </div>
    </div>

    {/* <!-- Imagen 4 --> */}
    <div className="col-lg-3 col-md-6 wow fadeInUp" style={{ height: '413px' }} data-wow-delay="0.4s">
        <div className="rounded shadow overflow-hidden h-100 d-flex flex-column justify-content-between">
            <div className="position-relative">
                <img className="img-fluid w-100" src="../img/nosotros-cliente4.jpg" alt="Testimonio" style={{height: "300px", objectFit: "cover"}}/>
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-user"></i></button>
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-map-marker-alt"></i></button>
                    <button className="btn btn-square mx-1" style={{backgroundColor: "#1ABC9C", border: "none"}}><i className="fas fa-comment"></i></button>
                </div>
            </div>
            <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-1">Instantes vividos</h5>
                <small className="d-block mb-2">"El transporte ha sido clave para mi rutina diaria."</small>
            </div>
        </div>
    </div>

</div>

    </div>
</div>


        {/* <!-- Team End --> */}


    {/* <!-- Experiencias Interactivas Start --> */}

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


        <div style={{ height: '50px', backgroundColor: '#f8f9fa' }}></div>
                    <div className="elfsight-app-5841fa61-2d8d-4b73-8871-d29d6ee35e27" data-elfsight-app-lazy></div>
                    <a href="#" className="btn btn-lg btn-lg-square border-0 back-to-top" style={{ backgroundColor: '#1ABC9C', color: 'white' }}>
    <i className="fa fa-arrow-up"></i>
</a>

        {/* <!-- Footer Start --> */}
        <div className="container-fluid  text-light footer wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: '#2C3E50' }}>
            <div className="container pb-5">
                <div className="row g-5">
               <div className="col-md-6 col-lg-4">
    <div className=" rounded p-4" style={{ backgroundColor: "#1ABC9C" }}>
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
                            {/* <!-- <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <a class="btn btn-link" href="">About Us</a>
                                <a class="btn btn-link" href="">Contact Us</a>
                                <a class="btn btn-link" href="">Privacy Policy</a>
                                <a className="btn btn-link" href="">Terms & Condition</a>
                                <a className="btn btn-link" href="">Support</a>
                            </div> */}
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Servicios</h6>
                                <a className="btn btn-link" href="">recogida en el aeropuerto</a>
                                <a className="btn btn-link" href="">recogida en casa/hotel</a>
                                <a className="btn btn-link" href="">chofer personalizados</a>
                                <a class="btn btn-link" href="">traslado a puntos turísticos</a>
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
                                <span className="fw-bold" style={{ fontSize: "20px" }}>Creada por: </span> <a className="border-bottom" style={{ fontSize: "20px" }} href="https://htmlcodex.com">Gerald Luciano</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End -->


        <!-- Back to Top --> */}
    </div>
    </>
  )
}

export default NosotrosAdmin;