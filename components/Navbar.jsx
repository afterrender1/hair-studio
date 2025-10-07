"use client";
import { useState, useEffect } from "react";
import { Menu, X, Search, Phone } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  // 👇 Detect when user scrolls past hero section (~600px)
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 600; // adjust if your Hero height changes
      setShowNav(window.scrollY < heroHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-700 
      ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
    >
      <div className="mx-30 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Left - Brand */}
          <a
            href="#home"
            className="text-2xl font-serif font-bold tracking-wide flex items-center gap-1 whitespace-nowrap"
          >
            <span className="bg-sky-400  bg-clip-text text-transparent">
              Luxe
            </span>
            <span className="text-white">Hair Studio</span>
          </a>

          {/* Middle - Search Bar (hidden on small screens) */}
          <div className="hidden md:flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 w-48 lg:w-64">
            <Search className="w-4 h-4 text-white/80" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white placeholder-white/60 px-2 w-full"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-10">
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

          {/* Right - Contact + Button */}
          <div className="hidden md:flex items-center gap-6 whitespace-nowrap">
            <p className="font-semibold text-white flex gap-2">
              <Phone className="text-sky-400" />{" "}
              <span className="text-white">+1 (555) 123-4567</span>
            </p>
            <a
              href="#book"
              className="px-5 py-2 rounded-full bg-sky-400 text-white text-sm font-semibold shadow-sm hover:shadow-lg transition-all"
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
          <div className="md:hidden pb-6 border-t border-white/20 mt-2 bg-black/70 backdrop-blur-md">
            <div className="flex items-center bg-white/20 border border-white/30 rounded-full px-3 py-2 mt-3 mx-2">
              <Search className="w-4 h-4 text-white/80" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-white placeholder-white/60 px-2 w-full"
              />
            </div>

            <div className="flex flex-col space-y-4 pt-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-sky-400 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <p className="text-white font-semibold text-center mt-2">
                📞 +1 (555) 123-4567
              </p>
              <a
                href="#book"
                className="w-full text-center px-5 py-2 rounded-full bg-sky-400 text-white text-sm font-semibold shadow-sm hover:shadow-lg transition-all"
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
