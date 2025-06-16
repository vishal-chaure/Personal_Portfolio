
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
      className="min-h-[80vh] sm:min-h-[85vh] lg:min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-6 relative overflow-hidden"
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
        className="max-w-2xl lg:max-w-3xl mx-auto relative z-10 flex flex-col items-center justify-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-4 lg:mb-5 inline-block"
        >
          <span className="text-white/50 font-light text-sm sm:text-base lg:text-lg">Hello, I am</span>
        </motion.div>

        <AnimatedText
          text="Vishal Chaure"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 lg:mb-6 text-gradient"
        />

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg lg:text-xl font-light text-white/70 mb-6 sm:mb-8 lg:mb-10 max-w-xl lg:max-w-2xl"
        >
          Full Stack Developer & Data Structures and Algorithms Expert
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 rounded-lg bg-white text-black font-medium text-sm sm:text-base hover:bg-white/90 transition-colors"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-sm sm:text-base"
          >
            Contact Me
          </motion.a>
          <ResumeButton />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <SocialLinks />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" aria-label="Scroll down">
            <svg
              width="20"
              height="20"
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
