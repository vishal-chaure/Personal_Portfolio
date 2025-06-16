
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
      className="min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center px-3 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16"
    >
      <div ref={ref} className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 lg:mb-12 text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 inline-block text-gradient">
            About Me
          </h2>
          <div className="w-12 sm:w-16 lg:w-20 h-0.5 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-xl bg-white/5 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6 px-1 sm:px-0"
          >
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-gradient">Who I Am</h3>
              <p className="text-white/70 mb-2 sm:mb-3 leading-relaxed text-xs sm:text-sm lg:text-base">
                I am a motivated and detail-oriented Computer Science student with a 
                solid foundation in software development and a keen interest in 
                cutting-edge technologies.
              </p>
              <p className="text-white/70 mb-2 sm:mb-3 leading-relaxed text-xs sm:text-sm lg:text-base">
                My passion lies in building efficient, scalable applications and solving 
                complex problems using data structures and algorithms.
              </p>
              <p className="text-white/70 leading-relaxed text-xs sm:text-sm lg:text-base">
                Currently pursuing my Bachelor of Technology in Computer Engineering 
                at Sardar Patel Institute of Technology, Mumbai, where I am honing my 
                technical skills and exploring new technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-3">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-2 sm:p-3">
                <h4 className="font-semibold mb-1 text-white/90 text-xs sm:text-sm">Location</h4>
                <p className="text-white/60 text-xs">Mumbai, India</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-2 sm:p-3">
                <h4 className="font-semibold mb-1 text-white/90 text-xs sm:text-sm">Education</h4>
                <p className="text-white/60 text-xs">SPIT, 3rd Year</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-2 sm:p-3">
                <h4 className="font-semibold mb-1 text-white/90 text-xs sm:text-sm">Focus</h4>
                <p className="text-white/60 text-xs">Full Stack & DSA</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-2 sm:p-3">
                <h4 className="font-semibold mb-1 text-white/90 text-xs sm:text-sm">Status</h4>
                <p className="text-white/60 text-xs">Open to work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
