"use client";

import { Check, Copy } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useTranslations } from "next-intl";
import { EASE_OUT } from "@/components/motion/easing";
import { site } from "@/data/site";
import { useEmailCopy } from "@/utils/copyEmail";

// The confirmation swaps in place of the address, so the cause (click) and
// the result (copied) read at the same spot.
const swap = {
  initial: { opacity: 0, y: 6, filter: "blur(2px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.22, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -6,
    filter: "blur(2px)",
    transition: { duration: 0.12, ease: "easeIn" },
  },
} as const;

const iconSwap = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: EASE_OUT },
  },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.1 } },
} as const;

export function CopyEmailButton() {
  const t = useTranslations("CopyEmail");
  const { showCopied, handleCopyEmail } = useEmailCopy(site.email);
  const Icon = showCopied ? Check : Copy;
  const state = showCopied ? "copied" : "idle";

  return (
    <button
      type="button"
      onClick={handleCopyEmail}
      disabled={showCopied}
      title={t("copy")}
      className="flex cursor-pointer items-center gap-2 font-medium text-secondary text-sm transition-colors hover:text-primary disabled:cursor-default disabled:text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span key={state} className="flex" {...iconSwap}>
          <Icon size={14} aria-hidden="true" />
        </m.span>
      </AnimatePresence>

      <span aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <m.span key={state} className="block" {...swap}>
            {showCopied ? t("copied") : site.email}
          </m.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
