# Autobuilder guardrails — DataTherapy

## Product truth

- DataTherapy helps people turn fear-triggering information into **structured understanding** (scores, interpretation, grounding, next steps).
- Core artifact: **DataTherapy Brief** with seriousness, personal relevance, urgency, certainty, signal summary, likely/possible/unlikely reads, myth vs reality, meaning, actions, grounding, confidence note.
- Eight fear pillars drive category content (world chaos, health/outbreaks, money, crime/safety, AI/work, misinformation, social overthinking, general dread).

## Public positioning

- **Not** therapy, **not** medical advice, **not** emergency support, **not** sensational news product.
- **Is** education, context, and clarity—**signal over spiral**, fear-to-context, calm interpretation.

## Do not expose

- Internal Autobuilder run details, agent transcripts, or recovery playbooks in customer-facing copy.
- Unredacted env secrets, internal roadmap debates, or security review notes.

## Do not delete

- `src/` application source, `public/` assets in use, `pnpm-lock.yaml`, recovery/foundation docs, `.autobuilder/` memory, `.git` history without explicit approval.

## Do not drift toward

- Generic B2B “threat intelligence” fiction, fake Fortune logos, or fabricated case studies.
- Clinical or diagnostic language; crisis handling without pointing to real emergency resources.
- Auth/database complexity before the product explicitly requires it.

## Safe improvements

- Copy tightening to DataTherapy voice, accessibility, performance, SEO metadata, more sample briefs, tests for `generateDataTherapyBrief`, export/share UX.

## Risky improvements

- Live news pipelines, paid third-party APIs, storing user psychological data, automated production deploys without human review.

## Build rules

- **pnpm only** (`pnpm install`, `pnpm build`, `pnpm lint`, `pnpm typecheck`).
- Keep a **single** App Router root: `src/app` (do not reintroduce a top-level `app/` that shadows it).
- Do not set `ignoreBuildErrors` for production-quality releases.
