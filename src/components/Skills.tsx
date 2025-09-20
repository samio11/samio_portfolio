// src/components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    name: "React/Next.js",
    level: 90,
    icon: <SiNextdotjs className="text-white" />,
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "TypeScript",
    level: 85,
    icon: <SiTypescript className="text-blue-400" />,
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "Node.js/Express",
    level: 80,
    icon: <SiNodedotjs className="text-green-500" />,
    color: "from-green-500 to-green-400",
  },
  {
    name: "NestJS",
    level: 75,
    icon: <SiNestjs className="text-red-500" />,
    color: "from-red-600 to-red-400",
  },
  {
    name: "PostgreSQL",
    level: 70,
    icon: <SiPostgresql className="text-blue-300" />,
    color: "from-blue-700 to-blue-400",
  },
  {
    name: "MongoDB",
    level: 70,
    icon: <SiMongodb className="text-green-400" />,
    color: "from-green-600 to-green-400",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    icon: <SiTailwindcss className="text-cyan-400" />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Git/GitHub",
    level: 80,
    icon: <SiGithub className="text-white" />,
    color: "from-gray-700 to-gray-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-900 z-0"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Here are the technologies I work with to create amazing digital
          experiences
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon with gradient background */}
              <div className="absolute -top-4 left-6">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>

                {/* Animated progress bar */}
                <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                    className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-sm font-medium text-white"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </div>

              {/* Hover effect border */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="font-semibold text-lg mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">React, Next.js, Tailwind</p>
          </div>

          <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="font-semibold text-lg mb-2">Backend</h3>
            <p className="text-gray-400 text-sm">Node.js, Express, NestJS</p>
          </div>

          <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="font-semibold text-lg mb-2">Database</h3>
            <p className="text-gray-400 text-sm">PostgreSQL, MongoDB</p>
          </div>

          <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="font-semibold text-lg mb-2">Tools</h3>
            <p className="text-gray-400 text-sm">Git, GitHub, VS Code</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
