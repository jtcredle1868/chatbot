import Link from "next/link";

const color = "#4F46E5";
const colorBg = "rgba(79,70,229,0.08)";
const gradient = "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1a1640 100%)";

const features = [
  {
    title: "Distraction-Free Mode",
    desc: "Full-screen focus mode removes all UI chrome. Just you, your words, and a gentle ambient soundtrack if you want it.",
    icon: "🎯",
  },
  {
    title: "Smart Autocomplete",
    desc: "Context-aware sentence completion that learns your style and helps you write without breaking your flow.",
    icon: "⌨️",
  },
  {
    title: "Document Outline",
    desc: "Automatically builds a live outline as you write. Jump between sections and reorganize with drag-and-drop.",
    icon: "📑",
  },
  {
    title: "Writing Goals",
    desc: "Set daily word count goals with visual progress tracking. Build consistent writing habits with streaks and achievements.",
    icon: "🏆",
  },
  {
    title: "Multi-Device Sync",
    desc: "Start on your laptop, continue on your phone. Everything syncs instantly across all your devices.",
    icon: "🔄",
  },
  {
    title: "Custom Themes",
    desc: "Choose from 20+ editor themes including light, dark, sepia, and focus modes. Make your workspace yours.",
    icon: "🎨",
  },
];

const stats = [
  { value: "40%", label: "Faster writing sessions" },
  { value: "2.3x", label: "More words per session" },
  { value: "89%", label: "Users hit their goals" },
  { value: "4.9★", label: "App store rating" },
];

export default function ScrybelPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: gradient }} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl bg-indigo-400" />
          <div className="absolute bottom-0 left-20 w-60 h-60 rounded-full blur-3xl bg-violet-400" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: "rgba(165,180,252,0.2)", color: "#a5b4fc" }}
            >
              Master Prose · Scrybe
            </div>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(165,180,252,0.2)" }}
            >
              <svg className="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Write in flow.
              <br />
              <span style={{ color: "#a5b4fc" }}>Stay in flow.</span>
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed mb-10">
              Scrybe is the distraction-free writing environment for serious writers.
              Beautifully minimal, intelligently smart, built for deep work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white text-sm"
                style={{ backgroundColor: color }}
              >
                Start writing free
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ background: "linear-gradient(135deg, #1e1b4b, #312e81)" }}
          >
            <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="text-indigo-400 text-xs font-mono">Chapter 4 — Untitled</div>
              <div className="text-indigo-400/50 text-xs">2,847 words · 94% goal</div>
            </div>
            <div className="p-12 min-h-64">
              <div className="max-w-xl mx-auto">
                <p className="text-indigo-100 text-lg leading-relaxed mb-4">
                  The city hummed with the quiet electricity of midnight. Maren moved
                  through the empty streets like she owned them — and in some ways, she
                  did. Every corner held a memory, every shadow a secret she&apos;d buried
                  years ago.
                </p>
                <p className="text-indigo-100 text-lg leading-relaxed">
                  She stopped at the old bookshop. The sign was dark, but the light in
                  the back window told her{" "}
                  <span className="border-b-2 border-indigo-400/50">
                    everything she needed to know
                  </span>
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div
                    className="h-5 w-px animate-pulse"
                    style={{ backgroundColor: "#a5b4fc" }}
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-4 text-xs text-indigo-400/70">
                <span>Focus mode</span>
                <span>·</span>
                <span>Typewriter scroll</span>
                <span>·</span>
                <span>Midnight theme</span>
              </div>
              <div
                className="h-1.5 rounded-full w-32"
                style={{ backgroundColor: "rgba(165,180,252,0.2)" }}
              >
                <div
                  className="h-1.5 rounded-full"
                  style={{ backgroundColor: color, width: "94%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "var(--mp-cream)" }} className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold mb-1" style={{ color }}>
                  {s.value}
                </div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "var(--mp-ink)" }}>
              Designed for serious writers
            </h2>
            <p className="text-gray-500 text-lg">
              Every feature in Scrybe was built to protect and enhance your writing flow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-all">
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

      {/* CTA */}
      <section style={{ background: gradient }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Find your writing flow with Scrybe
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            Join thousands of writers who do their best work in Scrybe.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="px-8 py-4 rounded-xl font-semibold text-white"
              style={{ backgroundColor: color }}
            >
              Start writing free
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
