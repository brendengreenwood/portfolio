import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { featuredProjects } from '../data/projects';
import { useStaggeredAnimation } from '../hooks/useStaggeredAnimation';

export default function FeaturedWork() {
  const animatedItems = useStaggeredAnimation(true, featuredProjects.length, 0.1);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Case Studies & Work Samples</h2>
        <p className="text-gray-700 leading-relaxed">
          Here's a look at some of my work, from tackling tricky design problems to creating solutions that make a difference. 
          These case studies and examples give a glimpse into my process and the results I've delivered.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 20 }}
            animate={animatedItems[index] ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <FeatureCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}