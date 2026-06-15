import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SEO from './components/SEO';
import Home from './pages/Home';
import MiniPlanetPage from './pages/MiniPlanet';
import Tarifas from './pages/Tarifas';
import Calculadora from './pages/Calculadora';
import Contacto from './pages/Contacto';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <SEO />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/miniplanet" element={<MiniPlanetPage />} />
        <Route path="/tarifas" element={<Tarifas />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/miniplanet">
      <AppLayout />
    </BrowserRouter>
  );
}
