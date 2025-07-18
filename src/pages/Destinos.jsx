import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/style.css'; // Asegúrate de que tu CSS personalizado esté importado
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado
import '../css/styleDestinos.css'; // Asegúrate de que tu CSS personalizado esté importado


import '../css/index.css'; // Asegúrate de que tu CSS personalizado esté importado 
import '../css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado
import "../scss/bootstrap.scss"; // Asegúrate de que tu CSS personalizado esté importado
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


const Destinos = () => {
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
  return(
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
                <Link to="/destinos" className="nav-item nav-link active text-primary" style={{ fontSize: '1.2rem' }}>
                  Destinos
                </Link>
                <Link to="/contacto" className="nav-item nav-link" style={{ fontSize: '1.2rem' }}>
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
    <div className="container-fluid page-header mb-5 p-0 position-relative" style={{ backgroundImage: 'url(img/bg-destinos.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    {/* <!-- Capa oscura encima de la imagen --> */}
    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(19, 19, 50, 0.603)', zIndex: 1 }}></div>

    <div className="container-fluid page-header-inner py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Destinos</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                    <li className="breadcrumb-item"><a href="#">Inicio</a></li>
                    <li className="breadcrumb-item"><a href="#">Paginas</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Destinos</li>
                </ol>
            </nav>
        </div>
    </div>
</div>

        {/* <!-- Booking Start --> */}
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
        {/* <!-- Booking End --> */}

            {/* <!-- Room Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Nuestros destinos</h6>
                    <h1 className="mb-5" style={{ color: '#2C3E50' }}>Explora nuestros <span className="text-primary text-uppercase">Destinos</span></h1>
                </div>
                <div className="row g-4">
                  {/* <!-- Tarjeta Destino: Aeropuerto SDQ --> */}
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="room-item shadow rounded overflow-hidden">
    <div className="position-relative">
      <img className="img-fluid" src="img/Destino-AeropSDQ.jpg.webp" alt=""/>
      <small className="position-absolute start-0 top-100 translate-middle-y text-white rounded py-1 px-3 ms-4 fw-bold" style={{ backgroundColor: '#1ABC9C' }}>Desde 220.00$ US</small>
    </div>
    <div className="p-4 mt-2">
      <div className="d-flex justify-content-between mb-3">
        <h5 className="mb-0">Aeropuerto SDQ</h5>
        <div className="ps-2">
          <small className="fa fa-star "style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star "style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star "style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star "style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star "style={{ color: '#1ABC9C' }}></small>
        </div>
      </div>
      <div className="d-flex mb-3">
        <small className="border-end me-3 pe-3"><i className="fa fa-clock me-2 " style={{ color: '#1ABC9C' }}></i>2.5 horas aprox.</small>
        <small className="border-end me-3 pe-3"><i className="fa fa-user-friends me-2 " style={{ color: '#1ABC9C' }}></i>Hasta 4 personas</small>
        <small><i className="fa fa-map-marker-alt me-2 " style={{ color: '#1ABC9C' }}></i>Desde Las Terrenas</small>
      </div>
      <p className="text-body mb-3">Traslado privado desde Las Terrenas al Aeropuerto Internacional Las Américas (SDQ). Comodidad, puntualidad y seguridad garantizada.</p>
      <div className="d-flex justify-content-between">
        <button className="btn btn-sm rounded py-2 px-4 fw-bold" style={{ backgroundColor: '#1ABC9C', color: 'white' }} data-bs-toggle="modal" data-bs-target="#modalSDQ">Ver Detalles</button>
        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="https://wa.me/18098895003?text=Hola%2C%20quiero%20reservar%20un%20traslado%20desde%20Las%20Terrenas%20al%20Aeropuerto%20SDQ.">Reservar Ahora</a>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal profesional Aeropuerto SDQ --> */}
<div className="modal fade" id="modalSDQ" tabindex="-1" aria-labelledby="modalSDQLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content rounded shadow-lg">
      <div className="modal-header bg-primary text-white">
        <h5 className="modal-title" id="modalSDQLabel">Detalles del Servicio: Aeropuerto SDQ</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div className="modal-body p-4">
        <div className="row">
          <div className="col-md-6">
            <img src="img/Destino-AeropSDQ.jpg.webp" alt="Aeropuerto SDQ" className="img-fluid rounded"/>
          </div>
          <div className="col-md-6">
            <h5 className="text-primary mb-3">Desde Las Terrenas al Aeropuerto Las Américas (SDQ)</h5>
            <p><strong>Duración estimada:</strong> 2.5 horas</p>
            <p><strong>Tipo de servicio:</strong> Privado y directo</p>
            <p><strong>Capacidad:</strong> Hasta 4 personas con equipaje</p>
            <p><strong>Descripción:</strong> Este servicio incluye recogida en Las Terrenas, transporte en vehículo cómodo y con aire acondicionado, y llegada puntual al Aeropuerto Internacional SDQ. Ideal para turistas, residentes o viajeros frecuentes.</p>
          </div>
        </div>
      </div>
      <div className="modal-footer justify-content-between">
        <small className="text-muted">Para reservar o más información, contáctanos vía WhatsApp</small>
        <a href="https://wa.me/18098895003?text=Hola%2C%20quiero%20reservar%20un%20traslado%20desde%20Las%20Terrenas%20al%20Aeropuerto%20SDQ." className="btn btn-success">Reservar vía WhatsApp</a>
      </div>
    </div>
  </div>
</div>

                {/* <!-- Tarjeta Destino: La Romana --> */}
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
  <div className="room-item shadow rounded overflow-hidden">
    <div className="position-relative">
      <img className="img-fluid" style={{ width: '100%', height: 'auto' }} src="img/Destino-LarRomana.jpg" alt="Destino La Romana"/>
      <small className="position-absolute start-0 top-100 translate-middle-y text-white rounded py-1 px-3 ms-4 fw-bold" style={{ backgroundColor: '#1ABC9C' }}>Desde 300.00$ US</small>
    </div>
    <div className="p-4 mt-2">
      <div className="d-flex justify-content-between mb-3">
        <h5 className="mb-0">La Romana</h5>
        <div className="ps-2">
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
        </div>
      </div>
      <div className="d-flex mb-3">
        <small className="border-end me-3 pe-3"><i className="fa fa-clock me-2" style={{ color: '#1ABC9C' }}></i>3 horas aprox.</small>
        <small className="border-end me-3 pe-3"><i className="fa fa-user-friends me-2" style={{ color: '#1ABC9C' }}></i>Hasta 4 personas</small>
        <small><i className="fa fa-map-marker-alt me-2" style={{ color: '#1ABC9C' }}></i>Desde Las Terrenas</small>
      </div>
      <p className="text-body mb-3">Traslado privado desde Las Terrenas a La Romana. Viaje cómodo, seguro y personalizado para ti y tu grupo.</p>
      <div className="d-flex justify-content-between">
        <button className="btn btn-sm rounded py-2 px-4 fw-bold" style={{ backgroundColor: '#1ABC9C', color: 'white' }} data-bs-toggle="modal" data-bs-target="#modalRomana">Ver Detalles</button>
        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="https://wa.me/18098895003?text=Hola%2C%20quiero%20reservar%20un%20traslado%20desde%20Las%20Terrenas%20hasta%20La%20Romana.">Reservar Ahora</a>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal profesional La Romana --> */}
<div className="modal fade" id="modalRomana" tabindex="-1" aria-labelledby="modalRomanaLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content rounded shadow-lg">
      <div className="modal-header bg-primary text-white">
        <h5 className="modal-title" id="modalRomanaLabel">Detalles del Servicio: La Romana</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div className="modal-body p-4">
        <div className="row">
          <div className="col-md-6">
            <img src="img/Destino-LarRomana.jpg" alt="La Romana" className="img-fluid rounded"/>
          </div>
          <div className="col-md-6">
            <h5 className="text-primary mb-3">Desde Las Terrenas a La Romana</h5>
            <p><strong>Duración estimada:</strong> 3 horas</p>
            <p><strong>Tipo de servicio:</strong> Privado y exclusivo</p>
            <p><strong>Capacidad:</strong> Hasta 4 personas con equipaje</p>
            <p><strong>Descripción:</strong> Servicio de transporte puerta a puerta desde Las Terrenas hasta La Romana. Vehículos confortables, chóferes profesionales y atención personalizada. Perfecto para traslados turísticos, ejecutivos o familiares.</p>
          </div>
        </div>
      </div>
      <div className="modal-footer justify-content-between">
        <small className="text-muted">¿Listo para viajar? Reserva de inmediato vía WhatsApp.</small>
        <a href="https://wa.me/18098895003?text=Hola%2C%20quiero%20reservar%20un%20traslado%20desde%20Las%20Terrenas%20hasta%20La%20Romana." className="btn btn-success">Reservar vía WhatsApp</a>
      </div>
    </div>
  </div>
</div>


                    {/* <!-- Tarjeta Destino: Punta Cana --> */}
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
  <div className="room-item shadow rounded overflow-hidden">
    <div className="position-relative">
      <img className="img-fluid" src="img/Destino-PuntaCana.webp" alt="Destino Punta Cana"/>
      <small className="position-absolute start-0 top-100 translate-middle-y text-white rounded py-1 px-3 ms-4 fw-bold" style={{ backgroundColor: '#1ABC9C' }}>Desde 400.00$ US</small>
    </div>
    <div className="p-4 mt-2">
      <div className="d-flex justify-content-between mb-3">
        <h5 className="mb-0">Punta Cana</h5>
        <div className="ps-2">
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
        </div>
      </div>
      <div className="d-flex mb-3">
        <small className="border-end me-3 pe-3"><i className="fa fa-clock me-2" style={{ color: '#1ABC9C' }}></i>5 horas aprox.</small>
        <small className="border-end me-3 pe-3"><i className="fa fa-user-friends me-2" style={{ color: '#1ABC9C' }}></i>Hasta 4 personas</small>
        <small><i className="fa fa-map-marker-alt me-2" style={{ color: '#1ABC9C' }}></i>Desde Las Terrenas</small>
      </div>
      <p className="text-body mb-3">Viaja desde Las Terrenas hasta Punta Cana en un transporte cómodo, privado y seguro. Ideal para vacaciones, negocios o eventos.</p>
      <div className="d-flex justify-content-between">
        <button className="btn btn-sm rounded py-2 px-4 fw-bold" style={{ backgroundColor: '#1ABC9C', color: 'white' }} data-bs-toggle="modal" data-bs-target="#modalPuntaCana">Ver Detalles</button>
        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="https://wa.me/18098895003?text=Hola%2C%20quiero%20reservar%20un%20traslado%20desde%20Las%20Terrenas%20hasta%20Punta%20Cana.">Reservar Ahora</a>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal profesional Punta Cana --> */}
<div className="modal fade" id="modalPuntaCana" tabindex="-1" aria-labelledby="modalPuntaCanaLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content rounded shadow-lg">
      <div className="modal-header bg-primary text-white">
        <h5 className="modal-title" id="modalPuntaCanaLabel">Detalles del Servicio: Punta Cana</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div className="modal-body p-4">
        <div className="row">
          <div className="col-md-6">
            <img src="img/Destino-PuntaCana.webp" alt="Punta Cana" className="img-fluid rounded"/>
          </div>
          <div className="col-md-6">
            <h5 className="text-primary mb-3">Desde Las Terrenas a Punta Cana</h5>
            <p><strong>Duración estimada:</strong> 5 horas</p>
            <p><strong>Tipo de servicio:</strong> Privado, climatizado y cómodo</p>
            <p><strong>Capacidad:</strong> Hasta 4 personas + equipaje</p>
            <p><strong>Descripción:</strong> Disfruta de un traslado profesional desde Las Terrenas hasta Punta Cana. Servicio ideal para viajeros que desean tranquilidad, puntualidad y atención personalizada durante el trayecto.</p>
          </div>
        </div>
      </div>
      <div className="modal-footer justify-content-between">
        <small className="text-muted">¿Interesado en reservar? Puedes contactarnos ahora mismo por WhatsApp.</small>
        <a href="https://wa.me/18098895003?text=Hola%2C%20quiero%20reservar%20un%20traslado%20desde%20Las%20Terrenas%20hasta%20Punta%20Cana." className="btn btn-success">Reservar vía WhatsApp</a>
      </div>
    </div>
  </div>
</div>

                   {/* <!-- Tarjeta Destino: Santo Domingo --> */}
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
  <div className="room-item shadow rounded overflow-hidden">
    <div className="position-relative">
      <img className="img-fluid" src="img/Destino-StoDgo.jpg" alt="Destino Santo Domingo"/>
      <small className="position-absolute start-0 top-100 translate-middle-y text-white rounded py-1 px-3 ms-4 fw-bold" style={{ backgroundColor: '#1ABC9C' }}>Desde 230.00$ US</small>
    </div>
    <div className="p-4 mt-2">
      <div className="d-flex justify-content-between mb-3">
        <h5 className="mb-0">Santo Domingo</h5>
        <div className="ps-2">
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
        </div>
      </div>
      <div className="d-flex mb-3">
        <small className="border-end me-3 pe-3"><i className="fa fa-clock me-2" style={{ color: '#1ABC9C' }}></i>2.5 horas aprox.</small>
        <small className="border-end me-3 pe-3"><i className="fa fa-user-friends me-2" style={{ color: '#1ABC9C' }}></i>Hasta 4 personas</small>
        <small><i className="fa fa-map-marker-alt me-2" style={{ color: '#1ABC9C' }}></i>Desde Las Terrenas</small>
      </div>
      <p className="text-body mb-3">Traslado cómodo y seguro desde Las Terrenas hasta la capital. Ideal para quienes desean llegar directo al centro urbano sin complicaciones.</p>
      <div className="d-flex justify-content-between">
        <button className="btn btn-sm rounded py-2 px-4 fw-bold" style={{ backgroundColor: '#1ABC9C', color: 'white' }} data-bs-toggle="modal" data-bs-target="#modalSantoDomingo">Ver Detalles</button>
        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="https://wa.me/18098895003?text=Hola%2C%20quiero%20reservar%20un%20traslado%20desde%20Las%20Terrenas%20hasta%20Santo%20Domingo.">Reservar Ahora</a>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal profesional Santo Domingo --> */}
