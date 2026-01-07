import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <h2 className="font-medium leading-6 md:text-xl">{t("title")}</h2>

      <div className="flex flex-col gap-5 text-secondary text-sm md:text-base">
        <p className="leading-[22.4px]">{t("p1")}</p>
        <p className="leading-[22.4px]">{t("p2")}</p>
      </div>
    </section>
  );
}
