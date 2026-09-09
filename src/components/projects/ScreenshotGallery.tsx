"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectScreenshot } from "@/data/projects";
import { EASE } from "@/components/motion/variants";

/**
 * Responsive project screenshot gallery.
 * - Desktop: large primary screenshot + smaller preview thumbnails.
 * - Mobile: single-column stack.
 * - Click any image to enlarge in a lightbox (Escape / backdrop to close).
 *
 * Only renders images that were passed in (verified, real screenshots). If the
 * list is empty the parent renders a branded placeholder instead.
 */
export default function ScreenshotGallery({
  shots,
  title,
}: {
  shots: ProjectScreenshot[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  if (shots.length === 0) return null;

  const current = shots[active] ?? shots[0];
  const hasThumbs = shots.length > 1;

  return (
    <div>
      {/* Primary screenshot */}
      <button
        type="button"
        onClick={() => setLightbox(true)}
        aria-label={`Enlarge screenshot: ${current.label}`}
        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)] transition-all duration-[var(--dur-base)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lg)]"
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          priority
        />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-[var(--color-border)] bg-[var(--glass-bg)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-text-muted)] backdrop-blur">
          Click to enlarge
        </span>
      </button>

      {/* Thumbnails */}
      {hasThumbs && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${s.label}`}
              aria-current={i === active ? "true" : undefined}
              className={`group relative aspect-[16/10] overflow-hidden rounded-[var(--radius-md)] border transition-all duration-[var(--dur-base)] ${
                i === active
                  ? "border-[var(--color-accent)] shadow-[var(--shadow-sm)]"
                  : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
              }`}
            >
              <Image src={s.src} alt={s.alt} fill sizes="180px" className="object-cover object-top" />
              <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/70 to-transparent px-2 py-1 text-left font-mono text-[10px] text-white/90">
                {s.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-full w-full max-w-5xl overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={1600}
                height={1000}
                className="h-auto w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setLightbox(false)}
                aria-label="Close"
                className="absolute right-3 top-3 rounded-full border border-[var(--color-border)] bg-[var(--glass-bg)] p-2 text-[var(--color-text)] backdrop-blur transition-colors hover:text-[var(--color-accent)]"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
