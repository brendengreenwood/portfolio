import React from 'react';
import TimelineSection from './TimelineSection';
import TimelineItem from './TimelineItem';
import { timelineData } from '../../data/timeline';

interface TimelineNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function TimelineNav({ activeSection, onSectionChange }: TimelineNavProps) {
  const sections = timelineData.reduce((acc, item, index) => {
    if (item.type === 'tag') {
      acc.push({
        tag: item,
        items: [],
        startIndex: index
      });
    } else if (acc.length > 0 && item.type !== 'overview') {
      acc[acc.length - 1].items.push(item);
    }
    return acc;
  }, [] as { tag: any, items: any[], startIndex: number }[]);

  return (
    <nav className="w-[320px] fixed left-0 top-0 h-screen overflow-y-auto py-6 px-4 bg-gray-50">
      <div className="flex flex-col gap-3">
        {timelineData.map((item, index) => {
          const section = sections.find(s => 
            s.items.length > 0 && s.items[0].id === item.id
          );
          
          const isFirstInSection = section?.items[0].id === item.id;
          
          return (
            <React.Fragment key={item.id}>
              {item.type === 'tag' && (
                <div className="px-3 py-1.5 bg-[#D8E0EB] text-xs font-medium text-[#444950] rounded-full w-fit">
                  {item.title}
                </div>
              )}
              {item.type === 'overview' ? (
                <TimelineSection
                  title={item.title}
                  date={item.date}
                  isActive={activeSection === item.id}
                  onClick={() => onSectionChange(item.id)}
                />
              ) : item.type === 'item' && (
                <div className="relative">
                  {isFirstInSection && (
                    <div 
                      className="absolute left-[calc(100%-7px)] w-0.5 bg-[#BAC3CF] z-0"
                      style={{
                        top: '27px',
                        height: '315px'
                      }}
                    />
                  )}
                  <TimelineItem
                    title={item.title}
                    date={item.date}
                    isActive={activeSection === item.id}
                    onClick={() => onSectionChange(item.id)}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}