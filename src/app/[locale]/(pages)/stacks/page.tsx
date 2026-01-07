import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { DialogStackInfo } from "@/app/[locale]/(home)/sections/components/dialogStackInfo";
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
      <h1 className="font-medium text-2xl">{t("title")}</h1>

      {stackGroups.map((group) => (
        <section key={group.id} className="flex flex-col gap-6">
          <div>
            <h2 className="md:text-lg">{t(`groups.${group.id}`)}</h2>
            <div className="h-px bg-foreground" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {group.stacks.map((id) => (
              <DialogStackInfo key={id} stack={stackItems[id]} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
