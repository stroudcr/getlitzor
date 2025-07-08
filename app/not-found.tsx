import Link from 'next/link';
import Navbar from './components/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link 
              href="/#contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#services" className="text-red-500 hover:text-red-600 font-medium">
                Our Services
              </Link>
              <Link href="/#about" className="text-red-500 hover:text-red-600 font-medium">
                About Us
              </Link>
              <Link href="/privacy" className="text-red-500 hover:text-red-600 font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-red-500 hover:text-red-600 font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 