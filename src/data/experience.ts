export type ExperienceItem = {
  company: string;
  role: string;
  context?: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Origin Energy",
    role: "Customer Insights Intern",
    period: "Jul 2024 — Dec 2024",
    summary:
      "Worked across customer data, modelling, explainability, and stakeholder decision-making in an operational energy context.",
    highlights: [
      "Built Python and SQL workflows processing 10k–50k+ customer records for forecasting, reporting, and analytics.",
      "Developed and evaluated an XGBoost credit-risk model on 100k+ records, reaching approximately 80% precision on high-risk predictions.",
      "Used stakeholder-informed features and SHAP to explain risk drivers, then reduced workflow runtime by approximately 30% with multiprocessing.",
    ],
  },
  {
    company: "Monash University",
    role: "Teaching Associate",
    context: "Engineering Smart Systems",
    period: "Jul 2023 — Present",
    summary:
      "Help engineering students connect software, electronics, and systems thinking through practical labs and debugging.",
    highlights: [
      "Delivered 700+ hours of Python, Arduino, and embedded-systems teaching for 100+ students.",
      "Diagnosed code, circuit, and integration failures while teaching a repeatable debugging process.",
      "Explained technical trade-offs to students with different levels of programming and hardware experience.",
    ],
  },
];
