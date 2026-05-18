"use client";

import { useState } from "react";
import type { StructuredBriefData } from "@/types/structured-brief";

export function BriefExportBar({ brief }: { brief: StructuredBriefData }) {
  const [copied, setCopied] = useState(false);

  function toText() {
    const s = (v: unknown) => (typeof v === "number" ? v : typeof v === "object" && v && "value" in v ? (v as { value: number }).value : "—");
    const scores = `Seriousness ${s(brief.seriousness)}/10 · Relevance ${s(brief.personalRelevance)}/10 · Urgency ${s(brief.urgency)}/10 · Certainty ${s(brief.certainty)}/10`;
    return [
      "# DataTherapy Brief (DEMO export)",
      "",
      brief.signalSummary || brief.topRiskInterpretation || "DataTherapy brief",
      "",
      scores,
      "",
      brief.summary || brief.whatThisMeans || "",
      "",
      "_Not therapy or emergency support. Sample/local engine only._",
    ].join("\n");
  }

  async function copy() {
    await navigator.clipboard.writeText(toText());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3">
      <span className="text-xs font-medium uppercase tracking-wide text-amber-200/90">
        DEMO · local brief engine
      </span>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white hover:bg-white/15"
      >
        {copied ? "Copied" : "Copy brief text"}
      </button>
    </div>
  );
}
