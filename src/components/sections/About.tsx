import Section from "../layout/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            I like building software that earns trust.
          </h2>
        </div>

        <div className="rounded-3xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)]">
          <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            I’m a software engineering graduate who enjoys building systems that
            are both technically solid and genuinely useful. My work sits across
            full-stack development, backend services, cloud infrastructure, and
            data-driven applications, and I’m especially motivated by projects
            that turn messy real-world problems into clear, reliable software.
          </p>
        </div>
      </div>
    </Section>
  );
}