"use client"
import { useRef, useEffect, useState } from "react"
import ExperCard from "./ExperCard"
import { experiences } from "../../constatnts/experiences"


const Experience = () => {
  const animationRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (animationRef.current) {
      observer.observe(animationRef.current)
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current)
      }
    }
  }, [])

  return (
    <section
      className={`py-section_padding transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      ref={animationRef}
      id="experience"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-theme-text-muted mt-6 text-lg max-w-2xl mx-auto">
            My professional journey and key milestones in software development
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <ExperCard
                key={idx}
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
      </div>
    </section>
  )
}

export default Experience
