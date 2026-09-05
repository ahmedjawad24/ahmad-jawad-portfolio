"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  FileText,
  GraduationCap,
  Mail,
  Phone,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenAssistant?: () => void;
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.5, x: 0.5 },
      colors: ["#10b981", "#38bdf8", "#f8fafc"],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-800/80 overflow-hidden" id="top">
      {/* Soft Background Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 bg-ambient opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-main)] opacity-90" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clear, Confident Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold theme-badge-primary">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Time Roles & Projects</span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-2">
              <div className="text-sm sm:text-base font-semibold theme-text-accent tracking-wide flex items-center gap-2">
                <span>Hi, I&apos;m Ahmad</span>
                <span className="text-base sm:text-lg inline-block">👋</span>
              </div>
              <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Applied AI & Machine Learning Engineer.
              </h1>
            </div>

            {/* Concise Value Summary */}
            <p className="hero-subtitle text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              I love to convert complex machine learning models, computer vision research, and AI workflows into fast, reliable, and user-friendly production web applications.
            </p>

            {/* Credential Note */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <GraduationCap size={15} className="theme-text-accent shrink-0" />
              <span>BS Computer Science · Pak-Austria Fachhochschule (PAF-IAST)</span>
            </div>

            {/* Focused Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold theme-btn-primary transition-all shadow-md active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold theme-surface theme-surface-hover border text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
              >
                <FileText size={15} className="theme-text-secondary-accent" />
                <span>Resume CV</span>
              </button>

              <a
                href="https://wa.me/923482991158?text=Hello%20Ahmad,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl text-xs sm:text-sm font-semibold theme-card-inner border text-slate-300 hover:text-white transition-all shadow-sm"
                title="Chat on WhatsApp"
              >
                <Phone size={14} className="theme-text-accent" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl text-xs sm:text-sm font-semibold theme-card-inner border text-slate-300 hover:text-white transition-all shadow-sm"
                title={`Email Ahmad directly at ${PERSONAL_INFO.email}`}
              >
                <Mail size={14} className="theme-text-secondary-accent" />
                <span>Email</span>
              </a>
            </div>

            {/* Prominent Proof Points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-2.5 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-2xl theme-surface border shadow-sm transition-all hover:border-slate-600">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-mono">
                  9<span className="theme-text-accent">+</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium leading-tight">
                  AI Systems Deployed
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl theme-surface border shadow-sm transition-all hover:border-slate-600">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-400 tracking-tight font-mono flex items-center gap-1">
                  <span>4.9</span>
                  <span className="text-base sm:text-xl text-amber-400">★</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium leading-tight">
                  Client Rating
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl theme-surface border shadow-sm transition-all hover:border-slate-600">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-mono">
                  &lt;24<span className="theme-text-secondary-accent">h</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium leading-tight">
                  Response Time
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean, Dignified Profile Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="theme-surface-glass p-4 sm:p-5 rounded-3xl border shadow-xl max-w-sm w-full backdrop-blur-xl space-y-3.5">
              
              {/* Photo Frame */}
              <div className="relative aspect-[4/4.6] w-full rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800 shadow-inner">
                <Image
                  src="/images/src/assets/images/IMG-20260817-WA0006.jpg.jpeg"
                  alt="Ahmad Jawad"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Specialization Domains */}
              <div className="text-center pt-0.5">
                <p className="text-xs text-slate-300 font-medium tracking-wide">
                  Computer Vision · AI Assistants · Full-Stack Web
                </p>
              </div>

              {/* Fast Contact Actions */}
              <div className="flex items-center gap-2 pt-0.5">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-mono theme-card-inner border text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="theme-text-accent" />
                      <span className="theme-text-accent font-sans font-semibold">Copied Email</span>
                    </>
                  ) : (
                    <>
                      <Mail size={13} className="text-slate-400" />
                      <span className="font-sans">Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href="#contact"
                  className="py-2.5 px-4 rounded-xl text-xs font-bold theme-btn-primary transition-all text-center shrink-0 shadow-sm"
                >
                  Let&apos;s Talk
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
