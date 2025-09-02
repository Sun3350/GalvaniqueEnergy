// src/app/faq/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    name: "General",
    questions: [
      {
        question: "What areas do you serve?",
        answer:
          "We currently serve the Solar City metropolitan area and surrounding regions within a 50-mile radius. Contact us to see if we service your area.",
      },
      {
        question: "How long has Galvanique been in business?",
        answer:
          "We have been providing reliable electrical and solar services for over 10 years, with hundreds of satisfied customers.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes, all our technicians are fully licensed, bonded, and insured for your protection and peace of mind.",
      },
    ],
  },
  {
    name: "Services",
    questions: [
      {
        question: "What types of electrical services do you offer?",
        answer:
          "We offer a full range of electrical services including installation, repair, maintenance, panel upgrades, wiring, lighting installation, and more.",
      },
      {
        question: "Do you provide solar panel installation?",
        answer:
          "Yes, we specialize in both residential and commercial solar panel installation, including system design, permitting, installation, and maintenance.",
      },
      {
        question: "Do you offer emergency services?",
        answer:
          "Yes, we provide 24/7 emergency electrical services for urgent issues that cannot wait for regular business hours.",
      },
    ],
  },
  {
    name: "Pricing",
    questions: [
      {
        question: "How do you price your services?",
        answer:
          "We provide transparent pricing based on the scope of work, materials needed, and time required. We offer free estimates for all projects.",
      },
      {
        question: "Do you offer financing options?",
        answer:
          "Yes, we offer flexible financing options for larger projects, including solar installations. Ask our consultants about available plans.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No, we believe in transparent pricing. We provide detailed quotes upfront and will notify you immediately if any unexpected issues arise that may affect the cost.",
      },
    ],
  },
  {
    name: "Solar",
    questions: [
      {
        question: "How long does a solar installation take?",
        answer:
          "Most residential solar installations take between 1-3 days, depending on the system size and complexity. This excludes the permitting and inspection process.",
      },
      {
        question: "What maintenance do solar panels require?",
        answer:
          "Solar panels require minimal maintenance. We recommend occasional cleaning and annual inspections to ensure optimal performance.",
      },
      {
        question: "Will solar panels work during a power outage?",
        answer:
          "Standard grid-tied systems will not work during a power outage for safety reasons. However, we can install battery backup systems that will provide power during outages.",
      },
    ],
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    details: "(555) 123-4567",
    action: "Call now",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message anytime",
    details: "info@galvanique.com",
    action: "Send email",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us during business hours",
    details: "Mon-Fri, 8am-6pm",
    action: "Start chat",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-6">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="text-lg font-medium text-[var(--primary)]">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--primary)] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4">
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 text-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Find answers to common questions about our services, pricing, and
            processes
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:px-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <motion.div
              className="lg:w-1/4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-[var(--primary)] mb-4">
                  Categories
                </h2>
                <div className="space-y-2">
                  {faqCategories.map((category, index) => (
                    <button
                      key={index}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === index
                          ? "bg-[var(--primary)] text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setActiveCategory(index)}>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FAQ Items */}
            <motion.div
              className="lg:w-3/4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                    <HelpCircle className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--primary)]">
                    {faqCategories[activeCategory].name} Questions
                  </h2>
                </div>

                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {faqCategories[activeCategory].questions.map(
                    (item, index) => (
                      <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                      />
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:px-10 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-[var(--primary)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Still Have Questions?
          </motion.h2>
          <motion.p
            className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Our team is here to help you with any questions you may have
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {method.description}
                  </p>
                  <p className="font-medium mb-4">{method.details}</p>
                  <Button className="bg-[var(--accent)] hover:bg-green-600">
                    {method.action}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
