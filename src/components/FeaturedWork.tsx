import { motion } from 'framer-motion';
import { featuredProjects } from '../data/projects';

export default function FeaturedWork() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6"
      >
        Case Studies
      </motion.h2>

      <div className="space-y-6">
        {featuredProjects.map((project, index) => {
          const isExternal = project.link.startsWith('http');
          return (
            <motion.a
              key={project.title}
              href={project.link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group block border border-gray-300 hover:border-gray-900 transition-colors"
            >
            <div className="grid md:grid-cols-[2fr_1fr] gap-0">
              {/* Content */}
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-300">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide ml-4">{project.type}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">{project.date}</div>
                  <div className="flex gap-2">
                    {project.wipLink && (
                      <a
                        href={project.wipLink}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-gray-700 border border-gray-300 px-4 py-2 hover:border-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        WIP →
                      </a>
                    )}
                    <span className="text-sm text-gray-700 border border-gray-300 px-4 py-2 group-hover:border-gray-900 group-hover:bg-gray-50 transition-colors">
                      Open Deck →
                    </span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="aspect-[4/3] md:aspect-auto bg-gray-100 overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                )}
              </div>
            </div>
          </motion.a>
          );
        })}
      </div>
    </section>
  );
}