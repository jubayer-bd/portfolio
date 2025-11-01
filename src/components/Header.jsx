import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <motion.header
      className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* LEFT SIDE - Name / Role */}
      <div>
        <motion.h1
          className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Md. Jubayer Hossain
        </motion.h1>
        <p className="text-sm text-slate-400">Full-Stack Web Developer</p>
      </div>

      {/* RIGHT SIDE - Links */}
      <nav className="flex items-center gap-3 text-sm">
        <motion.a
          href="https://www.linkedin.com/in/md-jubayer-hossain-ab425a397/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="text-lg" />
          <span>LinkedIn</span>
        </motion.a>

        <motion.a
          href="mailto:jubayer.dev.bd@gmail.com"
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 font-medium shadow hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope className="text-lg" />
          <span>Contact</span>
        </motion.a>
      </nav>
    </motion.header>
  );
}
