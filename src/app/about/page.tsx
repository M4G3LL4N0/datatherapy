import { SubpageVisual } from "@/components/SubpageVisual";
import { MarketingShell } from '@/components/MarketingShell'

export default function About() {
  return (
    <>
    <SubpageVisual variant="about" />
      <MarketingShell
      title="About DataTherapy"
      subtitle="Building Clarity Infrastructure"
      description="We engineer frameworks that transform ambiguity into structured understanding, helping individuals and organizations navigate complexity with confidence."
      tag="DataTherapy • About Us"
    >
      <div className="mt-12 rounded-xl border border-white/15 p-6 bg-gradient-to-b from-white/5 to-white/[0.01]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Our Origin</h3>
            <p className="mt-4 text-sm text-white/80">
              Founded in 2024 by a team of AI researchers and behavioral scientists frustrated by the growing cognitive load of modern information ecosystems. We saw a need for structured frameworks to process complexity without losing nuance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="mt-4 text-sm text-white/80">
              To create the operating system for reasoning - a suite of tools that help humans maintain clarity and agency in an increasingly complex world.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-12">
        <h3 className="text-xl font-semibold">Leadership Team</h3>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            {name: 'Dr. Sarah Chen', role: 'Founder & CEO', expertise: 'AI Research', bio: 'Former Head of AI at Stanford HAI'},
            {name: 'James Wilson', role: 'CTO', expertise: 'Systems Architecture', bio: 'Ex-Google Brain engineer'},
            {name: 'Maria Rodriguez', role: 'Head of Product', expertise: 'Cognitive Design', bio: 'Behavioral scientist turned product leader'},
            {name: 'David Park', role: 'Lead Data Scientist', expertise: 'ML Models', bio: 'NLP specialist from Anthropic'}
          ].map((member, i) => (
            <div key={i} className="rounded-lg border border-white/15 p-4 hover:bg-white/5 transition-colors">
              <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-3 flex items-center justify-center text-lg">
                {member.name.split(' ')[0][0] + member.name.split(' ')[1][0]}
              </div>
              <h4 className="font-medium text-center">{member.name}</h4>
              <p className="mt-1 text-sm text-white/80 text-center">{member.role}</p>
              <p className="mt-2 text-xs text-blue-400 text-center">{member.expertise}</p>
              <p className="mt-2 text-xs text-white/60 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-12">
        <h3 className="text-xl font-semibold">Core Principles</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {title: 'Context Preservation', desc: 'We maintain nuance while providing structure'},
            {title: 'Bias Awareness', desc: 'Our tools surface alternative perspectives'},
            {title: 'Actionable Outputs', desc: 'Every insight comes with practical next steps'},
            {title: 'Enterprise-Grade', desc: 'Built for mission-critical decisions'},
            {title: 'Continuous Learning', desc: 'Systems that improve with use'},
            {title: 'Privacy First', desc: 'Your data never trains our public models'}
          ].map((principle, i) => (
            <div key={i} className="rounded-lg border border-white/15 p-4 flex items-start gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-sm mt-0.5">
                {i + 1}
              </div>
              <div>
                <h4 className="font-medium">{principle.title}</h4>
                <p className="mt-1 text-sm text-white/80">{principle.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-12">
        <div className="rounded-lg border border-white/15 p-6 bg-gradient-to-b from-blue-500/10 to-transparent">
          <h3 className="text-xl font-semibold">Backed By</h3>
          <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
            {['Y Combinator', 'a16z', 'Sequoia', 'Founders Fund'].map((investor, i) => (
              <div key={i} className="flex items-center justify-center text-sm font-medium">
                {investor}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MarketingShell>
  </>
  )
}
