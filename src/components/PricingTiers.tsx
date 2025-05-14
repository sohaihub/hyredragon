
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
}

interface PricingTierProps {
  name: string;
  hours: number;
  hourlyRate: string;
  price: string;
  description?: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  name, 
  hours,
  hourlyRate,
  price, 
  features, 
  isPopular 
}) => {
  return (
    <div 
      className={`bg-[#0A0A29]/60 border rounded-xl p-6 md:p-8 hover:transform hover:translate-y-[-8px] transition-all duration-300 relative h-full flex flex-col
      ${isPopular 
        ? 'border-[#E2FF55]' 
        : 'border-[#7B78FF]/40'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E2FF55] text-[#0A0A29] text-xs font-bold px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      
      <div className="text-center mb-4">
        <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">{name}</h3>
        <p className="text-gray-300 text-sm">{hours} hours @ ₹{hourlyRate}/hour</p>
      </div>

      <div className="mb-6 text-center">
        <span className="text-3xl md:text-4xl font-bold text-white">₹{price}</span>
      </div>
      
      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className={`mr-3 rounded-full p-1 ${isPopular ? 'bg-[#E2FF55] text-[#0A0A29]' : 'bg-[#7B78FF] text-white'}`}>
              <Check className="h-4 w-4" />
            </div>
            <span className="text-gray-200 text-sm">{feature.text}</span>
          </div>
        ))}
      </div>
      
      <Button 
        className={`w-full mt-auto ${isPopular 
          ? 'bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90' 
          : 'bg-[#7B78FF] hover:bg-[#7B78FF]/90 text-white'
        }`}
      >
        Choose Plan
      </Button>
    </div>
  );
};

const PricingTiers: React.FC = () => {
  const starterFeatures = [
    { text: "AI generated feedback report" },
    { text: "AI proctoring system" },
    { text: "Coding platform" },
    { text: "Detailed insights" },
    { text: "AI ATS Analyzer" },
    {text: "AI Match maker" },
    { text: "AI Question generation" },
    { text: "MCQ platform" }    
  ];
  
  const basicFeatures = [
    { text: "Detailed dashboard" },
    { text: "Custom assessment" },
    { text: "AI generated feedback report" },
    { text: "AI proctoring system" },
    { text: "Coding platform" },
    { text: "Detailed insights" },
    { text: "AI ATS Analyzer" },
    { text: "AI Match maker" },
    { text: "AI Question generation"},
    { text: "MCQ platform" },
  ];
  
  const standardFeatures = [
    { text: "Detailed dashboard" },
    { text: "Custom assessment" },
    { text: "AI generated feedback report" },
    { text: "AI proctoring system" },
    { text: "Coding platform" },
    { text: "Detailed insights" },
    { text: "AI ATS Analyzer" },
    { text: "AI Match maker" },
    { text: "AI Question generation"},
    { text: "MCQ platform" },
  ];
  
  const professionalFeatures = [
    { text: "Detailed dashboard" },
    { text: "Custom assessment" },
    { text: "AI generated feedback report" },
    { text: "AI proctoring system" },
    { text: "Coding platform" },
    { text: "Detailed insights" },
    { text: "AI ATS Analyzer" },
    { text: "AI Match maker" },
    { text: "AI Question generation"},
    { text: "MCQ platform" },
  ];
  
  const premiumFeatures = [
    { text: "Detailed dashboard" },
    { text: "Custom assessment" },
    { text: "AI generated feedback report" },
    { text: "AI proctoring system" },
    { text: "Coding platform" },
    { text: "Detailed insights" },
    { text: "AI ATS Analyzer" },
    { text: "AI Match maker" },
    { text: "AI Question generation"},
    { text: "MCQ platform" },
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Hourly Packages</h2>
        <div className="h-[1px] bg-gray-700 w-full max-w-6xl mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            hours={10}
            hourlyRate="1,000"
            price="10000"
            features={starterFeatures}
          />
          
          <PricingTier
            name="Basic"
            hours={20}
            hourlyRate="1,000"
            price="20000"
            features={basicFeatures}
          />
          
          <PricingTier
            name="Standard"
            hours={30}
            hourlyRate="1,000"
            price="30000"
            features={standardFeatures}
            isPopular={true}
          />
          
          <PricingTier
            name="Professional"
            hours={40}
            hourlyRate="1,000"
            price="40000"
            features={professionalFeatures}
          />
          
          <PricingTier
            name="Premium"
            hours={50}
            hourlyRate="1,000"
            price="50000"
            features={premiumFeatures}
          />
        </div>
        
        <div className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Enterprise Solution</h2>
          
          <div className="bg-[#1a237e] rounded-xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <p className="text-gray-300 mb-6">Custom solution for large organizations</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-3 rounded-full p-1 bg-[#E2FF55] text-[#0A0A29]">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-200 text-sm">Everything in Premium plan</span>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-3 rounded-full p-1 bg-[#E2FF55] text-[#0A0A29]">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-200 text-sm">Advanced security features</span>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-3 rounded-full p-1 bg-[#E2FF55] text-[#0A0A29]">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-200 text-sm">Dedicated customer success team</span>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-3 rounded-full p-1 bg-[#E2FF55] text-[#0A0A29]">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-200 text-sm">Service level agreement (SLA)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-3 rounded-full p-1 bg-[#E2FF55] text-[#0A0A29]">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-200 text-sm">Custom AI model fine-tuning</span>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-3 rounded-full p-1 bg-[#E2FF55] text-[#0A0A29]">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-200 text-sm">Custom integrations</span>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-3 rounded-full p-1 bg-[#E2FF55] text-[#0A0A29]">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-200 text-sm">Customized reporting</span>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-3 rounded-full p-1 bg-[#E2FF55] text-[#0A0A29]">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-200 text-sm">Onboarding & training</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center md:items-end">
                <p className="text-white mb-4 text-center md:text-right">Custom pricing based on your needs</p>
                <Button 
                  className="bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#0A0A29] px-8"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
