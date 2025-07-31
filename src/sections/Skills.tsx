// src/sections/Skills.tsx
import { motion } from "framer-motion";
import {
    SiTypescript,
    SiPython,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiPytorch,
    SiGithub,
    SiDocker,
    SiVite,
} from "react-icons/si";


const skills = [
    {
        category: "Languages",
        items: [
            { name: "TypeScript", level: 90, icon: <SiTypescript /> },
            { name: "Python", level: 85, icon: <SiPython /> },
            { name: "JavaScript", level: 80, icon: <SiJavascript /> },
        ],
    },
    {
        category: "Frameworks",
        items: [
            { name: "React", level: 90, icon: <SiReact /> },
            { name: "TailwindCSS", level: 85, icon: <SiTailwindcss /> },
            { name: "PyTorch", level: 75, icon: <SiPytorch /> },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Git & GitHub", level: 90, icon: <SiGithub /> },
            { name: "Docker", level: 70, icon: <SiDocker /> },
            { name: "Vite", level: 80, icon: <SiVite /> },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
  <h2 className="text-4xl font-display text-saberTeal mb-12 text-center drop-shadow-glow">
    Skills & Stack
  </h2>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="space-y-10"
  >
    {skills.map((group, i) => (
      <div key={i}>
        <h3 className="text-xl font-display text-starWhite mb-4">{group.category}</h3>
        <div className="space-y-4">
          {group.items.map((skill, j) => (
            <div key={j}>
              <div className="flex justify-between items-center text-sm text-starWhite">
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-saberTeal text-lg hover:drop-shadow-glow"
                  >
                    {skill.icon}
                  </motion.div>
                  <span>{skill.name}</span>
                </div>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 mt-1 overflow-hidden">
                <motion.div
                  className="h-full bg-saberTeal"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: j * 0.1 }}
                  viewport={{ once: true }}
                  style={{ boxShadow: "0 0 10px rgba(0, 255, 255, 0.6)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </motion.div>
</section>

    );
}
