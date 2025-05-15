
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const features = [
    {
      category: 'Basic',
      items: [
        { name: 'Job Posting', starter: '10', basic: '20', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
        { name: 'Email Notification (Recruiter & Candidate)', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
        { name: 'Candidate Tracking', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' }
      ]
    },
    {
      category: 'AI',
      items: [
        { name: 'Match Making', starter: '100', basic: '200', standard: '300', professional: '400', premium: '500' },
        { name: 'Resume Analyzer', starter: '100', basic: '100', standard: '100', professional: '100', premium: '100' },
        { name: 'Question Generation (Gemini)', starter: '100-150', basic: '150-200', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
        { name: 'Question Generation (OpenAI)', starter: '10-20', basic: '20-30', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
        { name: 'Proctoring', starter: '1', basic: '2', standard: '3', professional: '4', premium: '5' },
        { name: 'Feedback Report', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' }
      ]
    },
    {
      category: 'Analytics & Report',
      items: [
        { name: 'Analytic Dashboard', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
        { name: 'Basic Reporting', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
        { name: 'Advanced Reporting', starter: 'No', basic: 'No', standard: 'Yes', professional: 'Yes', premium: 'Yes' }
      ]
    },
    {
      category: 'Support & Training',
      items: [
        { name: 'Email Support', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
        { name: 'Phone Support', starter: '1hr', basic: '2hr', standard: '3hr', professional: 'Yes', premium: 'Yes' },
        { name: 'Chat Support', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
        { name: 'Training Session', starter: 'Yes', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
        { name: 'Ticketing System', starter: '9AM-5PM', basic: '9AM-5PM', standard: '9AM-5PM', professional: '9AM-5PM', premium: '9AM-5PM' }
      ]
    }
  ];

  const renderValue = (value: string) => {
    if (value === 'Yes') {
      return <Check className="h-5 w-5 text-[#E2FF55] mx-auto" />;
    } else if (value === 'No') {
      return <X className="h-5 w-5 text-red-400 mx-auto" />;
    } else {
      return value;
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white">
          HyreDragon's <span className="text-[#E2FF55]">Edge</span>: Slay the Competition
        </h2>
        <p className="text-center text-gray-300 mb-12">
          See how HyreDragon stacks up against other platforms in the realm of hiring
        </p>
        
        <div className="overflow-x-auto">
          <div className="min-w-[800px] bg-[#0A0A29]/90 border border-[#E2FF55]/30 rounded-xl shadow-xl shadow-[#E2FF55]/5 p-6">
            {features.map((featureGroup, groupIndex) => (
              <div key={groupIndex} className="mb-12 last:mb-0">
                <h3 className="text-xl font-bold mb-6 text-[#E2FF55] border-b border-[#E2FF55]/20 pb-2">
                  {featureGroup.category}
                </h3>
                <div className="grid grid-cols-6 gap-4 mb-1">
                  <div className="col-span-2 text-white font-semibold">Feature</div>
                  <div className="text-white font-semibold text-center">Starter</div>
                  <div className="text-white font-semibold text-center">Basic</div>
                  <div className="text-white font-semibold text-center">Standard</div>
                  <div className="text-white font-semibold text-center">Pro/Premium</div>
                </div>
                
                {featureGroup.items.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className={`grid grid-cols-6 gap-4 py-3 ${
                      featureIndex % 2 === 0 ? 'bg-[#0F103E]/30' : ''
                    } rounded-lg`}
                  >
                    <div className="col-span-2 text-white flex items-center">
                      {feature.name}
                    </div>
                    <div className="text-center text-gray-300">{renderValue(feature.starter)}</div>
                    <div className="text-center text-gray-300">{renderValue(feature.basic)}</div>
                    <div className="text-center text-gray-300">{renderValue(feature.standard)}</div>
                    <div className="text-center text-gray-300">{renderValue(feature.professional)}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-[#0F103E]/80 rounded-lg border-2 border-[#E2FF55] shadow-[0_0_30px_rgba(226,255,85,0.2)]">
          <p className="text-xl md:text-2xl font-bold text-white text-center">
            Only HyreDragon combines <span className="text-[#E2FF55] animate-pulse">MCQ, coding, and video interviews</span> — with built-in proctoring and real-time AI analytics. One tool. Total coverage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
