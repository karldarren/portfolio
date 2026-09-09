"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

export default function SectionHeading({
  index,
  title,
  align = "left",
}: {
  index: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-8 flex items-center gap-3 md:mb-10 ${align === "center" ? "justify-center" : ""}`}
    >
      <span className="font-mono text-sm font-medium text-[var(--color-signal)]">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight md:text-[1.75rem]">{title}</h2>
      {align === "left" && (
        <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-border-strong)] to-transparent" />
      )}
    </motion.div>
  );
}
