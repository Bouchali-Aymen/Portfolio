import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-theme-border py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-display text-lg font-semibold text-theme-text-primary">
            Aymen Bouchali
          </p>
          <p className="mt-1 text-sm text-theme-text-muted">
            &copy; {year} — Full Stack Developer
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Bouchali-Aymen"
            rel="noopener noreferrer"
            target="_blank"
            className="text-theme-text-muted transition-colors hover:text-theme-accent"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aymen-bouchali-890b85263/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-theme-text-muted transition-colors hover:text-theme-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
