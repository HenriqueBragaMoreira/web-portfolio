import { Download, MapPin } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { CopyEmailButton } from "@/components/copyEmailButton";
import { Reveal, RevealItem, RevealLine } from "@/components/motion/reveal";
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

  // One sequence on load: the photo is uncovered, the name and details come
  // into focus in reading order, then the rule draws under them.
  return (
    <Reveal
      as="section"
      id="intro"
      trigger="mount"
      stagger={0.07}
      className="flex w-full max-w-[700px] flex-col justify-center gap-8 pt-24"
    >
      <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-end">
        <div className="flex flex-1 flex-col items-center gap-4 md:flex-row">
          <RevealItem
            variant="unmask"
            className="size-[155px] shrink-0 overflow-hidden rounded-lg md:size-[122px]"
          >
            <RevealItem variant="settle" className="size-full">
              <Image
                src={site.photo}
                alt={t("photoAlt")}
                width={155}
                height={155}
                priority
                className="size-full object-cover"
              />
            </RevealItem>
          </RevealItem>

          <div className="flex flex-1 flex-col items-center gap-4 md:items-start">
            <div className="flex flex-col items-center gap-1 md:items-start">
              <RevealItem
                as="h1"
                className="font-medium text-[22px] leading-[26px] md:text-[26px] md:leading-[31.2px]"
              >
                {site.name}
              </RevealItem>

              <RevealItem
                as="p"
                className="font-medium text-secondary leading-6 md:text-xl"
              >
                {t("role")}
              </RevealItem>

              <RevealItem className="flex items-center gap-0.5 text-secondary">
                <MapPin size={14} aria-hidden="true" />
                <p className="text-xs md:text-sm">{t("location")}</p>
              </RevealItem>
            </div>

            <RevealItem className="flex items-center gap-1.5">
              <span aria-hidden="true" className="relative flex size-1.5">
                <RevealItem
                  as="span"
                  variant="ping"
                  className="absolute inset-0 rounded-full bg-green-500"
                />
                <span className="size-1.5 rounded-full bg-green-500" />
              </span>
              <p className="text-secondary text-xs md:text-sm">{t("status")}</p>
            </RevealItem>
          </div>
        </div>

        <RevealItem>
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
                  <span className="text-sm md:text-base">
                    {t("downloadCv")}
                  </span>
                </span>

                <span className="absolute bottom-0 left-0 h-px w-full bg-foreground" />
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="end">
              {t("cvTooltip")}
            </TooltipContent>
          </Tooltip>
        </RevealItem>
      </div>

      <div className="relative flex flex-col items-center gap-4 pt-2 md:flex-row md:justify-between md:gap-0">
        <RevealLine axis="x" />
        <RevealItem>
          <CopyEmailButton />
        </RevealItem>
        <RevealItem>
          <SocialLinks />
        </RevealItem>
      </div>
    </Reveal>
  );
}
