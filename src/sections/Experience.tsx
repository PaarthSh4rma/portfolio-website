// src/sections/Experience.tsx
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Customer Insights Analyst",
    company: "Origin Energy",
    duration: "July 2024 – December 2024",
    description:
      "Built an AI-based analytics dashboard with Python and Streamlit. Integrated Hugging Face transformers for real-time summarization.",
    tech: ["Python", "SQL", "ML", "Docker"],
  },
  {
    title: "Teaching Associate",
    company: "Monash University",
    duration: "June 2023 – Present",
    description:
      "Developed a scalable React + Express.js admin portal. Deployed with Vercel, implemented JWT auth, and used MongoDB for data modeling.",
    tech: ["Python", "Arduino", "Circuits"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-display text-saberTeal mb-12 text-center drop-shadow-glow">
        Professional Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="border-l-4 border-saberTeal/60 pl-6 relative"
          >
            <span className="absolute -left-3 top-2 w-3 h-3 bg-saberTeal rounded-full shadow-glow" />
            <h3 className="text-xl font-display text-saberTeal font-semibold">
              {exp.title} @ {exp.company}
            </h3>
            <p className="text-xs text-starWhite mb-2">{exp.duration}</p>
            <p className="text-sm text-starWhite mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, j) => (
                <span
                  key={j}
                  className="bg-saberTeal/20 text-saberTeal px-2 py-1 rounded text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
