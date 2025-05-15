
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AIProducts from './pages/AIProducts';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import RequestDemo from './pages/RequestDemo';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import Index from './pages/Index';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Security from './pages/Security';
import Blog from './pages/Blog';
import GeminiChatbot from './components/GeminiChatbot';
import ScrollToTopButton from './components/ScrollToTopButton';

// Add custom cursor styles
const CustomCursorStyles = () => {
  useEffect(() => {
    const addCustomCursor = () => {
      const style = document.createElement('style');
      style.innerHTML = `
        body {
          cursor: default;
        }
        
        a, button, [role="button"], label[for], select, input[type="submit"], input[type="image"], input[type="button"], input[type="reset"], input[type="checkbox"], input[type="radio"] {
          cursor: pointer;
        }
        
        .hover-effect {
          position: fixed;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          pointer-events: none;
          background-color: rgba(226, 255, 85, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s, background-color 0.2s;
          z-index: 9999;
          mix-blend-mode: difference;
          box-shadow: 0 0 10px rgba(226, 255, 85, 0.7), 0 0 20px rgba(226, 255, 85, 0.5);
        }
        
        a:hover ~ .hover-effect,
        button:hover ~ .hover-effect,
        [role="button"]:hover ~ .hover-effect {
          width: 50px;
          height: 50px;
          background-color: rgba(226, 255, 85, 0.4);
          box-shadow: 0 0 15px rgba(226, 255, 85, 0.8), 0 0 30px rgba(226, 255, 85, 0.6);
        }
      `;
      document.head.appendChild(style);
      
      const hoverEffect = document.createElement('div');
      hoverEffect.className = 'hover-effect';
      document.body.appendChild(hoverEffect);
      
      document.addEventListener('mousemove', (e) => {
        hoverEffect.style.left = e.clientX + 'px';
        hoverEffect.style.top = e.clientY + 'px';
      });
    };
    
    addCustomCursor();
    
    return () => {
      const hoverEffect = document.querySelector('.hover-effect');
      if (hoverEffect) {
        hoverEffect.remove();
      }
    };
  }, []);
  
  return null;
};

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
    
    // Add login link redirection
    const setupLoginRedirect = () => {
      const loginLinks = document.querySelectorAll('a[href="/login"]');
      
      loginLinks.forEach(link => {
        link.setAttribute('href', 'https://hyrdragon.digitaldiffuse.in/recruiter/login');
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      });
    };
    
    // Setup login redirects
    setTimeout(setupLoginRedirect, 1000);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursorStyles />
      <MoneyFallEffect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-products" element={<AIProducts />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/security" element={<Security />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
      <div className="fixed z-40 bottom-8 left-8">
        <ScrollToTopButton />
      </div>
      <GeminiChatbot />
    </Router>
  );
};

export default App;
