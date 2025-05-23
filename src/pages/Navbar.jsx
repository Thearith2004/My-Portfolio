import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900 shadow-md py-4">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-emerald-400">My</span>
          <span className="text-white">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-emerald-400 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 w-full border-t border-slate-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-emerald-400 transition-colors py-2 border-b border-slate-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}


