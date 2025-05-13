
import React from 'react';
import { ArrowRight, Cpu, Shield, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const EnterpriseSolution: React.FC = () => {
  return (
    <div className="p-8 md:p-10 rounded-xl bg-gradient-to-br from-[#080822] to-[#0F103E] border border-[#7B78FF]/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute bottom-10 -left-10 w-48 h-48 rounded-full bg-[#7B78FF]/10 blur-3xl"></div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">HyreDragon: Unleash the Power of AI to Hire Smarter</h3>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        Our enterprise solution offers comprehensive AI-powered tools to transform your entire recruitment workflow, 
        from sourcing and screening to interviewing and onboarding.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex items-start">
          <div className="p-2 bg-[#E2FF55]/20 rounded-lg mr-3">
            <Cpu className="w-5 h-5 text-[#E2FF55]" />
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Advanced AI Processing</h4>
            <p className="text-gray-400 text-sm">Screen thousands of applications in minutes</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="p-2 bg-[#E2FF55]/20 rounded-lg mr-3">
            <Shield className="w-5 h-5 text-[#E2FF55]" />
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Enterprise Security</h4>
            <p className="text-gray-400 text-sm">SOC2 compliant with end-to-end encryption</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="p-2 bg-[#E2FF55]/20 rounded-lg mr-3">
            <BarChart3 className="w-5 h-5 text-[#E2FF55]" />
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Advanced Analytics</h4>
            <p className="text-gray-400 text-sm">Deep insights into your recruitment funnel</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Link to="/request-demo">
          <Button 
            size="lg"
            className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 text-lg px-8 py-6 rounded-full flex items-center gap-2"
          >
            Request a demo <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EnterpriseSolution;
