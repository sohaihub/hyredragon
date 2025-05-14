
import React from 'react';
import Header from '@/components/Header';
import PricingHero from '@/components/PricingHero';
import PricingTiers from '@/components/PricingTiers';
import PricingCTA from '@/components/PricingCTA';
import PricingFAQs from '@/components/PricingFAQs';
import FeatureComparison from '@/components/FeatureComparison';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background elements - removed white dots */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E2FF55]/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>

      <Header />
      <main className="flex-grow pt-20">
        {/* Reduced space between heading and pricing tiers */}
        <div className="space-y-8 md:space-y-12">
          <PricingHero />
          <PricingTiers />
          <FeatureComparison />
          <PricingFAQs />
          <PricingCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
