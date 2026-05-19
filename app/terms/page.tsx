import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Terms & Conditions | PikQuick',
  description: 'Read our terms and conditions for using PikQuick services.',
};

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
         
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-[#4A5565]">
            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using the platform ("App", "Platform", "PIKQUICK"), you agree to be bound by these Terms. 
                If you do not agree, you must not use the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">2. Platform Role</h2>
              <p className="leading-relaxed mb-3">
                The Platform is a technology intermediary that connects:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Task Requesters ("Requesters")</li>
                <li>Task Providers ("Runners")</li>
              </ul>
              <p className="leading-relaxed mt-3">
                The Platform does not perform tasks and is not a party to agreements between users. 
                All services are carried out by independent users, not employees or agents of the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">3. User Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users must be at least 18 years old</li>
                <li>Must provide accurate and complete information</li>
                <li>Runners may be required to complete KYC verification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">4. User Responsibilities</h2>
              
              <h3 className="text-xl font-medium text-[#101828] mt-6 mb-3">Requesters:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate task details</li>
                <li>Ensure tasks are legal, safe, and feasible</li>
                <li>Confirm completion honestly</li>
              </ul>

              <h3 className="text-xl font-medium text-[#101828] mt-6 mb-3">Runners:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Perform tasks professionally and lawfully</li>
                <li>Respect agreed terms</li>
                <li>Maintain accurate availability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">5. Prohibited Activities</h2>
              <p className="leading-relaxed mb-3">Users must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Post illegal, harmful, or unsafe tasks</li>
                <li>Engage in fraud, impersonation, or deception</li>
                <li>Circumvent payments outside the platform</li>
                <li>Abuse referral systems</li>
                <li>Harass or endanger other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">6. Payments & Fees</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments are processed via third-party providers (e.g., Paystack, Flutterwave)</li>
                <li>Funds may be temporarily held before release</li>
                <li>Platform may charge: Service fees, Commissions, Daily runner access fees</li>
                <li>Platform is not liable for payment processor failures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">7. Wallet & Transactions</h2>
              <p className="leading-relaxed mb-3">
                Users may maintain an in-app wallet. Transactions include deposits, payments, withdrawals, and refunds.
              </p>
              <p className="leading-relaxed mb-3">Platform reserves the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Delay transactions for review</li>
                <li>Reverse transactions in case of error or fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">8. Task Completion & Confirmation</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Runners mark tasks as completed</li>
                <li>Requesters must confirm or dispute within a defined timeframe</li>
                <li>Platform may auto-confirm if no action is taken</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">9. Cancellations & Refunds</h2>
              <p className="leading-relaxed mb-3">
                Both parties may cancel tasks under defined conditions. Refunds may be:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full</li>
                <li>Partial</li>
                <li>Denied</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Platform reserves final decision on disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">10. Disputes</h2>
              <p className="leading-relaxed mb-3">
                Users may raise disputes. Platform may review:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Messages</li>
                <li>Uploaded evidence</li>
              </ul>
              <p className="leading-relaxed mt-3 mb-3">Platform may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Release payment</li>
                <li>Issue refund</li>
                <li>Split payment</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Platform decisions are final and binding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">11. Ratings & Reviews</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Users may leave ratings</li>
                <li>Platform may remove or moderate reviews</li>
                <li>Reviews must not be false or defamatory</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">12. Referral Program</h2>
              <p className="leading-relaxed mb-3">
                Rewards are conditional on valid activity. Platform may:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Disqualify fraudulent referrals</li>
                <li>Withhold rewards pending review</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Referral terms may change at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">13. KYC & Verification</h2>
              <p className="leading-relaxed mb-3">
                Runners may be required to submit:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Government ID</li>
                <li>Selfie verification</li>
                <li>Address proof</li>
              </ul>
              <p className="leading-relaxed mt-3 mb-3">Platform may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Approve or reject submissions</li>
                <li>Suspend accounts for false information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">14. Account Suspension & Termination</h2>
              <p className="leading-relaxed mb-3">
                Platform may suspend or terminate accounts for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fraud or suspicious activity</li>
                <li>Violation of terms</li>
                <li>Safety concerns</li>
              </ul>
              <p className="leading-relaxed mt-3">
                No prior notice is required in severe cases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">15. Limitation of Liability</h2>
              <p className="leading-relaxed mb-3">
                To the maximum extent permitted by law, Platform is not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Task quality or outcome</li>
                <li>Injury, loss, or damage</li>
                <li>User misconduct</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Use of the platform is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">16. Indemnification</h2>
              <p className="leading-relaxed mb-3">
                Users agree to indemnify and hold the platform harmless from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Claims arising from their actions</li>
                <li>Violations of law or these terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">17. Third-Party Services</h2>
              <p className="leading-relaxed mb-3">
                Platform integrates third-party services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment providers</li>
                <li>Notifications</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Platform is not responsible for their performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">18. Changes to Terms</h2>
              <p className="leading-relaxed">
                Platform may update terms at any time. Continued use = acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">19. Governing Law</h2>
              <p className="leading-relaxed">
                These terms are governed by the laws of the Federal Republic of Nigeria.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[#101828] mb-4">20. Contact</h2>
              <p className="leading-relaxed">
                For questions or concerns regarding these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-3">
                <p>Email: <a href="mailto:pikquickng@gmail.com" className="text-[#4A85E4] hover:underline">pikquickng@gmail.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
