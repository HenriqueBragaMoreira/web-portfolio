import { Download, MapPin } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { CopyEmailButton } from "@/components/copyEmailButton";
import { SocialLinks } from "@/components/socialLinks";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { site } from "@/data/site";

export function IntroSection() {
  const t = useTranslations("Intro");
  const locale = useLocale();

  return (
    <section
      id="intro"
      className="flex w-full max-w-[700px] flex-col justify-center gap-8 pt-24"
    >
      <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-end">
        <div className="flex flex-1 flex-col items-center gap-4 md:flex-row">
          <Image
            src={site.photo}
            alt={t("photoAlt")}
            width={155}
            height={155}
            priority
            className="size-[155px] rounded-lg object-cover md:size-[122px]"
          />

          <div className="flex flex-1 flex-col items-center gap-4 md:items-start">
            <div className="flex flex-col items-center gap-1 md:items-start">
              <h1 className="font-medium text-[22px] leading-[26px] md:text-[26px] md:leading-[31.2px]">
                {site.name}
              </h1>

              <p className="font-medium text-secondary leading-6 md:text-xl">
                {t("role")}
              </p>

              <div className="flex items-center gap-0.5 text-secondary">
                <MapPin size={14} aria-hidden="true" />
                <p className="text-xs md:text-sm">{t("location")}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-green-500"
              />
              <p className="text-secondary text-xs md:text-sm">{t("status")}</p>
            </div>
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={site.cv[locale]}
              download
              type="application/pdf"
              className="group relative flex flex-col gap-0.5 pb-0.5"
            >
              <span className="flex items-center gap-1">
                <Download size={16} aria-hidden="true" />
                <span className="text-sm md:text-base">{t("downloadCv")}</span>
              </span>

              <span className="absolute bottom-0 left-0 h-px w-full bg-foreground" />
              <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="end">
            {t("cvTooltip")}
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex flex-col items-center gap-4 border-foreground border-t pt-2 md:flex-row md:justify-between md:gap-0">
        <CopyEmailButton />
        <SocialLinks />
      </div>
    </section>
  );
}
