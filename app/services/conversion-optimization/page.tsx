'use client';

import Head from 'next/head';
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

const ConversionOptimizationPage: FC = () => {
  const features: FeatureProps[] = [
    {
      title: "A/B Testing",
      description: "Run data-driven experiments to identify what resonates with your audience and drives more conversions. We test headlines, CTAs, layouts, and more.",
      icon: "🔬"
    },
    {
      title: "Landing Page Optimization",
      description: "Transform your landing pages into high-converting assets with proven design and copy strategies that guide visitors to take action.",
      icon: "📄"
    },
    {
      title: "User Experience Analysis",
      description: "Identify friction points and optimize user flows to create seamless conversion paths. We use heatmaps, session recordings, and user feedback.",
      icon: "🎯"
    },
    {
      title: "Funnel Optimization",
      description: "Analyze and improve every step of your sales funnel to maximize conversions and revenue. Reduce drop-offs and increase completion rates.",
      icon: "📈"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Audit",
      description: "We analyze your current conversion rates, user behavior, and identify optimization opportunities."
    },
    {
      step: "2",
      title: "Test",
      description: "We design and run controlled experiments to validate hypotheses and find winning variations."
    },
    {
      step: "3",
      title: "Optimize",
      description: "We implement winning changes and continuously refine based on data and user feedback."
    },
    {
      step: "4",
      title: "Scale",
      description: "We apply successful strategies across your digital presence to maximize overall conversion rates."
    }
  ];

  const benefits = [
    {
      title: "Increase Conversion Rates",
      description: "Boost your conversion rates by 20-50% or more with systematic testing and optimization strategies."
    },
    {
      title: "Data-Driven Decisions",
      description: "Make confident decisions based on real user data instead of guessing what works best."
    },
    {
      title: "Lower Acquisition Costs",
      description: "Reduce your cost per acquisition significantly by getting more value from your existing traffic."
    },
    {
      title: "Maximize ROI",
      description: "Get the highest possible return from your marketing spend by converting more visitors into customers."
    }
  ];

  const faqs: FAQProps[] = [
    {
      question: "What is conversion rate optimization (CRO)?",
      answer: "Conversion rate optimization is the systematic process of increasing the percentage of visitors who take a desired action on your website—whether that's making a purchase, filling out a form, or signing up for a newsletter. We use data, testing, and user research to identify and remove barriers to conversion."
    },
    {
      question: "How long does it take to see results from CRO?",
      answer: "Initial insights and quick wins can be implemented within 2-4 weeks. However, meaningful, statistically significant results from A/B testing typically require 4-8 weeks depending on your traffic volume. CRO is an ongoing process—the longer you optimize, the more improvements you'll see."
    },
    {
      question: "What's a good conversion rate?",
      answer: "Average conversion rates vary by industry, typically ranging from 2-5% for e-commerce and 5-15% for lead generation. However, 'good' is relative to your current performance. Our goal is to continuously improve your specific conversion rate through systematic testing and optimization."
    },
    {
      question: "Do I need a lot of traffic for A/B testing?",
      answer: "A/B testing works best with higher traffic volumes to reach statistical significance faster. However, we can adapt our approach for lower-traffic sites using techniques like sequential testing, focusing on high-impact pages, or conducting qualitative research alongside quantitative testing."
    },
    {
      question: "What pages should I optimize first?",
      answer: "We typically prioritize pages with the highest traffic and conversion potential—usually your homepage, key landing pages, product pages, and checkout or contact forms. We analyze your data to identify where optimization will have the biggest impact on your bottom line."
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Litzor" />
        <meta name="keywords" content="conversion optimization, CRO, A/B testing, landing page optimization, conversion rate, user experience, funnel optimization, website optimization" />
        <link rel="canonical" href="https://www.getlitzor.com/services/conversion-optimization" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <title>Conversion Optimization Services | Litzor</title>
        <meta name="description" content="Increase your conversion rates with data-driven optimization. A/B testing, landing page optimization, and UX analysis to turn more visitors into customers." />

        {/* Open Graph */}
        <meta property="og:title" content="Conversion Optimization Services | Litzor" />
        <meta property="og:description" content="Turn more visitors into customers with data-driven conversion rate optimization services." />
        <meta property="og:url" content="https://www.getlitzor.com/services/conversion-optimization" />
        <meta property="og:site_name" content="Litzor" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Conversion Optimization Services | Litzor" />
        <meta name="twitter:description" content="Turn more visitors into customers with data-driven conversion rate optimization services." />
        <meta name="twitter:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Service Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Conversion Optimization Services",
              "serviceType": "Conversion Rate Optimization",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Litzor",
                "url": "https://www.getlitzor.com",
                "logo": "https://www.getlitzor.com/logo.png"
              },
              "description": "Professional conversion rate optimization services that turn more visitors into customers through A/B testing, UX analysis, and data-driven strategies.",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Conversion Optimization Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "A/B Testing",
                      "description": "Data-driven experiments to identify winning variations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Landing Page Optimization",
                      "description": "Transform landing pages into high-converting assets"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Funnel Optimization",
                      "description": "Improve every step of your sales funnel"
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
                  "name": "Conversion Optimization",
                  "item": "https://www.getlitzor.com/services/conversion-optimization"
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
                  "name": "What is conversion rate optimization (CRO)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Conversion rate optimization is the systematic process of increasing the percentage of visitors who take a desired action on your website—whether that's making a purchase, filling out a form, or signing up for a newsletter. We use data, testing, and user research to identify and remove barriers to conversion."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to see results from CRO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Initial insights and quick wins can be implemented within 2-4 weeks. However, meaningful, statistically significant results from A/B testing typically require 4-8 weeks depending on your traffic volume. CRO is an ongoing process—the longer you optimize, the more improvements you'll see."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's a good conversion rate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Average conversion rates vary by industry, typically ranging from 2-5% for e-commerce and 5-15% for lead generation. However, 'good' is relative to your current performance. Our goal is to continuously improve your specific conversion rate through systematic testing and optimization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a lot of traffic for A/B testing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A/B testing works best with higher traffic volumes to reach statistical significance faster. However, we can adapt our approach for lower-traffic sites using techniques like sequential testing, focusing on high-impact pages, or conducting qualitative research alongside quantitative testing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What pages should I optimize first?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We typically prioritize pages with the highest traffic and conversion potential—usually your homepage, key landing pages, product pages, and checkout or contact forms. We analyze your data to identify where optimization will have the biggest impact on your bottom line."
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
                  Turn More Visitors Into <span className="gradient-text">Customers</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl leading-relaxed"
              >
                Stop leaving money on the table. Our conversion optimization services use data-driven testing and proven strategies to maximize the value of every visitor to your site.
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
                How We Optimize Your Conversions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive approach combines data analysis, user research, and systematic testing to continuously improve your conversion rates.
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
                Our Optimization Process
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A systematic approach to improving your conversion rates through testing and iteration.
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
                Why Choose Litzor for Conversion Optimization
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We don't just run tests—we deliver measurable improvements to your bottom line.
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
                Get answers to common questions about our conversion optimization services.
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
                Ready to Boost Your Conversion Rates?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let&apos;s analyze your site and identify opportunities to turn more visitors into paying customers.
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

                  <span className="relative z-10">Get Your Free CRO Audit</span>

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

export default ConversionOptimizationPage;
