import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projectCard";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/navigation";

export function WorkSection() {
  const t = useTranslations("Work");

  return (
    <Reveal
      as="section"
      id="work"
      stagger={0.1}
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <RevealItem className="flex items-center justify-between">
        <h2 className="font-medium leading-6 md:text-xl">{t("title")}</h2>

        <Link
          href="/works"
          className="group flex items-center gap-0.5 text-secondary transition-colors hover:text-primary"
        >
          <span className="text-sm md:text-base">{t("seeAll")}</span>
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </RevealItem>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <RevealItem key={project.slug} variant="lift" className="grid">
            <ProjectCard
              project={project}
              sizes="(max-width: 768px) 100vw, 350px"
            />
          </RevealItem>
        ))}
      </div>
    </Reveal>
  );
}
