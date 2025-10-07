import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VENT - Mood & Journal privacy policy. Learn how we protect your data and respect your privacy.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1A1D28' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-white">
          <p className="text-gray-300">
            <strong>Last Updated:</strong> January 6, 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              VENT - Mood & Journal ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Mood tracking data you voluntarily enter</li>
              <li>Journal entries and notes</li>
              <li>Usage data and app analytics</li>
              <li>Device information (device type, operating system)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Your information is used to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide and improve our mood tracking and journaling services</li>
              <li>Generate insights about your emotional patterns</li>
              <li>Improve app functionality and user experience</li>
              <li>Ensure the security and integrity of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Data Storage and Security</h2>
            <p className="text-gray-300 leading-relaxed">
              Your journal entries and mood data are stored securely and encrypted. We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Data Sharing</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. Your journal entries and mood data remain private and are never shared without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt-out of analytics tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              VENT is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-300 mt-2">
              Email: support@ventapp.xyz
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
