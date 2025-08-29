import { getBlogPost, getRelatedPosts, blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 2);

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements = [];
    let currentList: React.ReactNode[] = [];
    let listType: "ul" | "ol" | null = null;

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListComponent = listType === "ul" ? "ul" : "ol";
        elements.push(
          <ListComponent key={elements.length} className={listType === "ul" ? "list-disc" : "list-decimal"}>
            {currentList.map((item, idx) => (
              <li key={idx} className="ml-6 mb-2 text-gray-700 leading-relaxed">
                {item}
              </li>
            ))}
          </ListComponent>
        );
        currentList = [];
        listType = null;
      }
    };

    for (const line of lines) {
      if (line.startsWith("# ")) {
        flushList();
        elements.push(
          <h1 key={elements.length} className="text-4xl font-bold text-gray-900 mb-6 mt-8">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={elements.length} className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={elements.length} className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            {line.substring(4)}
          </h3>
        );
      } else if (line.match(/^!\[.*\]\(.*\)$/)) {
        flushList();
        const match = line.match(/^!\[(.*)\]\((.*)\)$/);
        if (match) {
          const [, alt, src] = match;
          elements.push(
            <div key={elements.length} className="my-8 flex justify-center">
              <img 
                src={src} 
                alt={alt} 
                className="w-1/2 rounded-lg shadow-md"
              />
            </div>
          );
        }
      } else if (line.match(/^\[IMAGE_\d+\]$/)) {
        flushList();
        elements.push(
          <div key={elements.length} className="my-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl mb-2 block">🌿</span>
              <span className="text-gray-500 text-sm">Image placeholder - {line}</span>
            </div>
          </div>
        );
      } else if (line.startsWith("- ")) {
        listType = "ul";
        const content = line.substring(2);
        const parts = content.split("**");
        const formatted = parts.map((part, idx) => 
          idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
        );
        currentList.push(<>{formatted}</>);
      } else if (/^\d+\.\s/.test(line)) {
        listType = "ol";
        const content = line.replace(/^\d+\.\s/, "");
        const parts = content.split("**");
        const formatted = parts.map((part, idx) => 
          idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
        );
        currentList.push(<>{formatted}</>);
      } else if (line.trim() === "") {
        flushList();
      } else {
        flushList();
        const parts = line.split("**");
        const formatted = parts.map((part, idx) => 
          idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
        );
        elements.push(
          <p key={elements.length} className="text-gray-700 leading-relaxed mb-4">
            {formatted}
          </p>
        );
      }
    }
    
    flushList();
    return elements;
  };

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="w-full py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/SplashLogo.png"
              alt="Leaves app icon"
              width={40}
              height={40}
              className="mr-2 rounded-[22%]"
            />
            <Image
              src="/LeavesLogo.png"
              alt="Leaves"
              width={100}
              height={30}
              className="object-contain"
              style={{ filter: "brightness(0) saturate(100%) invert(44%) sepia(85%) saturate(1352%) hue-rotate(126deg) brightness(96%) contrast(87%)" }}
            />
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors mb-8"
        >
          <span className="mr-2">←</span>
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
              {post.tags[0]}
            </span>
            <span className="text-sm text-gray-500">
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 pb-8 border-b border-gray-100">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-900">
                {post.author.name}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
        </div>

        <div className="mt-16 p-8 bg-green-50 rounded-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to quit cannabis?
          </h3>
          <p className="text-gray-700 mb-6">
            Join thousands who have successfully broken free with the Leaves app. 
            Track your progress, get support, and reclaim your life.
          </p>
          <Link
            href="https://apps.apple.com/app/id6738099367"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Download Leaves Now
            <span>→</span>
          </Link>
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/blog" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Blog</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Privacy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Terms</Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Contact</Link>
            <Link href="/faq" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">FAQ</Link>
          </nav>
          <p className="text-center text-gray-500 text-xs">
            © 2025 Leaves. All rights reserved.
          </p>
        </div>
      </footer>
    </article>
  );
}