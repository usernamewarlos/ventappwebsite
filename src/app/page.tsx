import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfaec]">
      {/* Header */}
      <nav className="w-full py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center">
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
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <header className="text-center py-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1d1b] mb-3 leading-tight">
            Ready to quit weed for good?
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1db584] mb-8 leading-tight">
            Let's turn over a new leaf.
          </h2>

          {/* App Store Button */}
          <div className="flex items-center justify-center mb-10">
            <a
              href="https://apps.apple.com/us/app/leaves-quit-weed/id6478061869"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://ext.same-assets.com/2477531973/2387476760.webp"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </header>

        {/* Phone Screenshot */}
        <main className="flex justify-center mb-12">
          <Image
            src="/leaves-screenshot.png"
            alt="LEAVES App Screenshot"
            width={300}
            height={650}
            className="object-contain"
          />
        </main>
        {/* Features Section */}
        <section className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e1d1b] mb-10">
            Your journey to sobriety starts here
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-lg font-semibold text-[#1e1d1b] mb-3">Track your progress</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Count your sober days and celebrate milestones
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🧘</div>
              <h3 className="text-lg font-semibold text-[#1e1d1b] mb-3">Manage cravings</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Meditation and breathing exercises when you need them
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-lg font-semibold text-[#1e1d1b] mb-3">Build new habits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Replace old patterns with healthy alternatives
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1d1b] mb-4">
            Ready to start your recovery?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands who've successfully quit cannabis
          </p>

          <div className="flex items-center justify-center">
            <a
              href="https://apps.apple.com/us/app/leaves-quit-weed/id6478061869"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://ext.same-assets.com/2477531973/2387476760.webp"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Blog</a>
            <a href="/privacy" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Privacy</a>
            <a href="/terms" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Terms</a>
            <a href="/contact" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Contact</a>
            <a href="/faq" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">FAQ</a>
          </nav>
          <p className="text-center text-gray-500 text-xs">
            © 2025 Leaves. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
