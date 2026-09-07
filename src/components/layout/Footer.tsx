import Container from "./Container";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React and TypeScript. Deployed on Cloudflare Pages.</p>
        <a href="#top">Back to top ↑</a>
      </Container>
    </footer>
  );
}
