// src/app/services/page.tsx
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
  Clock,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Electrical Installation",
    description:
      "Professional electrical installation services for homes and businesses, including wiring, panels, and fixtures.",
    icon: Zap,
    color: "bg-blue-100 dark:bg-blue-900/30",
    features: [
      "Residential wiring",
      "Commercial electrical systems",
      "Panel upgrades",
      "Lighting installation",
    ],
  },
  {
    title: "Solar Repairs",
    description:
      "Expert repair services for all types of solar panel systems, inverters, and related components.",
    icon: Wrench,
    color: "bg-green-100 dark:bg-green-900/30",
    features: [
      "Panel diagnostics",
      "Inverter repairs",
      "System optimization",
      "Warranty services",
    ],
  },
  {
    title: "Solar Installation",
    description:
      "Complete solar energy system installation from design to implementation for residential and commercial properties.",
    icon: Sun,
    color: "bg-yellow-100 dark:bg-yellow-900/30",
    features: [
      "Site assessment",
      "System design",
      "Permitting",
      "Professional installation",
    ],
  },
  {
    title: "Wiring & Maintenance",
    description:
      "Comprehensive wiring solutions and ongoing maintenance services to keep your systems running smoothly.",
    icon: Settings,
    color: "bg-blue-100 dark:bg-blue-900/30",
    features: [
      "Electrical inspections",
      "Preventive maintenance",
      "Troubleshooting",
      "Safety upgrades",
    ],
  },
  {
    title: "Energy Consulting",
    description:
      "Expert advice on energy efficiency, renewable energy solutions, and cost-saving strategies.",
    icon: BarChart3,
    color: "bg-green-100 dark:bg-green-900/30",
    features: [
      "Energy audits",
      "Efficiency recommendations",
      "ROI analysis",
      "Incentive guidance",
    ],
  },
  {
    title: "Emergency Services",
    description:
      "24/7 emergency electrical services for urgent issues that cannot wait for regular business hours.",
    icon: Clock,
    color: "bg-red-100 dark:bg-red-900/30",
    features: [
      "24/7 availability",
      "Rapid response",
      "Temporary fixes",
      "Safety assessments",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We discuss your needs and assess your property to understand your requirements.",
    icon: Users,
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Our experts create a customized plan tailored to your specific situation and goals.",
    icon: BarChart3,
  },
  {
    step: "03",
    title: "Installation",
    description:
      "Our certified technicians execute the plan with precision and attention to detail.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Support",
    description:
      "We provide ongoing maintenance and support to ensure optimal performance.",
    icon: Shield,
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 ">
        {" "}
        <div className="container mx-auto px-4 text-center text-[var(--primary)]">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Comprehensive electrical and solar solutions for residential and
            commercial properties
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:px-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            What We Offer
          </motion.h2>
          <motion.p
            className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            From installation to maintenance, we provide end-to-end solutions
            for all your electrical and solar needs
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl shadow-md overflow-hidden border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <div className="p-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${service.color}`}>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted md:px-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-primary-foreground text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:px-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-card rounded-xl shadow-md p-8 md:p-12 border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote on your
              electrical or solar project
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
              onClick={() => {
                // Open contact form or navigate to contact page
                console.log("Get started");
              }}>
              Request a Free Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