<div className="modal fade" id="modalSantoDomingo" tabindex="-1" aria-labelledby="modalSantoDomingoLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content rounded shadow-lg">
      <div className="modal-header bg-primary text-white">
        <h5 className="modal-title" id="modalSantoDomingoLabel">Detalles del Servicio: Santo Domingo</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div className="modal-body p-4">
        <div className="row">
          <div className="col-md-6">
            <img src="img/Destino-StoDgo.jpg" alt="Santo Domingo" className="img-fluid rounded"/>
          </div>
          <div className="col-md-6">
            <h5 className="text-primary mb-3">Desde Las Terrenas a Santo Domingo</h5>
            <p><strong>Duración estimada:</strong> 2.5 horas</p>
            <p><strong>Tipo de servicio:</strong> Privado, cómodo, aire acondicionado</p>
            <p><strong>Capacidad:</strong> Hasta 4 personas + equipaje</p>
            <p><strong>Descripción:</strong> El servicio de transporte perfecto para turistas, profesionales o familias que necesitan llegar directamente a la capital con comodidad, puntualidad y atención personalizada.</p>
          </div>
        </div>
      </div>
      <div className="modal-footer justify-content-between">
        <small className="text-muted">¿Listo para reservar tu transporte? Contáctanos por WhatsApp.</small>
        <a href="https://wa.me/18098895003?text=Hola%2C%20quiero%20reservar%20un%20traslado%20desde%20Las%20Terrenas%20hasta%20Santo%20Domingo." className="btn btn-success">Reservar vía WhatsApp</a>
      </div>
    </div>
  </div>
