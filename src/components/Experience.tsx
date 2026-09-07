"use client";

import { useEffect, useRef, useState } from "react";
import ExperCard from "./ExperCard";
import { experiences } from "@/constants/experiences";

/**
 * Professional experience timeline section.
 */
const Experience = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.12 }
    );

    const currentRef = animationRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={animationRef}
      className="py-section_padding"
    >
      <div className="container mx-auto max-w-5xl">
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="section-eyebrow">Career</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-lede">
            Industry roles, academic research, and community leadership across
            product engineering, applied AI, and security.
          </p>
        </div>

        <div className="relative space-y-8 md:space-y-10">
          <div className="absolute bottom-0 left-[188px] top-0 hidden w-px bg-theme-border md:block" />
          {experiences.map((exp, idx) => (
            <ExperCard
              key={exp.position + exp.date}
              position={exp.position}
              location={exp.location}
              description={exp.description}
              date={exp.date}
              index={idx}
              isVisible={isVisible}
              stack={exp.stack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
