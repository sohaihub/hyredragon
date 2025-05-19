
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
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
          style={{ animationDuration: '3s' }}
        >
          <path
            d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
            fill="url(#paint0_linear_dragon)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_dragon"
              x1="18"
              y1="0"
              x2="18"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E2FF55" />
              <stop offset="1" stopColor="#00AAFF" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Dragon silhouette */}
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.125 7.875C22.125 6.84 21.285 6 20.25 6H15.75C14.715 6 13.875 6.84 13.875 7.875V9H12V12H13.875V16.125H12V19.125H13.875V24H20.25C21.285 24 22.125 23.16 22.125 22.125V19.125H24V16.125H22.125V12H24V9H22.125V7.875Z"
            fill="#0A0A29"
          />
          <path
            d="M16.5 13.5H19.5"
            stroke="#0A0A29"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16.5 17.25H19.5"
            stroke="#0A0A29"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M30 18C30 24.6274 24.6274 30 18 30C11.3726 30 6 24.6274 6 18C6 11.3726 11.3726 6 18 6"
            stroke="#0A0A29"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* Logo text - conditionally rendered */}
      {withText && (
        <div className="ml-2 md:ml-3">
          <h1 className="text-white font-bold text-lg md:text-xl">
            Hyre<span className="bg-gradient-to-r from-[#E2FF55] to-[#00AAFF] text-transparent bg-clip-text">Dragon</span>
          </h1>
          <p className="text-gray-400 text-[10px] md:text-xs -mt-1">AI Recruitment Solutions</p>
        </div>
      )}
    </div>
  );
};

export default HydragonLogo;
