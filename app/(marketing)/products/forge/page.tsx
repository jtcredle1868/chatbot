import Link from "next/link";

const color = "#EA580C";
const colorBg = "rgba(234,88,12,0.08)";
const gradient = "linear-gradient(135deg, #431407 0%, #7c2d12 50%, #451a03 100%)";

const features = [
  {
    title: "Content Briefs to Drafts",
    desc: "Paste in a brief, outline, or even a rough idea. Forge transforms it into a structured, high-quality first draft instantly.",
    icon: "⚡",
  },
  {
    title: "Multi-Format Generation",
    desc: "Generate blog posts, social copy, email sequences, landing pages, product descriptions, and more — all from one platform.",
    icon: "📋",
  },
  {
    title: "Brand Voice Training",
    desc: "Train Forge on your existing content to match your brand voice exactly. Every output sounds unmistakably like you.",
    icon: "🎙️",
  },
  {
    title: "Batch Generation",
    desc: "Need 30 product descriptions? 10 blog posts? Forge handles bulk content generation with consistent quality at scale.",
    icon: "🔥",
  },
  {
    title: "SEO Optimization",
    desc: "Forge generates content pre-optimized for search with natural keyword integration, headers, and semantic structure.",
    icon: "🔍",
  },
  {
    title: "Content Calendar",
    desc: "Plan, schedule, and generate a full month of content in a single session. Never face an empty content calendar again.",
    icon: "📅",
  },
];

const formats = [
  "Blog Posts",
  "Landing Pages",
  "Email Sequences",
  "Social Media",
  "Product Descriptions",
  "Press Releases",
  "Ad Copy",
  "Video Scripts",
  "Case Studies",
  "White Papers",
];

export default function ForgePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: gradient }} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl bg-orange-400" />
          <div className="absolute bottom-0 left-20 w-60 h-60 rounded-full blur-3xl bg-red-400" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: "rgba(251,146,60,0.2)", color: "#fdba74" }}
            >
              Master Prose · Forge
            </div>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(251,146,60,0.2)" }}
            >
              <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Generate content.
              <br />
              <span style={{ color: "#fdba74" }}>At scale.</span>
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed mb-10">
              Forge turns your ideas into polished, publication-ready content in seconds.
              Blog posts, emails, social content — all trained on your brand voice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white text-sm"
                style={{ backgroundColor: color }}
              >
                Start generating free
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
              <span className="text-gray-500 text-xs ml-4 font-mono">Forge — New Content</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-r border-gray-100">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Brief
                </div>
                <textarea
                  readOnly
                  className="w-full h-40 bg-gray-50 rounded-xl border border-gray-200 p-4 text-sm text-gray-600 resize-none focus:outline-none"
                  value="Write a 500-word blog post about the benefits of AI writing tools for small business owners. Tone: conversational and encouraging. Target audience: non-technical entrepreneurs."
                />
                <button
                  className="mt-4 w-full py-3 rounded-xl text-white text-sm font-semibold"
                  style={{ backgroundColor: color }}
                >
                  ⚡ Generate with Forge
                </button>
              </div>
              <div className="p-8 bg-gray-50">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Generated Draft
                </div>
                <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold text-gray-900">
                    5 Ways AI Writing Tools Are Leveling the Playing Field for Small Businesses
                  </p>
                  <p className="text-gray-500">
                    If you&apos;ve ever stared at a blank screen wondering how to write a compelling
                    product description or newsletter, you&apos;re not alone...
                  </p>
                  <div
                    className="text-xs px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5"
                    style={{ backgroundColor: colorBg, color }}
                  >
                    <span>✓</span> 487 words · SEO optimized · Brand voice matched
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
              Built for content teams at scale
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to generate, manage, and publish great content.
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

      {/* Formats */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-3" style={{ color: "var(--mp-ink)" }}>
            Generate any content format
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Forge handles every content type your business needs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {formats.map((fmt) => (
              <span
                key={fmt}
                className="px-5 py-2.5 rounded-full text-sm font-medium border"
                style={{ backgroundColor: colorBg, borderColor: "rgba(234,88,12,0.2)", color }}
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: gradient }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to create more with Forge?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Generate your first piece of content today — no credit card needed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="px-8 py-4 rounded-xl font-semibold text-white"
              style={{ backgroundColor: color }}
            >
              Start for free
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
