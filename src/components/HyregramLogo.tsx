
import React from 'react';
import { Link } from 'react-router-dom';

interface HyregramLogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const HyregramLogo: React.FC<HyregramLogoProps> = ({ 
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
        {/* Main logo shape - stylized H with nodes */}
        <svg width={width} height={height} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          {/* Outer glow effect */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#E2FF55" floodOpacity="0.3" result="glow" />
            <feComposite in="glow" in2="blur" operator="in" result="coloredBlur" />
            <feBlend in="SourceGraphic" in2="coloredBlur" mode="normal" />
          </filter>
          
          {/* Connection lines */}
          <path d="M31.419 17.0819L34.531 25.8071" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          <path d="M14.581 28.9192L11.47 20.1929" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          <path d="M17.0819 14.581H25.8071" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          <path d="M28.9191 31.419H20.1929" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          
          {/* Connection nodes */}
          <circle cx="31.419" cy="11.469" r="5.5" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          <circle cx="14.581" cy="34.531" r="5.5" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          <circle cx="11.47" cy="14.581" r="5.5" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
          <circle cx="34.531" cy="31.419" r="5.5" stroke="#E2FF55" strokeWidth="2.5" filter="url(#glow)" />
        </svg>
        
        {/* Neon pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[#E2FF55]/20 blur-md animate-pulse-light"></div>
      </div>
      
      {withText && (
        <div className={`font-semibold ${textSize} bg-gradient-to-r from-[#E2FF55] to-[#9b87f5] bg-clip-text text-transparent`}>
          Hyregram
        </div>
      )}
    </Link>
  );
};

export default HyregramLogo;
