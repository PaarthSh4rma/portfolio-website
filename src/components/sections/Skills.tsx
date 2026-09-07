import Section from "../layout/Section";
import { capabilityGroups } from "../../data/skills";

export default function Skills() {
  return (
    <Section
      id="capabilities"
      label="Capabilities"
      title="A practical full-stack toolkit."
      intro="Technologies are grouped by the work they enable, with evidence from the systems above and my industry experience."
    >
      <div className="capability-grid">
        {capabilityGroups.map((group, index) => (
          <article className="capability" key={group.title}>
            <div className="capability__heading">
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
            </div>
            <p>{group.evidence}</p>
            <ul aria-label={`${group.title} technologies`}>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
