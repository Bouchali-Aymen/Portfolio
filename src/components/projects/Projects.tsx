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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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
      className={`pb-section_padding w-full relative  flex flex-col justify-center items-center gap-[40px] projects-slide-in ${
        isVisible ? "projects-visible" : ""
      }`}
      ref={animationRef}
      id="projects"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Some personal and professional projects I have worked on.{" "}
        </p>
      </div>{" "}
      <div className="container mb-9"></div>
      <div
        className="flex flex-row gap-x-6 overflow-x-auto overflow-y-hidden snap-mandatory relative py-[20px] container no-scrollbar"
        ref={scrollContainerRef}
      >
        {projects.map((project, index) => {
          return <ProjectBox key={index} {...project} />;
        })}
      </div>
      <div
        className="flex items-center justify-center absolute bg-second top-1/2 right-0 mr-[20px] cursor-pointer p-[10px] rounded-full "
        onClick={handleScrollRight}
      >
        <MoveRight className="arrows-bounce" />
      </div>
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
