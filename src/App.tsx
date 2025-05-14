
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
import CaseStudies from './pages/CaseStudies';
import Guides from './pages/Guides';
import ChangePassword from './pages/ChangePassword';
import GeminiChatbot from './components/GeminiChatbot';
import ScrollToTopButton from './components/ScrollToTopButton';

// Add money falling effect
const MoneyFallEffect = () => {
  useEffect(() => {
    const createMoneyParticle = () => {
      // Check if user has activated the effect
      const effectActivated = sessionStorage.getItem('moneyEffectActivated');
      if (!effectActivated) return;
      
      const container = document.body;
      const symbols = ['$', '€', '£', '¥'];
      const particle = document.createElement('div');
      particle.className = 'money-particle';
      
      // Random symbol
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      particle.innerText = symbol;
      
      // Random position, size, and animation duration
      const posX = Math.random() * window.innerWidth;
      const size = Math.random() * 30 + 20;
      const duration = Math.random() * 3 + 2;
      
      particle.style.left = `${posX}px`;
      particle.style.fontSize = `${size}px`;
      particle.style.color = '#E2FF55';
      particle.style.animationDuration = `${duration}s`;
      
      container.appendChild(particle);
      
      // Remove after animation completes
      setTimeout(() => {
        if (particle.parentNode === container) {
          container.removeChild(particle);
        }
      }, duration * 1000);
    };
    
    // Create particles at random intervals
    const interval = setInterval(createMoneyParticle, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return null;
};

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  // Initialize the money effect on first render
  useEffect(() => {
    // Only set this if it hasn't been set yet
    if (!sessionStorage.getItem('moneyEffectActivated')) {
      sessionStorage.setItem('moneyEffectActivated', 'false');
    }
    
    // Set up an event listener to activate the effect when a specific button is clicked
    const setupMoneyEffect = () => {
      const moneyTriggers = document.querySelectorAll('[data-trigger-money-effect]');
      
      moneyTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
          sessionStorage.setItem('moneyEffectActivated', 'true');
          setTimeout(() => {
            sessionStorage.setItem('moneyEffectActivated', 'false');
          }, 5000); // Turn off after 5 seconds
        });
      });
    };
    
    // Wait for DOM to be fully loaded
    setTimeout(setupMoneyEffect, 1000);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <MoneyFallEffect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/ai-products" element={<AIProducts />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Index />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/change-password" element={<ChangePassword />} />
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
