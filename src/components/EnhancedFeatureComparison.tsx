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
  return (
    <div className="mb-7 animate-fade-in">
      <h3 className="text-xl font-bold mb-4 text-white bg-gradient-to-r from-[#0F103E] to-transparent border-b border-[#3D3D5C]/30 pb-2 pl-3">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="py-2 w-1/3 md:w-2/5 text-white text-base bg-[#080820] sticky left-0">Feature</th>
              <th className="py-2 text-center text-white">Starter<br/>(10k)</th>
              <th className="py-2 text-center text-white">Basic<br/>(20k)</th>
              <th className="py-2 text-center text-white">Standard<br/>(30k)</th>
              <th className="py-2 text-center text-white">Pro<br/>(40k)</th>
              <th className="py-2 text-center text-white">Premium<br/>(50k)</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr 
                key={index} 
                className="border-b border-[#3D3D5C]/20 hover:bg-[#0F103E]/20 transition-all"
              >
                <td className={cn(
                  "py-3 text-white sticky left-0 bg-[#080820]",
                  feature.comingSoon && "opacity-80"
                )}>
                  {feature.name}
                  {feature.comingSoon && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 bg-[#7B78FF]/90 text-white rounded-full inline-block align-middle animate-subtle-pulse">
                      Coming Soon
                    </span>
                  )}
                </td>
                <td className="py-3 text-center">
                  {typeof feature.starter === 'boolean' ? (
                    feature.starter ? 
                      <Check className="h-5 w-5 text-[#7B78FF] mx-auto" /> : 
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#7B78FF]">{feature.starter}</span>
                  )}
                </td>
                <td className="py-3 text-center">
                  {typeof feature.basic === 'boolean' ? (
                    feature.basic ? 
                      <Check className="h-5 w-5 text-[#7B78FF] mx-auto" /> : 
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#7B78FF]">{feature.basic}</span>
                  )}
                </td>
                <td className="py-3 text-center">
                  {typeof feature.standard === 'boolean' ? (
                    feature.standard ? 
                      <Check className="h-5 w-5 text-[#7B78FF] mx-auto" /> : 
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#7B78FF]">{feature.standard}</span>
                  )}
                </td>
                <td className="py-3 text-center">
                  {typeof feature.professional === 'boolean' ? (
                    feature.professional ? 
                      <Check className="h-5 w-5 text-[#7B78FF] mx-auto" /> : 
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#7B78FF]">{feature.professional}</span>
                  )}
                </td>
                <td className="py-3 text-center">
                  {typeof feature.premium === 'boolean' ? (
                    feature.premium ? 
                      <Check className="h-5 w-5 text-[#7B78FF] mx-auto" /> : 
                      <X className="h-5 w-5 text-gray-500 mx-auto" />
                  ) : (
                    <span className="text-[#7B78FF]">{feature.premium}</span>
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
    <section className="py-10 md:py-14 px-4 relative">
      {/* Subtle animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#7B78FF]/3 blur-3xl animate-pulse-light"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-[#7B78FF]/3 blur-3xl animate-pulse-light" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div 
          className={`max-w-6xl mx-auto transition-all duration-800 ease-premium pricing-card ${
            animateTable ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-pricing="true"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Choose Your <span className="text-[#7B78FF]">Plan</span>
          </h2>
          
          <div className="border border-[#3D3D5C]/30 rounded-lg overflow-hidden bg-[#080820]/90 shadow-xl backdrop-blur-sm">
            <div className="p-6 md:p-7 bg-gradient-to-r from-[#0F103E]/40 to-[#080820]/60">
              <div className="bg-[#091030]/40 p-5 rounded-md border border-[#3D3D5C]/20 shadow-inner mb-7 transition-all duration-400 ease-premium hover:border-[#3D3D5C]/40">
                <p className="text-left text-base md:text-lg text-white/80 font-normal">
                  Only HyreDragon combines <span className="text-[#7B78FF] font-medium">MCQ, coding, and video interviews</span> — with built-in proctoring and real-time AI analytics. <span className="text-[#7B78FF] font-medium">One tool. Total coverage.</span>
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
              
              <div className="mt-8 flex justify-center">
                <Link to="/request-demo">
                  <Button className="bg-gradient-to-r from-[#7B78FF] to-[#6A67EE] text-white hover:bg-[#7B78FF]/90 px-7 py-5 text-base font-medium rounded-md flex items-center gap-2 group relative overflow-hidden">
                    <span className="relative z-10">Request a Demo</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
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
