import Image from "next/image";
import Link from "next/link";
import { EmailCtaForm } from "@/components/marketing/email-cta-form";

const products = [
  {
    name: "Refinery",
    tagline: "AI-Powered Editing",
    description:
      "Polish your prose with AI-powered suggestions that understand context, tone, and style. Refinery catches what spellcheck misses.",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    href: "/products/refinery",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    name: "Forge",
    tagline: "Content Generation",
    description:
      "Generate high-quality content at scale. From blog posts to marketing copy, Forge helps you create more in less time.",
    color: "#EA580C",
    bg: "rgba(234,88,12,0.08)",
    href: "/products/forge",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Scrybe",
    tagline: "Writing Interface",
    description:
      "A distraction-free writing environment designed for deep work. Scrybe keeps you in flow with smart suggestions at your fingertips.",
    color: "#4F46E5",
    bg: "rgba(79,70,229,0.08)",
    href: "/products/scrybe",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    name: "Gutenberg",
    tagline: "Publishing Suite",
    description:
      "Publish to any platform with one click. Gutenberg handles formatting, SEO optimization, and multi-channel distribution.",
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
    href: "/products/gutenberg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "AI-Powered Assistance",
    desc: "Leverages the latest language models to understand your writing goals and provide relevant suggestions.",
    icon: "🤖",
  },
  {
    title: "Real-Time Collaboration",
    desc: "Work with your team simultaneously. See edits, leave comments, and resolve suggestions in real time.",
    icon: "🤝",
  },
  {
    title: "Multi-Format Export",
    desc: "Export to PDF, DOCX, HTML, Markdown, or push directly to WordPress, Medium, and more.",
    icon: "📤",
  },
  {
    title: "Version Control",
    desc: "Every change is tracked. Roll back to any version, compare drafts, and never lose your work.",
    icon: "🔄",
  },
  {
    title: "Writing Analytics",
    desc: "Track readability scores, keyword density, sentiment, and engagement predictions as you write.",
    icon: "📊",
  },
  {
    title: "Enterprise Security",
    desc: "SOC 2 compliant, end-to-end encryption, SSO integration, and GDPR-ready data handling.",
    icon: "🔒",
  },
];

