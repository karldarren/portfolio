"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { capabilities } from "@/data/capabilities";
import { staggerContainer, staggerItem, viewportOnce } from "@/components/motion/variants";

export default function WhatIBuild() {
  return (
    <Section id="build">
      <SectionHeading index="02." title="What I Build" />
      <p className="mb-10 max-w-2xl text-[var(--color-text-muted)]">
        From software to physical network infrastructure — the range of systems I design,
        build, deploy, and keep running.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {capabilities.map((c) => (
          <motion.div
            key={c.no}
            variants={staggerItem}
            className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-accent)]">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <span className="font-mono text-xs text-[var(--color-text-faint)]">{c.no}</span>
            </div>
            <h3 className="text-base font-bold">{c.title}</h3>
            <ul className="mt-3 space-y-1.5">
              {c.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                  <span className="mt-0.5 shrink-0 font-mono text-[var(--color-accent)]">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
