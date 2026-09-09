import { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  id,
  children,
  className = "",
  grid = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  grid?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 py-12 md:py-16 ${grid ? "bg-grid" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
