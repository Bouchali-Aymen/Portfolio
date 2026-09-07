"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, Download } from "lucide-react";

const PROFILE_LINES = [
  { indent: 0, parts: [{ t: "const ", c: "keyword" }, { t: "profile", c: "var" }, { t: " = {", c: "plain" }] },
  { indent: 1, parts: [{ t: "name", c: "key" }, { t: ": ", c: "plain" }, { t: '"Aymen Bouchali"', c: "string" }, { t: ",", c: "plain" }] },
  { indent: 1, parts: [{ t: "role", c: "key" }, { t: ": ", c: "plain" }, { t: '"Full-Stack Engineer"', c: "string" }, { t: ",", c: "plain" }] },
  { indent: 1, parts: [{ t: "domains", c: "key" }, { t: ": [", c: "plain" }, { t: '"Web"', c: "string" }, { t: ", ", c: "plain" }, { t: '"AI"', c: "string" }, { t: ", ", c: "plain" }, { t: '"Security"', c: "string" }, { t: "],", c: "plain" }] },
  { indent: 1, parts: [{ t: "openToWork", c: "key" }, { t: ": ", c: "plain" }, { t: "true", c: "bool" }] },
  { indent: 0, parts: [{ t: "};", c: "plain" }] },
];

const FLOATING_STACK = ["Next.js", "Firebase", "Computer Vision", "Federated Learning", "Networking", "TypeScript"];

const tokenClass: Record<string, string> = {
  keyword: "text-theme-accent",
  var: "text-sky-400",
  key: "text-amber-400/90",
  string: "text-emerald-400/90",
  bool: "text-theme-accent",
  plain: "text-theme-text-secondary",
};

/**
 * Animated code panel that stands in for a portrait — shows identity as a typed profile object.
 */
function HeroWorkspace({ active }: { active: boolean }) {
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    setLineCount(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setLineCount(i);
      if (i >= PROFILE_LINES.length) window.clearInterval(id);
    }, 280);
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
      {/* Floating stack chips */}
      <div className="pointer-events-none absolute -left-2 top-8 z-10 hidden flex-col gap-2 sm:flex lg:-left-10">
        {FLOATING_STACK.slice(0, 3).map((label, i) => (
          <span
            key={label}
            className={`chip-in border border-theme-border bg-theme-card-bg px-3 py-1.5 text-xs font-medium text-theme-text-secondary shadow-sm backdrop-blur-md ${
              active ? "" : "invisible"
            }`}
            style={{ animationDelay: `${0.9 + i * 0.15}s` }}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute -right-2 bottom-16 z-10 hidden flex-col gap-2 sm:flex lg:-right-8">
        {FLOATING_STACK.slice(3).map((label, i) => (
          <span
            key={label}
            className={`chip-in border border-theme-border bg-theme-card-bg px-3 py-1.5 text-xs font-medium text-theme-text-secondary shadow-sm backdrop-blur-md ${
              active ? "" : "invisible"
            }`}
            style={{ animationDelay: `${1.2 + i * 0.15}s` }}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="animate-float relative overflow-hidden border border-theme-border bg-theme-card-bg shadow-xl backdrop-blur-md">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-theme-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-theme-text-muted">
            developer.ts
          </span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm sm:leading-8">
          <code>
            {PROFILE_LINES.slice(0, lineCount).map((line, idx) => (
              <div key={idx} style={{ paddingLeft: `${line.indent * 1.1}rem` }}>
                {line.parts.map((part, pIdx) => (
                  <span key={pIdx} className={tokenClass[part.c]}>
                    {part.t}
                  </span>
                ))}
                {idx === lineCount - 1 && lineCount < PROFILE_LINES.length && (
                  <span className="caret-blink" aria-hidden />
                )}
              </div>
            ))}
            {lineCount === 0 && <span className="caret-blink" aria-hidden />}
            {lineCount >= PROFILE_LINES.length && (
              <span className="caret-blink" aria-hidden />
            )}
          </code>
        </pre>

        <div className="border-t border-theme-border px-4 py-2.5 font-mono text-[11px] text-theme-text-muted">
          <span className="text-theme-accent">●</span> ready to ship
        </div>
      </div>
    </div>
  );
}

/**
 * Full-viewport hero: brand-forward name, role, CTAs, and workspace visual.
 */
export const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="landing"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="container relative z-10 mx-auto grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div
          className={`space-y-8 transition-all duration-700 ease-out-soft ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="section-eyebrow">Full-Stack Engineer</p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-theme-text-primary sm:text-6xl lg:text-7xl">
            Aymen
            <br />
            <span className="text-theme-accent">Bouchali</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-theme-text-secondary">
            Building scalable web products and applying machine learning across
            vision, reinforcement learning, and federated systems — grounded in
            computer networks and cybersecurity.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="/resume/CV.pdf" download="Aymen-Bouchali-CV.pdf" className="btn-primary">
              <Download size={18} />
              Download CV
            </a>
            <a href="#projects" className="btn-secondary">
              View work
              <ArrowDownRight size={18} />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-theme-border pt-6 text-sm text-theme-text-muted">
            <span>Blida, Algeria</span>
            <span>Open to opportunities</span>
            <span>Remote-friendly</span>
          </div>
        </div>

        <div
          className={`transition-all delay-150 duration-700 ease-out-soft ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <HeroWorkspace active={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Landing;
