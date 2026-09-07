import Container from "../layout/Container";
import { profile } from "../../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <Container>
        <p className="eyebrow">Contact</p>
        <div className="contact__grid">
          <h2 id="contact-title">Have a useful problem to solve?</h2>
          <div className="contact__copy">
            <p>I’m open to software engineering roles across product, backend, applied AI, and data-focused teams.</p>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email} <span aria-hidden="true">↗</span>
            </a>
            <div className="contact__links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={profile.resume} target="_blank" rel="noreferrer">Resume ↗</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
