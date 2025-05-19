
import React from 'react';
import { Link } from 'react-router-dom';

interface HyrDragonLogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

// Electric blue: #1EAEDB, Neon green: #E2FF55, Vivid purple: #9b87f5

const HyrDragonLogo: React.FC<HyrDragonLogoProps> = ({ 
  size = 'md',
  withText = true
}) => {
  // Define size dimensions based on prop
  const dimensions = {
    sm: { width: 32, height: 32, textSize: 'text-lg', circle: 'w-8 h-8' },
    md: { width: 46, height: 46, textSize: 'text-xl', circle: 'w-11 h-11' },
    lg: { width: 60, height: 60, textSize: 'text-2xl', circle: 'w-15 h-15' },
  };

  const { width, height, textSize, circle } = dimensions[size];
  
  return (
    <Link to="/" className="flex items-center">
      <div
        className={`relative flex items-center justify-center mr-2 ${circle}`}
        style={{
          minWidth: width,
          minHeight: height,
        }}
      >
        {/* Circle with gradient including electric blue */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #E2FF55 0%, #1EAEDB 60%, #9b87f5 100%)',
            filter: 'drop-shadow(0 2px 12px #1EAEDB66)',
            zIndex: 1,
          }}
        />
        {/* Simple lightning/flash symbol for branding */}
        <svg
          width={width * 0.7}
          height={height * 0.7}
          viewBox="0 0 32 32"
          fill="none"
          className="relative z-10"
        >
          <path
            d="M13 2 L5 18 H13 L11 30 L27 10 H17 L19 2 Z"
            fill="white"
            stroke="#0A0A29"
            strokeWidth="1.5"
            style={{
              filter: 'drop-shadow(0 1.5px 2.5px #1EAEDB99)',
            }}
          />
        </svg>
      </div>
      {withText && (
        <div className={`font-bold ${textSize} bg-gradient-to-r from-[#1EAEDB] via-[#E2FF55] to-[#9b87f5] bg-clip-text text-transparent`}>
          HyreDragon
        </div>
      )}
    </Link>
  );
};

export default HyrDragonLogo;
