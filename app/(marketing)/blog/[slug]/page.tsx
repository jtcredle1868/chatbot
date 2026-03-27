import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";

const blogData: Record<string, {
  title: string;
  date: string;
  author: string;
  authorRole: string;
  authorPhoto: string;
  category: string;
  readingTime: string;
  image: string;
  content: string;
}> = {
  "how-ai-is-revolutionizing-professional-writing": {
    title: "How AI is Revolutionizing Professional Writing",
    date: "February 15, 2025",
    author: "Sarah Chen",
    authorRole: "CEO & Co-Founder",
    authorPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    category: "Industry",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    content: `
Artificial intelligence has moved from science fiction into the everyday toolkit of professional writers. In boardrooms, newsrooms, and home offices around the world, writers are discovering that AI does not replace their voice — it amplifies it.

## The Old Way Was Exhausting

For decades, the professional writing process looked roughly the same: research, outline, draft, revise, revise again, send to an editor, revise a third time, then publish. Each stage was manual, time-consuming, and dependent on access to expensive human resources like editors, researchers, and fact-checkers.

The result? Great writing was expensive. Smaller organizations, independent creators, and non-native speakers were locked out of the tools that could make their writing shine.

## What AI Changes

Modern AI writing tools — built on large language models trained on vast corpora of human text — are now sophisticated enough to assist with nearly every stage of the writing process.

**Research and ideation.** Tools like Forge can generate outlines, suggest angles, and surface relevant information in seconds. What used to take hours of background research can now serve as a starting point in minutes.

**Drafting.** AI can help overcome the paralysis of the blank page. By generating rough drafts from prompts, writers can shift from creator to editor — a much easier cognitive mode for many.

**Editing and refinement.** This is where tools like Refinery shine. Beyond simple grammar checks, modern AI can analyze tone, suggest clarity improvements, flag passive voice, and even ensure consistency with a brand voice guide.

**Publishing and formatting.** With tools like Gutenberg, the final steps of formatting for different platforms — web, PDF, print, e-book — can be automated almost entirely.

## The Human Element Remains Essential

It would be a mistake to read all this as a replacement narrative. The writers getting the most value from AI tools are those who treat AI as a skilled collaborator, not a ghostwriter.

The best AI writing output still requires a human to:
- Provide the original insight and perspective
- Make editorial judgments about what to include and exclude
- Ensure factual accuracy
- Apply the brand or personal voice that makes content distinctive

AI handles the mechanical aspects of writing. Humans provide the soul.

## What This Means for Professionals

For content teams, the implications are significant. Teams that have adopted AI writing tools are reporting:

- **2-3x faster content production** without sacrificing quality
- **Reduced burnout** as repetitive editing tasks are automated
- **More consistent brand voice** across large volumes of content
- **Better SEO performance** through AI-assisted optimization

For individual writers, the playing field is leveling. A freelance blogger with access to tools like Master Prose System can now produce content at a quality level that previously required a full editorial team.

## The Ethical Dimension

No discussion of AI writing would be complete without addressing the ethical questions. Who owns AI-assisted content? How transparent should writers be about using AI tools? What happens to human editorial jobs?

These are real questions without simple answers. At Master Prose System, our position is clear: AI writing tools should augment human creativity, not replace the human writers who deserve credit for their work. Our tools are designed to make writers better, not to make writers irrelevant.

## Looking Ahead

The pace of improvement in AI writing technology shows no signs of slowing. Models are getting better at understanding context, maintaining voice consistency over long documents, and handling specialized domains like legal or medical writing.

For professional writers, the choice is not between embracing AI and ignoring it. The choice is between being an early adopter who builds a competitive advantage or a late mover who has to catch up.

The revolution is happening. The best time to get on board was yesterday. The second best time is now.
    `,
  },
};

const relatedPosts = [
  {
    slug: "10-ways-refinery-can-improve-your-editing-workflow",
    title: "10 Ways Refinery Can Improve Your Editing Workflow",
    category: "Tips",
    date: "Jan 28, 2025",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
  },
  {
    slug: "the-art-of-prompting-getting-the-best-from-ai-writing-tools",
    title: "The Art of Prompting: Getting the Best from AI Writing Tools",
    category: "Tips",
    date: "Jan 5, 2025",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80",
  },
  {
    slug: "scrybe-vs-traditional-word-processors-a-deep-dive",
    title: "Scrybe vs. Traditional Word Processors: A Deep Dive",
    category: "Comparison",
    date: "Jan 12, 2025",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80",
  },
];

const defaultPost = blogData["how-ai-is-revolutionizing-professional-writing"];

function renderContent(content: string) {
  return content.trim().split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("**") || block.includes("**")) {
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-gray-700 leading-relaxed mb-4">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="font-semibold text-gray-900">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-gray-700">
          {items.map((item, j) => (
            <li key={j}>{item.replace("- ", "")}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-gray-700 leading-relaxed mb-4">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData[slug] || defaultPost;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-700 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Article header */}
      <article>
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-xs font-semibold">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            {post.readingTime}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
          <Image
            src={post.authorPhoto}
            alt={post.author}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-gray-900">{post.author}</div>
            <div className="text-sm text-gray-500">{post.authorRole}</div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose-like">
          {renderContent(post.content)}
        </div>
      </article>

      {/* Related posts */}
      <section className="mt-16 pt-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((related) => (
            <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all">
                <div className="relative h-36">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                    {related.category}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mt-2 mb-1 group-hover:text-purple-700 transition-colors leading-snug">
                    {related.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{related.date}</span>
                    <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
