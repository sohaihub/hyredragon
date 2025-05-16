
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
      } p-6 flex flex-col h-full hover-lift transition-all duration-300`}
    >
      {highlighted && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#E2FF55] text-[#080820] text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full shadow-md">
          POPULAR
        </div>
      )}

      <div className="text-center mb-4">
        <h3 className={`text-2xl font-bold ${colorClass}`}>{name}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>

      <div className="text-center mb-5 pb-3 border-b border-gray-800">
        <div className={`${colorClass} text-4xl font-bold`}>{price}</div>
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
            className={`w-full py-5 ${
              highlighted
                ? 'bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/90'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PricingTier;
