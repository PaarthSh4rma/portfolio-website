import Container from "../layout/Container";
import { profile } from "../../data/profile";

export default function Landing() {
  return (
    <section id="top" className="landing" aria-labelledby="landing-title">
      <Container className="landing__container">
        <div className="landing__frame">
          <div className="landing__copy">
            <h1 id="landing-title" aria-label="Paarth Sharma">
              <span aria-hidden="true">Paarth</span>
              <span aria-hidden="true">Sharma</span>
            </h1>
            <p>Software engineer building<br />useful systems end-to-end.</p>
            <span className="landing__location">{profile.location}</span>
          </div>

          <div className="landing__geometry" aria-hidden="true">
            <span className="landing__axis landing__axis--horizontal" />
            <span className="landing__axis landing__axis--vertical" />
            <span className="landing__square" />
            <span className="landing__circle" />
            <span className="landing__diagonal" />
          </div>

          <a className="landing__enter" href="#portfolio-intro">
            View portfolio <span aria-hidden="true">↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
