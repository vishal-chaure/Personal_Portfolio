
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
      className="min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20"
    >
      <div ref={ref} className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 lg:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 inline-block text-gradient">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 lg:p-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-2"
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
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 justify-center items-center mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto"
            >
              <motion.a
                href="mailto:palchaure@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 rounded-lg bg-white text-black font-medium text-base sm:text-lg hover:bg-white/90 transition-colors w-full sm:w-auto justify-center flex-1"
              >
                <Mail size={20} />
                <span>Drop a Mail</span>
              </motion.a>
              
              <motion.a
                href="/Vishal_Chaure_Resume.txt"
                download="Vishal_Chaure_Resume.txt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-base sm:text-lg w-full sm:w-auto justify-center flex-1"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="border-t border-white/10 pt-8 sm:pt-10"
            >
              <p className="text-white/60 text-sm sm:text-base mb-4 sm:mb-5">Connect with me on social media</p>
              <SocialLinks className="justify-center" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
