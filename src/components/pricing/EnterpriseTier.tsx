
import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EnterpriseTier: React.FC = () => {
  return (
    <div className="mt-16 rounded-xl border border-[#E2FF55] bg-[#080822]/70 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Enterprise Solution</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Enterprise</h3>
          <p className="text-gray-300 text-lg">Custom solution for large organizations</p>
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
              <CheckIcon className="h-5 w-5" />
            </div>
            <span className="ml-2 text-base text-gray-200">Dedicated customer success team</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-5 w-5" />
            </div>
            <span className="ml-2 text-base text-gray-200">Custom AI model fine-tuning</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-5 w-5" />
            </div>
            <span className="ml-2 text-base text-gray-200">Custom integrations</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-5 w-5" />
            </div>
            <span className="ml-2 text-base text-gray-200">Priority 24/7 support</span>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 p-0.5 rounded-full text-[#E2FF55]">
              <CheckIcon className="h-5 w-5" />
            </div>
            <span className="ml-2 text-base text-gray-200">SLA guarantees</span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8">
        <p className="text-white text-xl mb-4 md:mb-0">Custom pricing based on your needs</p>
        <Link to="/contact">
          <Button className="bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/90 px-8 py-6 text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(226,255,85,0.4)] hover:scale-105">
            Contact Sales
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EnterpriseTier;
