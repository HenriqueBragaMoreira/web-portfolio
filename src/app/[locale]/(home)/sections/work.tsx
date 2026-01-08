import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { ProjectCard } from "@/components/projectCard";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/navigation";

export function WorkSection() {
  const t = useTranslations("Work");

  return (
    <section
      id="work"
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-medium leading-6 md:text-xl">{t("title")}</h2>

        <Link
          href="/works"
          className="flex items-center gap-0.5 text-secondary hover:text-primary"
        >
          <span className="text-sm md:text-base">{t("seeAll")}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            sizes="(max-width: 768px) 100vw, 350px"
          />
        ))}
      </div>
    </section>
  );
}
