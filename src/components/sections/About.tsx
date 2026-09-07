import Section from "../layout/Section";

export default function About() {
  return (
    <Section id="about" className="about" label="About" title="I care about the whole system.">
      <div className="about__grid">
        <p className="about__lead">
          I’m a Melbourne-based software engineer who likes following a problem from unclear requirements to a useful, deployed product.
        </p>
        <div className="about__body">
          <p>
            That has meant building interfaces, APIs, data workflows, applied AI features, and cloud integrations — then adding the validation, migrations, failure states, and documentation that make them dependable.
          </p>
          <p>
            My experience in energy analytics and engineering education also made me comfortable moving between implementation detail and clear communication. I’m looking for a team where thoughtful engineering and product judgment matter equally.
          </p>
        </div>
      </div>
    </Section>
  );
}
