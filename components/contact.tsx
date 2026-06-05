"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      projectType: formData.get("projectType"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setMessage({
        type: "success",
        text: "Message sent successfully. Thanks for reaching out; I will reply within 24 hours.",
      });
      form.reset();
    } catch {
      setMessage({
        type: "error",
        text: "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/10 bg-[linear-gradient(180deg,#080b12_0%,#0f172a_45%,#0f172a_100%)] px-4 pb-12 pt-16 md:pb-16 md:pt-24"
    >
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed left-4 right-4 top-20 z-50 max-w-md sm:left-auto"
          >
            <div
              className={`relative flex items-center gap-3 rounded-lg border p-4 shadow-lg backdrop-blur-sm ${
                message.type === "success"
                  ? "border-emerald-400/50 bg-emerald-950/90 text-emerald-100"
                  : "border-red-400/50 bg-red-950/90 text-red-100"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle className="h-5 w-5 shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 shrink-0" />
              )}
              <p className="text-sm font-medium">{message.text}</p>
              <button
                onClick={() => setMessage(null)}
                className="ml-auto text-current transition-opacity hover:opacity-70"
                aria-label="Dismiss notification"
              >
                <XCircle className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 sm:text-sm">
            Contact
          </p>
          <h2 className="text-2xl font-black text-white sm:text-3xl md:text-5xl">
            Have a project, role, or idea? Let us talk.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            I am open to collaborations, freelance work, and full-time
            opportunities.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 md:p-6"
          >
            <ContactInfo
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value="echukwuma561@gmail.com"
              link="mailto:echukwuma561@gmail.com"
            />
            <ContactInfo
              icon={<Phone className="h-5 w-5" />}
              label="Phone"
              value="+234 816 177 0490"
              link="tel:+2348161770490"
            />
            <ContactInfo
              icon={<MapPin className="h-5 w-5" />}
              label="Location"
              value="Enugu, Nigeria"
            />

            <div className="overflow-hidden rounded-xl border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Gariki,+Enugu,+Nigeria&output=embed"
                width="100%"
              height="220"
                loading="lazy"
                className="w-full"
                title="Enugu, Nigeria map"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-[#080b12]/90 p-4 shadow-2xl shadow-black/20 md:p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  name="name"
                  type="text"
                  label="Name *"
                  placeholder="Your full name"
                  required
                />
                <FormField
                  name="email"
                  type="email"
                  label="Email *"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <FormField
                name="company"
                type="text"
                label="Company"
                placeholder="Your company or organization"
              />

              <SelectField
                name="projectType"
                label="Project Type *"
                required
                options={[
                  "Website",
                  "Mobile App",
                  "UI/UX Design",
                  "Full-stack Development",
                  "Other",
                ]}
              />

              <FormField
                name="subject"
                type="text"
                label="Subject *"
                placeholder="What is this about?"
                required
              />

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about the project, opportunity, or idea..."
                  className="min-h-[150px] border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-teal-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-teal-400 text-slate-950 hover:bg-teal-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  label,
  value,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-teal-300/50 sm:gap-4 sm:p-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-teal-400 text-slate-950">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm text-slate-400">{label}</p>
        <p className="break-words font-medium text-white">{value}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function FormField({
  name,
  type,
  label,
  placeholder,
  required = false,
}: {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-slate-300">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-teal-300"
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
  required = false,
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-slate-300">
        {label}
      </Label>
      <select
        id={name}
        name={name}
        required={required}
        className="h-10 w-full rounded-md border border-white/10 bg-white/[0.04] px-3 text-sm text-white focus:border-teal-300 focus:outline-none"
      >
        <option value="" className="bg-slate-950">
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} className="bg-slate-950">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
