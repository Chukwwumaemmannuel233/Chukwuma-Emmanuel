"use client";

import type React from "react";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Instagram,
} from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 text-base">
      <div className="max-w-6xl mx-auto">
        {/* ==== Top Grid ==== */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CUE</span>
              </div>
              <span className="text-white font-semibold text-lg">CUE</span>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Full-Stack Developer focused on building clean, scalable, and
              high-performance web & mobile applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["about", "experience", "skills", "projects", "contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:echukwuma561@gmail.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>echukwuma561@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348161770490"
                  className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+234 816 177 0490</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Connect</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Let’s build something impactful together.
            </p>

            <div className="flex space-x-5">
              <SocialLink
                href="https://github.com/Chukwwumaemmannuel233"
                icon={<Github className="w-4 h-4" />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/chukwuma-emmanuel-126517381/"
                icon={<Linkedin className="w-4 h-4" />}
              />
              <SocialLink
                href="https://x.com/CEmmanuel25543"
                icon={<Twitter className="w-4 h-4" />}
              />
              <SocialLink
                href="https://www.instagram.com/emmanuel23670/"
                icon={<Instagram className="w-4 h-4" />}
              />
              <SocialLink
                href="#"
                icon={<TikTokIcon className="w-4 h-4" />}
                disabled
                tooltip="TikTok coming soon"
              />
            </div>
          </div>
        </div>

        {/* ==== Bottom Bar ==== */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-center text-gray-400 text-sm">
          <span className="text-center">© 2024 CUE. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  disabled = false,
  tooltip,
}: {
  href: string;
  icon: React.ReactNode;
  disabled?: boolean;
  tooltip?: string;
}) {
  if (disabled) {
    return (
      <div
        title={tooltip}
        className="
          text-gray-600 cursor-not-allowed
          p-2 rounded-full relative group
          hover:bg-gray-800
        "
      >
        {icon}
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 border border-gray-700 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
          {tooltip}
        </span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        text-gray-400 hover:text-blue-400
        transition-colors p-2 rounded-full
        hover:bg-gray-800
      "
    >
      {icon}
    </a>
  );
}
