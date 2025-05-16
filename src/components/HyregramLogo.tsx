
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

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
    <Link to="/" className="flex items-center group">
      <div className="relative mr-2">
        <div 
          className="bg-gradient-to-br from-[#1A1A3D] to-[#080820] flex items-center justify-center rounded-full overflow-hidden border border-[#E2FF55]/10 transition-all duration-500 group-hover:border-[#E2FF55]/30"
          style={{ width, height }}
        >
          <Sparkles className="text-[#E2FF55] w-1/2 h-1/2 transition-all duration-500 group-hover:scale-110" />
        </div>
      </div>
      {withText && (
        <div className={`font-semibold ${textSize} bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent transition-all duration-500 group-hover:from-[#E2FF55] group-hover:to-white`}>
          Hyregram
          <div className="absolute top-full left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E2FF55]/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
        </div>
      )}
    </Link>
  );
};

export default HyregramLogo;
