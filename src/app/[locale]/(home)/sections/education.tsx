import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { education } from "@/data/education";

export function EducationSection() {
  const t = useTranslations("Education");

  return (
    <section
      id="education"
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <h2 className="font-medium leading-6 md:text-xl">{t("title")}</h2>

      <div className="flex flex-col gap-12">
        {education.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-8 border-foreground border-l pl-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-[13px] text-secondary md:text-sm">
                <div className="flex items-center gap-0.5">
                  <MapPin size={14} aria-hidden="true" />
                  <span>{item.location}</span>
                </div>

                <span>{item.period}</span>
              </div>

              <h3 className="font-medium text-primary text-sm leading-[19.2px] md:text-base">
                {t(`items.${item.id}.course`)}
              </h3>

              <span className="text-[13px] text-secondary md:text-sm">
                {item.institution}
              </span>
            </div>

            <p className="text-secondary text-sm">
              {t(`items.${item.id}.description`)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
