"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Leaves?",
    answer: "Leaves is an app built to help you quit weed and stay on track. It includes a sobriety timer to mark your progress, guided meditations for cravings, recovery stats to keep you motivated, and a community of people on the same journey. Whether you're just starting out or already building long-term habits, Leaves gives you the tools and support you need."
  },
  {
    question: "How does Leaves protect my privacy?",
    answer: "Your privacy is our top priority. All personal data is encrypted and stored securely. We never share your information with third parties for marketing purposes. Your sobriety journey remains completely private, and you can delete your data at any time through the app settings."
  },
  {
    question: "Can I use Leaves offline?",
    answer: "Yes! Core features like day tracking, journaling, and saved meditations work offline. Your data syncs automatically when you reconnect to the internet. Only community features and new content downloads require an active connection."
  },
  {
    question: "Is Leaves free?",
    answer: "Yes, you can download and use Leaves for free to get started. For best results, we recommend upgrading."
  },
  {
    question: "Is there an Android app?",
    answer: "Soon! Email us to join the waitlist!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 text-[#1e1d1b]">Leaves FAQ</h1>
        <p className="text-center text-gray-600 mb-12">Everything you need to know about your recovery journey</p>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center"
              >
                <span className="text-lg font-medium text-[#1e1d1b]">{item.question}</span>
                <span className="text-2xl text-gray-400 transition-transform duration-200" style={{
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>
                  {openIndex === index ? '×' : '+'}
                </span>
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#1e1d1b]">Still have questions?</h2>
          <p className="text-gray-700 mb-6">
            We're here to help! Reach out to our support team anytime.
          </p>
          <a
            href="mailto:support@quitleaves.xyz"
            className="inline-block px-6 py-3 bg-[#1db584] text-white rounded-lg hover:bg-[#1aa074] transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
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