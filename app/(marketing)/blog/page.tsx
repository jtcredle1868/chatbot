import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    slug: "the-future-of-ai-writing",
    title: "The Future of AI Writing: Where Human Creativity Meets Machine Intelligence",
    excerpt:
      "AI writing tools are evolving fast. But the best ones won't replace writers — they'll become their most powerful collaborators. Here's what the next five years look like.",
    date: "April 28, 2025",
    author: "Sarah Chen",
    readTime: "8 min read",
    category: "AI & Writing",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80",
  },
  {
    slug: "how-to-write-faster-without-sacrificing-quality",
    title: "How to Write Faster Without Sacrificing Quality",
    excerpt:
      "Speed and quality aren't opposites. With the right system, you can double your output while raising your standards. Here are the techniques that work.",
    date: "April 18, 2025",
    author: "Elena Vasquez",
    readTime: "6 min read",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
  },
  {
    slug: "introducing-forge-ai-content-generation",
    title: "Introducing Forge: AI Content Generation Built for Professionals",
    excerpt:
      "Today we're officially launching Forge, our AI content generation product. Here's everything you need to know about how it works and who it's built for.",
    date: "April 10, 2025",
    author: "Marcus Williams",
    readTime: "5 min read",
    category: "Product Update",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
  },
  {
    slug: "seo-writing-ai-era",
    title: "SEO Writing in the AI Era: What Still Works and What Doesn't",
    excerpt:
      "Search engines are changing. AI-generated content is flooding the web. Here's a frank guide to writing for SEO in 2025 without losing your humanity.",
    date: "March 29, 2025",
    author: "Sarah Chen",
    readTime: "10 min read",
    category: "Content Strategy",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80",
  },
  {
    slug: "building-a-content-team-from-scratch",
    title: "Building a Content Team from Scratch: A Founder's Playbook",
    excerpt:
      "You don't need a big budget to build a world-class content operation. Here's the exact process we used to go from zero to 50,000 monthly readers in 12 months.",
    date: "March 15, 2025",
    author: "Elena Vasquez",
    readTime: "12 min read",
    category: "Team Building",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    slug: "refinery-editing-best-practices",
    title: "Getting the Most Out of Refinery: 10 Editing Best Practices",
    excerpt:
      "Refinery isn't just a spellchecker. It's a full editing co-pilot. Here are the ten techniques our power users rely on to produce consistently polished writing.",
    date: "March 3, 2025",
    author: "Marcus Williams",
    readTime: "7 min read",
    category: "Tutorials",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
  },
];

const categories = ["All", "AI & Writing", "Productivity", "Product Update", "Content Strategy", "Tutorials"];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--mp-ink) 0%, #1a0a3e 100%)",
        }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            The Master Prose Blog
          </h1>
          <p className="text-xl text-gray-300">
            Insights on AI writing, content strategy, product updates, and the craft
            of professional prose.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-4 no-scrollbar">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={
                  i === 0
                    ? {
                        backgroundColor: "var(--mp-purple)",
                        color: "white",
                      }
                    : {
                        backgroundColor: "transparent",
                        color: "var(--mp-muted)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-12">
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-64 lg:h-auto min-h-64">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(109,40,217,0.1)",
                      color: "var(--mp-purple)",
                    }}
                  >
                    {posts[0].category}
                  </span>
                  <span className="text-gray-400 text-xs">Featured</span>
                </div>
                <h2
                  className="text-2xl font-extrabold mb-4 group-hover:text-purple-700 transition-colors"
                  style={{ color: "var(--mp-ink)" }}
                >
                  {posts[0].title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{posts[0].author}</span>
                  <span>·</span>
                  <span>{posts[0].date}</span>
                  <span>·</span>
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(109,40,217,0.1)",
                        color: "var(--mp-purple)",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-lg mb-2 leading-snug group-hover:text-purple-700 transition-colors"
                    style={{ color: "var(--mp-ink)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{ backgroundColor: "var(--mp-cream)" }}
        className="py-20"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: "var(--mp-ink)" }}>
            Never miss a post
          </h2>
          <p className="text-gray-500 mb-8">
            Join our newsletter for weekly writing insights and product updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-purple-400"
            />
            <button
              type="submit"
              style={{ backgroundColor: "var(--mp-purple)" }}
              className="px-7 py-3.5 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
