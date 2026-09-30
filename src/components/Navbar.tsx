import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (label: string) => {
    setActive(label);
    setMenuOpen(false); // mobile e link click korle menu bondho
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">
        {/* Hamburger – shudhu mobile e */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-slate-500 lg:hidden"
          aria-label="Toggle menu"
        >
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M1 1h18M1 8h18M1 15h18" />
          </svg>
        </button>

        <Logo />

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => handleClick(link.label)}
                className={`text-sm transition-colors ${
                  active === link.label
                    ? "font-semibold text-pink-600"
                    : "font-medium text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth buttons */}
        <div className="flex items-center gap-3 lg:gap-5">
          <button className="text-xs font-medium text-slate-700 hover:text-slate-900 lg:text-sm">
            Sign In
          </button>
          <button className="rounded-full bg-[#d91b7e] px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-pink-200 transition hover:bg-pink-700 lg:px-5 lg:py-2.5 lg:text-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => handleClick(link.label)}
                className={`block rounded-lg px-3 py-2 text-sm ${
                  active === link.label
                    ? "bg-pink-50 font-semibold text-pink-600"
                    : "font-medium text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}