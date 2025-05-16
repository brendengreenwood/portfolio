import React from 'react';
import { motion } from 'framer-motion';
import IconCard from './IconCard';
import { aiProjects } from '../data/projects';
import { useStaggeredAnimation } from '../hooks/useStaggeredAnimation';

export default function AIPrototypes() {
  const animatedItems = useStaggeredAnimation(true, aiProjects.length, 0.1);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">AI Code-assisted Prototypes</h2>
        <p className="text-gray-700 leading-relaxed">
          I've been experimenting with AI tools like Bolt.New to speed up prototyping and bridge design with development. 
          Faster iteration, less grunt work—more time for the fun stuff.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 20 }}
            animate={animatedItems[index] ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <IconCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}