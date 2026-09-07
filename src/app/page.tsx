"use client";

import Landing from "@/components/Landing";
import Techno from "@/components/Techno";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Projects from "@/components/PersonalProjects";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Portfolio home: hero → experience → projects → skills → contact.
 */
export default function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page-atmosphere relative">
      <Landing />
      <Experience />
      <Projects />
      <Techno />
      <Contact />
      <Footer />

      {showTop && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center border border-theme-border bg-theme-card-bg text-theme-text-primary shadow-lg backdrop-blur-md transition-colors hover:border-theme-accent hover:text-theme-accent"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
