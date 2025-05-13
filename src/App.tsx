import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import AIProducts from './pages/AIProducts';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import Resources from './pages/Resources';
import RequestDemo from './pages/RequestDemo';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/ai-products" element={<AIProducts />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        {/* Placeholder routes */}
        <Route path="/pricing" element={<ComingSoon />} />
        <Route path="/enterprise" element={<ComingSoon />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/careers" element={<ComingSoon />} />
        <Route path="/terms" element={<ComingSoon />} />
        <Route path="/privacy" element={<ComingSoon />} />
        <Route path="/security" element={<ComingSoon />} />
        {/* Catch-all */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
};

export default App;