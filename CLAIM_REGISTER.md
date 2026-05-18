# Claim Register: Datatherapy

## Public Claim Rules
- Demo claims must be labeled DEMO.
- Do not present therapeutic outcomes as verified clinical results.
- Stale live URL claims need re-verification.

## Claims

| Claim | Reality Label | Evidence | Risk | Safe Public Version | Proof Needed |
|-------|---------------|----------|------|---------------------|--------------|
| Structured brief from session input on /app | DEMO | `BriefExportBar`, `/app` page | medium | "Try the demo workspace; outputs are illustrative." | user walkthrough |
| Copy brief to clipboard | DEMO | `BriefExportBar` component | low | "Export demo brief (markdown)." | local test |
| Local `pnpm build` passes | VERIFIED | portfolio matrix | low | Build verified locally. | none |
| Live at datatherapy.noaerth.com | STALE | HTTP 200 prior spot-check; re-verify | medium | "Site may be live; confirm before sharing." | curl |
| Licensed therapy or HIPAA | UNKNOWN | not in repo | critical | Do not claim clinical or compliance status. | legal |

## Launch readiness
- See `LAUNCH_READINESS.md` — LOCAL REVIEW READY
- PUBLIC READY: **no**
