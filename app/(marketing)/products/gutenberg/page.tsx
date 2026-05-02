import Link from "next/link";

const color = "#D97706";
const colorBg = "rgba(217,119,6,0.08)";
const gradient = "linear-gradient(135deg, #451a03 0%, #78350f 50%, #3f1c02 100%)";

const features = [
  {
    title: "One-Click Publishing",
    desc: "Connect your WordPress, Ghost, Medium, Substack, or any CMS. Publish to all channels simultaneously with a single click.",
    icon: "🚀",
  },
  {
    title: "Auto-Formatting",
    desc: "Gutenberg automatically formats your content for each platform, from responsive web layouts to optimized mobile views.",
    icon: "✨",
  },
  {
    title: "SEO Suite",
    desc: "Built-in SEO tools generate meta descriptions, open graph tags, schema markup, and keyword recommendations automatically.",
    icon: "🔍",
  },
  {
    title: "Asset Management",
    desc: "Manage all your images, videos, and files in one place. Automatic image optimization and CDN delivery included.",
    icon: "🗂️",
  },
  {
    title: "Scheduling Engine",
    desc: "Schedule content to publish at the optimal time for your audience. AI-powered timing recommendations included.",
    icon: "⏰",
  },
  {
    title: "Analytics Dashboard",
    desc: "Track page views, engagement, conversion rates, and content ROI across all platforms in a unified dashboard.",
    icon: "📈",
  },
];

const platforms = [
  { name: "WordPress", color: "#21759b" },
  { name: "Ghost", color: "#15171a" },
  { name: "Medium", color: "#000000" },
  { name: "Substack", color: "#ff6719" },
  { name: "Webflow", color: "#4353ff" },
  { name: "HubSpot", color: "#ff7a59" },
  { name: "Notion", color: "#000000" },
  { name: "Contentful", color: "#2478cc" },
];

export default function GutenbergPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: gradient }} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl bg-amber-400" />
          <div className="absolute bottom-0 left-20 w-60 h-60 rounded-full blur-3xl bg-yellow-400" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: "rgba(252,211,77,0.2)", color: "#fcd34d" }}
            >
              Master Prose · Gutenberg
            </div>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(252,211,77,0.2)" }}
            >
              <svg className="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Publish everywhere.
              <br />
              <span style={{ color: "#fcd34d" }}>Effortlessly.</span>
            </h1>
            <p className="text-xl text-amber-100 leading-relaxed mb-10">
              Gutenberg takes your finished content and delivers it everywhere your
              audience lives. One workflow. Every channel. Zero formatting headaches.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white text-sm"
                style={{ backgroundColor: color }}
              >
                Start publishing free
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
              <span className="text-gray-500 text-xs ml-4 font-mono">Gutenberg — Publish Dashboard</span>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold" style={{ color: "var(--mp-ink)" }}>
                    5 Ways AI Writing Tools Are Leveling the Playing Field
                  </h3>
                  <p className="text-gray-400 text-sm">Ready to publish · 487 words · SEO score: 94</p>
                </div>
                <button
                  className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold"
                  style={{ backgroundColor: color }}
                >
                  Publish All
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { platform: "WordPress", status: "Ready", color: "#21759b" },
                  { platform: "Medium", status: "Ready", color: "#000" },
                  { platform: "LinkedIn", status: "Adapting...", color: "#0A66C2" },
                  { platform: "Newsletter", status: "Scheduled", color: color },
                ].map((p) => (
                  <div
                    key={p.platform}
                    className="rounded-xl p-4 border text-center"
                    style={{ borderColor: "rgba(0,0,0,0.08)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg mx-auto mb-2"
                      style={{ backgroundColor: p.color }}
                    />
                    <div className="text-xs font-semibold text-gray-700">{p.platform}</div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: p.status === "Ready" ? "#059669" : p.status === "Scheduled" ? color : "#6b7280" }}
                    >
                      {p.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section style={{ backgroundColor: "var(--mp-cream)" }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: "var(--mp-ink)" }}>
            Connects to every platform you use
          </h2>
          <p className="text-gray-500 mb-10">
            Native integrations with all major CMS and publishing platforms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-100 shadow-sm"
              >
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: p.color }}
                />
                <span className="text-sm font-medium text-gray-700">{p.name}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-dashed border-gray-200">
              <span className="text-gray-400 text-sm">+ 40 more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "var(--mp-ink)" }}>
              The complete publishing suite
            </h2>
            <p className="text-gray-500 text-lg">
              Everything from formatting to analytics, all in one place.
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
            Publish smarter with Gutenberg
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Stop copying and pasting. Publish everywhere with one click.
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
