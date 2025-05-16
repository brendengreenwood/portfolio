import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { sounds } from '../utils/sounds';

interface AccordionProps {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  onOpenChange?: (isOpen: boolean) => void;
}

export default function Accordion({ 
  title, 
  description, 
  defaultOpen = false, 
  children,
  onOpenChange 
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const newIsOpen = !isOpen;
    if (newIsOpen) {
      sounds.open();
    } else {
      sounds.close();
    }
    setIsOpen(newIsOpen);
    onOpenChange?.(newIsOpen);
  };

  const handleMouseEnter = () => {
    sounds.hover();
  };

  return (
    <div className="rounded-md border border-gray-200 transition-colors duration-200 hover:border-gray-300">
      <button
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter}
        className="w-full px-4 md:px-6 py-4 md:py-6 flex items-start text-left gap-3 md:gap-4"
      >
        <div className="pt-1">
          <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown className="text-gray-500" size={20} />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium text-gray-900">{title}</h2>
          {description && <p className="text-gray-700 mt-2 text-base leading-relaxed">{description}</p>}
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
        style={{ 
          height: isOpen ? contentRef.current?.scrollHeight + 'px' : '0',
        }}
      >
        <div 
          ref={contentRef}
          className={`px-4 md:px-6 pb-6 md:pb-8 transform transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}