
import React from 'react';
import PricingTiers from './PricingTiers';

const PricingHero = () => {
  return (
    <div className="pt-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Choose the plan that's right for your recruitment needs
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Choose the plan that's right for your recruitment needs
        </p>
      </div>
      
      <PricingTiers />
    </div>
  );
};

export default PricingHero;
