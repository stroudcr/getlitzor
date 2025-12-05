import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read our terms of service to understand the rules and guidelines for using Litzor services.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the services provided by Litzor ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700">
                These Terms of Service ("Terms") govern your use of our website, services, and any related applications (collectively, the "Service").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 mb-4">
                Litzor provides technology services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>AI-powered technology strategies and campaigns</li>
                <li>Search engine optimization (SEO) services</li>
                <li>Analytics and reporting</li>
                <li>Conversion optimization</li>
                <li>Digital technology consulting</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-700 mb-4">
                To access certain features of our services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to terminate accounts that violate these terms or are inactive for extended periods.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms for our services are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Fees are due as specified in your service agreement</li>
                <li>Late payments may result in service suspension</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>We may change our pricing with 30 days' notice</li>
                <li>Taxes will be added where applicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use Policy</h2>
              <p className="text-gray-700 mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Use our services for spam or unsolicited communications</li>
                <li>Engage in any fraudulent or deceptive practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">
                <strong>Our Rights:</strong> All content, features, and functionality of our services are owned by Litzor and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Your Rights:</strong> You retain ownership of content you create, but grant us a license to use it for service delivery and improvement.
              </p>
              <p className="text-gray-700">
                <strong>License:</strong> We grant you a limited, non-exclusive, non-transferable license to use our services for their intended purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-700">
                By using our services, you consent to our collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Level and Availability</h2>
              <p className="text-gray-700 mb-4">
                We strive to provide reliable services but cannot guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Uninterrupted or error-free service</li>
                <li>Specific results from our technology</li>
                <li>Compatibility with all devices or browsers</li>
                <li>Availability during maintenance periods</li>
              </ul>
              <p className="text-gray-700">
                We will provide reasonable notice for scheduled maintenance and will work to minimize service disruptions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Litzor shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages resulting from third-party actions</li>
                <li>Service interruptions or data loss</li>
              </ul>
              <p className="text-gray-700">
                Our total liability shall not exceed the amount paid by you for our services in the 12 months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify and hold harmless Litzor from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate this agreement:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With 30 days' written notice</li>
                <li>Immediately for material breach of these Terms</li>
                <li>Upon non-payment of fees</li>
              </ul>
              <p className="text-gray-700">
                Upon termination, your access to services will cease, and you must return any confidential information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                Any disputes arising from these Terms shall be resolved through:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 mb-4">
                <li>Good faith negotiation between parties</li>
                <li>Mediation if negotiation fails</li>
                <li>Binding arbitration as a last resort</li>
              </ol>
              <p className="text-gray-700">
                These Terms are governed by the laws of [Your Jurisdiction], and any legal proceedings shall be brought in the courts of [Your Jurisdiction].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Force Majeure</h2>
              <p className="text-gray-700">
                We shall not be liable for any failure to perform due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, or technical failures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@getlitzor.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> [Your Business Address]
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> [Your Phone Number]
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/" 
                  className="inline-flex items-center text-[#03afdc] hover:text-[#0298c1] font-medium"
                >
                  ← Back to Home
                </Link>
                <Link 
                  href="/privacy" 
                  className="inline-flex items-center text-[#03afdc] hover:text-[#0298c1] font-medium"
                >
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 