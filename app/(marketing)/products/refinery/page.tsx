import Link from "next/link";
import { Scissors, CheckCircle, ArrowRight, Upload, Wand2, Download } from "lucide-react";

const features = [
  {
    title: "Style Analysis",
    description: "Deep analysis of your writing style, identifying patterns, strengths, and opportunities for improvement across any document.",
  },
  {
    title: "Grammar & Clarity",
    description: "Far beyond spell-check — Refinery understands sentence structure, identifies ambiguity, and suggests clarity improvements in context.",
  },
  {
    title: "Tone Adjustment",
    description: "Shift your document's tone from formal to casual, authoritative to conversational, or anything in between — with one click.",
  },
  {
    title: "Plagiarism Check",
    description: "Comprehensive originality scanning against billions of web pages and academic papers, with source citations for any matches found.",
  },
  {
    title: "SEO Optimization",
    description: "Built-in keyword density analysis, readability scoring, and meta description generation to maximize your content's search performance.",
  },
  {
    title: "Real-time Suggestions",
    description: "As you write, Refinery surfaces contextual suggestions in a non-intrusive sidebar — accept, modify, or ignore with a single keystroke.",
  },
];

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Paste or Import",
    description: "Drop in your text, import from Google Docs, Word, or any URL. Refinery handles any format.",
  },
  {
    step: "02",
    icon: Wand2,
    title: "Analyze & Refine",
    description: "Refinery scans your content and surfaces prioritized suggestions organized by impact level.",
  },
  {
    step: "03",
    icon: Download,
    title: "Export & Publish",
    description: "Accept changes with one click and export your polished document in any format you need.",
  },
];

const useCases = ["Blog posts & articles", "Marketing copy", "Academic papers", "Business reports", "Email campaigns", "Social media content"];

export default function RefineryPage() {
  const color = "#059669";
  const lightBg = "#ecfdf5";
  const borderColor = "#a7f3d0";

  return (
    <div>
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)` }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: color }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <span className="text-emerald-300 font-semibold text-sm uppercase tracking-widest">Refinery</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Perfect Every Word
            </h1>
            <p className="text-xl text-emerald-100 mb-3">
              AI-powered editing that understands your voice
            </p>
            <p className="text-lg text-emerald-200/70 mb-10 max-w-2xl leading-relaxed">
              Refinery goes beyond grammar checking. It understands context, voice, and intent — then helps you say exactly what you mean, in the most powerful way possible.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.masterprose.studio/refinery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-900 transition-all hover:opacity-90 hover:shadow-lg text-lg"
                style={{ backgroundColor: "#6ee7b7" }}
              >
                Try Refinery Free
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
              <div className="flex-1 h-6 rounded-md bg-white/60 ml-4" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-4/5" />
                  <div className="h-3 rounded w-3/4" style={{ backgroundColor: "#bbf7d0" }} />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm space-y-3">
                <div className="text-xs font-semibold" style={{ color }}>AI Suggestions</div>
                {["Clarity improvement", "Tone adjustment", "SEO boost"].map((s) => (
                  <div key={s} className="flex items-center gap-2 p-2 rounded-lg" style={{ backgroundColor: lightBg }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color }} />
                    <span className="text-xs text-gray-700">{s}</span>
                  </div>
                ))}
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
              Everything You Need to Write Perfectly
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Six powerful capabilities, one seamless tool.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Refinery Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative text-center">
                  {i < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-8 left-full w-full h-0.5 -translate-x-1/2 z-0"
                      style={{ backgroundColor: borderColor }}
                    />
                  )}
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                      style={{ backgroundColor: lightBg, border: `2px solid ${borderColor}` }}
                    >
                      <Icon className="w-7 h-7" style={{ color }} />
                    </div>
                    <div className="text-3xl font-black mb-2" style={{ color: borderColor }}>{step.step}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16" style={{ backgroundColor: lightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Works for Every Type of Writing</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {useCases.map((uc) => (
              <span
                key={uc}
                className="px-4 py-2 rounded-full text-sm font-medium border-2"
                style={{ borderColor: color, color }}
              >
                {uc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, #064e3b 0%, #047857 100%)` }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Refining Today</h2>
          <p className="text-emerald-100 mb-8 text-lg">14-day free trial. No credit card required.</p>
          <a
            href="https://app.masterprose.studio/refinery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-gray-900 text-lg transition-all hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: "#6ee7b7" }}
          >
            Try Refinery Free
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
