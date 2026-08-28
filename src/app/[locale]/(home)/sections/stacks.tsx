import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { featuredStacks, stackItems } from "@/data/stacks";
import { Link } from "@/i18n/navigation";
import { DialogStackInfo } from "./components/dialogStackInfo";

export function StacksSection() {
  const t = useTranslations("Stacks");

  return (
    <Reveal
      as="section"
      id="stacks"
      stagger={0.04}
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <RevealItem className="flex items-center justify-between">
        <h2 className="font-medium leading-6 md:text-xl">{t("title")}</h2>

        <Link
          href="/stacks"
          className="group flex items-center gap-0.5 text-secondary text-sm transition-colors hover:text-primary md:text-base"
        >
          <span>{t("seeAll")}</span>
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </RevealItem>

      <div className="grid gap-8 sm:grid-cols-2">
        {featuredStacks.map((id) => (
          <RevealItem key={id} className="grid">
            <DialogStackInfo stack={stackItems[id]} />
          </RevealItem>
        ))}
      </div>
    </Reveal>
  );
}
