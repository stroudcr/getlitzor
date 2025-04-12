// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import '../styles/globals.css'
import { FC } from 'react';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
}

const Home: FC = () => {
  const services: ServiceProps[] = [
    {
      title: "AI-Powered Marketing",
      description: "Leverage the latest AI technologies to optimize your campaigns and target the right audience.",
      icon: "⚡"
    },
    {
      title: "Content Strategy",
      description: "Develop engaging content that resonates with your audience and drives conversions.",
      icon: "📝"
    },
    {
      title: "Social Media Management",
      description: "Build your brand presence across platforms with strategic content and community engagement.",
      icon: "🌐"
    },
    {
      title: "SEO Optimization",
      description: "Improve your search rankings with our advanced SEO techniques designed for 2025 algorithms.",
      icon: "🔍"
    },
    {
      title: "Analytics & Insights",
      description: "Make data-driven decisions with our comprehensive analytics and reporting tools.",
      icon: "📊"
    },
    {
      title: "Conversion Optimization",
      description: "Transform visitors into customers with our proven conversion strategies.",
      icon: "🎯"
    }
  ];

  const testimonials: TestimonialProps[] = [
    {
      quote: "Working with a modern, technology driven marketing team like this is exactly what small businesses need. It's fast, effective, and refreshingly simple.",
      author: "Alex R.",
      company: "Business Owner"
    },
    {
      quote: "If you're not using tools like this, you're already behind. The speed and clarity are next level.",
      author: "Jamie T",
      company: "Startup Founder"
    },
    {
      quote: "This is the kind of marketing every modern business owner needs—smart, lean, and actually understandable.",
      author: "Riley N",
      company: "Operations Manager"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Head>
        <title>Litzor | Marketing That Brings You More Business.</title>
        <meta name="description" content="Litzor helps local service businesses grow with done-for-you marketing powered by AI. Simple, fast, and effective." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="GetLitzor.com | Smart Marketing for Local Businesses" />
        <meta property="og:description" content="Cutting-edge marketing for 2025" />
        <meta property="og:image" content="https://getlitzor.com/og-image.jpg" />
        <meta property="og:url" content="https://getlitzor.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://getlitzor.com" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Litzor",
              "url": "https://getlitzor.com",
              "logo": "https://getlitzor.com/logo.png"
            }
          `}
        </script>
      </Head>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <Image src="/logo.png" alt="Litzor Logo" width={72} height={72} />
    </div>

    <nav className="hidden md:flex gap-6">
      {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-xl font-medium text-gray-700 hover:text-red-500 transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>

    <button className="md:hidden inline-flex items-center justify-center text-gray-700 hover:text-red-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</header>


      <main>
        {/* Hero Section */}
<section className="relative py-20 md:py-32 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Marketing That Brings You More Business.<span className="text-red-500"> Litzor</span>
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
        We create simple, smart marketing that brings in customers—so you can focus on running your business. No stress. No buzzwords. Just results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="px-8 py-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition shadow-lg hover:shadow-xl">
          Get Started
        </a>
        <a href="#services" className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition">
          Learn More
        </a>
      </div>
    </div>
  </div>
  <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
</section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do for Your Business</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Everything you need to get more customers—without doing it all yourself.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-cream-50 p-8 rounded-xl hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-cream-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-full h-96 bg-red-500 rounded-xl overflow-hidden">
                    <Image 
                      src="/about-image.jpg" 
                      alt="Litzor Team" 
                      layout="fill" 
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500 rounded-xl flex items-center justify-center">
                    <Image src="/logo.png" alt="Litzor Logo" width={60} height={60} />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">About Litzor</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We started Litzor to help small businesses stay competitive in a digital world that keeps changing. Our tools are smart, but our mission is simple: help good businesses grow.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  We combine cutting-edge technology with creative strategies to deliver exceptional results for our clients. Our team is passionate about helping businesses thrive in the ever-evolving digital landscape.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <div className="text-3xl font-bold text-red-500">0%</div>
                    <p className="text-xl text-gray-700 dark:text-gray-300">Outdated Marketing Tactics</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500">∞</div>
                    <p className="text-xl text-gray-700 dark:text-gray-300">Scalability Potential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What People Are Saying</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Here's what business owners are saying about the kind of work we aim to deliver.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-cream-50 p-8 rounded-xl hover:shadow-lg transition">
                  <div className="text-4xl text-red-500 mb-4">"</div>
                  <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Make Marketing Easy</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join other businesses modernizing their marketing with Litzor.
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-white text-red-500 font-medium rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
              Book a Free Call
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-cream-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Contact Us</h2>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Have questions or ready to start? Reach out to our team.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <form>
                      <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      <button type="submit" className="w-full px-8 py-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition">
                        Send Message
                      </button>
                    </form>
                  </div>
                  <div className="bg-gray-900 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="text-red-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-400">Email</p>
                            <p className="text-white">info@getlitzor.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="mt-8">
                      <p className="text-gray-400 mb-4">Follow Us</p>
                      <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-red-500 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-red-500 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-red-500 transition">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Image src="/logo.png" alt="Litzor Logo" width={40} height={40} className="mr-2" />
                <span className="text-2xl font-bold">Litzor</span>
              </div>
              <p className="text-gray-400">
              Marketing That Brings You More Business.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-red-500 transition">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-red-500 transition">About</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-red-500 transition">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-red-500 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">AI Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Content Strategy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Social Media</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">SEO Optimization</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Litzor. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;