
import React, { useState, useEffect } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Feature {
  name: string;
  starter: boolean | string;
  basic: boolean | string;
  standard: boolean | string;
  professional: boolean | string;
  premium: boolean | string;
  comingSoon?: boolean;
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
    <div className="mb-8 animate-fade-in">
      <h3 className="text-xl font-bold mb-4 text-white bg-gradient-to-r from-[#0F103E] to-transparent border-b border-[#E2FF55]/30 pb-2 pl-3">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="py-2 w-1/3 md:w-2/5 text-white text-lg bg-[#080820] sticky left-0">Feature</th>
              <th className={cn("py-2 text-center text-white", planColors.starter)}>
                <div className="font-bold">Starter</div>
                <div>(10k)</div>
              </th>
              <th className={cn("py-2 text-center text-white", planColors.basic)}>
                <div className="font-bold">Basic</div>
                <div>(20k)</div>
              </th>
              <th className={cn("py-2 text-center text-white", planColors.standard)}>
                <div className="font-bold">Standard</div>
                <div>(30k)</div>
              </th>
              <th className={cn("py-2 text-center text-white", planColors.professional)}>
                <div className="font-bold">Professional</div>
                <div>(40k)</div>
              </th>
              <th className={cn("py-2 text-center text-white", planColors.premium)}>
                <div className="font-bold">Premium</div>
                <div>(50k)</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-800 hover:bg-[#0F103E]/30 transition-all"
              >
                <td className={cn(
                  "py-4 text-white text-lg sticky left-0 bg-[#080820]",
                  feature.comingSoon && "opacity-80"
                )}>
                  {feature.name}
                  {feature.comingSoon && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 bg-[#E2FF55] text-[#0A0A29] rounded-full inline-block align-middle animate-pulse">
                      Coming Soon
                    </span>
                  )}
                </td>
                <td className="py-4 text-center">
                  {typeof feature.starter === 'boolean' ? (
                    feature.starter ? 
                      <Check className="h-6 w-6 text-[#E2FF55] mx-auto" /> : 
                      <X className="h-6 w-6 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#E2FF55]">{feature.starter}</span>
                  )}
                </td>
                <td className="py-4 text-center">
                  {typeof feature.basic === 'boolean' ? (
                    feature.basic ? 
                      <Check className="h-6 w-6 text-[#E2FF55] mx-auto" /> : 
                      <X className="h-6 w-6 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#E2FF55]">{feature.basic}</span>
                  )}
                </td>
                <td className="py-4 text-center">
                  {typeof feature.standard === 'boolean' ? (
                    feature.standard ? 
                      <Check className="h-6 w-6 text-[#E2FF55] mx-auto" /> : 
                      <X className="h-6 w-6 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#E2FF55]">{feature.standard}</span>
                  )}
                </td>
                <td className="py-4 text-center">
                  {typeof feature.professional === 'boolean' ? (
                    feature.professional ? 
                      <Check className="h-6 w-6 text-[#E2FF55] mx-auto" /> : 
                      <X className="h-6 w-6 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#E2FF55]">{feature.professional}</span>
                  )}
                </td>
                <td className="py-4 text-center">
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

const EnhancedFeatureComparison: React.FC = () => {
  const [animateTable, setAnimateTable] = useState(false);

  useEffect(() => {
    // Start the animation after component mount
    setAnimateTable(true);
  }, []);

  const basicFeatures: Feature[] = [
    { name: 'Job Posting', starter: '10', basic: '20', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { name: 'Interviews', starter: '10', basic: '20', standard: '30', professional: '40', premium: '50' },
    { name: 'Email Notifications', starter: true, basic: true, standard: true, professional: true, premium: true },
    { name: 'Candidate Tracking', starter: true, basic: true, standard: true, professional: true, premium: true },
    { name: 'Pre-Screened Talent Pool', starter: false, basic: false, standard: false, professional: true, premium: true, comingSoon: true }
  ];

  const aiFeatures: Feature[] = [
    { name: 'AI Candidate Matching', starter: '100', basic: '200', standard: '300', professional: '400', premium: '500' },
    { name: 'AI Resume Parsing', starter: '100', basic: '100', standard: '100', professional: '100', premium: '100' },
    { name: 'Question Gen (Gemini)', starter: '100-150', basic: '150-200', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { name: 'Question Gen (OpenAI)', starter: '10-20', basic: '20-30', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { name: 'Proctoring Sessions', starter: '1', basic: '2', standard: '3', professional: '4', premium: '5' },
    { name: 'AI Feedback Reports', starter: true, basic: true, standard: true, professional: true, premium: true },
    { name: 'AI-Powered Skill Mapping', starter: false, basic: false, standard: true, professional: true, premium: true, comingSoon: true }
  ];

  const analyticsFeatures: Feature[] = [
    { name: 'Analytics Dashboard', starter: 'Basic', basic: 'Advanced', standard: 'Premium', professional: 'Premium', premium: 'Premium+' },
    { name: 'Basic Reporting', starter: true, basic: true, standard: true, professional: true, premium: true },
    { name: 'Advanced Reporting', starter: false, basic: true, standard: true, professional: true, premium: true },
    { name: 'Custom Reports', starter: false, basic: false, standard: false, professional: true, premium: true, comingSoon: true }
  ];

  const supportFeatures: Feature[] = [
    { name: 'Email Support', starter: true, basic: true, standard: true, professional: true, premium: true },
    { name: 'Phone Support', starter: '1hr', basic: '2hr', standard: 'Yes', professional: 'Yes', premium: 'Yes' },
    { name: 'Chat Support', starter: true, basic: true, standard: true, professional: true, premium: true },
    { name: 'Training Sessions', starter: true, basic: true, standard: true, professional: true, premium: true },
    { name: 'Support Hours', starter: '9AM-5PM', basic: '9AM-5PM', standard: '9AM-5PM', professional: '9AM-5PM', premium: '24/7' },
    { name: 'Dedicated Account Manager', starter: false, basic: false, standard: false, professional: false, premium: true }
  ];

  return (
    <section id="feature-comparison" className="py-12 md:py-16 px-4 relative">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#E2FF55]/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-[#7B78FF]/5 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div 
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            animateTable ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
            Choose Your <span className="text-[#E2FF55]">Plan</span>
          </h2>
          
          <div className="border-2 border-[#0F103E] rounded-xl overflow-hidden bg-[#080820]/70 shadow-xl backdrop-blur-sm">
            <div className="p-6 md:p-8 bg-gradient-to-r from-[#0F103E]/50 to-[#080820]/70">
              <div className="bg-[#091030]/60 p-6 rounded-xl border border-[#E2FF55]/20 shadow-inner mb-8 transform hover:scale-[1.01] transition-all duration-300">
                <p className="text-center text-lg md:text-xl text-white/80 font-medium">
                  Only HyreDragon combines <span className="text-[#E2FF55]/90 font-semibold">MCQ, coding, and video interviews</span> — with built-in proctoring and real-time AI analytics. <span className="text-[#E2FF55]/90 font-semibold">One tool. Total coverage.</span>
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
                  <Button className="bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/80 px-8 py-6 text-lg font-medium rounded-md flex items-center gap-2 group relative overflow-hidden">
                    <span className="relative z-10">Request a Demo</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 ease-out"></span>
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

export default EnhancedFeatureComparison;
