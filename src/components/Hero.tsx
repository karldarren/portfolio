"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--accent)] text-sm font-medium mb-4 tracking-wide uppercase"
        >
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Karl Darren De Sosa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 mb-8 max-w-xl mx-auto"
        >
          BS Information Technology graduate with hands-on experience in web-based system development, IT support, and network administration.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[var(--card-border)] hover:border-neutral-500 rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
