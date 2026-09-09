"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { skillCategories } from "@/data/skills";
import { techGroups } from "@/data/technologies";
import { staggerContainer, staggerItem, viewportOnce } from "@/components/motion/variants";

export default function Skills() {
  return (
    <Section id="skills" grid>
      <SectionHeading index="07." title="Skills & Technologies" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 md:grid-cols-2"
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={staggerItem}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]"
          >
            <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-[var(--color-accent)]">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Core stack — grouped by logical category (no flat wall of tags) */}
      <div className="mt-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]">
        <h3 className="mb-5 font-mono text-sm uppercase tracking-wider text-[var(--color-text-faint)]">
          Core Stack
        </h3>
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((t) => (
                  <span
                    key={t}
                    className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/40 px-2.5 py-1 font-mono text-[13px] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
