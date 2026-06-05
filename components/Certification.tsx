"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <motion.article
      id="certifications"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.08 }}
      className="h-full rounded-xl border border-white/10 bg-[#0f172a] p-4 sm:p-6 md:p-8"
    >
      <div className="flex h-full flex-col">
        <div className="flex gap-3 sm:gap-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-amber-300 text-slate-950 sm:h-12 sm:w-12">
            <Award className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 sm:text-sm">
              Certification
            </p>
            <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
              Frontend Developer (React)
            </h3>
            <p className="mt-2 text-sm font-medium text-amber-100 sm:text-base">
              Issued by HackerRank
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
          Validates practical React knowledge for building component-driven
          frontend applications and solving UI implementation tasks.
        </p>

        <a
          href="/certificates/my-certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-teal-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-teal-300 sm:mt-auto sm:w-fit"
        >
          <ExternalLink className="h-4 w-4" />
          View Certificate
        </a>
      </div>
    </motion.article>
  );
}
