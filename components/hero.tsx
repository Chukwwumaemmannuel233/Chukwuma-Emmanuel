"use client";

import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowDown,
  Download,
  ExternalLink,
  QrCode,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CoverLetterQR from "@/components/qr-code";

const words = [
  "Full-Stack Developer",
  "React Native Developer",
  "Problem Solver",
  "System Thinker",
  "Clear Communicator",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // ref wraps the button + popover together
  const qrWrapperRef = useRef<HTMLDivElement>(null);

  // Typewriter
  useEffect(() => {
    const timeout = setTimeout(
      () => {
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
      },
      deleting ? 60 : 120,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // Click outside to close
  useEffect(() => {
    if (!showQR) return;
    function onClickOutside(e: MouseEvent) {
      if (
        qrWrapperRef.current &&
        !qrWrapperRef.current.contains(e.target as Node)
      ) {
        setShowQR(false);
      }
    }
    // small delay so the toggle click doesn't immediately close
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", onClickOutside);
    }, 50);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [showQR]);

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,184,166,0.12),transparent_32%),linear-gradient(180deg,#080b12_0%,#0f172a_72%,#080b12_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:44px_44px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 text-center sm:gap-10 lg:grid-cols-[1.1fr_.9fr] lg:text-left"
      >
        {/* ── LEFT COLUMN ── */}
        <div>
          <div className="mb-5 inline-flex max-w-full items-center rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-2 text-xs font-medium text-teal-200 sm:mb-6 sm:px-4 sm:text-sm">
            Available for freelance and full-time roles
          </div>

          <p className="text-base font-semibold text-white sm:text-lg md:text-xl">
            Chukwuma Ugwu Emmanuel
          </p>

          <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:mx-0 lg:text-5xl">
            Building polished web and mobile products.
          </h1>

          <h2 className="mt-5 h-7 text-lg text-teal-200 sm:h-8 sm:text-xl md:text-2xl">
            {words[index].substring(0, subIndex)}
            <span className="ml-1 border-r-2 border-teal-300 animate-pulse" />
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg lg:mx-0 lg:leading-8">
            I turn complex ideas into reliable interfaces, APIs, dashboards, and
            production-ready applications using React, Next.js, TypeScript,
            Node.js, Tailwind CSS, and PostgreSQL.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              size="lg"
              className="w-full bg-teal-400 text-slate-950 hover:bg-teal-300 sm:w-auto"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <ExternalLink className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              className="w-full border border-white/15 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
              onClick={() => window.open("/Chukwuma-Ugwu-CV.pdf", "_blank")}
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-2 sm:mt-10 sm:max-w-xl sm:gap-3 lg:mx-0">
            {[
              ["3+", "Years"],
              ["10+", "Projects"],
              ["Full", "Stack"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-3 sm:p-4"
              >
                <p className="text-xl font-bold text-white sm:text-2xl">
                  {value}
                </p>
                <p className="text-xs text-slate-400 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>

          {/* Socials + QR */}
          <div className="mt-7 flex items-center justify-center gap-3 sm:mt-10 lg:justify-start">
            <Social href="https://github.com/Chukwwumaemmannuel233" label="GitHub">
              <Github className="h-5 w-5" />
            </Social>
            <Social
              href="https://www.linkedin.com/in/chukwuma-emmanuel-53386236b/"
              label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Social>
            <Social href="mailto:echukwuma561@gmail.com" label="Email">
              <Mail className="h-5 w-5" />
            </Social>
            <Social href="tel:+2348161770490" label="Phone">
              <Phone className="h-5 w-5" />
            </Social>

            {/* Divider */}
            <div className="h-6 w-px bg-white/10" />

            {/* QR trigger + popover — wrapped in single ref div */}
            <div className="relative" ref={qrWrapperRef}>
              <button
                onClick={() => setShowQR((v) => !v)}
                aria-label="Scan cover letter QR code"
                title="Scan to view Cover Letter"
                className={`grid h-10 w-10 place-items-center rounded-lg border transition-all duration-200 sm:h-11 sm:w-11 ${
                  showQR
                    ? "border-teal-300/80 bg-teal-300/20 text-teal-200"
                    : "border-teal-300/40 bg-teal-300/10 text-teal-300 hover:border-teal-300/80 hover:bg-teal-300/20"
                }`}
              >
                <QrCode className="h-5 w-5" />
              </button>

              <AnimatePresence>
                {showQR && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 10 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute bottom-14 z-50 right-0 left-auto w-60 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto lg:left-0 lg:translate-x-0"
                  >
                    {/* Caret arrow */}
                    <div className="absolute -bottom-[7px] right-4 h-3 w-3 rotate-45 border-b border-r border-white/10 bg-[#0f172a] sm:left-1/2 sm:-translate-x-1/2 sm:right-auto lg:left-5 lg:translate-x-0" />

                    <div className="w-56 sm:w-60 overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl shadow-black/70">

                      {/* ── Header ── */}
                      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-teal-500/10 to-transparent px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="grid h-6 w-6 place-items-center rounded-md bg-teal-400/20">
                            <QrCode className="h-3.5 w-3.5 text-teal-300" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-white leading-none">
                              Cover Letter
                            </p>
                            <p className="text-[10px] text-slate-500 mt-0.5">
                              Scan or open directly
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowQR(false)}
                          className="grid h-6 w-6 place-items-center rounded-md text-slate-500 transition hover:bg-white/10 hover:text-slate-300"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      {/* ── QR Code ── */}
                      <div className="flex flex-col items-center gap-4 p-4">
                        {/* QR frame */}
                        <div className="relative rounded-xl bg-white p-3 shadow-lg">
                          {/* corner accents */}
                          <div className="absolute top-1.5 left-1.5 h-4 w-4 border-t-2 border-l-2 border-teal-500 rounded-tl-sm" />
                          <div className="absolute top-1.5 right-1.5 h-4 w-4 border-t-2 border-r-2 border-teal-500 rounded-tr-sm" />
                          <div className="absolute bottom-1.5 left-1.5 h-4 w-4 border-b-2 border-l-2 border-teal-500 rounded-bl-sm" />
                          <div className="absolute bottom-1.5 right-1.5 h-4 w-4 border-b-2 border-r-2 border-teal-500 rounded-br-sm" />
                          <CoverLetterQR />
                        </div>

                        {/* Label */}
                        <div className="text-center">
                          <p className="text-xs font-medium text-slate-300">
                            Point your camera here
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            to view my cover letter
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="flex w-full items-center gap-2">
                          <div className="h-px flex-1 bg-white/10" />
                          <span className="text-[10px] text-slate-600 uppercase tracking-wider">or</span>
                          <div className="h-px flex-1 bg-white/10" />
                        </div>

                        {/* Open directly */}
                        <a
                          href="/cover-letter"
                          className="flex w-full items-center justify-center gap-2 rounded-xl border border-teal-300/25 bg-teal-300/10 py-2.5 text-xs font-semibold text-teal-300 transition hover:bg-teal-300/20 hover:border-teal-300/50"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Open Cover Letter
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Profile Image ── */}
        <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-md">
          <div className="absolute -inset-2 rounded-3xl border border-teal-300/20 sm:-inset-4 sm:rounded-[2rem]" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-2.5 shadow-2xl shadow-black/40 sm:rounded-[2rem] sm:p-4">
            <img
              src="/images/profile.jpeg"
              alt="Chukwuma Ugwu Emmanuel"
              className="aspect-[4/4.7] w-full rounded-2xl object-cover sm:aspect-[4/5]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-[#080b12]/85 p-3 text-left backdrop-blur sm:bottom-8 sm:left-8 sm:right-8 sm:p-4">
              <p className="text-xs text-slate-400 sm:text-sm">Current focus</p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                Building scalable products with clean UI and dependable backend
                systems.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <ArrowDown className="absolute bottom-6 left-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 animate-bounce text-slate-500 lg:block" />
    </section>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-teal-300/60 hover:text-teal-200 sm:h-11 sm:w-11"
    >
      {children}
    </a>
  );
}