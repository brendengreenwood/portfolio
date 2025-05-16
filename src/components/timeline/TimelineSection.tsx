import React from 'react';

interface TimelineSectionProps {
  title: string;
  date: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TimelineSection({ title, date, isActive, onClick }: TimelineSectionProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg transition-all ${
        isActive 
          ? 'bg-[#444950] text-white border-[#444950]' 
          : 'bg-white hover:bg-[#C0C6CF] hover:border-[#C0C6CF] border-[#D8E0EB]'
      } border`}
    >
      <div className="max-w-[280px]">
        <h3 className={`text-base font-bold leading-[21px] mb-0.5 ${
          isActive ? 'text-white' : 'text-[#474747]'
        }`}>{title}</h3>
        <p className={`text-xs ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
          {date}
        </p>
      </div>
    </button>
  );
}