'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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

const AIAutomationPage: FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Customer Communication",
      description: "Automate responses to inquiries, follow-ups, and appointment confirmations. Keep customers engaged without lifting a finger.",
      icon: "💬"
    },
    {
      title: "Data Entry & Processing",
      description: "Eliminate manual data entry with intelligent systems that capture, validate, and organize information automatically.",
      icon: "📊"
    },
    {
      title: "Appointment Scheduling",
      description: "Let AI handle booking, rescheduling, and reminders. Reduce no-shows and free up your team's time.",
      icon: "📅"
    },
    {
      title: "Reporting & Analytics",
      description: "Get automated reports delivered to your inbox. Track KPIs and make data-driven decisions without spreadsheet headaches.",
      icon: "📈"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Analyze",
      description: "We audit your current workflows to identify repetitive tasks and automation opportunities."
    },
    {
      step: "2",
      title: "Design",
      description: "Custom automation workflows are designed to fit your specific business processes."
    },
    {
      step: "3",
      title: "Build",
      description: "We implement and integrate automations with your existing tools and systems."
    },
    {
      step: "4",
      title: "Optimize",
      description: "Continuous monitoring and refinement ensures peak performance and ROI."
    }
  ];

  const benefits = [
    {
      title: "Save Hours Every Week",
      description: "Reclaim 10-20+ hours per week by automating repetitive tasks. Focus on what actually grows your business."
    },
    {
      title: "Reduce Human Error",
      description: "Automated systems don't get tired or make typos. Ensure accuracy and consistency in every process."
    },
    {
      title: "Scale Without Hiring",
      description: "Handle 10x the workload without adding headcount. AI automation grows with your business."
    },
    {
      title: "24/7 Operations",
      description: "Your automations work around the clock—responding to leads, processing orders, and updating records while you sleep."
    }
  ];

  const faqs: FAQProps[] = [
    {
      question: "What is AI automation and how does it work?",
      answer: "AI automation uses artificial intelligence and software to perform repetitive tasks that would normally require human effort. This includes things like responding to emails, scheduling appointments, processing data, and generating reports. The AI learns your business rules and executes tasks automatically, freeing your team to focus on higher-value work."
    },
    {
      question: "What tasks can be automated in my business?",
      answer: "Common automation candidates include email responses, appointment scheduling, invoice processing, data entry, social media posting, customer follow-ups, report generation, and inventory updates. During our consultation, we'll identify the specific tasks in your business that offer the highest ROI when automated."
    },
    {
      question: "How much time will I actually save with automation?",
      answer: "Most businesses save 10-20+ hours per week after implementing automation. The exact savings depend on your current processes, but we typically see ROI within the first month. We'll provide specific time-saving projections based on your workflow analysis."
    },
    {
      question: "Is AI automation expensive to implement?",
      answer: "AI automation is more affordable than ever, and the cost is typically offset by labor savings within 1-3 months. We offer solutions for businesses of all sizes, from simple automations to comprehensive workflow systems. Think of it as hiring a tireless assistant at a fraction of the cost."
    },
    {
      question: "Will automation replace my employees?",
      answer: "No—automation handles the tedious, repetitive work so your employees can focus on what they do best: building relationships, solving complex problems, and growing your business. Most clients find their team is happier and more productive after automation frees them from mundane tasks."
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Litzor" />
        <meta name="keywords" content="AI automation, business automation, workflow automation, process automation, AI tools, automated scheduling, automated reporting, small business automation, local business AI" />
        <link rel="canonical" href="https://www.getlitzor.com/services/ai-automation" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.svg" />

        <title>AI Automation & Workflows for Local Businesses | Litzor</title>
        <meta name="description" content="Streamline your business operations with custom AI-powered automation that saves time and reduces errors. Litzor helps local businesses automate repetitive tasks and scale efficiently." />

        {/* Open Graph */}
        <meta property="og:title" content="AI Automation & Workflows for Local Businesses | Litzor" />
        <meta property="og:description" content="Streamline your business operations with custom AI-powered automation that saves time and reduces errors." />
        <meta property="og:url" content="https://www.getlitzor.com/services/ai-automation" />
        <meta property="og:site_name" content="Litzor" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation & Workflows for Local Businesses | Litzor" />
        <meta name="twitter:description" content="Streamline your business operations with custom AI-powered automation that saves time and reduces errors." />
        <meta name="twitter:image" content="https://www.getlitzor.com/og-image.jpg" />

        {/* Service Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Automation & Workflows",
              "serviceType": "Business Process Automation",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Litzor",
                "url": "https://www.getlitzor.com",
                "logo": "https://www.getlitzor.com/logo.svg"
              },
              "description": "Streamline your business operations with custom AI-powered automation that saves time and reduces errors. Professional automation services for local businesses.",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Automation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Customer Communication Automation",
                      "description": "Automated responses, follow-ups, and appointment confirmations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Workflow Automation",
                      "description": "Custom automated workflows for business processes"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Reporting Automation",
                      "description": "Automated reports and analytics dashboards"
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
                  "name": "AI Automation",
                  "item": "https://www.getlitzor.com/services/ai-automation"
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
                  "name": "What is AI automation and how does it work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI automation uses artificial intelligence and software to perform repetitive tasks that would normally require human effort. This includes things like responding to emails, scheduling appointments, processing data, and generating reports. The AI learns your business rules and executes tasks automatically, freeing your team to focus on higher-value work."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tasks can be automated in my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common automation candidates include email responses, appointment scheduling, invoice processing, data entry, social media posting, customer follow-ups, report generation, and inventory updates. During our consultation, we'll identify the specific tasks in your business that offer the highest ROI when automated."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much time will I actually save with automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most businesses save 10-20+ hours per week after implementing automation. The exact savings depend on your current processes, but we typically see ROI within the first month. We'll provide specific time-saving projections based on your workflow analysis."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is AI automation expensive to implement?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI automation is more affordable than ever, and the cost is typically offset by labor savings within 1-3 months. We offer solutions for businesses of all sizes, from simple automations to comprehensive workflow systems. Think of it as hiring a tireless assistant at a fraction of the cost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will automation replace my employees?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No—automation handles the tedious, repetitive work so your employees can focus on what they do best: building relationships, solving complex problems, and growing your business. Most clients find their team is happier and more productive after automation frees them from mundane tasks."
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
                  AI Automation That Saves Time and <span className="gradient-text">Scales</span> Your Business
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl leading-relaxed"
              >
                Stop doing repetitive tasks manually. Our custom AI automations handle the busywork so you can focus on growing your business and serving your customers.
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
                What We Automate for Your Business
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                From customer communication to data processing, we automate the tasks that drain your time and energy.
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
                Our Automation Process
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A systematic approach to identifying, building, and optimizing automations for your business.
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
                Why Choose Litzor for AI Automation
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We don't just automate tasks—we transform how your business operates.
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
                Get answers to common questions about our AI automation services.
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
                Ready to Automate Your Business?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's identify the automations that will save you the most time and money. Get started with a free workflow analysis today.
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

      <Footer />
    </div>
  );
}

export default AIAutomationPage;
