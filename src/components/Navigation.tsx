import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "case-studies", label: "Case Studies" },
  { id: "prototypes", label: "Prototypes" },
  { id: "tools", label: "Tools" },
  { id: "resume", label: "Resume" }
];

export default function Navigation() {
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Check if navigation should be fixed
      const heroHeight = document.querySelector("header")?.offsetHeight || 0;
      setIsFixed(window.scrollY > heroHeight);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const nav = document.querySelector("nav");
    if (element && nav) {
      const navHeight = nav.offsetHeight;
      const elementPosition = element.offsetTop - navHeight - 16; // Add small padding
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`bg-white border-b border-gray-300 transition-all duration-200 ${
        isFixed ? "fixed top-0 left-0 right-0 z-50 shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex gap-1 py-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? "text-gray-900 bg-gray-100 border border-gray-300"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
