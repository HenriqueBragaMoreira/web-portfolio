# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Público misto, todos tratados como primários:
- **Recrutadores e tech leads (Brasil e exterior):** avaliam em poucos minutos se o Henrique encaixa numa vaga (CLT/PJ). Querem stack, tempo de experiência, empresas, projetos reais e um jeito rápido de entrar em contato ou baixar o CV.
- **Clientes freelance:** pessoas ou empresas avaliando se ele consegue entregar um produto de ponta a ponta. Querem ver projetos funcionando e falar com ele.

Visitantes chegam em pt-BR, en-US ou es-ES, por isso o site é trilíngue.

## Product Purpose

Portfólio pessoal de Henrique Braga, Desenvolvedor de Software Full Stack em São Paulo. O site existe para converter uma visita em contato (e-mail, formulário, LinkedIn) ou download do CV. Sucesso = o visitante entende quem ele é, o que já construiu e como falar com ele, sem atrito.

## Positioning

Full Stack, sem destacar um lado. A prova é o trabalho real: produtos completos construídos sozinho (We Finance: Next.js + NestJS + Prisma + PostgreSQL, em produção) e experiência de mercado em front-end, design system e plataformas SaaS.

## Operating Context

- Status profissional: empregado, **aberto a propostas**.
- Contato: e-mail (copiar com um clique), formulário de contato via Resend, LinkedIn, GitHub, Instagram e telefone.
- O CV é baixado a partir da intro.

## Capabilities and Constraints

- Next.js (App Router) + React + Tailwind CSS v4, deploy na Vercel.
- Idiomas: pt-BR (padrão, sem prefixo na URL), en-US (`/en`) e es-ES (`/es`).
- Seções da home: intro, sobre, projetos, experiência, educação, stacks e contato. O blog fica escondido até existirem posts reais.
- Rotas: `/works` (lista de projetos), `/work/[slug]` (detalhe de um projeto) e `/stacks`.

## Brand Commitments

- Nome: Henrique Braga. Cargo exibido: "Software Engineer" / Desenvolvedor Full Stack.
- Tema escuro existente com tons neutros. A identidade visual atual é a referência (ver o código).

## Evidence on Hand

- Experiências: Grupo Permaneo (Full Stack, jun/2025 até hoje), Blue Saúde (Front-End, jul/2024 a jun/2025), Anjun Express (Software Developer, out/2023 a jul/2024). As métricas nos bullets de experiência foram fornecidas pelo próprio Henrique.
- Projetos:
  - **We Finance:** finanças compartilhadas para famílias e casais. LP em produção em https://www.we-finance.app; o repositório é privado.
  - **Gesture Pro:** dashboard de gestão de vendas com Next.js + FastAPI + PostgreSQL. Repositório público em https://github.com/HenriqueBragaMoreira/gesture-pro; não tem deploy.
- Educação: Ciência da Computação na Universidade Cidade de São Paulo (2023–2026) e ETEC Parque Belém (2020–2022).
- **Não existem e não devem ser inventados:** depoimentos, posts de blog, número de usuários ou clientes. Os números da LP do We Finance ("500+ usuários" etc.) não têm fonte e não podem ser usados.

## Product Principles

1. Prova antes de adjetivo: mostrar projetos e resultados reais, nunca afirmações vagas.
2. Contato a um clique de qualquer ponto da página.
3. Leitura rápida: o recrutador precisa entender o essencial em menos de um minuto.
4. Igualmente bom nos três idiomas: nenhum texto fica sem tradução.

## Accessibility & Inclusion

WCAG 2.2 AA como piso: navegação completa por teclado (inclusive navbar e seletor de idioma), contraste adequado no tema escuro e respeito a `prefers-reduced-motion`.
