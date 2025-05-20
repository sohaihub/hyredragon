import React from 'react';
import { Flame } from 'lucide-react';

// Define prop types for the logo component
interface HydragonLogoProps {
  withText?: boolean;
  size?: 'small' | 'regular' | 'large';
}

// HydragonLogo component with optional text and customizable size
const HydragonLogo: React.FC<HydragonLogoProps> = ({
  withText = false,
  size = 'regular',
}) => {
  // Define size mappings for different logo sizes
  const sizeMap: Record<string, { icon: number; height: number }> = {
    small: { icon: 24, height: 30 },
    regular: { icon: 32, height: 40 },
    large: { icon: 48, height: 60 },
  };

  // Get dimensions based on size prop with fallback to regular
  const dimensions = sizeMap[size] || sizeMap.regular;
  const { icon, height } = dimensions;

  return (
    <div className="inline-flex items-center group">
      {/* Logo icon */}
      <div
        className="relative flex items-center justify-center rounded-full bg-black group-hover:bg-[#1A1A3D] transition-all duration-300"
        style={{
          width: `${icon}px`,
          height: `${icon}px`,
        }}
      >
        <Flame
          className="text-[#E2FF55] group-hover:scale-110 transition-transform duration-300"
          style={{
            width: `${icon * 0.7}px`,
            height: `${icon * 0.7}px`,
          }}
        />
      </div>

      {/* Logo text - conditionally rendered */}
      {withText && (
        <div className="ml-2 md:ml-3">
          <h1
            className="font-bold text-lg md:text-xl"
            style={{
              background: 'linear-gradient(90deg, #E2FF55, #FF9F5A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            HyreDragon
          </h1>
          {/* Underline effect on hover */}
          <div
            className="absolute top-full left-0 w-full h-[2px] bg-gradient-to-r from-[#E2FF55] to-[#e2ff55] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
          ></div>
        </div>
      )}
    </div>
  );
};

export default HydragonLogo;