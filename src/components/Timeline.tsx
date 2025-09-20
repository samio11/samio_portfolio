// src/components/Timeline.tsx
"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2019 - 2020",
    title: "Chuadanga Government College",
    description: "Completed HSC in Science with focus on Computer Studies",
  },
  {
    year: "2021 - Present",
    title: "American International University-Bangladesh",
    description:
      "Bachelor of Science in Computer Science (Expected graduation: 2025)",
  },
  {
    year: "2022",
    title: "Started Web Development Journey",
    description:
      "Began learning HTML, CSS, JavaScript and building simple projects",
  },
  {
    year: "2023",
    title: "Full-Stack Development Focus",
    description: "Started working with React, Node.js, Express, and databases",
  },
  {
    year: "2024-2025",
    title: "Advanced Projects & Frameworks",
    description:
      "Built complex applications using Next.js, NestJS, TypeScript and more",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                <div
                  className={`p-6 bg-gray-900 rounded-lg shadow-lg ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <span className="text-blue-400 font-semibold">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>

              <div className="flex md:w-[50px] items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-950 z-10"></div>
              </div>

              <div className="md:w-1/2 md:px-8"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
