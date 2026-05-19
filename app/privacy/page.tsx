import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Privacy Policy | PikQuick',
  description: 'Learn how PikQuick collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-inter)' }}>
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-8 xl:px-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#4A85E4] transition-colors hover:text-[#3B6BC4] mb-8 mt-8"
        >
          <FiArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-medium text-[#101828] sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
         
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-[#4A5565]">
            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">1. Overview</h2>
              <p className="leading-relaxed">
                This policy explains how we collect, use, and protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">2. Data We Collect</h2>
              
              <h3 className="text-xl font-medium text-[#101828] mt-6 mb-3">Personal Data:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email</li>
                <li>Phone number</li>
              </ul>

              <h3 className="text-xl font-medium text-[#101828] mt-6 mb-3">Identity Data (Runners):</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Government ID</li>
                <li>Selfie</li>
                <li>Address proof</li>
              </ul>

              <h3 className="text-xl font-medium text-[#101828] mt-6 mb-3">Usage Data:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>App activity</li>
                <li>Task interactions</li>
                <li>Device information</li>
              </ul>

              <h3 className="text-xl font-medium text-[#101828] mt-6 mb-3">Location Data:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>GPS/location for task execution</li>
              </ul>

              <h3 className="text-xl font-medium text-[#101828] mt-6 mb-3">Financial Data:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transaction history</li>
                <li>Wallet activity (We do not store card details — handled by payment providers)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">3. How We Use Data</h2>
              <p className="leading-relaxed mb-3">
                We use data to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve services</li>
                <li>Process transactions</li>
                <li>Verify identity</li>
                <li>Prevent fraud</li>
                <li>Send notifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">4. Data Sharing</h2>
              <p className="leading-relaxed mb-3">
                We may share data with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processors</li>
                <li>Law enforcement (if required)</li>
                <li>Service providers</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong>We do not sell personal data.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">5. Data Retention</h2>
              <p className="leading-relaxed mb-3">
                We retain data as long as necessary for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service delivery</li>
                <li>Legal compliance</li>
                <li>Fraud prevention</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">6. Data Security</h2>
              <p className="leading-relaxed mb-3">
                We implement reasonable safeguards, but:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No system is 100% secure</li>
                <li>Users accept inherent risks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">7. User Rights</h2>
              <p className="leading-relaxed mb-3">
                Users may:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access their data</li>
                <li>Request correction</li>
                <li>Request deletion (subject to legal limits)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">8. Cookies & Tracking</h2>
              <p className="leading-relaxed mb-3">
                We may use cookies and tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improve experience</li>
                <li>Analyze usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">9. Third-Party Links</h2>
              <p className="leading-relaxed">
                We are not responsible for external platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">10. Children's Privacy</h2>
              <p className="leading-relaxed">
                The platform is not intended for users under 18.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">11. Changes to Policy</h2>
              <p className="leading-relaxed">
                We may update this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">12. Contact</h2>
              <p className="leading-relaxed">
                For questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3">
                <p>Email: pikquickng@gmail.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
