
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import PricingHero from '@/components/PricingHero';
import PricingFAQs from '@/components/PricingFAQs';
import Footer from '@/components/Footer';
import PricingFeatureList from '@/components/PricingFeatureList';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index: React.FC = () => {
  const location = useLocation();
  
  // Add animation on scroll effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    // Add magnetic effect to pricing tiers
    const addMagneticEffect = () => {
      const pricingCards = document.querySelectorAll('.hover-lift');
      
      if (pricingCards.length) {
        pricingCards.forEach(card => {
          card.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = (card as HTMLElement).getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX * 6; // Increased from 4 to 6px for stronger effect
            const deltaY = (y - centerY) / centerY * 6; // Increased from 4 to 6px for stronger effect
            
            (card as HTMLElement).style.transform = `perspective(1000px) translateY(-8px) rotateX(${deltaY}deg) rotateY(${-deltaX}deg) scale(1.03)`; // Increased scale for better effect
            (card as HTMLElement).style.transition = 'transform 0.1s ease-out'; // Smoother transition
            (card as HTMLElement).style.boxShadow = `0 15px 30px rgba(0,0,0,0.2), 0 0 20px rgba(226,255,85,0.15)`;
          });
          
          card.addEventListener('mouseleave', () => {
            (card as HTMLElement).style.transform = 'perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
            (card as HTMLElement).style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
            (card as HTMLElement).style.boxShadow = 'none';
          });
        });
      }
    };
    
    // Add magnetic effect after a short delay to ensure content is rendered
    setTimeout(addMagneticEffect, 500);
    
    // Handle direct navigation to feature comparison section
    if (location.hash === '#feature-comparison') {
      setTimeout(() => {
        const featureSection = document.getElementById('feature-comparison');
        if (featureSection) {
          featureSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }

    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
      
      // Remove event listeners on cleanup
      const pricingCards = document.querySelectorAll('.hover-lift');
      pricingCards.forEach(card => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2FF55]/20 to-[#FF9F5A]/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#E2FF55]/10 to-[#7B78FF]/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-[#7B78FF]/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Add more subtle background effects */}
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-[#E2FF55]/5 blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-[#FF9F5A]/5 blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <Header />
      <main className="flex-grow relative z-10">
        {/* Only include PricingHero and PricingFAQs */}
        <div className="space-y-10 md:space-y-14 pb-16">
          <PricingHero />
          <div className="backdrop-blur-sm bg-[#080822]/30 rounded-xl p-6 mx-4 md:mx-10 shadow-xl">
            <PricingFeatureList />
          </div>
          <div className="backdrop-blur-sm bg-[#080822]/30 rounded-xl p-6 mx-4 md:mx-10 shadow-xl">
            <PricingFAQs />
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Add the scroll to top button positioned on the left side */}
      <div className="fixed bottom-8 left-8 z-40">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Index;
