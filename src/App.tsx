import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}

export default App;