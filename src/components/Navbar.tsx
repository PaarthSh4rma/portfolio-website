// src/components/Navbar.tsx
import { useState } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  {name: "Experience", to: "experience"},
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-saberTeal font-display text-2xl md:text-3xl font-bold drop-shadow-glow"
        >
          PAARTH
        </a>

        {/* Desktop Nav */}
<ul className="hidden md:flex space-x-8 font-display text-starWhite text-sm">
  {navLinks.map((link) => (
    <li key={link.name}>
      <Link
        to={link.to}
        smooth={true}
        duration={600}
        offset={-60}
        spy={true}
        activeClass="text-saberTeal drop-shadow-glow"
        className="cursor-pointer hover:text-saberTeal transition duration-200"
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-saberTeal"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden px-6 pb-4 flex flex-col space-y-2 font-display text-starWhite bg-black/80">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block hover:text-saberTeal transition duration-200"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
