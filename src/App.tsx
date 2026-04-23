import Section from "./components/layout/Section";

function App() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Section>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Portfolio v2
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Paarth Sharma
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            Software engineer building reliable full-stack, backend, and cloud-powered
            products.
          </p>
        </div>
      </Section>
    </main>
  );
}

export default App;