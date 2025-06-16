
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Instagram } from "lucide-react";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    href: "mailto:palchaure@gmail.com",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/vishal-chaure",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/vishalchaure",
    label: "GitHub",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/vishalchaure",
    label: "Instagram",
  },
  {
    icon: Code2,
    href: "https://leetcode.com/vishalchaure",
    label: "LeetCode",
  },
];

const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.2, y: -5 },
};

export const SocialLinks: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          initial="initial"
          whileHover="hover"
          className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        >
          <motion.div variants={iconVariants}>
            <link.icon size={20} className="sm:w-6 sm:h-6" />
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
};
