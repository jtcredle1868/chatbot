import Link from "next/link";
import Image from "next/image";
import {
  Scissors,
  Zap,
  PenTool,
  BookOpen,
  Sparkles,
  Users,
  Download,
  GitBranch,
  BarChart3,
  Shield,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";
import { EmailCtaForm } from "@/components/marketing/email-cta-form";

const products = [
  {
    name: "Refinery",
    tagline: "Polish every sentence to perfection",
    icon: Scissors,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    href: "/products/refinery",
  },
  {
    name: "Forge",
    tagline: "Generate compelling content instantly",
    icon: Zap,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    href: "/products/forge",
  },
  {
    name: "Scrybe",
    tagline: "Write with intelligent AI assistance",
    icon: PenTool,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    href: "/products/scrybe",
  },
  {
    name: "Gutenberg",
    tagline: "Format and publish with precision",
    icon: BookOpen,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    href: "/products/gutenberg",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Cutting-edge language models trained specifically for professional writing workflows.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "Work simultaneously with your team on any document, anywhere in the world.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Download,
    title: "Multi-Format Export",
    description: "Export to PDF, EPUB, DOCX, HTML, and more with a single click.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Never lose a word. Full revision history with one-click restore for every document.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track writing performance, productivity trends, and content engagement metrics.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. End-to-end encryption. Your content stays yours.",
    color: "text-slate-600",
    bg: "bg-slate-50",
  },
];

const testimonials = [
  {
    quote: "Master Prose System completely transformed how our content team works. We're producing twice the output in half the time, and the quality has never been better.",
    name: "Alexandra Rivera",
    title: "Head of Content, TechCrunch",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
  },
  {
    quote: "Refinery alone is worth the entire subscription. It catches things I never would have noticed and preserves my voice perfectly. Every writer needs this.",
    name: "David Okonkwo",
    title: "Senior Author & Blogger",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
  },
  {
    quote: "We rolled out Master Prose to our 200-person marketing org in a week. The onboarding was seamless and ROI was immediate. Our best tool investment this year.",
    name: "Priya Mehta",
    title: "VP Marketing, Salesforce",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    rating: 5,
  },
];

const stats = [
  { value: "50,000+", label: "Writers" },
  { value: "10M+", label: "Words Crafted" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "Rating" },
];

const socialFeeds = [
  {
    platform: "Instagram",
    handle: "@masterprose.studio",
    href: "https://instagram.com/masterprose.studio",
    bg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    posts: [
      "Unlock your writing potential with AI ✨",
      "New Refinery feature: tone-matching is here!",
      "Behind the scenes at Master Prose HQ 📸",
    ],
  },
  {
    platform: "Facebook",
    handle: "Master Prose System",
    href: "https://facebook.com/masterprose",
    bg: "bg-[#1877F2]",
    posts: [
      "Join our community of 50,000+ professional writers",
      "Webinar recap: AI writing best practices",
      "Customer spotlight: How TechCrunch uses Forge",
    ],
  },
  {
    platform: "LinkedIn",
    handle: "Master Prose System",
    href: "https://linkedin.com/company/masterprose",
    bg: "bg-[#0A66C2]",
    posts: [
      "We're hiring! Senior ML Engineers needed",
      "Gutenberg 2.0 is transforming publishing workflows",
      "Thought leadership: The future of AI writing tools",
    ],
  },
  {
    platform: "YouTube",
    handle: "@masterprose",
    href: "https://youtube.com/@masterprose",
    bg: "bg-[#FF0000]",
    posts: [
      "Tutorial: Getting started with Scrybe",
      "Deep dive: How Refinery's AI works",
      "Customer story: From draft to published in 1 hour",
    ],
  },
  {
    platform: "X",
    handle: "@masterprose",
    href: "https://x.com/masterprose",
    bg: "bg-black",
    posts: [
      "Writing tip: Use Forge for first drafts, Refinery to perfect them 🔥",
      "We just hit 50k writers. Thank you! 🙌",
      "Hot take: AI doesn't replace writers — it amplifies them",
    ],
  },
];

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    );
  }
  if (platform === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  if (platform === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (platform === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }
  // X / Twitter
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ background: "linear-gradient(135deg, var(--mp-ink) 0%, #1a0a3e 50%, #2d1066 100%)" }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: "var(--mp-purple)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
            style={{ backgroundColor: "var(--mp-gold)" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{
                color: "var(--mp-gold)",
                borderColor: "rgba(245, 158, 11, 0.3)",
                backgroundColor: "rgba(245, 158, 11, 0.1)",
              }}
            >
              <Sparkles className="w-3 h-3" />
              The Complete AI Writing Suite
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Write Better.{" "}
              <span style={{ color: "var(--mp-violet)" }}>Create</span>{" "}
              Faster.{" "}
              <span style={{ color: "var(--mp-gold)" }}>Publish</span>{" "}
              Smarter.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Master Prose System is the complete AI writing suite for professionals who demand excellence. From first draft to final publish.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--mp-purple)" }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg border border-white/30 hover:bg-white/10 transition-all"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80"
                alt="Professional writer at desk"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--mp-purple)" }}>
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">AI-Powered Writing</div>
                <div className="text-xs text-gray-500">50,000+ writers trust us</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold mb-1" style={{ color: "var(--mp-purple)" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--mp-ink)" }}>
              Four Powerful Tools,{" "}
              <span style={{ color: "var(--mp-purple)" }}>One Unified System</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Each tool is powerful on its own. Together, they&apos;re unstoppable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.name}
                  href={product.href}
                  className={`group relative bg-white rounded-2xl p-6 border ${product.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`w-12 h-12 rounded-xl ${product.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${product.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${product.color}`}>{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.tagline}</p>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${product.color}`}>
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--mp-ink)" }}>
              Why{" "}
              <span style={{ color: "var(--mp-purple)" }}>Master Prose?</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Everything you need to write, edit, and publish at the highest level.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all">
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24" style={{ backgroundColor: "var(--mp-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--mp-ink)" }}>
              Loved by Writers{" "}
              <span style={{ color: "var(--mp-purple)" }}>Worldwide</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feeds Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--mp-ink)" }}>
              Follow Our{" "}
              <span style={{ color: "var(--mp-purple)" }}>Story</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Stay connected with the Master Prose community across all platforms.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {socialFeeds.map((feed) => (
              <div key={feed.platform} className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                {/* Platform header */}
                <div className={`${feed.bg} p-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <div className="text-white">
                      <SocialIcon platform={feed.platform} />
                    </div>
                    <span className="text-white font-semibold text-sm">{feed.platform}</span>
                  </div>
                </div>
                {/* Handle */}
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="text-xs text-gray-500 font-medium">{feed.handle}</div>
                </div>
                {/* Mock posts */}
                <div className="divide-y divide-gray-50">
                  {feed.posts.map((post, i) => (
                    <div key={i} className="px-4 py-2.5">
                      <p className="text-xs text-gray-600 leading-relaxed">{post}</p>
                    </div>
                  ))}
                </div>
                {/* Follow button */}
                <div className="p-4">
                  <a
                    href={feed.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center text-xs font-semibold py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Follow us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, var(--mp-ink) 0%, #1a0a3e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Master Your Prose?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join 50,000+ writers who are already creating their best work with Master Prose System.
          </p>
          <EmailCtaForm />
          <p className="text-xs text-gray-500 mt-4">No credit card required. 14-day free trial.</p>
        </div>
      </section>
    </div>
  );
}
