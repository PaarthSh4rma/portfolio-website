import Section from "../layout/Section";
import { featuredProjects, type FeaturedProject } from "../../data/projects";

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a className="project-link" href={href} target="_blank" rel="noreferrer">
      {label} <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function ClientOpsDiagram() {
  return (
    <div className="system-visual system-visual--clientops" role="img" aria-label="Documents flow through ingestion and scoped retrieval before a cited answer is produced">
      <div className="diagram-label">Document-grounded answer path</div>
      <div className="flow-row">
        <span className="flow-node">PDF · DOCX · TXT</span><i aria-hidden="true">→</i>
        <span className="flow-node flow-node--accent">Ingest + validate</span><i aria-hidden="true">→</i>
        <span className="flow-node">Chunks + locations</span>
      </div>
      <div className="flow-split">
        <span><b>SQLite</b><small>text · metadata · vector IDs</small></span>
        <span><b>Pinecone</b><small>document-scoped vectors</small></span>
      </div>
      <div className="flow-output">
        <span>threshold met</span><i aria-hidden="true">→</i><strong>Answer + citations</strong>
      </div>
      <p className="system-visual__note">Below threshold? Stop before the model call.</p>
    </div>
  );
}

function OutsideEdgeDiagram() {
  return (
    <div className="system-visual system-visual--outside" role="img" aria-label="RSS stories move through normalized ingestion into PostgreSQL and a generated Daily Yorker briefing">
      <div className="diagram-label">Daily publishing workflow</div>
      <div className="feed-lines" aria-hidden="true"><span /><span /><span /></div>
      <div className="outside-pipeline">
        <span><small>01</small> RSS feeds</span>
        <i aria-hidden="true">→</i>
        <span><small>02</small> Normalize + dedupe</span>
        <i aria-hidden="true">→</i>
        <span><small>03</small> PostgreSQL</span>
        <i aria-hidden="true">→</i>
        <span className="flow-node--accent"><small>04</small> Daily Yorker</span>
      </div>
      <div className="ops-row">
        <span>protected admin jobs</span><span>dry-run delivery</span><span>migration checks</span>
      </div>
    </div>
  );
}

function BirdTagDiagram() {
  return (
    <div className="system-visual system-visual--birdtag" role="img" aria-label="Paarth's BirdTag contribution connected clients through API Gateway and Lambda to organized S3 media storage and team-owned processing">
      <div className="diagram-label">My serverless integration boundary</div>
      <div className="birdtag-grid">
        <span className="cloud-node">Client upload</span>
        <i aria-hidden="true">→</i>
        <span className="cloud-node cloud-node--owned">API Gateway</span>
        <i aria-hidden="true">→</i>
        <span className="cloud-node cloud-node--owned">Lambda</span>
        <i aria-hidden="true">→</i>
        <span className="cloud-node cloud-node--owned">Presigned S3</span>
      </div>
      <div className="boundary">
        <span>IAM permissions</span><span>media organization</span><span>service debugging</span>
      </div>
      <div className="team-handoff">Handoff to team-owned model, thumbnail, and query components →</div>
    </div>
  );
}

function ProjectVisual({ project }: { project: FeaturedProject }) {
  if (project.visual.type === "image") {
    return (
      <figure className="project-visual project-visual--image">
        <img
          src={project.visual.src}
          alt={project.visual.alt}
          width={project.visual.width}
          height={project.visual.height}
          loading={project.number === "01" ? "eager" : "lazy"}
          decoding="async"
        />
        <figcaption>Verified public product · captured September 2026</figcaption>
      </figure>
    );
  }

  return (
    <figure className="project-visual">
      {project.visual.type === "clientops" && <ClientOpsDiagram />}
      {project.visual.type === "outside-edge" && <OutsideEdgeDiagram />}
      {project.visual.type === "birdtag" && <BirdTagDiagram />}
      <figcaption>{project.visual.alt}</figcaption>
    </figure>
  );
}

export default function Projects() {
  return (
    <Section
      id="work"
      className="featured-work"
      label="Featured work"
      title="Proof, not a project list."
      intro="Four systems selected for technical range, implementation depth, and clear personal ownership."
    >
      <div className="project-list">
        {featuredProjects.map((project) => (
          <article key={project.id} className="featured-project">
            <div className="featured-project__meta">
              <span>{project.number}</span>
              <p>{project.category}</p>
            </div>

            <div className="featured-project__grid">
              <div className="featured-project__copy">
                <h3>{project.title}</h3>
                <p className="project-statement">{project.statement}</p>
                <dl className="project-details">
                  <div><dt>Built</dt><dd>{project.built}</dd></div>
                  <div><dt>Engineering</dt><dd>{project.engineering}</dd></div>
                </dl>
                <ul className="stack-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <ExternalLink key={link.href} href={link.href} label={link.label} />
                    ))}
                  </div>
                )}
                {project.note && <p className="project-note">{project.note}</p>}
              </div>
              <ProjectVisual project={project} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
