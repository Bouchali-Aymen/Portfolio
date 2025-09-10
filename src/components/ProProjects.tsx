"use client";
import { useRef, useEffect, useState } from "react";
import { pro_projects } from "@/constants/projects";
import ProjectBox from "./project_box";
import { MoveRight, MoveLeft } from "lucide-react";

const ProProjects = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

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

    const currentRef = animationRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
   return (
    <div
      className={`pb-section_padding w-full relative  flex flex-col justify-center items-center gap-[40px] projects-slide-in ${
        isVisible ? "projects-visible" : ""
      }`}
      ref={animationRef}
      id="pro-projects"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
          Professional Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        <p className="text-theme-text-muted mt-6 text-lg max-w-2xl mx-auto">
          Some professional projects I have worked on.{" "}
        </p>
      </div>{" "}
      <div className="container mb-9"></div>
      <div
        className="flex flex-row gap-x-6 overflow-x-auto overflow-y-hidden snap-mandatory relative py-[20px] container no-scrollbar"
        ref={scrollContainerRef}
      >
        {pro_projects.map((project, index) => {
          return <ProjectBox key={index} {...project} />;
        })}
      </div>
      <div
        className="flex items-center justify-center absolute bg-theme-card-bg border border-theme-card-border top-1/2 right-0 mr-[20px] cursor-pointer p-[10px] rounded-full hover:border-theme-accent transition-colors"
        onClick={handleScrollRight}
      >
        <MoveRight className="arrows-bounce text-theme-text-primary" />
      </div>
      <div
        className="flex items-center justify-center absolute bg-theme-card-bg border border-theme-card-border top-1/2 left-0 ml-[20px] cursor-pointer p-[10px] rounded-full hover:border-theme-accent transition-colors"
        onClick={handleScrollLeft}
      >
        <MoveLeft className="arrows-bounce text-theme-text-primary" />
      </div>
    </div>
  );
}
export default ProProjects;


