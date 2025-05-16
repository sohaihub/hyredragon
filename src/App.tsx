
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
import Security from './pages/Security';
import Blog from './pages/Blog';
import DragonChatbot from './components/DragonChatbot';
import ScrollToTopButton from './components/ScrollToTopButton';
import { setupCountUpAnimation, setupHighlightAnimations } from './lib/utils';

// Refined subtle cursor component
const SubtleCursor = () => {
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
        target.closest('label[for]') ||
        target.closest('input') ||
        target.closest('textarea');
      
      if (isInteractive) {
        cursor.classList.add('active');
      } else {
        cursor.classList.remove('active');
      }
    };
    
    const createClickEffect = (e: MouseEvent) => {
      const clickEffect = document.createElement('div');
      clickEffect.className = 'neon-click-effect';
      clickEffect.style.left = `${e.clientX}px`;
      clickEffect.style.top = `${e.clientY}px`;
      
      document.body.appendChild(clickEffect);
      
      setTimeout(() => {
        if (clickEffect && clickEffect.parentNode === document.body) {
          document.body.removeChild(clickEffect);
        }
      }, 600);
    };
    
    // Track mouse position for magnetic hover effects
    const trackMousePosition = (e: MouseEvent) => {
      const hoveredBox = (e.target as HTMLElement).closest('.pricing-card') || 
                         (e.target as HTMLElement).closest('.content-box');
      
      if (hoveredBox) {
        const rect = hoveredBox.getBoundingClientRect();
        
        // Calculate distance from center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / 20; // Reduce the effect by dividing
        const deltaY = (e.clientY - centerY) / 20;
        
        // Apply subtle magnetic movement
        (hoveredBox as HTMLElement).style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        
        // Store mouse position for hover glow effect
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        (hoveredBox as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (hoveredBox as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      }
    };
    
    // Reset transform when mouse leaves
    const resetTransform = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      const boxes = document.querySelectorAll('.pricing-card, .content-box');
      
      boxes.forEach(box => {
        if (!box.contains(element)) {
          (box as HTMLElement).style.transform = '';
        }
      });
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousemove', handleInteractiveHover);
    document.addEventListener('mousemove', trackMousePosition);
    document.addEventListener('mouseleave', resetTransform);
    document.addEventListener('click', createClickEffect);
    
    // Initialize hover effects
    const initHoverEffects = () => {
      // Add pricing-card class to pricing elements
      document.querySelectorAll('.pricing-tier, [data-pricing="true"]').forEach(el => {
        if (!el.classList.contains('pricing-card')) {
          el.classList.add('pricing-card');
        }
      });
    };
    
    // Call once and also after a delay to ensure all DOM elements are loaded
    initHoverEffects();
    setTimeout(initHoverEffects, 1000);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousemove', handleInteractiveHover);
      document.removeEventListener('mousemove', trackMousePosition);
      document.removeEventListener('mouseleave', resetTransform);
      document.removeEventListener('click', createClickEffect);
    };
  }, []);

  return (
    <div ref={cursorRef} className="neon-cursor"></div>
  );
};

// Add money falling effect - refined for subtlety
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
      const size = Math.random() * 20 + 16;
      const duration = Math.random() * 2 + 1.5;
      
      particle.style.left = `${posX}px`;
      particle.style.fontSize = `${size}px`;
      particle.style.color = '#7B78FF';
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
    const interval = setInterval(createMoneyParticle, 300);
    
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
    
    // Add staggered fade-in animations
    document.querySelectorAll('section').forEach((section, index) => {
      if (!section.classList.contains('animate-slide-up')) {
        section.classList.add('animate-slide-up');
        section.classList.add('opacity-0');
        (section as HTMLElement).style.animationDelay = `${index * 0.15}s`;
        (section as HTMLElement).style.animationFillMode = 'forwards';
      }
    });
    
    // Add timeline class to recruitment step elements
    document.querySelectorAll('.recruitment-step').forEach((step, index) => {
      step.classList.add('timeline-step');
      
      const connector = document.createElement('div');
      connector.classList.add('timeline-connector');
      step.appendChild(connector);
      
      const circle = step.querySelector('.step-number, .step-circle');
      if (circle) {
        circle.classList.add('timeline-circle');
      }
    });
    
    // Improve spacing
    document.querySelectorAll('section').forEach(section => {
      // Reduce vertical spacing between sections
      if (section.classList.contains('py-16')) {
        section.classList.remove('py-16');
        section.classList.add('py-14');
      } else if (section.classList.contains('py-20')) {
        section.classList.remove('py-20');
        section.classList.add('py-16');
      } else if (section.classList.contains('py-12')) {
        section.classList.remove('py-12');
        section.classList.add('py-10');
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
    
    // Add form input enhancements
    const setupFormEnhancements = () => {
      document.querySelectorAll('input, textarea').forEach(input => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('input-underline');
        
        if (input.parentNode) {
          input.parentNode.insertBefore(wrapper, input);
          wrapper.appendChild(input);
        }
      });
    };
    
    // Enhance form inputs
    setTimeout(setupFormEnhancements, 1000);
    
    // Consistent text alignment
    const alignText = () => {
      // Target only hero titles and section headings that should be left-aligned
      document.querySelectorAll('.text-center').forEach(element => {
        const nodeName = element.nodeName.toLowerCase();
        // Only align left non-heading elements in sections to preserve centered headers
        if (!element.closest('header') && !(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(nodeName))) {
          if (window.innerWidth > 768) { // Only on desktop
            element.classList.remove('text-center');
            element.classList.add('text-left');
          }
        }
      });
    };
    
    setTimeout(alignText, 1500);
    
  }, []);

  return (
    <Router>
      <PageSetup />
      <SubtleCursor />
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
      <div className="fixed z-40 bottom-8 left-8 md:left-12">
        <ScrollToTopButton />
      </div>
      <DragonChatbot />
    </Router>
  );
};

export default App;
