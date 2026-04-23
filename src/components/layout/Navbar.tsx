export default function Navbar() {
  const links = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-primary)] bg-[rgba(10,10,15,0.75)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
        <a
          href="#top"
          className="text-sm font-medium tracking-[0.08em] text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
        >
          PAARTH SHARMA
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/Paarth_Sharma_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent)] transition-all hover:bg-[rgba(16,7,250,0.08)]"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}