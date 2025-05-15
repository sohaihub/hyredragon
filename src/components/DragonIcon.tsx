
import React from 'react';

interface DragonIconProps {
  className?: string;
}

const DragonIcon: React.FC<DragonIconProps> = ({ className }) => {
  return (
    <img 
      src="/lovable-uploads/348d92b6-ed38-4d34-8bd2-0d39c2ebbd1e.png" 
      alt="Dragon Assistant" 
      className={className || "w-full h-full"}
    />
  );
};

export default DragonIcon;
