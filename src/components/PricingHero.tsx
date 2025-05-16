
import React from 'react';
import PricingTiers from './PricingTiers';

const PricingHero = () => {
  return (
    <div className="pt-4 relative">
      {/* Enhanced background effects */}
      <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#E2FF55]/10 to-[#FF9F5A]/5 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-[#7B78FF]/10 to-[#E2FF55]/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 left-1/3 w-48 h-48 rounded-full bg-[#7B78FF]/8 blur-3xl animate-subtle-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8 glassmorphism bg-[#080822]/20 backdrop-blur-sm py-8 px-4 rounded-2xl max-w-3xl mx-auto shadow-lg hover:shadow-[0_0_30px_rgba(226,255,85,0.05)] transition-all duration-500">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            <span className="relative">
              Pricing <span className="text-[#E2FF55] animate-subtle-glow">Plans</span>
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E2FF55]/50 to-transparent animate-line-appear"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Choose the plan that's right for your recruitment needs
          </p>
        </div>
        
        <PricingTiers />
      </div>
    </div>
  );
};

export default PricingHero;
