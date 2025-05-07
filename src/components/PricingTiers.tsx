
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
}

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  isPopular 
}) => {
  return (
    <div 
      className={`bg-hyregram-darker-bg border rounded-xl p-6 md:p-8 card-hover relative 
      ${isPopular 
        ? 'border-hyregram-neon neon-border' 
        : 'border-hyregram-purple-dark'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-hyregram-neon text-hyregram-dark-bg text-xs font-bold px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl md:text-4xl font-bold text-white">{price}</span>
        {price !== 'Custom' && <span className="text-gray-400 ml-1">/month</span>}
      </div>
      
      <p className="text-gray-300 mb-6">{description}</p>
      
      <Button 
        className={`w-full mb-8 ${isPopular 
          ? 'bg-hyregram-neon text-hyregram-dark-bg hover:bg-opacity-90' 
          : 'bg-hyregram-purple hover:bg-hyregram-purple-dark text-white'
        }`}
      >
        Get Started
      </Button>
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className={`mr-3 rounded-full p-1 ${isPopular ? 'bg-hyregram-neon text-hyregram-dark-bg' : 'bg-hyregram-purple text-white'}`}>
              <Check className="h-4 w-4" />
            </div>
            <span className="text-gray-200 text-sm">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PricingTiers: React.FC = () => {
  const basicFeatures = [
    { text: "Up to 10 job postings" },
    { text: "Basic AI candidate matching" },
    { text: "Standard job templates" },
    { text: "Email support" },
    { text: "Basic analytics dashboard" }
  ];
  
  const proFeatures = [
    { text: "Up to 50 job postings" },
    { text: "Advanced AI candidate matching" },
    { text: "Custom job templates" },
    { text: "Priority email & chat support" },
    { text: "Full analytics suite" },
    { text: "Team collaboration tools" },
    { text: "90% faster candidate cycling" }
  ];
  
  const enterpriseFeatures = [
    { text: "Unlimited job postings" },
    { text: "Enterprise-grade AI matching" },
    { text: "Custom branded experience" },
    { text: "Dedicated account manager" },
    { text: "Advanced analytics & reporting" },
    { text: "API access & integrations" },
    { text: "Custom workflows & automation" },
    { text: "SLA & premium support" }
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Basic"
            price="$199"
            description="For small businesses just getting started with recruitment."
            features={basicFeatures}
          />
          
          <PricingTier
            name="Pro"
            price="$499"
            description="For growing teams that need advanced features and support."
            features={proFeatures}
            isPopular={true}
          />
          
          <PricingTier
            name="Enterprise"
            price="Custom"
            description="For large organizations with complex hiring needs."
            features={enterpriseFeatures}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
