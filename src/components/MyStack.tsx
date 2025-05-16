import React from 'react';
import { motion } from 'framer-motion';
import { sounds } from '../utils/sounds';

const tools = [
  {
    name: "Figma",
    icon: "/assets/figma-icon.svg",
    link: "https://figma.com"
  },
  {
    name: "Notion",
    icon: "/assets/notion_icon.png",
    link: "https://notion.so"
  },
  {
    name: "Linear",
    icon: "/assets/linear-icon.png",
    link: "https://linear.app"
  },
  {
    name: "Jira",
    icon: "/assets/jira app icon.png",
    link: "https://www.atlassian.com/software/jira"
  },
  {
    name: "Confluence",
    icon: "/assets/confluence icon.jpg",
    link: "https://www.atlassian.com/software/confluence"
  },
  {
    name: "Replit",
    icon: "/assets/replit app icon.png",
    link: "https://replit.com"
  },
  {
    name: "Bolt.new",
    icon: "/assets/bolt new icon.jpg",
    link: "https://bolt.new"
  },
  {
    name: "v0",
    icon: "/assets/v0 icon.png",
    link: "https://v0.dev"
  },
  {
    name: "ChatGPT",
    icon: "/assets/chatgpt icon.webp",
    link: "https://chat.openai.com"
  }
];

export default function MyStack() {
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <section className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-3">My Stack</h2>
          <p className="text-gray-700 leading-relaxed">
            Tools I use daily to design, develop, and ship products.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.a
              key={tool.name}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col items-center gap-3 hover:border-gray-300 transition-colors"
              onMouseEnter={() => sounds.buttonHover()}
            >
              <img 
                src={tool.icon} 
                alt={`${tool.name} icon`}
                className="w-12 h-12 object-contain"
              />
              <span className="text-gray-700 font-medium">{tool.name}</span>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}