export type CapabilityGroup = {
  title: string;
  items: string[];
  evidence: string;
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript / JavaScript", "SQL", "Java", "C / C++"],
    evidence: "Used across data pipelines, APIs, product interfaces, and embedded teaching.",
  },
  {
    title: "Product & backend",
    items: ["React", "Next.js", "FastAPI", "REST APIs", "SQLAlchemy", "Pydantic"],
    evidence: "Evidenced by Trackline, ClientOps Copilot, Outside Edge, and RaceBrain.",
  },
  {
    title: "AI & data",
    items: ["Pandas", "NumPy", "scikit-learn", "XGBoost", "SHAP", "RAG", "SentenceTransformers", "Pinecone"],
    evidence: "Applied to credit-risk modelling and source-grounded retrieval systems.",
  },
  {
    title: "Cloud & systems",
    items: ["AWS", "Docker", "PostgreSQL", "Supabase", "Alembic", "GitHub Actions", "Git", "Linux"],
    evidence: "Used for deployment, storage boundaries, migrations, CI, and serverless integration.",
  },
];
