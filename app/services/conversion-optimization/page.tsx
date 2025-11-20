'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function ConversionOptimizationPage() {
  const features = [
    {
      title: "A/B Testing",
      description: "Run data-driven experiments to identify what resonates with your audience and drives more conversions.",
      icon: "🔬"
    },
    {
      title: "Landing Page Optimization",
      description: "Transform your landing pages into high-converting assets with proven design and copy strategies.",
      icon: "📄"
    },
    {
      title: "User Experience Analysis",
      description: "Identify friction points and optimize user flows to create seamless conversion paths.",
      icon: "🎯"
    },
    {
      title: "Funnel Optimization",
      description: "Analyze and improve every step of your sales funnel to maximize conversions and revenue.",
      icon: "📈"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Audit",
      description: "We analyze your current conversion rates, user behavior, and identify optimization opportunities."
    },
    {
      step: "02",
      title: "Test",
      description: "We design and run controlled experiments to validate hypotheses and find winning variations."
    },
    {
      step: "03",
      title: "Optimize",
      description: "We implement winning changes and continuously refine based on data and user feedback."
    },
    {
      step: "04",
      title: "Scale",
      description: "We apply successful strategies across your digital presence to maximize overall conversion rates."
    }
  ];

  const benefits = [
    "Increase conversion rates by 20-50% or more",
    "Make data-driven decisions instead of guessing",
    "Reduce cost per acquisition significantly",
    "Maximize ROI from existing traffic"
  ];

  const faqs = [
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
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Conversion Optimization Services",
            "description": "Professional conversion rate optimization services that turn more visitors into customers through A/B testing, UX analysis, and data-driven strategies.",
            "provider": {
              "@type": "Organization",
              "name": "Litzor",
              "url": "https://www.getlitzor.com"
            },
            "areaServed": "US",
            "serviceType": "Conversion Rate Optimization"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/#services"
              className="inline-flex items-center text-red-500 hover:text-red-600 mb-6 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turn More Visitors Into Customers
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Stop leaving money on the table. Our conversion optimization services use data-driven testing and proven strategies to maximize the value of every visitor to your site.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Converting More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Conversion Optimization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use proven methodologies to identify opportunities and systematically improve your conversion rates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-cream-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Optimization Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to improving your conversion rates through testing and iteration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-red-500 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Invest in Conversion Optimization?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-cream-50 p-6 rounded-xl"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 to-orange-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Boost Your Conversion Rates?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s analyze your site and identify opportunities to turn more visitors into paying customers.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-red-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Your Free CRO Audit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
