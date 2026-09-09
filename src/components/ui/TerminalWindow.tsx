import { ReactNode } from "react";

/** Reusable terminal-style chrome (traffic lights + filename). */
export default function TerminalWindow({
  filename,
  children,
  className = "",
}: {
  filename: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[var(--color-danger)]" />
        <span className="h-3 w-3 rounded-full bg-[var(--color-warn)]" />
        <span className="h-3 w-3 rounded-full bg-[var(--color-signal)]" />
        <span className="ml-3 font-mono text-xs text-[var(--color-text-faint)]">{filename}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
