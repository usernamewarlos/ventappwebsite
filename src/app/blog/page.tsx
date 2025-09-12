import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="w-full py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/SplashLogo.png"
              alt="TBreak app icon"
              width={40}
              height={40}
              className="mr-2 rounded-[22%]"
            />
            <Image
              src="/TBreakLogo.png"
              alt="TBreak"
              width={100}
              height={30}
              className="object-contain"
              style={{ filter: "brightness(0) saturate(100%) invert(44%) sepia(85%) saturate(1352%) hue-rotate(126deg) brightness(96%) contrast(87%)" }}
            />
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors mb-8"
        >
          <span className="mr-2">←</span>
          Back to Home
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Insights on breaking free from cannabis dependency and reclaiming your life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-16 text-center py-12 border-t border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands who have successfully quit cannabis with TBreak. 
            Track your progress, connect with others, and reclaim your life.
          </p>
          <Link
            href="https://apps.apple.com/app/id6738099367"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Download TBreak App
            <span>→</span>
          </Link>
        </div>
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
            © 2025 TBreak. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}