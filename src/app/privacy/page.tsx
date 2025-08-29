import Image from "next/image";
import Link from "next/link";

export default function Privacy() {
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
        <h1 className="text-5xl font-bold text-center mb-8 text-[#1e1d1b]">privacy policy</h1>
        
        <p className="text-gray-500 text-center mb-12 italic">last updated: August 27, 2025</p>

        <div className="prose prose-lg max-w-none">
          <p className="mb-8 text-gray-700">
            At Leaves, your privacy is our priority. This Privacy Policy explains what information we collect, how we use it, and the steps we take to protect it. By using Leaves, you agree to the practices described below.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">1. Information We Collect</h2>
          <p className="mb-4 text-gray-700">We collect the following categories of information when you use Leaves:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">1.1 Personal Information</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Account details such as name, email address, and age.</li>
            <li>Health-related information voluntarily provided by you, such as cannabis use history, smoking patterns, and sobriety goals.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">1.2 Payment Information</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Subscription purchases are processed securely by Apple App Store or Google Play. Leaves itself does not store or process your full payment details.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">1.3 Usage Data</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>App activity (e.g., streaks, feature usage, session length).</li>
            <li>Device information (operating system, app version, crash logs, IP address).</li>
            <li>Analytics data collected through Firebase to improve app performance and user experience.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">1.4 Community Contributions</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Text-based posts, comments, and interactions you share in Leaves' social features.</li>
            <li>These contributions are subject to moderation using automated tools (including Perspective API) and may be reviewed if flagged.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">2. How We Use Your Information</h2>
          <p className="mb-4 text-gray-700">We use collected information to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Provide, personalize, and improve the app's functionality.</li>
            <li>Support sobriety tracking, habit-building features, and community engagement.</li>
            <li>Process subscriptions and manage free trial access.</li>
            <li>Monitor usage trends to improve user experience.</li>
            <li>Moderate community interactions to maintain a safe environment.</li>
            <li>Send updates, reminders, and push notifications (where enabled).</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">3. Data Sharing</h2>
          <p className="mb-4 text-gray-700">We do not sell or rent your personal information. However, data may be shared in these limited cases:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">3.1 Service Providers</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Third-party providers that support app hosting, analytics (Firebase), subscription management (RevenueCat, Superwall), and payment processing (Apple/Google).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">3.2 Legal Compliance</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>When required by law or to protect the rights, safety, and property of Leaves, its users, or others.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">3.3 Business Changes</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">4. Data Security</h2>
          <p className="mb-6 text-gray-700">
            We use industry-standard measures, including Firebase security protocols, to protect your data. However, no method of online storage or transmission is entirely secure. While we work to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">5. Your Rights</h2>
          <p className="mb-4 text-gray-700">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Access & Portability:</strong> Request a copy of your data.</li>
            <li><strong>Correction:</strong> Update inaccurate account information.</li>
            <li><strong>Deletion:</strong> Delete your account and associated data.</li>
            <li><strong>Restriction:</strong> Limit how we process certain data.</li>
            <li><strong>Withdraw Consent:</strong> Revoke permissions (e.g., push notifications).</li>
          </ul>
          <p className="mb-6 text-gray-700">
            To exercise these rights, contact us at <a href="mailto:support@quitleaves.xyz" className="text-[#1db584] hover:underline">support@quitleaves.xyz</a>.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">6. Data Retention</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Personal data is kept only as long as necessary to provide the service.</li>
            <li>If you delete your account, we will permanently delete your personal information and community content, unless required by law to retain it.</li>
            <li>Aggregated, anonymized usage data may be retained for analytics purposes.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">7. Tracking Technologies</h2>
          <p className="mb-6 text-gray-700">
            Leaves does not use web cookies. We may use device identifiers and in-app SDKs (e.g., Firebase, RevenueCat, Superwall) to measure engagement and subscription activity.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">8. Third-Party Links</h2>
          <p className="mb-6 text-gray-700">
            Leaves may contain links to third-party websites or services. We are not responsible for their privacy practices, and we encourage you to review their policies before providing any information.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">9. Updates to this Policy</h2>
          <p className="mb-6 text-gray-700">
            We may update this Privacy Policy from time to time. If significant changes are made, we will notify you through the app or via email. Continued use of Leaves after changes means you accept the revised Policy.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#1e1d1b]">📧 Contact Us</h2>
            <p className="text-gray-700">
              For privacy questions, please email us at <a href="mailto:support@quitleaves.xyz" className="text-[#1db584] hover:underline">support@quitleaves.xyz</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/blog" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Blog</Link>
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