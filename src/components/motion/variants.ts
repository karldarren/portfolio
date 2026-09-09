import type { Variants } from "framer-motion";

/** Standard easing used across the site. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + rise, calm premium distance. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Container that staggers its children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Child used inside staggerContainer. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

/** Scale-in for cards / media. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

/** Shared viewport config for whileInView. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
