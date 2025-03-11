"use client";
import { useEmailCopy } from "@/utils/copyEmail";
import { Copy } from "lucide-react";

export function CopyEmailButton() {
  const email = "shenrique40moreira@gmail.com";
  const { showCopied, handleCopyEmail } = useEmailCopy(email);

  return (
    <button
      type="button"
      onClick={handleCopyEmail}
      disabled={showCopied}
      className="flex items-center gap-2 text-sm text-secondary font-medium hover:text-primary cursor-pointer disabled:cursor-not-allowed"
    >
      <Copy size={14} />

      <span>{showCopied ? "Copiado!" : email}</span>
    </button>
  );
}
