"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { skillGroups, technologies } from "@/constants/technologies";

/**
 * Skills section: categorized skill lists plus a compact icon strip of core tools.
 */
export const Techno = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = animationRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={animationRef}
      className="py-section_padding"
    >
      {/* Keep legacy anchor for older links */}
      <div id="technologies" className="sr-only" aria-hidden />

      <div className="container mx-auto">
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="section-eyebrow">Toolbox</p>
          <h2 className="section-title">Skills & technologies</h2>
          <p className="section-lede">
            A cross-disciplinary toolkit spanning modern web engineering,
            applied machine learning, networking, and security practice.
          </p>
        </div>

        <div
          className={`grid gap-6 md:grid-cols-2 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          } transition-all delay-100 duration-700`}
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="surface-panel rounded-xl p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-theme-text-primary">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-theme-border px-3 py-1.5 text-sm text-theme-text-secondary transition-colors hover:border-theme-accent hover:text-theme-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          } transition-all delay-200 duration-700`}
        >
          {technologies.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
                title={item.name}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <span className="text-xs text-theme-text-muted">{item.name}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Techno;
