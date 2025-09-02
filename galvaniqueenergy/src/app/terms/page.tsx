// src/app/terms/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Clipboard,
  AlertCircle,
  Scale,
  BookOpen,
} from "lucide-react";

const termsSections = [
  {
    icon: Clipboard,
    title: "Agreement to Terms",
    content:
      "By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.",
  },
  {
    icon: BookOpen,
    title: "Services Description",
    content:
      "Galvanique provides electrical and solar repair and installation services. All descriptions of services are subject to change at our discretion without notice.",
  },
  {
    icon: AlertCircle,
    title: "User Responsibilities",
    content:
      "You agree to provide accurate and complete information when requesting services. You are responsible for maintaining the confidentiality of your account information.",
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content:
      "Galvanique shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use our services.",
  },
];

export default function Terms() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 text-center text-[var(--primary)]">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            Terms of Service
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
      <section className="py-16">
        <div className="container mx-auto md:px-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              Please read these Terms of Service carefully before using our
              website and services. These terms govern your access to and use of
              Galvanique's services.
            </p>

            {termsSections.map((section, index) => {
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
              transition={{ duration: 0.6, delay: 0.4 }}>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">
                Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the state where Galvanique is registered,
                without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. We will
                provide notice of significant changes by posting a prominent
                notice on our website or sending you an email.
              </p>

              <h2 className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
                Contact Information
              </h2>
              <p>
                Questions about these Terms of Service should be sent to us at
                legal@galvanique.com.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
