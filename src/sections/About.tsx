// src/sections/About.tsx
import { motion } from "framer-motion";
import portrait from "../assets/paarth.jpeg"; // change if different

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-display text-saberTeal mb-12 text-center drop-shadow-glow">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        {/* Hologram portrait (optional) */}
        <motion.div
          whileHover={{ scale: 1.04, rotate: 0.5 }}
          transition={{ type: "spring", stiffness: 220 }}
          className="relative md:col-span-2 aspect-square w-60 md:w-72 mx-auto rounded-full overflow-hidden
                     border-4 border-saberTeal/40 shadow-[0_0_30px_rgba(0,255,255,0.35)]"
        >
          <img
            src={portrait}
            alt="Paarth"
            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition duration-300"
          />
          <div className="absolute inset-0 bg-saberTeal/10 backdrop-blur-[1px] pointer-events-none" />
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 space-y-6"
        >
          <p className="text-starWhite/90 leading-relaxed">
            I’m <span className="text-saberTeal font-semibold">Paarth Sharma</span> —
            a Software Engineering student focused on building
            <span className="text-saberTeal"> AI-driven</span> and
            <span className="text-saberTeal"> data-centric</span> products. I love turning
            messy real-world signals into clean, fast interfaces and scalable services.
          </p>

          <ul className="space-y-2 text-sm text-starWhite/90">
            <li>• Shipped ML forecasting & risk models into production at <span className="text-saberTeal">Origin Energy</span>.</li>
            <li>• Mentor & TA at Monash — 100+ students taught Python & Arduino with hands-on labs.</li>
            <li>• Comfortable across the stack: <span className="text-saberTeal">Python, React, SQL</span>, and cloud with Docker/K8s.</li>
            <li>• Design-minded engineer — I prototype quickly with <span className="text-saberTeal">Figma</span> and ship polished UI.</li>
          </ul>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-2">
            {[
              "AI/ML • NLP",
              "Full-stack • React",
              "Cloud • Docker/K8s",
              "Data Viz • Tableau/BI",
            ].map((chip) => (
              <span
                key={chip}
                className="bg-saberTeal/15 text-saberTeal px-3 py-1 rounded-full text-xs font-mono"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3 pt-2">
            <a
              href="#projects"
              className="px-4 py-2 border-2 border-saberTeal text-saberTeal rounded hover:bg-saberTeal hover:text-black transition shadow-glow"
            >
              View Projects
            </a>
            <a
              href="/../Paarth_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-saberTeal text-black rounded hover:opacity-90 transition shadow-glow"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
