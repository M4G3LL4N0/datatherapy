# Startup Journey: DataTherapy

## 1. Current Snapshot

- **Project name:** DataTherapy
- **Local folder:** `/Users/joshuadavis/startups/datatherapy`
- **Live URL:** https://datatherapy.noaerth.com (portfolio subdomain pattern)
- **Live site status:** HTTP **200**
- **Product:** Informational tools for understanding fear/framing in headlines and feeds — **education and sensemaking**, explicitly **not** clinical therapy or diagnosis
- **Framework:** Next.js App Router (`src/app`), TypeScript, Tailwind 4
- **Build command:** `pnpm build`
- **Local review command:** `pnpm dev` → http://localhost:3000
- **Current build status:** **PASS** (2026-05-14)
- **GitHub remote:** https://github.com/M4G3LL4N0/datatherapy.git
- **GitHub push status:** Not run this loop
- **Deployment:** **Not run** this loop
- **Last updated:** 2026-05-14

## 2. Portfolio Score

| Dimension | Score (0–10) | Notes |
|-----------|----------------|-------|
| Product clarity | 8 | Non-clinical disclaimer pathway is responsible |
| MVP reality | 8 | `/app` brief generator + extensive library routes |
| Visual quality | 7 | Marketing shell + structured brief UI |
| Build health | 8 | **PASS** — broad route surface builds clean |
| Customer urgency | 8 | Doom-scroll anxiety remains culturally loud |
| Market potential | 8 | Media literacy / framing tools adjacent |
| Monetization potential | 6 | Checkout route exists — packaging clarity next |
| Growth potential | 8 | Shareable briefs and frameworks pages |
| Investor story | 8 | “Sensemaking, not panic” is timely |
| Local review readiness | 8 | `/app` tool + library indexes |

- **Total score:** **76 / 100**
- **Classification:** **Promising venture** — strong breadth; tighten trust framing and one flagship workflow
- **Best next loop type:** **Trust loop** (disclaimer prominence audit) + **Focus loop** (single hero journey from home → `/app`)

## 3. 10-Second Startup Explanation

- **What this startup is:** Structured briefs and guides that help people interpret fear-framed news without spiraling — **informational only**.
- **Who it is for:** Curious readers and professionals who want frameworks, not doom spirals.
- **What pain it solves:** Headlines weaponize uncertainty; people lack a repeatable way to slow down and classify what they are seeing.
- **What the user can do:** Explore libraries and generate a brief via `/app`.
- **Why it matters:** Calmer consumption decisions reduce downstream mistakes and burnout.
- **Primary CTA:** Open brief generator (`/app`)

## 4. Founder Thesis

- **Core belief:** Media literacy should ship as lightweight artifacts — worksheets, briefs, tags — not academic papers.
- **Why this should exist:** Algorithms amplify fear frames; tooling should counter without pretending to be therapy.
- **Why now:** AI-generated headlines + election/news cycles keep volatility high.
- **Market wedge:** “Brief in five minutes” generator for a scary topic.
- **Expansion path:** Classroom packs, team workshops, B2B media training add-ons.
- **What this can become:** Standard sensemaking kit for engaged citizens and analysts.
- **1000x opportunity:** Aggregated, consented opt-in data on which frames spike by week (research-only).
- **Biggest strategic risk:** Misread as mental health product — must keep non-clinical positioning crisp.
- **Next founder decision:** One flagship landing strip: home → `/app` with explicit disclaimer block.

## 5. Live Website Diagnosis

Based on live site (HTTP **200**):

- **Status code or load status:** **200**
- **What visitors currently see:** Rich informational IA — fear library, guides, product pages, `/app` tool entry.
- **Current headline:** Verify live hero on `/` against repo.
- **Current CTA:** Enter `/app`; explore libraries.
- **What works:** HTTP **200**; many educational routes; mobile `Header` with flat links + disclaimer this loop; build **PASS**.
- **What feels weak:** Cognitive load for first visit — many paths; pick a default journey.
- **What feels generic:** “Media literacy” can sound NGO-vague unless examples are vivid.
- **What feels confusing:** Relationship between `/brief`, `/sample-brief`, `/app` — align naming in UI.
- **What feels unfinished:** Packaging for classroom / team use cases on pricing.
- **What feels premium:** Structured brief typography when rendered cleanly.
- **What is missing:** One animated “before/after framing” example above the fold on home.
- **Highest leverage live-site fix:** Hero strip: “Not therapy” + “what you get in `/app` in 60 seconds.”

## 6. Local Codebase Diagnosis

