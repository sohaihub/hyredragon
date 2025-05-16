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
            className="bg-[#E2FF55] hover:bg-[#E2FF55]/90 text-[#0A0A29] px-8 py-6 rounded-full text-lg font-medium shadow-lg"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
      
      {/* Subtle background effect */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#E2FF55]/5 to-transparent -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
    </div>
  );
};

export default PricingCTA;
