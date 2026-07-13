export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C/C++"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "REST APIs", "SQLAlchemy", "Pydantic", "Alembic"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Vercel", "Render"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQLite", "Supabase", "Pinecone"],
  },
  {
    category: "Data & Applied AI",
    items: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "SentenceTransformers",
    ],
  },
];
