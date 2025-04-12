import { NestIcon } from "@/components/icons/stacks/nest";
import { NextjsIcon } from "@/components/icons/stacks/nextjs";
import { NodeIcon } from "@/components/icons/stacks/node";
import { ReactIcon } from "@/components/icons/stacks/react";
import { TailwindIcon } from "@/components/icons/stacks/tailwindcss";
import { VitestIcon } from "@/components/icons/stacks/vitest";

export interface Stack {
  title: string;
  subtitle: string;
  description: string;
  stackLink: string;
  icon: React.ElementType;
  className?: string;
}

export const stacks: Stack[] = [
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
