
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Yummie - Food Delivery Website",
    description: "Developed a full-stack food delivery website allowing users to browse the menu, place orders, and track their deliveries.",
    technologies: ["MERN Stack", "Stripe"],
    details: [
      "Implemented Stripe for secure payment processing and authentication.",
      "Designed an admin panel for restaurant owners to manage orders and track order details in real-time.",
      "Integrated backend with MongoDB for efficient order management and data storage.",
    ],
    timeline: "August 2024 - Present",
    links: {
      github: "https://github.com/vishalchaure/yummie-food-delivery",
      live: "#",
    },
  },
  {
    title: "Calculator App with Currency Converter",
    description: "Built a multi-functional calculator app with features for general calculations, as well as measurement conversions for length, weight, and temperature.",
    technologies: ["React Native"],
    details: [
      "Built a multi-functional calculator app with features for general calculations, as well as measurement conversions for length, weight, and temperature.",
      "Integrated a currency converter with real-time currency data, offering accurate exchange rates for global currencies.",
    ],
    timeline: "July 2024",
    links: {
      github: "https://github.com/vishalchaure/calculator-app",
      live: "#",
    },
  },
];

export const Projects: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div ref={ref} className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:border-white/20">
                <div className="overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="h-32 sm:h-40 flex items-center justify-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30" />
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center px-4 relative z-10">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>

                <div className="mb-6">
                  <p className="text-white/70 mb-4 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="ml-4 list-disc text-white/60 space-y-2 text-sm">
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/10 text-white/70 border border-white/5 hover:bg-white/15 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-white/50 mb-6">
                  {project.timeline}
                </p>

                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
