// src/app/privacy/page.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, User, Database } from "lucide-react";

const privacySections = [
  {
    icon: Database,
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you request a quote, create an account, or contact us. This may include your name, email address, phone number, address, and project details.",
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services, communicate with you about products, services, offers, and provide customer support.",
  },
  {
    icon: Lock,
    title: "Information Sharing",
    content:
      "We do not sell your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential.",
  },
  {
    icon: Shield,
    title: "Data Security",
    content:
      "We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    icon: User,
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information.",
  },
];

export default function Privacy() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16  text-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:px-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              At Galvanique, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>

            {privacySections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--primary)]">
                      {section.title}
                    </h2>
                  </div>
                  <p>{section.content}</p>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
                Changes to This Policy
              </h2>
              <p>
                {` We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.`}
              </p>

              <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@galvanique.com
                <br />
                <strong>Phone:</strong> (555) 123-4567
                <br />
                <strong>Address:</strong> 123 Energy Street, Solar City, SC
                12345
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
