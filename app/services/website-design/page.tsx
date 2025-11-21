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

const WebsiteDesignPage: FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Custom Website Design",
      description: "Unique, branded designs tailored to your business—not cookie-cutter templates. Every element is crafted to reflect your identity and appeal to your target customers.",
      icon: "🎨"
    },
    {
      title: "Responsive Development",
      description: "Your website looks and works perfectly on every device—phones, tablets, and desktops. Mobile-first development ensures the best experience for all visitors.",
      icon: "📱"
    },
    {
      title: "Speed & Performance",
      description: "Lightning-fast load times that keep visitors engaged and improve your search rankings. We optimize every image, script, and asset for maximum performance.",
      icon: "⚡"
    },
    {
      title: "SEO-Ready Foundation",
      description: "Built with search engines in mind from day one. Proper structure, meta tags, schema markup, and technical SEO best practices are baked into every site.",
      icon: "🔍"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discover",
      description: "We learn about your business, goals, competitors, and target audience to create a strategic plan."
    },
    {
      step: "2",
      title: "Design",
      description: "Custom mockups and wireframes bring your vision to life with revisions until it's perfect."
    },
    {
      step: "3",
      title: "Develop",
      description: "Clean, modern code transforms designs into a fast, functional website."
    },
    {
      step: "4",
      title: "Launch",
      description: "Thorough testing, optimization, and a smooth launch with ongoing support."
    }
  ];

  const benefits = [
    {
      title: "Mobile-First Design",
      description: "Over 60% of web traffic comes from mobile devices. Your site will look stunning and convert visitors on every screen size."
    },
    {
      title: "Fast Load Times",
      description: "Every second counts. Our optimized sites load in under 3 seconds, reducing bounce rates and improving conversions."
    },
    {
      title: "Built for Conversions",
      description: "Strategic layouts, compelling CTAs, and user-friendly navigation guide visitors toward taking action."
    },
    {
      title: "Easy to Manage",
      description: "Update content, add pages, and make changes yourself with intuitive content management—no coding required."
    }
  ];

  const faqs: FAQProps[] = [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites take 4-8 weeks from kickoff to launch, depending on complexity and content readiness. Simple sites can be completed faster, while larger projects with custom features may take longer. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What's included in your web design service?",
      answer: "Our service includes discovery and strategy, custom design mockups, responsive development, SEO foundation, contact forms, analytics setup, basic security, and launch support. We also provide training so you can manage your content independently."
    },
    {
      question: "Do you provide hosting and maintenance?",
      answer: "Yes, we offer managed hosting and maintenance packages that include security updates, backups, uptime monitoring, and technical support. This ensures your site stays fast, secure, and up-to-date without you having to worry about the technical details."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. Every website we build is fully responsive and mobile-first. We test on multiple devices and screen sizes to ensure your site looks great and functions perfectly whether visitors are on a phone, tablet, or desktop computer."
    },
    {
      question: "Can I update the website myself?",
      answer: "Yes! We can build sites with user-friendly content management systems that let you easily update text, images, and pages without any coding knowledge. We also provide training and documentation so you feel confident making changes on your own."
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Litzor" />
        <meta name="keywords" content="website design, web development, responsive design, custom website, small business website, local business web design, mobile-friendly website, SEO website, landing page design" />
        <link rel="canonical" href="https://www.getlitzor.com/services/website-design" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.svg" />

        <title>Website Design & Development for Local Businesses | Litzor</title>
        <meta name="description" content="Build beautiful, high-performing websites that convert visitors into customers. Litzor creates custom, mobile-friendly websites designed to grow your local business." />

        {/* Open Graph */}
        <meta property="og:title" content="Website Design & Development for Local Businesses | Litzor" />
        <meta property="og:description" content="Build beautiful, high-performing websites that convert visitors into customers. Custom, mobile-friendly websites for local businesses." />
        <meta property="og:url" content="https://www.getlitzor.com/services/website-design" />
        <meta property="og:site_name" content="Litzor" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Design & Development for Local Businesses | Litzor" />
        <meta name="twitter:description" content="Build beautiful, high-performing websites that convert visitors into customers." />
        <meta name="twitter:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Service Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Website Design & Development",
              "serviceType": "Web Design",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Litzor",
                "url": "https://www.getlitzor.com",
                "logo": "https://www.getlitzor.com/logo.svg"
              },
              "description": "Build beautiful, high-performing websites that convert visitors into customers. Custom website design and development for local businesses.",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Website Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Website Design",
                      "description": "Unique, branded website designs tailored to your business"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Responsive Development",
                      "description": "Mobile-first websites that work on all devices"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Website Maintenance",
                      "description": "Ongoing hosting, security, and support services"
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
                  "name": "Website Design",
                  "item": "https://www.getlitzor.com/services/website-design"
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
                  "name": "How long does it take to build a website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most websites take 4-8 weeks from kickoff to launch, depending on complexity and content readiness. Simple sites can be completed faster, while larger projects with custom features may take longer. We'll provide a detailed timeline during our initial consultation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's included in your web design service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our service includes discovery and strategy, custom design mockups, responsive development, SEO foundation, contact forms, analytics setup, basic security, and launch support. We also provide training so you can manage your content independently."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide hosting and maintenance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer managed hosting and maintenance packages that include security updates, backups, uptime monitoring, and technical support. This ensures your site stays fast, secure, and up-to-date without you having to worry about the technical details."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will my website be mobile-friendly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Every website we build is fully responsive and mobile-first. We test on multiple devices and screen sizes to ensure your site looks great and functions perfectly whether visitors are on a phone, tablet, or desktop computer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I update the website myself?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We build sites with user-friendly content management systems that let you easily update text, images, and pages without any coding knowledge. We also provide training and documentation so you feel confident making changes on your own."
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
                  Websites That Convert Visitors Into <span className="gradient-text">Customers</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl leading-relaxed"
              >
                Your website is your hardest-working employee. We build beautiful, fast, mobile-friendly sites that showcase your business and turn visitors into paying customers.
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

                <Link
                  href="/#work"
                  className="group px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#03afdc]/50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
                >
                  <span className="flex items-center justify-center">
                    View Our Work
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
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
                What We Build for Your Business
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Every website we create combines stunning design with powerful functionality to help your business succeed online.
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
                Our Website Development Process
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A proven four-step process that delivers results on time and on budget.
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
                Why Choose Litzor for Website Design
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We don't just build websites—we build growth engines for your business.
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
                Get answers to common questions about our website design services.
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
                Ready for a Website That Works?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's build a website that represents your business and drives real results. Get started with a free consultation today.
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

export default WebsiteDesignPage;
