'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

interface FAQProps {
  question: string;
  answer: string;
}

const SEOOptimizationPage: FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Technical SEO",
      description: "Fix crawl errors, improve site speed, implement schema markup, and ensure your site meets all technical requirements for search engines.",
      icon: "⚙️"
    },
    {
      title: "On-Page Optimization",
      description: "Optimize titles, meta descriptions, headers, and content structure to help search engines understand and rank your pages.",
      icon: "📝"
    },
    {
      title: "Local SEO",
      description: "Dominate local search results with Google Business Profile optimization, local citations, and location-specific content strategies.",
      icon: "📍"
    },
    {
      title: "Content Strategy",
      description: "Create SEO-optimized content that answers your customers' questions and establishes your authority in your industry.",
      icon: "✍️"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Audit",
      description: "Comprehensive analysis of your current SEO performance, competitors, and opportunities."
    },
    {
      step: "2",
      title: "Strategize",
      description: "Custom SEO roadmap based on your goals, industry, and competitive landscape."
    },
    {
      step: "3",
      title: "Optimize",
      description: "Implement technical fixes, on-page optimization, and content improvements."
    },
    {
      step: "4",
      title: "Monitor",
      description: "Track rankings, traffic, and conversions with monthly reporting and ongoing optimization."
    }
  ];

  const benefits = [
    {
      title: "Increase Organic Traffic",
      description: "Get more visitors from search engines without paying for every click. Organic traffic compounds over time."
    },
    {
      title: "Rank Higher in Search",
      description: "Appear on page one for the keywords your customers are searching. Higher rankings mean more visibility and trust."
    },
    {
      title: "Attract Qualified Leads",
      description: "SEO brings people actively searching for your services—not random traffic, but ready-to-buy prospects."
    },
    {
      title: "Long-Term Results",
      description: "Unlike ads that stop when you stop paying, SEO builds lasting visibility that continues to deliver results."
    }
  ];

  const faqs: FAQProps[] = [
    {
      question: "What is SEO and why do I need it?",
      answer: "SEO (Search Engine Optimization) is the process of improving your website to rank higher in search engine results. When potential customers search for services you offer, you want to appear at the top. Without SEO, you're invisible to the 93% of online experiences that start with a search engine."
    },
    {
      question: "How long does SEO take to work?",
      answer: "SEO is a long-term strategy. You'll typically see initial improvements within 3-6 months, with significant results in 6-12 months. The timeline depends on your industry competition, current website state, and how aggressively we pursue optimization. Unlike ads, SEO results compound and last."
    },
    {
      question: "What's included in your SEO service?",
      answer: "Our SEO service includes technical audit and fixes, keyword research, on-page optimization, content strategy, local SEO (for local businesses), link building guidance, Google Business Profile optimization, and monthly reporting. We tailor the strategy to your specific business goals."
    },
    {
      question: "Do you guarantee first page rankings?",
      answer: "No reputable SEO company can guarantee specific rankings because search algorithms are controlled by Google, not us. What we guarantee is following best practices, transparent reporting, and consistent effort toward improving your visibility. We focus on metrics that matter: traffic, leads, and revenue."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track keyword rankings, organic traffic, click-through rates, bounce rates, time on page, and most importantly—conversions and leads from organic search. You'll receive monthly reports showing progress and ROI. We focus on business outcomes, not just vanity metrics."
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Litzor" />
        <meta name="keywords" content="SEO optimization, search engine optimization, local SEO, technical SEO, on-page SEO, keyword research, Google rankings, organic traffic, small business SEO, local business SEO" />
        <link rel="canonical" href="https://www.getlitzor.com/services/seo-optimization" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.svg" />

        <title>SEO Optimization Services for Local Businesses | Litzor</title>
        <meta name="description" content="Improve your search rankings with advanced SEO techniques designed for 2025 algorithms. Litzor helps local businesses get found by customers ready to buy." />

        {/* Open Graph */}
        <meta property="og:title" content="SEO Optimization Services for Local Businesses | Litzor" />
        <meta property="og:description" content="Improve your search rankings with advanced SEO techniques designed for 2025 algorithms. Get found by customers ready to buy." />
        <meta property="og:url" content="https://www.getlitzor.com/services/seo-optimization" />
        <meta property="og:site_name" content="Litzor" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Optimization Services for Local Businesses | Litzor" />
        <meta name="twitter:description" content="Improve your search rankings with advanced SEO techniques designed for 2025 algorithms." />
        <meta name="twitter:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Service Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "SEO Optimization Services",
              "serviceType": "Search Engine Optimization",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Litzor",
                "url": "https://www.getlitzor.com",
                "logo": "https://www.getlitzor.com/logo.svg"
              },
              "description": "Improve your search rankings with advanced SEO techniques designed for 2025 algorithms. Professional SEO services for local businesses.",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "SEO Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Technical SEO",
                      "description": "Site speed optimization, schema markup, and technical fixes"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Local SEO",
                      "description": "Google Business Profile optimization and local search visibility"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "On-Page SEO",
                      "description": "Content optimization, meta tags, and keyword targeting"
                    }
                  }
                ]
              }
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
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://www.getlitzor.com/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "SEO Optimization",
                  "item": "https://www.getlitzor.com/services/seo-optimization"
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
                  "name": "What is SEO and why do I need it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO (Search Engine Optimization) is the process of improving your website to rank higher in search engine results. When potential customers search for services you offer, you want to appear at the top. Without SEO, you're invisible to the 93% of online experiences that start with a search engine."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does SEO take to work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO is a long-term strategy. You'll typically see initial improvements within 3-6 months, with significant results in 6-12 months. The timeline depends on your industry competition, current website state, and how aggressively we pursue optimization. Unlike ads, SEO results compound and last."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's included in your SEO service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our SEO service includes technical audit and fixes, keyword research, on-page optimization, content strategy, local SEO (for local businesses), link building guidance, Google Business Profile optimization, and monthly reporting. We tailor the strategy to your specific business goals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you guarantee first page rankings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No reputable SEO company can guarantee specific rankings because search algorithms are controlled by Google, not us. What we guarantee is following best practices, transparent reporting, and consistent effort toward improving your visibility. We focus on metrics that matter: traffic, leads, and revenue."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you measure SEO success?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We track keyword rankings, organic traffic, click-through rates, bounce rates, time on page, and most importantly—conversions and leads from organic search. You'll receive monthly reports showing progress and ROI. We focus on business outcomes, not just vanity metrics."
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
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50"></div>

          {/* Decorative shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#03afdc]/20 to-[#0f3e66]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-[#03afdc]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-950 mb-8 leading-tight">
                  SEO That Gets You Found by Customers <span className="gradient-text">Ready to Buy</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl leading-relaxed"
              >
                Stop being invisible online. Our SEO strategies put your business in front of people actively searching for what you offer—turning searches into sales.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link
                  href="/#contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-[#03afdc] via-[#0f3e66] to-[#03afdc] text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 overflow-hidden animate-gradient hover:scale-105 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>

                <a
                  href="#features"
                  className="group px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#03afdc]/50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
                >
                  <span className="flex items-center justify-center">
                    Learn More
                    <svg className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 mb-6">
                What We Optimize for Your Business
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A comprehensive approach to SEO that covers every factor affecting your search rankings.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#03afdc] via-[#0f3e66] to-[#03afdc] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>

                  <div className="relative glass-card p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-500">
                    <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#03afdc] to-[#0f3e66] flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      {feature.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-[#03afdc] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-cream-50 to-white relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 mb-6">
                Our SEO Process
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A data-driven approach to improving your search visibility and driving organic growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#03afdc] to-[#0f3e66] flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 mb-6">
                Why Choose Litzor for SEO
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We don't just optimize for search engines—we optimize for business results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#03afdc] to-[#0f3e66] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-950 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-cream-50 to-white relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about our SEO optimization services.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-950 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f3e66] via-[#03afdc] to-[#0f3e66] animate-gradient"></div>

          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#03afdc]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to Rank Higher?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's analyze your current SEO performance and create a strategy to get you found by more customers. Get started with a free SEO audit today.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-3 px-12 py-6 bg-white text-[#03afdc] font-bold text-lg rounded-2xl hover:bg-cream-50 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                  <span className="relative z-10">Get a Free SEO Audit</span>

                  <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12 bg-cream-50">
          <div className="container mx-auto px-4">
            <Link
              href="/"
              className="inline-flex items-center text-red-500 hover:text-[#03afdc] font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t-4 border-[#03afdc] text-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Image src="/logo.svg" alt="Litzor Logo" width={40} height={40} className="mr-2" />
                <span className="text-2xl font-bold text-gray-900">Litzor</span>
              </div>
              <p className="text-gray-600">
              Marketing That Brings You More Business.
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
    </div>
  );
}

export default SEOOptimizationPage;
