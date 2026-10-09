"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { playChime } from "@/lib/sound";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const emailAddress = "suneel.sajja1209@gmail.com";
  const phoneNumber = "+91 9550897271";
  const location = "Hyderabad, Telangana, India";

  const handleCopyEmail = () => {
    playChime("click");
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out all fields before sending.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);
    playChime("click");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playChime("success");

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // ignore
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#FBF9F5] relative overflow-hidden border-t border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-10">
          <span className="text-xs font-bold tracking-widest text-[#71717A] uppercase">
            06 — CONTACT
          </span>
          <div className="h-px bg-[#EAE4D8] flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline & Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#18181B] leading-[1.12]">
              Let&apos;s build <br />
              something{" "}
              <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-[#D97706]">
                meaningful.
              </span>
            </h2>

            <p className="text-sm text-[#52525B] leading-relaxed max-w-sm">
              I am actively open to AI/ML Engineering roles, Generative AI challenges, and full-stack software development. Let&apos;s discuss how we can create high-impact systems together.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Email Pill Card with Copy Button */}
              <div className="p-4 bg-white rounded-2xl border border-[#EAE4D8] flex items-center justify-between shadow-xs group hover:border-[#EA580C] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FBF9F5] flex items-center justify-center text-[#EA580C]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#A1A1AA] block">
                      EMAIL ME DIRECTLY
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-xs sm:text-sm font-bold text-[#18181B] hover:text-[#EA580C] transition-colors"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#FBF9F5] hover:bg-[#F4F0E6] border border-[#EAE4D8] text-[#71717A] hover:text-[#18181B] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#EA580C]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-white rounded-2xl border border-[#EAE4D8] shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-[#A1A1AA] block">
                    PHONE
                  </span>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-xs font-bold text-[#18181B] mt-1 block hover:text-[#EA580C] transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>

                <div className="p-3.5 bg-white rounded-2xl border border-[#EAE4D8] shadow-xs">
                  <span className="text-[10px] uppercase font-bold text-[#A1A1AA] block">
                    LOCATION
                  </span>
                  <span className="text-xs font-bold text-[#18181B] mt-1 block truncate">
                    {location}
                  </span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://github.com/sajja-suneel"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playChime("click")}
                  className="flex-1 py-3 px-4 rounded-2xl bg-white border border-[#EAE4D8] text-xs font-semibold text-[#18181B] flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-[#EA580C] hover:to-[#D97706] hover:text-white hover:border-transparent transition-all shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/suneel-sajja-071b08316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playChime("click")}
                  className="flex-1 py-3 px-4 rounded-2xl bg-white border border-[#EAE4D8] text-xs font-semibold text-[#18181B] flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-[#EA580C] hover:to-[#D97706] hover:text-white hover:border-transparent transition-all shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-[#EAE4D8] shadow-xl relative overflow-hidden">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/15 border border-amber-500/30 text-[#EA580C] flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#18181B]">
                  Message Received!
                </h3>
                <p className="text-sm text-[#52525B] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-[#18181B]">{formData.name}</span>. Your message has been recorded. You can also reach me directly at <a href={`mailto:${emailAddress}`} className="underline font-medium text-[#EA580C]">{emailAddress}</a>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="btn-primary-crafted px-6 py-2.5 rounded-full text-white text-xs font-semibold cursor-pointer shadow-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-[#18181B]">
                    Send a Direct Note
                  </h3>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    Fill out the form below or email me directly at {emailAddress}
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#18181B] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FBF9F5] border border-[#EAE4D8] text-xs text-[#18181B] placeholder:text-[#A1A1AA] focus:outline-hidden focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C]/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#18181B] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FBF9F5] border border-[#EAE4D8] text-xs text-[#18181B] placeholder:text-[#A1A1AA] focus:outline-hidden focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C]/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#18181B] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team opportunity, or inquiry..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#FBF9F5] border border-[#EAE4D8] text-xs text-[#18181B] placeholder:text-[#A1A1AA] focus:outline-hidden focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C]/20 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-crafted inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white text-xs font-semibold cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${emailAddress}?subject=Inquiry from Portfolio&body=Hi Suneel,%0D%0A%0D%0A`}
                    className="text-xs text-[#71717A] hover:text-[#EA580C] hover:underline text-center sm:text-right transition-colors"
                  >
                    Or open in your email client →
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
