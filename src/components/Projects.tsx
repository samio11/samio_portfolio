"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Cartify",
    description:
      "An e-commerce platform for tech gadgets with secure payment integration.",
    image: "/p1.png",
    technologies: ["Next.js", "TypeScript", "MongoDB", "SSLCommerz"],
    githubUrl: "https://github.com/samio11/Cartify_client",
    liveUrl:
      "https://drive.google.com/file/d/1j0zbbrBP_P2ZG_jMSnnr1TtQB6_Ct7qJ/view",
    details:
      "Full-stack e-commerce solution with user authentication, product management, and payment processing. Features include shopping cart, wishlist, order tracking, and admin dashboard for inventory management.",
  },
  {
    id: 2,
    title: "Live Chat App",
    description:
      "Real-time messaging application with rooms and user authentication.",
    image: "/p2.png",
    technologies: ["Next Js", "Node.js", "Socket.io", "Express"],
    githubUrl: "https://github.com/samio11/Live_Chat_Socket_io_frontend",
    liveUrl: "https://live-chat-socket-io-frontend.vercel.app/",
    details:
      "Real-time chat application supporting multiple rooms, direct messaging, and file sharing. Features include message history, user presence indicators, and emoji reactions.",
  },
  {
    id: 3,
    title: "Gadgedary",
    description: "System for managing inventory, maintenance, and sales.",
    image: "/p3.png",
    technologies: ["Next Js", "Type ORM", "Nest Js", "Modern UI"],
    githubUrl: "https://github.com/samio11/Gadgedary_client",
    liveUrl:
      "https://www.linkedin.com/posts/samio-hasan_ecommerce-webdevelopment-nextjs-activity-7290202989053595649-1N1L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFYJNpwBPyZA_nCtodFRDnyqyy-x49DMhgA",
    details:
      "Comprehensive system for Invertory dealerships to manage their inventory, customer relations, and sales processes. Features include products tracking, service scheduling, and sales analytics.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 text-white"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          Here are some of my recent projects that showcase my skills in
          full-stack development and problem-solving.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card
                className="bg-gray-800 border-gray-700 overflow-hidden cursor-pointer h-full group hover:border-blue-500 transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-900/30 text-xs rounded-full text-blue-300 border border-blue-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm p-4 flex justify-between items-center border-b border-gray-700">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-6">
                  <div className="h-80 relative rounded-lg overflow-hidden mb-6">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold mb-3 text-white">
                        Project Overview
                      </h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {selectedProject.details}
                      </p>

                      <div className="flex gap-4">
                        <Button
                          asChild
                          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                        >
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          className="flex items-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" /> GitHub
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <h4 className="text-lg font-semibold mb-3 text-white">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-3 py-2 bg-gray-700/50 text-sm rounded-lg text-gray-300 border border-gray-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
