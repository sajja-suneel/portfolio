"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { playChime } from "@/lib/sound";
import { ArrowUpRight, ExternalLink, Plus, CheckCircle, Shield, Zap, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);
  const [activeImageTab, setActiveImageTab] = useState<number>(0);

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  const handleSelectProject = (id: string) => {
    playChime("click");
    setActiveProjectId(id);
    setActiveImageTab(0);
  };

  return (
    <section id="work" className="py-24 bg-[#F4F0E6] relative overflow-hidden border-t border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#71717A] uppercase">
                03 — WORK
              </span>
              <div className="h-px bg-[#EAE4D8] w-20" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#18181B]">
              Things I&apos;ve{" "}
              <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#D97706]">
                built.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71717A] max-w-md">
            Three production-oriented AI and full-stack systems showcasing vector search, multi-tenant security, and modern user experiences.
          </p>
        </div>

        {/* Desktop Horizontal Expandable Accordion Showcase matching Reference Video (vid0_frame_20s) */}
        <div className="hidden lg:flex gap-4 items-stretch min-h-[640px]">
          {projects.map((proj) => {
            const isActive = proj.id === activeProjectId;

            if (isActive) {
              return (
                <motion.div
                  key={proj.id}
                  layout
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 bg-white rounded-3xl p-8 border border-[#EAE4D8] shadow-xl flex flex-col justify-between overflow-hidden relative"
                >
                  <div className="grid grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Project Info & Features (7 cols) */}
                    <div className="col-span-7 space-y-5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                          {proj.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
                          {proj.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#71717A] font-medium mt-1">
                          {proj.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                        {proj.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-1">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#18181B]">
                          KEY CAPABILITIES
                        </h4>
                        <ul className="space-y-1.5">
                          {proj.highlights.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#18181B]">
                              <CheckCircle className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {proj.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-[#FBF9F5] border border-[#EAE4D8] text-[11px] font-semibold text-[#18181B]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-3 pt-3">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playChime("click")}
                          className="btn-primary-crafted inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-semibold cursor-pointer"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>View on GitHub</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>

                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => playChime("click")}
                            className="btn-secondary-crafted inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[#18181B] text-xs font-semibold cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Preview Demo</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Visual Mockup & Metrics (5 cols) */}
                    <div className="col-span-5 space-y-4">
                      
                      {/* Interactive Visual Window */}
                      <div className="bg-[#FBF9F5] rounded-2xl border border-[#EAE4D8] overflow-hidden shadow-inner p-2.5">
                        <div className="flex items-center justify-between px-2 pb-2 border-b border-[#EAE4D8] text-[10px] text-[#71717A]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#E2DAC9] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#D5CBB8] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]/50 inline-block" />
                          </div>
                          <span className="font-mono text-[#71717A]">{proj.id}.interface</span>
                        </div>

                        {/* Image Preview */}
                        <div className="relative h-60 w-full mt-2 rounded-xl overflow-hidden bg-stone-100">
                          <Image
                            src={
                              proj.secondaryImages && activeImageTab > 0
                                ? proj.secondaryImages[activeImageTab - 1]
                                : proj.image
                            }
                            alt={proj.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover object-top hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Image Sub-Tabs if available */}
                        {proj.secondaryImages && proj.secondaryImages.length > 0 && (
                          <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-[#EAE4D8]">
                            <button
                              onClick={() => setActiveImageTab(0)}
                              className={`px-2 py-1 rounded-md text-[10px] font-semibold cursor-pointer transition-colors ${
                                activeImageTab === 0
                                  ? "bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white"
                                  : "bg-[#EAE4D8] text-[#71717A] hover:text-[#18181B]"
                              }`}
                            >
                              Chat Assistant
                            </button>
                            {proj.secondaryImages.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setActiveImageTab(i + 1)}
                                className={`px-2 py-1 rounded-md text-[10px] font-semibold cursor-pointer transition-colors ${
                                  activeImageTab === i + 1
                                    ? "bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white"
                                    : "bg-[#EAE4D8] text-[#71717A] hover:text-[#18181B]"
                                }`}
                              >
                                {i === 0 ? "Admin Console" : "Overview"}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Project Performance Metrics */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {proj.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-[#FBF9F5] rounded-xl border border-[#EAE4D8]"
                          >
                            <span className="text-[10px] uppercase font-bold text-[#71717A] block">
                              {metric.label}
                            </span>
                            <span className="text-base font-extrabold text-[#18181B] font-mono mt-0.5 block">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            }

            // Inactive Collapsed Project Card standing vertically matching video
            return (
              <motion.div
                key={proj.id}
                layout
                onClick={() => handleSelectProject(proj.id)}
                className="w-20 bg-white hover:bg-[#FDFCFB] rounded-3xl p-4 border border-[#EAE4D8] flex flex-col justify-between items-center cursor-pointer transition-all duration-300 group shadow-xs hover:border-[#EA580C]/60"
              >
                {/* Number Badge */}
                <span className="text-xs font-mono font-bold text-[#A1A1AA] group-hover:text-[#EA580C]">
                  {proj.number}
                </span>

                {/* Vertical Text */}
                <div className="[writing-mode:vertical-rl] rotate-180 text-sm font-extrabold tracking-tight text-[#71717A] group-hover:text-[#18181B] truncate max-h-[380px]">
                  {proj.title}
                </div>

                {/* Plus button */}
                <div className="w-8 h-8 rounded-full bg-[#F4F0E6] border border-[#E2DAC9] flex items-center justify-center text-[#71717A] group-hover:bg-gradient-to-br group-hover:from-[#EA580C] group-hover:to-[#D97706] group-hover:border-transparent group-hover:text-white transition-all shadow-xs">
                  <Plus className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl p-6 border border-[#EAE4D8] shadow-lg space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#EA580C]">
                  {proj.category}
                </span>
                <span className="text-xs font-mono font-black text-[#18181B]">
                  {proj.number}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-[#18181B]">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#71717A] mt-0.5 font-medium">
                  {proj.subtitle}
                </p>
              </div>

              {/* Image Preview */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-[#EAE4D8]">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-top"
                />
              </div>

              <p className="text-xs text-[#52525B] leading-relaxed">
                {proj.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2">
                {proj.metrics.slice(0, 2).map((m, i) => (
                  <div key={i} className="p-2.5 bg-[#FBF9F5] rounded-xl border border-[#EAE4D8]">
                    <span className="text-[9px] uppercase font-bold text-[#71717A] block">
                      {m.label}
                    </span>
                    <span className="text-sm font-black text-[#18181B] font-mono">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {proj.technologies.slice(0, 6).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-[#FBF9F5] border border-[#EAE4D8] text-[10px] font-semibold text-[#18181B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-crafted flex-1 py-2.5 text-white rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-white border border-[#E2DAC9] text-[#18181B] hover:border-[#EA580C] rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-1.5"
                  >
                    <span>Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
