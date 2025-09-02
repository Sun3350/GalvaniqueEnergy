// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with our team",
    details: "(555) 123-4567",
    action: "Call now",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message anytime",
    details: "info@galvanique.com",
    action: "Send email",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit our headquarters",
    details: "123 Energy Street, Solar City, SC 12345",
    action: "Get directions",
  },
  {
    icon: Clock,
    title: "Hours",
    description: "When we're available",
    details: "Mon-Fri: 8am-6pm\nSat: 9am-4pm\nSun: Closed",
    action: "View hours",
  },
];

const serviceAreas = [
  "Solar City",
  "Energyville",
  "Power Town",
  "Electropolis",
  "Renewable Heights",
  "Current Creek",
  "Voltage Valley",
  "Circuit City",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Get in touch with our team to discuss your electrical and solar
            needs
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Get in Touch
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card rounded-lg shadow-md p-6 text-center border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {method.description}
                  </p>
                  <p className="font-medium mb-4 whitespace-pre-line">
                    {method.details}
                  </p>
                  <Button variant="outline" size="sm">
                    {method.action}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted px-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-card rounded-xl shadow-md p-8 border"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}>
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select a service</option>
                        <option value="electrical">
                          Electrical Installation
                        </option>
                        <option value="solar-repair">Solar Repairs</option>
                        <option value="solar-installation">
                          Solar Installation
                        </option>
                        <option value="maintenance">Maintenance</option>
                        <option value="consultation">
                          Energy Consultation
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90"
                    size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Service Areas */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              {/* Map */}
              <div className="bg-card rounded-xl shadow-md p-6 border">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Our Location
                </h3>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  {/* Embedded Google Map would go here */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Interactive map would be embedded here
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  123 Energy Street, Solar City, SC 12345
                </p>
              </div>

              {/* Service Areas */}
              <div className="bg-card rounded-xl shadow-md p-6 border">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Service Areas
                </h3>
                <p className="text-muted-foreground mb-4">
                  We proudly serve the following areas and surrounding regions:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
