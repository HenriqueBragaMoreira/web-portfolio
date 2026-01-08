"use client";

import { useLocale } from "next-intl";
import { useSyncExternalStore } from "react";
import { site } from "@/data/site";

function subscribe(callback: () => void) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  function update() {
    callback();
    timeoutId = setTimeout(update, 1000 - new Date().getMilliseconds());
  }

  timeoutId = setTimeout(update, 1000 - new Date().getMilliseconds());

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
}

// Always Henrique's time in São Paulo, not the visitor's.
function useSaoPauloTime(locale: string) {
  return useSyncExternalStore(
    subscribe,
    () =>
      new Date().toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: site.timeZone,
      }),
    () => ""
  );
}

export function ClientTimeDisplay() {
  const locale = useLocale();
  const time = useSaoPauloTime(locale);

  return (
    <time className="text-primary tabular-nums" suppressHydrationWarning>
      {time}
    </time>
  );
}
