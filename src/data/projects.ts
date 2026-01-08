export interface Project {
  slug: "we-finance" | "gesture-pro";
  name: string;
  year: string;
  images: readonly [string, ...string[]];
  liveUrl: string | null;
  repoUrl: string | null;
  stack: readonly string[];
}

export const projects: readonly Project[] = [
  {
    slug: "we-finance",
    name: "We Finance",
    year: "2025 – 2026",
    images: ["/projects/we-finance.png", "/projects/we-finance-2.png"],
    liveUrl: "https://www.we-finance.app",
    repoUrl: null,
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Resend",
      "Turborepo",
    ],
  },
  {
    slug: "gesture-pro",
    name: "Gesture Pro",
    year: "2025",
    images: ["/projects/gesture-pro.png", "/projects/gesture-pro-2.png"],
    liveUrl: null,
    repoUrl: "https://github.com/HenriqueBragaMoreira/gesture-pro",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "TanStack Table",
      "Recharts",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
