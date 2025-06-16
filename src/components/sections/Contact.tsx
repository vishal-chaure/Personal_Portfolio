
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SocialLinks } from "../ui/SocialLinks";
import { Mail, Download } from "lucide-react";

export const Contact: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center px-3 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16"
    >
      <div ref={ref} className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 lg:mb-12 text-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 inline-block text-gradient">
            Get In Touch
          </h2>
          <div className="w-12 sm:w-16 lg:w-20 h-0.5 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto px-1"
            >
              Want to collaborate, ask something or chat? Be sure to contact me through any of my social media. 
              You can also drop me an email and I will try to reply as soon as possible. I am also open to 
              freelance projects, so do not hesitate to hit me up if you wish to work together on new and 
              exciting projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center items-center mb-4 sm:mb-6 lg:mb-8 max-w-lg mx-auto"
            >
              <motion.a
                href="mailto:palchaure@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-lg bg-white text-black font-medium text-xs sm:text-sm hover:bg-white/90 transition-colors w-full sm:w-auto justify-center flex-1"
              >
                <Mail size={16} />
                <span>Drop a Mail</span>
              </motion.a>
              
              <motion.a
                href="/Vishal_Chaure_Resume.txt"
                download="Vishal_Chaure_Resume.txt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-xs sm:text-sm w-full sm:w-auto justify-center flex-1"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="border-t border-white/10 pt-4 sm:pt-6"
            >
              <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3">Connect with me on social media</p>
              <SocialLinks className="justify-center" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
