
import React from 'react';

const PricingHero: React.FC = () => {
  return (
    <section className="text-center py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background neon circles */}
      <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-[#E2FF55]/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#E2FF55]/5 blur-3xl"></div>
      
      {/* Small decorative stars */}
      <div className="absolute top-20 left-[20%] w-1 h-1 bg-white rounded-full"></div>
      <div className="absolute top-40 right-[30%] w-2 h-2 bg-white rounded-full"></div>
      <div className="absolute bottom-20 left-[10%] w-1.5 h-1.5 bg-white rounded-full"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="inline-flex items-center bg-[#E2FF55]/10 py-2 px-4 rounded-full mb-8">
          <div className="w-4 h-4 bg-[#E2FF55] rounded-full mr-2"></div>
          <span className="text-[#E2FF55] font-medium text-sm">AI Powered tool</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          Find the Right Talent, Faster & Smarter <br />
          with <span className="text-[#E2FF55]">AI Without the Hassle</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Hyregram streamlines recruitment, helping you find the right talent faster, 
          without delays, guesswork, or tedious manual work.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-white/90 text-[#0A0A29] px-6 py-3 rounded-full font-medium transition-all">
            Try an Interview
          </button>
          <button className="bg-[#7B78FF] hover:bg-[#7B78FF]/90 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2">
            Request a demo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
