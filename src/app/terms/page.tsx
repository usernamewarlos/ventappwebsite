import Image from "next/image";
import Link from "next/link";

export default function Terms() {
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
        <h1 className="text-5xl font-bold text-center mb-8 text-[#1e1d1b]">terms & conditions</h1>
        
        <p className="text-gray-500 text-center mb-12 italic">last updated: August 27, 2025</p>

        <div className="prose prose-lg max-w-none">
          <p className="mb-8 text-gray-700">
            Welcome to Leaves – a science-backed app designed to help people quit cannabis and build lasting, healthier habits. These Terms & Conditions ("Terms") govern your use of Leaves, so please read them carefully before continuing. By downloading, accessing, or using the app, you agree to be legally bound by these Terms. If you do not agree, you must stop using Leaves immediately.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">1. Who Can Use Leaves</h2>
          <p className="mb-6 text-gray-700">
            You must be at least 16 years old to use this app. By creating an account or otherwise accessing Leaves, you confirm you meet this age requirement. Parents or guardians are responsible for monitoring the use of Leaves by minors under their supervision.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">2. Accounts and Security</h2>
          <p className="mb-4 text-gray-700">
            Some features of Leaves may require registration. When creating an account, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Provide accurate and complete information.</li>
            <li>Keep your login credentials private and secure.</li>
            <li>Inform us promptly if you suspect unauthorized access to your account.</li>
          </ul>
          <p className="mb-6 text-gray-700">
            You are responsible for all activity under your account.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">3. Acceptable Use</h2>
          <p className="mb-4 text-gray-700">
            Leaves is intended to provide tools, education, and community support for quitting cannabis. You agree not to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Use the app for any illegal or harmful purposes.</li>
            <li>Interfere with or disrupt the app's functionality.</li>
            <li>Attempt to reverse engineer, copy, or exploit Leaves' software or content.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">4. Privacy</h2>
          <p className="mb-6 text-gray-700">
            Your privacy matters to us. Please review our <Link href="/privacy" className="text-[#1db584] hover:underline">Privacy Policy</Link> to understand how we collect, use, and protect your personal information. By using Leaves, you consent to the practices described in the Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">5. Subscriptions and Payments</h2>
          <p className="mb-4 text-gray-700">
            Certain features of Leaves are available through a paid subscription. By subscribing, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Pay the fees associated with your plan on time.</li>
            <li>Authorize recurring charges to your chosen payment method until you cancel.</li>
          </ul>
          <p className="mb-6 text-gray-700">
            <strong>Cancellations & Refunds:</strong> You may cancel at any time through your device's app store or within the app. Subscriptions are non-refundable, except where required by law or by the policies of the app store through which you purchased.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">6. Community Standards</h2>
          <p className="mb-4 text-gray-700">
            Leaves includes supportive spaces for people working toward sobriety. By participating, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Treat all members with respect.</li>
            <li>Avoid sharing offensive, abusive, or illegal content.</li>
          </ul>
          <p className="mb-6 text-gray-700">
            We reserve the right to remove posts or suspend accounts that violate these standards.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">7. Ownership of Content</h2>
          <p className="mb-6 text-gray-700">
            All trademarks, text, graphics, software, and other materials provided through Leaves belong to us or our licensors. You may not copy, reproduce, or distribute them without prior written consent.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">8. Disclaimers</h2>
          <p className="mb-6 text-gray-700">
            Leaves is provided on an "as is" and "as available" basis. We do not guarantee uninterrupted service, error-free functionality, or any specific outcomes from using the app. Individual results may vary.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">9. Limitation of Liability</h2>
          <p className="mb-4 text-gray-700">
            To the fullest extent permitted by law, Leaves and its creators will not be responsible for:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Any damages (direct, indirect, incidental, or consequential) resulting from your use or inability to use the app.</li>
            <li>Any loss of data, revenue, or reputation connected with the app.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">10. Updates to These Terms</h2>
          <p className="mb-6 text-gray-700">
            We may revise these Terms from time to time. If we make significant changes, we will notify you through the app or by other means. Continued use of Leaves after updates means you accept the revised Terms.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">11. Ending Your Use</h2>
          <p className="mb-6 text-gray-700">
            We may suspend or permanently terminate your access to Leaves if you violate these Terms, disrupt the community, or engage in unlawful activity. You may also stop using Leaves at any time.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">12. Governing Law</h2>
          <p className="mb-6 text-gray-700">
            These Terms will be governed by and interpreted under the laws of the United States, without regard to conflict of law rules.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#1e1d1b]">📧 Contact Us</h2>
            <p className="text-gray-700">
              For questions about these Terms, please email us at <a href="mailto:support@quitleaves.xyz" className="text-[#1db584] hover:underline">support@quitleaves.xyz</a>
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