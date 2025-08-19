import React from "react";
import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "React Native", "Node.js", "Express.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "Tableau", "VS Code"],
  },
];

const coreCompetencies = [
  "Frontend Development",
  "Backend Development", 
  "Data Structures & Algorithms",
  "Problem Solving"
];

export const Skills: React.FC = () => {
  const { ref, isInView } = useScrollAnimation({ once: false });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section
      id="skills"
      className="min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-24 sm:py-16 lg:py-32"
    >
      <div ref={ref} className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 inline-block text-gradient">
            Technical Skills
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center space-y-3 sm:space-y-5"
            >
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-gradient"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {category.title}
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-2 sm:space-y-4"
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="text-white/80 hover:text-white transition-colors font-medium text-sm sm:text-base lg:text-lg cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
              <div className="md:hidden w-32 h-0.5 bg-white/20 mx-auto rounded-full my-6"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 sm:mb-10 text-gradient">
            Core Competencies
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
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
                <p className="font-medium text-white/80 hover:text-white transition-colors text-sm sm:text-base lg:text-lg">
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
