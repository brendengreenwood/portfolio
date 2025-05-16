import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import AnimatedHeading from './AnimatedHeading';

export default function Hero() {
  return (
    <header className="max-w-6xl mx-auto px-4 md:px-6 pt-6 md:pt-20 pb-12 md:pb-16">
      <div className="max-w-[65%]">
        <AnimatedHeading />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
            I'm Brenden, a product designer with over a decade of experience simplifying 
            the complex. I've worked for big companies like Target, start-ups like 
            Leadpages, and smaller agencies around Minneapolis. Outside of design, I 
            love music production (even have a few releases), video games, film, art, and 
            birdwatching.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">Let's connect and see if we'd be a good fit.</p>
        </motion.div>
        <SocialLinks />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-12"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-3">What I'm looking for</h2>
          <p className="text-gray-700 leading-relaxed">
           I like my design like I like my coffee—bold, smooth, and best enjoyed with great company. I thrive in collaborative, Agile teams where deep thinking and problem-solving come together to make enterprise tools actually nice to use. I’m looking for a team that values curiosity, good banter, and building intuitive solutions that don’t make people want to throw their laptop out a window.
          </p>
        </motion.div>
      </div>
    </header>
  );
}