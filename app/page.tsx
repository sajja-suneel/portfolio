import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import CertificationsAchievements from "@/components/CertificationsAchievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#141518] selection:bg-[#141518] selection:text-[#FAF8F3]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <CertificationsAchievements />
      <Contact />
      <Footer />
    </main>
  );
}
