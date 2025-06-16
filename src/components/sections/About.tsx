
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
      className="min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20"
    >
      <div ref={ref} className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 lg:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 inline-block text-gradient">
            About Me
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-xl bg-white/5 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 sm:space-y-7 lg:space-y-8 px-2 sm:px-0"
          >
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-5 text-gradient">Who I Am</h3>
              <p className="text-white/70 mb-4 sm:mb-5 leading-relaxed text-base sm:text-lg">
                I am a motivated and detail-oriented Computer Science student with a 
                solid foundation in software development and a keen interest in 
                cutting-edge technologies.
              </p>
              <p className="text-white/70 mb-4 sm:mb-5 leading-relaxed text-base sm:text-lg">
                My passion lies in building efficient, scalable applications and solving 
                complex problems using data structures and algorithms.
              </p>
              <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                Currently pursuing my Bachelor of Technology in Computer Engineering 
                at Sardar Patel Institute of Technology, Mumbai, where I am honing my 
                technical skills and exploring new technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-4 sm:pt-5">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-5">
                <h4 className="font-semibold mb-2 text-white/90 text-base sm:text-lg">Location</h4>
                <p className="text-white/60 text-sm sm:text-base">Mumbai, India</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-5">
                <h4 className="font-semibold mb-2 text-white/90 text-base sm:text-lg">Education</h4>
                <p className="text-white/60 text-sm sm:text-base">SPIT, 3rd Year</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-5">
                <h4 className="font-semibold mb-2 text-white/90 text-base sm:text-lg">Focus</h4>
                <p className="text-white/60 text-sm sm:text-base">Full Stack & DSA</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 sm:p-5">
                <h4 className="font-semibold mb-2 text-white/90 text-base sm:text-lg">Status</h4>
                <p className="text-white/60 text-sm sm:text-base">Open to work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
