
import React from 'react';
import Header from '@/components/Header';
import PricingHero from '@/components/PricingHero';
import PricingFAQs from '@/components/PricingFAQs';
import FeatureComparison from '@/components/FeatureComparison';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A29]">
      {/* Background elements with improved styling */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2FF55]/20 to-[#FF9F5A]/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#E2FF55]/10 to-[#7B78FF]/10 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-[#7B78FF]/10 blur-2xl"></div>

      <Header />
      <main className="flex-grow pt-20 relative z-10">
        {/* Only include PricingHero which already contains PricingTiers */}
        <div className="space-y-12 md:space-y-16 pb-20">
          <PricingHero />
          <FeatureComparison />
          <PricingFAQs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
