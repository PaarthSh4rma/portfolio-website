// src/sections/Projects.tsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Galactic Dashboard",
    description: "A real-time space fleet command interface using React + WebSockets.",
    tech: ["React", "Tailwind", "Socket.io"],
    github: "https://github.com/yourname/project-1",
    live: "https://your-live-link-1.com",
  },
  {
    title: "AI Droid Trainer",
    description: "An ML model that predicts droid behavior using PyTorch and Flask.",
    tech: ["PyTorch", "Flask", "PostgreSQL"],
    github: "https://github.com/yourname/project-2",
    live: "https://your-live-link-2.com",
  },
  {
    title: "Starforge Portfolio",
    description: "This site. Built with hyperspeed and TypeScript precision.",
    tech: ["Vite", "React", "Framer Motion"],
    github: "https://github.com/yourname/starforge-portfolio",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-display text-saberTeal mb-12 text-center drop-shadow-glow">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-black/40 p-6 rounded-xl shadow-lg border border-saberTeal/20 backdrop-blur-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-display text-saberTeal mb-2">
              {project.title}
            </h3>
            <p className="text-starWhite text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-saberTeal/20 text-saberTeal px-2 py-1 rounded text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                className="text-sm text-saberTeal hover:underline"
              >
                GitHub
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  className="text-sm text-saberTeal hover:underline"
                >
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
