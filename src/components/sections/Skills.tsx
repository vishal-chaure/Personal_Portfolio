
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", color: "text-blue-400" },
      { name: "Java", color: "text-orange-500" },
      { name: "Python", color: "text-yellow-400" },
      { name: "SQL", color: "text-blue-500" },
      { name: "JavaScript", color: "text-yellow-300" },
      { name: "HTML/CSS", color: "text-orange-400" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", color: "text-cyan-400" },
      { name: "React Native", color: "text-cyan-300" },
      { name: "Node.js", color: "text-green-400" },
      { name: "Express.js", color: "text-gray-300" },
      { name: "Bootstrap", color: "text-purple-400" },
      { name: "Tailwind CSS", color: "text-teal-400" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", color: "text-green-500" },
      { name: "MySQL", color: "text-blue-600" },
      { name: "Git", color: "text-orange-500" },
      { name: "GitHub", color: "text-gray-300" },
      { name: "VS Code", color: "text-blue-400" },
      { name: "Figma", color: "text-pink-400" },
    ],
  },
];

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const Skills: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="skills"
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
            Technical Skills
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-morphism p-6 sm:p-8 rounded-2xl group hover:bg-white/10 transition-all duration-500"
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-semibold mb-6 text-gradient"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {category.title}
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index * 0.2) + (idx * 0.1),
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    animate={{
                      ...floatingAnimation,
                      transition: {
                        ...floatingAnimation.transition,
                        delay: idx * 0.5
                      }
                    }}
                    className="flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group/skill border border-white/5 hover:border-white/20"
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-2 ${skill.color} group-hover/skill:scale-110 transition-transform duration-300`}>
                      <div className="w-4 h-4 rounded-full bg-current opacity-80"></div>
                    </div>
                    <span className="text-sm font-medium text-white/80 group-hover/skill:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 glass-morphism p-6 sm:p-8 rounded-2xl"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-gradient text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Frontend Development", icon: "🎨" },
              { label: "Backend Development", icon: "⚙️" },
              { label: "Data Structures & Algorithms", icon: "🧮" },
              { label: "Problem Solving", icon: "🧩" }
            ].map((competency, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + (idx * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20"
              >
                <motion.div 
                  className="text-3xl mb-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                >
                  {competency.icon}
                </motion.div>
                <p className="font-medium text-white/80 text-sm">
                  {competency.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
