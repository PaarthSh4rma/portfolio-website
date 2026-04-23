import Section from "../layout/Section";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Built in real environments.
          </h2>
          <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            Production-facing work, teaching experience, and technical collaboration across data and software systems.
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.company}
              className="rounded-3xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)]"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {item.company}
                  </p>
                </div>

                <p className="text-sm text-[var(--text-muted)]">
                  {item.period}
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm leading-7 text-[var(--text-secondary)] md:text-base"
                  >
                    <span className="mr-3 text-[var(--accent)]">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}