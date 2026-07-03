"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FloatingIcons from "./FloatingIcons";

function TypingEffect({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const speed = isDeleting ? 30 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="font-mono text-[var(--accent)]">
      {displayText}
      <span className="cursor-blink text-[var(--accent)]">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-grid">
      {/* Floating tech icons */}
      <FloatingIcons />

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent)]/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 left-1/5 w-[350px] h-[350px] bg-[var(--accent-secondary)]/8 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute top-1/3 right-1/5 w-[250px] h-[250px] bg-[var(--terminal-green)]/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-4xl text-center relative">
        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8 px-5 py-2.5 rounded-xl glass glow-cyan"
        >
          <span className="font-mono text-sm">
            <span className="text-[var(--terminal-green)]">❯</span>{" "}
            <span className="text-neutral-500">~/portfolio</span>{" "}
            <span className="text-[var(--terminal-yellow)]">$</span>{" "}
            <span className="text-[var(--foreground)]">cat about.txt</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-5"
        >
          Karl Darren{" "}
          <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--terminal-green)] bg-clip-text text-transparent">
            De Sosa
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 h-8"
        >
          <TypingEffect texts={["Full-Stack Developer", "IT Support Specialist", "Network Administrator", "System Builder"]} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I turn manual processes into automated solutions. From building enrollment systems
          to managing campus-wide networks — I make things work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] hover:opacity-90 text-black font-medium rounded-xl transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 glass rounded-xl font-medium transition-all hover:scale-105 hover:glow-cyan flex items-center gap-2 group"
          >
            <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 glass rounded-xl font-medium transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
