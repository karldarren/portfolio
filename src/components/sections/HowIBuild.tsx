"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildProcess } from "@/data/capabilities";
import { staggerContainer, staggerItem, viewportOnce } from "@/components/motion/variants";

export default function HowIBuild() {
  return (
    <Section id="how" grid>
      <SectionHeading index="03." title="How I Build Systems" />
      <p className="mb-10 max-w-2xl text-[var(--color-text-muted)]">
        A straightforward process from real-world problem to a deployed, maintained system.
      </p>

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative grid gap-4 md:grid-cols-5"
      >
        {/* Connector line (desktop) */}
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent md:block"
        />

        {buildProcess.map((step) => (
          <motion.li
            key={step.no}
            variants={staggerItem}
            className="relative rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
          >
            <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] font-mono text-sm font-bold text-[var(--color-accent)]">
              {step.no}
            </span>
            <h3 className="mt-3 text-sm font-bold uppercase tracking-wide">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {step.description}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
