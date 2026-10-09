"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { certifications, achievementMetrics, Certification } from "@/data/certifications";
import { playChime } from "@/lib/sound";
import { ArrowUpRight, Award, Trophy, Star, Code, Cpu, CheckCircle } from "lucide-react";

export default function CertificationsAchievements() {
  const [activeCertId, setActiveCertId] = useState<string>(certifications[0].id);

  const handleCertHover = (id: string) => {
    playChime("hover");
    setActiveCertId(id);
  };

  return (
    <section id="certifications" className="py-24 bg-[#F4F0E6] relative overflow-hidden border-t border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-xs font-bold tracking-widest text-[#71717A] uppercase">
            05 — CERTIFICATIONS &amp; ACHIEVEMENTS
          </span>
          <div className="h-px bg-[#E2DAC9] flex-1 max-w-xs" />
        </div>

        {/* Part 1: Certifications List matching Reference Video (vid0_frame_24s) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Title: Always learning. */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#18181B] leading-[1.1]">
              Always <br />
              <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#D97706]">
                learning.
              </span>
            </h2>

            <p className="text-sm text-[#52525B] leading-relaxed max-w-sm">
              Continuous validation through industry-recognized certifications across Generative AI, machine learning pipelines, and advanced statistical analysis.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2DAC9] text-xs font-medium text-[#18181B] shadow-xs">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>5 Verified Credentials</span>
              </span>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 space-y-2.5">
            {certifications.map((cert) => {
              const isActive = cert.id === activeCertId;

              return (
                <div
                  key={cert.id}
                  onMouseEnter={() => handleCertHover(cert.id)}
                  onClick={() => handleCertHover(cert.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white border-[#F97316] shadow-xl shadow-orange-500/20 -translate-y-0.5"
                      : "bg-white text-[#18181B] border-[#EAE4D8] hover:border-[#EA580C]/50 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive ? "text-orange-100" : "text-[#A1A1AA]"
                        }`}
                      >
                        {cert.number}
                      </span>
                      <div>
                        <h4 className="text-sm sm:text-base font-extrabold tracking-tight">
                          {cert.title}
                        </h4>
                        <span
                          className={`text-xs font-medium ${
                            isActive ? "text-orange-100" : "text-[#71717A]"
                          }`}
                        >
                          {cert.issuer} {cert.date ? `· ${cert.date}` : ""}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`hidden sm:inline text-[10px] font-semibold px-2.5 py-1 rounded-md ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-[#FBF9F5] border border-[#EAE4D8] text-[#71717A]"
                        }`}
                      >
                        {cert.category}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "text-white translate-x-0.5 -translate-y-0.5" : "text-[#A1A1AA]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable details when active */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 pt-3 border-t border-white/20 text-xs text-orange-50 space-y-2"
                    >
                      <p>{cert.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skills.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-sm bg-white/20 text-[10px] font-mono text-white"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Part 2: Achievements / Proud moments matching Reference Video (vid0_frame_30s) */}
        <div className="pt-12 border-t border-[#EAE4D8]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#18181B]">
                Proud{" "}
                <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#D97706]">
                  moments.
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#71717A] mt-1">
                Quantitative indicators of algorithmic rigor, problem solving, and academic consistency.
              </p>
            </div>
          </div>

          {/* Metric Cards Grid matching video frame 30s */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievementMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-6 border border-[#EAE4D8] shadow-md flex flex-col justify-between space-y-4 hover:border-[#EA580C]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#FBF9F5] border border-[#EAE4D8] flex items-center justify-center text-[#18181B]">
                    {metric.iconName === "Code" && <Code className="w-5 h-5 text-[#EA580C]" />}
                    {metric.iconName === "Star" && <Star className="w-5 h-5 text-amber-500 fill-amber-500" />}
                    {metric.iconName === "Trophy" && <Trophy className="w-5 h-5 text-amber-500" />}
                    {metric.iconName === "Cpu" && <Cpu className="w-5 h-5 text-[#EA580C]" />}
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#A1A1AA] uppercase">
                    {metric.category}
                  </span>
                </div>

                <div>
                  <div className="text-4xl font-black text-[#18181B] font-mono tracking-tight">
                    {metric.number}
                  </div>
                  <div className="text-sm font-extrabold text-[#18181B] mt-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-[#71717A] mt-1 leading-relaxed">
                    {metric.sublabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
