"use client";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  function update() {
    callback();
    const now = new Date();
    const delay = 1000 - now.getMilliseconds();
    setTimeout(update, delay);
  }

  update();

  return () => {};
}

function getSnapshot() {
  return new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function LocalTime() {
  const hora = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return (
    <span className="text-primary" suppressHydrationWarning>
      {hora}
    </span>
  );
}
