import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Flotilllas from './pages/Flotilllas';
import Destinos from './pages/Destinos';
import Contacto from './pages/Contacto';
import Reservas from './pages/Reservas';
import NosotrosAdmin from './pages/NosotrosAdmin';
import Admin from './pages/Admin';
import FlotillasAdmin from './pages/FlotillasAdmin';
import DestinosAdmin from './pages/DestinosAdmin';
import ContactAdmin from './pages/ContactAdmin';
import Dashboard from './pages/Dashboard';
// import About from './pages/About';
// import Room from './pages/Room';
// import Service from './pages/Service';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/flotillas" element={<Flotilllas />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/contacto" element={<Contacto />} /> 
        <Route path="/reserva" element={<Reservas />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/nosotrosAdmin" element={<NosotrosAdmin/>} />
          <Route path="/admin/flotillasAdmin" element={<FlotillasAdmin />} />
          <Route path="/admin/destinosAdmin" element={<DestinosAdmin />} />
          <Route path="/admin/contactoAdmin" element={<ContactAdmin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          {/* Agrega aquí más rutas protegidas */}

      </Routes>
    </Router>
  );
}

export default App;
