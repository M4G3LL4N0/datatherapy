"use client";
export function SolutionPipelineGraphic() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
        <p className="text-xs uppercase text-teal-300">Unified pipeline</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row"><div key="Headline" className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"><span className="text-teal-300 font-semibold">1</span> <span className="text-sm text-white">Headline</span></div><div key="Category" className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"><span className="text-teal-300 font-semibold">2</span> <span className="text-sm text-white">Category</span></div><div key="Scores" className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"><span className="text-teal-300 font-semibold">3</span> <span className="text-sm text-white">Scores</span></div><div key="Brief" className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"><span className="text-teal-300 font-semibold">4</span> <span className="text-sm text-white">Brief</span></div></div>
      </div>
    </section>
  );
}