
import React from 'react';

const PricingHero: React.FC = () => {
  return (
    <section className="text-center py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background neon circles */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full neon-circle opacity-20 animate-pulse-light"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full neon-circle opacity-10 animate-pulse-light"></div>
      
      <div className="container mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
          Pricing Plans to Hire Smarter
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto">
          Choose the plan that fits your hiring needs
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
