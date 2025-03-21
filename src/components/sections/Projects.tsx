
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
      className="min-h-screen flex items-center justify-center section-padding"
    >
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            Projects
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-morphism p-6 rounded-2xl overflow-hidden group"
            >
              <div className="overflow-hidden rounded-lg mb-6 bg-white/5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-40 bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center"
                >
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </motion.div>
              </div>

              <div className="mb-4">
                <p className="text-white/70 mb-4">{project.description}</p>
                <ul className="ml-5 list-disc text-white/70 space-y-1">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-white/50 mb-4">{project.timeline}</p>

              <div className="flex justify-between items-center">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
