// src/sections/About.tsx
import { motion } from "framer-motion";
import portrait from "../assets/paarth.jpeg"; // adjust if different file

const timeline = [
  { year: "2020", text: "Discovered coding..." },
  { year: "2021", text: "Started studying Software Engineering..." },
  { year: "2022", text: "Dove deep into AI..." },
  { year: "2024", text: "Interned as a full-stack dev..." },
  { year: "2025", text: "Now launching Starforge..." },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-display text-saberTeal mb-12 text-center drop-shadow-glow">
        My Origin Story
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Hologram Portrait */}
<motion.div
  className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-saberTeal/40 shadow-[0_0_30px_rgba(0,255,255,0.4)] hologram"
  whileHover={{ scale: 1.05, rotate: 1 }}
  transition={{ type: 'spring', stiffness: 200 }}
>
  <img
    src={portrait}
    alt="Paarth Avatar"
    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300 rounded-full"
  />
  <div className="absolute inset-0 bg-saberTeal/10 backdrop-blur-sm animate-pulse pointer-events-none z-0" />
</motion.div>

        {/* Timeline */}
        <div className="space-y-10">
          {timeline.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-saberTeal/60 pl-6 relative"
            >
              <span className="absolute -left-3 top-1 w-3 h-3 bg-saberTeal rounded-full shadow-glow" />
              <h3 className="text-saberTeal font-display text-lg mb-1">{entry.year}</h3>
              <p className="text-starWhite text-sm">{entry.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
