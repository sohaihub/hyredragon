
import React from 'react';
import { ArrowRight, Cpu, Shield, BarChart3, CheckCircle, Server, Briefcase, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const EnterpriseSolution: React.FC = () => {
  const features = [
    { icon: <CheckCircle className="w-5 h-5 text-[#E2FF55]" />, text: "Everything in Premium plan" },
    { icon: <Shield className="w-5 h-5 text-[#E2FF55]" />, text: "Advanced security features" },
    { icon: <Users className="w-5 h-5 text-[#E2FF55]" />, text: "Dedicated customer success team" },
    { icon: <Server className="w-5 h-5 text-[#E2FF55]" />, text: "Service level agreement (SLA)" },
    { icon: <Cpu className="w-5 h-5 text-[#E2FF55]" />, text: "Custom AI model fine-tuning" },
    { icon: <Briefcase className="w-5 h-5 text-[#E2FF55]" />, text: "Custom integrations" },
    { icon: <BarChart3 className="w-5 h-5 text-[#E2FF55]" />, text: "Customized reporting" },
    { icon: <CheckCircle className="w-5 h-5 text-[#E2FF55]" />, text: "Onboarding & training" },
  ];

  return (
    <div className="p-8 md:p-10 rounded-xl bg-gradient-to-br from-[#080822] to-[#0F103E] border border-[#7B78FF]/30 relative overflow-hidden transform transition-transform hover:scale-[1.01] shadow-xl shadow-[#E2FF55]/5">
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute bottom-10 -left-10 w-48 h-48 rounded-full bg-[#7B78FF]/10 blur-3xl"></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#E2FF55] rounded-full opacity-70 animate-pulse-light"></div>
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-[#E2FF55] rounded-full opacity-50 animate-pulse-light" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#E2FF55] rounded-full opacity-60 animate-pulse-light" style={{animationDelay: "1s"}}></div>
      
      {/* Visual elements */}
      <div className="absolute right-4 top-4 md:right-8 md:top-8 flex">
        <div className="w-2 h-2 rounded-full bg-[#E2FF55] mr-1.5"></div>
        <div className="w-2 h-2 rounded-full bg-[#7B78FF] mr-1.5"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
      </div>
      
      <div className="relative z-10">
        {/* Enterprise badge */}
        <div className="bg-[#E2FF55]/10 border border-[#E2FF55]/30 text-[#E2FF55] text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Enterprise
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          HyreDragon: <span className="text-[#E2FF55]">Unleash the Power of AI</span> to Hire Smarter
        </h3>
        
        <p className="text-gray-300 mb-8 max-w-3xl">
          Our enterprise solution offers comprehensive AI-powered tools to transform your entire recruitment workflow, 
          from sourcing and screening to interviewing and onboarding. Built for large organizations with complex hiring needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 transform hover:translate-x-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="p-2 bg-[#E2FF55]/10 rounded-lg mr-3 group-hover:bg-[#E2FF55]/20 transition-all">
                {feature.icon}
              </div>
              <div>
                <p className="text-white text-sm">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 mt-6 border-t border-white/10">
          <div className="text-white mb-4 sm:mb-0">
            <span className="text-[#E2FF55] font-medium">Custom pricing</span> based on your needs
          </div>
          <Link to="/request-demo">
            <Button 
              size="lg"
              className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 px-8 py-6 rounded-full flex items-center gap-2 shadow-lg shadow-[#E2FF55]/10 transform transition-transform hover:translate-y-[-2px]"
            >
              Contact Sales <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolution;
