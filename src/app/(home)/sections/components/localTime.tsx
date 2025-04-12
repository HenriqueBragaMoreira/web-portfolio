"use client";
import dynamic from "next/dynamic";

const ClientTimeDisplay = dynamic(
  () => import("./clientTimeDisplay").then((mod) => mod.ClientTimeDisplay),
  {
    ssr: false,
  }
);

export function LocalTime() {
  return <ClientTimeDisplay />;
}
