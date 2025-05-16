
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PricingCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const PricingCTA: React.FC<PricingCTAProps> = ({ 
  title = "Ready To Get Started?",
  description = "Sign up today and receive our exclusive early adopter benefits. No credit card required.",
  buttonText = "Explore Pricing",
  buttonLink = "/pricing"
}) => {
  return (
    <div className="rounded-lg bg-[#0F103E] border border-[#E2FF55]/10 p-6 overflow-hidden relative">
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h2>
        <p className="text-gray-300 mb-6 max-w-md">{description}</p>
        <Link to={buttonLink}>
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-8 rounded-full text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] hover:scale-105"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
      
      {/* Enhanced subtle background effect with animation */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#E2FF55]/5 to-transparent -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default PricingCTA;
