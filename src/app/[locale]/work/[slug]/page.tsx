import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useMessages, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { use } from "react";
import { Github } from "@/components/icons/github";
import { Reveal, RevealItem, RevealLine } from "@/components/motion/reveal";
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

  // The header and cover play as one sequence on load; everything below the
  // fold enters as it is reached.
  return (
    <Reveal
      as="article"
      trigger="mount"
      stagger={0.07}
      className="flex w-full max-w-[700px] flex-col gap-10 pt-24"
    >
      <RevealItem variant="fade" className="max-w-fit">
        <Link
          href="/works"
          className="group flex items-center gap-0.5 text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
            className="transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
          />
          {t("back")}
        </Link>
      </RevealItem>

      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <RevealItem
            as="h1"
            className="text-balance font-medium text-[26px] leading-tight md:text-[32px]"
          >
            {project.name}
          </RevealItem>
          <RevealItem as="p" className="text-secondary md:text-xl">
            {t(`items.${project.slug}.subtitle`)}
          </RevealItem>
        </div>

        <div className="relative pt-3">
          <RevealLine axis="x" />
          <dl className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <RevealItem className="flex gap-2">
              <dt className="text-secondary">{t("year")}</dt>
              <dd className="tabular-nums">{project.year}</dd>
            </RevealItem>
            <RevealItem className="flex gap-2">
              <dt className="text-secondary">{t("role")}</dt>
              <dd>{t(`items.${project.slug}.role`)}</dd>
            </RevealItem>
          </dl>
        </div>

        <RevealItem>
          <ProjectLinks project={project} />
        </RevealItem>
      </header>

      <RevealItem
        variant="unmask"
        className="overflow-hidden rounded-lg border border-foreground"
      >
        <RevealItem variant="settle">
          <Image
            src={cover}
            alt={screenshotAlt}
            width={1440}
            height={900}
            priority
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full"
          />
        </RevealItem>
      </RevealItem>

      <Reveal stagger={0.08} className="flex max-w-[65ch] flex-col gap-4">
        <RevealItem
          as="p"
          className="text-pretty text-base leading-relaxed md:text-lg"
        >
          {t(`items.${project.slug}.summary`)}
        </RevealItem>
        <RevealItem
          as="p"
          className="text-pretty text-secondary text-sm leading-relaxed md:text-base"
        >
          {t(`items.${project.slug}.description`)}
        </RevealItem>
      </Reveal>

      <Reveal as="section" stagger={0.06} className="flex flex-col gap-4">
        <RevealItem as="h2" className="font-medium md:text-lg">
          {t("features")}
        </RevealItem>
        <div className="relative pl-4">
          <RevealLine axis="y" />
          <ul className="flex flex-col gap-3">
            {Object.entries(features).map(([key, feature]) => (
              <RevealItem
                key={key}
                as="li"
                className="text-pretty text-secondary text-sm md:text-base"
              >
                {feature}
              </RevealItem>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal as="section" stagger={0.03} className="flex flex-col gap-4">
        <RevealItem as="h2" className="font-medium md:text-lg">
          {t("stack")}
        </RevealItem>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <RevealItem
              key={item}
              as="li"
              variant="pop"
              className="rounded-md border border-foreground px-2.5 py-1 text-secondary text-sm"
            >
              {item}
            </RevealItem>
          ))}
        </ul>
      </Reveal>

      {gallery.map((image) => (
        <Reveal
          key={image}
          variant="unmask"
          className="overflow-hidden rounded-lg border border-foreground"
        >
          <RevealItem variant="settle">
            <Image
              src={image}
              alt={screenshotAlt}
              width={1440}
              height={900}
              sizes="(max-width: 768px) 100vw, 700px"
              className="w-full"
            />
          </RevealItem>
        </Reveal>
      ))}
    </Reveal>
  );
}
