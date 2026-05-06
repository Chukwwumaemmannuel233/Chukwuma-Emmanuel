"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16 overflow-visible">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <span className="text-white font-bold text-sm">CUE</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center relative z-50">
          {mainLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <Link
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* More Dropdown */}
          <div ref={moreRef} className="relative z-50">
            <button
              onClick={() => setMoreOpen((o) => !o)}
              className="flex items-center text-gray-300 hover:text-blue-400"
            >
              More
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 mt-2 min-w-max bg-gray-800 border border-gray-700 rounded shadow-lg z-50"
                >
                  {extraLinks.map((l) => (
                    <Link
                      key={l.name}
                      href={l.href}
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-blue-400"
                      onClick={() => setMoreOpen(false)}
                    >
                      {l.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-300 hover:text-blue-400"
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-72 bg-gray-950 border-l border-gray-800 px-6 py-6 z-50 lg:hidden flex flex-col"
            >
              {/* Top (Logo + Close) */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-white font-bold text-lg tracking-wide">
                  CUE Portfolio
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded hover:bg-gray-800 text-gray-300 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Divider */}
              <div className="border-b border-gray-800 mb-6" />

              {/* Links */}
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
                      className="text-gray-300 text-lg hover:text-blue-400 transition-all duration-200 hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom section (optional branding) */}
              <div className="mt-auto pt-10 text-sm text-gray-500">
                © 2024 CUE
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