</div>

                  {/* <!-- Tarjeta Destino: Puerto Plata --> */}
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="room-item shadow rounded overflow-hidden">
    <div className="position-relative">
      <img className="img-fluid" src="img/Destino-PueroPlata.jpg" alt="Puerto Plata"/>
      <small className="position-absolute start-0 top-100 translate-middle-y text-white rounded py-1 px-3 ms-4 fw-bold" style={{ backgroundColor: '#1ABC9C' }}>Desde 180.00$ US</small>
    </div>
    <div className="p-4 mt-2">
      <div className="d-flex justify-content-between mb-3">
        <h5 className="mb-0">Puerto Plata</h5>
        <div className="ps-2">
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small className="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small class="fa fa-star" style={{ color: '#1ABC9C' }}></small>
          <small class="fa fa-star" style={{ color: '#1ABC9C' }}></small>
        </div>
      </div>
      <div class="d-flex mb-3">
        <small class="border-end me-3 pe-3"><i class="fa fa-clock me-2" style={{ color: '#1ABC9C' }}></i>3 horas aprox.</small>
        <small class="border-end me-3 pe-3"><i class="fa fa-user-friends me-2" style={{ color: '#1ABC9C' }}></i>Hasta 4 personas</small>
        <small><i class="fa fa-map-marker-alt me-2" style={{ color: '#1ABC9C' }}></i>Desde Las Terrenas</small>
      </div>
      <p class="text-body mb-3">Transporte privado y seguro desde Las Terrenas hasta Puerto Plata. Ideal para quienes desean llegar al norte con comodidad total.</p>
      <div class="d-flex justify-content-between">
        <button class="btn btn-sm rounded py-2 px-4 fw-bold" style={{ backgroundColor: '#1ABC9C', color: 'white' }} data-bs-toggle="modal" data-bs-target="#modalPuertoPlata">Ver Detalles</button>
        <a class="btn btn-sm btn-dark rounded py-2 px-4" href="https://wa.me/18098895003?text=Hola%2C%20quiero%20reservar%20un%20traslado%20desde%20Las%20Terrenas%20hasta%20Puerto%20Plata.">Reservar Ahora</a>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal profesional Puerto Plata --> */}
