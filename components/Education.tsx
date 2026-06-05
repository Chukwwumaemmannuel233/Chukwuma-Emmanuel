"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <motion.article
      id="education"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-4 sm:p-6 md:p-8"
    >
      <div className="flex h-full flex-col">
        <div className="flex gap-3 sm:gap-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cyan-300 text-slate-950 sm:h-12 sm:w-12">
            <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 sm:text-sm">
              Education
            </p>
            <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
              Enugu State University of Science and Technology
            </h3>
            <p className="mt-2 text-sm font-medium text-cyan-200 sm:text-base">
              Bachelor of Engineering - Computer Engineering
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
          Currently pursuing a B.Eng. in Computer Engineering, with focus on
          software engineering fundamentals, algorithms, and systems design.
        </p>

        <span className="mt-5 w-fit rounded-md border border-white/10 bg-[#080b12] px-3 py-1 text-xs text-slate-300 sm:mt-auto sm:text-sm">
          September 2025 - Present
        </span>
      </div>
    </motion.article>
  );
}
