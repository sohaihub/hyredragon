
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Feature {
  name: string;
  basic: boolean | string;
  standard: boolean | string;
  professional: boolean | string;
  premium: boolean | string;
}

interface FeatureCategoryProps {
  title: string;
  features: Feature[];
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ title, features }) => {
  // Define highlight colors for each plan
  const planColors = {
    starter: 'text-[#E2FF55] bg-[#E2FF55]/10',
    basic: 'text-[#8B5CF6] bg-[#8B5CF6]/10',
    standard: 'text-[#0EA5E9] bg-[#0EA5E9]/10',
    professional: 'text-[#F97316] bg-[#F97316]/10',
    premium: 'text-[#E2FF55] bg-[#E2FF55]/10',
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-800 pb-2">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-4 w-1/2 md:w-[32%] text-white text-lg">Feature</th>
              <th className={cn("py-2 px-4 text-center text-white text-lg", planColors.starter)}>
                Starter<br/>(10k)
              </th>
              <th className={cn("py-2 px-4 text-center text-white text-lg", planColors.basic)}>
                Basic<br/>(20k)
              </th>
              <th className={cn("py-2 px-4 text-center text-white text-lg", planColors.standard)}>
                Standard<br/>(30k)
              </th>
              <th className={cn("py-2 px-4 text-center text-white text-lg", planColors.professional)}>
                Professional<br/>(40k)
              </th>
              <th className={cn("py-2 px-4 text-center text-white text-lg", planColors.premium)}>
                Premium<br/>(50k)
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-colors duration-200">
                <td className="py-4 px-4 text-white text-lg">{feature.name}</td>
                <td className="py-4 px-4 text-center">
                  {typeof feature.basic === 'boolean' ? (
                    feature.basic ? 
                      <Check className="h-6 w-6 text-[#E2FF55] mx-auto" /> : 
                      <X className="h-6 w-6 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#E2FF55]">{feature.basic}</span>
                  )}
                </td>
                <td className="py-4 px-4 text-center">
                  {typeof feature.standard === 'boolean' ? (
                    feature.standard ? 
                      <Check className="h-6 w-6 text-[#E2FF55] mx-auto" /> : 
                      <X className="h-6 w-6 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#E2FF55]">{feature.standard}</span>
                  )}
                </td>
                <td className="py-4 px-4 text-center">
                  {typeof feature.professional === 'boolean' ? (
                    feature.professional ? 
                      <Check className="h-6 w-6 text-[#E2FF55] mx-auto" /> : 
                      <X className="h-6 w-6 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#E2FF55]">{feature.professional}</span>
                  )}
                </td>
                <td className="py-4 px-4 text-center">
                  {typeof feature.premium === 'boolean' ? (
                    feature.premium ? 
                      <Check className="h-6 w-6 text-[#E2FF55] mx-auto" /> : 
                      <X className="h-6 w-6 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#E2FF55]">{feature.premium}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FeatureComparison: React.FC = () => {
  const basicFeatures: Feature[] = [
    { name: 'Job Posting', basic: '10', standard: '20', professional: 'Yes', premium: 'Yes' },
    { name: 'Interviews', basic: '10', standard: '20', professional: '30', premium: '50' },
    { name: 'Email Notifications', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { name: 'Candidate Tracking', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
  ];

  const aiFeatures: Feature[] = [
    { name: 'AI Candidate Matching', basic: '100', standard: '200', professional: '300', premium: '500' },
    { name: 'AI Resume Parsing', basic: '100', standard: '100', professional: '100', premium: '100' },
    { name: 'Question Gen (Gemini)', basic: '100-150', standard: '150-200', professional: 'Yes', premium: 'Yes' },
    { name: 'Question Gen (OpenAI)', basic: '10-20', standard: '20-30', professional: 'Yes', premium: 'Yes' },
    { name: 'Proctoring Sessions', basic: '1', standard: '2', professional: '4', premium: '5' },
    { name: 'AI Feedback Reports', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
  ];

  const analyticsFeatures: Feature[] = [
    { name: 'Analytics Dashboard', basic: 'Basic', standard: 'Advanced', professional: 'Premium', premium: 'Premium+' },
    { name: 'Basic Reporting', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { name: 'Advanced Reporting', basic: 'No', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
  ];

  const supportFeatures: Feature[] = [
    { name: 'Email Support', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { name: 'Phone Support', basic: '1hr', standard: '2hr', professional: 'Yes', premium: 'Yes' },
    { name: 'Chat Support', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { name: 'Training Sessions', basic: 'Yes', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { name: 'Support Hours', basic: '9AM-5PM', standard: '9AM-5PM', professional: '9AM-5PM', premium: '24/7' },
  ];

  return (
    <section id="feature-comparison" className="py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
            Feature <span className="text-[#E2FF55]">Comparison</span>
          </h2>
          
          <div className="border-2 border-[#0F103E] rounded-xl overflow-hidden bg-[#080820]/70 shadow-xl">
            <div className="p-6 md:p-8 bg-gradient-to-r from-[#0F103E]/50 to-[#080820]/70">
              <div className="bg-[#091030]/60 p-6 rounded-xl border border-[#E2FF55]/20 shadow-inner mb-8">
                <p className="text-center text-lg md:text-xl text-white/80 font-medium">
                  Only HyreDragon combines <span className="text-[#E2FF55]/90">MCQ, coding, and video interviews</span> — with built-in proctoring and real-time AI analytics. <span className="text-[#E2FF55]/90 font-semibold">One tool. Total coverage.</span>
                </p>
              </div>
            
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full">
                  <FeatureCategory title="Basic Features" features={basicFeatures} />
                  <FeatureCategory title="AI-Powered Features" features={aiFeatures} />
                  <FeatureCategory title="Analytics & Reporting" features={analyticsFeatures} />
                  <FeatureCategory title="Support & Training" features={supportFeatures} />
                </div>
              </div>
              
              <div className="mt-10 flex justify-center">
                <Link to="/request-demo">
                  <Button className="bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/80 px-8 py-2 text-lg font-medium rounded-md">
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
