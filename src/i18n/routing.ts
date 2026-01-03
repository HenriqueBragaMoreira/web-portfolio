import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-BR", "en-US", "es-ES"],
  defaultLocale: "pt-BR",
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      "en-US": "/en",
      "es-ES": "/es",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
