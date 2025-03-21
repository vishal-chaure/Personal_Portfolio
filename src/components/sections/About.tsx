
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-morphism p-6 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-white/70 mb-4">
              I am a motivated and detail-oriented Computer Science student with a 
              solid foundation in software development and a keen interest in 
              cutting-edge technologies.
            </p>
            <p className="text-white/70 mb-4">
              My passion lies in building efficient, scalable applications and solving 
              complex problems using data structures and algorithms.
            </p>
            <p className="text-white/70">
              I am currently pursuing my Bachelor of Technology in Computer Engineering 
              at Sardar Patel Institute of Technology, Mumbai, where I am honing my 
              technical skills and exploring new technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-6"
          >
            <div className="glass-morphism p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">My Objective</h3>
              <p className="text-white/70">
                Seeking a challenging opportunity to apply my technical expertise and 
                academic knowledge, contribute to impactful projects, and enhance my 
                professional growth in the field of software development.
              </p>
            </div>

            <div className="glass-morphism p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">My Focus</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Full Stack Web Development</li>
                <li>Data Structures and Algorithms</li>
                <li>Problem Solving</li>
                <li>Mobile App Development</li>
                <li>Database Management</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
