import { motion } from "framer-motion";
import { useState } from "react";

const experience = [
  {
    role: "Senior Product Designer (Contract)",
    company: "Cargill",
    period: "Feb 2026 – Present",
    highlights: [
      "Leading 0-to-1 design of a greenfield market intelligence and pricing decision-support platform for Cargill's grain trading business — scenario modeling, ML-backed pricing recommendations, and real-time bid context for traders and field teams",
      "Rebuilt a data science POC as a production-grade React/TypeScript frontend, establishing the platform's working foundation and design system architecture; validated designs in working code rather than static mocks",
      "Designed a novel map-based competitive territory system modeling bid competition and market reach through geospatial contour visualization (MapLibre GL, d3)",
      "Drove foundational discovery — in-depth interviews across traders and field originators — and built an AI-assisted research synthesis pipeline that turned transcripts into a living domain ontology, service blueprint, and personas",
      "Advanced the org's AI-enabled design practice by building CLI and MCP tooling that made the enterprise design system consumable by AI coding agents, ahead of the broader design community"
    ]
  },
  {
    role: "Senior Product Designer",
    company: "United Airlines",
    period: "Jan 2025 – Sept 2025",
    highlights: [
      "Led end-to-end design of Employee Uniform Portal serving 85,000+ frontline employees",
      "Accelerated discovery using AI prototyping tools (v0, Cursor), reducing iteration cycles from weeks to days",
      "Designed scalable, WCAG 2.1 accessible interface, significantly reducing HR support ticket volume"
    ]
  },
  {
    role: "Senior Product Designer",
    company: "Roundel (Target)",
    period: "Sept 2017 – Nov 2023",
    highlights: [
      "Spearheaded design of Cerebro Campaigns, flagship enterprise digital media tool:",
      "• Took product from 0-to-1, defining vision, conducting discovery, establishing foundational design systems",
      "• Designed and iteratively enhanced platform over several years for multiple user personas",
      "• Introduced Media Briefs complementary tool, contributing to increased efficiency and scalability",
      "• Provided design support for segmentation tool, enabling targeted campaign planning",
      "Collaborated within SCRUM team of teams supporting entire Cerebro suite:",
      "• Designed admin tools to manage ad product settings across multiple ad server platforms",
      "• Developed tool to manage pricing structures, ensuring flexibility and accuracy",
      "Delivered measurable outcomes redefining operational efficiency:",
      "• 400% increase in campaign volume within first year",
      "• Reduced campaign planning time from 1 hour to 2 minutes",
      "• Enabled execution of 10,000+ digital campaigns annually for 3,600 advertisers",
      "• Saved 165 work hours weekly through automation (600% productivity increase)",
      "Championed user-centered design:",
      "• Led discovery, user research, iterative design using card sorting and activity-based UX",
      "• Co-designed comprehensive design system, rebuilt components in Figma"
    ]
  },
  {
    role: "Designer, Marketing",
    company: "Leadpages",
    period: "Jun 2016 – Jun 2017",
    highlights: [
      "Redesigned pricing page, 25% conversion increase",
      "Developed cohesive marketing assets for three product brands"
    ]
  },
  {
    role: "User Interface Designer",
    company: "LSQ Funding",
    period: "Mar 2015 – Oct 2015",
    highlights: [
      "Led creation of custom UI component system for financial web application",
      "Redesigned corporate site: 30% traffic increase, 20% conversion boost"
    ]
  },
  {
    role: "Owner/Designer",
    company: "Echo",
    period: "May 2014 – Mar 2015",
    highlights: [
      "Provided branding, web design, and SEO solutions for diverse client base",
      "Developed cohesive brand identities driving engagement and conversions"
    ]
  },
  {
    role: "Interactive Designer",
    company: "MVP Marketing & Design",
    period: "Apr 2013 – May 2014",
    highlights: [
      "Led team of 5 for Nystrom & Associates redesign",
      "5,755 new patient sign-ups, 7,400+ contact completions in first month"
    ]
  },
  {
    role: "Interactive Designer",
    company: "Row27 (now FanMaker)",
    period: "Jan 2012 – Apr 2013",
    highlights: [
      "Designed digital ticketing and loyalty platforms for college and pro sports teams"
    ]
  }
];

const skillGroups = [
  {
    label: "Design",
    skills: [
      "User-Centered Design",
      "Information Architecture",
      "Design Systems",
      "Wireframing",
      "Interaction Design",
      "Systems Thinking",
      "Journey Mapping",
      "WCAG Accessibility",
      "Data Visualization",
      "Stakeholder Management",
      "Workshop Facilitation"
    ]
  },
  {
    label: "AI-Native Design",
    skills: [
      "Claude Code",
      "Cursor",
      "MCP Server Development",
      "Mastra (Agent Frameworks)",
      "v0"
    ]
  },
  {
    label: "Development",
    skills: [
      "React",
      "TypeScript",
      "Tailwind / shadcn",
      "HTML5",
      "CSS3",
      "MapLibre GL",
      "deck.gl",
      "d3",
      "Responsive Web Design"
    ]
  },
  {
    label: "Methods",
    skills: [
      "Agile / Scrum",
      "A/B Testing",
      "Usability Testing",
      "User Research",
      "Discovery & Strategy"
    ]
  }
];

export default function Resume() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6">
      {/* Profile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Profile
        </h2>
        <p className="text-base text-gray-700 leading-relaxed max-w-3xl">
          Product designer with 13+ years simplifying complex enterprise systems, with repeated success leading 0-to-1 platforms at Fortune 500 companies including Target and Cargill. Operates at the intersection of product design, systems architecture, and AI enablement — ships working code and compresses discovery-to-validation cycles from weeks to days.
        </p>
      </motion.div>

      <div className="flex items-baseline justify-between mb-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold text-gray-500 uppercase tracking-wider"
        >
          Experience
        </motion.h2>
        <a
          href="/assets/Brenden_Greenwood_Resume_Jun2026.pdf"
          download
          className="text-sm text-gray-700 border border-gray-300 px-4 py-2 hover:border-gray-900 hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Download PDF Resume
        </a>
      </div>

      <div className="border border-gray-300">
        {experience.map((job, index) => {
          const isExpanded = expandedIndex === index;
          const panelId = `resume-panel-${index}`;
          const headingId = `resume-heading-${index}`;

          return (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={index > 0 ? "border-t border-gray-300" : ""}
            >
              <button
                id={headingId}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                <div className="grid md:grid-cols-[2fr_1fr_auto] gap-4 items-baseline">
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.role}</h3>
                    <div className="text-sm text-gray-600">{job.company}</div>
                  </div>
                  <div className="text-sm text-gray-500">{job.period}</div>
                  <div className="text-gray-500" aria-hidden="true">
                    {isExpanded ? "−" : "+"}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="px-6 pb-6 border-t border-gray-200"
                >
                  <ul className="space-y-2 mt-4">
                    {job.highlights.map((highlight, i) => {
                      const isSubBullet = highlight.startsWith("•");
                      const isHeader = !isSubBullet && highlight.endsWith(":");

                      return (
                        <li key={i} className={`text-sm text-gray-700 flex gap-3 ${isSubBullet ? "ml-6" : ""}`}>
                          {!isHeader && <span className="text-gray-400 flex-shrink-0" aria-hidden="true">•</span>}
                          <span className={isHeader ? "font-semibold" : ""}>
                            {isSubBullet ? highlight.substring(2) : highlight}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-12 space-y-8"
      >
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Skills
        </h2>
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
