"use client";

import { useRef } from "react";
import { Download } from "lucide-react";

export default function CoverLetterPage() {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/cover-letter.pdf";
    link.download = "Ugwu_Chukwuma_Emmanuel_Cover_Letter.pdf";
    link.click();
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-18 px-4">
      {/* Download Button */}
      <div className="w-full max-w-4xl flex justify-end mb-4">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-[#0F1F3D] hover:bg-[#1a3260] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>

      {/* Cover Letter Card */}
      <div
        ref={printRef}
        className="w-full max-w-4xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-lg"
      >
        {/* ── SIDEBAR ── */}
        <aside
          className="flex flex-col items-center pt-8 pb-6 px-4 w-full md:flex-shrink-0"
          style={{
            background: "#0F1F3D",
            borderBottom: "4px solid #C9A84C",
            // on md+ switch to right border
          }}
        >
          {/* on md+ fixed width, on mobile full width */}
          <div className="w-full md:w-44 flex flex-col items-center">
            {/* Initials Circle */}
            <div
              className="flex items-center justify-center rounded-full font-bold text-[#0F1F3D] mb-5 flex-shrink-0"
              style={{ width: 64, height: 64, background: "#C9A84C", fontSize: 18 }}
            >
              UCE
            </div>

            {/* On mobile: contact in a grid, on desktop: stacked */}
            <div className="w-full">
              {/* Contact */}
              <SidebarSection title="CONTACT">
                <div className="grid grid-cols-2 gap-x-4 gap-y-0 md:grid-cols-1">
                  <SidebarRow label="EMAIL" value="echukwuma561@gmail.com" />
                  <SidebarRow label="PHONE" value="08161770490" />
                  <SidebarRow label="LOCATION" value="Enugu, Nigeria" />
                  <SidebarRow
                    label="GITHUB"
                    value="Chukwwumaemmannuel233"
                    href="https://github.com/Chukwwumaemmannuel233"
                  />
                  <SidebarRow
                    label="PORTFOLIO"
                    value="chukwuma-emmanuel.vercel.app"
                    href="https://chukwuma-emmanuel-seven.vercel.app/"
                  />
                </div>
              </SidebarSection>

              {/* Tech Stack */}
              <SidebarSection title="TECH STACK">
                <div className="flex flex-wrap gap-2 justify-center md:flex-col md:gap-0">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "PostgreSQL",
                    "Node.js",
                    "REST APIs",
                    "Git / GitHub",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="text-center text-white rounded py-1 px-3 md:px-0 md:w-full md:mb-2 text-xs"
                      style={{ background: "#1A3560", fontSize: 11 }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </SidebarSection>
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <div
          className="flex flex-col flex-1 overflow-hidden"
          style={{ borderLeft: "4px solid #C9A84C" }}
        >
          {/* Header strip */}
          <div className="px-6 md:px-10 pt-7 pb-5" style={{ background: "#F0F4FA" }}>
            <h1
              className="font-bold text-[#0F1F3D] mb-3"
              style={{ fontSize: "clamp(18px, 4vw, 26px)", fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Ugwu Chukwuma Emmanuel
            </h1>
            <div className="flex flex-wrap items-center gap-3 justify-between">
              <span
                className="inline-block text-[#0F1F3D] font-bold rounded px-3 py-1"
                style={{ background: "#C9A84C", fontSize: "clamp(8px, 2vw, 10px)", letterSpacing: "0.08em" }}
              >
                FULL STACK DEVELOPER &nbsp;·&nbsp; 3–5 YRS EXP
              </span>
              <span
                className="text-gray-400 text-xs"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                June 2025
              </span>
            </div>
            {/* Gold divider */}
            <div className="mt-4" style={{ borderBottom: "1.5px solid #C9A84C" }} />
          </div>

          {/* Letter Body */}
          <div className="px-6 md:px-10 py-6 flex flex-col flex-1">
            <p
              className="font-bold text-[#0F1F3D] mb-4"
              style={{ fontSize: 13, fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Dear Hiring Manager,
            </p>

            <BodyParagraph>
              I am writing to express my strong interest in a{" "}
              <strong>Full Stack Developer</strong> position at your organization.
              With 3–5 years of hands-on experience building scalable,
              production-ready web applications, I bring both the technical depth
              and the collaborative mindset needed to contribute meaningfully from
              day one.
            </BodyParagraph>

            <BodyParagraph>
              My core stack —{" "}
              <strong>React, Next.js, TypeScript, and PostgreSQL</strong> — has
              been the foundation of every product I have shipped. I have built
              full-stack applications end-to-end: designing relational database
              schemas, architecting RESTful APIs, and crafting responsive,
              accessible front-end interfaces that users actually enjoy. I am
              equally comfortable reasoning about a query plan in PostgreSQL as I
              am fine-tuning a React component's performance.
            </BodyParagraph>

            <BodyParagraph>
              Most recently, I developed a full-featured e-commerce platform using{" "}
              <strong>Next.js 16 with Turbopack</strong>, integrating a PostgreSQL
              backend via a connection pool, building an admin dashboard with
              role-based authentication, and deploying the application to
              production. This project sharpened my ability to debug complex
              issues — from SSL connection timeouts to Turbopack cache corruption
              — and reinforced my belief that great engineering is as much about
              persistence as it is about skill.
            </BodyParagraph>

            <BodyParagraph>
              I am a fast learner who thrives in environments where quality is
              taken seriously. I write clean, typed code, take ownership of my
              work, and communicate clearly with both technical and non-technical
              stakeholders. I am excited by the opportunity to grow alongside a
              team that ships thoughtful software.
            </BodyParagraph>

            <BodyParagraph>
              I would welcome the chance to discuss how my skills and experience
              can contribute to your team's goals. Thank you sincerely for your
              time and consideration.
            </BodyParagraph>

            {/* Sign off */}
            <div className="mt-6">
              <p
                className="text-[#0F1F3D] mb-2"
                style={{ fontSize: 13, fontFamily: "Arial, sans-serif" }}
              >
                Warm regards,
              </p>
              <p
                className="font-bold text-[#0F1F3D]"
                style={{ fontSize: 15, fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                Ugwu Chukwuma Emmanuel
              </p>
              <p
                className="text-gray-400 mt-1"
                style={{ fontSize: 11, fontFamily: "Arial, sans-serif" }}
              >
                Full Stack Developer
              </p>
              <div
                className="mt-2"
                style={{ width: 180, borderBottom: "1px solid #C9A84C" }}
              />
            </div>
          </div>

          {/* Footer */}
          <div
            className="px-6 md:px-10 py-3 text-center"
            style={{ background: "#0F1F3D" }}
          >
            <p
              className="font-bold text-center leading-relaxed"
              style={{ color: "#C9A84C", letterSpacing: "0.05em", fontSize: "clamp(8px, 1.5vw, 10px)" }}
            >
              Ugwu Chukwuma Emmanuel &nbsp;·&nbsp; Full Stack Developer
              &nbsp;·&nbsp; React &nbsp;·&nbsp; Next.js &nbsp;·&nbsp; TypeScript
              &nbsp;·&nbsp; PostgreSQL
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ── Sub-components ── */

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mb-5">
      <p
        className="text-center font-bold mb-1"
        style={{ color: "#C9A84C", fontSize: 9, letterSpacing: "0.2em" }}
      >
        {title}
      </p>
      <div style={{ borderBottom: "0.5px solid #C9A84C", marginBottom: 10 }} />
      {children}
    </div>
  );
}

function SidebarRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="w-full text-center mb-3">
      <p
        style={{
          color: "#A0AEC0",
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: "0.15em",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline break-all"
          style={{
            color: "#E2E8F0",
            fontSize: 9,
            fontFamily: "Arial, sans-serif",
          }}
        >
          {value}
        </a>
      ) : (
        <p
          className="break-all"
          style={{
            color: "#E2E8F0",
            fontSize: 9,
            fontFamily: "Arial, sans-serif",
          }}
        >
          {value}
        </p>
      )}
    </div>
  );
}

function BodyParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[#0F1F3D] mb-4 text-justify"
      style={{
        fontSize: "clamp(11px, 2.5vw, 12.5px)",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.85,
      }}
    >
      {children}
    </p>
  );
}