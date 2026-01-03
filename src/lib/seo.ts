import type { Metadata } from "next";
import { site } from "@/data/site";
import { getPathname } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";

export function localizedPath(href: string, locale: Locale) {
  return getPathname({ href, locale });
}

export function absoluteUrl(href: string, locale: Locale) {
  return `${site.url}${localizedPath(href, locale)}`;
}

export function alternatesFor(
  href: string,
  locale: Locale
): Metadata["alternates"] {
  return {
    canonical: localizedPath(href, locale),
    languages: {
      ...Object.fromEntries(
        routing.locales.map((item) => [item, localizedPath(href, item)])
      ),
      "x-default": localizedPath(href, routing.defaultLocale),
    },
  };
}
