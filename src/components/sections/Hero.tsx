"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { staggerContainer, staggerItem } from "@/components/motion/variants";

const roles = ["Full-Stack Developer", "Systems Builder", "IT & Network Specialist", "Automation"];

function TypingRole() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[i];
    const delay = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(full.slice(0, text.length + 1));
        if (text.length === full.length) setTimeout(() => setDeleting(true), 1800);
      } else {
        setText(full.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setI((p) => (p + 1) % roles.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="font-mono text-[var(--color-accent)]">
      {text}
      <span className="cursor-blink">_</span>
    </span>
  );
}

/** Subtle "live" behavior for the status panel: a ticking last-check clock. */
function LiveClock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", { hour12: false });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const raf = requestAnimationFrame(() => setNow(fmt()));
      return () => cancelAnimationFrame(raf);
    }
    const id = setInterval(() => setNow(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  // Render nothing until mounted to avoid hydration mismatch.
  return <span suppressHydrationWarning>{now ?? "--:--:--"}</span>;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-grid pb-8 pt-10 lg:pb-10 lg:pt-14"
    >
      {/* Soft gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute left-[8%] top-0 h-[360px] w-[360px] rounded-full bg-[var(--color-accent)]/8 blur-[130px]" />
        <div className="animate-float-slow absolute bottom-0 right-[6%] h-[300px] w-[300px] rounded-full bg-[var(--color-accent-2)]/8 blur-[120px]" />
      </div>

      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 xl:gap-14">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div
              variants={staggerItem}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-signal)]/30 bg-[var(--color-signal)]/10 px-3.5 py-1.5 font-mono text-xs text-[var(--color-signal)]"
            >
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--color-signal)]" />
              Available for work
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-balance text-[clamp(2.25rem,4.4vw,3.75rem)] font-bold leading-[1.04] tracking-tight xl:whitespace-nowrap"
            >
              Karl Darren <span className="text-gradient">De Sosa</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-2 text-xl font-semibold md:text-2xl"
            >
              System Builder
            </motion.p>

            <motion.div variants={staggerItem} className="mt-1.5 h-7 text-base md:text-lg">
              <TypingRole />
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="mt-5 max-w-2xl leading-relaxed text-[var(--color-text-muted)]"
            >
              {profile.message} From enrollment platforms to campus-wide networks, I turn ideas and
              manual workflows into systems that actually run.
            </motion.p>

            {/* CTAs are rendered without an opacity/entrance animation on purpose:
                these are critical above-the-fold actions and must never depend on
                JS animation state for their visibility. */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#work" variant="primary">
                View My Work
              </Button>
              <Button href="#contact" variant="outline">
                <Icon name="mail" className="h-4 w-4" />
                Get in touch
              </Button>
            </div>
          </motion.div>

          {/* Status panel — complements the hero, real signal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)]">
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]/50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-danger)]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-warn)]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal)]/80" />
              <span className="ml-2 font-mono text-xs text-[var(--color-text-faint)]">status.log</span>
            </div>
            <div className="divide-y divide-[var(--color-border)] font-mono text-[13px]">
              <div className="flex items-center justify-between gap-3 px-4 py-2.5">
                <span className="text-[var(--color-text-faint)]">Currently building</span>
                <span className="text-[var(--color-accent)]">CaviteNest</span>
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-2.5">
                <span className="text-[var(--color-text-faint)]">Latest shipped</span>
                <span className="text-[var(--color-text)]">Enrollment System</span>
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-2.5">
                <span className="text-[var(--color-text-faint)]">Education</span>
                <span className="text-right text-[var(--color-text)]">BSIT · Cavite State University</span>
              </div>
              <div className="px-4 py-3">
                <span className="text-[var(--color-text-faint)]">Focus areas</span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {["Web Dev", "Automation", "IT & Network", "Deployment"].map((f) => (
                    <span
                      key={f}
                      className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/40 px-2 py-0.5 text-[11px] text-[var(--color-text-muted)]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]/30 px-4 py-2.5 text-[var(--color-text-faint)]">
                <span className="flex items-center gap-2">
                  <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--color-signal)]" />
                  systems operational
                </span>
                <span className="text-[var(--color-signal)]">
                  <LiveClock />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </Container>
    </section>
  );
}
