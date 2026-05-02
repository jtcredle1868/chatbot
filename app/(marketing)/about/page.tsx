import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Sarah founded Master Prose after a decade leading product teams at top-tier content platforms. She holds an MBA from Stanford and a BA in English Literature from Yale. She believes AI should amplify human creativity, not replace it.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Marcus Williams",
    role: "Chief Technology Officer",
    bio: "Marcus brings 15 years of engineering leadership from companies like Stripe and Figma. He architected the AI infrastructure that powers all four Master Prose products. He holds a PhD in Natural Language Processing from MIT.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Elena Vasquez",
    role: "Chief Product Officer",
    bio: "Elena spent eight years as a UX Research Lead before co-founding Master Prose. Her obsession with understanding writers' needs shapes every feature we ship. She holds a Masters in Human-Computer Interaction from Carnegie Mellon.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
];

const advisors = [
  {
    name: "Dr. James Patterson",
    role: "AI Research Advisor",
    bio: "Professor of Computer Science at Stanford. Former VP of AI Research at Google DeepMind.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Content Strategy Advisor",
    bio: "Founder of ContentLab, NYT bestselling author, and a leading voice in AI-assisted content creation.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Robert Klein",
    role: "Business Development Advisor",
    bio: "Former CMO at HubSpot and advisor to over 30 SaaS companies. Specializes in PLG growth strategies.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Lisa Huang",
    role: "Legal & Compliance Advisor",
    bio: "Partner at Andreessen Horowitz Legal. Specialist in AI regulation, IP law, and enterprise SaaS compliance.",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
  },
];

const values = [
  {
    title: "Writers First",
    desc: "Every decision we make starts with the writer. We obsess over user needs before technology.",
    icon: "✍️",
  },
  {
    title: "Augment, Don't Replace",
    desc: "AI at its best makes humans more capable. We build tools that enhance your voice, not override it.",
    icon: "🤝",
  },
  {
    title: "Radical Transparency",
    desc: "We communicate openly with our users, share our roadmap, and own our mistakes.",
    icon: "🔍",
  },
  {
    title: "Excellence in Craft",
    desc: "From code to copy to design — we hold ourselves to the highest standard in everything we build.",
    icon: "⭐",
  },
];

const timeline = [
  {
    year: "2021",
    title: "The Idea",
    desc: "Sarah, Marcus, and Elena meet at a YC founder retreat and discover a shared frustration: professional writing tools haven't evolved in decades.",
  },
  {
    year: "2022",
    title: "Building in Stealth",
    desc: "The team raised a $4M seed round and spent 18 months in deep development, obsessively testing with 200 beta writers.",
  },
  {
    year: "2023",
    title: "Public Beta",
    desc: "Master Prose launched in public beta to 10,000 waitlisted writers. Within 90 days, we hit 50,000 active users.",
  },
  {
    year: "2024",
    title: "Series A",
    desc: "We raised $22M Series A led by Sequoia to expand our product suite and grow our engineering team.",
  },
  {
    year: "2025",
    title: "Full Suite Launch",
    desc: "All four products — Refinery, Forge, Scrybe, and Gutenberg — launched together as the complete Master Prose System.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--mp-ink) 0%, #1a0a3e 100%)",
        }}
        className="py-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            We believe great writing changes the world
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Master Prose was born from a simple conviction: professional writers deserve
            tools as powerful as their ambitions. We&apos;re a team of engineers, writers, and
            researchers on a mission to make excellent writing accessible to everyone.
          </p>
        </div>
      </section>

      {/* Company story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6" style={{ color: "var(--mp-ink)" }}>
                Our story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In 2021, three people sat around a table at a founder retreat in San Francisco,
                  each venting the same frustration: the tools they used to write — whether
                  technical documentation, marketing copy, or long-form content — were stuck in
                  the 1990s.
                </p>
                <p>
                  Spellcheck. Autocorrect. The occasional grammar suggestion. Meanwhile, AI was
                  revolutionizing industries from healthcare to finance. Why hadn&apos;t someone
                  applied the same rigor to writing?
                </p>
                <p>
                  That conversation became Master Prose. Not another AI text generator, but a
                  complete professional writing system built around how writers actually work —
                  from the blank page all the way to published content.
                </p>
                <p>
                  Today we serve over 50,000 writers at companies like Notion, Stripe, Airbnb,
                  and The Atlantic. But our mission remains the same: help every professional
                  write at their absolute best.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  style={{ backgroundColor: "var(--mp-purple)" }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Work with us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: "var(--mp-purple)" }}
                    >
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 mt-2" style={{ backgroundColor: "var(--mp-violet)", opacity: 0.3 }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {item.year}
                    </div>
                    <h3 className="font-bold mb-1" style={{ color: "var(--mp-ink)" }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: "var(--mp-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "var(--mp-ink)" }}>
              What we believe
            </h2>
            <p className="text-gray-500 text-lg">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold mb-2 text-lg" style={{ color: "var(--mp-ink)" }}>
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "var(--mp-ink)" }}>
              Meet the founders
            </h2>
            <p className="text-gray-500 text-lg">The people who started it all.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((f) => (
              <div key={f.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-5">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: "var(--mp-ink)" }}>
                  {f.name}
                </h3>
                <div
                  className="text-sm font-semibold mb-4"
                  style={{ color: "var(--mp-purple)" }}
                >
                  {f.role}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20" style={{ backgroundColor: "var(--mp-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "var(--mp-ink)" }}>
              Advisory board
            </h2>
            <p className="text-gray-500 text-lg">World-class expertise guiding our growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={a.photo}
                    alt={a.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-bold mb-1" style={{ color: "var(--mp-ink)" }}>
                  {a.name}
                </h3>
                <div
                  className="text-xs font-semibold mb-3"
                  style={{ color: "var(--mp-purple)" }}
                >
                  {a.role}
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{a.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--mp-purple) 0%, #4c1d95 100%)",
        }}
        className="py-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Want to join our story?
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            We&apos;re always looking for talented people who share our love of writing and
            technology. Reach out — we&apos;d love to meet you.
          </p>
          <Link
            href="/contact"
            style={{ backgroundColor: "var(--mp-gold)" }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-900 hover:opacity-90 transition-opacity"
          >
            Get in touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
