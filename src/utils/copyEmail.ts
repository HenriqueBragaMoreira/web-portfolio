import { useEffect, useRef, useState } from "react";

export const useEmailCopy = (email: string) => {
  const [showCopied, setShowCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => () => clearTimeout(timeoutRef.current ?? undefined), []);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      window.location.href = `mailto:${email}`;
      return;
    }

    setShowCopied(true);
    timeoutRef.current = setTimeout(() => setShowCopied(false), 2000);
  }

  return {
    showCopied,
    handleCopyEmail,
  };
};
