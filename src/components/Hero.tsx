// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = "/Samio_cv.pdf";
    link.download = "Samio_Hasan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Samio{" "}
          <Typewriter
            words={["Hasan"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8">
          Full-Stack Developer | Software Developer | Problem Solver
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          I create elegant, functional web solutions with modern technologies.
          Passionate about building full-stack applications that make a
          difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 rounded-full font-medium text-lg"
          >
            View Projects
          </Button>
          <Button
            onClick={downloadCV}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-medium text-lg flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-10"
      >
        <ChevronDown
          className="h-8 w-8 text-gray-400 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
        />
      </motion.div>
    </section>
  );
}
