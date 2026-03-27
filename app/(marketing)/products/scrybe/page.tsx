import Link from "next/link";
import { PenTool, CheckCircle, ArrowRight, Mic, Cloud, History } from "lucide-react";

const features = [
  {
    title: "Smart Autocomplete",
    description: "Context-aware completions that learn your writing patterns over time. Press Tab to accept, or keep typing to override.",
  },
  {
    title: "Research Mode",
    description: "Pull in referenced facts, quotes, and data from the web without leaving your document. Stay in flow while staying accurate.",
  },
  {
    title: "Distraction-Free",
    description: "A beautiful minimal interface that hides everything but the words. Fullscreen mode, customizable fonts, and ambient sounds included.",
  },
  {
    title: "Voice to Text",
    description: "Dictate with high accuracy in 40+ languages. Scrybe transcribes, punctuates, and formats your speech in real time.",
  },
  {
    title: "Version History",
    description: "Every keystroke is saved. Browse your full document history and restore any previous version with a single click.",
  },
  {
    title: "Cloud Sync",
    description: "Your documents sync instantly across all your devices. Start on desktop, continue on mobile — always exactly where you left off.",
  },
];

const steps = [
  {
    step: "01",
    icon: PenTool,
    title: "Open and Write",
    description: "Launch Scrybe and start writing. The interface stays out of your way so your ideas can flow freely.",
  },
  {
    step: "02",
    icon: CheckCircle,
    title: "AI Assists As You Go",
    description: "Autocomplete suggestions, inline research, and live grammar guidance appear only when helpful.",
  },
  {
    step: "03",
    icon: Cloud,
    title: "Sync and Share",
    description: "Your work is automatically saved and synced. Share with collaborators or hand off to Refinery for editing.",
  },
];

const writingModes = [
  "Long-form articles", "Short stories", "Screenplays", "Research papers",
  "Journal entries", "Meeting notes", "Poetry", "Technical docs",
];

export default function ScrybePage() {
  const color = "#4F46E5";
  const lightBg = "#eef2ff";
  const borderColor = "#c7d2fe";

  return (
    <div>
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: color }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <span className="text-indigo-300 font-semibold text-sm uppercase tracking-widest">Scrybe</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Your Intelligent Writing Companion
            </h1>
            <p className="text-xl text-indigo-100 mb-3">
              Write freely while AI handles the details
            </p>
            <p className="text-lg text-indigo-200/70 mb-10 max-w-2xl leading-relaxed">
              Scrybe is the writing environment you have always wanted — distraction-free, deeply intelligent, and designed to keep you in a state of flow.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/chat"
                
                
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-900 transition-all hover:opacity-90 hover:shadow-lg text-lg"
                style={{ backgroundColor: "#c7d2fe" }}
              >
                Open Scrybe
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all text-lg"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product mockup */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 border-2"
            style={{ backgroundColor: lightBg, borderColor }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-xs text-gray-400 ml-4">Untitled Document — Scrybe</span>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="h-5 bg-gray-200 rounded w-2/3 mb-3" />
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-full" />
                  <div className="h-3 bg-gray-100 rounded w-5/6" />
                  <div className="flex items-center gap-2">
                    <div className="h-3 rounded w-1/2" style={{ backgroundColor: borderColor }} />
                    <div
                      className="px-2 py-0.5 rounded text-xs text-white"
                      style={{ backgroundColor: color }}
                    >
                      Autocomplete
                    </div>
                  </div>
                  <div className="h-3 bg-gray-100 rounded w-4/5" />
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 border-t border-gray-100 pt-4">
                <span>324 words</span>
                <span>·</span>
                <span>~2 min read</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Synced
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Designed for Deep Work
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every feature in Scrybe exists to help you do your best writing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: lightBg }}>
                  <CheckCircle className="w-4 h-4" style={{ color }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple by Design</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-sm"
                    style={{ backgroundColor: lightBg, border: `2px solid ${borderColor}` }}
                  >
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>
                  <div className="text-3xl font-black mb-2" style={{ color: borderColor }}>{step.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Writing modes */}
      <section className="py-16" style={{ backgroundColor: lightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Write Anything, Anywhere</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {writingModes.map((mode) => (
              <span
                key={mode}
                className="px-4 py-2 rounded-full text-sm font-medium border-2"
                style={{ borderColor: color, color }}
              >
                {mode}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Writing with Scrybe</h2>
          <p className="text-indigo-100 mb-8 text-lg">14-day free trial. No credit card required.</p>
          <a
            href="/chat"
            
            
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-gray-900 text-lg transition-all hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: "#c7d2fe" }}
          >
            Open Scrybe
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
