"use client";

import Icon from "@/components/ui/Icon";
import Avatar from "./Avatar";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "./useActiveSection";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Sidebar() {
  const active = useActiveSection();

  return (
    <aside className="hidden h-screen w-[248px] flex-col border-r border-[var(--color-border)] bg-[var(--color-bg-elevated)]/40 px-5 py-6 lg:flex">
      {/* ── TOP: identity ───────────────────────────── */}
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-faint)]">
          Profile
        </p>

        <a href="#home" aria-label="Home" className="inline-block rounded-[var(--radius-lg)] transition-transform duration-[var(--dur-base)] hover:-translate-y-0.5">
          <Avatar
            src={profile.photo}
            alt={`${profile.name} — ${profile.identity}`}
            initials={profile.initials}
            size={150}
          />
        </a>

        <div className="mt-4">
          <p className="text-base font-bold leading-tight">{profile.name}</p>
          <p className="mt-0.5 font-mono text-sm text-[var(--color-accent)]">{profile.identity}</p>
          <p className="mt-2.5 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Icon name="network" className="h-4 w-4 text-[var(--color-text-faint)]" />
            {profile.location}
          </p>
          <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--color-signal)]" />
            Available for work
          </p>
        </div>
      </div>

      {/* ── MIDDLE: navigation (takes the flexible space) ── */}
      <nav aria-label="Primary" className="mt-8 flex-1">
        <p className="mb-2 px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-faint)]">
          Navigation
        </p>
        <ul className="space-y-0.5">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      isActive ? "bg-[var(--color-accent)]" : "bg-[var(--color-border-strong)]"
                    }`}
                  />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ── BOTTOM: resume, socials, theme ──────────── */}
      <div className="space-y-3 border-t border-[var(--color-border)] pt-4">
        <a
          href={profile.resume}
          download
          className="btn btn-primary w-full px-4 py-2.5"
        >
          <Icon name="external" className="h-4 w-4" />
          Resume
        </a>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]">
              <Icon name="github" className="h-5 w-5" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]">
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]">
              <Icon name="mail" className="h-5 w-5" />
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
