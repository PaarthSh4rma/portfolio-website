import type { PropsWithChildren } from "react";
import Container from "./Container";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  label?: string;
  title?: string;
  intro?: string;
}>;

export default function Section({
  id,
  className = "",
  label,
  title,
  intro,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <Container>
        {(label || title || intro) && (
          <header className="section-heading">
            {label && <p className="eyebrow">{label}</p>}
            <div className="section-heading__copy">
              {title && <h2>{title}</h2>}
              {intro && <p>{intro}</p>}
            </div>
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
