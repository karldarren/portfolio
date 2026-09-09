"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/components/motion/variants";
import { profile } from "@/data/profile";

const facts = [
  { label: "Education", value: "BS Information Technology", sub: "Cavite State University", dot: "var(--color-accent)" },
  { label: "Currently Building", value: "CaviteNest", sub: "Rental & booking platform · NestJS / TypeScript / MongoDB", dot: "var(--color-warn)" },
  { label: "Focus", value: "Build · Automate · Troubleshoot", sub: "Software + IT + Network", dot: "var(--color-signal)" },
];

export default function About() {
  return (
    <Section id="about" grid>
      <SectionHeading index="05." title="About Me" />
      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4 leading-relaxed text-[var(--color-text-muted)]"
        >
          <p>
            I&apos;m a <span className="text-[var(--color-text)]">BS Information Technology</span>{" "}
            graduate from <span className="text-[var(--color-accent)]">Cavite State University</span>{" "}
            who likes building things that solve real problems — not just demos.
          </p>
          <p>
            My work sits at the intersection of{" "}
            <span className="text-[var(--color-text)]">software</span> and{" "}
            <span className="text-[var(--color-text)]">IT operations</span>. I&apos;ve built and
            maintained school information systems with PHP/Laravel and MySQL, deployed them on
            Hostinger, managed campus-wide network connectivity, and resolved hardware, software,
            and network issues to keep downtime low.
          </p>
          <p>
            I&apos;m currently developing{" "}
            <span className="text-[var(--color-text)]">CaviteNest</span>, a property rental and
            booking platform built with NestJS, TypeScript, and MongoDB on Vercel. I also handle
            technical support for live events and streaming — because keeping systems running is
            just as important as building them.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4"
        >
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-[var(--dur-base)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: f.dot }}
                />
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-faint)]">
                  {f.label}
                </p>
              </div>
              <p className="text-lg font-semibold">{f.value}</p>
              <p className="text-sm text-[var(--color-text-muted)]">{f.sub}</p>
            </div>
          ))}

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)]">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-faint)]">
                Technical Areas
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profile.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/40 px-2.5 py-1 font-mono text-xs text-[var(--color-text-muted)]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