<div class="modal fade" id="modalPuertoPlata" tabindex="-1" aria-labelledby="modalPuertoPlataLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content rounded shadow-lg">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title" id="modalPuertoPlataLabel">Detalles del Servicio: Puerto Plata</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body p-4">
        <div class="row">
          <div class="col-md-6">
            <img src="img/Destino-PueroPlata.jpg" alt="Puerto Plata" class="img-fluid rounded"/>
          </div>
          <div class="col-md-6">
            <h5 class="text-primary mb-3">Desde Las Terrenas a Puerto Plata</h5>
            <p><strong>Duración estimada:</strong> 3 horas</p>
            <p><strong>Tipo de servicio:</strong> Transporte privado con aire acondicionado</p>
            <p><strong>Capacidad:</strong> Hasta 4 personas + maletas</p>
            <p><strong>Descripción:</strong> Llegue sin estrés a Puerto Plata con un servicio de transporte cómodo y seguro. Puntualidad, atención personalizada y paradas según su necesidad.</p>
          </div>
        </div>
      </div>
      <div class="modal-footer justify-content-between">
        <small class="text-muted">Reservas y disponibilidad vía WhatsApp.</small>
        <a href="https://wa.me/18098895003?text=Hola%2C%20quiero%20reservar%20un%20traslado%20desde%20Las%20Terrenas%20hasta%20Puerto%20Plata." class="btn btn-success">Reservar vía WhatsApp</a>
      </div>
    </div>
  </div>
