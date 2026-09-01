"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import GetQuoteButton from "./GetQuoteButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Ports", href: "/ports" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="bg-[#172033] text-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex flex-col md:flex-row md:items-baseline"
          >
            <span className="font-bold text-lg md:text-xl tracking-wider text-white">
              MERCURY
            </span>
            <span className="text-gray-400 font-normal text-[10px] md:text-sm md:ml-2 uppercase tracking-tight md:tracking-wider">
              Shipping &amp; Logistics Services
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? "text-amber-400"
                  : "hover:text-amber-400 text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <GetQuoteButton className="bg-amber-400 text-[#172033] px-5 py-2.5 rounded hover:bg-amber-500 transition-colors font-bold inline-block">
            Get a Quote
          </GetQuoteButton>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#101726] text-white py-4 px-6 fixed top-[72px] left-0 right-0 z-40 shadow-lg border-b border-white/10 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors ${
                isActive(link.href)
                  ? "text-amber-400"
                  : "hover:text-amber-400 text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <GetQuoteButton
            className="bg-amber-400 text-[#172033] px-5 py-2.5 rounded hover:bg-amber-500 transition-colors font-bold text-center inline-block"
            onBeforeOpen={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </GetQuoteButton>
        </div>
      )}
    </>
  );
}
