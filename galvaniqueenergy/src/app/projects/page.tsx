// src/app/projects/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building,
  Factory,
  Filter,
  ZoomIn,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Solar Installation for Modern Home",
    category: "residential",
    description:
      "Complete solar panel installation with battery backup for a family home",
    image: "/project1.jpg",
    features: [
      "20-panel system",
      "Battery backup",
      "Smart monitoring",
      "Energy efficiency upgrade",
    ],
  },
  {
    id: 2,
    title: "Commercial Office Electrical Upgrade",
    category: "commercial",
    description:
      "Electrical system modernization for a downtown office building",
    image: "/project1.jpg",
    features: [
      "Panel upgrade",
      "LED lighting",
      "Smart controls",
      "Energy management",
    ],
  },
  {
    id: 3,
    title: "Industrial Facility Solar Array",
    category: "industrial",
    description: "Large-scale solar installation for manufacturing facility",
    image: "/project1.jpg",
    features: [
      "200-panel array",
      "Industrial inverters",
      "Grid integration",
      "Monitoring system",
    ],
  },
  {
    id: 4,
    title: "Residential Electrical Rewiring",
    category: "residential",
    description: "Complete electrical system rewiring for historic home",
    image: "/project1.jpg",
    features: [
      "Full rewiring",
      "Safety upgrades",
      "Smart home integration",
      "Historic preservation",
    ],
  },
  {
    id: 5,
    title: "Retail Store Energy Efficiency",
    category: "commercial",
    description: "Energy efficiency improvements for retail chain locations",
    image: "/project1.jpg",
    features: [
      "LED retrofitting",
      "Motion sensors",
      "Energy monitoring",
      "Cost reduction",
    ],
  },
  {
    id: 6,
    title: "Agricultural Solar Water Pumping",
    category: "industrial",
    description: "Solar-powered water pumping system for farm irrigation",
    image: "/project1.jpg",
    features: [
      "Solar pumps",
      "Remote monitoring",
      "Water management",
      "Off-grid operation",
    ],
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: Filter },
  { id: "residential", name: "Residential", icon: Home },
  { id: "commercial", name: "Commercial", icon: Building },
  { id: "industrial", name: "Industrial", icon: Factory },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto  text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Explore our portfolio of successful electrical and solar
            installations
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  className={`flex items-center gap-2 ${
                    activeCategory === category.id
                      ? "bg-galvanique-primary text-white"
                      : "bg-background text-foreground"
                  }`}
                  onClick={() => setActiveCategory(category.id)}>
                  <Icon className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-card rounded-xl shadow-md overflow-hidden border group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}>
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.category === "residential"
                          ? "bg-blue-100 text-blue-800"
                          : project.category === "commercial"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-galvanique-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-galvanique-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 2 && (
                      <li className="text-sm text-muted-foreground">
                        +{project.features.length - 2} more features
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}>
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Let us bring our expertise to your next electrical or solar project
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-galvanique-primary hover:bg-gray-100"
              onClick={() => {
                // Navigate to contact page
                console.log("Start project");
              }}>
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-galvanique-primary">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="relative h-64 w-full">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-galvanique-primary">
                    Features:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-galvanique-accent mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
