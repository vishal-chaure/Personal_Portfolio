
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        padding: isScrolled ? "0.75rem 0" : "1.5rem 0",
        backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <nav className="section-container px-6 md:px-12 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold text-gradient"
          animate={{
            fontSize: isScrolled ? "1.25rem" : "1.5rem",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          VC
        </motion.a>

        {/* Desktop Navigation */}
        <motion.ul 
          className="hidden md:flex items-center space-x-8"
          animate={{
            gap: isScrolled ? "1.5rem" : "2rem",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {navLinks.map((link) => (
            <motion.li key={link.href} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <motion.a
                href={link.href}
                className="text-white/70 hover:text-white transition-colors"
                animate={{
                  fontSize: isScrolled ? "0.875rem" : "1rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {link.label}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          animate={{
            scale: isScrolled ? 0.9 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden neo-blur overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 0 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors block py-2"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
