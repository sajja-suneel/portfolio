"use client";

import React from "react";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { playChime } from "@/lib/sound";

export default function Footer() {
  const scrollToTop = () => {
    playChime("click");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F4F0E6] border-t border-[#EAE4D8] py-12 text-[#71717A] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EAE4D8]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EA580C] to-[#D97706] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              SS
            </div>
            <div>
              <div className="font-bold text-[#18181B] text-sm">Suneel Sajja</div>
              <div className="text-[11px] text-[#71717A]">AI/ML &amp; Full-Stack Engineer</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/sajja-suneel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-white border border-[#E2DAC9] flex items-center justify-center text-[#71717A] hover:bg-gradient-to-r hover:from-[#EA580C] hover:to-[#D97706] hover:text-white hover:border-transparent transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/suneel-sajja-071b08316/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white border border-[#E2DAC9] flex items-center justify-center text-[#71717A] hover:bg-gradient-to-r hover:from-[#EA580C] hover:to-[#D97706] hover:text-white hover:border-transparent transition-all shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:suneel.sajja1209@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-white border border-[#E2DAC9] flex items-center justify-center text-[#71717A] hover:bg-gradient-to-r hover:from-[#EA580C] hover:to-[#D97706] hover:text-white hover:border-transparent transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2DAC9] text-[#18181B] hover:bg-[#FBF9F5] hover:border-[#EA580C] hover:text-[#EA580C] transition-all cursor-pointer font-medium shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#A1A1AA]">
          <p>© 2026 Suneel Sajja. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with Next.js, React, TypeScript, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
