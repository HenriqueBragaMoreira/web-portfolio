import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { RevealItem } from "@/components/motion/reveal";
import type { Project } from "@/data/projects";
import { Link } from "@/i18n/navigation";

interface ProjectCardProps {
  project: Project;
  sizes: string;
}

export function ProjectCard({ project, sizes }: ProjectCardProps) {
  const t = useTranslations("Project");

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col rounded-lg border border-foreground transition-colors hover:border-primary/30"
    >
      <div className="overflow-hidden rounded-t-lg">
        <RevealItem variant="settle">
          <Image
            src={project.images[0]}
            alt={t("screenshotAlt", { name: project.name })}
            width={1440}
            height={900}
            sizes={sizes}
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </RevealItem>
      </div>

      <div className="flex items-start justify-between border-foreground border-t p-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">{project.name}</h3>
          <span className="text-secondary text-sm">
            {t(`items.${project.slug}.subtitle`)}
          </span>
        </div>

        <ArrowRight
          aria-hidden="true"
          className="shrink-0 text-secondary transition-all duration-300 group-hover:-rotate-45 group-hover:text-primary"
          size={18}
          strokeWidth={1.5}
        />
      </div>
    </Link>
  );
}
