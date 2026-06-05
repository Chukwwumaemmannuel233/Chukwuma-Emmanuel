"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Code, Rocket } from "lucide-react";

export default function AboutModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="border border-white/10 bg-white/[0.04] px-5 py-2 text-slate-200 transition hover:border-teal-300/50 hover:bg-white/10 hover:text-white"
        >
          Learn More About Me
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-[#080b12] text-slate-300">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">About Me</DialogTitle>
          <DialogDescription className="text-slate-500">
            Full-stack developer focused on building real-world solutions.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-8 text-sm leading-7">
          <div className="space-y-3">
            <h3 className="flex items-center text-lg font-semibold text-teal-300">
              <Rocket className="mr-2 h-5 w-5" />
              Journey
            </h3>

            <p>
              I started with frontend development, building responsive
              interfaces using React and Next.js. Over time, I moved into
              backend development with Node.js and PostgreSQL to build complete,
              scalable applications.
            </p>

            <p>
              Today, I work across the full stack and also build mobile apps
              with React Native, focusing on performance, clean architecture,
              and usability.
            </p>

            <div className="flex flex-wrap gap-6 pt-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Since 2021</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Nigeria</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center text-lg font-semibold text-teal-300">
              <Code className="mr-2 h-5 w-5" />
              Tech Stack
            </h3>

            <p>
              I build user interfaces with React, Next.js, TypeScript, and
              Tailwind CSS, and handle backend logic using Node.js, Express, and
              PostgreSQL.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Node.js",
                "Express",
                "PostgreSQL",
                "React Native",
              ].map((tech) => (
                <Badge
                  key={tech}
                  className="border border-teal-300/20 bg-teal-300/10 text-teal-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-teal-300">
              What I Focus On
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Clean UI & UX",
                "Scalable APIs",
                "Performance Optimization",
                "Bug Fixing & Debugging",
                "Production-ready Code",
              ].map((item) => (
                <Badge
                  key={item}
                  className="border border-white/10 bg-white/[0.04] text-slate-300"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
