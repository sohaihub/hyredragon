import React, { useEffect } from 'react';
import Header from '@/components/Header';
import PricingHero from '@/components/PricingHero';
import PricingFAQs from '@/components/PricingFAQs';
import Footer from '@/components/Footer';
import PricingFeatureList from '@/components/PricingFeatureList';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index: React.FC = () => {
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2FF55]/20 to-[#FF9F5A]/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#E2FF55]/10 to-[#7B78FF]/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-[#7B78FF]/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <Header />
      <main className="flex-grow pt-20 relative z-10">
        {/* Only include PricingHero and PricingFAQs */}
        <div className="space-y-10 md:space-y-14 pb-16">
          <PricingHero />
          <PricingFeatureList />
          <PricingFAQs />
          
          {/* New CTA section based on image 5 */}
          <section className="max-w-5xl mx-auto px-4 py-10">
            <div className="rounded-lg bg-[#0F103E] border border-[#E2FF55]/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to revolutionize your hiring?</h2>
                <p className="text-gray-300">Join the companies that have transformed their recruitment process with HyreDragon.</p>
              </div>
              <div className="mt-6 md:mt-0">
                <Link to="/request-demo">
                  <Button className="bg-[#E2FF55] hover:bg-[#E2FF55]/90 text-[#0A0A29] px-6 py-6 rounded-full font-medium text-lg flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      
      {/* Add the scroll to top button positioned away from chatbot */}
      <div className="fixed bottom-8 right-20 z-40">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Index;
