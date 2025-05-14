
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PricingTier = ({ 
  name, 
  hours, 
  price 
}: { 
  name: string; 
  hours: number; 
  price: number;
}) => {
  return (
    <div className="bg-white/5 border border-gray-800 rounded-lg p-4 text-center hover:border-[#E2FF55]/50 transition-all">
      <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
      <p className="text-gray-400 text-sm mb-3">{hours} hours @ ₹1,000/hour</p>
      <div className="text-[#E2FF55] text-3xl font-bold">₹{price.toLocaleString()}</div>
    </div>
  );
};

const SavingsCalculator: React.FC = () => {
  const pricingTiers = [
    { name: "Starter", hours: 10, price: 10000 },
    { name: "Basic", hours: 20, price: 20000 },
    { name: "Standard", hours: 30, price: 30000 },
    { name: "Professional", hours: 40, price: 40000 },
    { name: "Premium", hours: 50, price: 50000 },
  ];

  return (
    <div className="bg-[#080822]/80 p-6 rounded-xl border border-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Plan</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {pricingTiers.map((tier, index) => (
          <PricingTier 
            key={index}
            name={tier.name} 
            hours={tier.hours} 
            price={tier.price} 
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link to="/request-demo">
          <Button className="bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/90 px-8 py-2 rounded-full">
            Request a Demo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SavingsCalculator;
