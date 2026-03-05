import { Github } from "lucide-react";

const Footer = () => (
  <footer id="github" className="bg-hero py-12 px-4">
    <div className="container mx-auto text-center">
      <p className="font-display text-sm text-hero-muted mb-2">
        UC Davis — EEC 172 Embedded Systems Final Project
      </p>
      <p className="text-xs text-hero-muted/60 mb-6">
        Overhead Flight Detection & Display © {new Date().getFullYear()}
      </p>
      {/* <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors font-display"
      >
        <Github size={16} /> View on GitHub
      </a> */}
    </div>
  </footer>
);

export default Footer;
