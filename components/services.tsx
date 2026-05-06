"use client"

import { useRef } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Code,
  Smartphone,
  Globe,
  Users,
  Zap,
  TerminalSquare,
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "I build fast, responsive, and accessible web interfaces using modern React ecosystems with a strong focus on performance and UX.",
    features: [
      "React & Next.js Applications",
      "TypeScript Architecture",
      "Responsive UI Systems",
      "Performance Optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "I develop cross-platform mobile applications with React Native, focusing on smooth UX and native-like performance.",
    features: [
      "React Native Development",
      "iOS & Android Support",
      "Reusable Code Architecture",
      "App Store Deployment",
    ],
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    description:
      "I design and build complete web applications, from frontend interfaces to backend APIs and database systems.",
    features: [
      "REST API Development",
      "Database Design (PostgreSQL)",
      "Authentication & Security",
      "Cloud Deployment",
    ],
  },
  {
    icon: TerminalSquare,
    title: "Development Workflow",
    description:
      "I use modern tools and workflows to build, test, and ship scalable applications efficiently.",
    features: [
      "Git & GitHub Version Control",
      "API Testing (Postman)",
      "Clean Code Practices",
      "Project Structuring",
    ],
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I work effectively in team environments, contributing through communication, code reviews, and agile workflows.",
    features: [
      "Agile/Scrum Workflow",
      "Code Reviews",
      "Team Communication",
      "Task Management Tools",
    ],
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "I optimize applications for speed, scalability, and search visibility to ensure production-ready quality.",
    features: [
      "Core Web Vitals Optimization",
      "SEO Best Practices",
      "Bundle Optimization",
      "Caching Strategies",
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 px-4 bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            From frontend to full-stack and mobile development, I build
            high-quality applications with clean, maintainable code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="h-full bg-gray-900/60 border border-gray-700 rounded-2xl backdrop-blur hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
