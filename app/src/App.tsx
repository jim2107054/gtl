import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import DietDetails from '@/pages/DietDetails';
import TestingDetails from '@/pages/TestingDetails';
import Brands from '@/pages/Brands';
import Concerns from '@/pages/Concerns';
import Production from '@/pages/Production';
import FactoryTour from '@/pages/FactoryTour';
import About from '@/pages/About';
import History from '@/pages/History';
import Leadership from '@/pages/Leadership';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import MarketCapture from '@/pages/MarketCapture';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/products/diet-details" element={<DietDetails />} />
          <Route path="/products/testing-details" element={<TestingDetails />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/concerns" element={<Concerns />} />
          <Route path="/production" element={<Production />} />
          <Route path="/factory-tour" element={<FactoryTour />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/market-capture" element={<MarketCapture />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
