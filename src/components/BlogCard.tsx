import Link from "next/link";
import Image from "next/image";
import { type BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1">
        <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🌿</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              {post.tags[0]}
            </span>
            <span className="text-xs text-gray-500">
              {post.readTime}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 mb-4 text-sm leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {post.author.name}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  })}
                </p>
              </div>
            </div>
            
            <span className="text-green-600 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}