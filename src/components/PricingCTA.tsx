
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PricingCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background neon circles */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Make Hiring Feel Effortless?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Join thousands of companies that have transformed their recruitment process with Hydragon.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="bg-[#7B78FF] text-white hover:bg-[#7B78FF]/90 text-lg px-8 py-6 rounded-full flex items-center gap-2"
            >
              Request a demo <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
