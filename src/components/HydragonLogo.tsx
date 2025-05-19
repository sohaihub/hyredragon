
import React from 'react';

// Define prop types for the logo component
interface HydragonLogoProps {
  withText?: boolean;
  size?: string;
}

// HydragonLogo component with optional text and customizable size
const HydragonLogo: React.FC<HydragonLogoProps> = ({ 
  withText = false,
  size = 'regular'
}) => {
  // Define size mappings
  const sizeMap: Record<string, { icon: number, height: number }> = {
    small: { icon: 24, height: 30 },
    regular: { icon: 32, height: 40 },
    large: { icon: 48, height: 60 }
  };

  // Get dimensions based on size prop with fallback to regular
  const dimensions = sizeMap[size] || sizeMap.regular;
  const { icon, height } = dimensions;

  return (
    <div className="inline-flex items-center">
      {/* Logo icon */}
      <div className="relative" style={{ height: `${height}px` }}>
        {/* Use the uploaded image instead of the Flame icon */}
        <div className="rounded-full" style={{ width: `${icon}px`, height: `${icon}px` }}>
          <img 
            src="/lovable-uploads/3668d3b3-d949-47a7-940e-669ff11143f8.png" 
            alt="HyreDragon Logo" 
            className="w-full h-full"
          />
        </div>
      </div>
      
      {/* Logo text - conditionally rendered */}
      {withText && (
        <div className="ml-2 md:ml-3">
          <h1 className="text-white font-bold text-lg md:text-xl">
            Hyre<span className="bg-gradient-to-r from-[#E2FF55] to-[#FF9F5A] text-transparent bg-clip-text">Dragon</span>
          </h1>
          <p className="text-gray-400 text-[10px] md:text-xs -mt-1">AI Recruitment Solutions</p>
        </div>
      )}
    </div>
  );
};

export default HydragonLogo;
