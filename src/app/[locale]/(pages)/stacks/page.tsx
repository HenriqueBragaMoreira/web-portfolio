import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { DialogStackInfo } from "@/app/[locale]/(home)/sections/components/dialogStackInfo";
import { Reveal, RevealItem, RevealLine } from "@/components/motion/reveal";
import { stackGroups, stackItems } from "@/data/stacks";
import type { Locale } from "@/i18n/routing";
import { alternatesFor } from "@/lib/seo";

type StacksPageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: StacksPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("stacksTitle"),
    description: t("stacksDescription"),
    alternates: alternatesFor("/stacks", locale),
  };
}

export default function StacksPage() {
  const t = useTranslations("Stacks");

  return (
    <div className="flex w-full max-w-[700px] flex-col justify-center gap-8">
      <Reveal trigger="mount">
        <RevealItem as="h1" className="font-medium text-2xl">
          {t("title")}
        </RevealItem>
      </Reveal>

      {stackGroups.map((group) => (
        <Reveal
          key={group.id}
          as="section"
          stagger={0.03}
          className="flex flex-col gap-6"
        >
          <div className="relative pb-px">
            <RevealItem as="h2" className="md:text-lg">
              {t(`groups.${group.id}`)}
            </RevealItem>
            <RevealLine axis="x" className="top-auto bottom-0" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {group.stacks.map((id) => (
              <RevealItem key={id} className="grid">
                <DialogStackInfo stack={stackItems[id]} />
              </RevealItem>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
