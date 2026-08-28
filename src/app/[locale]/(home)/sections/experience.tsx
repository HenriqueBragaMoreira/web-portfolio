import { MapPin } from "lucide-react";
import { useLocale, useMessages, useTranslations } from "next-intl";
import { Reveal, RevealItem, RevealLine } from "@/components/motion/reveal";
import { experiences } from "@/data/experiences";
import { formatMonthYear } from "@/utils/formatMonthYear";

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const locale = useLocale();
  const { items } = useMessages().Experience;

  return (
    <Reveal
      as="section"
      id="experience"
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <RevealItem as="h2" className="font-medium leading-6 md:text-xl">
        {t("title")}
      </RevealItem>

      <div className="flex flex-col gap-12">
        {experiences.map((experience) => {
          const { bullets } = items[experience.id];

          // Each role enters on its own: the timeline rule draws down while
          // the details settle in reading order.
          return (
            <Reveal
              key={experience.id}
              as="article"
              stagger={0.06}
              className="relative flex flex-col gap-8 pl-4"
            >
              <RevealLine axis="y" />

              <div className="flex flex-col gap-2">
                <RevealItem className="flex items-center gap-0.5 text-secondary">
                  <MapPin size={14} aria-hidden="true" />
                  <span className="text-[13px] md:text-sm">
                    {experience.location}
                  </span>
                </RevealItem>

                <RevealItem className="flex items-center justify-between gap-4">
                  <h3 className="font-medium text-sm leading-[19.4px] md:text-base">
                    {experience.company}
                  </h3>

                  <span className="shrink-0 text-[13px] text-secondary md:text-sm">
                    {formatMonthYear(experience.start, locale)} –{" "}
                    {experience.end
                      ? formatMonthYear(experience.end, locale)
                      : t("present")}
                  </span>
                </RevealItem>

                <RevealItem
                  as="span"
                  className="text-[13px] text-secondary md:text-sm"
                >
                  {t(`items.${experience.id}.position`)}
                </RevealItem>
              </div>

              <ul className="list-disc space-y-2 pl-4 text-secondary">
                {Object.entries(bullets).map(([key, bullet]) => (
                  <RevealItem
                    key={key}
                    as="li"
                    className="text-pretty text-sm md:text-base"
                  >
                    {bullet}
                  </RevealItem>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Reveal>
  );
}
