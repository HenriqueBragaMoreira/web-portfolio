import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Toaster } from "sonner";
import { Footer } from "@/components/footer";
import { LocaleSwitcher } from "@/components/localeSwitcher";
import { MotionProvider } from "@/components/motion/motionProvider";
import { Navbar } from "@/components/navbar";
import { site } from "@/data/site";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cva";
import { absoluteUrl, alternatesFor, localizedPath } from "@/lib/seo";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

type LocaleLayoutProps = _WithChildren & {
  params: Promise<{ locale: string }>;
};

export const viewport: Viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const ogImage = {
    url: localizedPath("/og", locale),
    width: 1200,
    height: 630,
    alt: site.name,
  };

  return {
    metadataBase: new URL(site.url),
    title: { default: t("title"), template: `%s · ${site.name}` },
    description: t("description"),
    applicationName: site.name,
    authors: [{ name: site.name, url: site.socials.linkedin }],
    creator: site.name,
    keywords: [
      "Henrique Braga",
      "Full Stack Developer",
      "Desenvolvedor Full Stack",
      "Software Engineer",
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "São Paulo",
    ],
    alternates: alternatesFor("/", locale),
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: locale.replace("-", "_"),
      url: absoluteUrl("/", locale),
      title: t("title"),
      description: t("description"),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Intro" });
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: t("role"),
    url: absoluteUrl("/", locale),
    image: `${site.url}${site.photo}`,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressCountry: "BR",
    },
    sameAs: Object.values(site.socials),
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={cn(inter.className, "font-sans antialiased")}>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, "<" is escaped
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <NextIntlClientProvider>
          <MotionProvider>
            <Navbar />
            <LocaleSwitcher />

            <main className="flex flex-col items-center gap-[120px] px-4 pb-24 md:px-0">
              {children}
            </main>

            <Footer />
          </MotionProvider>

          <Toaster
            toastOptions={{
              unstyled: true,
              classNames: {
                toast: cn(
                  "flex items-center gap-1.5 rounded-xl border border-foreground bg-background p-4 font-sans text-primary/70 text-sm shadow-lg",
                  "h-(--front-toast-height) w-(--width)"
                ),
                description: "text-secondary",
                icon: cn(
                  "relative flex size-4 shrink-0 items-center",
                  "mr-(--toast-icon-margin-end) ml-(--toast-icon-margin-start)",
                  "*:mr-(--toast-svg-margin-start) *:ml-(--toast-svg-margin-start) *:size-5"
                ),
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
