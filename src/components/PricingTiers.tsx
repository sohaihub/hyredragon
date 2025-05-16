
import React, { useEffect, useRef } from 'react';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FeatureComparisonTable from './FeatureComparisonTable';
import { cn } from '@/lib/utils';

interface PricingFeature {
  text: string;
  starter: string;
  basic: string;
  standard: string;
  professional: string;
  premium: string;
  category?: boolean;
  isHighlighted?: boolean;
}

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
          ? 'border-2 border-[#E2FF55] bg-[#E2FF55]/5 relative transform scale-105 shadow-2xl'
          : 'border border-gray-800 bg-[#080822]/70'
      } p-6 flex flex-col h-full hover-lift transition-all duration-300`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E2FF55] text-[#080820] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
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

const EnterpriseSolution: React.FC = () => {
  return (
    <div className="mt-16 rounded-xl border border-[#E2FF55] bg-[#080822]/70 p-8">
      <h2 className="text-2xl font-bold text-white text-center mb-8">Enterprise Solution</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
          <p className="text-gray-400 text-sm">Custom solution for large organizations</p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-4 w-4" />
            </div>
            <span className="ml-2 text-sm text-gray-200">Unlimited usage</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-4 w-4" />
            </div>
            <span className="ml-2 text-sm text-gray-200">Dedicated customer success team</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-4 w-4" />
            </div>
            <span className="ml-2 text-sm text-gray-200">Custom AI model fine-tuning</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-4 w-4" />
            </div>
            <span className="ml-2 text-sm text-gray-200">Custom integrations</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-4 w-4" />
            </div>
            <span className="ml-2 text-sm text-gray-200">Priority 24/7 support</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-4 w-4" />
            </div>
            <span className="ml-2 text-sm text-gray-200">SLA guarantees</span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8">
        <p className="text-white text-lg mb-4 md:mb-0">Custom pricing based on your needs</p>
        <Link to="/contact">
          <Button className="bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/90 px-8">
            Contact Sales
          </Button>
        </Link>
      </div>
    </div>
  );
};

const PricingTiers: React.FC = () => {
  // Define plan color classes
  const planColorClasses = {
    starter: 'text-[#E2FF55]',
    basic: 'text-[#E2FF55]',
    standard: 'text-[#E2FF55]',
    professional: 'text-[#E2FF55]',
    premium: 'text-[#E2FF55]',
  };

  // Define pricing tiers based on the image
  const tiers = [
    { 
      name: 'Starter', 
      description: '10 hours @ ₹1,000/hour', 
      price: '₹10,000', 
      perHour: '9hr+ 1hr free proctoring',
      features: [
        'Detailed dashboard',
        'Custom assessment',
        'AI generated feedback report',
        'AI proctoring system',
        'Coding platform',
        '10 interviews'
      ],
      buttonText: 'Choose Plan',
      colorClass: planColorClasses.starter 
    },
    { 
      name: 'Basic', 
      description: '20 hours @ ₹1,000/hour', 
      price: '₹20,000', 
      perHour: '18hr+ 2hr free proctoring',
      features: [
        'Detailed dashboard',
        'Custom assessment',
        'AI generated feedback report',
        'AI proctoring system',
        'Coding platform',
        '20 interviews'
      ],
      buttonText: 'Choose Plan',
      colorClass: planColorClasses.basic
    },
    { 
      name: 'Standard', 
      description: '30 hours @ ₹1,000/hour', 
      price: '₹30,000', 
      perHour: '27hr+ 3hr free proctoring',
      features: [
        'Detailed dashboard',
        'Custom assessment',
        'AI generated feedback report',
        'AI proctoring system',
        'Coding platform',
        '30 interviews'
      ],
      buttonText: 'Choose Plan',
      highlighted: true,
      colorClass: planColorClasses.standard
    },
    { 
      name: 'Professional', 
      description: '40 hours @ ₹1,000/hour', 
      price: '₹40,000', 
      perHour: '36hr+ 4hr free proctoring',
      features: [
        'Detailed dashboard',
        'Custom assessment',
        'AI generated feedback report',
        'AI proctoring system',
        'Coding platform',
        '40 interviews'
      ],
      buttonText: 'Choose Plan',
      colorClass: planColorClasses.professional
    },
    { 
      name: 'Premium', 
      description: '50 hours @ ₹1,000/hour', 
      price: '₹50,000', 
      perHour: '45hr+ 5hr free proctoring',
      features: [
        'Detailed dashboard',
        'Custom assessment',
        'AI generated feedback report',
        'AI proctoring system',
        'Coding platform',
        '50 interviews'
      ],
      buttonText: 'Choose Plan',
      colorClass: planColorClasses.premium
    },
  ];

  return (
    <div className="space-y-14 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Choose the plan that's right for your recruitment needs
      </h2>

      {/* Tiers Cards - New Design based on image */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tiers.map((tier, i) => (
          <PricingTier key={i} {...tier} />
        ))}
      </div>

      {/* Enterprise Solution */}
      <EnterpriseSolution />
      
      {/* Feature Comparison Table - Replaces Key Features Section */}
      <div id="feature-comparison">
        <FeatureComparisonTable />
      </div>
    </div>
  );
};

export default PricingTiers;
