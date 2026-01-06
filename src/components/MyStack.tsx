import { motion } from 'framer-motion';

const tools = [
  { name: "Figma", link: "https://figma.com" },
  { name: "Notion", link: "https://notion.so" },
  { name: "Linear", link: "https://linear.app" },
  { name: "Claude Code", link: "https://claude.ai/claude-code" },
  { name: "Jira", link: "https://www.atlassian.com/software/jira" },
  { name: "Confluence", link: "https://www.atlassian.com/software/confluence" },
  { name: "Replit", link: "https://replit.com" },
  { name: "Bolt.new", link: "https://bolt.new" },
  { name: "v0", link: "https://v0.dev" },
  { name: "ChatGPT", link: "https://chat.openai.com" }
];

export default function MyStack() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6"
      >
        Tools
      </motion.h2>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <motion.a
            key={tool.name}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-900 hover:bg-gray-50 transition-colors"
          >
            {tool.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
}