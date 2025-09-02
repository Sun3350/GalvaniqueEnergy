// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import {
  Zap,
  Sun,
  Settings,
  Wrench,
  BarChart3,
  Shield,
  Award,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Electrical Installation",
    description:
      "Professional electrical installation services for homes and businesses.",
    icon: Zap,
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Solar Repairs",
    description: "Expert repair services for all types of solar panel systems.",
    icon: Wrench,
    color: "bg-green-100 dark:bg-green-900/30",
  },
  {
    title: "Solar Installation",
    description:
      "Complete solar energy system installation from design to implementation.",
    icon: Sun,
    color: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  {
    title: "Wiring & Maintenance",
    description:
      "Comprehensive wiring solutions and ongoing maintenance services.",
    icon: Settings,
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Energy Consulting",
    description:
      "Expert advice on energy efficiency and renewable energy solutions.",
    icon: BarChart3,
    color: "bg-green-100 dark:bg-green-900/30",
  },
];

const features = [
  {
    title: "Experience",
    description: "Over 10 years of expertise in electrical and solar solutions",
    icon: Award,
    color: "text-[var(--primary)]",
  },
  {
    title: "Trust",
    description: "Certified professionals you can rely on for quality service",
    icon: Shield,
    color: "text-[var(--accent)]",
  },
  {
    title: "Expertise",
    description: "Highly trained technicians with specialized knowledge",
    icon: Users,
    color: "text-[var(--secondary)]",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/project1.jpg')",
          }}
        />

        <div className="container mx-auto px-4 z-20 text-center text-card">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Powering Your World with Reliable Electrical & Solar Solutions
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            Expert repairs, installations, and maintenance services for homes
            and businesses
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
              onClick={() => {
                // Open quote dialog
                console.log("Request quote");
              }}>
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20  md:px-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Why Choose Galvanique?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${feature.color} bg-opacity-20`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Preview Section */}
      <section className="py-20 md:px-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Comprehensive electrical and solar solutions tailored to your needs
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <Button className="bg-[var(--primary)] hover:bg-blue-800" asChild>
              <a href="/services">View All Services</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
