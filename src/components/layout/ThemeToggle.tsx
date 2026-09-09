"use client";

import { useSyncExternalStore } from "react";

/** Subscribe to the `light` class on <html> as an external store. */
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("light");
}

export default function ThemeToggle() {
  // Server renders dark (default); client reflects the real class.
  const isLight = useSyncExternalStore(subscribe, getSnapshot, () => false);

  const toggle = () => {
    if (isLight) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {!isLight ? (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36l-.71-.71M6.34 6.34l-.71-.71m12.73 0l-.71.71M6.34 17.66l-.71.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.35 15.35A9 9 0 018.65 3.65 9 9 0 1020.35 15.35z" />
        </svg>
      )}
    </button>
  );
}
