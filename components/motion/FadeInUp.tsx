"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInUpProps = {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  className?: string;
};

/**
 * Reveals its children with a soft upward fade the first time they scroll
 * into view. Wrap a Server Component's rendered output in this from a
 * parent Server Component — composition via `children` keeps the wrapped
 * content itself server-rendered.
 */
export default function FadeInUp({ children, delay = 0, className }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      // "some" (rather than a fraction like 0.2) fires as soon as any part of
      // the wrapped block enters the viewport — a fixed fraction can never be
      // satisfied for blocks taller than viewport / fraction (e.g. a long
      // list on a short mobile screen), which left content stuck invisible.
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
