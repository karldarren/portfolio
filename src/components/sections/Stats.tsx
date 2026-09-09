"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import { stats, type Stat } from "@/data/stats";
import { viewportOnce } from "@/components/motion/variants";

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      // Jump straight to the value on the next frame (avoids sync setState-in-effect).
      const id = requestAnimationFrame(() => setN(target));
      return () => cancelAnimationFrame(id);
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1000;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, reduced]);

  return <>{n}</>;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  return (
    <div className="group flex flex-col justify-center px-5 py-6 transition-colors hover:bg-[var(--color-surface-hover)]/50">
      <div className="font-mono text-[2rem] font-bold leading-none tracking-tight text-[var(--color-accent)] md:text-[2.25rem]">
        <CountUp target={stat.value} active={active} />
        {stat.suffix ?? ""}
      </div>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="pb-4 pt-2">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 divide-x divide-y divide-[var(--color-border)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] md:grid-cols-4 md:divide-y-0"
        >
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} active={inView} />
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
