
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import PricingHero from '@/components/PricingHero';
import PricingFAQs from '@/components/PricingFAQs';
import Footer from '@/components/Footer';
import ComparisonSection from '@/components/ComparisonSection';
import PricingTiers from '@/components/PricingTiers';
import PricingCTA from '@/components/PricingCTA';

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

    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
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
        <div className="space-y-12 md:space-y-16 pb-20">
          <PricingHero />
          <PricingTiers />
          <ComparisonSection />
          <PricingFAQs />
          <PricingCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
