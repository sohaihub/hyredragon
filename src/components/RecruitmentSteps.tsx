
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const RecruitmentSteps: React.FC = () => {
  return (
    <div className="relative py-8 md:py-16">
      <div className="flex items-center justify-center mb-12">
        <div className="h-[3px] w-16 bg-[#E2FF55]"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mx-4 text-white">
          Smarter Hiring in <span className="text-[#E2FF55]">4 Steps</span>
        </h2>
        <div className="h-[3px] w-16 bg-[#E2FF55]"></div>
      </div>
      
      {/* Vertical line */}
      <div className="absolute left-1/2 top-32 bottom-0 w-1 bg-gradient-to-b from-[#E2FF55] via-[#7B78FF] to-[#9b87f5] transform -translate-x-1/2"></div>
      
      {/* Step 1 */}
      <div className="flex items-center mb-20 md:mb-32">
        <div className="w-1/2 pr-8 md:pr-16 text-right">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">1. Post Your Job</h3>
          <p className="text-gray-300">
            Create and publish your job opening in minutes with our intuitive platform.
          </p>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-[#E2FF55] flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(226,255,85,0.5)]">
            <span className="text-[#0A0A29] font-bold">1</span>
          </div>
        </div>
        
        <div className="w-1/2"></div>
      </div>
      
      {/* Step 2 */}
      <div className="flex items-center mb-20 md:mb-32">
        <div className="w-1/2"></div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-[#7B78FF] flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(123,120,255,0.5)]">
            <span className="text-[#0A0A29] font-bold">2</span>
          </div>
        </div>
        
        <div className="w-1/2 pl-8 md:pl-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">2. AI Matches Candidates</h3>
          <p className="text-gray-300">
            Our AI evaluates candidates based on skills, experience, and cultural fit to find your perfect match.
          </p>
        </div>
      </div>
      
      {/* Step 3 */}
      <div className="flex items-center mb-20 md:mb-32">
        <div className="w-1/2 pr-8 md:pr-16 text-right">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">3. Interview Process</h3>
          <p className="text-gray-300">
            Conduct structured interviews with AI-generated questions and real-time insights.
          </p>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-[#9b87f5] flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(155,135,245,0.5)]">
            <span className="text-[#0A0A29] font-bold">3</span>
          </div>
        </div>
        
        <div className="w-1/2"></div>
      </div>
      
      {/* Step 4 */}
      <div className="flex items-center">
        <div className="w-1/2"></div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-[#E2FF55] flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(226,255,85,0.5)]">
            <span className="text-[#0A0A29] font-bold">4</span>
          </div>
        </div>
        
        <div className="w-1/2 pl-8 md:pl-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">4. AI-Driven Feedback</h3>
          <p className="text-gray-300">
            Receive comprehensive AI-generated feedback and insights to make data-driven hiring decisions.
          </p>
        </div>
      </div>

      <div className="mt-16 p-6 bg-[#0F103E]/70 border border-[#0F103E] rounded-lg text-center max-w-3xl mx-auto hover:border-[#E2FF55]/50 transition-all duration-300">
        <blockquote className="text-lg md:text-xl italic text-white relative">
          <div className="absolute -top-4 -left-4 text-4xl text-[#E2FF55]">"</div>
          <p className="animated-text hover:text-[#E2FF55] transition-all duration-300">
            HyreDragon transformed our hiring process completely. We've reduced our time-to-hire by 65% and found candidates who are a perfect cultural fit for our team.
          </p>
          <div className="absolute -bottom-4 -right-4 text-4xl text-[#E2FF55]">"</div>
          <footer className="mt-4 text-gray-300">
            <cite>— Sarah Johnson, HR Director at TechFusion</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default RecruitmentSteps;
