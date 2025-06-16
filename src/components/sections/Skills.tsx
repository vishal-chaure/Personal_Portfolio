
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            Technical Skills
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500"
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-semibold mb-6 text-gradient"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {category.title}
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-3"
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    className="text-white/80 hover:text-white transition-colors font-medium text-sm sm:text-base cursor-default bg-white/5 rounded-lg px-4 py-2 border border-white/5 hover:border-white/20"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-gradient text-center">
            Core Competencies
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {coreCompetencies.map((competency, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20 cursor-default"
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
