"use client";

import Landing from "../components/landing/Landing";
import "./page.module.css";
import Projects from "../components/projects/Projects";
import Techno from "../components/techno/Techno";
import Contact from "../components/contact/Contact";
import "./globals.css";
import Footer from "../components/Footer";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";
import Exeperience from "../components/experience/Exeperience";

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
    <div className="bg-gradient-to-r from-black via-blue-950 to-black relative">
      <div id="navbar">
        <Landing />
      </div>
      <Projects />
      <Exeperience />
      <Techno />
      <Contact />
      <Footer />
      <div className="fixed bottom-3 w-full flex items-center justify-center">
        <div className="bg-second w-[45px] h-[45px] rounded-full flex items-center justify-center cursor-pointer">
          <div
            onClick={() =>
              handleSmoothScroll(ChangeArrow ? "landing" : "footer")
            }
          >
            {ChangeArrow ? (
              <ChevronsUp className="arrow-down" />
            ) : (
              <ChevronsDown className="arrow-down" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
