import { useState } from "react";

export const useEmailCopy = (email: string) => {
  const [showCopied, setShowCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  }

  return {
    showCopied,
    handleCopyEmail,
  };
};
