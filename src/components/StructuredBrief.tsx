import { cn } from '@/app/lib/utils'

interface BriefSection {
  title: string
  content: string
  severity?: number
}

export function StructuredBrief({ sections }: { sections: BriefSection[] }) {
  return (
    <div className="mt-6 space-y-6">
      {sections.map((section, index) => (
        <div key={index} className="rounded-lg border border-white/15 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{section.title}</h3>
            {section.severity && (
              <div className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
                section.severity >= 7 ? "bg-red-500/10 text-red-400 hover:bg-red-500/15" :
                section.severity >= 4 ? "bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/15" :
                "bg-green-500/10 text-green-400 hover:bg-green-500/15"
              )}>
                Severity: {section.severity}/10
              </div>
            )}
          </div>
          <p className="mt-2 text-sm text-white/80">{section.content}</p>
        </div>
      ))}
    </div>
  )
}
