export type Project = {
  title: string;
  summary: string;
  bullets: string[];
  stack: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Outside Edge",
    summary:
      "A full-stack cricket intelligence platform that turns fragmented news feeds into a daily briefing, match centre, and subscriber email workflow.",
    bullets: [
      "Separated FastAPI routes, services, and repositories around PostgreSQL, SQLAlchemy, and Alembic, with protected admin operations and idempotent RSS ingestion.",
      "Built a scheduled publishing pipeline with dry-run safeguards, per-recipient failure tracking, unsubscribe handling, and duplicate-delivery protection.",
      "Defined Docker and Render environments and a CI workflow that runs backend tests and migration checks against PostgreSQL plus frontend lint and build.",
    ],
    stack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Render",
      "GitHub Actions",
    ],
    github: "https://github.com/PaarthSh4rma/outside-edge",
  },
  {
    title: "ClientOps Copilot",
    summary:
      "A source-grounded document copilot for indexing client material and answering questions with traceable evidence.",
    bullets: [
      "Built TXT, PDF, and DOCX ingestion that preserves citation locations while coordinating SQLite metadata, local files, and Pinecone vectors.",
      "Scoped retrieval to individual documents and gated LLM calls on relevance thresholds, returning citations or explicit insufficient-evidence and provider-failure states.",
      "Added compensating cleanup, separate liveness and dependency-readiness checks, injected test doubles, Docker setup, and backend/frontend CI quality gates.",
    ],
    stack: [
      "React",
      "FastAPI",
      "SQLAlchemy",
      "Pinecone",
      "SentenceTransformers",
      "OpenRouter",
      "Docker",
      "Pytest",
    ],
    github: "https://github.com/PaarthSh4rma/clientops-copilot",
  },
  {
    title: "RaceBrain",
    summary:
      "An F1 strategy analysis platform that combines probabilistic race simulation with grounded, scenario-aware explanations.",
    bullets: [
      "Modelled tyre degradation, pit-stop loss, race variance, and safety-car probability through Monte Carlo strategy simulations.",
      "Converted natural-language scenarios into structured parameter changes, reran simulations, and compared outcomes before generating contingency guidance.",
      "Exposed deterministic analysis, scenario, and LLM-assisted explanation workflows through modular FastAPI routes and a React dashboard.",
    ],
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "Pydantic",
      "Monte Carlo Simulation",
      "OpenRouter",
    ],
    github: "https://github.com/PaarthSh4rma/racebrain",
  },
  {
    title: "JobTracker",
    summary:
      "A deployed full-stack dashboard for recording job applications, tracking status changes, and reviewing pipeline totals.",
    bullets: [
      "Designed FastAPI CRUD, filtering, and aggregate-statistics endpoints backed by SQLAlchemy models with UUID identifiers and timestamped records.",
      "Connected a responsive React and Tailwind interface to a Supabase PostgreSQL database through the deployed API.",
      "Shipped the frontend on Vercel and API on Render, with GitHub Actions validating backend imports and production frontend builds.",
    ],
    stack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/PaarthSh4rma/job-tracker",
    live: "https://job-tracker-eosin-one.vercel.app/",
  },
];
