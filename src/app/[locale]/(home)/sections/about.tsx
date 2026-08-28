import { useTranslations } from "next-intl";
import { Reveal, RevealItem } from "@/components/motion/reveal";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <Reveal
      as="section"
      id="about"
      stagger={0.08}
      // Shares the first viewport on desktop: let the intro lead.
      delay={0.35}
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <RevealItem as="h2" className="font-medium leading-6 md:text-xl">
        {t("title")}
      </RevealItem>

      <div className="flex flex-col gap-5 text-secondary text-sm md:text-base">
        <RevealItem as="p" className="leading-[22.4px]">
          {t("p1")}
        </RevealItem>
        <RevealItem as="p" className="leading-[22.4px]">
          {t("p2")}
        </RevealItem>
      </div>
    </Reveal>
  );
}
