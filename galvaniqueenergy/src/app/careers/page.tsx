// src/app/careers/page.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Users,
  Heart,
  Award,
  Clock,
  DollarSign,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description:
      "We offer industry-competitive compensation packages with regular reviews.",
  },
  {
    icon: Award,
    title: "Professional Development",
    description: "Continuous learning opportunities and certification support.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work-life balance with flexible scheduling options.",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health, dental, and vision insurance plans.",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Collaborative culture with regular team-building activities.",
  },
  {
    icon: Briefcase,
    title: "Retirement Plans",
    description:
      "401(k) with company matching to help you plan for the future.",
  },
];

const openPositions = [
  {
    title: "Senior Solar Technician",
    department: "Installation",
    type: "Full-time",
    location: "Solar City, SC",
  },
  {
    title: "Electrical Project Manager",
    department: "Management",
    type: "Full-time",
    location: "Solar City, SC",
  },
  {
    title: "Energy Consultant",
    department: "Sales",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Junior Electrician",
    department: "Installation",
    type: "Full-time",
    location: "Solar City, SC",
  },
  {
    title: "Customer Service Representative",
    department: "Support",
    type: "Part-time",
    location: "Remote",
  },
];

export default function Careers() {
  return (
    <div className="pt-20 ">
      {/* Hero Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 text-center text-[var(--primary)]">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            Careers at Galvanique
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Join our team and help power the future with sustainable energy
            solutions
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:px-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">
                Why Work With Us
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                At Galvanique, we're not just employees - we're a team of
                passionate energy experts dedicated to making a difference in
                our community and the environment.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We believe in investing in our people, providing opportunities
                for growth, and creating a workplace where everyone feels valued
                and empowered to do their best work.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div
                className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80')",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:px-10 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-[var(--primary)] mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Employee Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:px-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-[var(--primary)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Open Positions
          </motion.h2>
          <motion.p
            className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Join our team and help us build a sustainable future
          </motion.p>

          <div className="max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3 }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--primary)]">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <Button className="bg-[var(--accent)] hover:bg-green-600 mt-4 md:mt-0">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Don't see a position that matches your skills? Send us your resume
              anyway!
            </p>
            <Button className="bg-[var(--primary)] hover:bg-blue-800">
              Submit General Application
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
