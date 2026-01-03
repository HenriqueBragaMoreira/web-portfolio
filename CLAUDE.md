# CLAUDE.md

Personal portfolio (Next.js 16 + next-intl + Tailwind v4). Product context lives in `PRODUCT.md`; design work goes through the `impeccable` skill.

## Commands

- `pnpm check` (Biome) and `pnpm typecheck` must pass; `pnpm build` must produce only static pages for `/[locale]/*` (route handlers like `/og` are the exception).

## Conventions

- **Every user-facing string goes in `src/i18n/messages/{pt-BR,en-US,es-ES}.json`**, never hardcoded. Keep the three files' keys identical; `pt-BR.json` types the messages (`src/@types/next-intl.d.ts`).
- Structured content (projects, experiences, education, stacks) lives in `src/data/` with ids; its text lives in messages under the same id. Use `useMessages()` when you need a group of keys (bullets, features).
- Use `Link`/`usePathname` from `@/i18n/navigation`, not `next/link`, for internal links.
- The locale comes from `next/root-params` in `src/i18n/request.ts`. That API does not work in route handlers or server actions: pass the locale explicitly there (see `src/app/[locale]/og/route.tsx`).
- Do not use `setRequestLocale` (deprecated); static rendering comes from `generateStaticParams` in `[locale]/layout.tsx`.
- Biome runs with every rule group on `preset: "all"`; Solid, Qwik and Vue domains are off. Prefer fixing over suppressing; suppressions need a reason.
- Never invent metrics, testimonials or user counts (see "Evidence on Hand" in `PRODUCT.md`).
- Project and route URLs: list in plural (`/works`), item in singular (`/work/[slug]`).
