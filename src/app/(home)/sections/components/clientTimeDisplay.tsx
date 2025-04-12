"use client";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  let timeoutId: NodeJS.Timeout | null = null;

  function update() {
    callback();
    const now = new Date();
    const delay = 1000 - now.getMilliseconds();

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(update, delay);
  }

  const initialDelay = 1000 - new Date().getMilliseconds();
  timeoutId = setTimeout(update, initialDelay);

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
}

function getSnapshot() {
  return new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function ClientTimeDisplay() {
  const hora = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return (
    <span className="text-primary" suppressHydrationWarning>
      {hora}
    </span>
  );
}
