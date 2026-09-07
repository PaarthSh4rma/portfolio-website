# Paarth Sharma — Portfolio

[![CI](https://github.com/PaarthSh4rma/portfolio-website/actions/workflows/ci.yml/badge.svg)](https://github.com/PaarthSh4rma/portfolio-website/actions)

Recruiter-focused software engineering portfolio for [paarth-sharma.com](https://paarth-sharma.com). The site presents selected work as compact engineering case studies, backed by verified repository and résumé evidence.

## Stack

- React 19 and TypeScript
- Vite 7
- Tailwind CSS build pipeline with a custom editorial design system
- Vitest and Testing Library
- Cloudflare Pages

## Structure

- `src/data/` — verified profile, project, experience, and capability content
- `src/components/sections/` — page sections and project evidence views
- `public/assets/projects/` — optimized product imagery
- `public/Paarth_Sharma_resume.pdf` — downloadable résumé

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm test
npm run lint
npm run build
```

Cloudflare Pages should use `npm run build` and publish the `dist` directory. Deployments from `main` remain unchanged.
