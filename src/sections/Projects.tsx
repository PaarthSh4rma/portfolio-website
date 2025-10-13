import { motion } from "framer-motion";

const projects = [
  {
    title: "Universal Book",
    description:
      "React platform for collaborative digital book creation with NLP and offline translation.",
    tech: ["React", "NLP", "PWA"],
    github: "", // add if public
    live: "",   // add demo link if available
  },
  {
    title: "TeachMe Talkback",
    description:
      "Cross-platform app teaching accessibility navigation (Talkback/VoiceOver) as part of a large team.",
    tech: ["Flutter", "Mobile", "Accessibility"],
    github: "",
    live: "",
  },
  {
    title: "Hiking App UI",
    description:
      "Accessible hiking education app — Figma + Flutter design with strong focus on UX.",
    tech: ["Figma", "Flutter", "UX"],
    github: "",
    live: "https://www.figma.com/file/12xfKOwLILQK1xLCeKQret/Assignment-3?type=design&node-id=0%3A1",
  },
  {
    title: "AI Search-Based Pacman Controller",
    description:
      "Automated controller for Pacman puzzles using classic search algorithms.",
    tech: ["AI", "Search", "Python"],
    github: "",
    live: "",
  },
  // Optional: Student Teams / Research highlight
  {
    title: "Monash DeepNeuron — Project Lead / HPC Engineer",
    description:
      "Led student AI/HPC initiatives; contributed to training pipelines and cluster work.",
    tech: ["HPC", "AI/ML", "Python"],
    github: "",
    live: "",
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
            <h3 className="text-xl font-display text-saberTeal mb-2">{project.title}</h3>
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
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm text-saberTeal hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.live && (
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
