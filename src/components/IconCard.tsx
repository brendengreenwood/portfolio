import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types/project';
import { sounds } from '../utils/sounds';

type IconCardProps = Project;

export default function IconCard({ title, description, link, date }: IconCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-md border border-gray-200 overflow-hidden">
      <div className="p-3 md:p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-medium mb-0.5 text-gray-700">{title}</h3>
        <span className="text-sm text-gray-500 mb-2">{date}</span>
        <p className="text-gray-700 leading-snug mb-4 md:mb-6 flex-1">{description}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => sounds.buttonHover()}
          className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-colors text-center font-medium"
        >
          Open
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}