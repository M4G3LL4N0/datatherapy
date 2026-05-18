# Project Recovery Notes

## Startup Identity

- Startup name: DataTherapy
- Project folder: /Users/joshuadavis/startups/datatherapy
- Domain: not confirmed yet
- One-line description: DataTherapy turns scary information into structured understanding.
- Category: consumer clarity, news education, fear intelligence, AI-assisted interpretation
- Stage: MVP recovery / demo-ready preparation

## Product Vision

- **Target user:** People overwhelmed by scary headlines, rumors, health anxiety spirals, financial dread, social over-reading, AI/job fear, misinformation fatigue, or general future uncertainty�who want structure without sensationalism.
- **Core problem:** Fear is not only about events; it is about what events might mean for safety, money, health, relationships, and control. Uncertainty expands faster than verified facts.
- **Core solution:** A repeatable **DataTherapy Brief** with seriousness, personal relevance, urgency, certainty, interpretations, myth vs reality, grounding, and action steps�clarity infrastructure, not therapy.
- **Differentiation:** Fear-category intelligence, explainable heuristic scoring, deterministic local engine (no API key for MVP), calm premium UX�no generic enterprise threat theater as primary story.
- **MVP goal:** Stable `pnpm` build, coherent types, all primary routes compiling, manual Vercel deploy readiness.
- **Long-term vision:** Deeper personalization, optional live inputs, exports/share, tests around the brief engine, and carefully bounded crisis-resource pages�without drifting into medical or emergency claims.

## Website/App Structure

- **Main routes:** `/`, `/product`, `/fear-library`, `/fear-categories`, `/fear-categories/[categoryId]`, `/use-cases`, `/pricing`, `/technology`, `/investors`, `/about`, `/contact`, `/sample-brief`, `/app`, `/app/examples`, `/app/how-it-works`, `/brief`, `/response-framework/*`, `/privacy`, `/terms`, plus supporting interpretation/media/trend/cognitive pages.
- **Key components:** `MarketingShell`, `StructuredBrief`, `Header`, `Footer`.
- **Data/content files:** `src/data/fearCategories.ts`, `src/data/sampleBriefTopics.ts`.
- **API routes:** `POST /api/checkout` (placeholder JSON only).
- **Auth/database needs:** None for current MVP; `next-auth` and Supabase removed from dependencies.

## Design Direction

- **Visual style:** Premium dark (`#0a0a0a`), white type, glass-style cards, rounded borders, restrained accents.
- **Tone:** Calm, specific, product-led; no clinical therapy positioning; no sensational news voice.
- **Layout principles:** Simple grids, generous spacing, minimal chrome.
- **Brand notes:** Position as education and structured interpretation; disclaimers visible where appropriate.

## What Was Preserved

- Existing Tailwind v4 setup, App Router under `src/app`, core marketing and app pages, sample brief topic seeds, `generateDataTherapyBrief` engine, Header/Footer navigation patterns (links corrected to real routes).
- Visual system: dark backgrounds, border-white/10�15 cards, rounded-3xl sections.

## What Was Fixed

- **Build:** Removed duplicate App Router root: deleted top-level `app/` so `src/app` is the single source of truth; moved `api/checkout` into `src/app/api/checkout`.
- **TypeScript:** Central types in `src/types/structured-brief.ts` and expanded `FearCategoryDetail`; removed conflicting module augmentation file; aligned `sampleBriefTopics` with `SampleBriefTopic`.
- **StructuredBrief:** Renders engine-shaped briefs and legacy `sections`/`items` (including flexible `BriefSection` with `content` or `items`, severity objects, optional metadata).
- **Fear categories:** Replaced stub `fear-categories/types.ts` with full eight-pillar dataset in `src/data/fearCategories.ts` and `fearCategoryMap` for `[categoryId]` pages; dynamic route uses `Promise` params for Next.js 16.
- **Dependencies:** Removed `next-auth` and `@supabase/supabase-js`; removed unused `lib/supabase.ts`.
- **Lint:** Rewrote `/use-cases` to product-native copy; fixed `react/no-unescaped-entities` on `/brief`; PostCSS default export warning resolved.
- **Navigation:** Header/Footer updated to avoid broken generic SaaS links; added `/response-framework` hub, `/privacy`, `/terms`.

## What Was Removed

- Root `app/` directory (conflicted with `src/app`).
- `src/app/fear-categories/types.ts` (duplicate/stub categories).
- `src/types/structured-brief-augmentation.ts`.
- `lib/supabase.ts`.
- Dependencies: `next-auth`, `@supabase/supabase-js`.

## Current Build Status

- `pnpm install`: OK (pnpm 10.x).
- `pnpm lint`: OK (0 errors).
- `pnpm typecheck`: use `tsc --noEmit` (script: `pnpm typecheck`).
- `pnpm build`: OK (29 routes as of last run).
- **Vercel readiness:** Suitable for manual `vercel --prod` after local `pnpm build`; no automated deploy performed.

## Manual Deploy Command

```bash
cd /Users/joshuadavis/startups/datatherapy
pnpm install
pnpm build
vercel --prod
```

## Return-Later Commands

```bash
cd /Users/joshuadavis/startups/datatherapy
pnpm install
pnpm build
```

## Next Best Tasks

1. Expand `sampleBriefTopics` from 10 toward 50 with slugs and optional detail routes.
2. Add automated tests for `generateDataTherapyBrief` determinism and score bounds.
3. Replace `/brief` static form with client wiring to the engine or deep-link to `/app`.
4. Add counsel-reviewed `/privacy` and `/terms` before public launch.
5. Optional: dedicated crisis/resources page linking to emergency and mental health hotlines (jurisdiction-specific copy).

## Autobuilder Guardrails

- **Do not:** Push to GitHub or deploy to Vercel from automation; expose internal Autobuilder filenames/details in public marketing; reintroduce auth/DB without explicit product decision; delete `src/` source or product memory files; use `npm` for installs.
- **Preserve:** Dark glass UI, eight fear pillars, brief schema, local deterministic engine, disclaimers (not therapy / not emergency / not professional advice).
- **Improve next:** Sample library depth, SEO for category pages, export/share for briefs, test coverage.
- **Avoid drift toward:** Generic B2B threat SaaS fiction, fake case studies, clinical claims, or sensational news packaging.
