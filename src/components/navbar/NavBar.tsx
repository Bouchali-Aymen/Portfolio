"use client"
import { useState } from "react"
import { Menu, X, Github, Linkedin, Facebook } from "lucide-react"
import Link from "next/link"

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm  z-50">
      <div className="max-w-6xl mx-auto px-6 pt-4">
        <div className="flex justify-between items-center h-16">
          <Link href="#landing" className="text-xl font-bold text-white">
            Aymen
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#projects" className="text-white hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#technologies" className="text-white hover:text-white transition-colors">
              Technologies
            </Link>
            <Link href="#contact" className="text-white hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://github.com/Bouchali-Aymen"
              target="_blank"
              className="text-white hover:text-white transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aymen-bouchali-890b85263/"
              target="_blank"
              className="text-white hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100008749845516"
              target="_blank"
              className="text-white hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </Link>
          </div>

          <button onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden text-white hover:text-white">
            {toggleMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {toggleMenu && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="#projects"
                className="text-white hover:text-white transition-colors"
                onClick={() => setToggleMenu(false)}
              >
                Projects
              </Link>
              <Link
                href="#technologies"
                className="text-white hover:text-white transition-colors"
                onClick={() => setToggleMenu(false)}
              >
                Technologies
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-white transition-colors"
                onClick={() => setToggleMenu(false)}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-4">
                <Link
                  href="https://github.com/Bouchali-Aymen"
                  target="_blank"
                  className="text-white hover:text-white transition-colors"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aymen-bouchali-890b85263/"
                  target="_blank"
                  className="text-white hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100008749845516"
                  target="_blank"
                  className="text-white hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
