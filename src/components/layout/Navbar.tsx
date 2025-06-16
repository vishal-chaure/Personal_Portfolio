import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SocialLinks } from "../ui/SocialLinks";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  // { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Set initial state without animation
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        // padding: isScrolled ? "0.2rem 0" : "0.22rem 0",
        backdropFilter: "blur(16px)",
        backgroundColor: "glass-morphism",
        borderBottom: isScrolled 
          ? "1px solid rgba(255, 255, 255, 0.1)" 
          : "1px solid transparent",
        boxShadow: isScrolled 
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none"
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <nav className="section-container px-5 md:px-5 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="relative flex items-center "
          animate={{
            scale: isScrolled ? 0.9 : 1,
            height: isScrolled ? '4.375rem' : '5.625rem',
          }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          initial={false}
        >
          <img
            src="/favicon.ico"
            alt="Logo"
            style={{
              width: isScrolled ? '4.375rem' : '5.625rem',  // Use rem units
              height: 'auto',  // Better for responsiveness
              transition: 'width 0.3s ease-in-out'
            }}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <motion.ul 
          className="hidden md:flex items-center"
          animate={{
            gap: isScrolled ? "1.8rem" : "2.5rem",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          initial={false}
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
                initial={false}
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
            scale: isScrolled ? 0.8 : 1.0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          initial={false}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backdropFilter: "blur(16px)",
              backgroundColor: "glass-morphism",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
            }}
            className="md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 0 }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors block py-2 px-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      setTimeout(() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
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