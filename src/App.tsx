
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import AIProducts from './pages/AIProducts';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import Resources from './pages/Resources';
import RequestDemo from './pages/RequestDemo';
import Login from './pages/Login';
import Index from './pages/Index';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Security from './pages/Security';
import GeminiChatbot from './components/GeminiChatbot';
import ScrollToTopButton from './components/ScrollToTopButton';
import Guides from './pages/Guides';
import CaseStudies from './pages/CaseStudies';

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/ai-products" element={<AIProducts />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Index />} />
        <Route path="/enterprise" element={<Contact />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/security" element={<Security />} />
        {/* Catch-all */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
      <GeminiChatbot />
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
