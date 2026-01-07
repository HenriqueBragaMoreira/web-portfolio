import { MapPin } from "lucide-react";
import { useLocale, useMessages, useTranslations } from "next-intl";
import { experiences } from "@/data/experiences";
import { formatMonthYear } from "@/utils/formatMonthYear";

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const locale = useLocale();
  const { items } = useMessages().Experience;

  return (
    <section
      id="experience"
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <h2 className="font-medium leading-6 md:text-xl">{t("title")}</h2>

      <div className="flex flex-col gap-12">
        {experiences.map((experience) => {
          const { bullets } = items[experience.id];

          return (
            <article
              key={experience.id}
              className="flex flex-col gap-8 border-foreground border-l pl-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-0.5 text-secondary">
                  <MapPin size={14} aria-hidden="true" />
                  <span className="text-[13px] md:text-sm">
                    {experience.location}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium text-sm leading-[19.4px] md:text-base">
                    {experience.company}
                  </h3>

                  <span className="shrink-0 text-[13px] text-secondary md:text-sm">
                    {formatMonthYear(experience.start, locale)} –{" "}
                    {experience.end
                      ? formatMonthYear(experience.end, locale)
                      : t("present")}
                  </span>
                </div>

                <span className="text-[13px] text-secondary md:text-sm">
                  {t(`items.${experience.id}.position`)}
                </span>
              </div>

              <ul className="list-disc space-y-2 pl-4 text-secondary">
                {Object.entries(bullets).map(([key, bullet]) => (
                  <li key={key} className="text-pretty text-sm md:text-base">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
