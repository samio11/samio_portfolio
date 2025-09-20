// src/components/About.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl">
              <Image
                src="/samio.jpg"
                alt="Samio"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h3 className="text-2xl font-semibold mb-4">Hello! I'm Samio</h3>
            <p className="text-gray-300 mb-6">
              I'm a final-year Computer Science student at AIUB, graduating in
              2025. My journey in web development started during my second year
              of university, and since then, I've been passionate about creating
              digital experiences that are both beautiful and functional.
            </p>
            <p className="text-gray-300 mb-6">
              I specialize in building full-stack applications using modern
              technologies like Next.js, React, NestJS, Express, and various
              databases including PostgreSQL and MongoDB. I enjoy solving
              complex problems and collaborating with others to bring ideas to
              life.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Education</h4>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-medium">
                  American International University-Bangladesh (AIUB)
                </p>
                <p className="text-gray-400">
                  BSc in Computer Science | Expected Graduation: 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
