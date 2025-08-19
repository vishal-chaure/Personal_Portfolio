import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProjectModal } from "../ui/ProjectModal";
import { Github, ExternalLink } from "lucide-react";
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack'

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
    title: "AlgoSync - DSA Question Manager",
    description: "A full-stack platform to manage and solve DSA problems with AI-powered assistance, smart parsing, and progress tracking.",
    summary: "AI-driven DSA manager with smart parsing, code generation, and progress tracking.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Express.js", "Google Gemini AI", "shadcn/ui", "Vite"],
    details: [
      "Built a full-stack platform for DSA question management with AI-assisted code generation and note-taking",
      "Implemented smart question parsing to auto-extract title, difficulty, examples, and tags from raw content",
      "Integrated Google Gemini AI to assist users with context-aware code generation and chatbot interaction",
      "Sleek UI with TailwindCSS, shadcn/ui components, dark mode, and glassmorphism design",
      "Backend with Express.js and MongoDB, supporting JWT auth, code saving, and user profile syncing",
    ],
    timeline: "June 2024",
    links: {
      github: "https://github.com/vishal-chaure/AlgoSync_Frontend",
      live: "https://algosyncv1.vercel.app"
    },
    image: "/projects/algosync.png"
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
          className="mb-2 sm:mb-16 lg:mb-2 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 inline-block text-gradient">
            Projects
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative h-[80vh]">
          <ScrollStack
            className="rounded-3xl h-[60vh] scrollbar-none"
            itemDistance={120}
            itemScale={0.04}
            itemStackDistance={40}
            stackPosition="25%"
            scaleEndPosition="12%"
            baseScale={0.85}
          >
            {projectsData.map((project, index) => (
              <ScrollStackItem
                key={index}
                itemClassName="h-[30vh] bg-zinc-900/80 backdrop-blur-md border border-white/5  transition-colors cursor-pointer"
              >
                <div
                  className="w-full h-full flex flex-col md:flex-row gap-4 md:gap-8"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="flex-1 flex flex-col md:pr-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed line-clamp-4 mb-4">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <div className="flex gap-3 mb-4">
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-xs sm:text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          <span>Github</span>
                        </motion.a>
                        {project.links.live !== 'none' && (
                          <motion.a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white text-black hover:bg-white/90 transition-colors text-xs sm:text-sm font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} />
                            <span>Live</span>
                          </motion.a>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs sm:text-sm rounded-full bg-white/10 text-white/70 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full md:w-[45%] h-48 md:h-full rounded-xl overflow-hidden">
                    <img
                      src={project.image || "/projects/default-project.png"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
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
