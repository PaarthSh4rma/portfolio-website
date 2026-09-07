import Container from "../layout/Container";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section id="portfolio-intro" className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero__grid">
          <div className="hero__main">
            <p className="eyebrow">Software engineer · Melbourne</p>
            <h2 id="hero-title">{profile.headline}</h2>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions" aria-label="Primary links">
              <a className="button button--primary" href="#work">View work ↓</a>
              <a className="button" href={profile.resume} target="_blank" rel="noreferrer">
                Resume <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="hero__proof" aria-label="Selected evidence">
            <p className="hero__proof-intro">
              Monash Software Engineering graduate with experience spanning product, data, and technical teaching.
            </p>
            <dl>
              {profile.proofPoints.map((point) => (
                <div key={point.value}>
                  <dt>{point.value}</dt>
                  <dd>{point.label}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
