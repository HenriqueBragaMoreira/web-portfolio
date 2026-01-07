import {
  DrizzleIcon,
  ExpressIcon,
  FastifyIcon,
  HonoIcon,
  NestIcon,
  NodeIcon,
  PrismaIcon,
} from "@/components/icons/stacks/back";
import {
  MySqlIcon,
  PostgresIcon,
  SupabaseIcon,
} from "@/components/icons/stacks/databases";
import {
  AxiosIcon,
  KyIcon,
  NextjsIcon,
  ReactHookFormIcon,
  ReactIcon,
  ReactQueryIcon,
  ReactTableIcon,
  RsbuildIcon,
  StorybookIcon,
  TailwindIcon,
  ViteIcon,
  ZodIcon,
} from "@/components/icons/stacks/front";
import {
  JavascriptIcon,
  TypescriptIcon,
} from "@/components/icons/stacks/languages/";
import {
  BiomeIcon,
  EslintIcon,
  PrettierIcon,
} from "@/components/icons/stacks/linters";
import { ExpoIcon, NativeWindIcon } from "@/components/icons/stacks/mobile";
import {
  NpmIcon,
  PnpmIcon,
  YarnIcon,
} from "@/components/icons/stacks/package-manager";
import {
  JestIcon,
  ReactTestingLibraryIcon,
  VitestIcon,
} from "@/components/icons/stacks/testing";
import {
  AndroidStudioIcon,
  CursorIcon,
  DockerIcon,
  FigmaIcon,
  InsomniaIcon,
  NotionIcon,
  PostmanIcon,
  VsCodeIcon,
} from "@/components/icons/stacks/tools";

interface StackDefinition {
  id: string;
  title: string;
  href: string;
  icon: React.ElementType;
}

