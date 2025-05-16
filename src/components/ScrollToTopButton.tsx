
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll button handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-28 right-8 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#0F103E] text-white shadow-md hover:shadow-lg transition-all duration-400 ease-premium transform hover:translate-y-[-2px] border border-[#3D3D5C]/30 hover:border-[#3D3D5C]/50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-[#7B78FF] group-hover:animate-bounce-subtle" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
