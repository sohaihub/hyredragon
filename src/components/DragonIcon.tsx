
import React from 'react';
import { Sparkles } from 'lucide-react';

interface DragonIconProps {
  className?: string;
}

const DragonIcon: React.FC<DragonIconProps> = ({ className }) => {
  // Replace with just an icon rather than an image
  return (
    <div className={`flex items-center justify-center ${className || "w-full h-full"}`}>
      <Sparkles className="text-[#E2FF55] w-full h-full" />
    </div>
  );
};

export default DragonIcon;
