import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[var(--radius-sm)] border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-2.5 py-1 font-mono text-xs text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]">
      {children}
    </span>
  );
}
