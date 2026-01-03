import { notFound } from "next/navigation";
// biome-ignore lint/correctness/noUnresolvedImports: types are generated into .next/types at build time
import { locale as getRootLocale } from "next/root-params";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async () => {
  const locale = await getRootLocale();
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return {
    locale,
    timeZone: "America/Sao_Paulo",
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
