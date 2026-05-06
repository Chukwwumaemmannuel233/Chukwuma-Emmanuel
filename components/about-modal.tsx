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
          className="
            border border-gray-700 
            text-gray-300 
            hover:border-blue-500
            hover:text-white
            hover:bg-blue-600/10
            transition-all duration-300
            rounded-md px-5 py-2
          "
        >
          Learn More About Me
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-gray-950 border border-gray-800 text-gray-300 max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">
            About Me
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Full-stack developer focused on building real-world solutions.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-6 text-sm leading-relaxed">

          {/* Career */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-400 flex items-center">
              <Rocket className="w-5 h-5 mr-2" />
              Journey
            </h3>

            <p>
              I started with frontend development, building responsive interfaces
              using React and Next.js. Over time, I moved into backend development,
              working with Node.js and PostgreSQL to build complete, scalable applications.
            </p>

            <p>
              Today, I work across the full stack and also build mobile apps with
              React Native, focusing on performance, clean architecture, and usability.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-400 pt-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Since 2021</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nigeria</span>
              </div>
            </div>
          </div>

          {/* Stack */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Tech Stack
            </h3>

            <p>
              I build user interfaces with React, Next.js, TypeScript, and Tailwind CSS,
              and handle backend logic using Node.js, Express, and PostgreSQL.
              I also develop cross-platform mobile apps with React Native.
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
                  className="bg-blue-500/10 text-blue-400 border border-blue-500/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Focus */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-400">
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
                  className="bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500 transition"
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