"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Mobile & Backend",
    skills: ["React Native", "Node.js", "Express.js", "REST APIs", "PostgreSQL"],
  },
  {
    category: "Development Tools",
    skills: ["Git", "Vercel", "Jira", "Scrum/Agile", "Postman", "Namecheap", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/10 bg-white/[0.02] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 max-w-3xl md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 sm:text-sm">
            Skills
          </p>
          <h2 className="text-2xl font-black text-white sm:text-3xl md:text-5xl">
            The stack I use to design, build, debug, and ship.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-xl border border-white/10 bg-[#080b12] p-4 sm:p-6"
            >
              <h3 className="text-xl font-bold text-white">{category.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-300 sm:px-3 sm:py-2 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
