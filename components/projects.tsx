"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EmmaTech",
    description:
      "A modern company website for web development services, client consultations, and product work.",
    image: "/images/emma-tech.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "OpenAI", "Vercel"],
    category: "Company Website",
    status: "Completed",
    liveUrl: "https://emma-tech.vercel.app/",
  },
  {
    title: "KAV Textiles",
    description:
      "An e-commerce experience for a textile business selling fabrics and materials online.",
    image: "/images/kav-textile.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    category: "E-commerce",
    status: "Completed",
    liveUrl: "https://kav-textile.vercel.app/",
  },
  {
    title: "StreamFlix",
    description:
      "A movie-streaming platform where creators upload movies and viewers watch online.",
    image: "/images/Streamflix.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    category: "Streaming Platform",
    status: "In Progress",
    liveUrl: "https://streamflix-app-rho.vercel.app/",
  },
  {
    title: "Kudora",
    description:
      "An e-commerce platform for buying and selling products with a secure shopping flow.",
    image: "/images/Kudora.png",
    tech: ["Next.js", "TypeScript", "Prisma", "Node.js", "PostgreSQL"],
    category: "Web Platform",
    status: "In Progress",
    liveUrl: "https://kudora.vercel.app",
  },
  {
    title: "Uche's GadgetsHub",
    description:
      "An e-commerce platform for buying and selling products with a secure shopping flow.",
    image: "/images/uche-gadgetsHub.png",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    category: "E-commerce",
    status: "Completed",
    liveUrl: "https://chukwuma-emmanuel-seven.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 sm:text-sm">
              Selected Work
            </p>
            <h2 className="text-2xl font-black text-white sm:text-3xl md:text-5xl">
              Projects designed to feel clear, useful, and production-ready.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            A focused look at recent frontend and full-stack projects across
            company websites, commerce, and product platforms.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition hover:border-teal-300/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute right-4 top-4 rounded-md px-3 py-1 text-xs font-semibold ${
                    project.status === "Completed"
                      ? "bg-emerald-400/15 text-emerald-200"
                      : "bg-amber-400/15 text-amber-200"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-4 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300 sm:text-xs">
                  {project.category}
                </p>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-[#080b12] px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  size="sm"
                  className="mt-6 w-full border border-white/10 bg-white/5 text-white hover:bg-teal-400 hover:text-slate-950"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
