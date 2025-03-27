import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";
import { cx } from "cva";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Henrique Braga",
  applicationName: "Web-Portfolio",
  description: "Henrique Braga's personal website",
  keywords: [
    "Henrique Braga",
    "Henrique",
    "Braga",
    "Software Engineer",
    "Software Developer",
    "Developer",
    "Engineer",
    "Frontend Engineer",
    "Frontend Developer",
    "Frontend",
    "Frontend Development",
    "Full Stack Engineer",
  ],
  authors: [
    {
      name: "Henrique Braga",
      url: "https://www.linkedin.com/in/h-braga/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased`}>
        <Navbar />
        <main className="flex flex-col gap-[120px] [&>*:last-child]:mt-[-60px] items-center">
          {children}
          <Toaster
            toastOptions={{
              unstyled: true,
              classNames: {
                toast: cx(
                  "flex items-center gap-1.5 rounded-xl border border-foreground bg-background p-4 font-sans text-primary/70 text-sm shadow-lg",
                  "h-(--front-toast-height) w-(--width)"
                ),
                description: "text-muted-fg",
                closeButton: cx(
                  "absolute top-0 left-0 grid size-5 cursor-pointer place-content-center rounded-full border bg-bg text-fg transition",
                  "transform-(--toast-close-button-transform)"
                ),
                icon: cx(
                  "relative flex size-4 shrink-0 items-center",
                  "mr-(--toast-icon-margin-end) ml-(--toast-icon-margin-start)",
                  "*:mr-(--toast-svg-margin-start) *:ml-(--toast-svg-margin-start) *:size-5"
                ),
              },
            }}
          />
          <Footer />
        </main>
      </body>
    </html>
  );
}
