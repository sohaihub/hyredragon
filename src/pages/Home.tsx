import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BarChart3, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetricsShowcase from '@/components/MetricsShowcase';
import RecruitmentSteps from '@/components/RecruitmentSteps';
import ComparisonSection from '@/components/ComparisonSection';
import PricingPackagesSection from '@/components/PricingPackagesSection';

const Home: React.FC = () => {
  // News headlines
  const newsItems = [
    { tag: 'NEW', tagColor: 'bg-[#E2FF55] text-[#0A0A29]', content: 'HyreDragon releases advanced AI matching algorithm' },
    { tag: 'REPORT', tagColor: 'bg-[#7B78FF] text-white', content: 'Companies using AI recruitment see 65% faster time-to-hire' },
    { tag: 'INSIGHT', tagColor: 'bg-white/20 text-white', content: 'Remote hiring challenges solved with intelligent recruitment platforms' },
    { tag: 'UPDATE', tagColor: 'bg-[#E2FF55] text-[#0A0A29]', content: 'New features added to HyreDragon platform - Try them today!' },
    { tag: 'WEBINAR', tagColor: 'bg-[#7B78FF] text-white', content: 'Join our upcoming webinar on AI-powered recruitment strategies' },
    { tag: 'OFFER', tagColor: 'bg-[#E2FF55] text-[#0A0A29]', content: 'First 50 customers get 25% discount and priority onboarding!' }
  ];
  
  // News ticker animation
  const [newsPosition, setNewsPosition] = useState(0);
  
  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setNewsPosition(prev => (prev + 1) % newsItems.length);
    }, 5000);
    
    return () => clearInterval(tickerInterval);
  }, [newsItems.length]);

  // Scroll-up button visibility
  const [isScrollUpVisible, setIsScrollUpVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollUpVisible(window.scrollY > 300); // Show button when scrolled down 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add scroll animation effect
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
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2FF55]/15 to-[#E2FF55]/5 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#7B78FF]/15 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <Header />
      
      <main className="flex-grow relative z-10 pt-24">
        {/* Hero Section */}
        <section className="pt-8 pb-16 md:pt-16 md:pb-24 px-4 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              {/* Existing content */}
            </div>
          </div>
        </section>
        
        {/* Metrics Showcase */}
        <MetricsShowcase />
      
        {/* Recruitment Steps */}
        <section className="py-16 md:py-24 px-4 relative">
          <div className="container mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Smarter Hiring in <span className="text-[#E2FF55]">4 Steps</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <RecruitmentSteps />
            </div>
          </div>
        </section>
        
        {/* Comparison Section */}
        <ComparisonSection />
        
        {/* Features */}
        <section className="py-16 md:py-24 px-4 relative">
          {/* Existing content */}
        </section>
        
        {/* Pricing Packages Section */}
        <PricingPackagesSection />
        
        {/* Call To Action */}
        <section className="py-16 md:py-24 px-4 relative">
          {/* Existing content */}
        </section>
      </main>
      
      {isScrollUpVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-40 bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 px-6 py-4 rounded-full flex items-center gap-2 group relative overflow-hidden"
        >
          <span className="relative z-10">Back to Top</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 ease-out"></span>
        </Button>
      )}
      
      <Footer />
    </div>
  );
};

export default Home;
