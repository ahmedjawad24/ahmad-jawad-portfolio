"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  BookOpen,
  Check,
  Cpu,
  FileText,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface AboutSectionProps {
  onOpenResume?: () => void;
  onOpenAssistant?: () => void;
}

export default function AboutSection({ onOpenResume, onOpenAssistant }: AboutSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8, x: 0.5 },
      colors: ["#10b981", "#38bdf8", "#f8fafc"],
    });
    setTimeout(() => setCopied(false), 2200);
  };

  const corePillars = [
    {
      icon: <Cpu size={16} className="theme-text-accent" />,
      title: "Image & Photo AI",
      desc: "Built smart AI systems that help doctors detect eye conditions from medical scans quickly and accurately.",
    },
    {
      icon: <ShieldCheck size={16} className="theme-text-secondary-accent" />,
      title: "Smart AI Assistants",
      desc: "Built chatbots and AI helpers that answer questions accurately without making up false information.",
    },
    {
      icon: <Zap size={16} className="theme-text-accent" />,
      title: "Fast Web Apps",
      desc: "Built web applications and backend systems that load quickly and handle traffic smoothly.",
    },
    {
      icon: <HeartHandshake size={16} className="theme-text-secondary-accent" />,
      title: "Simple & Intuitive Design",
      desc: "Created clean, simple screens that anyone can use easily without feeling overwhelmed.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-slate-800/80 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold theme-badge-primary mb-3">
            <span className="w-2 h-2 rounded-full bg-current status-dot" />
            <span>About Me</span>
          </div>
          <h2 className="section-header-title text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            Building Practical AI Tools That Solve Real Problems.
          </h2>
          <p className="section-header-desc text-slate-300 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            A quick look into my background, my work, and what I love building.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Story Card (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Purpose-Driven Hero Bio Card */}
            <div className="theme-surface p-6 sm:p-9 border rounded-3xl space-y-6 shadow-sm">
              
              {/* Top Greeting & Circular Avatar Header */}
              <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-700/50 pb-7">
                <div className="space-y-2 flex-1">
                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-2.5">
                    <span>Hi, I&apos;m Ahmad Jawad</span>
                    <span className="inline-block animate-wave text-3xl">👋</span>
                  </h3>
                  <p className="text-base sm:text-lg text-slate-200 font-semibold leading-snug pt-1">
                    Applied AI & Machine Learning Engineer
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">
                    I build practical machine learning models, smart AI tools, and clean web applications.
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold theme-badge-secondary mt-2">
                    <span className="w-2 h-2 rounded-full bg-current status-dot" />
                    <span>Open to Full-Time Roles & Exciting Projects</span>
                  </div>
                </div>

                {/* Circular Portrait Image with Face & Chest Focus */}
                <div className="relative shrink-0 self-start sm:self-center group">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[var(--accent-primary)]/80 shadow-xl shadow-[var(--accent-primary)]/25 relative bg-slate-800 ring-4 ring-slate-900/60">
                    <Image
                      src="/images/src/assets/images/IMG-20260817-WA0006.jpg.jpeg"
                      alt="Ahmad Jawad - Applied AI & ML Engineer"
                      fill
                      sizes="(max-width: 640px) 128px, 160px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      priority
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-0 right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-xs text-white font-bold shadow-md" title="Active & Available">
                    ✓
                  </div>
                </div>
              </div>

              {/* Concise About Narrative */}
              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                  <span>My Story & Approach</span>
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  I love turning machine learning into apps that genuinely help people. Whether it is teaching a computer vision model to spot eye conditions from medical scans, building an AI assistant that gives reliable answers, or developing a fast web app—my goal is always the same: <strong className="text-white">keep code clean, keep apps fast, and build tools that just work.</strong>
                </p>
              </div>

              {/* 4 Core Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {corePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl theme-card-inner border space-y-1.5 hover:border-[var(--border-highlight)] transition-colors"
                  >
                    <div className="flex items-center gap-2 font-semibold text-xs text-white">
                      {pillar.icon}
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Foundation & University Card */}
            <div className="theme-surface p-6 sm:p-8 border rounded-3xl space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold theme-text-accent">
                <GraduationCap size={18} />
                <span>Education</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/50 pb-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-sm font-medium text-slate-300 mt-0.5">
                    {PERSONAL_INFO.education.institution}
                  </p>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold theme-badge-primary">
                    Computer Science & AI
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Focused on machine learning, algorithms, software engineering, and computer vision with practical hands-on projects throughout.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="px-3 py-1 rounded-xl theme-card-inner border text-slate-300">
                  🔬 Medical AI
                </span>
                <span className="px-3 py-1 rounded-xl theme-card-inner border text-slate-300">
                  🤖 Smart Assistants
                </span>
                <span className="px-3 py-1 rounded-xl theme-card-inner border text-slate-300">
                  ⚡ Full-Stack Web
                </span>
                <span className="px-3 py-1 rounded-xl theme-card-inner border text-slate-300">
                  📊 Data Analysis
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Fast Facts & Quick Connect (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Connect & Role Snapshot Card */}
            <div className="theme-surface p-6 sm:p-7 border rounded-3xl space-y-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
                <h4 className="text-base font-bold text-white">
                  Quick Snapshot
                </h4>
                <span className="text-[11px] font-semibold theme-badge-primary px-2.5 py-0.5 rounded-full">
                  Available
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-3 rounded-2xl theme-card-inner border">
                  <span className="text-slate-400">Current Focus</span>
                  <span className="font-semibold text-white">Applied AI & ML</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl theme-card-inner border">
                  <span className="text-slate-400">Location</span>
                  <span className="font-semibold text-white">Global · Remote / Hybrid</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl theme-card-inner border">
                  <span className="text-slate-400">Core Stack</span>
                  <span className="font-semibold text-white">Python, PyTorch, Next.js</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl theme-card-inner border">
                  <span className="text-slate-400">Response Time</span>
                  <span className="font-semibold theme-text-accent">Within 24 Hours</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-slate-700/50">
                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-semibold theme-surface theme-surface-hover border text-slate-200 transition-all cursor-pointer shadow-sm"
                  >
                    <FileText size={15} className="theme-text-secondary-accent" />
                    <span>View Full Resume / CV</span>
                  </button>
                )}

                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-semibold theme-badge-primary transition-all cursor-pointer shadow-sm"
                >
                  <Mail size={15} />
                  <span>{copied ? "Email Copied!" : "Copy Email Address"}</span>
                </button>

                <a
                  href={`https://wa.me/923482991158?text=Hello%20Ahmad,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-semibold theme-card-inner border text-slate-300 hover:text-white transition-all"
                >
                  <Phone size={15} className="theme-text-accent" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* AI Assistant Callout */}
            {onOpenAssistant && (
              <div className="p-6 rounded-3xl theme-badge-secondary space-y-3 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-xs">
                  <Sparkles size={16} />
                  <span>Want to learn more?</span>
                </div>
                <p className="text-xs opacity-90 leading-relaxed">
                  Ask my interactive AI Guide any question about my background, project benchmarks, or technical capabilities.
                </p>
                <button
                  onClick={onOpenAssistant}
                  className="inline-flex items-center gap-1.5 text-xs font-bold underline underline-offset-4 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <span>Launch AI Assistant &rarr;</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
