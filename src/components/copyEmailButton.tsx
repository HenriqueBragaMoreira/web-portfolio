"use client";

import { Check, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import { site } from "@/data/site";
import { useEmailCopy } from "@/utils/copyEmail";

export function CopyEmailButton() {
  const t = useTranslations("CopyEmail");
  const { showCopied, handleCopyEmail } = useEmailCopy(site.email);
  const Icon = showCopied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={handleCopyEmail}
      disabled={showCopied}
      title={t("copy")}
      className="flex cursor-pointer items-center gap-2 font-medium text-secondary text-sm hover:text-primary disabled:cursor-default"
    >
      <Icon size={14} aria-hidden="true" />
      <span aria-live="polite">{showCopied ? t("copied") : site.email}</span>
    </button>
  );
}
