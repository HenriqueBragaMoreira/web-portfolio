"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";

// Loads only the DOM animation features, and lets the OS reduced-motion
// setting drop transform animations while opacity changes still play.
export function MotionProvider({ children }: _WithChildren) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
