
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedText } from "../ui/AnimatedText";
import { ResumeButton } from "../ui/ResumeButton";

export const Hero: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="home"
      className="min-h-[65vh] sm:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center px-3 sm:px-6 lg:px-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-black to-black"
        />
      </div>

      <div
        ref={ref}
        className="max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto relative z-10 flex flex-col items-center justify-center text-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 sm:mb-3 lg:mb-4 inline-block"
        >
          <span className="text-white/50 font-light text-xs sm:text-sm lg:text-base">Hello, I am</span>
        </motion.div>

        <AnimatedText
          text="Vishal Chaure"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gradient"
        />

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base lg:text-lg font-light text-white/70 mb-6 sm:mb-8 lg:mb-10 max-w-xl lg:max-w-2xl px-2"
        >
          Full Stack Developer & Data Structures and Algorithms Expert
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-10 w-full max-w-sm sm:max-w-md"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg bg-white text-black font-medium text-xs sm:text-sm hover:bg-white/90 transition-colors flex-1 text-center"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-xs sm:text-sm flex-1 text-center"
          >
            Contact Me
          </motion.a>
          <ResumeButton />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" aria-label="Scroll down">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/50"
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
