/**
 * Distinct, defensible figures grounded in existing portfolio content:
 * - 2 production systems shipped (InterNest, WCI Enrollment). CaviteNest is
 *   "Currently Building" and is intentionally NOT counted as shipped.
 * - freelance work since 2023 -> ~3 years hands-on
 * - 5 roles/positions across MIS/IT, OJT, and freelance web/FTTH/technician
 * - primary stack breadth: Next.js, NestJS, Laravel + supporting tools
 */
export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 2, label: "Systems Shipped" },
  { value: 3, suffix: "+", label: "Years Hands-On" },
  { value: 5, label: "Roles Held" },
  { value: 8, suffix: "+", label: "Core Technologies" },
];
