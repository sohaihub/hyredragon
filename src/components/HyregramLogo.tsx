
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
        {/* Logo removed */}
      </div>
      {withText && (
        <div className={`font-semibold ${textSize} bg-gradient-to-r from-[#E2FF55] to-[#9b87f5] bg-clip-text text-transparent animate-text-shimmer hover:animate-pulse-slow transition-all duration-300`}>
          Hyregram
        </div>
      )}
    </Link>
  );
};

export default HyregramLogo;
