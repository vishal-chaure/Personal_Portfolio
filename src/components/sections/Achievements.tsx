
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Trophy, Award } from "lucide-react";

const achievements = [
  {
    title: "LeetCode Profile",
    icon: Code2,
    details: [
      "Solved over 300+ problems across various difficulty levels.",
      "Maintained a daily streak of 150+ days on the LeetCode platform.",
      "Focus areas include algorithms, data structures, and system design.",
    ],
  },
  {
    title: "Coding Competitions",
    icon: Trophy,
    details: [
      "Participated in multiple hackathons and coding competitions.",
      "Ranked among top contestants in college-level coding contests.",
      "Received recognition for innovative problem-solving approaches.",
    ],
  },
  {
    title: "Academic Excellence",
    icon: Award,
    details: [
      "Consistently maintained a high CGPA throughout academic career.",
      "Recognized for outstanding performance in programming courses.",
      "Selected for special mentorship programs due to academic achievements.",
    ],
  },
];

export const Achievements: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="achievements"
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
            Achievements
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-morphism p-6 rounded-2xl"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-full bg-white/10">
                  <achievement.icon
                    size={28}
                    className="text-gradient"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {achievement.title}
                  </h3>
                  <ul className="space-y-2 text-white/70">
                    {achievement.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
