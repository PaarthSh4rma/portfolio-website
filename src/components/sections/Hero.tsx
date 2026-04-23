import Section from "../layout/Section";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <Section className="pt-16 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Software Engineer
          </p>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl lg:leading-[0.98]">
              {profile.headline}
            </h1>

            <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-primary)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View Projects
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent)] transition-all hover:bg-[rgba(16,7,250,0.08)]"
            >
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--text-secondary)]">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-6 md:p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Snapshot
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                {profile.name}
              </h2>
            </div>

            <div className="space-y-4">
              {profile.proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[var(--border-primary)] bg-[rgba(255,255,255,0.02)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}