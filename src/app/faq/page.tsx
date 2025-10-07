import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about VENT - Mood & Journal app.",
};

export default function FAQ() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1A1D28' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Frequently Asked Questions</h1>

        <div className="space-y-8 text-white">
          <section>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#E85A4F' }}>What is VENT?</h2>
            <p className="text-gray-300 leading-relaxed">
              VENT is a mood tracking and journaling app designed to help you understand your emotional patterns and improve your mental wellness. Track how you're feeling, journal your thoughts, and gain insights into your emotional journey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#E85A4F' }}>Is my data private?</h2>
            <p className="text-gray-300 leading-relaxed">
              Yes! Your journal entries and mood data are completely private and encrypted. We never share your personal information with third parties. Your thoughts and feelings are yours alone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#E85A4F' }}>How does mood tracking work?</h2>
            <p className="text-gray-300 leading-relaxed">
              Simply open the app and record how you're feeling. You can track different emotions, add notes about what's affecting your mood, and view patterns over time to better understand your emotional wellness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#E85A4F' }}>How much does VENT cost?</h2>
            <p className="text-gray-300 leading-relaxed">
              VENT is a premium app that requires a subscription. Pricing details are available in the App Store. We offer different subscription plans to fit your needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#E85A4F' }}>Can VENT replace therapy?</h2>
            <p className="text-gray-300 leading-relaxed">
              No. VENT is a tool for self-reflection and tracking, not a substitute for professional mental health care. If you're struggling with your mental health, please consult with a qualified healthcare provider or therapist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#E85A4F' }}>What platforms is VENT available on?</h2>
            <p className="text-gray-300 leading-relaxed">
              VENT is currently available on iOS devices. Download it from the App Store to get started on your emotional wellness journey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#E85A4F' }}>Can I export my data?</h2>
            <p className="text-gray-300 leading-relaxed">
              Yes! You can export your journal entries and mood data at any time. Your data belongs to you, and you have full control over it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#E85A4F' }}>How do I delete my account?</h2>
            <p className="text-gray-300 leading-relaxed">
              You can delete your account and all associated data from within the app settings. Once deleted, your data cannot be recovered, so make sure to export anything you want to keep first.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#E85A4F' }}>I found a bug or have a suggestion. How can I reach you?</h2>
            <p className="text-gray-300 leading-relaxed">
              We'd love to hear from you! Please email us at support@ventapp.xyz with any bugs, feature requests, or feedback.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#E85A4F' }}>Does VENT work offline?</h2>
            <p className="text-gray-300 leading-relaxed">
              Yes! You can track your moods and write journal entries offline. Your data will sync when you reconnect to the internet.
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
