import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <header className="border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Info grid - data table style */}
        <div className="grid md:grid-cols-[auto_2fr_1fr] gap-8 mb-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-32 h-32 md:w-40 md:h-40 border border-gray-300 overflow-hidden flex-shrink-0"
          >
            <img
              src="/assets/me.png"
              alt="Brenden Greenwood"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight"
            >
              Brenden Greenwood
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-lg text-gray-700 mb-4"
            >
              Product Designer — Systems & Enterprise Tools
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-sm text-gray-600 leading-relaxed"
            >
              I specialize in designing complex enterprise tools and scalable design systems.
              With over 10 years of experience at companies like Target and United Airlines,
              I transform complicated workflows into intuitive, data-dense interfaces that users love.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-1 text-sm"
          >
            <div className="flex justify-between py-1 border-b border-gray-200">
              <span className="text-gray-500">Location</span>
              <span className="text-gray-900 font-medium">Minneapolis, MN</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-200">
              <span className="text-gray-500">Experience</span>
              <span className="text-gray-900 font-medium">10+ years</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-200">
              <span className="text-gray-500">Status</span>
              <span className="text-gray-900 font-medium">Available</span>
            </div>
          </motion.div>
        </div>

        {/* Focus areas - tag style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Focus Areas</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-300">Design Systems</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-300">Enterprise Workflows</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-300">Data-Dense Interfaces</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-300">Information Architecture</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <SocialLinks />
        </motion.div>
      </div>
    </header>
  );
}
