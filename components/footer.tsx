"use client";

import type React from "react";
import { Github, Linkedin, Mail, Phone, Twitter, Instagram } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] px-4 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 h-px bg-white/10 md:mb-10" />
        <div className="grid gap-7 md:grid-cols-4 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal-400">
                <span className="text-sm font-black text-slate-950">CUE</span>
              </div>
              <span className="text-lg font-semibold text-white">CUE</span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Full-stack developer focused on clean, scalable, and high-performance
              web and mobile applications.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm md:block md:space-y-2">
              {["about", "experience", "skills", "projects", "contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-slate-400 transition-colors hover:text-teal-300"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:echukwuma561@gmail.com"
                  className="flex min-w-0 items-center gap-2 text-slate-400 transition-colors hover:text-teal-300"
                >
                  <Mail className="h-4 w-4" />
                  <span className="break-all">echukwuma561@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348161770490"
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-teal-300"
                >
                  <Phone className="h-4 w-4" />
                  <span>+234 816 177 0490</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Connect</h3>
            <p className="mb-4 text-sm text-slate-400">
              Let us build something useful together.
            </p>

            <div className="flex flex-wrap gap-3">
              <SocialLink
                href="https://github.com/Chukwwumaemmannuel233"
                icon={<Github className="h-4 w-4" />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/chukwuma-emmanuel-126517381/"
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://x.com/CEmmanuel25543"
                icon={<Twitter className="h-4 w-4" />}
                label="X"
              />
              <SocialLink
                href="https://www.instagram.com/emmanuel23670/"
                icon={<Instagram className="h-4 w-4" />}
                label="Instagram"
              />
              <SocialLink
                href="#"
                icon={<TikTokIcon className="h-4 w-4" />}
                disabled
                label="TikTok coming soon"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          Copyright 2026 CUE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  disabled = false,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  disabled?: boolean;
  label: string;
}) {
  if (disabled) {
    return (
      <div
        title={label}
        className="grid h-10 w-10 cursor-not-allowed place-items-center rounded-lg border border-white/10 text-slate-600"
      >
        {icon}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-teal-300/50 hover:text-teal-300"
    >
      {icon}
    </a>
  );
}
