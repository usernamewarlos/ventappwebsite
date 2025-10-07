import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the VENT team. We're here to help with any questions or feedback.",
};

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1A1D28' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>

        <div className="space-y-8 text-white">
          <section>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Have questions, feedback, or need support? We'd love to hear from you!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Email Support</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              For general inquiries, support requests, or feedback:
            </p>
            <p className="text-xl mb-2">
              <a href="mailto:support@ventapp.xyz" className="hover:text-gray-300 transition-colors" style={{ color: '#E85A4F' }}>
                support@ventapp.xyz
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>What to Include</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              To help us assist you better, please include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Your device type and iOS version</li>
              <li>A detailed description of your issue or question</li>
              <li>Screenshots (if applicable)</li>
              <li>Steps to reproduce any bugs you've encountered</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Response Time</h2>
            <p className="text-gray-300 leading-relaxed">
              We typically respond to all inquiries within 24-48 hours. During peak times, it may take a bit longer, but we'll get back to you as soon as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Feature Requests</h2>
            <p className="text-gray-300 leading-relaxed">
              We're always looking to improve VENT! If you have ideas for new features or improvements, we'd love to hear them. Send your suggestions to support@ventapp.xyz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#E85A4F' }}>Privacy & Data Requests</h2>
            <p className="text-gray-300 leading-relaxed">
              For data export, deletion, or privacy-related inquiries, please email us at support@ventapp.xyz with "Privacy Request" in the subject line.
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
