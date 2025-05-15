
import React from 'react';

const DragonIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
      <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      <path d="M9 14h6a3 3 0 0 1 3 3v1h-2" />
      <path d="M16 14l2 3h-3" />
      <path d="M8 14l-2 3h3" />
      <path d="M10 17v2" />
      <path d="M14 17v2" />
    </svg>
  );
};

export default DragonIcon;
