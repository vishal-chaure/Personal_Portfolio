
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    details: string[];
    timeline: string;
    links: {
      github: string;
      live: string;
    };
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">
                {project.title}
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="text-white/60 text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/10 text-white/70 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-white/50">{project.timeline}</p>
            </div>

            <div className="flex gap-4">
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
              >
                <Github size={18} />
                <span>View Code</span>
              </motion.a>
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-colors text-sm font-medium"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
