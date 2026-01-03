import type { Metadata } from "next";
import { site } from "@/data/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "404 · Henrique Braga",
};

// Requests that never reach a locale segment (the proxy routes everything else).
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body className="grid min-h-screen place-content-center gap-4 text-center font-sans antialiased">
        <h1 className="font-medium text-xl">404</h1>
        <a href="/" className="text-secondary underline hover:text-primary">
          Henrique Braga
        </a>
      </body>
    </html>
  );
}