- **Framework:** Next.js App Router under `src/app`, TypeScript, Tailwind 4
- **App structure:** Marketing + deep content tree + `/app` brief generator + `/api/checkout`
- **Current routes (representative):** `/`, `/app`, `/app/examples`, `/app/how-it-works`, `/brief`, `/sample-brief`, `/fear-library`, `/fear-categories`, `/fear-categories/[categoryId]`, `/product`, `/use-cases`, `/interpretation-guide`, `/response-framework`, `/response-framework/immediate`, `/response-framework/short-term`, `/response-framework/long-term`, `/media-analysis`, `/trend-analysis`, `/impact-assessment`, `/cognitive-load`, `/pricing`, `/about`, `/contact`, `/privacy`, `/terms`, `/investors`, `/technology`
- **Current pages:** Broad marketing and tool pages per tree above
- **Current components:** `Header` (flat link list + disclaimer on mobile this loop), `Footer`, `MarketingShell`, `StructuredBrief`, related content modules
- **Current data files:** `fearCategories`, `sampleBriefTopics`, sample briefs under `src/data` / `src/app/sample-briefs`
- **Current styling system:** Tailwind utility system
- **Technical risks:** Maintaining breadth — keep shared layout patterns DRY
- **Build risks:** **PASS** today
- **Env var risks:** Checkout path if Stripe or similar wired — verify secrets
- **API risks:** Checkout route abuse / misconfiguration if live
- **Mobile risks:** Mitigated via simplified `Header` list + disclaimer visibility
- **GitHub risks:** Remote exists; push not run this loop
- **Local review risks:** Spot-check `/app` flow + random library page on phone

## 7. Company Role Analysis

### CEO / Founder

- **Thesis:** Own “framing literacy” artifacts, not another news aggregator.
- **Wedge:** Brief generator with honest non-clinical boundaries.
- **Biggest opportunity:** Institutional workshops (libraries, HR lunch-and-learns).
- **Biggest risk:** Regulatory/brand confusion with clinical services.
- **Next decision:** Single primary CTA path on home — `/app` or library, not both equally.

### Chief Product Officer

- **MVP:** `/app` generator + informational library IA.
- **Primary workflow:** Pick topic inputs → generated brief → optional share.
- **Dashboard:** Backlog for saved briefs accounts.
- **Onboarding:** `/app/how-it-works` linked from hero.
- **Retention loop:** Weekly “frame watch” email (opt-in).

### Customer Researcher

- **Buyer:** Educators, managers, thoughtful consumers.
- **User:** Person overwhelmed by alarming coverage.
- **Pain:** Uncertainty spikes; lack of repeatable questions to ask headlines.
- **Alternatives:** Therapy (different service), doomscrolling, substacks.
- **Objections:** “Is this medical advice?” — must be preempted.
- **Trust builders:** Plain disclaimers; cite methods pages.

### JTBD Strategist

- **Job-to-be-done:** “Help me decompress a scary story into inspectable parts.”
- **Trigger:** Push notification avalanche; colleague shares inflammatory link.
- **Desired outcome:** Named patterns, proportion, next prudent step.
- **Old way:** Argue in group chats.
- **New way:** Run brief; share framework language.

### UX Designer

- **UX issue:** Mobile navigation complexity — **partially addressed** via flat `Header` link list + disclaimer.
- **Homepage flow:** Clarify single hero journey (pending polish).
- **App flow:** `/app` form → structured brief view.
- **Mobile flow:** Header list scroll; avoid hiding disclaimer behind icon-only affordances.
- **Friction removed:** Dense nested menus on small screens (improved).

### Visual Design Director

- **Visual identity:** Calm, institutional-trust without clinical coldness.
- **Type:** Readable long-form for guides.
- **Color:** Cool neutrals; careful use of alert reds only for true warnings.
- **Motion:** Minimal — calm product promise.
- **Component style:** `StructuredBrief` blocks consistent with marketing cards.

### Brand Strategist

- **Category:** Media framing literacy / sensemaking tools.
- **Enemy:** Outrage-optimized feeds pretending to be neutral.
- **Memorable phrase:** “Name the frame before you react.”
- **Voice:** Measured, transparent about limits — never diagnostic.

### Copy Chief

- **Headline:** Lead with empowerment + boundaries.
- **Subheadline:** What the brief contains; what it explicitly is not.
- **CTA:** “Build a brief” / “Browse fear library.”
- **Copy rules:** No “treat anxiety” claims; informational positioning only.

### Staff Engineer

- **Architecture:** Next App Router large site — enforce layout composition patterns.
- **Build:** **PASS**
- **Env strategy:** Document checkout-related env in `.env.example` if applicable.
- **Dependency plan:** Keep Next patch cadence; watch route count build times.

### Frontend Engineer

