import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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

      <div className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full flex items-center justify-center">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-5xl font-bold text-center mb-8 text-[#1e1d1b]">
            customer support
          </h1>
          
          {/* Description */}
          <p className="text-gray-700 mb-8 leading-relaxed">
            At Leaves, we're here to support you every step of the way. If you have any questions, concerns, or need assistance with our platform, we're just an email away.
          </p>
          
          {/* Email */}
          <div className="mb-8">
            <p className="text-lg font-semibold text-[#1e1d1b]">
              Email: <a href="mailto:support@quitleaves.xyz" className="text-[#1db584] hover:underline">support@quitleaves.xyz</a>
            </p>
          </div>
          
          {/* Response time */}
          <p className="text-gray-700 leading-relaxed">
            We understand the importance of timely assistance, and our dedicated customer support team will do their best to get back to you within 48 hours.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="/blog" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Blog</a>
            <a href="/privacy" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Privacy</a>
            <a href="/terms" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Terms</a>
            <a href="/contact" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Contact</a>
            <a href="/faq" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">FAQ</a>
          </nav>
          <p className="text-center text-gray-500 text-xs">
            © 2025 Leaves. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}