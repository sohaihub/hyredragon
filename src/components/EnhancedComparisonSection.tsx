
import React from 'react';
import { Check, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const EnhancedComparisonSection: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden border-t border-b border-[#E2FF55]/20">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 right-10 w-64 h-64 rounded-full bg-[#E2FF55]/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -left-20 w-64 h-64 rounded-full bg-[#7B78FF]/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-5xl mx-auto bg-[#080822]/90 border border-[#E2FF55]/20 rounded-xl p-6 md:p-8 shadow-lg transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(226,255,85,0.15)]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            HyreDragon's Edge: <span className="text-[#E2FF55]">Slay the Competition</span>
          </h2>
          
          <div className="highlight-quote relative">
            <blockquote className="text-center text-lg md:text-xl font-medium px-6 py-4 my-8 border-l-4 border-r-4 border-[#E2FF55]/40 rounded bg-gradient-to-r from-[#080822] via-[#0F103E]/80 to-[#080822] animate-pulse-slow">
              <p className="text-[#E2FF55] leading-relaxed tracking-wide">
                <span className="font-bold">Only HyreDragon combines</span> <span className="text-white font-extrabold">MCQ, coding, and video interviews</span> — 
                <br className="hidden md:block" /> with built-in proctoring and real-time AI analytics. <span className="font-extrabold">One tool. Total coverage.</span>
              </p>
            </blockquote>
            
            {/* Animated accent lines */}
            <div className="absolute top-1/2 left-0 w-16 h-[2px] bg-gradient-to-r from-transparent to-[#E2FF55]/80"></div>
            <div className="absolute top-1/2 right-0 w-16 h-[2px] bg-gradient-to-l from-transparent to-[#E2FF55]/80"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="rounded-lg bg-[#070717]/80 p-5 border border-gray-800 transform transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-white mb-4">Traditional Platforms</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <Circle className="h-2 w-2 mr-3 text-red-500 flex-shrink-0" />
                  <span>Multiple tools required</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Circle className="h-2 w-2 mr-3 text-red-500 flex-shrink-0" />
                  <span>Complex integrations</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Circle className="h-2 w-2 mr-3 text-red-500 flex-shrink-0" />
                  <span>Higher total cost</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Circle className="h-2 w-2 mr-3 text-red-500 flex-shrink-0" />
                  <span>Inconsistent user experience</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-[#0C0C2E] p-5 border border-[#E2FF55]/20 shadow-[0_0_15px_rgba(226,255,85,0.1)] transform transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-[#E2FF55] mb-4">HyreDragon Advantage</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-white">
                  <div className="mr-3 h-5 w-5 rounded-full bg-[#E2FF55]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-[#E2FF55]" />
                  </div>
                  <span>All-in-one platform</span>
                </li>
                <li className="flex items-center text-white">
                  <div className="mr-3 h-5 w-5 rounded-full bg-[#E2FF55]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-[#E2FF55]" />
                  </div>
                  <span>Seamless experience</span>
                </li>
                <li className="flex items-center text-white">
                  <div className="mr-3 h-5 w-5 rounded-full bg-[#E2FF55]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-[#E2FF55]" />
                  </div>
                  <span>Cost-effective solution</span>
                </li>
                <li className="flex items-center text-white">
                  <div className="mr-3 h-5 w-5 rounded-full bg-[#E2FF55]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-[#E2FF55]" />
                  </div>
                  <span>Unified data analytics</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <Link to="/request-demo">
              <Button 
                className="bg-[#E2FF55] text-[#0A0A29] hover:bg-[#E2FF55]/90 px-8 py-6 text-lg font-medium rounded-md relative overflow-hidden group"
              >
                <span className="relative z-10">See It In Action</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 ease-out"></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedComparisonSection;
