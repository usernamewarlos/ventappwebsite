import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "VENT - Mood & Journal terms of service and user agreement.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1A1D28' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="space-y-6 text-white">
          <p className="text-gray-300">
            <strong>Last Updated:</strong> January 6, 2025
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using VENT - Mood & Journal ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Use of the App</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              VENT is a mood tracking and journaling application designed to help you understand and improve your emotional wellness. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Use the App only for lawful purposes</li>
              <li>Provide accurate information when using the App</li>
              <li>Maintain the security of your account</li>
              <li>Not misuse or attempt to manipulate the App's features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Medical Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              VENT is not a substitute for professional medical advice, diagnosis, or treatment. The App is designed for self-reflection and tracking purposes only. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical or mental health condition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>User Content</h2>
            <p className="text-gray-300 leading-relaxed">
              You retain all rights to the content you create in the App, including your journal entries and mood data. By using VENT, you grant us the right to store and process your content solely for the purpose of providing the App's services to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Subscription and Payments</h2>
            <p className="text-gray-300 leading-relaxed">
              Some features of VENT may require a subscription. Subscription fees are billed in advance on a recurring basis. You may cancel your subscription at any time through your device's app store settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              The App and its original content, features, and functionality are owned by VENT and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              VENT and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate or suspend your access to the App at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-300 mt-2">
              Email: support@ventapp.xyz
            </p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-white hover:text-gray-300 transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
