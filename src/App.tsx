import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/sections/Landing";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import MoreWork from "./components/sections/MoreWork";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Landing />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <MoreWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
