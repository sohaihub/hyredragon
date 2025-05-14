
import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTierProps {
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  features: PricingFeature[];
  highlighted?: boolean;
  buttonText?: string;
  buttonUrl?: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  description,
  price,
  priceDetail,
  features,
  highlighted = false,
  buttonText = "Start free trial",
  buttonUrl = "/request-demo"
}) => {
  return (
    <div
      className={`rounded-xl border ${
        highlighted
          ? 'border-[#E2FF55] bg-[#E2FF55]/5'
          : 'border-gray-800 bg-[#080822]/70'
      } p-6 shadow-lg flex flex-col h-full relative`}
    >
      {highlighted && (
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#E2FF55] text-[#080820] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
      </div>

      <div className="mt-4 mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="ml-1 text-gray-400 text-sm">{priceDetail}</span>
        </div>
      </div>

      <ul className="mt-2 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className={`flex-shrink-0 p-0.5 rounded-full ${
              feature.included ? 'text-[#E2FF55]' : 'text-gray-600'
            }`}>
              <CheckIcon className="h-4 w-4" />
            </div>
            <span
              className={`ml-2 text-sm ${
                feature.included ? 'text-gray-200' : 'text-gray-500'
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link to={buttonUrl} className="w-full">
          <Button
            className={`w-full ${
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

const PricingTiers: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses just getting started.',
      price: '$99',
      priceDetail: '/month',
      features: [
        { text: 'Basic AI candidate matching', included: true },
        { text: 'Up to 10 active job postings', included: true },
        { text: 'Resume parsing and storage', included: true },
        { text: '24/7 email support', included: true },
        { text: 'Standard analytics & reporting', included: true },
        { text: 'Automated skill assessments', included: false },
        { text: 'Custom interview templates', included: false },
        { text: 'ATS integration', included: false },
        { text: 'Dedicated account manager', included: false },
      ],
    },
    {
      name: 'Professional',
      description: 'For growing teams with advanced recruitment needs.',
      price: '$299',
      priceDetail: '/month',
      features: [
        { text: 'Advanced AI candidate matching', included: true },
        { text: 'Up to 25 active job postings', included: true },
        { text: 'Resume parsing and storage', included: true },
        { text: '24/7 priority support', included: true },
        { text: 'Advanced analytics & reporting', included: true },
        { text: 'Automated skill assessments', included: true },
        { text: 'Custom interview templates', included: true },
        { text: 'ATS integration', included: true },
        { text: 'Dedicated account manager', included: false },
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations.',
      price: 'Custom',
      priceDetail: '',
      features: [
        { text: 'Enterprise AI candidate matching', included: true },
        { text: 'Unlimited active job postings', included: true },
        { text: 'Advanced resume parsing and storage', included: true },
        { text: '24/7 priority support with SLA', included: true },
        { text: 'Custom analytics & reporting', included: true },
        { text: 'Advanced skill assessments', included: true },
        { text: 'Custom interview templates', included: true },
        { text: 'Advanced ATS integration', included: true },
        { text: 'Dedicated account manager', included: true },
      ],
      buttonText: 'Contact sales',
      buttonUrl: '/contact',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {tiers.map((tier, i) => (
        <PricingTier key={i} {...tier} />
      ))}
    </div>
  );
};

export default PricingTiers;
