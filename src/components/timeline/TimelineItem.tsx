import React from 'react';

interface TimelineItemProps {
  title: string;
  date: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TimelineItem({ title, date, isActive, onClick }: TimelineItemProps) {
  return (
    <div className="flex items-center gap-0 group">
      {/* Content card */}
      <button
        onClick={onClick}
        className={`flex-1 text-left p-3 rounded-lg transition-all ${
          isActive 
            ? 'bg-[#444950] text-white border-[#444950]' 
            : 'bg-white hover:bg-[#C0C6CF] hover:border-[#C0C6CF] border-[#D8E0EB]'
        } border`}
      >
        <div className="max-w-[180px]">
          <h3 className={`text-base font-bold leading-[21px] mb-0.5 ${
            isActive ? 'text-white' : 'text-[#474747]'
          }`}>{title}</h3>
          <p className={`text-xs ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>{date}</p>
        </div>
      </button>

      {/* Timeline connector */}
      <div className="flex items-center relative z-10">
        {/* Horizontal line */}
        <div className={`w-6 h-0.5 ${isActive ? 'bg-[#444950]' : 'bg-[#BAC3CF] group-hover:bg-[#C0C6CF]'}`} />
        
        {/* Circle indicator */}
        <div 
          className={`w-3 h-3 rounded-full border-2 transition-colors ${
            isActive 
              ? 'bg-[#444950] border-[#444950]' 
              : 'bg-[#BAC3CF] border-[#BAC3CF] group-hover:bg-[#C0C6CF] group-hover:border-[#C0C6CF]'
          }`} 
        />
      </div>
    </div>
  );
}