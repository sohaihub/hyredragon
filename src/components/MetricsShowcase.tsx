
import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

interface MetricProps {
  value: string;
  label: string;
  image?: string;
}

const MetricCard: React.FC<MetricProps> = ({ value, label, image }) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#080822]/90 to-[#080822]/70 border border-gray-800">
      {image && (
        <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" />
      )}
      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="rounded-full bg-[#E2FF55] w-12 h-12 flex items-center justify-center mb-4">
          <ShieldCheck className="h-6 w-6 text-[#080822]" />
        </div>
        <div className="text-5xl font-bold text-white mb-2">{value}</div>
        <div className="text-gray-300">{label}</div>
      </div>
    </div>
  );
};

const MetricsShowcase: React.FC = () => {
  const metrics = [
    {
      value: "90%",
      label: "Faster Hiring Cycles",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&auto=format&crop=entropy&fit=crop&w=987"
    },
    {
      value: "60%",
      label: "Less Manual Effort",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&auto=format&crop=entropy&fit=crop&w=870"
    },
    {
      value: "3X",
      label: "More Accurate Evaluations",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&auto=format&crop=entropy&fit=crop&w=870"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          HyreDragon is <span className="text-[#E2FF55]">known for</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard 
              key={index}
              value={metric.value}
              label={metric.label}
              image={metric.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsShowcase;
