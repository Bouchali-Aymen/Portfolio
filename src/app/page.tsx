"use client";

import Landing from "@/components/landing/Landing";

import Techno from "@/components/techno/Techno";
import Contact from "@/components/contact/Contact";

import Footer from "@/components/Footer";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/personal_projects/PersonalProjects";
import ProProjects from "@/components/pro_projects/ProProjects";

export default function Home() {
  const [ChangeArrow, setChangeArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setChangeArrow(true);
      } else {
        setChangeArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-theme-bg-primary relative">
      <div id="navbar">
        <Landing />
      </div>
      <Projects />
      <ProProjects />
      <Experience />
      <Techno />
      <Contact />
      <Footer />
      <div className="fixed bottom-3 w-full flex items-center justify-center">
        <div className="bg-theme-card-bg border border-theme-card-border w-[45px] h-[45px] rounded-full flex items-center justify-center cursor-pointer hover:border-theme-accent transition-colors">
          <div
            onClick={() =>
              handleSmoothScroll(ChangeArrow ? "landing" : "footer")
            }
          >
            {ChangeArrow ? (
              <ChevronsUp className="arrow-down text-theme-text-primary" />
            ) : (
              <ChevronsDown className="arrow-down text-theme-text-primary" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