const testimonials = [
  {
    name: "Alexandra Torres",
    role: "Senior Content Strategist, TechFlow Inc.",
    quote:
      "Master Prose completely transformed our content pipeline. We ship 3x more blog posts with consistently higher quality. Refinery alone saved us hours of editing every week.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
  },
  {
    name: "David Park",
    role: "Founder, Narrative Labs",
    quote:
      "I was skeptical about AI writing tools, but Master Prose is different. It feels like having a brilliant editor on call 24/7. Forge helps me ideate faster than I ever thought possible.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
  {
    name: "Camille Rousseau",
    role: "Marketing Director, Axiom Global",
    quote:
      "The publishing workflow in Gutenberg is seamless. Our team went from spending two days formatting and distributing content to doing it in under an hour. Remarkable ROI.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&q=80",
  },
];

const socialFeeds = [
  {
    platform: "Instagram",
    handle: "@masterprose",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.06)",
    post: "✍️ Writing tip of the day: Start with your strongest argument. Hook readers in the first sentence and never let go. #WritingTips #ContentMarketing",
    stats: "2.4K likes · 89 comments",
    url: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    platform: "Facebook",
    handle: "MasterProse",
    color: "#1877F2",
    bg: "rgba(24,119,242,0.06)",
    post: "🚀 Excited to announce our new Collaboration Mode — now in beta! Invite your whole team and edit documents together in real time.",
    stats: "1.8K reactions · 234 shares",
    url: "https://facebook.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    platform: "LinkedIn",
    handle: "Master Prose System",
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.06)",
    post: "We believe great writing is the foundation of great business. That's why we built Master Prose — to help professionals communicate with clarity and confidence.",
    stats: "3.2K impressions · 156 engagements",
    url: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    platform: "YouTube",
    handle: "MasterProse",
    color: "#FF0000",
    bg: "rgba(255,0,0,0.06)",
    post: "📹 New tutorial: How to use Forge to generate a month of content in one afternoon. Watch the full walkthrough on our channel.",
    stats: "12K views · 847 likes",
    url: "https://youtube.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    platform: "X",
    handle: "@masterprose",
    color: "#000000",
    bg: "rgba(0,0,0,0.04)",
    post: "Hot take: the best writing tool is the one that gets out of your way. We built Scrybe around this philosophy. Distraction-free. Fast. Intelligent.",
    stats: "4.7K impressions · 312 retweets",
    url: "https://x.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--mp-ink) 0%, #1a0a3e 50%, #0d1b3e 100%)",
        }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "var(--mp-purple)" }}
          />
          <div
            className="absolute bottom-10 right-20 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: "var(--mp-violet)" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-40 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-sm font-medium"
            style={{
              borderColor: "rgba(139,92,246,0.4)",
              backgroundColor: "rgba(109,40,217,0.15)",
              color: "var(--mp-violet)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now in public beta — join 50,000+ writers
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Write Better.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, var(--mp-violet), var(--mp-gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Create Faster.
            </span>
            <br />
            Publish Smarter.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Master Prose is the complete AI writing suite for professionals who demand
            excellence. Edit, generate, write, and publish — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              style={{ backgroundColor: "var(--mp-gold)" }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-900 hover:opacity-90 transition-opacity text-lg"
            >
              Request a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors text-lg"
            >
              Start Writing Free
            </Link>
          </div>
          <div className="mt-16 relative">
            <div
              className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mx-auto max-w-4xl"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <div className="p-3 border-b border-white/10 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-gray-500 text-xs ml-4">masterprose.studio — Scrybe Editor</span>
              </div>
              <div className="p-8 text-left">
                <div className="text-gray-400 text-sm mb-4 font-mono">Chapter 1 — The Beginning</div>
                <div className="text-gray-200 text-base leading-relaxed">
                  The morning light filtered through the curtains as{" "}
                  <span
                    className="px-1 rounded"
                    style={{ backgroundColor: "rgba(109,40,217,0.3)", color: "var(--mp-violet)" }}
                  >
                    Elena stepped into the office
                  </span>{" "}
                  for the first time. The smell of fresh coffee and possibility hung in the air...
                </div>
                <div
                  className="mt-4 flex items-center gap-3 text-sm"
                  style={{ color: "var(--mp-violet)" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span>AI suggestion: Consider adding sensory details to deepen immersion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "50,000+", label: "Active Writers" },
              { value: "10M+", label: "Words Written" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "4.9/5", label: "User Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{ color: "var(--mp-purple)" }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24" style={{ backgroundColor: "var(--mp-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-extrabold mb-4"
              style={{ color: "var(--mp-ink)" }}
            >
              Four tools. One suite.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Each product in the Master Prose System is purpose-built for a specific
              stage of the writing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group block rounded-2xl p-8 border border-transparent hover:border-gray-200 transition-all hover:shadow-lg bg-white"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: p.bg, color: p.color }}
                >
                  {p.icon}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: p.color }}>
                  {p.tagline}
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "var(--mp-ink)" }}
                >
                  {p.name}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-5">{p.description}</p>
                <div
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all"
                  style={{ color: p.color }}
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-extrabold mb-4"
              style={{ color: "var(--mp-ink)" }}
            >
              Everything you need to write at your best
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Master Prose is packed with professional-grade features that scale with
              your ambitions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-100 p-7 hover:border-purple-200 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--mp-ink)" }}
                >
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ backgroundColor: "var(--mp-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-extrabold mb-4"
              style={{ color: "var(--mp-ink)" }}
            >
              Loved by writers everywhere
            </h2>
            <p className="text-gray-500 text-lg">
              Join thousands of professionals who write better with Master Prose.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: "var(--mp-gold)" }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote
                  className="text-gray-700 leading-relaxed mb-6 text-sm"
                  style={{ fontStyle: "italic" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "var(--mp-ink)" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social feeds */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-extrabold mb-4"
              style={{ color: "var(--mp-ink)" }}
            >
              Follow our journey
            </h2>
            <p className="text-gray-500 text-lg">
              Stay connected with the Master Prose community across all platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {socialFeeds.map((feed) => (
              <div
                key={feed.platform}
                className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all"
                style={{ backgroundColor: feed.bg }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: feed.color }}
                    >
                      {feed.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "var(--mp-ink)" }}>
                        {feed.platform}
                      </div>
                      <div className="text-xs text-gray-400">{feed.handle}</div>
                    </div>
                  </div>
                  <a
                    href={feed.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors hover:text-white"
                    style={{
                      borderColor: feed.color,
                      color: feed.color,
                    }}
                  >
                    Follow
                  </a>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{feed.post}</p>
                <div className="text-gray-400 text-xs">{feed.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--mp-purple) 0%, #4c1d95 100%)",
        }}
        className="py-24"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Start writing smarter today
          </h2>
          <p className="text-purple-200 text-lg mb-10">
            Join thousands of writers who use Master Prose to create their best work.
            Free to get started — no credit card required.
          </p>
          <EmailCtaForm />
        </div>
      </section>
    </div>
  );
}
