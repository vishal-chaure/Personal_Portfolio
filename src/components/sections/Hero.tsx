import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedText } from "../ui/AnimatedText";
import { ResumeButton } from "../ui/ResumeButton";
import { SocialLinks } from "../ui/SocialLinks";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export const Hero: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();


  const words = [
    {
      text: "Vishal",
    },
    {
      text: "Chaure",
    }
  ];
  
  return (
    <section
      id="home"
      className="min-h-[100vh] sm:min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center px-3 sm:px-6 lg:px-10 relative overflow-hidden"
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
        className=" max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto relative z-10 flex flex-col items-center justify-center text-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-3 lg:mb-4 inline-block px-4"
        >
          <span className="text-white/60 font-light text-sm sm:text-base lg:text-lg xl:text-xl">Hey There! I'm</span>
        </motion.div>

       
        <TypewriterEffectSmooth words={words} />

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base lg:text-xl xl:text-2xl font-light text-white/70 mb-12 sm:mb-16 lg:mb-20 max-w-xl lg:max-w-2xl px-6 sm:px-8"
        >
          Full-Stack Web Developer
            with expertise in scalable systems
            and a passion for algorithmic problem-solving.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-8 sm:mt-10 lg:mt-12 w-full max-w-[280px] sm:max-w-md"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-5 lg:px-6 py-2.5 sm:py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors text-center"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-5 lg:px-6 py-2.5 sm:py-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-sm text-center"
          >
            Contact Me
          </motion.a>
          <ResumeButton />
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.4 }}
        className="w-52 mt-20 sm:w-40 lg:w-40 h-0.5 bg-white/20 mx-auto rounded-full"/>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="flex justify-center mt-4 sm:mt-6"
        >
          <SocialLinks />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-2 sm:bottom-6 lg:bottom-2 xl:bottom-2 left-1/2 transform -translate-x-1/2 z-10"
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
              className="text-white/50 mb-24"
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
