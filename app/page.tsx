'use client';
// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css'
import { FC } from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

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

interface PortfolioProps {
  title: string;
  image: string;
  link: string;
}

const Home: FC = () => {
  const services: ServiceProps[] = [
    {
      title: "AI-Powered Marketing",
      description: "Leverage the latest AI technologies to optimize your campaigns and target the right audience.",
      icon: "⚡"
    },
    {
      title: "Website Design & Development",
      description: "Build beautiful, high-performing websites that convert visitors into customers and grow your business.",
      icon: "💻"
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

  const portfolioItems: PortfolioProps[] = [
    {
      title: "PlayInDirtJobs",
      image: "/PIDJ.jpg",
      link: "https://www.playindirtjobs.com"
    },
    {
      title: "Rapidfire Rachel",
      image: "/RFR.jpg",
      link: "https://www.rapidfirerachel.com"
    },
    {
      title: "WellDiem",
      image: "/WD.PNG",
      link: "https://www.welldiem.com"
    },
    {
      title: "Work In Data Center",
      image: "/WIDC.jpg",
      link: "https://www.workindatacenter.com"
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Litzor" />
        <meta name="keywords" content="AI marketing, digital marketing, local business marketing, SEO, social media marketing, website design, web development, conversion optimization, marketing automation" />
        <link rel="canonical" href="https://www.getlitzor.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Enhanced Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Litzor",
              "description": "AI-powered marketing services for local businesses",
              "url": "https://www.getlitzor.com",
              "logo": "https://www.getlitzor.com/logo.png",
              "image": "https://www.getlitzor.com/og-image.jpg",
              "telephone": "+1-XXX-XXX-XXXX",
              "email": "hello@getlitzor.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "YOUR_LATITUDE",
                "longitude": "YOUR_LONGITUDE"
              },
              "openingHours": "Mo-Fr 09:00-17:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "YOUR_LATITUDE",
                  "longitude": "YOUR_LONGITUDE"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI-Powered Marketing",
                      "description": "Leverage AI technologies to optimize campaigns and target the right audience"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Design & Development",
                      "description": "Build beautiful, high-performing websites that convert visitors into customers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Social Media Management",
                      "description": "Build brand presence across platforms with strategic content"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Optimization",
                      "description": "Improve search rankings with advanced SEO techniques"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Analytics & Insights",
                      "description": "Make data-driven decisions with comprehensive analytics"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Conversion Optimization",
                      "description": "Transform visitors into customers with proven strategies"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.linkedin.com/company/litzor",
                "https://www.facebook.com/litzor",
                "https://twitter.com/litzor"
              ]
            }
          `}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.getlitzor.com"
                }
              ]
            }
          `}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What marketing services does Litzor offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Litzor offers AI-powered marketing, website design & development, social media management, SEO optimization, analytics, and conversion optimization services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Litzor help local businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We create simple, smart marketing that brings in customers so you can focus on running your business. Our AI-powered approach delivers results without the complexity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Litzor different from other marketing agencies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Litzor combines cutting-edge AI technology with creative strategies to deliver exceptional results. We focus on simplicity, effectiveness, and measurable outcomes."
                  }
                }
              ]
            }
          `}
        </script>
      </Head>

      <Navbar />


      <main>
        {/* Hero Section */}
<section className="relative py-24 md:py-40 overflow-hidden grain">
  {/* Animated gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 animate-gradient"></div>

  {/* Floating geometric shapes */}
  <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-float"></div>
  <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
  <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-400/15 to-red-400/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-950 mb-8 leading-tight drop-shadow-sm">
          Marketing That Brings You More Business.<span className="gradient-text"> Litzor</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl leading-relaxed drop-shadow-sm"
      >
        We create simple, smart marketing that brings in customers—so you can focus on running your business. No stress. No buzzwords. Just results.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-5"
      >
        <a
          href="#contact"
          className="group relative px-10 py-5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 overflow-hidden animate-gradient hover:scale-105"
        >
          <span className="relative z-10 flex items-center justify-center">
            Get Started
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>

        <a
          href="#services"
          className="group px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-red-300 hover:bg-white transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <span className="flex items-center justify-center">
            Learn More
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </a>
      </motion.div>
    </div>
  </div>

  {/* Scroll indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
  >
    <div className="animate-bounce-subtle">
      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </motion.div>
</section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 mb-6">
                What We Do for Your Business
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Everything you need to get more customers—without doing it all yourself.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -12 }}
                  className="group relative"
                >
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>

                  <div className="relative glass-card p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-500">
                    {/* Icon with gradient background */}
                    <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover arrow indicator */}
                    <div className="mt-6 flex items-center text-red-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                      <span className="text-sm font-semibold">Learn more</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section id="work" className="py-24 bg-gradient-to-b from-cream-50 to-white relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-sm" style={{ color: '#ef4444' }}>
                Our Work
              </h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-sm" style={{ color: '#f97316' }}>
                Real websites we've built for real businesses—designed to get results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                      {/* Image container with overlay */}
                      <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* View Project button reveal */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-2xl flex items-center gap-2 hover:bg-red-500 hover:text-white transition-colors duration-300">
                            View Project
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Title with slide-up animation */}
                      <div className="p-6 bg-white">
                        <h3 className="text-2xl font-bold text-gray-950 group-hover:text-red-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="mt-3 flex items-center text-red-500 font-semibold text-sm">
                          <span>Visit Site</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gradient-to-b from-white via-cream-50 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Image side with enhanced design */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  {/* Main image with gradient border */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="w-full h-[500px] bg-gradient-to-br from-red-500 to-orange-500 p-1">
                      <div className="w-full h-full rounded-3xl overflow-hidden">
                        <Image
                          src="/about-image.jpg"
                          alt="Litzor Team"
                          layout="fill"
                          objectFit="cover"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating logo badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-transform duration-300"
                  >
                    <Image src="/logo.png" alt="Litzor Logo" width={70} height={70} />
                  </motion.div>

                  {/* Decorative shapes */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-red-400/30 rounded-2xl blur-xl"></div>
                  <div className="absolute -bottom-4 left-1/3 w-20 h-20 bg-gradient-to-br from-orange-400/30 to-yellow-400/30 rounded-full blur-lg"></div>
                </div>
              </motion.div>

              {/* Content side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 mb-8">
                  About <span className="gradient-text">Litzor</span>
                </h2>

                <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                  We started Litzor to help small businesses stay competitive in a digital world that keeps changing. Our tools are smart, but our mission is simple: help good businesses grow.
                </p>

                <p className="text-xl text-gray-800 mb-10 leading-relaxed">
                  We combine cutting-edge technology with creative strategies to deliver exceptional results for our clients. Our team is passionate about helping businesses thrive in the ever-evolving digital landscape.
                </p>

                {/* Bento-style stats grid */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group relative bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-red-100"
                  >
                    <div className="text-5xl font-bold gradient-text mb-3">0%</div>
                    <p className="text-lg font-semibold text-gray-700">Outdated Marketing Tactics</p>
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-400/20 to-transparent rounded-bl-3xl"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="group relative bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100"
                  >
                    <div className="text-5xl font-bold gradient-text mb-3">∞</div>
                    <p className="text-lg font-semibold text-gray-700">Scalability Potential</p>
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-3xl"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-cream-50 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 mb-6">
                What People Are Saying
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Here's what business owners are saying about the kind of work we aim to deliver.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                // Generate initials for avatar
                const initials = testimonial.author.split(' ').map(n => n[0]).join('');

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotate: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, rotate: 1 }}
                    className="group relative"
                  >
                    {/* Card with gradient border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>

                    <div className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                      {/* Quote mark with gradient */}
                      <div className="text-7xl gradient-text font-serif leading-none mb-4 opacity-50">"</div>

                      {/* Star rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <p className="text-gray-800 text-lg mb-6 flex-grow leading-relaxed italic">
                        {testimonial.quote}
                      </p>

                      {/* Author info with avatar */}
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        {/* Avatar with initials */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {initials}
                        </div>

                        <div>
                          <p className="font-bold text-gray-950 text-lg">{testimonial.author}</p>
                          <p className="text-gray-700 text-sm">{testimonial.company}</p>
                        </div>
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-400/10 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 animate-gradient"></div>

          {/* Particle/dot pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>

          {/* Floating shapes */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Let's Make Marketing Easy
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join other businesses modernizing their marketing with Litzor.
              </p>

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-12 py-6 bg-white text-red-600 font-bold text-lg rounded-2xl hover:bg-cream-50 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                <span className="relative z-10">Book a Free Call</span>

                <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              {/* Optional: Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Quick Response</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-b from-cream-50 to-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 mb-6 drop-shadow-sm">
                  Contact Us
                </h2>
                <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                  Have questions or ready to start? Reach out to our team.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Form Side */}
                  <div className="p-8 md:p-12 lg:p-16">
                    <form className="space-y-6">
                      {/* Name Field */}
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-all duration-300 placeholder-transparent"
                          placeholder="Full Name"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-4 -top-3 bg-white px-2 text-sm font-semibold text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-500"
                        >
                          Full Name
                        </label>
                      </div>

                      {/* Email Field */}
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-all duration-300 placeholder-transparent"
                          placeholder="Email Address"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-4 -top-3 bg-white px-2 text-sm font-semibold text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-500"
                        >
                          Email Address
                        </label>
                      </div>

                      {/* Message Field */}
                      <div className="relative">
                        <textarea
                          id="message"
                          rows={5}
                          className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 transition-all duration-300 placeholder-transparent resize-none"
                          placeholder="Message"
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="absolute left-4 -top-3 bg-white px-2 text-sm font-semibold text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-500"
                        >
                          How can we help you?
                        </label>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group w-full px-8 py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Send Message
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </motion.button>
                    </form>
                  </div>

                  {/* Info Side */}
                  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Get in Touch</h3>

                      <div className="space-y-6">
                        {/* Email */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="flex items-start gap-4 group"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm font-semibold mb-1">Email</p>
                            <a href="mailto:info@getlitzor.com" className="text-white text-lg hover:text-red-400 transition-colors">
                              info@getlitzor.com
                            </a>
                          </div>
                        </motion.div>

                        {/* Response Time */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="flex items-start gap-4 group"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm font-semibold mb-1">Response Time</p>
                            <p className="text-white text-lg">Within 24 hours</p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Decorative quote */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                      >
                        <p className="text-white/80 italic text-lg leading-relaxed">
                          "We're excited to learn about your business and discuss how we can help you grow."
                        </p>
                        <p className="text-red-400 font-bold mt-4">— The Litzor Team</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                <li><a href="#work" className="text-gray-400 hover:text-red-500 transition">Our Work</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-red-500 transition">About</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-red-500 transition">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-red-500 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">AI Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Website Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Social Media</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-500 transition">SEO Optimization</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Litzor. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="/privacy" className="text-gray-400 hover:text-red-500 transition">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-red-500 transition">Terms of Service</a></li>
                <li><a href="/cookies" className="text-gray-400 hover:text-red-500 transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;