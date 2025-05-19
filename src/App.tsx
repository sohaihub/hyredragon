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

// Custom cursor component - modified for dragon effect
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
    
    const createFlameEffect = (e: MouseEvent) => {
      const flame = document.createElement('div');
      flame.className = 'flame-click-effect';
      flame.style.left = `${e.clientX}px`;
      flame.style.top = `${e.clientY}px`;
      
      document.body.appendChild(flame);
      
      setTimeout(() => {
        if (flame && flame.parentNode === document.body) {
          document.body.removeChild(flame);
        }
      }, 800);
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousemove', handleInteractiveHover);
    document.addEventListener('click', createFlameEffect);
    
    // Add dragon cursor style
    const style = document.createElement('style');
    style.innerHTML = `
      .dragon-cursor {
        position: fixed;
        width: 30px;
        height: 30px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='%23E2FF55' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'/%3E%3Cpath d='M12 16c1.5-1.5 2-5 2-5s3.5-1 3.5-3.5c0-1-1-2.5-3-2.5 0 0-1 0-2 .5 0-1 .5-2 .5-2 0 0-2.5 1-4.5 3-2 2-2.5 3-2.5 6 0 4 3 4 3 4 .5-.5 2-1 3-1 1.5 0 2.5 1 2.5 1'/%3E%3C/svg%3E");
        background-size: contain;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: transform 0.15s ease-out;
      }
      
      .dragon-cursor.active {
        transform: translate(-50%, -50%) scale(1.5);
        filter: brightness(1.5);
      }
      
      .flame-click-effect {
        position: fixed;
        width: 30px;
        height: 30px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='%23FF9F5A' stroke='%23E2FF55' stroke-width='1'%3E%3Cpath d='M12 2c1 0 4 4 4 9-3-3-4-3-4-3 0 6 4 7 4 7-2 4-7 4-8 4s-5-2-5-7c0-3 1-5 3-7 1-1 1.5-2 1-3 0 0 1.5 1 2 3 .5-3 2-3 3-3z'/%3E%3C/svg%3E");
        background-size: contain;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        animation: flameEffect 0.8s ease-out forwards;
      }
      
      @keyframes flameEffect {
        0% {
          transform: translate(-50%, -50%) scale(0.5);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(2);
          opacity: 0;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousemove', handleInteractiveHover);
      document.removeEventListener('click', createFlameEffect);
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
