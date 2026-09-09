"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/components/motion/variants";

const pillars = [
  { icon: "code", label: "Software", sub: "Full-stack web systems" },
  { icon: "network", label: "Networking", sub: "LAN, MikroTik, connectivity" },
  { icon: "workflow", label: "FTTH / Fiber", sub: "Installs, ONU/ONT, deployment" },
  { icon: "settings", label: "IT Support", sub: "Hardware & troubleshooting" },
  { icon: "rocket", label: "Infrastructure", sub: "Deployment & hosting" },
  { icon: "network", label: "Operations", sub: "Events, streaming, uptime" },
];

export default function MoreThanCode() {
  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)]/40 py-16 md:py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10 max-w-2xl"
        >
          <span className="font-mono text-sm text-[var(--color-signal)]">{"// more than code"}</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            I work across the whole stack — including the parts that aren&apos;t software.
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)]">
            Most developers stop at the codebase. I also handle the networks, hardware, and
            operations a system runs on — so I can build <em>and</em> keep things running.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.label}
              variants={staggerItem}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-[var(--dur-base)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-accent)]">
                <Icon name={p.icon} />
              </span>
              <p className="mt-3 font-semibold">{p.label}</p>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">{p.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
