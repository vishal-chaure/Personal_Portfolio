import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const educationData = [
  {
    institution: "Sardar Patel Institute of Technology",
    degree: "Bachelor in Technology in Computer Engineering",
    location: "Andheri west, Mumbai",
    duration: "Nov 2022 - June 2026",
  },
  {
    institution: "B K Birla College of Science, Commerce and Arts",
    degree: "12th Science HSC",
    location: "Kalyan west, Thane",
    duration: "June 2020 - May 2022",
  },
  {
    institution: "Nutan Dnyan Mandir School And Junior College",
    degree: "10th SSC Maharashtra Board",
    location: "Kalyan east, Thane",
    duration: "June 2011 - June 2020",
  },
];

export const Education: React.FC = () => {
  const { ref, isInView } = useScrollAnimation({ once: false });

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center section-padding"
    >
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 inline-block text-gradient">
            Education
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-white/20 transform md:-translate-x-1/2"></div>

          {/* Education items */}
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 sm:mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:text-right md:pr-12 md:mr-auto md:ml-0" : "md:text-left md:pl-12 md:ml-auto md:mr-0"
              } md:w-[45%]`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-[-8px] md:left-auto md:right-[-8px] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white z-10"></div>

              <div className="glass-morphism p-4 sm:p-6 rounded-2xl md:rounded-2xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gradient">
                  {item.institution}
                </h3>
                <p className="text-white text-sm sm:text-base mb-2">{item.degree}</p>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center text-white/60 text-xs sm:text-sm">
                  <span>{item.location}</span>
                  <span>{item.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
