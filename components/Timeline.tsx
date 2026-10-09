"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { timelineItems, TimelineItem } from "@/data/experience";
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { playChime } from "@/lib/sound";

export default function Timeline() {
  const [filter, setFilter] = useState<"all" | "experience" | "education">("all");

  const filteredItems = timelineItems.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section id="experience" className="py-24 bg-[#FBF9F5] relative overflow-hidden border-t border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#71717A] uppercase">
                04 — EXPERIENCE &amp; EDUCATION
              </span>
              <div className="h-px bg-[#EAE4D8] w-20" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18181B]">
              Path of{" "}
              <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#D97706]">
                Growth.
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-[#EAE4D8] shadow-xs">
            <button
              onClick={() => {
                playChime("toggle");
                setFilter("all");
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white shadow-xs"
                  : "text-[#71717A] hover:text-[#18181B]"
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => {
                playChime("toggle");
                setFilter("experience");
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                filter === "experience"
                  ? "bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white shadow-xs"
                  : "text-[#71717A] hover:text-[#18181B]"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => {
                playChime("toggle");
                setFilter("education");
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                filter === "education"
                  ? "bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white shadow-xs"
                  : "text-[#71717A] hover:text-[#18181B]"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Vertical Timeline with Large Year Markers matching Reference Video (vid0_frame_27s) */}
        <div className="relative">
          
          {/* Central Vertical Line (visible on desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-[#EAE4D8] -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-20">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  {/* Central Node & Big Year Marker */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10 pointer-events-none">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#EA580C] to-[#D97706] border-4 border-[#FBF9F5] shadow-md shadow-orange-500/30" />
                    <span className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#D97706] tracking-tighter mt-1 bg-[#FBF9F5] px-2 rounded-md">
                      {item.year}
                    </span>
                  </div>

                  {/* Left Column content or spacer */}
                  <div
                    className={`md:col-span-6 ${
                      isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EAE4D8] shadow-xl hover:border-[#EA580C]/40 transition-colors text-left"
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            item.type === "experience"
                              ? "bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white shadow-xs"
                              : "bg-[#F4F0E6] text-[#18181B] border border-[#E2DAC9]"
                          }`}
                        >
                          {item.type === "experience" ? (
                            <Briefcase className="w-3 h-3" />
                          ) : (
                            <GraduationCap className="w-3 h-3 text-[#EA580C]" />
                          )}
                          <span>{item.type.toUpperCase()}</span>
                        </span>

                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-900 border border-amber-500/30">
                            ★ {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-extrabold text-[#18181B] tracking-tight">
                        {item.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-[#71717A] mt-0.5">
                        {item.organization}
                      </div>

                      {/* Period & Location */}
                      <div className="flex flex-wrap items-center gap-3 my-3 text-[11px] text-[#71717A]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#EA580C]" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                          {item.location}
                        </span>
                        {item.score && (
                          <span className="font-bold text-[#EA580C] bg-[#FBF9F5] border border-[#EAE4D8] px-2 py-0.5 rounded-md">
                            Score: {item.score}
                          </span>
                        )}
                      </div>

                      {/* Description Bullets */}
                      <ul className="space-y-1.5 text-xs text-[#52525B] leading-relaxed my-4">
                        {item.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills footer */}
                      <div className="pt-3 border-t border-[#EAE4D8] flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-[#FBF9F5] border border-[#EAE4D8] text-[10px] font-medium text-[#18181B]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty spacer for the alternating side on desktop */}
                  <div className={`hidden md:block md:col-span-6 ${isEven ? "md:order-2" : "md:order-1"}`} />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
