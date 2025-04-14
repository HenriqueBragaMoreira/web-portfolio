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

export interface StackGroup {
  title: string;
  stacks: Stack[];
}

export interface Stack {
  title: string;
  subtitle: string;
  description: string;
  stackLink: string;
  icon: React.ElementType;
}

export const simpleViewStacks: Stack[] = [
  {
    title: "Next.js",
    icon: NextjsIcon,
    subtitle: "Framework full-stack para web.",
    description:
      "Next.js é um framework React moderno que oferece renderização híbrida (SSR e SSG), roteamento intuitivo e performance otimizada. Ideal para criar aplicações web escaláveis, rápidas e com ótima experiência de desenvolvedor.",
    stackLink: "https://nextjs.org/",
  },
  {
    title: "React",
    icon: ReactIcon,
    subtitle: "Biblioteca para construção de interfaces.",
    description:
      "Biblioteca JavaScript focada na construção de interfaces de usuário reativas e componentizadas. É amplamente adotada por sua flexibilidade, performance e ecossistema robusto.",
    stackLink: "https://reactjs.org/",
  },
  {
    title: "Tailwind CSS",
    icon: TailwindIcon,
    subtitle: "Framework CSS repleto de recursos.",
    description:
      "Framework utilitário de CSS que permite criar interfaces modernas e responsivas com rapidez. Seu design centrado em classes facilita a construção de componentes estilizados de forma consistente.",
    stackLink: "https://tailwindcss.com/",
  },
  {
    title: "Vitest",
    icon: VitestIcon,
    subtitle: "Framework de testes.",
    description:
      "Framework de testes rápido e moderno para projetos com Vite. Oferece uma experiência de testes semelhante ao Jest, com performance otimizada e integração nativa com TypeScript.",
    stackLink: "https://vitest.dev/",
  },
  {
    title: "NodeJS",
    icon: NodeIcon,
    subtitle: "Ambiente de execução JavaScript.",
    description:
      "Ambiente de execução JavaScript no lado do servidor, conhecido por sua alta performance e arquitetura baseada em eventos. Ideal para criar APIs e aplicações escaláveis em tempo real.",
    stackLink: "https://nodejs.org/",
  },
  {
    title: "NestJS",
    icon: NestIcon,
    subtitle: "Framework progressivo para Node.js.",
    description:
      "Framework backend progressivo para Node.js, que utiliza TypeScript e princípios do Angular. Facilita a criação de APIs robustas, modulares e com arquitetura bem definida.",
    stackLink: "https://nestjs.com/",
  },
];

