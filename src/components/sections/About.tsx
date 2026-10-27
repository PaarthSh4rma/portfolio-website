import Section from "../layout/Section";

export default function About() {
  return (
    <Section id="about" className="about" label="About" title="I care about the whole system.">
      <div className="about__grid">
        <p className="about__lead">
          I’m a Melbourne-based software engineer at Orbit Reporting + Analytics who likes following a problem from unclear requirements to a useful, deployed product.
        </p>
        <div className="about__body">
          <p>
            That has meant building interfaces, APIs, data workflows, applied AI features, and cloud integrations — then adding the validation, migrations, failure states, and documentation that make them dependable.
          </p>
          <p>
            I graduated from Monash University with Distinction, supported by the Sir John Monash International Excellence Scholarship, and was named to the Faculty of Engineering Dean’s Honour List. My experience in energy analytics and engineering education made me comfortable moving between implementation detail and clear communication.
          </p>
        </div>
      </div>
    </Section>
  );
}
