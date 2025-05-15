
// PricingTiers.tsx
import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PricingFeature {
  text: string;
  starter: string | boolean;
  basic: string | boolean;
  standard: string | boolean;
  professional: string | boolean;
  premium: string | boolean;
  category?: string;
  isHighlighted?: boolean;
}

interface PricingTierProps {
  name: string;
  description: string;
  price: string;
  duration: string;
  buttonText?: string;
  buttonUrl?: string;
  highlighted?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  description,
  price,
  duration,
  buttonText = 'Choose Plan',
  buttonUrl = '/request-demo',
  highlighted = false,
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
        </div>
        <div className="text-sm text-gray-400 mt-1">{duration}</div>
      </div>

      <div className="mt-auto">
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

// Feature display component
const FeatureItem = ({ feature }: { feature: PricingFeature }) => {
  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckIcon className="h-5 w-5 text-[#E2FF55]" />
      ) : (
        <XIcon className="h-5 w-5 text-red-400" />
      );
    }
    return <span className="text-[#E2FF55] font-medium">{value}</span>;
  };

  return (
    <tr className={`border-b border-gray-800 ${feature.isHighlighted ? 'bg-[#0F103E]/40' : ''}`}>
      <td className={`py-4 pl-4 text-base ${feature.category ? 'font-semibold text-[#E2FF55]' : 'text-white'}`}>
        {feature.text}
      </td>
      <td className="py-4 text-center">
        {renderValue(feature.starter)}
      </td>
      <td className="py-4 text-center">
        {renderValue(feature.basic)}
      </td>
      <td className="py-4 text-center">
        {renderValue(feature.standard)}
      </td>
      <td className="py-4 text-center">
        {renderValue(feature.professional)}
      </td>
      <td className="py-4 text-center">
        {renderValue(feature.premium)}
      </td>
    </tr>
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
  // Define pricing tiers
  const tiers = [
    { 
      name: 'Starter', 
      description: 'For small teams starting out', 
      price: '₹10,000', 
      duration: '9hr+ 1hr',
      buttonText: 'Choose Plan' 
    },
    { 
      name: 'Basic', 
      description: 'For growing businesses', 
      price: '₹20,000', 
      duration: '18hr+ 2hr',
      buttonText: 'Choose Plan' 
    },
    { 
      name: 'Standard', 
      description: 'Our most popular plan', 
      price: '₹30,000', 
      duration: '27hr+ 3hr',
      buttonText: 'Choose Plan', 
      highlighted: true 
    },
    { 
      name: 'Professional', 
      description: 'For larger companies', 
      price: '₹40,000', 
      duration: '36hr+ 4hr',
      buttonText: 'Choose Plan' 
    },
    { 
      name: 'Premium', 
      description: 'For enterprise needs', 
      price: '₹50,000', 
      duration: '45hr+ 5hr',
      buttonText: 'Choose Plan' 
    },
  ];

  // Define all features from the image
  const features: PricingFeature[] = [
    { text: 'Basic', starter: '', basic: '', standard: '', professional: '', premium: '', category: true, isHighlighted: true },
    { text: 'Job Posting', starter: '10', basic: '20', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: 'Email Notification(Recruiter & Candidate)', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: 'Candidate Tracking', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    
    { text: 'AI', starter: '', basic: '', standard: '', professional: '', premium: '', category: true, isHighlighted: true },
    { text: 'Match Making', starter: '100', basic: '200', standard: '300', professional: '400', premium: '500' },
    { text: 'Resume Analyzer', starter: '100', basic: '100', standard: '100', professional: '100', premium: '100' },
    { text: 'Question Generation(Gemini)', starter: '100-150', basic: '150-200', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: 'Question Generation(OpenAI)', starter: '10-20', basic: '20-30', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: 'Proctoring', starter: '1', basic: '2', standard: '3', professional: '4', premium: '5' },
    { text: 'Feedback Report', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    
    { text: 'Analytics & Report', starter: '', basic: '', standard: '', professional: '', premium: '', category: true, isHighlighted: true },
    { text: 'Analytic Dashboard', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: 'Basic Reporting', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: 'Advance Reporting', starter: 'No', basic: 'No', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    
    { text: 'Support & Training', starter: '', basic: '', standard: '', professional: '', premium: '', category: true, isHighlighted: true },
    { text: 'E-mail', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: 'Phone Support', starter: '1hr', basic: '2hr', standard: '3hr', professional: 'Yes', premium: 'Yes' },
    { text: 'Chat Support', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: 'Training Session', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: 'Ticketing System', starter: '9AM-5PM', basic: '9AM-5PM', standard: '9AM-5PM', professional: '9AM-5PM', premium: '9AM-5PM' },
  ];

  return (
    <div className="space-y-16 max-w-7xl mx-auto">
      {/* Tiers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {tiers.map((tier, i) => (
          <PricingTier key={i} {...tier} />
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="mt-16 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#0F103E] sticky top-0">
            <tr>
              <th className="py-4 pl-4 text-lg text-white font-bold">Features</th>
              <th className="py-4 text-center text-lg text-white font-bold bg-[#FF9F5A]/80">Starter<br/>(10k)</th>
              <th className="py-4 text-center text-lg text-white font-bold bg-[#FF9F5A]/80">Basic<br/>(20k)</th>
              <th className="py-4 text-center text-lg text-white font-bold bg-[#FF9F5A]/80">Standard<br/>(30k)</th>
              <th className="py-4 text-center text-lg text-white font-bold bg-[#FF9F5A]/80">Professional<br/>(40k)</th>
              <th className="py-4 text-center text-lg text-white font-bold bg-[#FF9F5A]/80">Premium<br/>(50k)</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </tbody>
        </table>
      </div>

      <EnterpriseSolution />
    </div>
  );
};

export default PricingTiers;
