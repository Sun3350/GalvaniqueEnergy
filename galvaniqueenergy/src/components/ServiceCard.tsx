// src/components/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <div className="p-6">
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${service.color}`}>
          <Icon className="w-6 h-6 text-galvanique-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-galvanique-primary">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
