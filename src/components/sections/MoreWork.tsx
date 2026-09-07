import Section from "../layout/Section";
import { moreProjects } from "../../data/projects";

export default function MoreWork() {
  return (
    <Section
      id="more-work"
      label="More work"
      title="Focused builds and experiments."
      intro="Smaller in scope, still useful evidence of how I approach simulation, privacy, and analytical tooling."
    >
      <div className="more-work-list">
        {moreProjects.map((project) => (
          <article key={project.title} className="more-project">
            <div className="more-project__title">
              {project.image && (
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <ul className="stack-list" aria-label={`${project.title} technologies`}>
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="project-links">
              {project.links.map((link) => (
                <a key={link.href} className="project-link" href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
