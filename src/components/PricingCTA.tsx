
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background neon circles */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Have questions?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Our team is ready to help you find the perfect solution for your recruitment needs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent transition-colors rounded-full"
              >
                Contact Support
              </Button>
            </Link>
            <Link to="/request-demo">
              <Button 
                className="bg-[#7B78FF] text-white hover:bg-[#7B78FF]/90 rounded-full flex items-center gap-2"
              >
                Request a demo <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
