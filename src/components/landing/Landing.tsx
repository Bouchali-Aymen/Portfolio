"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Download } from "lucide-react"

export const Landing = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-section_padding" id="landing">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hello, I&#39;m <span className="text-blue-600">Aymen</span>
              </h1>

              <h2 className="text-2xl lg:text-3xl font-medium text-white">Full Stack Developer</h2>

              <p className="text-lg text-white leading-relaxed">
                I&#39;m Aymen Bouchali, a 21-year-old full-stack developer passionate about building innovative solutions.
                I&#39;m actively seeking new opportunities to enhance my skills and collaborate on exciting projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume/Resume.pdf"
                download="resume.pdf"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </a>

              <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-white font-medium rounded-lg hover:border-gray-400  transition-colors">
                View Projects
              </a>
            </div>
          </div>

          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/me.jpg"
                  alt="Aymen Bouchali"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing