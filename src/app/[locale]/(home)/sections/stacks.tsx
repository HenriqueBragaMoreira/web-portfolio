import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { featuredStacks, stackItems } from "@/data/stacks";
import { Link } from "@/i18n/navigation";
import { DialogStackInfo } from "./components/dialogStackInfo";

export function StacksSection() {
  const t = useTranslations("Stacks");

  return (
    <section
      id="stacks"
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-medium leading-6 md:text-xl">{t("title")}</h2>

        <Link
          href="/stacks"
          className="flex items-center gap-0.5 text-secondary text-sm hover:text-primary md:text-base"
        >
          <span>{t("seeAll")}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {featuredStacks.map((id) => (
          <DialogStackInfo key={id} stack={stackItems[id]} />
        ))}
      </div>
    </section>
  );
}
