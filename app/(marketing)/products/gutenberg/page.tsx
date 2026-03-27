import Link from "next/link";
import { BookOpen, CheckCircle, ArrowRight, FileText, Palette, BarChart2 } from "lucide-react";

const features = [
  {
    title: "Document Templates",
    description: "Start with 150+ professionally designed templates for reports, proposals, white papers, books, and more — ready to customize in seconds.",
  },
  {
    title: "Multi-Format Export",
    description: "Export to PDF, EPUB, DOCX, HTML, and print-ready formats with a single click. Pixel-perfect output every time.",
  },
  {
    title: "Brand Kit",
    description: "Define your brand colors, fonts, and logos once. Gutenberg applies them consistently across every document you create.",
  },
  {
    title: "Print Layout",
    description: "Professional typesetting for print-ready documents. CMYK color support, bleed settings, and printer-friendly PDF export.",
  },
  {
    title: "Digital Publishing",
    description: "Publish directly to your website, a custom domain, or as an interactive web document. Share a link — no downloads required.",
  },
  {
    title: "Analytics",
    description: "See who read your documents, how long they spent on each section, and where they dropped off. Data to inform your next iteration.",
  },
];

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Choose a Template",
    description: "Start with a professionally designed template or from scratch. Your brand kit applies automatically.",
  },
  {
    step: "02",
    icon: Palette,
    title: "Design & Refine",
    description: "Drag-and-drop layout tools, rich text editing, and seamless image placement make design effortless.",
  },
  {
    step: "03",
    icon: BarChart2,
    title: "Publish & Track",
    description: "Export in any format or publish instantly online. Built-in analytics show you exactly how your content performs.",
  },
];

const outputFormats = [
  "PDF", "EPUB", "DOCX", "HTML",
  "Print-Ready", "Interactive Web", "Kindle", "InDesign",
];

export default function GutenbergPage() {
  const color = "#D97706";
  const lightBg = "#fffbeb";
  const borderColor = "#fde68a";

  return (
    <div>
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #451a03 0%, #78350f 50%, #92400e 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: color }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-amber-300 font-semibold text-sm uppercase tracking-widest">Gutenberg</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              From Words to World
            </h1>
            <p className="text-xl text-amber-100 mb-3">
              Professional document creation and publishing made effortless
            </p>
            <p className="text-lg text-amber-200/70 mb-10 max-w-2xl leading-relaxed">
              Gutenberg transforms your content into beautiful, publication-ready documents — then publishes them anywhere in the world with one click.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.masterprose.studio/gutenberg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-900 transition-all hover:opacity-90 hover:shadow-lg text-lg"
                style={{ backgroundColor: "#fde68a" }}
              >
                Publish with Gutenberg
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
            <div className="grid md:grid-cols-4 gap-4">
              {/* Sidebar */}
              <div className="bg-white rounded-xl p-3 shadow-sm space-y-2">
                <div className="text-xs font-semibold text-gray-400 mb-2">Templates</div>
                {["Report", "Proposal", "White Paper", "Book"].map((t) => (
                  <div
                    key={t}
                    className="text-xs px-2 py-1.5 rounded-lg text-gray-600"
                    style={{ backgroundColor: t === "Report" ? lightBg : "transparent" }}
                  >
                    {t}
                  </div>
                ))}
              </div>
              {/* Document preview */}
              <div className="md:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-6 border-b border-gray-100" style={{ backgroundColor: lightBg }} />
                <div className="p-4 space-y-2">
                  <div className="h-4 rounded w-3/4 mx-auto" style={{ backgroundColor: borderColor }} />
                  <div className="h-2 bg-gray-100 rounded w-full" />
                  <div className="h-2 bg-gray-100 rounded w-5/6" />
                  <div className="h-2 bg-gray-100 rounded w-full" />
                  <div className="h-16 rounded bg-gray-100 mt-2" />
                  <div className="h-2 bg-gray-100 rounded w-4/5" />
                  <div className="h-2 bg-gray-100 rounded w-full" />
                </div>
              </div>
              {/* Export panel */}
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <div className="text-xs font-semibold text-gray-400 mb-2">Export</div>
                {["PDF", "EPUB", "DOCX", "Web"].map((f) => (
                  <button
                    key={f}
                    className="w-full text-left text-xs px-2 py-1.5 rounded-lg mb-1 flex items-center gap-1.5"
                    style={{ backgroundColor: lightBg, color }}
                  >
                    <CheckCircle className="w-3 h-3" />
                    {f}
                  </button>
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
              Professional Publishing, Zero Friction
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything you need to create beautiful documents and share them with the world.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">From Draft to Published in Three Steps</h2>
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

      {/* Output formats */}
      <section className="py-16" style={{ backgroundColor: lightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Publish in Every Format</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {outputFormats.map((fmt) => (
              <span
                key={fmt}
                className="px-4 py-2 rounded-full text-sm font-medium border-2"
                style={{ borderColor: color, color }}
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #451a03 0%, #92400e 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Publishing Today</h2>
          <p className="text-amber-100 mb-8 text-lg">14-day free trial. No credit card required.</p>
          <a
            href="https://app.masterprose.studio/gutenberg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-gray-900 text-lg transition-all hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: "#fde68a" }}
          >
            Publish with Gutenberg
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
