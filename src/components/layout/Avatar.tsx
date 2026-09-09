"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Identity avatar for the sidebar / mobile menu.
 *
 * Renders the real profile photo when the asset loads successfully, and
 * gracefully falls back to the `<KD/>`-style monogram if the photo is missing
 * or fails to load. This guarantees we never show a broken image or a
 * fabricated placeholder face — the fallback is part of the identity system.
 */
export default function Avatar({
  src,
  alt,
  initials,
  size = 72,
  className = "",
}: {
  src?: string;
  alt: string;
  initials: string;
  /** Rendered pixel size (square). */
  size?: number;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(src) && !failed;

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden={showPhoto && loaded ? undefined : "true"}
    >
      {/* Monogram fallback — visible until (and unless) the photo loads. */}
      {(!showPhoto || !loaded) && (
        <span className="select-none font-mono font-bold tracking-tight text-[var(--color-text)]" style={{ fontSize: size * 0.34 }}>
          <span className="text-[var(--color-signal)]">&lt;</span>
          {initials}
          <span className="text-[var(--color-signal)]">/&gt;</span>
        </span>
      )}

      {showPhoto && (
        <Image
          src={src as string}
          alt={alt}
          fill
          sizes={`${size}px`}
          className={`object-cover transition-opacity duration-[var(--dur-base)] ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}

      {/* Subtle inset ring so the avatar reads as part of the identity system in both themes. */}
      <span className="pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] ring-1 ring-inset ring-[var(--color-border)]" />
    </span>
  );
}
