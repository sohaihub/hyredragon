
import React from 'react';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PricingFeatureList: React.FC = () => {
  const features = [
    {
      title: "Interview Management",
      description: "Streamline your hiring process with our comprehensive interview management tools.",
      items: [
        "Custom assessments for different roles",
        "AI-powered candidate matching",
        "Detailed interview scheduling",
        "Candidate tracking dashboard",
        "Automated email notifications"
      ],
      icon: "📊"
    },
    {
      title: "AI-Powered Features",
      description: "Leverage cutting-edge AI to make smarter hiring decisions.",
      items: [
        "AI resume parsing and analysis",
        "Intelligent question generation",
        "Automated feedback reports",
        "Skill mapping and assessment",
        "Candidate sentiment analysis"
      ],
      icon: "🤖"
    },
    {
      title: "Comprehensive Testing",
      description: "Evaluate candidates thoroughly with our versatile testing platform.",
      items: [
        "MCQ assessments with custom question banks",
        "Live coding interviews with real-time evaluation",
        "Video interviews with AI analysis",
        "Proctoring system for test integrity",
        "Comprehensive feedback reports"
      ],
      icon: "✅"
    }
  ];
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All-in-One <span className="text-[#E2FF55]">Recruitment Solution</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              HyreDragon combines everything you need for efficient hiring in one powerful platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#0F103E]/50 border border-gray-800 rounded-xl p-6 transform transition-transform hover:scale-[1.02] hover:border-[#E2FF55]/40 animate-on-scroll"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-[#E2FF55] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-[#0F103E]/70 to-[#080822]/80 p-6 rounded-xl border border-[#E2FF55]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to revolutionize your hiring?</h3>
                <p className="text-gray-300">
                  Join the companies that have transformed their recruitment process with HyreDragon.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/request-demo">
                  <Button className="bg-[#E2FF55] text-[#080820] hover:bg-[#E2FF55]/90 px-6 py-6 text-lg flex items-center gap-2">
                    Start Free Trial <Zap className="ml-1" />
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

export default PricingFeatureList;
