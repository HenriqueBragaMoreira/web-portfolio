import { useTranslations } from "next-intl";
import { site } from "@/data/site";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mx-auto flex w-[calc(100%-2rem)] max-w-[700px] flex-col-reverse items-center gap-4 border-foreground border-t pt-2 pb-4 text-[13px] text-secondary md:w-full md:flex-row md:justify-between md:gap-0 md:text-sm">
      <p>
        {t("builtBy")}{" "}
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2"
        >
          {site.name}
        </a>
      </p>

      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
