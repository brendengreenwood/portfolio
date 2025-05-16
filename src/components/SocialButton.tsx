import React, { useState } from 'react';
import { sounds } from '../utils/sounds';

interface SocialButtonProps {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}

export default function SocialButton({ href, label, external = true, children }: SocialButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    sounds.buttonHover();
  };

  return (
    <div className="relative">
      <a 
        href={href}
        className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-200 transition-colors relative"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={label}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </a>
      <div 
        className={`
          absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
          transition-all duration-200 ease-out
          ${showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        `}
      >
        <div className="px-2 py-1 text-sm text-white bg-gray-900 rounded whitespace-nowrap">
          {label}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="border-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
}