// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Shield, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every project, ensuring the highest quality standards.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Our customers are at the heart of everything we do, guiding our decisions and actions.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "You can count on us to deliver on our promises, on time and within budget.",
  },
  {
    icon: Shield,
    title: "Safety",
    description:
      "We prioritize safety in all our operations, protecting our team and clients.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "We embrace new technologies and methods to provide cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description:
      "We are committed to environmentally responsible practices and solutions.",
  },
];

const team = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "/team/john.jpg",
    description:
      "Electrical engineer with 15+ years of experience in renewable energy systems.",
  },
  {
    name: "Sarah Johnson",
    role: "Lead Technician",
    image: "/team/sarah.jpg",
    description:
      "Certified solar installation expert with a passion for sustainable energy.",
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    image: "/team/michael.jpg",
    description:
      "Experienced in managing large-scale electrical and solar projects.",
  },
  {
    name: "Emily Rodriguez",
    role: "Energy Consultant",
    image: "/team/emily.jpg",
    description:
      "Specializes in energy efficiency and cost-saving solutions for businesses.",
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-2 ">
        <div className="container mx-auto px-8 text-center text-[var(--primary)]">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            About Galvanique
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            For over a decade, we've been powering homes and businesses with
            reliable, sustainable electrical and solar solutions.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:px-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-galvanique-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2010, Galvanique began as a small electrical repair
                service with a vision to transform how homes and businesses
                power their operations. As renewable energy technologies
                advanced, we expanded our expertise to include solar solutions,
                becoming one of the first integrated electrical and solar
                service providers in the region.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Today, we're proud to have served over 5,000 satisfied customers
                and completed numerous large-scale projects. Our team of
                certified professionals continues to grow, bringing innovative
                solutions and exceptional service to every client.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-galvanique-primary">
                    10+
                  </div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-galvanique-primary">
                    5000+
                  </div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-galvanique-primary">
                    24/7
                  </div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div
                className="w-full h-96 bg-muted rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: "url('/hero1.jpg')",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted md:px-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-galvanique-primary mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md text-center border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-galvanique-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-galvanique-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:px-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-galvanique-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Our certified professionals bring expertise and passion to every
            project
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-lg shadow-md overflow-hidden border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}>
                <div
                  className="h-48 bg-muted bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-galvanique-primary">
                    {member.name}
                  </h3>
                  <p className="text-galvanique-accent mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
