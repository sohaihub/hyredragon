
import React from 'react';

const PricingHero: React.FC = () => {
  return (
    <section className="text-center py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background neon circles */}
      <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      
      {/* Small decorative stars */}
      <div className="absolute top-20 left-[20%] w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute top-40 right-[30%] w-2 h-2 bg-white rounded-full"></div>
      <div className="absolute bottom-20 left-[10%] w-1.5 h-1.5 bg-white rounded-full"></div>
      
      <div className="container mx-auto relative z-10 max-w-5xl">
        <span className="inline-block bg-[#E2FF55]/20 text-[#E2FF55] text-sm font-medium px-4 py-1 rounded-full mb-6">
          Pricing
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose the plan that works best for your recruitment needs. All plans are priced at 
          ₹1,000 per hour and include all features.
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
