
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProjectModal } from "../ui/ProjectModal";

const projectsData = [
  {
    title: "Yummie - Food Delivery Website",
    description: "A full-stack food delivery platform with secure payments and real-time order tracking.",
    summary: "Full-stack food delivery website with payment integration and admin panel.",
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
    description: "Multi-functional calculator app with measurement conversions and real-time currency exchange.",
    summary: "React Native calculator with currency converter and measurement tools.",
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
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="min-h-[70vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
    >
      <div ref={ref} className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 inline-block text-gradient">
            Projects
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
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
              className="group relative cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:border-white/20 h-full">
                <div className="overflow-hidden rounded-xl mb-6 sm:mb-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="h-32 sm:h-36 lg:h-40 flex items-center justify-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30" />
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center px-4 relative z-10">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-sm sm:text-base rounded-full bg-white/10 text-white/70 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-white/50 mb-4 sm:mb-6">
                  {project.timeline}
                </p>

                <div className="flex justify-center">
                  <span className="text-white/60 hover:text-white transition-colors text-sm sm:text-base font-medium">
                    Click to view details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};
