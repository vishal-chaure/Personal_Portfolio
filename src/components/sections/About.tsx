
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-12 sm:w-16 lg:w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-xl bg-white/5 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-gradient">Who I Am</h3>
              <p className="text-white/70 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                I am a motivated and detail-oriented Computer Science student with a 
                solid foundation in software development and a keen interest in 
                cutting-edge technologies.
              </p>
              <p className="text-white/70 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                My passion lies in building efficient, scalable applications and solving 
                complex problems using data structures and algorithms.
              </p>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                Currently pursuing my Bachelor of Technology in Computer Engineering 
                at Sardar Patel Institute of Technology, Mumbai, where I am honing my 
                technical skills and exploring new technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4">
                <h4 className="font-semibold mb-2 text-white/90 text-sm sm:text-base">Location</h4>
                <p className="text-white/60 text-xs sm:text-sm">Mumbai, India</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4">
                <h4 className="font-semibold mb-2 text-white/90 text-sm sm:text-base">Education</h4>
                <p className="text-white/60 text-xs sm:text-sm">SPIT, 3rd Year</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4">
                <h4 className="font-semibold mb-2 text-white/90 text-sm sm:text-base">Focus</h4>
                <p className="text-white/60 text-xs sm:text-sm">Full Stack & DSA</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4">
                <h4 className="font-semibold mb-2 text-white/90 text-sm sm:text-base">Status</h4>
                <p className="text-white/60 text-xs sm:text-sm">Open to work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
