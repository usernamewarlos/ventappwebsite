import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Get answers to common questions about TBreak app. Learn about privacy, features, pricing, and how our cannabis recovery app helps you quit weed successfully.",
  openGraph: {
    title: "FAQ - TBreak App",
    description: "Everything you need to know about using TBreak to quit cannabis and track your sobriety journey.",
    url: "https://leavesapp.com/faq",
  },
  alternates: {
    canonical: "https://leavesapp.com/faq",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is TBreak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TBreak is an app built to help you quit weed and stay on track. It includes a sobriety timer to mark your progress, guided meditations for cravings, recovery stats to keep you motivated, and a community of people on the same journey."
      }
    },
    {
      "@type": "Question",
      "name": "How does TBreak protect my privacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your privacy is our top priority. All personal data is encrypted and stored securely. We never share your information with third parties for marketing purposes. Your sobriety journey remains completely private, and you can delete your data at any time through the app settings."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use TBreak offline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Core features like day tracking, journaling, and saved meditations work offline. Your data syncs automatically when you reconnect to the internet. Only community features and new content downloads require an active connection."
      }
    },
    {
      "@type": "Question",
      "name": "Is TBreak free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can download and use TBreak for free to get started. For best results, we recommend upgrading."
      }
    },
    {
      "@type": "Question",
      "name": "Is there an Android app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soon! Email us to join the waitlist!"
      }
    }
  ]
};

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <FAQClient />
    </>
  );
}