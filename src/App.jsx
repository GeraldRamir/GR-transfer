import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Flotilllas from './pages/Flotilllas';
import Destinos from './pages/Destinos';
import Contacto from './pages/Contacto';
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
      </Routes>
    </Router>
  );
}

export default App;
