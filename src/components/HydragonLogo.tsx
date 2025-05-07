
import React from 'react';
import { Link } from 'react-router-dom';

interface HydragonLogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const HydragonLogo: React.FC<HydragonLogoProps> = ({ 
  size = 'md',
  withText = true
}) => {
  // Define size dimensions based on prop
  const dimensions = {
    sm: { width: 32, height: 32, textSize: 'text-lg' },
    md: { width: 46, height: 46, textSize: 'text-xl' },
    lg: { width: 60, height: 60, textSize: 'text-2xl' },
  };

  const { width, height, textSize } = dimensions[size];
  
  return (
    <Link to="/" className="flex items-center">
      <div className="relative">
        {/* Enhanced dragon-themed logo */}
        <svg width={width} height={height} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          {/* Outer glow effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feFlood floodColor="#E2FF55" floodOpacity="0.4" result="glow" />
            <feComposite in="glow" in2="blur" operator="in" result="coloredBlur" />
            <feBlend in="SourceGraphic" in2="coloredBlur" mode="normal" />
          </filter>
          
          {/* Dragon body - main curved line */}
          <path d="M8 23C8 16 15 9 24 11C33 13 38 20 38 27" stroke="#E2FF55" strokeWidth="2.8" filter="url(#glow)" />
          
          {/* Dragon head */}
          <path d="M38 27C38 24 40 23 42 24" stroke="#E2FF55" strokeWidth="2.8" filter="url(#glow)" />
          <path d="M38 27C38 30 40 31 42 30" stroke="#E2FF55" strokeWidth="2.8" filter="url(#glow)" />
          
          {/* Dragon eye */}
          <circle cx="39" cy="27" r="1.5" fill="#E2FF55" filter="url(#glow)" />
          
          {/* Dragon scales/nodes */}
          <circle cx="14" cy="17" r="3" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          <circle cx="20" cy="13" r="3" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          <circle cx="27" cy="15" r="3" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          <circle cx="32" cy="20" r="3" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          
          {/* Dragon tail */}
          <path d="M8 23C6 26 4 29 8 33" stroke="#E2FF55" strokeWidth="2.8" filter="url(#glow)" />
          <circle cx="8" cy="33" r="2.5" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
        </svg>
        
        {/* Neon pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[#E2FF55]/20 blur-md animate-pulse-light"></div>
      </div>
      
      {withText && (
        <div className={`font-bold ${textSize} bg-gradient-to-r from-[#E2FF55] to-[#9b87f5] bg-clip-text text-transparent`}>
          Hydragon
        </div>
      )}
    </Link>
  );
};

export default HydragonLogo;
