export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Origin Energy",
    role: "Customer Insights Intern",
    period: "Jul 2024 — Dec 2024",
    bullets: [
      "Built and maintained Python and SQL pipelines processing 10k–50k+ customer records for forecasting and analytics workflows.",
      "Developed and deployed an XGBoost-based credit risk model on 100k+ records, achieving about 80% precision on high-risk predictions.",
      "Used SHAP analysis, feature engineering, and multiprocessing to improve model performance and reduce execution time by roughly 30%.",
    ],
  },
  {
    company: "Monash University",
    role: "Teaching Associate",
    period: "Jul 2023 — Present",
    bullets: [
      "Led Python programming and embedded systems labs for 100+ students.",
      "Taught debugging, systems thinking, and development fundamentals across 700+ hours of instruction.",
      "Mentored students on code quality, problem-solving, and technical communication.",
    ],
  },
];