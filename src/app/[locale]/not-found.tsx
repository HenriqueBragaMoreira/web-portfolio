import { House } from "lucide-react";
import { useTranslations } from "next-intl";
import { CopyEmailButton } from "@/components/copyEmailButton";
import { SocialLinks } from "@/components/socialLinks";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex min-h-[80vh] w-full max-w-[700px] flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-xl sm:text-[26px]">{t("title")}</h1>
          <p className="text-secondary text-xs sm:text-sm">
            {t("description")}
          </p>
        </div>

        <Link
          href="/"
          className="group relative flex max-w-fit flex-col gap-0.5 pb-0.5"
        >
          <span className="flex items-center gap-1">
            <House size={16} aria-hidden="true" />
            <span className="text-sm md:text-base">{t("back")}</span>
          </span>

          <span className="absolute bottom-0 left-0 h-px w-full bg-foreground" />
          <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full" />
        </Link>
      </div>

      <div className="flex w-full flex-col items-center gap-4 border-foreground border-t pt-2 md:flex-row md:justify-between md:gap-0">
        <CopyEmailButton />
        <SocialLinks />
      </div>
    </div>
  );
}
