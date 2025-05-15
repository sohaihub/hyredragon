
import React from 'react';

interface DragonIconProps {
  className?: string;
}

const DragonIcon: React.FC<DragonIconProps> = ({ className }) => {
  return (
    <img 
      src="/lovable-uploads/a6497fe2-2208-48ee-b3de-b959e26b0b60.png" 
      alt="Dragon Assistant" 
      className={className || "w-full h-full"}
    />
  );
};

export default DragonIcon;
