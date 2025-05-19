import React, { useEffect, useRef } from 'react';
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
import About from './pages/About';
import Security from './pages/Security';
import Blog from './pages/Blog';
import DragonChatbot from './components/DragonChatbot';
import Admin from './pages/Admin';
import { setupCountUpAnimation, setupHighlightAnimations } from './lib/utils';

// Custom cursor component - dragon theme with flame effect
const DragonCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    
    if (!cursor) return;
    
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    const handleInteractiveHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input[type="submit"]') ||
        target.closest('input[type="button"]') ||
        target.closest('label[for]');
      
      if (isInteractive) {
        cursor.classList.add('active');
      } else {
        cursor.classList.remove('active');
      }
    };
    
    const createClickEffect = (e: MouseEvent) => {
      // Create flame effect on click
      const flameEffect = document.createElement('div');
      flameEffect.className = 'flame-click-effect';
      flameEffect.style.left = `${e.clientX}px`;
      flameEffect.style.top = `${e.clientY}px`;
      
      document.body.appendChild(flameEffect);
      
      setTimeout(() => {
        if (flameEffect && flameEffect.parentNode === document.body) {
          document.body.removeChild(flameEffect);
        }
      }, 800);
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousemove', handleInteractiveHover);
    document.addEventListener('click', createClickEffect);
    
    // Add dragon cursor style
    const style = document.createElement('style');
    style.innerHTML = `
      .dragon-cursor {
        position: fixed;
        width: 24px;
        height: 24px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23E2FF55' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2c.5 0 2 2 2 3.5c0 2.5-2 3-2 9.5c0 1.5 1 2 1 3.5c0 1-.5 2-2 2s-2-1-2-2c0-1.5 1-2 1-3.5c0-6.5-2-7-2-9.5C8 4 11.5 2 12 2z'/%3E%3C/svg%3E");
        background-size: cover;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: transform 0.15s ease-out, filter 0.3s ease;
      }
      
      .dragon-cursor.active {
        transform: translate(-50%, -50%) scale(1.5);
        filter: drop-shadow(0 0 8px rgba(226, 255, 85, 0.8));
      }
      
      .flame-click-effect {
        position: fixed;
        width: 40px;
        height: 40px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23E2FF55' stroke='%23E2FF55' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3s.55-1.38 1-2.5c1.48 1.05 2.5 2.62 2.5 4.5 0 2.5-2 4.5-4.5 4.5S4.5 15.5 4.5 13c0-1.38.5-2.5 1.25-3.5C6.5 10.5 8.5 11 8.5 14.5Z'/%3E%3C/svg%3E");
        background-size: cover;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        animation: flameClickEffect 0.8s ease-out forwards;
      }
      
      @keyframes flameClickEffect {
        0% {
          transform: translate(-50%, -50%) scale(0.5);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(2.5);
          opacity: 0;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousemove', handleInteractiveHover);
      document.removeEventListener('click', createClickEffect);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div ref={cursorRef} className="dragon-cursor transition-transform duration-150"></div>
  );
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

// Page transitions and animation setup
const PageSetup = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Set up animations on page load
    window.scrollTo(0, 0);
    
    // Initialize counting animations
    const countObserver = setupCountUpAnimation();
    
    // Initialize highlight animations
    setupHighlightAnimations();
    
    // Setup parallax effects
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', String(scrollY));
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Apply content-box class to appropriate elements
    const contentSelectors = [
      '.bg-\\[\\#080822\\]', // Escaped selector for .bg-[#080822]
      '.bg-\\[\\#0F103E\\]', // Escaped selector for .bg-[#0F103E]
      '.bg-\\[\\#0A0A29\\]', // Escaped selector for .bg-[#0A0A29]
      '.card', 
      '.rounded-xl', 
      '.rounded-lg',
      'section > div > div'
    ];
    
    contentSelectors.forEach(selector => {
      try {
        document.querySelectorAll(selector).forEach(el => {
          if (!el.classList.contains('content-box')) {
            el.classList.add('content-box');
          }
        });
      } catch (error) {
        console.warn(`Selector error for "${selector}":`, error);
      }
    });
    
    // Add fade-in animations
    document.querySelectorAll('section').forEach((section, index) => {
      if (!section.classList.contains('animate-fade-in')) {
        section.classList.add('animate-fade-in');
        (section as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      }
    });
    
    // Cleanup
    return () => {
      if (countObserver) {
        countObserver.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
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
      <PageSetup />
      <DragonCursor />
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
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        {/* Add the Admin route inside the Routes component */}
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
      <DragonChatbot />
    </Router>
  );
};

export default App;
