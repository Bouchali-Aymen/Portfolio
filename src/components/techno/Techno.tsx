"use client";
import Image from "next/image";
import "../../app/globals.css";
import { technologies } from "../../constatnts/technologies";
import React, { useRef, useEffect, useState } from "react";

export const Techno = () => {
  const animationRef = useRef<HTMLDivElement>(null); // Separate ref for animation trigger
  const [isVisible, setIsVisible] = useState(false);
  // Intersection Observer to detect when the Projects section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation when visible
          }
        });
      },
      { threshold: 0.1 } // 10% of the element must be visible to trigger the callback
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);
  return (
    <div
      className={`w-fill py-section_padding flex flex-col items-center gap-[100px] projects-slide-in ${
        isVisible ? "projects-visible" : ""
      }`}
      ref={animationRef}
      id="technologies"
    >
      <h1 className="sections-header">Technologies</h1>
      <div className="w-full container flex gap-y-10">
        <div className="w-full flex justify-center gap-x-10 gap-y-10 flex-wrap">
          {technologies.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.image}
                alt={item.name}
                className="relative hover:-translate-y-2 transition-all cursor-pointer"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Techno;
