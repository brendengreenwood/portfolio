import React from 'react';

interface ProjectCardProps {
  type: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ type, title, description, image, link }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
      <div>
        <span className="text-sm text-gray-600 mb-2 block">{type}</span>
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        <a 
          href={link}
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          View in Figma
        </a>
      </div>
      <div className="rounded-lg overflow-hidden shadow-xl">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
    </div>
  );
}