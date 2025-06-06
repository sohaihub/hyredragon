import React, { useRef } from 'react';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FeatureComparisonTable from './FeatureComparisonTable';

interface PricingTierProps {
  name: string;
  description: string;
  price: string;
  perHour: string;
  features: string[];
  buttonText?: string;
  buttonUrl?: string;
  colorClass?: string;
  badgeText?: string; 
  highlighted?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  description,
  price,
  perHour,
  features,
  buttonText = 'Choose Plan',
  buttonUrl = '/contact',
  colorClass = 'text-[#E2FF55]',
  badgeText,
  highlighted = false,
}) => {
  const tierRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={tierRef}
      className={`relative rounded-xl border bg-[#080822]/70 backdrop-blur-sm p-6 flex flex-col h-full hover-lift transition-all duration-300
        ${highlighted ? 'border-[#E2FF55] shadow-2xl scale-105 z-10' : 'border-gray-800'}
      `}
      style={{ overflow: 'visible' }} // Ensure overflow is visible for badge
    >
      {badgeText && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 bg-[#E2FF55] text-[#080820] text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg z-20 whitespace-nowrap">
          {badgeText}
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
            className={`w-full py-5 bg-white/10 text-white hover:bg-white/20 ${highlighted ? 'border-2 border-[#E2FF55] font-bold' : ''}`}
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
    <div className="mt-16 rounded-xl border border-[#E2FF55] bg-[#080822]/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Enterprise Solution</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-3xl font-semibold text-white mb-2">Enterprise</h3>
          <p className="text-gray-400 text-lg">Custom solution for large organizations</p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-5 w-5" />
            </div>
            <span className="ml-2 text-base text-gray-200">Unlimited usage</span>
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
        <p className="text-white text-2xl mb-4 md:mb-0">Custom pricing based on your needs</p>
        <Link to="/contact">
          <Button className="bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/90 px-8 py-6 text-lg">
            Contact Sales
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
      description: '10 hours @ ₹1,000/hour',
      price: '₹10,000',
      perHour: '9hr+ 1hr free proctoring',
      features: [
        'Detailed dashboard',
        'Custom assessment',
        'AI generated feedback report',
        'AI proctoring system',
        'Coding platform',
        '10 interviews',
      ],
      buttonText: 'Choose Plan',
      colorClass: 'text-[#E2FF55]',
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
        '20 interviews',
      ],
      buttonText: 'Choose Plan',
      colorClass: 'text-[#E2FF55]',
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
        '30 interviews',
      ],
      buttonText: 'Choose Plan',
      colorClass: 'text-[#E2FF55]',
      badgeText: 'Most Popular',
      highlighted: true,
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
        '40 interviews',
      ],
      buttonText: 'Choose Plan',
      colorClass: 'text-[#E2FF55]',
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
        '50 interviews',
      ],
      buttonText: 'Choose Plan',
      colorClass: 'text-[#E2FF55]',
    },
  ];

  return (
    <div className="space-y-14 max-w-7xl mx-auto pt-10" style={{ overflow: 'visible' }}>
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Choose the plan that's right for your recruitment needs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4" style={{ overflow: 'visible' }}>
        {tiers.map((tier, i) => (
          <PricingTier key={i} {...tier} />
        ))}
      </div>

      <EnterpriseSolution />

      <div id="feature-comparison" className="glass-effect rounded-xl p-6 mt-12">
        <FeatureComparisonTable />
      </div>
      
      {/* Plan overview section after feature comparison table */}
      <div className="mt-16 py-12 bg-gradient-to-b from-[#080822]/80 to-[#0A0A29]/80 rounded-xl border border-gray-800 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Ready to <span className="text-[#E2FF55]">Get Started?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center p-6 bg-[#080822]/70 rounded-xl border border-gray-800 hover:border-[#E2FF55]/30 transition-all">
              <h3 className="text-xl font-bold text-[#E2FF55] mb-2">Starter & Basic</h3>
              <p className="text-gray-300 mb-4">Perfect for small teams and startups just beginning to scale hiring.</p>
              <p className="text-white text-2xl font-bold mb-4">₹10K - ₹20K</p>
              <Link to="/contact">
                <Button className="bg-white/10 text-white hover:bg-white/20 w-full">Choose Plan</Button>
              </Link>
            </div>
            
            <div className="text-center p-6 bg-[#080822]/70 rounded-xl border border-[#E2FF55] shadow-2xl scale-105 z-10 transition-all relative" style={{ overflow: 'visible' }}>
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 bg-[#E2FF55] text-[#080820] text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg z-20 whitespace-nowrap">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-[#E2FF55] mb-2">Standard</h3>
              <p className="text-gray-300 mb-4">Ideal for growing companies with regular hiring needs.</p>
              <p className="text-white text-2xl font-bold mb-4">₹30,000</p>
              <Link to="/contact">
                <Button className="bg-white/10 text-white hover:bg-white/20 border-2 border-[#E2FF55] font-bold w-full">Choose Plan</Button>
              </Link>
            </div>
            
            <div className="text-center p-6 bg-[#080822]/70 rounded-xl border border-gray-800 hover:border-[#E2FF55]/30 transition-all">
              <h3 className="text-xl font-bold text-[#E2FF55] mb-2">Professional & Premium</h3>
              <p className="text-gray-300 mb-4">For established companies with high-volume hiring requirements.</p>
              <p className="text-white text-2xl font-bold mb-4">₹40K - ₹50K</p>
              <Link to="/contact">
                <Button className="bg-white/10 text-white hover:bg-white/20 w-full">Choose Plan</Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-6">Need a custom solution? Our enterprise plan is tailored to your specific requirements.</p>
            <Link to="/contact">
              <Button className="bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/90 px-8 py-2 text-lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTiers;