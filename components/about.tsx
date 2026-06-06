"use client";

import { motion } from "framer-motion";
import AboutModal from "@/components/about-modal";
import { Code2, Database, Smartphone, Wrench } from "lucide-react";

const strengths = [
  { title: "Frontend", value: "React, Next.js, TypeScript", icon: Code2 },
  { title: "Backend", value: "Node.js, Express, PostgreSQL", icon: Database },
  { title: "Mobile", value: "React Native apps", icon: Smartphone },
  { title: "Delivery", value: "Debugging, Git, deployment", icon: Wrench },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 max-w-3xl md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 sm:text-sm">
            About Me
          </p>
          <h2 className="text-2xl font-black text-white sm:text-3xl md:text-5xl">
            I build practical software with clean interfaces and dependable
            systems behind them.
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-4">
              <img
                src="/images/profile.jpeg"
                alt="Chukwuma Ugwu Emmanuel"
                className="aspect-[4/3] w-full rounded-xl object-cover sm:aspect-[5/4]"
              />
            </div>
            <div className="absolute -bottom-6 right-3 rounded-lg border border-teal-300/20 bg-[#0f172a] px-4 py-3 shadow-xl shadow-black/30 sm:right-4 sm:px-5 sm:py-4">
              <p className="text-xl font-black text-white sm:text-2xl">3+ years</p>
              <p className="text-xs text-slate-400 sm:text-sm">Building real projects</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              <p>
                I am a full-stack and React Native developer focused on building
                fast, responsive, and scalable products. I care about clear user
                flows, maintainable code, and backend systems that keep the
                product reliable after launch.
              </p>
              <p>
                I work with React, Next.js, TypeScript, Tailwind CSS, Node.js,
                Express, and PostgreSQL to ship dashboards, e-commerce projects,
                APIs, and mobile experiences.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                  >
                    <Icon className="mb-4 h-5 w-5 text-teal-300" />
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.value}</p>
                  </div>
                );
              })}
            </div>

            <AboutModal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
