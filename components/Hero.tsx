"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Volume2,
  VolumeX,
  Play
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { playChime } from "@/lib/sound";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Automatically turn off audio when user leaves the self-introduction section
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 1. IntersectionObserver to detect when the hero section scrolls out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.35) {
            if (videoRef.current && !videoRef.current.muted) {
              videoRef.current.muted = true;
              setIsMuted(true);
            }
          }
        });
      },
      {
        threshold: [0, 0.2, 0.35, 0.5, 1.0]
      }
    );

    observer.observe(section);

    // 2. Scroll listener for fast scrolling to other sections
    const handleScroll = () => {
      if (window.scrollY > 350) {
        if (videoRef.current && !videoRef.current.muted) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 3. Tab visibility listener: mute if user switches tabs
    const handleVisibility = () => {
      if (document.hidden && videoRef.current && !videoRef.current.muted) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const toggleAudio = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(() => {});
      setIsMuted(false);
      setIsPlaying(true);
      playChime("toggle");
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
      playChime("toggle");
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-[#FBF9F5] select-none"
    >
      {/* Ambient Warm Amber Glow in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#EA580C]/12 via-[#D97706]/10 to-[#F59E0B]/08 rounded-full blur-3xl pointer-events-none" />

      {/* Giant Watermark Typography behind avatar matching reference video */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[20vw] sm:text-[22vw] lg:text-[23vw] font-black tracking-tighter text-[#EFE8DC]/80 leading-none uppercase select-none text-center transform -translate-y-6"
        >
          SUNEEL
        </motion.span>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between">

        {/* Top Status Bar & Sub-heading */}
        <div className="flex items-center justify-end pt-4">

          {/* Social Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <a
              href="https://github.com/sajja-suneel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-full bg-white border border-[#E2DAC9] flex items-center justify-center text-[#71717A] hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] transition-colors shadow-2xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/suneel-sajja-071b08316/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 rounded-full bg-white border border-[#E2DAC9] flex items-center justify-center text-[#71717A] hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] transition-colors shadow-2xs"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:suneel.sajja1209@gmail.com"
              aria-label="Email Suneel"
              className="w-8 h-8 rounded-full bg-white border border-[#E2DAC9] flex items-center justify-center text-[#71717A] hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] transition-colors shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Unified Hero Stage: Left Title & Centered Video */}
        <div className="relative flex-1 flex flex-col md:flex-row items-center md:items-center justify-between pb-6 sm:pb-8 lg:pb-10 pt-2 min-h-[540px] lg:min-h-[620px]">

          {/* Left Content: Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="z-20 w-full md:w-auto md:max-w-xs lg:max-w-sm space-y-2 mb-6 md:mb-0 text-left md:self-end pb-4 md:pb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#18181B] leading-[1.02]">
              AI <br />
              <span>
                Engineer<span className="text-[#EA580C]">.</span>
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-[#71717A] max-w-sm font-medium pt-1">
              Creative developer · AI &amp; web technology
            </p>
          </motion.div>

          {/* Centered Video Stage (Seamlessly Blended into Page Background) */}
          <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex flex-col items-center justify-center pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[340px] sm:w-[480px] md:w-[620px] lg:w-[760px] xl:w-[840px] aspect-video group cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                poster="/profile/suneel-portrait.png"
                autoPlay
                loop
                playsInline
                muted={isMuted}
                style={{
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-transform duration-500 group-hover:scale-[1.01]"
              >
                <source src="/profile/intro.webm" type="video/webm" />
                <source src="/profile/intro.mp4" type="video/mp4" />
              </video>

              {/* Floating Audio Control Pill */}
              <button
                onClick={toggleAudio}
                className="absolute bottom-4 right-6 sm:right-14 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 hover:bg-white text-[#18181B] border border-[#EAE4D8] shadow-md text-xs font-semibold transition-all hover:scale-105 cursor-pointer"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                aria-label="Toggle video audio"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Unmute Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#EA580C] animate-pulse" />
                    <span>Sound On</span>
                    <div className="flex items-end gap-0.5 h-3 ml-0.5">
                      <span className="w-0.5 bg-[#EA580C] rounded-full animate-[bounce_0.8s_infinite] h-2" />
                      <span className="w-0.5 bg-[#EA580C] rounded-full animate-[bounce_0.6s_infinite] h-3" />
                      <span className="w-0.5 bg-[#EA580C] rounded-full animate-[bounce_0.9s_infinite] h-1.5" />
                    </div>
                  </>
                )}
              </button>

              {/* Play Indicator on Hover if paused */}
              {!isPlaying && (
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/95 shadow-xl flex items-center justify-center text-[#EA580C]">
                    <Play className="w-6 h-6 ml-0.5" />
                  </div>
                </div>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
