import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useMessages, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { use } from "react";
import { Github } from "@/components/icons/github";
import { getProject, type Project, projects } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { alternatesFor } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Project" });

  return {
    title: project.name,
    description: t(`items.${project.slug}.summary`),
    alternates: alternatesFor(`/work/${project.slug}`, locale),
    openGraph: {
      title: project.name,
      description: t(`items.${project.slug}.summary`),
      images: [{ url: project.images[0], width: 1440, height: 900 }],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);

  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}

function ProjectLinks({ project }: { project: Project }) {
  const t = useTranslations("Project");

  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 rounded-md bg-primary px-4 py-2 font-medium text-background text-sm transition-colors hover:bg-primary/80"
        >
          {t("liveSite")}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ) : (
        <span className="text-secondary text-sm">{t("notDeployed")}</span>
      )}

      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-md border border-foreground fill-primary px-4 py-2 font-medium text-sm transition-colors hover:border-primary/40"
        >
          <Github className="size-4" />
          {t("sourceCode")}
        </a>
      ) : (
        <span className="flex items-center gap-1 text-secondary text-sm">
          <Lock size={14} aria-hidden="true" />
          {t("privateRepo")}
        </span>
      )}
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  const t = useTranslations("Project");
  const { features } = useMessages().Project.items[project.slug];
  const [cover, ...gallery] = project.images;
  const screenshotAlt = t("screenshotAlt", { name: project.name });

  return (
    <article className="flex w-full max-w-[700px] flex-col gap-10 pt-24">
      <Link
        href="/works"
        className="flex max-w-fit items-center gap-0.5 text-secondary hover:text-primary"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {t("back")}
      </Link>

      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-balance font-medium text-[26px] leading-tight md:text-[32px]">
            {project.name}
          </h1>
          <p className="text-secondary md:text-xl">
            {t(`items.${project.slug}.subtitle`)}
          </p>
        </div>

        <dl className="flex flex-wrap gap-x-8 gap-y-2 border-foreground border-t pt-3 text-sm">
          <div className="flex gap-2">
            <dt className="text-secondary">{t("year")}</dt>
            <dd className="tabular-nums">{project.year}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-secondary">{t("role")}</dt>
            <dd>{t(`items.${project.slug}.role`)}</dd>
          </div>
        </dl>

        <ProjectLinks project={project} />
      </header>

      <Image
        src={cover}
        alt={screenshotAlt}
        width={1440}
        height={900}
        priority
        sizes="(max-width: 768px) 100vw, 700px"
        className="w-full rounded-lg border border-foreground"
      />

      <div className="flex max-w-[65ch] flex-col gap-4">
        <p className="text-pretty text-base leading-relaxed md:text-lg">
          {t(`items.${project.slug}.summary`)}
        </p>
        <p className="text-pretty text-secondary text-sm leading-relaxed md:text-base">
          {t(`items.${project.slug}.description`)}
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium md:text-lg">{t("features")}</h2>
        <ul className="flex flex-col gap-3 border-foreground border-l pl-4">
          {Object.entries(features).map(([key, feature]) => (
            <li
              key={key}
              className="text-pretty text-secondary text-sm md:text-base"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium md:text-lg">{t("stack")}</h2>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-md border border-foreground px-2.5 py-1 text-secondary text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {gallery.map((image) => (
        <Image
          key={image}
          src={image}
          alt={screenshotAlt}
          width={1440}
          height={900}
          sizes="(max-width: 768px) 100vw, 700px"
          className="w-full rounded-lg border border-foreground"
        />
      ))}
    </article>
  );
}
