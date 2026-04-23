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
    title: "JobTracker",
    summary:
      "A full-stack job application tracking platform built for structured, secure, multi-user workflow management.",
    bullets: [
      "Built a SaaS-style web app with authentication, per-user data isolation, and real-time CRUD workflows.",
      "Developed a React + Tailwind frontend and FastAPI backend with PostgreSQL and SQLAlchemy.",
      "Added CI pipelines with GitHub Actions and deployed the frontend and backend across Vercel and Render.",
    ],
    stack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "GitHub Actions",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/PaarthSh4rma/job-tracker",
    live: "https://job-tracker-eosin-one.vercel.app/",
  },
  {
    title: "Collectability Risk Model",
    summary:
      "A production-deployed machine learning system for identifying high-risk customers at scale.",
    bullets: [
      "Trained and evaluated an XGBoost classification model on 100k+ customer records to predict 90-day debt risk.",
      "Engineered domain-specific features with stakeholder input and used SHAP analysis to explain model behaviour.",
      "Improved credit collections prioritisation by helping teams identify high-risk customers more proactively.",
    ],
    stack: ["Python", "SQL", "XGBoost", "scikit-learn", "SHAP"],
  },
  {
    title: "BirdTag",
    summary:
      "A cloud-native classification platform for identifying bird species from uploaded image and audio data.",
    bullets: [
      "Combined visual and audio recognition workflows using YOLO and BirdNET-based analysis.",
      "Designed an AWS architecture using Lambda, ECS, EC2, IAM, and S3 for distributed processing.",
      "Explored how serverless and container-based services can support scalable ML-assisted workflows.",
    ],
    stack: ["AWS", "Lambda", "ECS", "EC2", "S3", "Docker", "YOLO"],
  },
];