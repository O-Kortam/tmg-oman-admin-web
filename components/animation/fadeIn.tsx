"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const fadeVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={fadeVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      custom={delay}
    >
      <>
        {children}
      </>
     </motion.div>
  );
}
