import { ReactNode } from "react";

type Variant = "default" | "glass" | "interactive";

const base = "rounded-[var(--radius-lg)] border border-[var(--color-border)]";

const variants: Record<Variant, string> = {
  default: "bg-[var(--color-surface)]",
  glass: "glass",
  interactive:
    "bg-[var(--color-surface)] transition-all duration-[var(--dur-base)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]",
};

export default function Card({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return <div className={`${base} ${variants[variant]} ${className}`}>{children}</div>;
}
