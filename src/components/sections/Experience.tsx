import Section from "../layout/Section";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Built in real environments."
      intro="Production-facing data work and technical teaching — both shaped by explaining trade-offs clearly and making systems easier to use."
    >
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={item.company}>
            <div className="experience-item__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="experience-item__role">
              <h3>{item.role}</h3>
              <p>{item.company}{item.context ? ` · ${item.context}` : ""}</p>
              <span>{item.period}</span>
            </div>
            <div className="experience-item__body">
              <p className="experience-summary">{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
