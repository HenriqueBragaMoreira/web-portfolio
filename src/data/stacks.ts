import { NestIcon } from "@/components/icons/stacks/back/nest";
import { NodeIcon } from "@/components/icons/stacks/back/node";
import { PostgresIcon } from "@/components/icons/stacks/databases/postgreSQL";
import { NextjsIcon } from "@/components/icons/stacks/front/nextjs";
import { ReactIcon } from "@/components/icons/stacks/front/react";
import { TailwindIcon } from "@/components/icons/stacks/front/tailwindcss";
import { EslintIcon } from "@/components/icons/stacks/linters/eslint";
import { ExpoIcon } from "@/components/icons/stacks/mobile/expo";
import { NpmIcon } from "@/components/icons/stacks/package-manager/npm";
import { VitestIcon } from "@/components/icons/stacks/testing/vitest";
import { VsCodeIcon } from "@/components/icons/stacks/tools/vscode";

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
  className?: string;
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
        title: "Tailwind CSS",
        icon: TailwindIcon,
        subtitle: "Framework CSS repleto de recursos.",
        description:
          "Framework utilitário de CSS que permite criar interfaces modernas e responsivas com rapidez. Seu design centrado em classes facilita a construção de componentes estilizados de forma consistente.",
        stackLink: "https://tailwindcss.com/",
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
          "Expo é um framework para criar aplicativos móveis usando React Native. Ele permite a criação de aplicativos nativos para iOS e Android usando o mesmo código base.",
        stackLink: "https://expo.dev/",
      },
    ],
  },
  {
    title: "Banco de dados",
    stacks: [
      {
        title: "PostgreSQL",
        icon: PostgresIcon,
        subtitle: "Sistema de gerenciamento de banco de dados relacional.",
        description:
          "Sistema de gerenciamento de banco de dados relacional que utiliza a linguagem SQL como interface de consulta. É amplamente utilizado para armazenar e recuperar dados de forma eficiente e confiável.",
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
    ],
  },
  {
    title: "Gerenciadores de pacotes",
    stacks: [
      {
        title: "npm",
        icon: NpmIcon,
        subtitle: "Gerenciador de pacotes para Node.js.",
        description:
          "Gerenciador de pacotes para Node.js que facilita a instalação e a gerenciamento de dependências de projetos JavaScript. É amplamente utilizado para compartilhar e reutilizar código entre projetos.",
        stackLink: "https://www.npmjs.com/",
      },
    ],
  },
  {
    title: "Linters e formatadores",
    stacks: [
      {
        title: "ESLint",
        icon: EslintIcon,
        subtitle: "Ferramenta de linting para JavaScript.",
        description:
          "Ferramenta de linting para JavaScript que ajuda a identificar erros e inconsistências no código. É amplamente utilizada para manter a qualidade do código e evitar erros comuns.",
        stackLink: "https://eslint.org/",
      },
    ],
  },
  {
    title: "Ferramentas",
    stacks: [
      {
        title: "Visual Studio Code",
        icon: VsCodeIcon,
        subtitle: "Editor de código.",
        description:
          "Editor de código com suporte para várias linguagens de programação e ferramentas de desenvolvimento. É amplamente utilizado para escrever, editar e depurar código.",
        stackLink: "https://code.visualstudio.com/",
      },
    ],
  },
];