</div>

                    </div>
                </div>
                
            </div>
        {/* </div> */}
        {/* <!-- Room End --> */}
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


        <div style={{ height: '50px', backgroundColor: '#f8f9fa' }}></div>
                    <div class="elfsight-app-5841fa61-2d8d-4b73-8871-d29d6ee35e27" data-elfsight-app-lazy></div>
                    <a href="#" class="btn btn-lg btn-lg-square border-0 back-to-top" style={{ backgroundColor: '#1ABC9C', color: 'white' }}>
    <i class="fa fa-arrow-up"></i>
</a>
        {/* <!-- Footer Start --> */}
       <div class="container-fluid  text-light footer wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: '#2C3E50' }}>
            <div class="container pb-5">
                <div class="row g-5">
               <div class="col-md-6 col-lg-4">
    <div class=" rounded p-4" style={{ backgroundColor: '#1ABC9C' }}>
        <a href="index.html"><h1 class="text-white text-uppercase mb-3">GR TRANSFER</h1></a>
       <p class="text-white mb-0">
    Bienvenido a <span class="fw-bold text-dark">GR TRANSFER</span>, tu puerta de entrada a experiencias inolvidables. Descubre traslados seguros, tours personalizados y la comodidad que transforma cada viaje en una aventura.
</p>

    </div>
</div>

                    <div class="col-md-6 col-lg-3">
                        <h6 class="section-title text-start text-primary text-uppercase mb-4">Contacto</h6>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Calle 27 de febrero No.25 las terrenas</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+809-889-5003</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>Grtransfer24@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="row gy-5 g-4">
                            {/* <!-- <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <a class="btn btn-link" href="">About Us</a>
                                <a class="btn btn-link" href="">Contact Us</a>
                                <a class="btn btn-link" href="">Privacy Policy</a>
                                <a class="btn btn-link" href="">Terms & Condition</a>
                                <a class="btn btn-link" href="">Support</a>
                            </div> --> */}
                            <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Servicios</h6>
                                <a class="btn btn-link" href="">recogida en el aeropuerto</a>
                                <a class="btn btn-link" href="">recogida en casa/hotel</a>
                                <a class="btn btn-link" href="">chofer personalizados</a>
                                <a class="btn btn-link" href="">traslado a puntos turísticos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">GR TRANSFER</a>, All Right Reserved.
                        </div>
                        <div class="col-md-6 text-center me-auto">
                            <div class="footer-menu">
                                <span class="fw-bold" style={{ fontSize: '20px' }}>Creada por: </span> <a class="border-bottom" style={{ fontSize: '20px' }} href="https://portafolio-g.netlify.app/">Gerald Luciano</a>
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

export default Destinos