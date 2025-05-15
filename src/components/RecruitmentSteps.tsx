
import React from 'react';

const RecruitmentSteps: React.FC = () => {
  return (
    <div className="relative py-8 md:py-16">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E2FF55] via-[#7B78FF] to-[#9b87f5] transform -translate-x-1/2"></div>
      
      {/* Step 1 */}
      <div className="flex items-center mb-20 md:mb-32">
        <div className="w-1/2 pr-8 md:pr-16 text-right">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">1. Post Your Job</h3>
          <p className="text-gray-300">
            Create and publish your job opening in minutes with our intuitive platform.
          </p>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-[#E2FF55] flex items-center justify-center z-10 relative">
            <span className="text-[#0A0A29] font-bold">1</span>
          </div>
        </div>
        
        <div className="w-1/2"></div>
      </div>
      
      {/* Step 2 */}
      <div className="flex items-center mb-20 md:mb-32">
        <div className="w-1/2"></div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-[#7B78FF] flex items-center justify-center z-10 relative">
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
          <div className="w-12 h-12 rounded-full bg-[#9b87f5] flex items-center justify-center z-10 relative">
            <span className="text-[#0A0A29] font-bold">3</span>
          </div>
        </div>
        
        <div className="w-1/2"></div>
      </div>
      
      {/* Step 4 */}
      <div className="flex items-center">
        <div className="w-1/2"></div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 rounded-full bg-[#E2FF55] flex items-center justify-center z-10 relative">
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
    </div>
  );
};

export default RecruitmentSteps;
