import Section from "../layout/Section";
import { skillGroups } from "../../data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Technical Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Tools I use to build and ship.
          </h2>
          <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            A working set of technologies across backend systems, frontend
            interfaces, cloud infrastructure, and data-driven applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-6 md:p-8"
            >
              <div className="space-y-5">
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border-primary)] px-3 py-2 text-sm text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}