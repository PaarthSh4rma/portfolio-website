// src/sections/Experience.tsx
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Customer Insights Analyst",
    company: "Origin Energy",
    location: "Melbourne",
    duration: "Jul 2024 – Dec 2024",
    bullets: [
      "Delivered demand forecasting, collectability analysis & credit risk ML models deployed to production.",
      "Optimized Energy Specialist workflows and improved reminder/refund processes & call-driver insights.",
      "Partnered with business & tech teams to convert complex data into actionable recommendations.",
    ],
    tech: ["Python", "ML", "Analytics", "SQL"],
  },
  {
    title: "Teaching Associate — Engineering Smart Systems",
    company: "Monash University",
    location: "Clayton, Victoria",
    duration: "Jul 2023 – Present",
    bullets: [
      "Designed engaging labs/workshops; mentored 100+ students in Python & Arduino.",
      "Simplified complex concepts; contributed to smoother delivery and higher student satisfaction.",
    ],
    tech: ["Python", "Arduino"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto text-left">
      <h2 className="text-4xl font-display text-saberTeal mb-12 text-center drop-shadow-glow">
        Professional Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-4 border-saberTeal/40"
          >
            {/* Glowing dot on the line */}
            <span className="absolute -left-[7px] top-2 w-3 h-3 bg-saberTeal rounded-full shadow-[0_0_10px_#00FFFF]" />

            {/* Header row */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-display text-saberTeal font-semibold">
                  {exp.title}
                </h3>
                <span className="text-starWhite/80 text-sm">
                  @ {exp.company} — {exp.location}
                </span>
              </div>
              <span className="text-xs text-starWhite/70 whitespace-nowrap">
                {exp.duration}
              </span>
            </div>

            {/* Perfectly aligned custom bullets */}
            <ul className="mt-4 space-y-2">
              {exp.bullets.map((b, idx) => (
                <li
                  key={idx}
                  className="relative pl-4 text-sm text-starWhite leading-relaxed"
                >
                  <span className="absolute left-0 top-[0.45em] block h-1.5 w-1.5 rounded-full bg-saberTeal shadow-[0_0_6px_#00FFFF]" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.tech.map((t, j) => (
                <span
                  key={j}
                  className="bg-saberTeal/20 text-saberTeal px-2 py-1 rounded text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
