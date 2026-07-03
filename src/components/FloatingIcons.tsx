"use client";

import { motion } from "framer-motion";

const techIcons = [
  { name: "HTML", icon: "⟨/⟩", x: "10%", y: "20%", delay: 0, duration: 4 },
  { name: "CSS", icon: "{ }", x: "85%", y: "15%", delay: 0.5, duration: 5 },
  { name: "JS", icon: "JS", x: "75%", y: "70%", delay: 1, duration: 4.5 },
  { name: "TS", icon: "TS", x: "15%", y: "75%", delay: 1.5, duration: 5.5 },
  { name: "React", icon: "⚛", x: "90%", y: "45%", delay: 0.3, duration: 4.2 },
  { name: "PHP", icon: "🐘", x: "5%", y: "50%", delay: 2, duration: 5 },
  { name: "Node", icon: "⬡", x: "70%", y: "25%", delay: 0.8, duration: 4.8 },
  { name: "MongoDB", icon: "🍃", x: "20%", y: "40%", delay: 1.2, duration: 5.2 },
  { name: "MySQL", icon: "🐬", x: "80%", y: "80%", delay: 1.8, duration: 4.3 },
  { name: "Git", icon: "⑂", x: "50%", y: "10%", delay: 0.6, duration: 5.5 },
  { name: "Next", icon: "▲", x: "35%", y: "80%", delay: 2.2, duration: 4.6 },
  { name: "API", icon: "{ }", x: "60%", y: "60%", delay: 1.4, duration: 5.3 },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
      {techIcons.map((item) => (
        <motion.div
          key={item.name}
          className="absolute font-mono text-lg opacity-[0.08] select-none"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            x: [0, 5, -5, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <span className="text-[var(--accent)] text-2xl md:text-3xl">{item.icon}</span>
        </motion.div>
      ))}
    </div>
  );
}
