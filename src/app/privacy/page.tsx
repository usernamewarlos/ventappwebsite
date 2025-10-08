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
        <h1 className="text-4xl font-bold text-white mb-8">VENT Privacy Policy</h1>

        <div className="space-y-6 text-white">
          <p className="text-gray-300">
            <strong>Last Updated:</strong> October 8, 2025
          </p>

          <p className="text-gray-300 leading-relaxed">
            VENT, operated by SixForty Labs LLC, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information within the VENT mobile app.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              VENT collects minimal data required to provide anonymous venting, journaling, and community support features:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Anonymous user content (vent posts and comments)</li>
              <li>App usage and performance data via Firebase Analytics and Crashlytics</li>
              <li>Device information (model, OS version) for crash reporting</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              VENT does not collect names, email addresses, or any personally identifying information unless voluntarily provided for customer support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>2. How We Use Data</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Collected data is used solely to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide and improve app functionality</li>
              <li>Analyze engagement and performance</li>
              <li>Diagnose and resolve app crashes or bugs</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              We do not sell or share your data for advertising or tracking purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>3. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              VENT uses Google Firebase (Analytics, Crashlytics, Performance Monitoring) to help improve stability and user experience. These services may collect aggregated, anonymized data that cannot identify you personally.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>4. Data Retention & Security</h2>
            <p className="text-gray-300 leading-relaxed">
              All anonymous data is stored securely and retained only as long as needed to operate or improve the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>5. User Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              If you contact us directly, you may request deletion of your messages or any associated data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>6. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions or concerns about this Privacy Policy, contact us at:
            </p>
            <p className="text-gray-300 mt-2">
              📧 support@ventapp.xyz
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
