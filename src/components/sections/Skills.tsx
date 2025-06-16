
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "Java", "Python", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "React Native", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Databases & Tools",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Figma"],
  },
];

const coreCompetencies = [
  "Frontend Development",
  "Backend Development", 
  "Data Structures & Algorithms",
  "Problem Solving"
];

export const Skills: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="skills"
      className="min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16"
    >
      <div ref={ref} className="max-w-4xl lg:max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 lg:mb-12 text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 inline-block text-gradient">
            Technical Skills
          </h2>
          <div className="w-12 sm:w-16 lg:w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 lg:mb-6 text-gradient"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {category.title}
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-2 sm:space-y-3"
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="text-white/80 hover:text-white transition-colors font-medium text-sm sm:text-base cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 sm:mb-8 text-gradient">
            Core Competencies
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {coreCompetencies.map((competency, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                className="text-center cursor-default"
              >
                <p className="font-medium text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  {competency}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
