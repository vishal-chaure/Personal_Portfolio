
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export const ResumeButton: React.FC = () => {
  return (
    <motion.a
      href="/Vishal_Chaure_Resume.txt"
      download="Vishal_Chaure_Resume.txt"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
    >
      <Download size={18} />
      <span>Resume</span>
    </motion.a>
  );
};
