import type { Locale } from "@/i18n-config";

const dictionaries = {
  en: () => import("@/dictionary/en.json").then((module) => module.default),
  pt: () => import("@/dictionary/pt.json").then((module) => module.default),
  es: () => import("@/dictionary/es.json").then((module) => module.default)
};

export const getDictionary = async (locale: Locale) => await dictionaries[locale]();
