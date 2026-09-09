import { ReactNode } from "react";

/**
 * Content width inside the dashboard main column. Centered within the main
 * column (mx-auto) with a capped max-width so large displays (1440–1920) feel
 * balanced rather than left-heavy, while keeping comfortable reading widths.
 */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
