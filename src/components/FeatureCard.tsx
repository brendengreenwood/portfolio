import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types/project';
import { sounds } from '../utils/sounds';

type FeatureCardProps = Project;

export default function FeatureCard({ type, title, description, image, link, date }: FeatureCardProps) {
  const isCerebroCampaigns = title === "Cerebro Campaigns";

  return (
    <div className="flex flex-col bg-white rounded-md border border-gray-200 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 md:p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-600">{type}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-lg font-medium mb-1.5 text-gray-700">{title}</h3>
        <p className="text-gray-700 leading-snug mb-4 md:mb-6 flex-1">{description}</p>
        <div className="flex gap-3">
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sounds.buttonHover()}
            className={`inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-colors text-center font-medium ${isCerebroCampaigns ? 'flex-1' : 'w-full'}`}
          >
            Open Deck
            <ExternalLink size={16} />
          </a>
          {isCerebroCampaigns && (
            <a 
              href="/case-study"
              onMouseEnter={() => sounds.buttonHover()}
              className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-colors text-center font-medium"
            >
              View (WIP)
            </a>
          )}
        </div>
      </div>
    </div>
  );
}