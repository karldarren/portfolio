"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { services } from "@/data/services";
import { staggerContainer, staggerItem, viewportOnce } from "@/components/motion/variants";

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading index="04." title="What I Do" />
      <p className="mb-10 max-w-2xl text-[var(--color-text-muted)]">
        I help people and organizations build software and keep their technology running — from
        custom systems to the networks and operations behind them.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((s) => (
          <motion.div
            key={s.no}
            variants={staggerItem}
            className="group rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-accent)]/5 text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-accent)]/40">
                <Icon name={s.icon} />
              </span>
              <span className="font-mono text-sm text-[var(--color-text-faint)]">{s.no}</span>
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {s.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
