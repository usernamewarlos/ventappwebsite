import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leavesapp.com"),
  title: {
    default: "Leaves - Quit Weed & Cannabis App | Track Your Sobriety Journey",
    template: "%s | Leaves App"
  },
  description: "Break free from cannabis dependency with Leaves. Track sobriety milestones, manage withdrawal symptoms, get daily motivation, and connect with a supportive community. Start your recovery journey today.",
  keywords: ["quit weed", "quit cannabis", "sobriety tracker", "addiction recovery", "marijuana withdrawal", "cannabis dependency", "quit smoking weed", "sobriety app", "recovery support", "habit tracker"],
  authors: [{ name: "Leaves App Team" }],
  creator: "Leaves App",
  publisher: "Leaves App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Leaves - Quit Weed & Cannabis App",
    description: "Your journey to sobriety starts here. Track progress, manage cravings, and build healthy habits.",
    url: "https://leavesapp.com",
    siteName: "Leaves App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leaves - Quit Weed App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaves - Quit Weed & Cannabis App",
    description: "Break free from cannabis dependency. Track your sobriety journey with Leaves.",
    images: ["/og-image.png"],
    creator: "@leavesapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/SplashLogo.png",
    apple: "/SplashLogo.png",
    shortcut: "/SplashLogo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://leavesapp.com",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Leaves App",
  "url": "https://leavesapp.com",
  "logo": "https://leavesapp.com/SplashLogo.png",
  "description": "Leaves helps people quit cannabis and build a healthier lifestyle through tracking, support, and science-backed recovery tools.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "support@leavesapp.com",
    "url": "https://leavesapp.com/contact"
  },
  "sameAs": [
    "https://twitter.com/leavesapp",
    "https://instagram.com/leavesapp",
    "https://facebook.com/leavesapp"
  ]
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Leaves App",
  "url": "https://leavesapp.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://leavesapp.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const jsonLdMobileApp = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Leaves - Quit Weed",
  "operatingSystem": "iOS",
  "applicationCategory": "HealthApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2847"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Track your cannabis sobriety journey, manage withdrawal symptoms, and connect with a supportive community.",
  "screenshot": [
    "https://leavesapp.com/screenshot1.png",
    "https://leavesapp.com/screenshot2.png",
    "https://leavesapp.com/screenshot3.png"
  ],
  "author": {
    "@type": "Organization",
    "name": "Leaves App",
    "url": "https://leavesapp.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMobileApp) }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
        <Analytics />
      </body>
    </html>
  );
}
