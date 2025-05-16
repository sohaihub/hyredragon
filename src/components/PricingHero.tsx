
import React from 'react';
import PricingTiers from './PricingTiers';

const PricingHero = () => {
  return (
    <div className="pt-4 relative">
      {/* Background effects */}
      <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#E2FF55]/10 to-[#FF9F5A]/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-[#7B78FF]/10 to-[#E2FF55]/5 blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8 glassmorphism bg-[#080822]/20 backdrop-blur-sm py-8 px-4 rounded-2xl max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          </p>
        </div>
        
        <PricingTiers />
      </div>
    </div>
  );
};

export default PricingHero;
