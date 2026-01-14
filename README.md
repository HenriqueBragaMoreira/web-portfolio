# Henrique Braga · Portfolio

Personal portfolio of Henrique Braga, Full Stack Developer. Trilingual (pt-BR, en-US, es-ES), statically rendered and deployed on Vercel.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, `proxy.ts`, `next/root-params`) + React 19 + TypeScript 7
- [Tailwind CSS v4](https://tailwindcss.com)
- [next-intl](https://next-intl.dev) for i18n
- [Resend](https://resend.com) + React Email for the contact form
- [Biome](https://biomejs.dev) for lint and format

## Getting started

```bash
pnpm install
cp .env.example .env.local   # fill in RESEND_API_KEY
pnpm dev
```

| Script | What it does |
| --- | --- |
| `pnpm dev` | Dev server on http://localhost:3000 |
| `pnpm build` / `pnpm start` | Production build and server |
| `pnpm check` / `pnpm format` | Biome lint + format (check / fix) |
| `pnpm typecheck` | TypeScript check |

## Environment variables

| Name | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | yes (contact form) | Server-only Resend key |
| `NEXT_PUBLIC_SITE_URL` | no | Canonical site URL. Falls back to `VERCEL_PROJECT_PRODUCTION_URL` on Vercel |

## Structure

```
src/app/[locale]/    Root layout and every page, one static build per locale
src/data/            Structured content: projects, experiences, education, stacks, site info
src/i18n/            Routing (pt-BR without prefix, /en, /es), navigation helpers, request config
src/i18n/messages/   UI copy per locale (pt-BR is the source of truth for keys)
src/actions/         Server actions (contact form)
public/projects/     Project screenshots (1440×900)
```

### Adding a project

1. Add screenshots to `public/projects/<slug>.png` (1440×900).
2. Add the entry to `src/data/projects.ts` (extend the `slug` union).
3. Add `Project.items.<slug>` to the three files in `src/i18n/messages/`.
