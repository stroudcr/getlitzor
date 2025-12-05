'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t-4 border-[#03afdc] text-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Image src="/logo.svg" alt="Litzor Logo" width={160} height={160} className="mr-2" />
            </div>
            <p className="text-gray-600">
            Turn Technology Into Growth.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-gray-600 hover:text-[#03afdc] transition">Services</a></li>
              <li><a href="/#work" className="text-gray-600 hover:text-[#03afdc] transition">Our Work</a></li>
              <li><a href="/#about" className="text-gray-600 hover:text-[#03afdc] transition">About</a></li>
              <li><a href="/#testimonials" className="text-gray-600 hover:text-[#03afdc] transition">Testimonials</a></li>
              <li><a href="/#contact" className="text-gray-600 hover:text-[#03afdc] transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/lead-generation" className="text-gray-600 hover:text-[#03afdc] transition">Lead Generation</a></li>
              <li><a href="/services/website-design" className="text-gray-600 hover:text-[#03afdc] transition">Website Design</a></li>
              <li><a href="/services/ai-automation" className="text-gray-600 hover:text-[#03afdc] transition">AI Automation</a></li>
              <li><a href="/services/seo-optimization" className="text-gray-600 hover:text-[#03afdc] transition">SEO Optimization</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© 2025 Litzor. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="/privacy" className="text-gray-600 hover:text-[#03afdc] transition">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-[#03afdc] transition">Terms of Service</a></li>
              <li><a href="/cookies" className="text-gray-600 hover:text-[#03afdc] transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
