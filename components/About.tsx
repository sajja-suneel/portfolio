"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowUpRight, ShieldCheck, Sparkles, MapPin, GraduationCap, Briefcase, Cpu } from "lucide-react";
import { playChime } from "@/lib/sound";

export default function About() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setRotateX(-y * 0.04);
    setRotateY(x * 0.04);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="about" className="py-24 bg-[#F4F0E6] relative overflow-hidden border-t border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-bold tracking-widest text-[#71717A] uppercase">
            01 — ABOUT
          </span>
          <div className="h-px bg-[#E2DAC9] flex-1 max-w-xs" />
        </div>

        {/* 3-Column Editorial Grid matching Reference Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Column 1: Left Bio & Action Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#18181B]">
              Hi, I&apos;m{" "}
              <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#D97706]">
                Suneel.
              </span>
            </h2>

            <p className="text-base text-[#52525B] leading-relaxed">
              AI &amp; ML Engineer with hands-on experience building and deploying AI-powered applications using Python, Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and intelligent AI agents.
            </p>

            <p className="text-sm text-[#71717A] leading-relaxed">
              Experienced in developing high-throughput RAG pipelines, dense embeddings, and semantic vector search using FastAPI, LangChain, LangGraph, and Qdrant. Skilled in bridging robust backend microservices with responsive, modern React and Next.js interfaces.
            </p>

            {/* Action Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/Suneel_Sajja_Resume.pdf"
                download="Suneel_Sajja_Resume.pdf"
                onClick={() => playChime("click")}
                className="btn-primary-crafted inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-semibold cursor-pointer"
              >
                <span>Résumé</span>
                <Download className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/sajja-suneel"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playChime("click")}
                className="btn-secondary-crafted inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[#18181B] text-xs font-semibold cursor-pointer"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.linkedin.com/in/suneel-sajja-071b08316/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playChime("click")}
                className="btn-secondary-crafted inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[#18181B] text-xs font-semibold cursor-pointer"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Center 3D Interactive Hanging ID Badge (4 cols) */}
          <div className="lg:col-span-4 flex justify-center py-4">
            <div className="relative flex flex-col items-center">

              {/* Lanyard Top Strap & Clasp with warm terracotta-amber gradient */}
              <div className="w-12 h-14 bg-gradient-to-b from-[#EA580C] via-[#F97316] to-[#D97706] rounded-b-md shadow-md shadow-orange-500/20 flex items-end justify-center pb-1 relative z-20">
                <div className="w-4 h-2 bg-[#D4AF37] rounded-xs shadow-xs" />
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-[#EA580C] bg-transparent -mt-2 z-10" />

              {/* ID Badge Card with 3D tilt */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{
                  rotateX,
                  rotateY,
                  transition: { type: "spring", damping: 15, stiffness: 200 }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-[280px] sm:w-[300px] bg-white rounded-3xl p-6 shadow-2xl border border-[#EAE4D8] relative overflow-hidden -mt-2 select-none group cursor-pointer"
              >
                {/* Holographic glossy sheen on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-400/10 to-orange-500/15 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE4D8]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#EA580C] to-[#D97706] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                      SS
                    </div>
                    <div>
                      <div className="text-[10px] font-black tracking-widest text-[#18181B] uppercase">
                        DEVELOPER ID
                      </div>
                      <div className="text-[8px] text-[#71717A] tracking-wide">
                        PORTFOLIO · 2026
                      </div>
                    </div>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
                </div>

                {/* Avatar Photo Frame */}
                <div className="my-5 flex justify-center">
                  <div className="relative w-36 h-44 rounded-2xl overflow-hidden border-2 border-[#EAE4D8] shadow-inner bg-[#FBF9F5]">
                    <Image
                      src="/profile/suneel-avatar.png"
                      alt="Suneel Sajja ID Avatar"
                      fill
                      sizes="150px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center space-y-1 mb-5">
                  <h3 className="text-base font-black tracking-tight text-[#18181B] uppercase">
                    SUNEEL SAJJA
                  </h3>
                  <p className="text-xs font-semibold text-[#71717A]">
                    AI Engineer
                  </p>
                </div>

                {/* Badge Meta details */}
                <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#EAE4D8] text-center">
                  <div>
                    <div className="text-[8px] uppercase tracking-wider text-[#A1A1AA]">
                      ID NO
                    </div>
                    <div className="text-[10px] font-bold text-[#18181B]">
                      SS-0001
                    </div>
                  </div>
                  <div>
                    <div className="text-[8px] uppercase tracking-wider text-[#A1A1AA]">
                      DEPT
                    </div>
                    <div className="text-[10px] font-bold text-[#18181B]">
                      AI Systems
                    </div>
                  </div>
                  <div>
                    <div className="text-[8px] uppercase tracking-wider text-[#A1A1AA]">
                      BATCH
                    </div>
                    <div className="text-[10px] font-bold text-[#18181B]">
                      2026–27
                    </div>
                  </div>
                </div>

                {/* Barcode Graphic */}
                <div className="mt-4 pt-1 flex flex-col items-center">
                  <div className="h-6 w-full flex items-center justify-between px-2 opacity-85">
                    {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="bg-[#27272A] rounded-xs"
                          style={{
                            width: `${(i % 3) + 1.5}px`,
                            height: `${12 + (h % 10)}px`
                          }}
                        />
                      )
                    )}
                  </div>
                  <span className="text-[7px] tracking-widest text-[#71717A] font-mono mt-1">
                    8117-SS-AI-ENG-2026
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Column 3: Right Quick Facts & Editorial Quote (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-widest text-[#71717A] mb-4">
                QUICK FACTS
              </h4>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-[#EAE4D8]">
                  <span className="text-[#71717A] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                    Based in
                  </span>
                  <span className="font-semibold text-[#18181B]">
                    Hyderabad, India
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#EAE4D8]">
                  <span className="text-[#71717A] flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#EA580C]" />
                    Education
                  </span>
                  <span className="font-semibold text-[#18181B]">
                    MCA (80% Distinction)
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#EAE4D8]">
                  <span className="text-[#71717A] flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#EA580C]" />
                    Current Role
                  </span>
                  <span className="font-semibold text-[#18181B]">
                    AI/ML Intern @ DataLabs
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#EAE4D8]">
                  <span className="text-[#71717A] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#EA580C]" />
                    Focus Area
                  </span>
                  <span className="font-semibold text-[#18181B]">
                    Generative AI &amp; RAG
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial quote matching video */}
            <div className="pt-4 border-t border-[#EAE4D8]">
              <p className="font-serif-italic text-xl text-[#18181B] leading-snug">
                &ldquo;From the vector store to the last pixel.&rdquo;
              </p>
              <span className="text-[10px] text-[#71717A] uppercase tracking-wider block mt-1">
                Engineering Philosophy
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
