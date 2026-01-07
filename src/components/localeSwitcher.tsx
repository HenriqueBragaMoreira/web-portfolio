"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const SHORT_LABELS = {
  "pt-BR": "PT",
  "en-US": "EN",
  "es-ES": "ES",
} as const;

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const currentLocale = useLocale();
  const pathname = usePathname();

  return (
    <nav
      aria-label={t("label")}
      data-locale-switcher
      className="fixed top-[18px] right-4 z-40 flex h-8 items-center gap-0.5 rounded-[8px] bg-input-background p-0.5 transition-opacity duration-300 md:right-6"
    >
      {routing.locales.map((locale) => {
        const isCurrent = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            hrefLang={locale}
            lang={locale}
            scroll={false}
            aria-current={isCurrent ? "true" : undefined}
            title={t(locale)}
            className="grid h-7 min-w-9 place-items-center rounded-[6px] px-2 font-medium text-secondary text-xs tracking-wide transition-colors duration-200 hover:text-primary aria-[current=true]:bg-background aria-[current=true]:text-primary"
          >
            <span aria-hidden="true">{SHORT_LABELS[locale]}</span>
            <span className="sr-only">{t(locale)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
