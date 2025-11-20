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

const LeadGenerationPage: FC = () => {
  const features: FeatureProps[] = [
    {
      title: "High-Converting Landing Pages",
      description: "Custom-designed landing pages optimized for conversions, with compelling copy and clear calls-to-action that turn visitors into leads.",
      icon: "📄"
    },
    {
      title: "Sales Funnel Optimization",
      description: "Strategic funnel design that guides prospects through each stage of the buyer's journey, maximizing conversion rates at every step.",
      icon: "🎯"
    },
    {
      title: "Smart Lead Capture Forms",
      description: "Intelligent forms that capture the right information without friction, integrating seamlessly with your CRM and email marketing tools.",
      icon: "📝"
    },
    {
      title: "Lead Qualification & Scoring",
      description: "Automated lead scoring systems that prioritize your hottest prospects, so your sales team focuses on leads ready to buy.",
      icon: "⭐"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Attract",
      description: "Drive qualified traffic to your landing pages through targeted campaigns and SEO optimization."
    },
    {
      step: "2",
      title: "Capture",
      description: "Convert visitors into leads with compelling offers and optimized capture forms."
    },
    {
      step: "3",
      title: "Qualify",
      description: "Score and segment leads based on behavior and engagement to identify sales-ready prospects."
    },
    {
      step: "4",
      title: "Convert",
      description: "Nurture qualified leads with automated sequences until they're ready to become customers."
    }
  ];

  const benefits = [
    {
      title: "Consistent Lead Flow",
      description: "Never worry about where your next customer is coming from. Our systems deliver a steady stream of qualified leads to your business."
    },
    {
      title: "Higher Quality Leads",
      description: "Stop wasting time on tire-kickers. Our qualification process ensures you only talk to prospects who are ready and able to buy."
    },
    {
      title: "Measurable ROI",
      description: "Track every lead from first touch to closed deal. Know exactly what's working and what your cost per acquisition is."
    },
    {
      title: "Scalable Growth",
      description: "Our lead generation systems grow with your business. Increase volume without increasing your workload."
    }
  ];

  const faqs: FAQProps[] = [
    {
      question: "What is lead generation and why do I need it?",
      answer: "Lead generation is the process of attracting potential customers and capturing their contact information so you can nurture them into paying customers. Without a consistent lead generation strategy, businesses struggle with unpredictable revenue and rely too heavily on referrals or word-of-mouth."
    },
    {
      question: "How long does it take to see results from lead generation?",
      answer: "Most clients start seeing leads within the first 2-4 weeks after launch. However, it typically takes 60-90 days to fully optimize your funnel and reach peak performance. We continuously test and improve to maximize your results over time."
    },
    {
      question: "What industries do you work with for lead generation?",
      answer: "We specialize in lead generation for local service businesses including contractors, healthcare providers, professional services, home services, and B2B companies. Our strategies are customized for each industry's unique sales cycle and customer journey."
    },
    {
      question: "How do you ensure the leads are high quality?",
      answer: "We use multiple qualification methods including targeted traffic sources, qualifying questions in forms, lead scoring based on behavior, and automated nurture sequences. This ensures only genuinely interested and qualified prospects reach your sales team."
    },
    {
      question: "What's included in your lead generation service?",
      answer: "Our service includes landing page design and development, lead capture form creation, CRM integration, lead scoring setup, automated email sequences, A/B testing, analytics tracking, and monthly performance reporting with optimization recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Litzor" />
        <meta name="keywords" content="lead generation, lead capture, sales funnel, landing page design, lead qualification, lead scoring, local business leads, B2B lead generation, conversion optimization" />
        <link rel="canonical" href="https://www.getlitzor.com/services/lead-generation" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <title>Lead Generation Services for Local Businesses | Litzor</title>
        <meta name="description" content="Attract and capture qualified leads with proven funnels and landing pages that convert. Litzor's lead generation services help local businesses grow with consistent, high-quality leads." />

        {/* Open Graph */}
        <meta property="og:title" content="Lead Generation Services for Local Businesses | Litzor" />
        <meta property="og:description" content="Attract and capture qualified leads with proven funnels and landing pages that convert. Get consistent, high-quality leads for your business." />
        <meta property="og:url" content="https://www.getlitzor.com/services/lead-generation" />
        <meta property="og:site_name" content="Litzor" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lead Generation Services for Local Businesses | Litzor" />
        <meta name="twitter:description" content="Attract and capture qualified leads with proven funnels and landing pages that convert." />
        <meta name="twitter:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Service Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Lead Generation Services",
              "serviceType": "Lead Generation",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Litzor",
                "url": "https://www.getlitzor.com",
                "logo": "https://www.getlitzor.com/logo.png"
              },
              "description": "Attract and capture qualified leads with proven funnels and landing pages that convert. Professional lead generation services for local businesses.",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Lead Generation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Landing Page Design",
                      "description": "High-converting landing pages optimized for lead capture"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sales Funnel Development",
                      "description": "Strategic funnel design that maximizes conversion rates"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Lead Qualification",
                      "description": "Automated lead scoring and qualification systems"
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
                  "name": "Lead Generation",
                  "item": "https://www.getlitzor.com/services/lead-generation"
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
                  "name": "What is lead generation and why do I need it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lead generation is the process of attracting potential customers and capturing their contact information so you can nurture them into paying customers. Without a consistent lead generation strategy, businesses struggle with unpredictable revenue and rely too heavily on referrals or word-of-mouth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to see results from lead generation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most clients start seeing leads within the first 2-4 weeks after launch. However, it typically takes 60-90 days to fully optimize your funnel and reach peak performance. We continuously test and improve to maximize your results over time."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries do you work with for lead generation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in lead generation for local service businesses including contractors, healthcare providers, professional services, home services, and B2B companies. Our strategies are customized for each industry's unique sales cycle and customer journey."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you ensure the leads are high quality?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use multiple qualification methods including targeted traffic sources, qualifying questions in forms, lead scoring based on behavior, and automated nurture sequences. This ensures only genuinely interested and qualified prospects reach your sales team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's included in your lead generation service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our service includes landing page design and development, lead capture form creation, CRM integration, lead scoring setup, automated email sequences, A/B testing, analytics tracking, and monthly performance reporting with optimization recommendations."
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-pink-50"></div>

          {/* Decorative shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-950 mb-8 leading-tight">
                  Lead Generation That Fills Your <span className="gradient-text">Pipeline</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl leading-relaxed"
              >
                Stop chasing leads. Start attracting them. Our proven funnels and landing pages deliver a consistent stream of qualified prospects ready to become customers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link
                  href="/#contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 overflow-hidden animate-gradient hover:scale-105 text-center"
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
                  className="group px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-red-300 hover:bg-white transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 mb-6">
                How We Generate Leads for Your Business
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive approach combines strategy, design, and technology to create lead generation systems that work around the clock.
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>

                  <div className="relative glass-card p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-500">
                    <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      {feature.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-red-600 transition-colors duration-300">
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
                Our Lead Generation Process
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A proven four-step process that systematically turns strangers into customers.
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
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
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
                Why Choose Litzor for Lead Generation
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We don't just generate leads—we generate growth opportunities for your business.
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
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
                Get answers to common questions about our lead generation services.
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 animate-gradient"></div>

          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to Fill Your Pipeline?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's build a lead generation system that works for your business. Get started with a free consultation today.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-3 px-12 py-6 bg-white text-red-600 font-bold text-lg rounded-2xl hover:bg-cream-50 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                  <span className="relative z-10">Book a Free Consultation</span>

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
              className="inline-flex items-center text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LeadGenerationPage;
