import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-primary)] bg-[rgba(10,10,15,0.75)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 md:px-8 lg:px-10">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center text-sm font-medium tracking-[0.08em] text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
          onClick={handleLinkClick}
        >
          PAARTH SHARMA
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex min-h-11 items-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/Paarth_Sharma_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[rgba(16,7,250,0.08)]"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border-primary)] px-4 py-2 text-sm text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-[var(--border-primary)] md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-2xl border border-transparent px-4 py-3 text-sm text-[var(--text-secondary)] transition-all hover:border-[var(--border-primary)] hover:bg-[rgba(255,255,255,0.02)] hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/Paarth_Sharma_resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={handleLinkClick}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-[var(--accent)] px-4 py-3 text-sm font-medium text-[var(--accent)] transition-all hover:bg-[rgba(16,7,250,0.08)]"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
