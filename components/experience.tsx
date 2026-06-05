"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "SkillzSystems",
    period: "2022 - May 2025",
    description:
      "Developed and maintained multiple frontend projects in collaboration with a remote team. Debugged, optimized, and delivered projects within deadlines while aligning closely with design specifications.",
    achievements: [
      "Collaborated remotely using Agile workflows",
      "Implemented Redux in production projects",
      "Improved team productivity and frontend code quality",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-white/[0.02] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center md:mb-12"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 sm:text-sm">
            Experience
          </p>
          <h2 className="text-2xl font-black text-white sm:text-3xl md:text-5xl">
            Production work, remote collaboration, and real delivery.
          </h2>
        </motion.div>

        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-xl border border-white/10 bg-[#080b12] p-4 md:p-8"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal-400 text-slate-950 sm:h-12 sm:w-12">
                  <BriefcaseBusiness className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{exp.title}</h3>
                  <p className="mt-1 font-medium text-teal-300">{exp.company}</p>
                </div>
              </div>
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
                {exp.period}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">{exp.description}</p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {exp.achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-300" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
