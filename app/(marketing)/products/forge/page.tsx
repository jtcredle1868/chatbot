import Link from "next/link";
import { Zap, CheckCircle, ArrowRight, Lightbulb, Settings, Layers } from "lucide-react";

const features = [
  {
    title: "Content Templates",
    description: "200+ professionally-crafted templates for every content type — blog posts, ad copy, product descriptions, press releases, and more.",
  },
  {
    title: "Brand Voice Training",
    description: "Train Forge on your existing content and it will generate new material that sounds exactly like you — consistently, at scale.",
  },
  {
    title: "Multi-Format Output",
    description: "Generate content formatted for web, social media, email newsletters, landing pages, and long-form articles from a single brief.",
  },
  {
    title: "Bulk Generation",
    description: "Need 100 product descriptions or 50 email subject lines? Forge processes bulk jobs in minutes with consistent quality throughout.",
  },
  {
    title: "A/B Variants",
    description: "Automatically generate multiple variants of any piece of content for testing. Find what resonates with your audience faster.",
  },
  {
    title: "Collaboration",
    description: "Share prompts, save templates, and review generated content as a team. Built-in approval workflows keep quality high at scale.",
  },
];

const steps = [
  {
    step: "01",
    icon: Lightbulb,
    title: "Brief It",
    description: "Describe what you need — a topic, a tone, an audience, a format. The more context you give, the better the output.",
  },
  {
    step: "02",
    icon: Zap,
    title: "Generate",
    description: "Forge generates high-quality content in seconds. Choose from multiple variants or iterate with follow-up instructions.",
  },
  {
    step: "03",
    icon: Settings,
    title: "Refine & Use",
    description: "Polish with Refinery, then publish directly — or export to your CMS, email platform, or document tool of choice.",
  },
];

const contentTypes = [
  "Blog Articles", "Social Posts", "Ad Copy", "Email Campaigns",
  "Product Descriptions", "Press Releases", "SEO Content", "Video Scripts",
];

export default function ForgePage() {
  const color = "#EA580C";
  const lightBg = "#fff7ed";
  const borderColor = "#fed7aa";

  return (
    <div>
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #431407 0%, #7c2d12 50%, #9a3412 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: color }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-orange-300 font-semibold text-sm uppercase tracking-widest">Forge</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Create Without Limits
            </h1>
            <p className="text-xl text-orange-100 mb-3">
              Generate compelling content at the speed of thought
            </p>
            <p className="text-lg text-orange-200/70 mb-10 max-w-2xl leading-relaxed">
              Forge is your AI content engine. Brief it on what you need, train it on your brand voice, and watch it produce publication-ready content in seconds.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/chat"
                
                
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-900 transition-all hover:opacity-90 hover:shadow-lg text-lg"
                style={{ backgroundColor: "#fed7aa" }}
              >
                Start Creating with Forge
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
            <div className="grid md:grid-cols-5 gap-4">
              <div className="md:col-span-2 bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs font-semibold text-gray-500 mb-3">Brief</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Topic</div>
                    <div className="h-7 rounded-lg bg-orange-50 border border-orange-100" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Tone</div>
                    <div className="h-7 rounded-lg bg-orange-50 border border-orange-100" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Format</div>
                    <div className="h-7 rounded-lg bg-orange-50 border border-orange-100" />
                  </div>
                  <button
                    className="w-full py-2 rounded-lg text-white text-xs font-semibold"
                    style={{ backgroundColor: color }}
                  >
                    Generate
                  </button>
                </div>
              </div>
              <div className="md:col-span-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs font-semibold text-gray-500 mb-3">Generated Content</div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                  <div className="h-3 rounded w-4/5" style={{ backgroundColor: "#fed7aa" }} />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: lightBg, color }}>Variant A</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500">Variant B</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500">Variant C</div>
                </div>
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
              Built for Content at Scale
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From a single tweet to an entire content strategy — Forge handles it all.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">From Brief to Published in Minutes</h2>
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

      {/* Content types */}
      <section className="py-16" style={{ backgroundColor: lightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Create Any Type of Content</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {contentTypes.map((ct) => (
              <span
                key={ct}
                className="px-4 py-2 rounded-full text-sm font-medium border-2"
                style={{ borderColor: color, color }}
              >
                {ct}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #431407 0%, #9a3412 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Forge Your Next Hit?</h2>
          <p className="text-orange-100 mb-8 text-lg">14-day free trial. No credit card required.</p>
          <a
            href="/chat"
            
            
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-gray-900 text-lg transition-all hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: "#fed7aa" }}
          >
            Start Creating with Forge
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