- **Pages:** Many static/marketing + `/app` interactive shell.
- **Components:** `Header` mobile improvements this loop.
- **Interactions:** Brief generation UI; library navigation.
- **Mobile fixes:** Flat link list; visible disclaimer.

### Full-Stack Architect

- **Data:** Mostly static content modules; room for user saves later.
- **Future database:** Accounts + saved briefs.
- **Future auth:** Org seats for workshops.
- **Future API:** Headless brief generation for partners.
- **Future billing:** Seat licenses for educators.

### AI Product Architect

- **AI use:** If model-backed generation exists — human-reviewed templates and guardrails.
- **Safe boundaries:** Never simulate therapist; no symptom interpretation.
- **Future plan:** Optional “rewrite headline in neutral frame” with citations requirement.

### Data Moat Strategist

- **Data loop:** Opt-in aggregate frame frequency (non-PII).
- **Feedback loop:** “Was this brief helpful?” micro-prompt.
- **Benchmark:** Topic clusters spiking fear language.

### Growth Marketer

- **Hook:** “Before you forward that headline — run this 5-minute brief.”
- **SEO:** media literacy worksheet, fear framing guide, headline analysis.
- **Distribution:** Teachers; Discord communities; civics orgs.
- **Share loop:** Printable brief PDF.

### Sales Operator

- **Buyer pain:** Teams burning out on crisis news cycles.
- **Proof:** Live **200** + sample brief artifacts.
- **Pricing:** `/pricing` alignment with actual SKUs.
- **Objections:** Clinical confusion — kill with explicit copy on calls.

### Pricing Strategist

- **Model:** Consumer low-ticket + workshop licenses.
- **Free tier:** Library access; limited generator runs.
- **Paid tier:** Bulk briefs, classroom pack, exports.
- **Upgrade trigger:** Manager wants shared team worksheet pack.

### Investor Analyst

- **Venture thesis:** Literacy tooling as prosumer + light B2B workshop surface.
- **Market:** Huge TAM; monetization requires disciplined positioning.
- **Expansion:** Institutional trainer channel.
- **Moat:** Curriculum depth + responsible trust copy.
- **Metrics:** `/app` completions, return briefs, pricing page CTR.

### Competitive Intelligence Analyst

- **Category pattern:** News apps vs reflective worksheets.
- **Differentiation:** Explicit non-clinical stance + structured brief output.

### Experiment Designer

- **Tests:** Home hero: library-first vs `/app`-first.
- **Success metric:** `/app` starts per session.
- **Feedback loop:** Qualitative “felt calmer Y/N” (non-medical wording).

### QA Engineer

- **Build:** **PASS**
- **Routes:** Spot-check high-traffic marketing + `/app` + nested framework pages.
- **Mobile:** `Header` list + disclaimer visibility.
- **Regression:** Brief generator empty states.

### Security / Trust Reviewer

- **Risks:** Users paste personal stories into forms — data handling policy.
- **Disclaimers:** Not therapy; not emergency service; crisis resources link.
- **Data handling:** Short retention default for pasted inputs if stored.

### Legal / Policy Framing Reviewer

- **Risk category:** High if implied medical benefit.
- **Safe framing:** Educational self-reflection tool.
- **Required disclaimers:** Not a substitute for licensed professionals; crisis hotlines.

### GitHub Release Operator

- **Remote:** https://github.com/M4G3LL4N0/datatherapy.git
- **Commit / push:** Not run this loop

### Local Review Director

- **Command:** `cd /Users/joshuadavis/startups/datatherapy && pnpm dev`
- **URL:** http://localhost:3000
- **Test flow:** `/` → `/app` → generate sample → open `/fear-library` on mobile width

### Speed / Token Efficiency Operator

- **Scope:** Mobile `Header` simplification + documentation pass.
- **Blockers:** IA sprawl — consider consolidations next loop.

### Taste Reviewer

- **Quality diagnosis:** Earnest, necessary category; avoid NGO beige sameness.
- **Premium fix:** One striking visual metaphor that is not alarmist.

### Contrarian Strategist

- **Angle:** B2B-only — sell “meeting agenda defuser” slides to HR for layoff/news weeks.
- **Wedge:** Single vertical — finance fear coverage only.

### Community / Ecosystem Builder

- **Community:** Educator circle testing worksheet PDFs.
- **Public artifact:** CC-licensed classroom one-pager.

### Automation Architect

- **Safe automation:** CI `pnpm build` on PR.
- **Future:** Nightly link checker across long tail routes.

## 8. Product Strategy

