import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VENT - Mood & Journal | Track Your Emotions & Mental Wellness",
  description: "Express yourself with VENT - Mood & Journal. Track your moods, journal your thoughts, and understand your emotional patterns for better mental wellness.",
  openGraph: {
    title: "VENT - Mood & Journal",
    description: "Track your moods and journal your thoughts for better mental wellness",
    url: "https://leavesapp.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VENT - Mood & Journal App",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://leavesapp.com"
    }
  ]
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VENT - Mood & Journal",
  "operatingSystem": "iOS 12.0 or later",
  "applicationCategory": "HealthApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2847",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "VENT App"
  },
  "downloadUrl": "https://apps.apple.com/us/app/tbreak-quit-weed/id6751524324",
  "featureList": [
    "Mood Tracking",
    "Journal Entries",
    "Emotion Analysis",
    "Daily Reflection",
    "Mental Wellness Insights",
    "Progress Tracking",
    "Privacy-Focused"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <div className="min-h-screen" style={{ backgroundColor: '#1A1D28' }}>
      {/* Header */}
      <nav className="w-full py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center">
            <Image
              src="/AppIconImage.png"
              alt="VENT app icon"
              width={40}
              height={40}
              className="mr-2 rounded-[22%]"
            />
            <Image
              src="/TBreakLogo.png"
              alt="VENT"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <header className="text-center py-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Express yourself, understand yourself
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: '#E85A4F' }}>
            Track your moods, journal your journey
          </h2>

          {/* App Store Button */}
          <div className="flex items-center justify-center mb-10">
            <a
              href="https://apps.apple.com/us/app/tbreak-quit-weed/id6751524324"
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
            src="/webscreenshot.png"
            alt="VENT App Screenshot"
            width={300}
            height={650}
            className="object-contain"
          />
        </main>
        {/* Features Section */}
        <section className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#E85A4F' }}>
            Your emotional wellness companion
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">😊</div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#E85A4F' }}>Track your moods</h3>
              <p className="text-white text-sm leading-relaxed">
                Record how you're feeling and discover emotional patterns
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#E85A4F' }}>Journal your thoughts</h3>
              <p className="text-white text-sm leading-relaxed">
                Express yourself freely in a safe, private space
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#E85A4F' }}>Understand yourself</h3>
              <p className="text-white text-sm leading-relaxed">
                Gain insights into your mental wellness journey
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start your wellness journey today
          </h2>
          <p className="text-lg text-white mb-8">
            Join others tracking their emotional wellness with VENT
          </p>

          <div className="flex items-center justify-center">
            <a
              href="https://apps.apple.com/us/app/tbreak-quit-weed/id6751524324"
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
        <footer className="py-8 border-t border-gray-700">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="/privacy" className="text-white hover:text-gray-300 transition-colors text-sm">Privacy</a>
            <a href="/terms" className="text-white hover:text-gray-300 transition-colors text-sm">Terms</a>
            <a href="/contact" className="text-white hover:text-gray-300 transition-colors text-sm">Contact</a>
            <a href="/faq" className="text-white hover:text-gray-300 transition-colors text-sm">FAQ</a>
          </nav>
          <p className="text-center text-white text-xs">
            © 2025 VENT. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
    </>
  );
}
