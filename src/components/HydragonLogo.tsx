
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
  const sizeMap: Record<string, { height: number }> = {
    small: { height: 30 },
    regular: { height: 40 },
    large: { height: 60 }
  };

  // Get dimensions based on size prop with fallback to regular
  const dimensions = sizeMap[size] || sizeMap.regular;
  const { height } = dimensions;
  
  return (
    <div className="inline-flex items-center">
      {/* Logo image */}
      <img 
        src="/lovable-uploads/2fb3f0ba-83a2-4006-826c-020511f006c6.png" 
        alt="HyreDragon Logo" 
        style={{ height: `${height}px` }}
        className="object-contain"
      />
    </div>
  );
};

export default HydragonLogo;
