import Image from "next/image";
import { Heart, Lightbulb, Globe } from "lucide-react";

const founders = [
  {
    name: "Sarah Chen",
    title: "CEO & Co-Founder",
    bio: "Former VP of Product at Adobe. Stanford MBA. 15 years in creative software.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Marcus Williams",
    title: "CTO & Co-Founder",
    bio: "Ex-Google AI researcher. PhD in NLP from MIT. Built language models since 2015.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Elena Vasquez",
    title: "CPO & Co-Founder",
    bio: "Award-winning UX designer. Previously led design at Notion and Grammarly.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
];

const advisors = [
  {
    name: "Dr. James Patterson",
    title: "Author & Writing Coach",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Dr. Priya Sharma",
    title: "AI Ethics, Stanford University",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Robert Klein",
    title: "Publisher, Penguin Random House",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Lisa Huang",
    title: "Marketing Director, HubSpot",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
  },
];

const values = [
  {
    icon: Heart,
    name: "Quality",
    description: "We believe every word matters. Our tools are built to help writers achieve the highest possible quality in their work, not just the fastest output.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Lightbulb,
    name: "Innovation",
    description: "We push the boundaries of what AI can do for writers. From advanced NLP to intuitive interfaces, we are always building the next thing that changes the game.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Globe,
    name: "Accessibility",
    description: "Professional-grade writing tools should not be reserved for elite institutions. We work to make world-class AI writing assistance available to every creator.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

const timeline = [
  { year: "2022", event: "Founded in San Francisco by Sarah, Marcus, and Elena." },
  { year: "2023", event: "Launched Refinery and Forge to private beta. 5,000 waitlist sign-ups in 48 hours." },
  { year: "2024", event: "Public launch. Scrybe and Gutenberg added to the suite. Series A funding closed." },
  { year: "2025", event: "50,000+ active writers. Enterprise partnerships with Fortune 500 companies." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, var(--mp-ink) 0%, #1a0a3e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--mp-gold)" }}>
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Built by Writers,{" "}
            <span style={{ color: "var(--mp-violet)" }}>for Writers</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Master Prose System was born from a simple belief: AI should empower writers, not replace them. We set out to build the tools we always wished existed.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--mp-ink)" }}>
              Our Mission
            </h2>
            <p className="text-2xl font-medium mb-6" style={{ color: "var(--mp-purple)" }}>
              &ldquo;To democratize professional-quality writing through AI.&rdquo;
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Every great idea deserves to be expressed perfectly. For too long, polished, professional writing was a skill locked behind years of training, expensive editors, and time most people simply do not have.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Master Prose System changes that. By pairing the creativity of human writers with the power of AI, we help anyone write with the clarity, voice, and impact of a seasoned professional.
            </p>
          </div>
          {/* Timeline */}
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: "var(--mp-purple)" }}
                >
                  {item.year}
                </div>
                <div className="flex-1 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20" style={{ backgroundColor: "var(--mp-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--mp-ink)" }}>
              Meet the Founders
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Three people who left big tech to build the writing suite they always wanted.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                  <p className="text-sm font-medium mb-3" style={{ color: "var(--mp-purple)" }}>
                    {founder.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--mp-ink)" }}>
              Advisory Board
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Guided by some of the sharpest minds in writing, publishing, and AI.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-purple-200 transition-colors">
                  <Image
                    src={advisor.photo}
                    alt={advisor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{advisor.name}</h3>
                <p className="text-sm text-gray-500">{advisor.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, var(--mp-ink) 0%, #1a0a3e 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className={`w-12 h-12 rounded-xl ${value.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
