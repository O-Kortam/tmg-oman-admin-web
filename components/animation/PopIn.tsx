"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";

type PopInProps = {
  children: React.ReactNode;
  delay?: number; 
  className?: string;
};

const popVariants: Variants = {
  offscreen: { opacity: 0, scale: 0.8, rotate: -3 },
  onscreen: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
      delay,
    },
  }),
};

export default function PopIn({
  children,
  delay = 0,
  className = "",
}: PopInProps) {
  return (
    <motion.div
      className={className}
      variants={popVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.3 }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
