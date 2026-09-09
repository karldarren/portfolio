"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem, viewportOnce } from "@/components/motion/variants";

const steps = [
  {
    step: "01",
    title: "Understand the real problem",
    body: "Before writing code, I look at the process behind it — who uses it, where it breaks, and what's actually slowing people down.",
  },
  {
    step: "02",
    title: "Build the system, not just the feature",
    body: "I design for how the whole thing runs in production: data, deployment, and the people who'll rely on it every day.",
  },
  {
    step: "03",
    title: "Keep it running",
    body: "Shipping is the start. I care about uptime, maintenance, and the networks and infrastructure a system depends on.",
  },
];

export default function Approach() {
  return (
    <Section id="approach">
      <SectionHeading index="08." title="How I Think" />
      <p className="mb-10 max-w-2xl text-[var(--color-text-muted)]">
        I don&apos;t just build software — I try to understand the process and the problem behind the
        system. That&apos;s usually what makes the difference between a demo and something people
        actually keep using.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 md:grid-cols-3"
      >
        {steps.map((s) => (
          <motion.div
            key={s.step}
            variants={staggerItem}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]"
          >
            <span className="font-mono text-sm text-[var(--color-accent)]">{s.step}</span>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{s.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
