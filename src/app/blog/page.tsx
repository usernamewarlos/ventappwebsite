import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors mb-8"
          >
            <span className="mr-2">←</span>
            Back to Home
          </Link>
          
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
            Join thousands who have successfully quit cannabis with Leaves. 
            Track your progress, connect with others, and reclaim your life.
          </p>
          <Link
            href="https://apps.apple.com/app/id6738099367"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Download Leaves App
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}