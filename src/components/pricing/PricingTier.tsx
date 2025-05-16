
import React, { useRef } from 'react';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PricingTierProps {
  name: string;
  description: string;
  price: string;
  perHour: string;
  features: string[];
  buttonText?: string;
  buttonUrl?: string;
  highlighted?: boolean;
  colorClass?: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  description,
  price,
  perHour,
  features,
  buttonText = 'Choose Plan',
  buttonUrl = '/request-demo',
  highlighted = false,
  colorClass = 'text-[#E2FF55]',
}) => {
  const tierRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={tierRef}
      className={`rounded-xl ${
        highlighted
          ? 'border-2 border-[#E2FF55] bg-[#E2FF55]/5 relative transform scale-105 shadow-2xl backdrop-blur-sm'
          : 'border border-gray-800 bg-[#080822]/70 backdrop-blur-sm'
      } p-6 flex flex-col h-full hover-lift transition-all duration-300 will-change-transform hover:shadow-[0_8px_32px_rgba(226,255,85,0.2)]`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E2FF55] text-[#080820] text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full shadow-md animate-pulse">
          POPULAR
        </div>
      )}

      <div className="text-center mb-4 relative">
        <h3 className={`text-2xl font-bold ${colorClass}`}>{name}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
        {highlighted && (
          <div className="absolute -z-10 inset-0 blur-xl bg-[#E2FF55]/10 rounded-full"></div>
        )}
      </div>

      <div className="text-center mb-5 pb-3 border-b border-gray-800 relative">
        <div className={`${colorClass} text-4xl font-bold price-highlight relative inline-block`}>
          {price}
          {/* Add particle effect container */}
          <div className="absolute -inset-4 -z-10"></div>
        </div>
        <div className="text-gray-400 text-sm mt-1">{perHour}</div>
      </div>

      <div className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-white text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <Link to={buttonUrl} className="w-full block">
          <Button
            className={`w-full py-5 transition-all duration-300 ${
              highlighted
                ? 'bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/90 hover:shadow-[0_0_15px_rgba(226,255,85,0.4)] hover:scale-105'
                : 'bg-white/10 text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:translate-y-[-2px]'
            }`}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
      
      {/* Background animated gradient */}
      {highlighted && (
        <div className="absolute -z-10 inset-0 rounded-xl overflow-hidden">
          <div className="absolute top-0 -right-20 w-40 h-40 bg-[#E2FF55]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-10 w-40 h-40 bg-[#E2FF55]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      )}
    </div>
  );
};

export default PricingTier;
