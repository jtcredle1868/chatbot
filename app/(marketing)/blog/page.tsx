import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    slug: "how-ai-is-revolutionizing-professional-writing",
    title: "How AI is Revolutionizing Professional Writing",
    excerpt: "Artificial intelligence is no longer a futuristic concept — it is an everyday tool reshaping how professionals craft, refine, and publish their work. We explore the transformation happening right now.",
    date: "Feb 15, 2025",
    author: "Sarah Chen",
    authorRole: "CEO",
    category: "Industry",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    featured: true,
  },
  {
    slug: "introducing-gutenberg-2-the-future-of-document-creation",
    title: "Introducing Gutenberg 2.0: The Future of Document Creation",
    excerpt: "We are thrilled to announce Gutenberg 2.0 — a complete reimagining of how professionals create, format, and publish documents. Here is everything that is new.",
    date: "Feb 8, 2025",
    author: "Elena Vasquez",
    authorRole: "CPO",
    category: "Product",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=80",
  },
  {
    slug: "10-ways-refinery-can-improve-your-editing-workflow",
    title: "10 Ways Refinery Can Improve Your Editing Workflow",
    excerpt: "Editing is where good writing becomes great writing. Discover ten practical ways the Refinery tool can dramatically speed up your editing process without sacrificing quality.",
    date: "Jan 28, 2025",
    author: "Marcus Williams",
    authorRole: "CTO",
    category: "Tips",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
  {
    slug: "behind-the-forge-how-we-built-our-content-generation-engine",
    title: "Behind the Forge: How We Built Our Content Generation Engine",
    excerpt: "A behind-the-scenes look at the engineering challenges, research breakthroughs, and design decisions that shaped Forge — our AI content generation engine.",
    date: "Jan 20, 2025",
    author: "Marcus Williams",
    authorRole: "CTO",
    category: "Engineering",
    readingTime: "10 min read",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
  },
  {
    slug: "scrybe-vs-traditional-word-processors-a-deep-dive",
    title: "Scrybe vs. Traditional Word Processors: A Deep Dive",
    excerpt: "What makes an AI-native writing tool fundamentally different from traditional word processors? We compare Scrybe to Microsoft Word, Google Docs, and Apple Pages head-to-head.",
    date: "Jan 12, 2025",
    author: "Elena Vasquez",
    authorRole: "CPO",
    category: "Comparison",
    readingTime: "9 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    slug: "the-art-of-prompting-getting-the-best-from-ai-writing-tools",
    title: "The Art of Prompting: Getting the Best from AI Writing Tools",
    excerpt: "Prompting is a skill — and mastering it unlocks dramatically better results from any AI writing tool. Learn the techniques that power users rely on every day.",
    date: "Jan 5, 2025",
    author: "Sarah Chen",
    authorRole: "CEO",
    category: "Tips",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
  },
];

const categories = ["All", "Industry", "Product", "Tips", "Engineering", "Comparison"];

const categoryColors: Record<string, string> = {
  Industry: "bg-blue-50 text-blue-700",
  Product: "bg-purple-50 text-purple-700",
  Tips: "bg-emerald-50 text-emerald-700",
  Engineering: "bg-orange-50 text-orange-700",
  Comparison: "bg-pink-50 text-pink-700",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, var(--mp-ink) 0%, #1a0a3e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--mp-gold)" }}>
            The Master Prose Blog
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">
            Insights for{" "}
            <span style={{ color: "var(--mp-violet)" }}>Better Writing</span>
          </h1>
          <p className="text-xl text-gray-300">
            Tips, tutorials, product news, and deep dives into the future of writing.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={cat === "All" ? { backgroundColor: "var(--mp-purple)" } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        {featured && (
          <div className="mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Featured</h2>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="relative h-64 lg:h-auto min-h-64">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${categoryColors[featured.category]}`}>
                      <Tag className="w-3 h-3" />
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {featured.readingTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{featured.author}</div>
                      <div className="text-xs text-gray-400">{featured.date}</div>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--mp-purple)" }}>
                      Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Post Grid */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Recent Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div>
                        <div className="text-xs font-semibold text-gray-700">{post.author}</div>
                        <div className="text-xs text-gray-400">{post.date}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
