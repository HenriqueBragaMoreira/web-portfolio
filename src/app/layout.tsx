import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

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
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
