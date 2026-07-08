"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide on dashboard and auth routes
  if (pathname === "/auth" || pathname?.startsWith("/student") || pathname?.startsWith("/faculty") || pathname?.startsWith("/admin")) {
    return null;
  }

  const links = [
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Placements", href: "/placements" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-2xl" : ""
      }`}
      style={{
        background: scrolled ? "var(--bg-card)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border-soft)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#0EA5E9] p-0.5 relative">
               <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity" style={{ background: 'var(--bg-base)'}}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--text-primary)' }}></div>
               </div>
            </div>
            <span className="heading-font text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)'}}>
              Aushutosh
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontWeight: isActive ? 600 : 500
                  }}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/auth" className="btn-secondary px-5 py-2.5 text-sm rounded-xl">
              Sign In
            </Link>
            <Link href="/auth" className="btn-primary px-5 py-2.5 text-sm rounded-xl">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full glass-strong" style={{ borderBottom: '1px solid var(--border-soft)' }}>
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium rounded-xl transition-colors"
                  style={{
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'color-mix(in srgb, var(--accent-primary) 10%, transparent)' : 'transparent'
                  }}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="pt-4 flex flex-col gap-3 px-3">
              <Link
                href="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center btn-secondary py-3 rounded-xl"
              >
                Sign In
              </Link>
              <Link
                href="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center btn-primary py-3 rounded-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}