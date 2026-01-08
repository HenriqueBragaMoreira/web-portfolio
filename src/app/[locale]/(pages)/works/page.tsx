import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ProjectCard } from "@/components/projectCard";
import { projects } from "@/data/projects";
import type { Locale } from "@/i18n/routing";
import { alternatesFor } from "@/lib/seo";

type WorksPageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: WorksPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("worksTitle"),
    description: t("worksDescription"),
    alternates: alternatesFor("/works", locale),
  };
}

export default function WorksPage() {
  const t = useTranslations("Work");

  return (
    <div className="flex w-full max-w-[700px] flex-col justify-center gap-8">
      <h1 className="font-medium text-2xl">{t("pageTitle")}</h1>

      <div className="grid grid-cols-1 gap-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            sizes="(max-width: 768px) 100vw, 700px"
          />
        ))}
      </div>
    </div>
  );
}
