import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/seo";

const pages = [
  "/",
  "/works",
  "/stacks",
  ...projects.map((project) => `/work/${project.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((href) => ({
    url: absoluteUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, absoluteUrl(href, locale)])
      ),
    },
  }));
}
