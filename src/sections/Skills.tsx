// src/sections/Skills.tsx
import { motion } from "framer-motion";
import {
  SiPython, SiCplusplus, SiMysql,
  SiPandas, SiScikitlearn, SiTensorflow,
  SiReact, SiFlutter,
  SiDocker, SiKubernetes, SiAwslambda,
  SiTableau,
  SiFigma
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";


const skills = [
  {
    category: "Programming & Development",
    items: [
      { name: "Python", level: 90, icon: <SiPython /> },
      { name: "Java", level: 80, icon: <FaJava /> },
      { name: "C/C++", level: 75, icon: <SiCplusplus /> },
      { name: "SQL", level: 80, icon: <SiMysql /> },
    ],
  },
  {
    category: "AI / ML / NLP",
    items: [
      { name: "Machine Learning", level: 85, icon: <SiScikitlearn /> },
      { name: "NLP", level: 80, icon: <SiTensorflow /> },
      { name: "Analytics & Modeling", level: 80, icon: <SiPandas /> },
    ],
  },
  {
    category: "Web & App",
    items: [
      { name: "React", level: 85, icon: <SiReact /> },
      { name: "Flutter (cross-platform)", level: 70, icon: <SiFlutter /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", level: 80, icon: <SiDocker /> },
      { name: "Kubernetes", level: 65, icon: <SiKubernetes /> },
      { name: "Azure / AWS", level: 70, icon: <SiAwslambda /> },
    ],
  },
  {
    category: "Data & Viz",
    items: [
      { name: "Tableau", level: 75, icon: <SiTableau /> },
      { name: "Power BI", level: 75, icon: <LuChartNoAxesCombined /> },
    ],
  },
  {
    category: "UI/UX & Tools",
    items: [
      { name: "Figma", level: 80, icon: <SiFigma /> },
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
                    <span className="flex items-center gap-2">
                      <span className="text-saberTeal text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-1 overflow-hidden">
                    <motion.div
                      className="h-full bg-saberTeal"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: j * 0.06 }}
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
