// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Starfield from "./components/Starfield";
import CustomCursor from "./components/CustomCursor";


function App() {
  return (
    <div className="relative bg-hyperspace text-white">
      <CustomCursor />
      <Starfield />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;