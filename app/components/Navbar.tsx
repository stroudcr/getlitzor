import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="Litzor Logo" 
                  width={48} 
                  height={48} 
                  className="w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Services', href: '/#services' },
              { name: 'Our Work', href: '/#work' },
              { name: 'About', href: '/#about' },
              { name: 'Testimonials', href: '/#testimonials' },
              { name: 'Contact', href: '/#contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="/#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Get Started
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-red-500 hover:bg-red-50 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Hidden by default) */}
        <div className="lg:hidden hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100 mt-4 rounded-lg shadow-lg">
            {[
              { name: 'Services', href: '/#services' },
              { name: 'Our Work', href: '/#work' },
              { name: 'About', href: '/#about' },
              { name: 'Testimonials', href: '/#testimonials' },
              { name: 'Contact', href: '/#contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-100">
              <a
                href="/#contact"
                className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 