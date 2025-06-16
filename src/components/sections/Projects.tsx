import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProjectModal } from "../ui/ProjectModal";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  summary: string;
  technologies: string[];
  details: string[];
  timeline: string;
  links: {
    github: string;
    live: string;
  };
  image?: string;
}

const projectsData: Project[] = [
  {
    title: "RetinaAI - Diabetic Retinopathy Detection",
    description: "An ML-powered web application for detecting and classifying Diabetic Retinopathy stages from retinal images.",
    summary: "AI-powered web application for diabetic retinopathy detection using deep learning.",
    technologies: ["React", "Supabase", "Python", "Flask", "Keras", "Numpy", "TensorFlow", "Scikit-learn", "matplotlib"],
    details: [
      "Deep learning model using ResNet-50 for retinopathy detection",
      "Real-time image analysis and classification",
      "User-friendly severity level display with precautionary guidance",
      "Secure user authentication and prediction history storage"
    ],
    timeline: "March 2024",
    links: {
      github: "https://github.com/vishal-chaure/RetinaAI_V2",
      live: "https://retinaai.vercel.app/"
    },
    image: "/projects/diabetic-retinopathy.png"
  },
  {
    title: "SAMARTH - Smart Policing Platform",
    description: "A comprehensive smart policing platform for Mumbai featuring crime intensity prediction, FIR case prioritization, and secure evidence storage.",
    summary: "Smart policing platform with ML-powered crime prediction and secure evidence storage.",
    technologies: ["React", "Supabase", "Flask", "Streamlit", "IPFS", "scikit-learn"],
    details: [
      "Crime intensity prediction across 24 wards using ML models with interactive heatmap",
      "FIR case prioritization using Random Forest and Gradient Boosting",
      "Tamper-proof evidence storage with IPFS and unique CIDs",
      "Media anomaly detection for suspect uploads",
      "Secure citizen reporting portal with role-based access"
    ],
    timeline: "Ongoing",
    links: {
      github: "https://github.com/aayushman1403/SAMARTH",
      live: "none"
    },
    image: "/projects/samarth.png"
  },
  {
    title: "Yummie - Food Delivery Platform",
    description: "A full-stack food delivery platform with real-time order tracking and secure payment processing.",
    summary: "Full-stack food delivery platform with payment integration and admin panel.",
    technologies: ["MERN Stack", "Stripe", "MongoDB"],
    details: [
      "Responsive food delivery platform with menu browsing and order tracking",
      "Secure payment processing with Stripe integration",
      "Dynamic admin dashboard for order management",
      "Efficient data storage with MongoDB"
    ],
    timeline: "August 2024",
    links: {
      github: "https://github.com/vishal-chaure/FoodDel",
      live: "none"
    },
    image: "/projects/yummie.png"
  },
  // {
  //   title: "Calculator App with Currency Converter",
  //   description: "A multi-functional calculator app with real-time currency conversion capabilities.",
  //   summary: "React Native calculator with currency converter and measurement tools.",
  //   technologies: ["React Native", "ExchangeRate API"],
  //   details: [
  //     "Basic arithmetic operations",
  //     "Unit conversions for length, weight, and temperature",
  //     "Real-time currency conversion using ExchangeRate API",
  //     "Cross-platform mobile application"
  //   ],
  //   timeline: "July 2024",
  //   links: {
  //     github: "https://github.com/yourusername/calculator-app",
  //     live: "https://calculator-demo.com"
  //   },
  //   image: "/projects/calculator.png"
  // },
  
];

export const Projects: React.FC = () => {
  const { ref, isInView } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="min-h-[70vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
    >
      <div ref={ref} className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 inline-block text-gradient">
            Projects
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-900 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-zinc-800 transition-colors cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.image || "/projects/default-project.png"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
                {project.title}
              </h3>

              <div className="mb-6 sm:mb-8">
                <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3 mb-8">
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={18} />
                  <span>Github</span>
                </motion.a>
                {project.links.live !== 'none' && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-colors text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                    <span>Live</span>
                  </motion.a>
                )}
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm sm:text-base rounded-full bg-white/10 text-white/70 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};