export const stackItems = {
  nextjs: {
    id: "nextjs",
    title: "Next.js",
    icon: NextjsIcon,
    href: "https://nextjs.org/",
  },
  react: {
    id: "react",
    title: "React",
    icon: ReactIcon,
    href: "https://reactjs.org/",
  },
  tailwind: {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: TailwindIcon,
    href: "https://tailwindcss.com/",
  },
  vitest: {
    id: "vitest",
    title: "Vitest",
    icon: VitestIcon,
    href: "https://vitest.dev/",
  },
  node: {
    id: "node",
    title: "NodeJS",
    icon: NodeIcon,
    href: "https://nodejs.org/",
  },
  nest: {
    id: "nest",
    title: "NestJS",
    icon: NestIcon,
    href: "https://nestjs.com/",
  },
  javascript: {
    id: "javascript",
    title: "JavaScript",
    icon: JavascriptIcon,
    href: "https://www.javascript.com/",
  },
  typescript: {
    id: "typescript",
    title: "TypeScript",
    icon: TypescriptIcon,
    href: "https://www.typescriptlang.org/",
  },
  vite: {
    id: "vite",
    title: "Vite",
    icon: ViteIcon,
    href: "https://vitejs.dev/",
  },
  rsbuild: {
    id: "rsbuild",
    title: "Rsbuild",
    icon: RsbuildIcon,
    href: "https://rsbuild.dev/",
  },
  ky: { id: "ky", title: "Ky", icon: KyIcon, href: "https://ky.dev/" },
  zod: { id: "zod", title: "Zod", icon: ZodIcon, href: "https://zod.dev/" },
  tanstackQuery: {
    id: "tanstackQuery",
    title: "TanStack Query",
    icon: ReactQueryIcon,
    href: "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
  reactHookForm: {
    id: "reactHookForm",
    title: "React Hook Form",
    icon: ReactHookFormIcon,
    href: "https://react-hook-form.com/",
  },
  tanstackTable: {
    id: "tanstackTable",
    title: "TanStack Table",
    icon: ReactTableIcon,
    href: "https://tanstack.com/table/latest/docs/introduction",
  },
  storybook: {
    id: "storybook",
    title: "Storybook",
    icon: StorybookIcon,
    href: "https://storybook.js.org/",
  },
  axios: {
    id: "axios",
    title: "Axios",
    icon: AxiosIcon,
    href: "https://axios-http.com/",
  },
  hono: {
    id: "hono",
    title: "Hono",
    icon: HonoIcon,
    href: "https://hono.dev/",
  },
  express: {
    id: "express",
    title: "Express",
    icon: ExpressIcon,
    href: "https://expressjs.com/",
  },
  fastify: {
    id: "fastify",
    title: "Fastify",
    icon: FastifyIcon,
    href: "https://fastify.dev/",
  },
  drizzle: {
    id: "drizzle",
    title: "Drizzle",
    icon: DrizzleIcon,
    href: "https://orm.drizzle.team/",
  },
  prisma: {
    id: "prisma",
    title: "Prisma",
    icon: PrismaIcon,
    href: "https://www.prisma.io/",
  },
  reactNative: {
    id: "reactNative",
    title: "React Native",
    icon: ReactIcon,
    href: "https://reactnative.dev/",
  },
  expo: {
    id: "expo",
    title: "Expo",
    icon: ExpoIcon,
    href: "https://expo.dev/",
  },
  nativewind: {
    id: "nativewind",
    title: "NativeWind",
    icon: NativeWindIcon,
    href: "https://www.nativewind.dev/",
  },
  mysql: {
    id: "mysql",
    title: "MySQL",
    icon: MySqlIcon,
    href: "https://www.mysql.com/",
  },
  postgresql: {
    id: "postgresql",
    title: "PostgreSQL",
    icon: PostgresIcon,
    href: "https://www.postgresql.org/",
  },
  supabase: {
    id: "supabase",
    title: "Supabase",
    icon: SupabaseIcon,
    href: "https://supabase.com/",
  },
  jest: {
    id: "jest",
    title: "Jest",
    icon: JestIcon,
    href: "https://jestjs.io/",
  },
  testingLibrary: {
    id: "testingLibrary",
    title: "React Testing Library",
    icon: ReactTestingLibraryIcon,
    href: "https://testing-library.com/docs/react-testing-library/intro/",
  },
  npm: {
    id: "npm",
    title: "npm",
    icon: NpmIcon,
    href: "https://www.npmjs.com/",
  },
  yarn: {
    id: "yarn",
    title: "Yarn",
    icon: YarnIcon,
    href: "https://yarnpkg.com/",
  },
  pnpm: { id: "pnpm", title: "pnpm", icon: PnpmIcon, href: "https://pnpm.io/" },
  biome: {
    id: "biome",
    title: "Biome",
    icon: BiomeIcon,
    href: "https://biomejs.dev/",
  },
  eslint: {
    id: "eslint",
    title: "ESLint",
    icon: EslintIcon,
    href: "https://eslint.org/",
  },
  prettier: {
    id: "prettier",
    title: "Prettier",
    icon: PrettierIcon,
    href: "https://prettier.io/",
  },
  cursor: {
    id: "cursor",
    title: "Cursor",
    icon: CursorIcon,
    href: "https://www.cursor.com/",
  },
  vscode: {
    id: "vscode",
    title: "Visual Studio Code",
    icon: VsCodeIcon,
    href: "https://code.visualstudio.com/",
  },
  docker: {
    id: "docker",
    title: "Docker",
    icon: DockerIcon,
    href: "https://www.docker.com/",
  },
  insomnia: {
    id: "insomnia",
    title: "Insomnia",
    icon: InsomniaIcon,
    href: "https://insomnia.rest/",
  },
  androidStudio: {
    id: "androidStudio",
    title: "Android Studio",
    icon: AndroidStudioIcon,
    href: "https://developer.android.com/studio",
  },
  figma: {
    id: "figma",
    title: "Figma",
    icon: FigmaIcon,
    href: "https://www.figma.com/",
  },
  notion: {
    id: "notion",
    title: "Notion",
    icon: NotionIcon,
    href: "https://www.notion.so/",
  },
  postman: {
    id: "postman",
    title: "Postman",
    icon: PostmanIcon,
    href: "https://www.postman.com/",
  },
} as const satisfies Record<string, StackDefinition>;

export type StackId = keyof typeof stackItems;

export type Stack = (typeof stackItems)[StackId];

export const featuredStacks: readonly StackId[] = [
  "nextjs",
  "react",
  "typescript",
  "nest",
  "prisma",
  "postgresql",
];

export const stackGroups = [
  { id: "languages", stacks: ["javascript", "typescript"] },
  {
    id: "frontend",
    stacks: [
      "nextjs",
      "react",
      "vite",
      "rsbuild",
      "tailwind",
      "ky",
      "zod",
      "tanstackQuery",
      "reactHookForm",
      "tanstackTable",
      "storybook",
      "axios",
    ],
  },
  {
    id: "backend",
    stacks: [
      "node",
      "nest",
      "hono",
      "express",
      "fastify",
      "drizzle",
      "prisma",
      "zod",
      "axios",
    ],
  },
  { id: "mobile", stacks: ["reactNative", "expo", "nativewind"] },
  { id: "databases", stacks: ["mysql", "postgresql", "supabase"] },
  { id: "testing", stacks: ["vitest", "jest", "testingLibrary"] },
  { id: "packageManagers", stacks: ["npm", "yarn", "pnpm"] },
  { id: "linters", stacks: ["biome", "eslint", "prettier"] },
  {
    id: "tools",
    stacks: [
      "cursor",
      "vscode",
      "docker",
      "insomnia",
      "androidStudio",
      "figma",
      "notion",
      "postman",
    ],
  },
] as const satisfies readonly { id: string; stacks: readonly StackId[] }[];
