
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "Java", "Python", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "React Native", "Node.js", "Express.js", "Bootstrap"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Adobe", "Figma", "VS Code", "IntelliJ"],
  },
];

export const Skills: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="skills"
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
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-morphism p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-4 py-2 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                  >
                    {skill}
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
          className="mt-12 glass-morphism p-6 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gradient text-center">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Web Development</h4>
              <div className="space-y-4">
                <SkillBar label="Frontend Development" percentage={85} />
                <SkillBar label="Backend Development" percentage={80} />
                <SkillBar label="Responsive Design" percentage={90} />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Programming</h4>
              <div className="space-y-4">
                <SkillBar label="Data Structures" percentage={90} />
                <SkillBar label="Algorithms" percentage={85} />
                <SkillBar label="Problem Solving" percentage={88} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  label: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ label, percentage }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};
