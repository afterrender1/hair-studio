"use client";
import { useState, useEffect } from "react";
import { Menu, X, Search, Phone } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  // 👇 Detect scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 600; 
      setShowNav(window.scrollY < heroHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Reviews", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 
      ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 md:gap-6">
          
          {/* Brand */}
          <a
            href="#home"
            className="text-2xl font-serif font-bold tracking-wide flex items-center gap-1 whitespace-nowrap"
          >
            <span className="bg-sky-400 bg-clip-text text-transparent">Deigo</span>
            <span className="text-white">Hair Studio</span>
          </a>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 w-36 sm:w-48 lg:w-64">
            <Search className="w-4 h-4 text-white/80" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white placeholder-white/60 px-2 w-full"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center flex-1 justify-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-sky-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Contact Info + Button */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 whitespace-nowrap">
            <p className="font-semibold text-white flex items-center gap-2 text-sm lg:text-base">
              <Phone className="text-sky-400 w-4 h-4 lg:w-5 lg:h-5" />
              +1 (555) 123-4567
            </p>
            <a
              href="#contact"
              className="px-4 lg:px-5 py-2 rounded-full bg-sky-400 text-white text-sm lg:text-base font-semibold shadow-sm hover:shadow-lg transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-black/70 backdrop-blur-md border-t border-white/20 pb-6 animate-fadeIn">
            {/* Mobile Search */}
            <div className="flex items-center bg-white/20 border border-white/30 rounded-full px-3 py-2 mx-4 mt-3">
              <Search className="w-4 h-4 text-white/80" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-white placeholder-white/60 px-2 w-full"
              />
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col space-y-4 pt-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-sky-400 text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* Contact Info */}
              <p className="text-white font-semibold text-center mt-2 text-sm">
                📞 +1 (555) 123-4567
              </p>

              {/* Mobile Button */}
              <a
                href="#contact"
                className="w-full text-center px-5 py-2 rounded-full bg-sky-400 text-white text-base font-semibold shadow-sm hover:shadow-lg transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
