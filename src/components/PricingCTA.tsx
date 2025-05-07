
import React from 'react';
import { Button } from '@/components/ui/button';

const PricingCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background neon circles */}
      <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full neon-circle opacity-20 animate-pulse-light"></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full neon-circle opacity-15 animate-pulse-light"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Make Hiring Feel Effortless?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Join thousands of companies that have transformed their recruitment process with Hyregram.
          </p>
          <Button 
            size="lg"
            className="bg-hyregram-neon text-hyregram-dark-bg hover:bg-opacity-90 text-lg px-8 py-6"
          >
            Request a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
