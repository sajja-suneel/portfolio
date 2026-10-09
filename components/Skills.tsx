"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillElements, skillCategories, SkillElement } from "@/data/skills";
import { playChime } from "@/lib/sound";
import { Sparkles, Terminal, CheckCircle2, ArrowRight } from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeElement, setActiveElement] = useState<SkillElement>(skillElements[0]);

  const handleCategorySelect = (catId: string) => {
    playChime("toggle");
    setSelectedCategory(catId);
  };

  const handleTileHover = (element: SkillElement) => {
    playChime("hover");
    setActiveElement(element);
  };

  const isHighlighted = (element: SkillElement) => {
    if (selectedCategory === "all") return true;
    return element.category === selectedCategory;
  };

  return (
    <section id="skills" className="py-24 bg-[#FBF9F5] relative overflow-hidden border-t border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#71717A] uppercase">
                02 — SKILLS
              </span>
              <div className="h-px bg-[#EAE4D8] w-20" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#18181B]">
              Periodic Table of{" "}
              <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#D97706]">
                Engineering.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#71717A] mt-1 max-w-xl">
              24 core elements across six engineering families. Hover a tile to inspect its properties, or filter by family.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-2xl border border-[#EAE4D8] shadow-xs">
            {skillCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white shadow-xs"
                      : "text-[#71717A] hover:text-[#18181B] hover:bg-[#F4F0E6]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Layout: Periodic Grid on Left (8 cols) + Element Inspector on Right (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Periodic Grid */}
          <div className="lg:col-span-8 bg-white p-4 sm:p-6 rounded-3xl border border-[#EAE4D8] shadow-xs">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 sm:gap-3">
              {skillElements.map((item) => {
                const highlighted = isHighlighted(item);
                const isSelected = activeElement.symbol === item.symbol;

                return (
                  <motion.div
                    key={item.symbol}
                    onMouseEnter={() => handleTileHover(item)}
                    onClick={() => handleTileHover(item)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-3 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between aspect-square select-none ${
                      isSelected
                        ? "bg-gradient-to-br from-[#EA580C] to-[#D97706] text-white border-[#F97316] shadow-lg shadow-orange-500/25 -translate-y-1 z-10"
                        : highlighted
                        ? "bg-[#FBF9F5] text-[#18181B] border-[#EAE4D8] shadow-2xs hover:border-[#EA580C] hover:bg-white"
                        : "bg-[#F5F2EB]/50 text-[#A1A1AA] border-[#EAE4D8]/60 opacity-40 hover:opacity-80"
                    }`}
                  >
                    {/* Element atomic number */}
                    <div className="flex items-center justify-between text-[10px] font-mono font-medium opacity-70">
                      <span>{String(item.number).padStart(2, "0")}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        item.category === "ai-ml"
                          ? "bg-[#EA580C] shadow-xs shadow-orange-400"
                          : item.category === "backend"
                          ? "bg-[#0284C7]"
                          : item.category === "databases"
                          ? "bg-[#9333EA]"
                          : item.category === "frontend"
                          ? "bg-[#E11D48]"
                          : item.category === "languages"
                          ? "bg-[#D97706]"
                          : "bg-[#71717A]"
                      }`} />
                    </div>

                    {/* Chemical Symbol */}
                    <div className="text-center my-auto">
                      <span className="text-xl sm:text-2xl font-black tracking-tight font-sans block">
                        {item.symbol}
                      </span>
                    </div>

                    {/* Element Name */}
                    <div className="text-[10px] text-center font-medium truncate opacity-85">
                      {item.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Legend */}
            <div className="mt-5 pt-4 border-t border-[#EAE4D8] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#71717A]">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#EA580C] shadow-xs shadow-orange-400" /> AI &amp; ML
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0284C7]" /> Backend
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#9333EA]" /> Databases
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48]" /> Frontend
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D97706]" /> Languages
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#71717A]">
                Showing {skillElements.filter(isHighlighted).length} of {skillElements.length} elements
              </span>
            </div>
          </div>

          {/* Element Inspector Card on Right matching video */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-3xl p-6 border border-[#EAE4D8] shadow-xl relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#A1A1AA] uppercase block mb-1">
                    ELEMENT NO. {String(activeElement.number).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#18181B] tracking-tight">
                    {activeElement.name}
                  </h3>
                </div>

                {/* Big Element Symbol Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#D97706] text-white flex items-center justify-center font-black text-2xl shadow-md shadow-orange-500/20 font-mono">
                  {activeElement.symbol}
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F4F0E6] text-[#18181B]">
                  {activeElement.categoryLabel}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-900">
                  {activeElement.level}
                </span>
              </div>

              {/* Description */}
              <div className="mt-5 space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#18181B]">
                  TECHNICAL SCOPE
                </h4>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  {activeElement.description}
                </p>
              </div>

              {/* Projects deployed in */}
              <div className="mt-6 pt-5 border-t border-[#EAE4D8]">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#18181B] mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C]" />
                  DEPLOYED IN PROJECTS
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeElement.usedIn.map((proj, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#FBF9F5] border border-[#EAE4D8] text-[11px] font-medium text-[#18181B]"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-[#EAE4D8] flex items-center justify-between text-xs text-[#71717A]">
                <span>Tap any tile to inspect</span>
                <span className="font-mono text-[11px] font-semibold text-[#EA580C]">
                  Suneel Sajja Portfolio
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
