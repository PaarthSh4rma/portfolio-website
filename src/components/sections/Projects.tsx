import Section from "../layout/Section";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Projects that show how I build.
          </h2>
          <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            A selection of work across full-stack systems, cloud infrastructure,
            and applied machine learning.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-6 transition-all hover:border-[var(--border-hover)] md:p-8"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
                      {project.summary}
                    </p>
                  </div>

                  {(project.github || project.live) && (
                    <div className="flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-[var(--border-primary)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          GitHub
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent)] transition-all hover:bg-[rgba(16,7,250,0.08)]"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <ul className="space-y-3">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-7 text-[var(--text-secondary)] md:text-base"
                    >
                      <span className="mr-3 text-[var(--accent)]">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border-primary)] px-3 py-2 text-sm text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}