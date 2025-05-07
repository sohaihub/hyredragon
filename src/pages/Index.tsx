
import React from 'react';
import Header from '@/components/Header';
import PricingHero from '@/components/PricingHero';
import PricingTiers from '@/components/PricingTiers';
import PricingCTA from '@/components/PricingCTA';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-hyregram-gradient">
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
