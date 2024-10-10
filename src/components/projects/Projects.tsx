"use client";
import React, { useRef, useEffect, useState } from "react";
import ProjectBox from "../project_box/project_box";
import { projects } from "../../constatnts/projects";
import { MoveLeft, MoveRight } from "lucide-react";

export const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref for scrolling
  const animationRef = useRef<HTMLDivElement>(null); // Separate ref for animation trigger
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll the container to the right
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Function to scroll the container to the left
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

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
      className={`py-section_padding w-full relative  flex flex-col justify-center items-center gap-[40px] projects-slide-in ${
        isVisible ? "projects-visible" : ""
      }`}
      ref={animationRef} // Use animationRef for triggering the animation
      id="projects"
    >
      <h1 className="sections-header">Projects</h1>
      <div className="container mb-9"></div>

      <div
        className="flex flex-row gap-x-6 overflow-x-auto overflow-y-hidden snap-mandatory relative py-[20px] container no-scrollbar"
        ref={scrollContainerRef} // Use scrollContainerRef for horizontal scrolling
      >
        {projects.map((project, index) => {
          return <ProjectBox key={index} {...project} />;
        })}
      </div>

      {/* Scroll Right Button */}
      <div
        className="flex items-center justify-center absolute bg-second top-1/2 right-0 mr-[20px] cursor-pointer p-[10px] rounded-full "
        onClick={handleScrollRight}
      >
        <MoveRight className="arrows-bounce" />
      </div>

      {/* Scroll Left Button */}
      <div
        className="flex items-center justify-center absolute bg-second top-1/2 left-0 ml-[20px] cursor-pointer p-[10px] rounded-full"
        onClick={handleScrollLeft}
      >
        <MoveLeft className="arrows-bounce" />
      </div>
    </div>
  );
};

export default Projects;
