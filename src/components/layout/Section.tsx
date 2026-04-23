import type { PropsWithChildren } from "react";
import Container from "./Container";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
}>;

export default function Section({
  id,
  className = "",
  containerClassName = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}