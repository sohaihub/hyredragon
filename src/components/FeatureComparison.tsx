
import React from 'react';
import { Check, X } from 'lucide-react';

interface Feature {
  name: string;
  basic: boolean;
  standard: boolean;
  professional: boolean;
  premium: boolean;
}

interface FeatureCategoryProps {
  title: string;
  features: Feature[];
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ title, features }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-800 pb-2">{title}</h3>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="py-2 w-1/3 md:w-2/5 text-gray-400 text-sm">Feature</th>
            <th className="py-2 text-center text-gray-400 text-sm">Basic</th>
            <th className="py-2 text-center text-gray-400 text-sm">Standard</th>
            <th className="py-2 text-center text-gray-400 text-sm">Professional</th>
            <th className="py-2 text-center text-gray-400 text-sm">Premium</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="border-b border-gray-800">
              <td className="py-3 text-white">{feature.name}</td>
              <td className="py-3 text-center">
                {feature.basic ? 
                  <Check className="h-5 w-5 text-[#E2FF55] mx-auto" /> : 
                  <X className="h-5 w-5 text-gray-500 mx-auto" />
                }
              </td>
              <td className="py-3 text-center">
                {feature.standard ? 
                  <Check className="h-5 w-5 text-[#E2FF55] mx-auto" /> : 
                  <X className="h-5 w-5 text-gray-500 mx-auto" />
                }
              </td>
              <td className="py-3 text-center">
                {feature.professional ? 
                  <Check className="h-5 w-5 text-[#E2FF55] mx-auto" /> : 
                  <X className="h-5 w-5 text-gray-500 mx-auto" />
                }
              </td>
              <td className="py-3 text-center">
                {feature.premium ? 
                  <Check className="h-5 w-5 text-[#E2FF55] mx-auto" /> : 
                  <X className="h-5 w-5 text-gray-500 mx-auto" />
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const FeatureComparison: React.FC = () => {
  const basicFeatures: Feature[] = [
    { name: 'Job Posting', basic: true, standard: true, professional: true, premium: true },
    { name: 'Candidate Database', basic: true, standard: true, professional: true, premium: true },
    { name: 'Email Notifications', basic: true, standard: true, professional: true, premium: true },
    { name: 'Basic Job Templates', basic: true, standard: true, professional: true, premium: true },
    { name: 'Candidate Tracking', basic: true, standard: true, professional: true, premium: true },
  ];

  const aiFeatures: Feature[] = [
    { name: 'AI Candidate Matching', basic: true, standard: true, professional: true, premium: true },
    { name: 'AI Resume Parsing', basic: false, standard: true, professional: true, premium: true },
    { name: 'AI Job Description Generation', basic: false, standard: false, professional: true, premium: true },
    { name: 'AI Interview Question Generation', basic: false, standard: false, professional: true, premium: true },
    { name: 'Custom AI Model Training', basic: false, standard: false, professional: false, premium: true },
  ];

  const analyticsFeatures: Feature[] = [
    { name: 'Basic Analytics Dashboard', basic: true, standard: true, professional: true, premium: true },
    { name: 'Advanced Reporting', basic: false, standard: true, professional: true, premium: true },
    { name: 'Custom Reports', basic: false, standard: false, professional: true, premium: true },
    { name: 'Predictive Analytics', basic: false, standard: false, professional: false, premium: true },
    { name: 'Hiring Pattern Insights', basic: false, standard: false, professional: true, premium: true },
  ];

  const supportFeatures: Feature[] = [
    { name: 'Email Support', basic: true, standard: true, professional: true, premium: true },
    { name: 'Chat Support', basic: false, standard: true, professional: true, premium: true },
    { name: 'Phone Support', basic: false, standard: false, professional: true, premium: true },
    { name: 'Dedicated Account Manager', basic: false, standard: false, professional: false, premium: true },
    { name: 'Training Sessions', basic: false, standard: false, professional: true, premium: true },
  ];

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Feature <span className="text-[#E2FF55]">Comparison</span>
          </h2>
          
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <FeatureCategory title="Basic Features" features={basicFeatures} />
              <FeatureCategory title="AI-Powered Features" features={aiFeatures} />
              <FeatureCategory title="Analytics & Reporting" features={analyticsFeatures} />
              <FeatureCategory title="Support & Training" features={supportFeatures} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
