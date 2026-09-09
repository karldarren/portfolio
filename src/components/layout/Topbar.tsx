"use client";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { useActiveSection } from "./useActiveSection";

/** Mobile/tablet top bar: logo + hamburger drawer. Hidden on lg+. */
export default function Topbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 flex items-center justify-between px-5 py-4 transition-all lg:hidden ${
        scrolled ? "glass border-b border-[var(--color-border)]" : ""
      }`}
    >
      <a href="#home" className="font-mono text-lg font-bold tracking-tight" aria-label="Home">
        <span className="text-[var(--color-signal)]">&lt;</span>KD
        <span className="text-[var(--color-signal)]">/&gt;</span>
      </a>
      <MobileMenu activeSection={active} />
    </header>
  );
}
