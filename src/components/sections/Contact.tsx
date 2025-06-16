
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto"
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
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8"
            >
              <motion.a
                href="mailto:palchaure@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-black font-medium text-base hover:bg-white/90 transition-colors w-full sm:w-auto justify-center"
              >
                <Mail size={20} />
                <span>Drop a Mail</span>
              </motion.a>
              
              <motion.a
                href="/Vishal_Chaure_Resume.txt"
                download="Vishal_Chaure_Resume.txt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-base w-full sm:w-auto justify-center"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="border-t border-white/10 pt-8"
            >
              <p className="text-white/60 text-sm mb-4">Connect with me on social media</p>
              <SocialLinks className="justify-center" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
