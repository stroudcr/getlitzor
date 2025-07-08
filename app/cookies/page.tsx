import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how Litzor uses cookies and similar technologies to enhance your browsing experience.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings, which can make your next visit easier and the site more useful to you.
              </p>
              <p className="text-gray-700">
                Cookies play an important role in making websites work efficiently and providing information to website owners about how their sites are used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                Litzor uses cookies and similar technologies for several purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Help us deliver relevant advertisements and content</li>
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-sm text-gray-700">
                  <li>Authentication cookies</li>
                  <li>Security cookies</li>
                  <li>Session management cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Performance Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-sm text-gray-700">
                  <li>Google Analytics cookies</li>
                  <li>Vercel Analytics cookies</li>
                  <li>Page load time tracking</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Functional Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-sm text-gray-700">
                  <li>Language preference cookies</li>
                  <li>Theme preference cookies</li>
                  <li>Form data cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Marketing Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-sm text-gray-700">
                  <li>Google Ads cookies</li>
                  <li>Facebook Pixel cookies</li>
                  <li>Retargeting cookies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                Our website may use third-party services that set their own cookies. These services include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                <li><strong>Vercel Analytics:</strong> For performance monitoring and optimization</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Payment Processors:</strong> For secure payment processing (if applicable)</li>
              </ul>
              <p className="text-gray-700">
                These third-party services have their own privacy policies and cookie policies, which we encourage you to review.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookie Duration</h2>
              <p className="text-gray-700 mb-4">
                Cookies on our website may be:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
              </ul>
              <p className="text-gray-700">
                The specific duration of each cookie depends on its purpose and the service provider.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-4">
                You have several options for managing cookies:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings preferences. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Block all cookies</li>
                <li>Allow only essential cookies</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Cookie Consent</h3>
              <p className="text-gray-700 mb-4">
                When you first visit our website, you will see a cookie consent banner that allows you to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Opt-Out Links</h3>
              <p className="text-gray-700 mb-4">
                For third-party cookies, you can often opt out directly through the service provider:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-red-500 hover:text-red-600">Google Analytics Opt-out</a></li>
                <li><a href="https://www.facebook.com/help/568137493302217" className="text-red-500 hover:text-red-600">Facebook Cookie Settings</a></li>
                <li><a href="https://www.google.com/settings/ads" className="text-red-500 hover:text-red-600">Google Ads Settings</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-4">
                While you can disable cookies, please note that doing so may affect the functionality of our website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Some features may not work properly</li>
                <li>Your preferences may not be saved</li>
                <li>You may need to re-enter information more frequently</li>
                <li>Some content may not be personalized</li>
              </ul>
              <p className="text-gray-700">
                Essential cookies cannot be disabled as they are necessary for the website to function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Cookie Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Posting the updated policy on our website</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending you an email notification (if applicable)</li>
              </ul>
              <p className="text-gray-700">
                We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@getlitzor.com
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
                  className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
                >
                  ← Back to Home
                </Link>
                <Link 
                  href="/privacy" 
                  className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
                >
                  View Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
                >
                  View Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 