import { useState } from "react";
import { motion } from "framer-motion";
import { aiProjects } from "../data/projects";
import EmailGate from "./EmailGate";
import type { Project } from "../types/project";

const STORAGE_KEY = "portfolio:lead-email";

export default function AIPrototypes() {
  const [gateProject, setGateProject] = useState<Project | null>(null);

  const handleClick = (project: Project, e: React.MouseEvent) => {
    if (!project.requiresEmail) return;
    const already = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (already) return;
    e.preventDefault();
    setGateProject(project);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6"
      >
        Vibe Coded Prototypes
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-4">
        {aiProjects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleClick(project, e)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group border border-gray-300 p-4 hover:border-gray-900 transition-colors"
          >
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-semibold text-gray-900">{project.title}</h3>
              <span className="text-xs text-gray-500 ml-4">{project.date}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </motion.a>
        ))}
      </div>

      <EmailGate
        open={gateProject !== null}
        source={gateProject ? `prototype:${gateProject.title}` : ""}
        destination={gateProject?.link ?? ""}
        title={gateProject ? `Open ${gateProject.title}` : ""}
        onClose={() => setGateProject(null)}
      />
    </section>
  );
}
