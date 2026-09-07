export type ProjectLink = {
  label: "Live product" | "GitHub";
  href: string;
};

export type FeaturedProject = {
  id: string;
  number: string;
  title: string;
  category: string;
  statement: string;
  built: string;
  engineering: string;
  stack: string[];
  links: ProjectLink[];
  visual:
    | { type: "image"; src: string; alt: string; width: number; height: number }
    | { type: "clientops" | "outside-edge" | "birdtag"; alt: string };
  note?: string;
};

export type MoreProject = {
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  image?: { src: string; alt: string; width: number; height: number };
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "trackline",
    number: "01",
    title: "Trackline",
    category: "Deployed product",
    statement:
      "A private workspace for keeping job applications, follow-ups, pipeline status, and current-state analytics in one place.",
    built:
      "I built the authenticated React product around one shared application model used across overview, list, pipeline, and analytics views.",
    engineering:
      "Supabase PostgREST handles CRUD while owner-only Row Level Security is the authorization boundary. Versioned migrations tighten ownership policies, and date-only workflows avoid timezone drift.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "FastAPI"],
    links: [
      { label: "Live product", href: "https://job-tracker-eosin-one.vercel.app/" },
      { label: "GitHub", href: "https://github.com/PaarthSh4rma/trackline" },
    ],
    visual: {
      type: "image",
      src: "/assets/projects/trackline.webp",
      alt: "Trackline sign-in screen showing its private job-search workspace positioning",
      width: 1440,
      height: 900,
    },
  },
  {
    id: "clientops",
    number: "02",
    title: "ClientOps Copilot",
    category: "Applied AI system",
    statement:
      "A document copilot that helps client-facing teams ask source-grounded questions across briefs, contracts, and operating material.",
    built:
      "I built the upload, indexing, document lifecycle, retrieval, and bounded chat flow for TXT, PDF, and DOCX sources.",
    engineering:
      "SQLite owns text and metadata while Pinecone owns vectors. Queries are document-scoped, low-confidence retrieval stops before the LLM call, and partial ingestion uses compensating cleanup.",
    stack: ["FastAPI", "React", "SQLAlchemy", "Pinecone", "SentenceTransformers"],
    links: [
      { label: "GitHub", href: "https://github.com/PaarthSh4rma/clientops-copilot" },
    ],
    visual: {
      type: "clientops",
      alt: "ClientOps Copilot flow from uploaded documents through scoped retrieval to a cited answer",
    },
    note: "Local portfolio prototype — intentionally not exposed as a public multi-tenant service.",
  },
  {
    id: "outside-edge",
    number: "03",
    title: "Outside Edge",
    category: "Backend workflows",
    statement:
      "A cricket intelligence application that turns fragmented RSS coverage into a persisted news library and daily briefing workflow.",
    built:
      "I built the React interface, FastAPI modular monolith, PostgreSQL model, operational jobs, and subscriber lifecycle.",
    engineering:
      "Route, service, and repository boundaries keep ingestion and publishing reusable. URL normalization prevents duplicate articles; dry-runs and delivery records guard newsletter sends.",
    stack: ["FastAPI", "React", "PostgreSQL", "Alembic", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/PaarthSh4rma/outside-edge" },
    ],
    visual: {
      type: "outside-edge",
      alt: "Outside Edge pipeline from RSS feeds through application services and PostgreSQL to the Daily Yorker",
    },
    note: "Deployment-ready and tested locally; no public product deployment is claimed.",
  },
  {
    id: "birdtag",
    number: "04",
    title: "BirdTag",
    category: "AWS integration · group project",
    statement:
      "A Monash cloud project that connected uploaded bird media to a distributed image and audio classification workflow.",
    built:
      "My contribution focused on the serverless media backend: Lambda functions, REST endpoints, presigned uploads, IAM permissions, S3 organization, and cross-service debugging.",
    engineering:
      "API Gateway and Lambda issued constrained S3 upload URLs and coordinated media hand-offs. I integrated that boundary with teammates’ model, thumbnail, and query components.",
    stack: ["AWS Lambda", "API Gateway", "S3", "IAM", "REST APIs"],
    links: [],
    visual: {
      type: "birdtag",
      alt: "BirdTag architecture highlighting Paarth's API Gateway, Lambda, S3, and IAM contribution boundary",
    },
    note: "Private team repository. ML models and several downstream components were owned by teammates.",
  },
];

export const moreProjects: MoreProject[] = [
  {
    title: "RaceBrain",
    description:
      "Educational F1 strategy simulator with seeded Monte Carlo comparisons, lap-bounded OpenF1 replay, and deterministic or optional LLM explanations.",
    stack: ["React", "FastAPI", "Python", "OpenF1"],
    links: [
      { label: "Live product", href: "https://racebrain-mauve.vercel.app/" },
      { label: "GitHub", href: "https://github.com/PaarthSh4rma/racebrain" },
    ],
    image: {
      src: "/assets/projects/racebrain.webp",
      alt: "RaceBrain Formula One strategy simulation interface",
      width: 1440,
      height: 900,
    },
  },
  {
    title: "GhostCheck",
    description:
      "Privacy-first Instagram export auditor that compares follower data entirely in the browser and supports search, copy, and CSV export.",
    stack: ["React", "TypeScript", "Client-side processing"],
    links: [
      { label: "Live product", href: "https://ghostcheck-lilac.vercel.app/" },
      { label: "GitHub", href: "https://github.com/PaarthSh4rma/ghostcheck" },
    ],
  },
  {
    title: "Quant Dev Backtester",
    description:
      "Modular Python research pipeline for SMA strategies, cross-asset parameter sweeps, and risk-adjusted metrics—with in-sample limitations stated explicitly.",
    stack: ["Python", "Pandas", "NumPy", "yFinance"],
    links: [
      { label: "GitHub", href: "https://github.com/PaarthSh4rma/quant-dev-backtester" },
    ],
  },
];
