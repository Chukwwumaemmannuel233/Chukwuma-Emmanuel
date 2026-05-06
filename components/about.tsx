"use client";

import { motion } from "framer-motion";
import AboutModal from "@/components/about-modal";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-12">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-gray-700">
                <img
                  src="/images/profile.jpg"
                  alt="Chukwuma Ugwu Emmanuel"
                  className="w-60 h-72 rounded-xl object-cover border-2 border-gray-600"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">3+ YRS</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-5 text-gray-300"
          >
            <h3 className="text-2xl font-bold text-white">
              Full-Stack & React Native Developer
            </h3>

            <p className="leading-relaxed text-base">
              I build fast, responsive, and scalable web applications, focusing
              on clean user interfaces and efficient backend systems.
            </p>

            <p className="leading-relaxed text-base">
              I work with{" "}
              <span className="text-blue-400 font-medium">
                React, Next.js, TypeScript, and Tailwind CSS
              </span>{" "}
              for frontend development, and{" "}
              <span className="text-blue-400 font-medium">
                Node.js, Express, and PostgreSQL
              </span>{" "}
              to build APIs, manage data, and power full-stack applications.
            </p>

            <p className="leading-relaxed text-base">
              I’ve built dashboards, web apps, and backend systems, and I focus
              on solving real-world problems, fixing bugs, and delivering
              reliable products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { title: "Experience", value: "3+ Years" },
                { title: "Projects", value: "10+ Completed" },
                { title: "Focus", value: "Full Stack Development" },
                { title: "Status", value: "Open to Work" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition"
                >
                  <h4 className="font-semibold text-blue-400 mb-1 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-200 text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <AboutModal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
