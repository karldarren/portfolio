import { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary: "btn btn-primary px-5 py-2.5",
  outline: "btn btn-secondary px-5 py-2.5",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold transition-all duration-[var(--dur-base)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:bg-[var(--color-surface-hover)]",
};



export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  download,
  external,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  download?: boolean;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`${variants[variant]} ${className}`.trim()}
      {...(download ? { download: true } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
