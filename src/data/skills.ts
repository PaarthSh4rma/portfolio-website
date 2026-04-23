export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "SQL", "Java", "C/C++"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Node.js", "REST APIs", "SQLAlchemy"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "Vite"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Vercel", "Render"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    category: "Data & ML",
    items: ["XGBoost", "scikit-learn", "Pandas", "NumPy", "SHAP", "Feature Engineering"],
  },
];