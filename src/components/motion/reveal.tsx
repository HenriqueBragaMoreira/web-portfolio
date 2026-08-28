"use client";

import {
  m,
  stagger as staggerBy,
  type TargetAndTransition,
  type Transition,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/cva";
import { EASE_OUT } from "./easing";

// "view" waits until content is a little past the bottom edge, so it is seen
// arriving rather than finishing offscreen.
const VIEWPORTS = {
  view: { once: true, margin: "0px 0px -12% 0px" },
  "page-end": { once: true },
} as const;

// With reduced motion, geometry (position, scale, clip, blur) lands at once
// and only opacity still fades, so content arrives without travelling.
const REDUCED_TRANSITION: Transition = {
  default: { duration: 0 },
  opacity: { duration: 0.4, ease: "easeOut" },
};

type Preset = { hidden: TargetAndTransition; visible: TargetAndTransition };

type PresetName =
  | "none"
  | "rise"
  | "lift"
  | "fade"
  | "pop"
  | "unmask"
  | "settle"
  | "drawX"
  | "drawY"
  | "ping";

const PRESETS: Record<PresetName, Preset> = {
  // Orchestrates children without changing itself.
  none: { hidden: {}, visible: {} },
  // Text: comes into focus while settling a few pixels.
  rise: {
    hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: EASE_OUT },
    },
  },
  // Larger blocks (cards): travel without blur, which is costly on big areas.
  lift: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE_OUT },
    },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: EASE_OUT },
    },
  },
  // Images: uncovered from the top, like a print coming out.
  unmask: {
    hidden: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1, ease: EASE_OUT, opacity: { duration: 0.2 } },
    },
  },
  // Pairs with unmask/lift: the picture eases back to its true scale.
  settle: {
    hidden: { scale: 1.12 },
    visible: { scale: 1, transition: { duration: 1.4, ease: EASE_OUT } },
  },
  drawX: {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: EASE_OUT } },
  },
  drawY: {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 1.2, ease: EASE_OUT } },
  },
  // A short, finite pulse that points at the availability status.
  ping: {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: [0.6, 0],
      scale: [1, 2.8],
      transition: {
        delay: 1.4,
        duration: 1.6,
        ease: "easeOut",
        repeat: 2,
        repeatDelay: 0.6,
      },
    },
  },
};

function useVariants(variant: PresetName, stagger = 0, delay = 0): Variants {
  const reduce = useReducedMotion();
  const { hidden, visible } = PRESETS[variant];
  const orchestration: Transition =
    stagger || delay
      ? { delayChildren: staggerBy(stagger, { startDelay: delay }) }
      : {};

  if (reduce) {
    if (variant === "ping") {
      return { hidden, visible: hidden };
    }
    return {
      hidden,
      visible: {
        ...visible,
        transition: { ...REDUCED_TRANSITION, ...orchestration },
      },
    };
  }

  return {
    hidden,
    visible: {
      ...visible,
      transition: { ...visible.transition, ...orchestration },
    },
  };
}

const TAGS = {
  div: m.div,
  section: m.section,
  article: m.article,
  header: m.header,
  footer: m.footer,
  ul: m.ul,
  li: m.li,
  dl: m.dl,
  p: m.p,
  span: m.span,
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
};

type RevealBaseProps = {
  children?: React.ReactNode;
  as?: keyof typeof TAGS;
  className?: string;
  variant?: PresetName;
  /** Seconds between each child's start. Keep the total under ~0.4s. */
  stagger?: number;
  /** Seconds before the first child starts. */
  delay?: number;
};

type RevealProps = RevealBaseProps & {
  id?: string;
  /**
   * "mount" for above-the-fold content, "view" for everything else, and
   * "page-end" for content too close to the bottom of the page to ever pass
   * the view trigger line.
   */
  trigger?: "mount" | "view" | "page-end";
};

/**
 * Starts an entrance on its own: on mount or when scrolled into view. Children
 * that are `RevealItem`/`RevealLine` follow its timing. The default state is
 * visible again when scripts are off or the page is printed (globals.css).
 */
export function Reveal({
  as = "div",
  trigger = "view",
  variant = "none",
  stagger,
  delay,
  className,
  id,
  children,
}: RevealProps) {
  const Component = TAGS[as] as typeof m.div;
  const variants = useVariants(variant, stagger, delay);
  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: VIEWPORTS[trigger] };

  return (
    <Component
      id={id}
      className={className}
      data-reveal=""
      variants={variants}
      initial="hidden"
      inherit={false}
      {...triggerProps}
    >
      {children}
    </Component>
  );
}

/** Animates with the closest `Reveal`; never use it outside of one. */
export function RevealItem({
  as = "div",
  variant = "rise",
  stagger,
  delay,
  className,
  children,
}: RevealBaseProps) {
  const Component = TAGS[as] as typeof m.div;
  const variants = useVariants(variant, stagger, delay);

  return (
    <Component className={className} data-reveal="" variants={variants}>
      {children}
    </Component>
  );
}

/** A 1px rule that draws itself along its axis (inside a `relative` parent). */
export function RevealLine({
  axis,
  className,
}: {
  axis: "x" | "y";
  className?: string;
}) {
  const variants = useVariants(axis === "x" ? "drawX" : "drawY");

  return (
    <m.span
      aria-hidden="true"
      data-reveal=""
      variants={variants}
      className={cn(
        "pointer-events-none absolute top-0 left-0 bg-foreground",
        axis === "x" ? "h-px w-full origin-left" : "h-full w-px origin-top",
        className
      )}
    />
  );
}
