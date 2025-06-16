
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-xl bg-white/5 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gradient">Who I Am</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                I am a motivated and detail-oriented Computer Science student with a 
                solid foundation in software development and a keen interest in 
                cutting-edge technologies.
              </p>
              <p className="text-white/70 mb-4 leading-relaxed">
                My passion lies in building efficient, scalable applications and solving 
                complex problems using data structures and algorithms.
              </p>
              <p className="text-white/70 leading-relaxed">
                Currently pursuing my Bachelor of Technology in Computer Engineering 
                at Sardar Patel Institute of Technology, Mumbai, where I am honing my 
                technical skills and exploring new technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <h4 className="font-semibold mb-2 text-white/90">Location</h4>
                <p className="text-white/60 text-sm">Mumbai, India</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <h4 className="font-semibold mb-2 text-white/90">Education</h4>
                <p className="text-white/60 text-sm">SPIT, 3rd Year</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <h4 className="font-semibold mb-2 text-white/90">Focus</h4>
                <p className="text-white/60 text-sm">Full Stack & DSA</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <h4 className="font-semibold mb-2 text-white/90">Status</h4>
                <p className="text-white/60 text-sm">Open to work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
