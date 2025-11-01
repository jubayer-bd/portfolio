import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaJs, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold text-center mb-10 text-white">
        My <span className="text-sky-400">Skills</span>
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl p-5 flex flex-col items-center justify-center shadow-md hover:shadow-sky-500/20 transition-all duration-300"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
