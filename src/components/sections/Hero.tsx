
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedText } from "../ui/AnimatedText";
import { SocialLinks } from "../ui/SocialLinks";
import { ResumeButton } from "../ui/ResumeButton";

export const Hero: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="home"
      className="min-h-[75vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 relative overflow-hidden"
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
        className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto relative z-10 flex flex-col items-center justify-center text-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-5 lg:mb-6 inline-block"
        >
          <span className="text-white/50 font-light text-base sm:text-lg lg:text-xl">Hello, I am</span>
        </motion.div>

        <AnimatedText
          text="Vishal Chaure"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 sm:mb-6 lg:mb-8 text-gradient"
        />

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-xl lg:text-2xl font-light text-white/70 mb-8 sm:mb-10 lg:mb-12 max-w-3xl lg:max-w-4xl px-4"
        >
          Full Stack Developer & Data Structures and Algorithms Expert
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-10 sm:mb-12 lg:mb-14 w-full max-w-lg"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 sm:px-8 lg:px-9 py-3 sm:py-3.5 rounded-lg bg-white text-black font-medium text-base sm:text-lg hover:bg-white/90 transition-colors flex-1 text-center"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 sm:px-8 lg:px-9 py-3 sm:py-3.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-base sm:text-lg flex-1 text-center"
          >
            Contact Me
          </motion.a>
          <ResumeButton />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full flex justify-center"
        >
          <SocialLinks />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" aria-label="Scroll down">
            <svg
              width="22"
              height="22"
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
