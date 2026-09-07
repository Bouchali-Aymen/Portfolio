"use client";

import { useEffect, useRef, useState } from "react";
import { projects, pro_projects } from "@/constants/projects";
import ProjectBox from "./project_box";

type Tab = "professional" | "personal";

/**
 * Unified projects section with professional / personal tabs and a responsive grid.
 */
const ProjectsSection = () => {
  const [tab, setTab] = useState<Tab>("professional");
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  const list = tab === "professional" ? pro_projects : projects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.08 }
    );

    const currentRef = animationRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={animationRef}
      className="py-section_padding"
    >
      <div className="container mx-auto">
        <div
          className={`mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          } transition-all duration-700`}
        >
          <div>
            <p className="section-eyebrow">Selected work</p>
            <h2 className="section-title">Projects</h2>
            <p className="section-lede">
              Selected client engagements and personal builds — from EdTech and
              events to commerce and research tooling.
            </p>
          </div>

          <div
            className="inline-flex border border-theme-border p-1"
            role="tablist"
            aria-label="Project type"
          >
            {(
              [
                { id: "professional", label: "Professional" },
                { id: "personal", label: "Personal" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                onClick={() => setTab(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  tab === item.id
                    ? "bg-theme-accent text-white"
                    : "text-theme-text-secondary hover:text-theme-text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div
          id={tab === "professional" ? "pro-projects" : undefined}
          className={`grid gap-6 sm:grid-cols-2 xl:grid-cols-3 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          } transition-all delay-100 duration-700`}
        >
          {list.map((project) => (
            <ProjectBox key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
