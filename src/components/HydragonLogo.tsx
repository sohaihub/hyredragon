import React from 'react';
import { Flame } from 'lucide-react';

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
  const sizeMap: Record<string, { icon: number; height: number }> = {
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
      <div
        className="relative flex items-center justify-center rounded-full bg-[#181834]"
        style={{
          width: `${icon}px`,
          height: `${icon}px`
        }}
      >
        <Flame
          className="text-[#E2FF55]"
          style={{
            width: `${icon * 0.7}px`,
            height: `${icon * 0.7}px`
          }}
        />
      </div>

      {/* Logo text - conditionally rendered */}
      {withText && (
        <div className="ml-2 md:ml-3">
          <h1 className="text-[#E2FF55] font-bold text-lg md:text-xl">
            Hyre<span className="text-white">Dragon</span>
          </h1>
          <p className="text-gray-400 text-[10px] md:text-xs -mt-1">
            AI Recruitment Solutions
          </p>
        </div>
      )}
    </div>
  );
};

export default HydragonLogo;