"use client"
import { useState } from "react"
import { Menu, X, Github, Linkedin, Facebook, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../hooks/useTheme"

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50 bg-theme-bg-primary/80">
      <div className="max-w-6xl mx-auto px-6 pt-4">
        <div className="flex justify-between items-center h-16">
          <Link href="#landing" className="text-xl font-bold text-theme-text-primary">
            Aymen
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#projects" className="text-theme-text-primary hover:text-theme-accent transition-colors">
              Projects
            </Link>
            <Link href="#pro-projects" className="text-theme-text-primary hover:text-theme-accent transition-colors">
              Pro Projects
            </Link>
            <Link href="#technologies" className="text-theme-text-primary hover:text-theme-accent transition-colors">
              Technologies
            </Link>
            <Link href="#contact" className="text-theme-text-primary hover:text-theme-accent transition-colors">
              Contact
            </Link>
            <Link href="#experience" className="text-theme-text-primary hover:text-theme-accent transition-colors">
              Experience
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-theme-card-bg border border-theme-card-border text-theme-text-primary hover:text-theme-accent hover:border-theme-accent transition-all duration-200"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Link
              href="https://github.com/Bouchali-Aymen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-text-primary hover:text-theme-accent transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aymen-bouchali-890b85263/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-text-primary hover:text-theme-accent transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100008749845516"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-text-primary hover:text-theme-accent transition-colors"
            >
              <Facebook size={20} />
            </Link>
          </div>

          <button onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden text-theme-text-primary hover:text-theme-accent">
            {toggleMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {toggleMenu && (
          <div className="md:hidden py-4 border-t border-theme-border bg-theme-bg-primary">
            <div className="flex flex-col space-y-4">
              <Link
                href="#projects"
                className="text-theme-text-primary hover:text-theme-accent transition-colors"
                onClick={() => setToggleMenu(false)}
              >
                Projects
              </Link>
              <Link
                href="#pro-projects"
                className="text-theme-text-primary hover:text-theme-accent transition-colors"
                onClick={() => setToggleMenu(false)}
              >
                Pro Projects
              </Link>
              <Link
                href="#technologies"
                className="text-theme-text-primary hover:text-theme-accent transition-colors"
                onClick={() => setToggleMenu(false)}
              >
                Technologies
              </Link>
              <Link
                href="#contact"
                className="text-theme-text-primary hover:text-theme-accent transition-colors"
                onClick={() => setToggleMenu(false)}
              >
                Contact
              </Link>
              
              {/* Theme Toggle Button for Mobile */}
              <button
                onClick={() => {
                  toggleTheme()
                  setToggleMenu(false)
                }}
                className="flex items-center space-x-2 text-theme-text-primary hover:text-theme-accent transition-colors"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                <span>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</span>
              </button>

              <div className="flex items-center space-x-4 pt-4">
                <Link
                  href="https://github.com/Bouchali-Aymen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-text-primary hover:text-theme-accent transition-colors"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aymen-bouchali-890b85263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-text-primary hover:text-theme-accent transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100008749845516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-text-primary hover:text-theme-accent transition-colors"
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


