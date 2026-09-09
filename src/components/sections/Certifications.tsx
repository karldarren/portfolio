"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem, viewportOnce } from "@/components/motion/variants";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading index="09." title="Certifications" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 md:grid-cols-3"
      >
        {certifications.map((c) => (
          <motion.div
            key={c.title}
            variants={staggerItem}
            className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
          >
            <span className="mb-4 w-fit rounded-full bg-[var(--color-accent)]/10 px-2.5 py-1 font-mono text-xs text-[var(--color-accent)]">
              {c.type}
            </span>
            <h3 className="text-base font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {c.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
