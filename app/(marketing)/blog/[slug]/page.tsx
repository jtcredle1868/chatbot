import Image from "next/image";
import Link from "next/link";

const posts: Record<
  string,
  {
    title: string;
    author: string;
    authorRole: string;
    authorPhoto: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: string[];
  }
> = {
  "the-future-of-ai-writing": {
    title: "The Future of AI Writing: Where Human Creativity Meets Machine Intelligence",
    author: "Sarah Chen",
    authorRole: "CEO, Master Prose System",
    authorPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
    date: "April 28, 2025",
    readTime: "8 min read",
    category: "AI & Writing",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80",
    content: [
      "The question I get asked more than any other is some version of: 'Will AI replace writers?' My answer, after four years of building writing AI, is a confident no — but with an important caveat.",
      "AI will absolutely replace writers who refuse to adapt. But for those willing to evolve their craft, AI represents the most significant productivity amplifier in the history of writing.",
      "## What AI Can and Cannot Do",
      "Current AI writing tools excel at pattern recognition and text completion. They can generate first drafts, suggest edits, summarize documents, and maintain consistency across long documents. These are genuinely valuable capabilities.",
      "What AI cannot do — at least not yet — is original thinking. It cannot draw on lived experience, generate novel insights, or feel the weight of a perfectly chosen word the way a skilled writer does.",
      "## The Collaboration Model",
      "The most effective writers in 2025 treat AI as a writing partner. They use tools like Forge to break through blank-page paralysis, then bring their own expertise and perspective to refine the output.",
      "Think of it like having a brilliant but inexperienced research assistant. They can do enormous amounts of useful work, but still need the guidance of someone who knows what excellent output actually looks like.",
      "## What This Means for Your Career",
      "If you're a professional writer, the most important thing you can do right now is get deeply familiar with AI writing tools. Not to replace your judgment, but to multiply your output.",
      "The writers who will thrive in the next decade are those who master the art of AI collaboration — who learn to direct these tools with precision, edit their output with confidence, and infuse their own voice into every piece.",
      "## Looking Ahead",
      "Over the next five years, I expect AI writing tools to become significantly more capable at understanding context, maintaining long-range coherence, and adapting to individual writing styles.",
      "But the fundamental insight will remain: the best writing comes from human intelligence, amplified by artificial intelligence. Our job is to make sure that amplification is as powerful as possible.",
    ],
  },
  "how-to-write-faster-without-sacrificing-quality": {
    title: "How to Write Faster Without Sacrificing Quality",
    author: "Elena Vasquez",
    authorRole: "CPO, Master Prose System",
    authorPhoto: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&q=80",
    date: "April 18, 2025",
    readTime: "6 min read",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
    content: [
      "Here's a belief I want to challenge: that writing slowly is the same as writing carefully. It's not.",
      "In my experience studying hundreds of professional writers, the fastest writers are often the most thoughtful. They've built systems that let them focus their cognitive energy where it matters most.",
      "## 1. Separate Generation from Editing",
      "The biggest mistake most writers make is trying to write and edit simultaneously. Every time you stop to fix a sentence, you break your flow and double your time on task.",
      "Write first. Edit after. This single habit can cut your writing time in half.",
      "## 2. Use Templates for Structure",
      "For recurring content types — blog posts, emails, reports — build and use templates. You shouldn't be figuring out structure from scratch every time.",
      "## 3. Write to a Reader",
      "Vague writing is slow writing. When you have a specific person in mind — their knowledge level, their questions, their skepticism — the words come faster because you're having a conversation, not performing.",
      "## 4. Embrace the Ugly First Draft",
      "Give yourself explicit permission to write badly in your first draft. Your job in draft one is to get ideas onto the page. Refinement comes later.",
      "## 5. Use AI for the Right Things",
      "AI tools like Forge are best used for breaking through blank-page paralysis and generating structural options. Don't use AI to replace your thinking — use it to accelerate your starting point.",
    ],
  },
};

// Generate pages for all slugs
export function generateStaticParams() {
  return [
    { slug: "the-future-of-ai-writing" },
    { slug: "how-to-write-faster-without-sacrificing-quality" },
    { slug: "introducing-forge-ai-content-generation" },
    { slug: "seo-writing-ai-era" },
    { slug: "building-a-content-team-from-scratch" },
    { slug: "refinery-editing-best-practices" },
  ];
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = posts[slug] ?? {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    author: "Master Prose Team",
    authorRole: "Master Prose System",
    authorPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
    date: "2025",
    readTime: "5 min read",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    content: [
      "This post is coming soon. Check back shortly for the full article.",
      "In the meantime, explore our other posts or reach out to us directly.",
    ],
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 lg:h-96">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <div className="mb-3">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: "var(--mp-purple)" }}
              >
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-snug">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Meta */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Image
              src={post.authorPhoto}
              alt={post.author}
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-sm" style={{ color: "var(--mp-ink)" }}>
                {post.author}
              </div>
              <div className="text-gray-400 text-xs">{post.authorRole}</div>
            </div>
            <div className="ml-auto flex items-center gap-4 text-gray-400 text-sm">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold mt-10 mb-4"
                    style={{ color: "var(--mp-ink)" }}
                  >
                    {block.slice(3)}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-5 text-lg">
                  {block}
                </p>
              );
            })}
          </div>

          {/* Share / CTA */}
          <div
            className="mt-16 p-8 rounded-2xl text-center"
            style={{ backgroundColor: "rgba(109,40,217,0.07)" }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: "var(--mp-ink)" }}>
              Ready to write better?
            </h3>
            <p className="text-gray-500 mb-5 text-sm">
              Try Master Prose free and see why 50,000 writers trust our suite.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                href="/chat"
                style={{ backgroundColor: "var(--mp-purple)" }}
                className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Start for free
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl border text-sm font-semibold hover:bg-gray-50 transition-colors"
                style={{
                  borderColor: "var(--mp-purple)",
                  color: "var(--mp-purple)",
                }}
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--mp-purple)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
