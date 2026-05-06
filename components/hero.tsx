"use client";

import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = [
  "Full-Stack Developer",
  "Problem Solver",
  "System Thinker",
  "Team Player",
  "Clear Communicator",
];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < words[index].length) {
        setSubIndex((prev) => prev + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex((prev) => prev - 1);
      } else if (!deleting && subIndex === words[index].length) {
        setDeleting(true);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
                 px-6 overflow-hidden pt-24"
    >
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Chukwuma Ugwu Emmanuel
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 h-8 mb-6">
          {words[index].substring(0, subIndex)}
          <span className="border-r-2 border-blue-400 ml-1 animate-pulse" />
        </h2>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          I build performant, scalable web applications with React, Next.js,
          Node.js, TypeScript, Tailwind, and PostgreSQL—turning complex ideas
          into elegant solutions.
        </p>

        {/* Main action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-md"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </Button>

          <Button
            size="lg"
            className="border-gray-500 text-gray-200 hover:bg-gray-800 hover:text-white shadow-sm"
            onClick={() =>
              window.open(
                "mailto:echukwuma561@gmail.com?subject=Let’s Connect&body=Hi Chukwuma,",
                "_blank"
              )
            }
          >
            Get in Touch
          </Button>
        </div>

        {/* Stand-alone CV section */}
        <div className="flex justify-end items-center max-w-3xl mx-auto mt-4 pr-2">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
            className="mr-2 text-blue-400"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-md"
            onClick={() =>
              window.open("/Chukwuma-Emmanuel-CV.pdf", "_blank")
            }
          >
            Get My CV
          </Button>
        </div>

        {/* Social icons */}
        <div className="flex justify-center space-x-6 mt-12 mb-12">
          <Social href="https://github.com/Chukwwumaemmannuel233">
            <Github className="w-5 h-5" />
          </Social>
          <Social href="https://www.linkedin.com/in/chukwuma-emmanuel-53386236b/">
            <Linkedin className="w-5 h-5" />
          </Social>
          <Social href="mailto:echukwuma561@gmail.com">
            <Mail className="w-5 h-5" />
          </Social>
          <Social href="tel:+2348161770490">
            <Phone className="w-5 h-5" />
          </Social>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-gray-500 animate-bounce" />
      </motion.div>
    </section>
  );
}

function Social({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
    >
      {children}
    </a>
  );
}
