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
      "Built and maintained Python and SQL pipelines processing 10k–50k+ customer records for forecasting, reporting, and analytics.",
      "Developed and evaluated an XGBoost credit-risk model on 100k+ records, achieving approximately 80% precision on high-risk predictions.",
      "Used stakeholder-informed feature engineering and SHAP analysis to explain risk drivers, then reduced workflow runtime by approximately 30% with multiprocessing.",
    ],
  },
  {
    company: "Monash University",
    role: "Engineering Lab Tutor",
    period: "Jul 2023 — Present",
    bullets: [
      "Delivered Python programming, Arduino, and embedded systems labs for 100+ engineering students.",
      "Taught debugging, software fundamentals, and systems thinking across 700+ hours of lab delivery.",
      "Mentored students through software, hardware, and integration issues using structured debugging workflows.",
    ],
  },
];
