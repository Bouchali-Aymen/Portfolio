"use client";
import Image from "next/image";
import "../../app/globals.css";
import { technologies } from "../../constatnts/technologies";
import React, { useRef, useEffect, useState } from "react";
import TechnoCard from "../technologiesCards/TechnoCard";

export const Techno = () => {
  const animationRef = useRef<HTMLDivElement>(null); 
  const [isVisible, setIsVisible] = useState(false);
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
      className={`w-fill py-section_padding flex flex-col items-center gap-[100px] projects-slide-in ${
        isVisible ? "projects-visible" : ""
      }`}
      ref={animationRef}
      id="technologies"
    >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Technologies i work with
          </p>
        </div>
      <h1 className="sections-header"></h1>
      <div className="w-full container flex gap-y-10">
        <div className="w-full flex justify-center gap-x-10 gap-y-10 flex-wrap">
          {technologies.map((item, index) => {
            return (
              <TechnoCard key={index} category={item.category} image={item.image} name={item.name}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Techno;
