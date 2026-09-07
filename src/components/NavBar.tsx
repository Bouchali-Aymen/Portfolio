"use client";

import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

/**
 * Fixed top navigation with brand mark, section links, theme toggle, and socials.
 */
export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 z-50 h-16 w-full bg-theme-bg-primary/70 backdrop-blur-md" />
    );
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-theme-border bg-theme-bg-primary/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          href="#landing"
          className="font-display text-xl font-bold tracking-tight text-theme-text-primary"
        >
          Aymen<span className="text-theme-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-theme-text-secondary transition-colors hover:text-theme-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="rounded-md border border-theme-border p-2 text-theme-text-primary transition-colors hover:border-theme-accent hover:text-theme-accent"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Link
            href="https://github.com/Bouchali-Aymen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-text-secondary transition-colors hover:text-theme-accent"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aymen-bouchali-890b85263/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-text-secondary transition-colors hover:text-theme-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
        </div>

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="text-theme-text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {toggleMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {toggleMenu && (
        <div className="border-t border-theme-border bg-theme-bg-primary/95 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-theme-text-primary transition-colors hover:text-theme-accent"
                onClick={() => setToggleMenu(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setToggleMenu(false);
              }}
              className="flex items-center gap-2 text-theme-text-primary"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              <span>{theme === "light" ? "Dark" : "Light"} mode</span>
            </button>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://github.com/Bouchali-Aymen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/aymen-bouchali-890b85263/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
