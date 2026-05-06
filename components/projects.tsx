"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EmmaTech",
    description:
      "A tech company that builds modern web applications, offers web development services, and provides client consultations.",
    image: "/images/emmatech.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "OpenAI", "Vercel"],
    category: "Company Website",
    status: "Completed",
    liveUrl: "https://emma-tech.vercel.app/",
  },
  {
    title: "KAV Textiles",
    description:
      "An e-commerce website for a textile company that sells all types of fabrics and materials online.",
    image: "/images/kavtextiles.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    category: "E-commerce",
    status: "Completed",
    liveUrl: "https://kav-textile.vercel.app/",
  },
  {
    title: "StreamFlix",
    description:
      "A movie-streaming platform where studios and creators upload movies, and viewers can watch and enjoy them online.",
    image: "/images/Streamflix.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    category: "Streaming Platform",
    status: "In Progress",
    liveUrl: "https://streamflix-app-rho.vercel.app/",
  },
  {
    title: "Kudora",
    description:
      "An e-commerce platform for buying and selling products with a secure and modern shopping experience.",
    image: "/images/Kudora.png",
    tech: ["Next.js", "TypeScript", "Prisma", "Node.js", "PostgreSQL"],
    category: "Web Platform",
    status: "In Progress",
    liveUrl: "https://kudora.vercel.app",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of recent projects showcasing my frontend and full-stack
            development skills.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span
                    className={`absolute top-3 right-3 px-2 py-1 text-xs rounded-md font-medium ${
                      project.status === "Completed"
                        ? "bg-green-500/15 text-green-400"
                        : "bg-yellow-500/15 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <CardHeader className="pt-5 pb-2">
                  <CardTitle className="text-white text-lg font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-blue-400 text-xs uppercase tracking-wide">
                    {project.category}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[11px] rounded-md bg-gray-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <Button
                    size="sm"
                    className="
              w-full
              bg-gray-900
              border border-gray-600
              text-gray-200
              hover:bg-gray-700
              hover:border-blue-400
              hover:text-white
              transition-all
            "
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
