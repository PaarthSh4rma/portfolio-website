import Section from "../layout/Section";
import { profile } from "../../data/profile";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="rounded-3xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-6 md:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)]">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 text-left lg:text-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Let’s build something useful.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              I’m currently looking for software engineering opportunities across
              backend, full-stack, cloud, and data-driven teams.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-full border border-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent)] transition-all hover:bg-[rgba(16,7,250,0.08)] duration-200"
            >
              Email Me
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-primary)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-primary)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-primary)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}