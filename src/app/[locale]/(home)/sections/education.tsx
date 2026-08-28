import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal, RevealItem, RevealLine } from "@/components/motion/reveal";
import { education } from "@/data/education";

export function EducationSection() {
  const t = useTranslations("Education");

  return (
    <Reveal
      as="section"
      id="education"
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <RevealItem as="h2" className="font-medium leading-6 md:text-xl">
        {t("title")}
      </RevealItem>

      <div className="flex flex-col gap-12">
        {education.map((item) => (
          <Reveal
            key={item.id}
            as="article"
            stagger={0.06}
            className="relative flex flex-col gap-8 pl-4"
          >
            <RevealLine axis="y" />

            <div className="flex flex-col gap-2">
              <RevealItem className="flex items-center justify-between text-[13px] text-secondary md:text-sm">
                <div className="flex items-center gap-0.5">
                  <MapPin size={14} aria-hidden="true" />
                  <span>{item.location}</span>
                </div>

                <span>{item.period}</span>
              </RevealItem>

              <RevealItem
                as="h3"
                className="font-medium text-primary text-sm leading-[19.2px] md:text-base"
              >
                {t(`items.${item.id}.course`)}
              </RevealItem>

              <RevealItem
                as="span"
                className="text-[13px] text-secondary md:text-sm"
              >
                {item.institution}
              </RevealItem>
            </div>

            <RevealItem as="p" className="text-secondary text-sm">
              {t(`items.${item.id}.description`)}
            </RevealItem>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
