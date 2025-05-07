
import React from 'react';
import Header from '@/components/Header';
import PricingHero from '@/components/PricingHero';
import PricingTiers from '@/components/PricingTiers';
import PricingCTA from '@/components/PricingCTA';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background stars/dots */}
      <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute top-40 right-40 w-2 h-2 bg-white rounded-full"></div>
      <div className="absolute bottom-60 left-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
      <div className="absolute top-96 right-1/3 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-white rounded-full"></div>
      <div className="absolute bottom-1/3 right-24 w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
      
      {/* Background circular gradients */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E2FF55]/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      
      <Header />
      <main className="flex-grow">
        <PricingHero />
        <PricingTiers />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
