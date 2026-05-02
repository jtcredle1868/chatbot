import Link from "next/link";

const color = "#059669";
const colorBg = "rgba(5,150,105,0.08)";
const gradient = "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #0d4429 100%)";

const features = [
  {
    title: "Contextual Grammar",
    desc: "Goes beyond basic grammar rules to understand your writing context and suggest corrections that preserve your voice.",
    icon: "📝",
  },
  {
    title: "Style Consistency",
    desc: "Maintains consistent style, tone, and terminology across long-form documents and entire content libraries.",
    icon: "🎨",
  },
  {
    title: "Tone Analysis",
    desc: "Analyzes the emotional tone of your writing and suggests adjustments to match your intended reader experience.",
    icon: "🎯",
  },
  {
    title: "Clarity Score",
    desc: "Measures readability in real time and highlights sentences that could be simplified for your target audience.",
    icon: "📊",
  },
  {
    title: "Vocabulary Enhancement",
    desc: "Suggests precise, vivid word choices that strengthen your prose without losing authenticity.",
    icon: "✨",
  },
  {
    title: "Track Changes",
    desc: "Full version history with inline change tracking so you can review, accept, or reject every AI suggestion.",
    icon: "🔄",
  },
];

const useCases = [
  { label: "Blog Posts", pct: 94 },
  { label: "Marketing Copy", pct: 91 },
  { label: "Technical Docs", pct: 88 },
  { label: "Email Campaigns", pct: 96 },
];

export default function RefineryPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: gradient }} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full blur-3xl bg-green-300" />
          <div className="absolute bottom-0 left-10 w-60 h-60 rounded-full blur-3xl bg-emerald-400" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: "rgba(52,211,153,0.2)", color: "#6ee7b7" }}
            >
              Master Prose · Refinery
            </div>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(52,211,153,0.2)" }}
            >
              <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Edit smarter.
              <br />
              <span style={{ color: "#6ee7b7" }}>Write better.</span>
            </h1>
            <p className="text-xl text-green-100 leading-relaxed mb-10">
              Refinery is the AI editing co-pilot that understands context, tone, and
              style. It goes beyond grammar to make your writing genuinely excellent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white text-sm"
                style={{ backgroundColor: color }}
              >
                Start editing free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors text-sm"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App mockup */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-2xl">
            <div className="bg-gray-900 px-5 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-gray-500 text-xs ml-4 font-mono">Refinery — document.md</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-2 p-8 bg-white border-r border-gray-100">
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  The new{" "}
                  <span
                    className="px-1 rounded border-b-2 cursor-pointer"
                    style={{ backgroundColor: "rgba(5,150,105,0.1)", borderColor: color }}
                  >
                    product launch strategy
                  </span>{" "}
                  needs to be implemented by the marketing team immediately in order to
                  ensure that our quarterly targets{" "}
                  <span
                    className="px-1 rounded border-b-2"
                    style={{ backgroundColor: "rgba(245,158,11,0.1)", borderColor: "#f59e0b" }}
                  >
                    can be achieved
                  </span>{" "}
                  before the end of the fiscal period.
                </p>
                <div
                  className="text-xs p-3 rounded-lg"
                  style={{ backgroundColor: colorBg, color: color }}
                >
                  💡 Suggestion: Consider simplifying — "The marketing team should launch immediately to hit Q4 targets."
                </div>
              </div>
              <div className="p-5 bg-gray-50">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Refinery Score
                </h4>
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-500">Clarity</span>
                    <span style={{ color }}>78/100</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-200">
                    <div className="h-1.5 rounded-full" style={{ backgroundColor: color, width: "78%" }} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-500">Concision</span>
                    <span style={{ color }}>62/100</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-200">
                    <div className="h-1.5 rounded-full" style={{ backgroundColor: color, width: "62%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-500">Engagement</span>
                    <span style={{ color }}>85/100</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-200">
                    <div className="h-1.5 rounded-full" style={{ backgroundColor: color, width: "85%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: "var(--mp-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "var(--mp-ink)" }}>
              Everything an editor needs
            </h2>
            <p className="text-gray-500 text-lg">
              Refinery combines AI precision with deep writing expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--mp-ink)" }}>
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases / stats */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-3" style={{ color: "var(--mp-ink)" }}>
            Trusted for every content type
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Writers report significant quality improvements across all formats.
          </p>
          <div className="space-y-5">
            {useCases.map((uc) => (
              <div key={uc.label} className="text-left">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium" style={{ color: "var(--mp-ink)" }}>{uc.label}</span>
                  <span style={{ color }}>+{uc.pct}% improvement</span>
                </div>
                <div className="h-2.5 rounded-full bg-gray-100">
                  <div
                    className="h-2.5 rounded-full transition-all"
                    style={{ backgroundColor: color, width: `${uc.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: gradient }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Start editing with Refinery
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Free to get started. No credit card required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="px-8 py-4 rounded-xl font-semibold text-white"
              style={{ backgroundColor: color }}
            >
              Get started free
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
