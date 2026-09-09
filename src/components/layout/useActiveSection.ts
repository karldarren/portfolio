"use client";

import { useEffect, useState } from "react";

/** Tracks which `section[id]` is currently in the viewport center. */
export function useActiveSection(defaultId = "#home") {
  const [active, setActive] = useState(defaultId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -55% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}