- **MVP definition:** `/app` brief generator + credible library + trust copy everywhere.
- **Primary workflow:** Learn → generate brief → optionally teach others.
- **Input:** User-selected topics / templates.
- **Output:** Structured brief sections with calm cadence.
- **First aha moment:** User names a frame they previously could not articulate.
- **Dashboard purpose:** Future saved briefs.
- **Retention loop:** Opt-in “frame of the week.”
- **Monetization path:** Workshop licenses; team packs.

## 9. Roadmap

### Loop 1: Make It Understandable

- Non-clinical disclaimers on home + `/app` — **strengthen continuously**.

### Loop 2: Make It Real

- Mobile `Header` flat list + disclaimer — **done** this loop.

### Loop 3: Make It Premium

- Printable / shareable brief design system.

### Loop 4: Make It Useful

- Merge redundant brief entry routes under one naming scheme in UI.

### Loop 5: Make It Monetizable

- `/pricing` reflects actual offering; checkout tested end-to-end.

### Loop 6: Make It Fundable

- Repeat `/app` usage cohort chart.

### Loop 7: Make It Compound

- Accounts + library of past briefs.

### Loop 8: Make It Defensible

- Curated corpora of example frames with permissions.

### Loop 9: Make It Distributable

- Partner packs for nonprofits / schools.

### Loop 10: Make It Operationally Scalable

- CMS or content pipeline for long tail pages; moderation for user shares.

## 10. Work Completed This Loop

### Loop Entry: 2026-05-14

- **Loop type:** Mobile navigation clarity + journey documentation
- **Loop goal:** Mobile `Header` with flat link list + visible disclaimer; **PASS** build; record journey
- **Changes made:** `Header` mobile pattern emphasizing flat links and disclaimer surfacing.
- **Files changed:** `src/components/Header.tsx`, related layout usage
- **Routes added:** none
- **Routes improved:** Mobile discoverability across major sections
- **Components added:** none
- **Components improved:** `Header`
- **MVP interactions added:** Simpler mobile navigation model
- **Demo data added:** none
- **Copy improved:** Disclaimer visibility in mobile chrome (as implemented)
- **Design improved:** Header information density tuned for small screens
- **Mobile improved:** Flat link list + disclaimer emphasis
- **Engineering fixed:** Build remains **PASS**
- **Build result:** **PASS**
- **GitHub commit:** Not run
- **GitHub push result:** Not run
- **Deployment:** **Not run**
- **Local review command:** `pnpm dev`
- **Local review URL:** http://localhost:3000
- **What improved:** Mobile trust + navigation clarity
- **What still needs work:** Home IA focus; pricing truth; push to GitHub

## 11. Next Loop Plan

- **Highest leverage next move:** Single primary home journey; consolidate brief entry naming.
- **Product:** Saved briefs MVP spec (local storage first).
- **Design:** Printable brief stylesheet.
- **Engineering:** Content index / search across libraries.
- **Growth:** One teacher pilot worksheet landing.
- **Sales:** Workshop SKU copy on `/pricing`.
- **Monetization:** Invoice-friendly team purchase path.
- **Investor story:** Responsible positioning + repeat generator usage.
- **Trust/safety:** Crisis resources block in global footer.
- **GitHub:** Commit header changes; push to origin.
- **Biggest risk:** Misclassification as mental health product.
- **Suggested next command:** `cd /Users/joshuadavis/startups/datatherapy && pnpm dev`

## 12. 1000x Backlog

### Product

- Accounts; saved briefs; classroom bulk codes

### Design

- Brief PDF theme; calmer illustration system

### Engineering

- Full-text search; cached static generation tuning

### Growth

- SEO hub pages per fear category

### Sales

- District pilot narrative

### Monetization

- Certified trainer directory (future)

### Investor Narrative

- “Sensemaking infrastructure for volatile news cycles”

### Data Moat

- Opt-in aggregate frame indices

### Automation

- Broken-link sentinel for long tail

### Partnerships

- Libraries; universities; HR vendors

### SEO / Content

- Canonical guides for each framework page

### User Retention

- Opt-in weekly brief email

### Demo Quality

- Live Loom: home → `/app` in under 90 seconds

### Mobile Experience

- Sticky “Build brief” button on long library pages

### Trust and Safety

- Human review for community-submitted examples (if opened)

### Real API Integrations

- Pocket / Reader “send to brief” (opt-in)

### Enterprise Features

- SCIM / SSO for org workshop seats

### Future AI Features

- Optional neutral headline rewrite with required source links

### Community

- Educator feedback circle

### Distribution

- LMS embed package

### Templates

- Slide deck for facilitators

### Analytics

- `/app` completion funnel

### Internal Tools

- Content freshness dashboard

### Public Artifacts

- “How to read a fear headline” CC poster
