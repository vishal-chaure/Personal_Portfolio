
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set a dark theme meta tag for browsers
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = "#000000";
    document.head.appendChild(meta);

    // Set page title
    document.title = "Vishal Chaure | Portfolio";

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      {/* <Achievements /> */}
      <Contact />
      <footer className="py-8 text-center text-white/50 text-sm">
        <div className="container mx-auto">
          <p>© 2024 Vishal Chaure. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
