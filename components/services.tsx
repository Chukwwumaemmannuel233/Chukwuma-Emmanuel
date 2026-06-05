"use client";

import { Code, Smartphone, Globe, Users, Zap, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Responsive React and Next.js interfaces with strong attention to performance, accessibility, and UX.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform React Native applications with smooth flows and reusable architecture.",
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    description:
      "Complete web applications with APIs, authentication flows, databases, and deployment.",
  },
  {
    icon: TerminalSquare,
    title: "Development Workflow",
    description:
      "Clean project structure, Git workflows, API testing, and maintainable delivery habits.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Remote-friendly communication, Agile workflows, implementation handoffs, and code reviews.",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Core Web Vitals, SEO basics, bundle optimization, caching, and production readiness.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 sm:text-sm">
            Services
          </p>
          <h2 className="mx-auto max-w-3xl text-2xl font-black text-white sm:text-3xl md:text-5xl">
            Support from idea to shipped application.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-teal-300/50 sm:p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal-400 text-slate-950 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white sm:mt-5 sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400 sm:mt-3 sm:text-base">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
