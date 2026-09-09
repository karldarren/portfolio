"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/components/motion/variants";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading index="06." title="Experience" />

      <div className="relative">
        {/* Timeline spine (desktop) */}
        <div className="absolute left-[7px] top-2 hidden h-full w-px bg-gradient-to-b from-[var(--color-border-strong)] via-[var(--color-border)] to-transparent md:block" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.title}-${i}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative md:pl-10"
            >
              {/* Node */}
              <span className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] md:block" />

              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]">
                <div className="mb-4 flex items-center gap-2 border-b border-[var(--color-border)] pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-danger)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-warn)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal)]" />
                  <span className="ml-2 font-mono text-xs text-[var(--color-text-faint)]">
                    {exp.company}
                  </span>
                </div>

                <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-[var(--color-accent)]">
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <span className="w-fit rounded-full bg-[var(--color-accent)]/10 px-3 py-1 font-mono text-xs text-[var(--color-text-muted)]">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-3 space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      <span className="mt-0.5 shrink-0 font-mono text-[var(--color-accent)]">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>

                {exp.areas && exp.areas.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-4">
                    {exp.areas.map((area) => (
                      <span
                        key={area}
                        className="rounded-[var(--radius-sm)] border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-2.5 py-1 font-mono text-[11px] text-[var(--color-text-muted)]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
