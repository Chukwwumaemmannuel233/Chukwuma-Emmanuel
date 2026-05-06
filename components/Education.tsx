"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export default function Education() {
  return (
    <section
      id="education"
      // 🌟 New background: soft gradient from slate to indigo
      className="py-20 px-4 bg-gray-900 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-3xl font-bold text-center mb-12
                     bg-gradient-to-r from-green-400 to-teal-400
                     bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card
            className="bg-gray-800/90 border border-gray-700 hover:border-teal-400/60 transition-colors"
          >
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-white">
                  Enugu State University of Science and Technology
                </CardTitle>
                <CardDescription className="text-teal-300 font-medium">
                  Bachelor of Engineering – Computer Engineering
                </CardDescription>
              </div>

              {/* ✅ ESUT logo image placeholder */}
              <img
                src="data:image/jpeg;base64,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"   // <- replace with actual path or URL
                alt="ESUT Logo"
                className="w-16 h-16 object-contain"
              />
            </CardHeader>

            <CardContent>
              <p className="text-gray-300 text-sm">
                September 2025 – Present • Currently pursuing a B.Eng. in Computer Engineering,
                focusing on software engineering fundamentals, algorithms, and systems design.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