export const stacks: StackGroup[] = [
  {
    title: "Linguagens",
    stacks: [
      {
        title: "JavaScript",
        icon: JavascriptIcon,
        subtitle: "Linguagem de programação dinâmica.",
        description:
          "Linguagem de programação leve e interpretada, essencial para o desenvolvimento web. Suporta paradigmas orientado a objetos, funcional e imperativo, sendo amplamente utilizada em navegadores e também no backend com Node.js.",
        stackLink: "https://www.javascript.com/",
      },
      {
        title: "TypeScript",
        icon: TypescriptIcon,
        subtitle: "Superset tipado de JavaScript.",
        description:
          "Linguagem de programação que estende o JavaScript com tipagem estática e recursos avançados de orientação a objetos. Facilita o desenvolvimento de aplicações escaláveis e melhora a produtividade com ferramentas como autocompletar e verificação de tipos.",
        stackLink: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    title: "Front-End",
    stacks: [
      {
        title: "Next.js",
        icon: NextjsIcon,
        subtitle: "Framework full-stack para web.",
        description:
          "Next.js é um framework React moderno que oferece renderização híbrida (SSR e SSG), roteamento intuitivo e performance otimizada. Ideal para criar aplicações web escaláveis, rápidas e com ótima experiência de desenvolvedor.",
        stackLink: "https://nextjs.org/",
      },
      {
        title: "React",
        icon: ReactIcon,
        subtitle: "Biblioteca para construção de interfaces.",
        description:
          "Biblioteca JavaScript focada na construção de interfaces de usuário reativas e componentizadas. É amplamente adotada por sua flexibilidade, performance e ecossistema robusto.",
        stackLink: "https://reactjs.org/",
      },
      {
        title: "Vite",
        icon: ViteIcon,
        subtitle: "Bundler moderno para front-end.",
        description:
          "Ferramenta de build e dev server ultrarrápido, com suporte nativo a ESModules. Ideal para projetos com frameworks como React e Vue, oferece recarregamento instantâneo e integração com TypeScript.",
        stackLink: "https://vitejs.dev/",
      },
      {
        title: "Rsbuild",
        icon: RsbuildIcon,
        subtitle: "Ferramenta de build moderna.",
        description:
          "Sistema de build de alta performance para aplicações front-end, focado em velocidade, modularidade e integração com React e TypeScript.",
        stackLink: "https://rsbuild.dev/",
      },
      {
        title: "Tailwind CSS",
        icon: TailwindIcon,
        subtitle: "Framework CSS repleto de recursos.",
        description:
          "Framework utilitário de CSS que permite criar interfaces modernas e responsivas com rapidez. Seu design centrado em classes facilita a construção de componentes estilizados de forma consistente.",
        stackLink: "https://tailwindcss.com/",
      },
      {
        title: "Ky",
        icon: KyIcon,
        subtitle: "Cliente HTTP moderno.",
        description:
          "Cliente HTTP baseado em Fetch, com API simples, leve e focada em ergonomia. Ideal para realizar requisições assíncronas em projetos com JavaScript ou TypeScript.",
        stackLink: "https://ky.dev/",
      },
      {
        title: "Zod",
        icon: ZodIcon,
        subtitle: "Validador de esquemas tipado.",
        description:
          "Biblioteca TypeScript-first para validação e inferência de dados. Facilita a criação de validações robustas com tipagem estática e sem dependências externas.",
        stackLink: "https://zod.dev/",
      },
      {
        title: "TanStack Query",
        icon: ReactQueryIcon,
        subtitle: "Gerenciador de estados assíncronos.",
        description:
          "Biblioteca para gerenciamento de dados remotos (fetching, caching, sync e updates) em aplicações React. Reduz a complexidade de lidar com dados assíncronos.",
        stackLink:
          "https://tanstack.com/query/latest/docs/framework/react/overview",
      },
      {
        title: "React Hook Form",
        icon: ReactHookFormIcon,
        subtitle: "Gerenciador de formulários para React.",
        description:
          "Biblioteca eficiente para lidar com formulários em React, com foco em performance e mínima re-renderização. Suporta validação, integração com bibliotecas externas e tipagem com TypeScript.",
        stackLink: "https://react-hook-form.com/",
      },
      {
        title: "TanStack Table",
        icon: ReactTableIcon,
        subtitle: "Toolkit para tabelas dinâmicas.",
        description:
          "Biblioteca poderosa e extensível para criação de tabelas em React, com suporte a ordenação, paginação, agrupamento e virtualização.",
        stackLink: "https://tanstack.com/table/latest/docs/introduction",
      },
      {
        title: "Storybook",
        icon: StorybookIcon,
        subtitle: "Ferramenta de design system.",
        description:
          "Storybook é uma ferramenta para desenvolvimento e documentação de componentes de interface de forma isolada. Ela permite criar, testar e visualizar componentes de forma interativa, facilitando a construção e manutenção de design systems escaláveis.",
        stackLink: "https://storybook.js.org/",
      },
      {
        title: "Axios",
        icon: AxiosIcon,
        subtitle: "Cliente HTTP baseado em Promises.",
        description:
          "Axios é um cliente HTTP para JavaScript e TypeScript que facilita a realização de requisições assíncronas. Com suporte a Promises, interceptadores, tratamento de erros e configuração global, é amplamente utilizado em aplicações web e mobile para comunicação com APIs.",
        stackLink: "https://axios-http.com/",
      },
    ],
  },
  {
    title: "Back-End",
    stacks: [
      {
        title: "NodeJS",
        icon: NodeIcon,
        subtitle: "Ambiente de execução JavaScript.",
        description:
          "Ambiente de execução JavaScript no lado do servidor, conhecido por sua alta performance e arquitetura baseada em eventos. Ideal para criar APIs e aplicações escaláveis em tempo real.",
        stackLink: "https://nodejs.org/",
      },
      {
        title: "NestJS",
        icon: NestIcon,
        subtitle: "Framework progressivo para Node.js.",
        description:
          "Framework backend progressivo para Node.js, que utiliza TypeScript e princípios do Angular. Facilita a criação de APIs robustas, modulares e com arquitetura bem definida.",
        stackLink: "https://nestjs.com/",
      },
      {
        title: "Hono",
        icon: HonoIcon,
        subtitle: "Framework leve para APIs web.",
        description:
          "Microframework rápido e minimalista para criação de APIs com JavaScript ou TypeScript. Ideal para aplicações modernas, especialmente em edge runtimes.",
        stackLink: "https://hono.dev/",
      },
      {
        title: "Express",
        icon: ExpressIcon,
        subtitle: "Framework web minimalista.",
        description:
          "Framework HTTP para Node.js, conhecido por sua simplicidade e flexibilidade na criação de APIs e aplicações web. Amplamente utilizado no ecossistema JavaScript.",
        stackLink: "https://expressjs.com/",
      },
      {
        title: "Fastify",
        icon: FastifyIcon,
        subtitle: "Framework web de alta performance.",
        description:
          "Framework rápido e com baixo overhead para construção de APIs Node.js. Suporta plugins, validação de schemas com JSON Schema e é otimizado para performance.",
        stackLink: "https://fastify.dev/",
      },
      {
        title: "Drizzle",
        icon: DrizzleIcon,
        subtitle: "ORM para TypeScript.",
        description:
          "Drizzle é um ORM moderno e focado em segurança para TypeScript. Ele fornece uma abordagem baseada em SQL com tipagem estática e autocompletar completo, tornando a manipulação de banco de dados mais segura, previsível e produtiva.",
        stackLink: "https://orm.drizzle.team/",
      },
      {
        title: "Prisma",
        icon: PrismaIcon,
        subtitle: "ORM para Node.js e TypeScript.",
        description:
          "Prisma é um ORM moderno e intuitivo para Node.js e TypeScript. Ele simplifica o acesso ao banco de dados com uma API segura, tipada e de alta performance, além de oferecer ferramentas poderosas como migrations, introspecção e geração automática de tipos.",
        stackLink: "https://www.prisma.io/",
      },
      {
        title: "Zod",
        icon: ZodIcon,
        subtitle: "Validador de esquemas tipado.",
        description:
          "Biblioteca TypeScript-first para validação e inferência de dados. Facilita a criação de validações robustas com tipagem estática e sem dependências externas.",
        stackLink: "https://zod.dev/",
      },
      {
        title: "Axios",
        icon: AxiosIcon,
        subtitle: "Cliente HTTP baseado em Promises.",
        description:
          "Axios é um cliente HTTP para JavaScript e TypeScript que facilita a realização de requisições assíncronas. Com suporte a Promises, interceptadores, tratamento de erros e configuração global, é amplamente utilizado em aplicações web e mobile para comunicação com APIs.",
        stackLink: "https://axios-http.com/",
      },
    ],
  },
  {
    title: "Mobile",
    stacks: [
      {
        title: "React Native",
        icon: ReactIcon,
        subtitle: "Framework para criar aplicativos móveis.",
        description:
          "React Native é uma biblioteca JavaScript para criar aplicativos móveis usando React. Ele permite a criação de aplicativos nativos para iOS e Android usando o mesmo código base.",
        stackLink: "https://reactnative.dev/",
      },
      {
        title: "Expo",
        icon: ExpoIcon,
        subtitle: "Framework para criar aplicativos móveis.",
        description:
          "Expo é um framework e conjunto de ferramentas que simplifica o desenvolvimento com React Native, oferecendo APIs nativas pré-configuradas, serviços em nuvem e um fluxo de trabalho otimizado para desenvolvimento e publicação de aplicativos móveis.",
        stackLink: "https://expo.dev/",
      },
      {
        title: "NativeWind",
        icon: NativeWindIcon,
        subtitle: "Estilização Tailwind para React Native.",
        description:
          "NativeWind permite usar classes utilitárias do Tailwind CSS em projetos React Native. Ele traduz essas classes em estilos nativos, facilitando a criação de interfaces modernas e consistentes com produtividade e familiaridade do ecossistema Tailwind.",
        stackLink: "https://www.nativewind.dev/",
      },
    ],
  },
  {
    title: "Banco de dados",
    stacks: [
      {
        title: "MySQL",
        icon: MySqlIcon,
        subtitle: "Banco de dados relacional open-source.",
        description:
          "Sistema de gerenciamento de banco de dados relacional robusto e amplamente adotado. Utiliza SQL para manipulação de dados e é conhecido por sua performance e estabilidade.",
        stackLink: "https://www.mysql.com/",
      },
      {
        title: "PostgreSQL",
        icon: PostgresIcon,
        subtitle: "Banco de dados relacional avançado.",
        description:
          "Sistema de gerenciamento de banco de dados relacional poderoso, com suporte a extensões, transações complexas, JSON e alta conformidade com o padrão SQL.",
        stackLink: "https://www.postgresql.org/",
      },
      {
        title: "Supabase",
        icon: SupabaseIcon,
        subtitle: "Plataforma backend com PostgreSQL.",
        description:
          "Alternativa ao Firebase baseada em PostgreSQL. Oferece autenticação, APIs em tempo real, storage e funções serverless de forma simples e escalável.",
        stackLink: "https://www.postgresql.org/",
      },
    ],
  },
  {
    title: "Teste",
    stacks: [
      {
        title: "Vitest",
        icon: VitestIcon,
        subtitle: "Framework de testes.",
        description:
          "Framework de testes rápido e moderno para projetos com Vite. Oferece uma experiência de testes semelhante ao Jest, com performance otimizada e integração nativa com TypeScript.",
        stackLink: "https://vitest.dev/",
      },
      {
        title: "Jest",
        icon: JestIcon,
        subtitle: "Framework de testes JavaScript.",
        description:
          "Jest é um framework de testes JavaScript com foco em simplicidade e velocidade. Ele oferece uma experiência de teste moderna e eficiente, com suporte para muitas funcionalidades úteis, como snapshots, cobertura de código e asserções.",
        stackLink: "https://jestjs.io/",
      },
      {
        title: "React Testing Library",
        icon: ReactTestingLibraryIcon,
        subtitle: "Biblioteca de testes para React.",
        description:
          "React Testing Library é uma biblioteca de teste para React que facilita a criação de testes isolados e reativos. Ela oferece uma API para simular interações do usuário e verificar a saída do componente.",
        stackLink:
          "https://testing-library.com/docs/react-testing-library/intro/",
      },
    ],
  },
  {
    title: "Gerenciadores de pacotes",
    stacks: [
      {
        title: "npm",
        icon: NpmIcon,
        subtitle: "Gerenciador padrão do Node.js.",
        description:
          "Gerenciador de pacotes para Node.js que facilita a instalação e a gerenciamento de dependências de projetos JavaScript. É amplamente utilizado para compartilhar e reutilizar código entre projetos.",
        stackLink: "https://www.npmjs.com/",
      },
      {
        title: "Yarn",
        icon: YarnIcon,
        subtitle: "Gerenciador rápido e confiável.",
        description:
          "Yarn é um gerenciador de pacotes rápido, seguro e confiável criado para trabalhar com projetos JavaScript e TypeScript. Ele permite instalar, atualizar, configurar e gerenciar dependências de forma eficiente, garantindo reprodutibilidade e desempenho com um sistema de cache avançado e lockfiles consistentes. O Yarn também oferece suporte a workspaces, facilitando a gestão de monorepos com múltiplos pacotes em um único repositório.",
        stackLink: "https://yarnpkg.com/",
      },
      {
        title: "pnpm",
        icon: PnpmIcon,
        subtitle: "Gerenciador baseado em links.",
        description:
          "pnpm é um gerenciador de pacotes ultrarrápido e eficiente para projetos JavaScript e TypeScript. Ele utiliza links simbólicos e armazenamento em cache global para economizar espaço em disco e acelerar a instalação de dependências. Além disso, oferece suporte nativo a workspaces, tornando-o ideal para monorepos, e garante consistência e isolamento entre os projetos.",
        stackLink: "https://pnpm.io/",
      },
    ],
  },
  {
    title: "Linters e formatadores",
    stacks: [
      {
        title: "Biome",
        icon: BiomeIcon,
        subtitle: "Linter e formatador moderno.",
        description:
          "Ferramenta all-in-one que une linting, formatação e compilação para JavaScript e TypeScript. Rápido, moderno e focado em produtividade.",
        stackLink: "https://biomejs.dev/",
      },
      {
        title: "ESLint",
        icon: EslintIcon,
        subtitle: "Linter extensível para JavaScript.",
        description:
          "Ferramenta de análise estática para identificar problemas e inconsistências em código JavaScript/TypeScript. Altamente configurável e com vasto ecossistema de plugins.",
        stackLink: "https://eslint.org/",
      },
      {
        title: "Prettier",
        icon: PrettierIcon,
        subtitle: "Formatador de código opinativo.",
        description:
          "Ferramenta de formatação automática que padroniza estilos de código em projetos JavaScript, TypeScript, HTML, CSS e outros, promovendo legibilidade e consistência.",
        stackLink: "https://prettier.io/",
      },
    ],
  },
  {
    title: "Ferramentas",
    stacks: [
      {
        title: "Cursor",
        icon: CursorIcon,
        subtitle: "Editor de código com IA integrada.",
        description:
          "Editor moderno com suporte a múltiplas linguagens e recursos de colaboração com inteligência artificial integrada, otimizando a produtividade do desenvolvedor.",
        stackLink: "https://www.cursor.com/",
      },
      {
        title: "Visual Studio Code",
        icon: VsCodeIcon,
        subtitle: "Editor de código extensível.",
        description:
          "Editor de código com suporte para várias linguagens de programação e ferramentas de desenvolvimento. É amplamente utilizado para escrever, editar e depurar código.",
        stackLink: "https://code.visualstudio.com/",
      },
      {
        title: "Docker",
        icon: DockerIcon,
        subtitle: "Plataforma de containers.",
        description:
          "Ferramenta para criação, empacotamento e execução de aplicações em containers isolados. Facilita a portabilidade, consistência e escalabilidade de ambientes de desenvolvimento e produção.",
        stackLink: "https://www.docker.com/",
      },
      {
        title: "Insomnia",
        icon: InsomniaIcon,
        subtitle: "Ferramenta para teste de APIs.",
        description:
          "Ferramenta intuitiva para testar, documentar e depurar APIs REST e GraphQL. Permite criar ambientes, autenticação, exportações e organização de coleções.",
        stackLink: "https://insomnia.rest/",
      },
      {
        title: "Android Studio",
        icon: AndroidStudioIcon,
        subtitle: "Ferramenta de desenvolvimento Android.",
        description:
          "Ambiente de desenvolvimento completo para criação de aplicativos Android, com ferramentas para design, depuração, testes e publicação na Play Store.",
        stackLink: "https://developer.android.com/studio",
      },
      {
        title: "Figma",
        icon: FigmaIcon,
        subtitle: "Ferramenta colaborativa de design.",
        description:
          "Plataforma baseada na web para criação de interfaces e protótipos. Permite colaboração em tempo real entre designers e desenvolvedores.",
        stackLink: "https://www.figma.com/",
      },
      {
        title: "Notion",
        icon: NotionIcon,
        subtitle: "Plataforma de produtividade.",
        description:
          "Ferramenta versátil para gerenciamento de projetos, notas, bancos de dados e colaboração em equipe. Utilizada amplamente por times de produto e tecnologia.",
        stackLink: "https://www.notion.so/",
      },
      {
        title: "Postman",
        icon: PostmanIcon,
        subtitle: "Ferramenta para teste de APIs.",
        description:
          "Postman é uma plataforma completa para desenvolvimento, teste e documentação de APIs. Ele permite enviar requisições HTTP, validar respostas, automatizar testes e colaborar em equipe durante o desenvolvimento de APIs REST, GraphQL e outras.",
        stackLink: "https://www.postman.com/",
      },
    ],
  },
];
