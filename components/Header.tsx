"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Download } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const extraLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080b12]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400 shadow-lg shadow-teal-500/20"
            aria-label="Go to home"
          >
            <span className="text-sm font-black text-slate-950">CUE</span>
          </Link>
        </motion.div>

        <nav className="relative z-50 hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">
          {mainLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          <div ref={moreRef} className="relative z-50">
            <button
              onClick={() => setMoreOpen((o) => !o)}
              className="flex items-center rounded-full px-4 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
            >
              More
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 z-50 mt-3 min-w-max overflow-hidden rounded-lg border border-white/10 bg-[#111827] shadow-2xl shadow-black/40"
                >
                  {extraLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-white/10 hover:text-teal-300"
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <a
          href="/Chukwuma-Emmanuel-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-10 items-center gap-2 rounded-md bg-teal-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-teal-300 lg:inline-flex"
        >
          <Download className="h-4 w-4" />
          CV
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-slate-300 hover:text-teal-300 lg:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 z-[80] h-dvh w-[min(18rem,85vw)] overflow-hidden border-l border-white/10 bg-[#020617] px-6 py-6 shadow-2xl shadow-black lg:hidden"
              style={{ backgroundColor: "#020617" }}
            >
              <div className="absolute inset-0 bg-[#020617]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <div className="text-lg font-bold tracking-wide text-white">
                    CUE Portfolio
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="rounded p-2 text-slate-300 hover:bg-white/10 hover:text-white"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="mb-6 border-b border-white/10" />

                <div className="flex flex-col space-y-5">
                  {[...mainLinks, ...extraLinks].map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-lg text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-teal-300"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <a
                  href="/Chukwuma-Emmanuel-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-teal-400 px-4 text-sm font-semibold text-slate-950"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>

                <div className="mt-auto pt-10 text-sm text-slate-500">
                  Copyright 2026 CUE
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
