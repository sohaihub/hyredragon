
import React from 'react';
import PricingTiers from './PricingTiers';

const PricingHero = () => {
  return (
    <div className="px-4 py-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Choose the plan that's right for your recruitment needs
        </p>
      </div>
      
      <PricingTiers />
    </div>
  );
};

export default PricingHero;
