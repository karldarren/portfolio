"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import Avatar from "./Avatar";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";

export default function MobileMenu({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="glass fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-xs flex-col justify-between border-l border-[var(--color-border)] p-6"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-lg font-bold">
                    <span className="text-[var(--color-signal)]">&lt;</span>KD
                    <span className="text-[var(--color-signal)]">/&gt;</span>
                  </span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center gap-3">
                  <Avatar
                    src={profile.photo}
                    alt={`${profile.name} — ${profile.identity}`}
                    initials={profile.initials}
                    size={56}
                  />
                  <div>
                    <p className="font-semibold">{profile.name}</p>
                    <p className="font-mono text-sm text-[var(--color-accent)]">{profile.identity}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-1">
                  {navLinks.map((link) => {
                    const active = activeSection === link.href;
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "true" : undefined}
                          className={`block rounded-[var(--radius-md)] px-4 py-3 text-base font-medium transition-colors ${
                            active
                              ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                              : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]"
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="space-y-4">
                <a
                  href={profile.resume}
                  download
                  onClick={() => setOpen(false)}
                  className="block rounded-[var(--radius-md)] bg-[var(--color-accent)] px-4 py-3 text-center text-base font-medium text-[#04222a]"
                >
                  Download Resume
                </a>
                <div className="flex items-center gap-5">
                  <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
                    <Icon name="github" className="h-5 w-5" />
                  </a>
                  <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
                    <Icon name="linkedin" className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${profile.email}`} aria-label="Email" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
                    <Icon name="mail" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
