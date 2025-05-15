
// PricingTiers.tsx
import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
}) => {
  return (
    <div
      className={`rounded-xl ${
        highlighted
          ? 'border-2 border-[#E2FF55] bg-[#E2FF55]/5 relative transform scale-105 shadow-2xl'
          : 'border border-gray-800 bg-[#080822]/70'
      } p-6 flex flex-col h-full`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E2FF55] text-[#080820] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}

      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>

      <div className="text-center mb-6 pb-4 border-b border-gray-800">
        <div className="text-[#E2FF55] text-4xl font-bold">{price}</div>
        <div className="text-gray-400 text-sm mt-1">{perHour}</div>
      </div>

      <div className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="h-5 w-5 text-[#E2FF55] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-white text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
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
      buttonText: 'Choose Plan' 
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
      buttonText: 'Choose Plan' 
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
      highlighted: true 
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
      buttonText: 'Choose Plan' 
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
      buttonText: 'Choose Plan' 
    },
  ];

  // Define all features for the table comparison
  const features: PricingFeature[] = [
    { text: '  Basic', starter: '', basic: '', standard: '', professional: '', premium: '', category: true, isHighlighted: true },
    { text: '  Job Posting', starter: '10', basic: '20', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: '  Email Notification(Recruiter & Candidate)', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: '  Candidate Tracking', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    
    { text: '  AI', starter: '', basic: '', standard: '', professional: '', premium: '', category: true, isHighlighted: true },
    { text: '  Match Making', starter: '100', basic: '200', standard: '300', professional: '400', premium: '500' },
    { text: '  Resume Analyzer', starter: '100', basic: '100', standard: '100', professional: '100', premium: '100' },
    { text: '  Question Generation(Gemini)', starter: '100-150', basic: '150-200', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: '  Question Generation(OpenAI)', starter: '10-20', basic: '20-30', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: '  Proctoring', starter: '1', basic: '2', standard: '3', professional: '4', premium: '5' },
    { text: '  Feedback Report', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    
    { text: '  Analytics & Report', starter: '', basic: '', standard: '', professional: '', premium: '', category: true, isHighlighted: true },
    { text: '  Analytic Dashboard', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: '  Basic Reporting', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: '  Advance Reporting', starter: 'No', basic: 'No', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    
    { text: '  Support & Training', starter: '', basic: '', standard: '', professional: '', premium: '', category: true, isHighlighted: true },
    { text: '  E-mail', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: '  Phone Support', starter: '1hr', basic: '2hr', standard: '3hr', professional: 'Yes', premium: 'Yes' },
    { text: '  Chat Support', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: '  Training Session', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { text: '  Ticketing System', starter: '9AM-5PM', basic: '9AM-5PM', standard: '9AM-5PM', professional: '9AM-5PM', premium: '9AM-5PM' },
  ];

  return (
    <div className="space-y-16 max-w-7xl mx-auto">
      {/* Tiers Cards - New Design based on image */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tiers.map((tier, i) => (
          <PricingTier key={i} {...tier} />
        ))}
      </div>

      <div className="bg-[#091030]/60 p-6 rounded-xl border border-[#E2FF55]/20 shadow-inner">
        <p className="text-center text-lg md:text-xl text-white/80 font-medium">
          HyreDragon's Edge: <span className="text-[#E2FF55]/90">Slay the Competition</span>
        </p>
        <p className="text-center text-base text-white/70 mt-2">
          Only HyreDragon combines MCQ, coding, and video interviews — with built-in proctoring and real-time AI analytics. One tool. Total coverage.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="border border-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-4">Traditional Platforms</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <span className="text-red-400 mr-2">•</span>
                Multiple tools required
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-red-400 mr-2">•</span>
                Complex integrations
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-red-400 mr-2">•</span>
                Higher total cost
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-red-400 mr-2">•</span>
                Inconsistent user experience
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-4">HyreDragon Advantage</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <CheckIcon className="h-4 w-4 text-[#E2FF55] mr-2" />
                All-in-one platform
              </li>
              <li className="flex items-center text-gray-300">
                <CheckIcon className="h-4 w-4 text-[#E2FF55] mr-2" />
                Seamless experience
              </li>
              <li className="flex items-center text-gray-300">
                <CheckIcon className="h-4 w-4 text-[#E2FF55] mr-2" />
                Cost-effective solution
              </li>
              <li className="flex items-center text-gray-300">
                <CheckIcon className="h-4 w-4 text-[#E2FF55] mr-2" />
                Unified data analytics
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/request-demo">
            <Button className="bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/80 px-6 py-2">
              See It In Action
            </Button>
          </Link>
        </div>
      </div>

      <EnterpriseSolution />
    </div>
  );
};

export default PricingTiers;
