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

const AnalyticsPage: FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Website Analytics",
      description: "Track visitor behavior, traffic sources, page performance, and engagement metrics to understand how people interact with your site.",
      icon: "📊"
    },
    {
      title: "Conversion Tracking",
      description: "Monitor form submissions, phone calls, purchases, and other key actions to measure your marketing ROI accurately.",
      icon: "🎯"
    },
    {
      title: "Customer Journey Mapping",
      description: "See the complete path customers take from first touch to conversion, identifying drop-off points and optimization opportunities.",
      icon: "🗺️"
    },
    {
      title: "Custom Dashboards & Reports",
      description: "Get the metrics that matter most to your business in easy-to-understand dashboards delivered on your schedule.",
      icon: "📈"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Setup",
      description: "Implement tracking codes, goals, and events across your digital properties."
    },
    {
      step: "2",
      title: "Track",
      description: "Collect data on traffic, behavior, conversions, and customer interactions."
    },
    {
      step: "3",
      title: "Analyze",
      description: "Identify trends, opportunities, and areas for improvement in your data."
    },
    {
      step: "4",
      title: "Report",
      description: "Deliver actionable insights with clear recommendations for growth."
    }
  ];

  const benefits = [
    {
      title: "Know What's Working",
      description: "Stop guessing. See exactly which marketing channels, pages, and campaigns drive results for your business."
    },
    {
      title: "Optimize Marketing Spend",
      description: "Allocate budget to what works and cut what doesn't. Every dollar should generate measurable returns."
    },
    {
      title: "Understand Your Customers",
      description: "Learn who your customers are, where they come from, and what motivates them to take action."
    },
    {
      title: "Make Confident Decisions",
      description: "Replace gut feelings with data-backed insights. Make strategic decisions with confidence."
    }
  ];

  const faqs: FAQProps[] = [
    {
      question: "What analytics do you track for businesses?",
      answer: "We track website traffic, user behavior, conversion events (form fills, calls, purchases), traffic sources, campaign performance, page engagement, bounce rates, and customer journey data. We customize tracking based on your specific business goals and the metrics that matter most to your success."
    },
    {
      question: "How often will I receive analytics reports?",
      answer: "Most clients receive monthly reports with key metrics, trends, and actionable recommendations. We also provide access to real-time dashboards so you can check performance anytime. For clients running active campaigns, we can provide weekly or bi-weekly updates."
    },
    {
      question: "Do I need technical knowledge to understand the reports?",
      answer: "Not at all. We translate complex data into clear, actionable insights. Our reports focus on business outcomes—leads, sales, ROI—not technical jargon. We also include recommendations so you know exactly what to do with the information."
    },
    {
      question: "What tools do you use for analytics?",
      answer: "We primarily use Google Analytics 4, Google Tag Manager, and Google Looker Studio for dashboards. Depending on your needs, we also integrate with CRM systems, call tracking software, heatmap tools, and marketing automation platforms to provide a complete picture."
    },
    {
      question: "How will analytics help my business grow?",
      answer: "Analytics reveals what's working and what isn't, so you can double down on successful strategies and fix underperforming areas. You'll know which marketing channels generate the best leads, which pages convert visitors, and where customers drop off—enabling data-driven growth decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Litzor" />
        <meta name="keywords" content="business analytics, website analytics, conversion tracking, data insights, Google Analytics, marketing analytics, ROI tracking, customer journey, analytics dashboard, small business analytics" />
        <link rel="canonical" href="https://www.getlitzor.com/services/analytics" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <title>Analytics & Insights for Local Businesses | Litzor</title>
        <meta name="description" content="Make data-driven decisions with comprehensive analytics and reporting tools. Litzor helps local businesses track, measure, and optimize their marketing performance." />

        {/* Open Graph */}
        <meta property="og:title" content="Analytics & Insights for Local Businesses | Litzor" />
        <meta property="og:description" content="Make data-driven decisions with comprehensive analytics and reporting tools. Track, measure, and optimize your marketing performance." />
        <meta property="og:url" content="https://www.getlitzor.com/services/analytics" />
        <meta property="og:site_name" content="Litzor" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Analytics & Insights for Local Businesses | Litzor" />
        <meta name="twitter:description" content="Make data-driven decisions with comprehensive analytics and reporting tools." />
        <meta name="twitter:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Service Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Analytics & Insights",
              "serviceType": "Business Analytics",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Litzor",
                "url": "https://www.getlitzor.com",
                "logo": "https://www.getlitzor.com/logo.png"
              },
              "description": "Make data-driven decisions with comprehensive analytics and reporting tools. Professional analytics services for local businesses.",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Analytics Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Analytics",
                      "description": "Traffic tracking, user behavior analysis, and engagement metrics"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Conversion Tracking",
                      "description": "Goal tracking, event monitoring, and ROI measurement"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Reporting",
                      "description": "Tailored dashboards and monthly performance reports"
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
                  "name": "Analytics & Insights",
                  "item": "https://www.getlitzor.com/services/analytics"
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
                  "name": "What analytics do you track for businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We track website traffic, user behavior, conversion events (form fills, calls, purchases), traffic sources, campaign performance, page engagement, bounce rates, and customer journey data. We customize tracking based on your specific business goals and the metrics that matter most to your success."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often will I receive analytics reports?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most clients receive monthly reports with key metrics, trends, and actionable recommendations. We also provide access to real-time dashboards so you can check performance anytime. For clients running active campaigns, we can provide weekly or bi-weekly updates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need technical knowledge to understand the reports?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not at all. We translate complex data into clear, actionable insights. Our reports focus on business outcomes—leads, sales, ROI—not technical jargon. We also include recommendations so you know exactly what to do with the information."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tools do you use for analytics?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We primarily use Google Analytics 4, Google Tag Manager, and Google Looker Studio for dashboards. Depending on your needs, we also integrate with CRM systems, call tracking software, heatmap tools, and marketing automation platforms to provide a complete picture."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How will analytics help my business grow?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Analytics reveals what's working and what isn't, so you can double down on successful strategies and fix underperforming areas. You'll know which marketing channels generate the best leads, which pages convert visitors, and where customers drop off—enabling data-driven growth decisions."
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
                  Data-Driven Decisions That <span className="gradient-text">Grow</span> Your Business
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl leading-relaxed"
              >
                Stop guessing what works. Our analytics and reporting tools give you clear insights into your marketing performance, so you can make confident decisions that drive real growth.
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
                What We Track for Your Business
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive tracking that gives you complete visibility into your marketing performance and customer behavior.
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
                Our Analytics Process
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A systematic approach to collecting, analyzing, and acting on your business data.
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
                Why Choose Litzor for Analytics
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We don't just give you data—we give you insights that drive action.
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
                Get answers to common questions about our analytics and reporting services.
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
                Ready to Make Data-Driven Decisions?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's set up proper tracking and start understanding what's really working in your business. Get started with a free analytics consultation today.
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

export default AnalyticsPage;
