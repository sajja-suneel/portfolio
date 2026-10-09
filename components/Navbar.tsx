"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { playChime } from "@/lib/sound";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Achievements" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll spy for active section
      const sections = ["about", "skills", "work", "experience", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    playChime("click");
    setMobileMenuOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EAE4D8]/80 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-hidden"
          aria-label="Suneel Sajja - Home"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EA580C] to-[#D97706] text-white flex items-center justify-center font-bold text-xs tracking-wider group-hover:scale-105 transition-transform shadow-xs">
            SS
          </div>
          <span className="font-semibold text-sm tracking-tight text-[#18181B] group-hover:text-[#EA580C] transition-colors">
            Suneel Sajja
          </span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-[#EAE4D8] shadow-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white shadow-xs"
                    : "text-[#71717A] hover:text-[#18181B] hover:bg-[#F4F0E6]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Let's Talk CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white hover:from-[#F97316] hover:to-[#EA580C] transition-all text-xs font-medium cursor-pointer shadow-xs"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white border border-[#E2DAC9] text-[#18181B] hover:bg-[#F4F0E6] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5]/98 backdrop-blur-xl border-b border-[#EAE4D8] px-6 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white"
                  : "text-[#71717A] hover:bg-[#F4F0E6] hover:text-[#18181B]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex gap-2">
            <button
              onClick={() => scrollTo("contact")}
              className="flex-1 py-2.5 bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white rounded-xl text-center text-sm font-medium"
            >
              Contact Me
            </button>
            <a
              href="/Suneel_Sajja_Resume.pdf"
              download
              className="flex-1 py-2.5 bg-white text-[#18181B] border border-[#E2DAC9] rounded-xl text-center text-sm font-medium"
            >
              Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
