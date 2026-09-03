"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  FileText,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  User,
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
      icon: <Cpu size={18} className="theme-text-accent" />,
      title: "Practical AI & Vision",
      desc: "Specialized in computer vision, medical diagnostic screening, and predictive modeling using PyTorch and Python.",
    },
    {
      icon: <ShieldCheck size={18} className="theme-text-secondary-accent" />,
      title: "Verifiable & Safe Agents",
      desc: "Architecting AI assistants with multi-model consensus, factual guardrails, and visual audit trails to prevent hallucinations.",
    },
    {
      icon: <Zap size={18} className="theme-text-accent" />,
      title: "Full-Stack Velocity",
      desc: "Bridging model development with production web apps using Next.js, TypeScript, FastAPI, Docker, and Streamlit.",
    },
    {
      icon: <HeartHandshake size={18} className="theme-text-secondary-accent" />,
      title: "User-Centric Design",
      desc: "Crafting clean, accessible, and intuitive user experiences so non-technical users can interact with complex AI effortlessly.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-slate-800/80 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold theme-badge-primary mb-3">
            <span>05</span>
            <span className="opacity-50">/</span>
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering intelligent software with purpose & precision.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            Get to know my journey, academic foundation, technical philosophy, and what drives my work in Applied AI.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Story & Narrative Card (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Bio Story Card */}
            <div className="theme-surface p-6 sm:p-8 border rounded-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/50 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl theme-card-inner border flex items-center justify-center font-bold text-lg theme-text-accent shrink-0 shadow-md">
                    AJ
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs sm:text-sm theme-text-secondary-accent font-medium mt-0.5">
                      {PERSONAL_INFO.role}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold theme-badge-secondary self-start sm:self-center">
                  <span className="w-2 h-2 rounded-full bg-current status-dot" />
                  <span>Available Globally (Remote/Hybrid)</span>
                </div>
              </div>

              {/* Personal Story & Vision */}
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  I am an <strong className="text-white">Applied AI & Machine Learning Engineer</strong> who believes the best artificial intelligence is practical, transparent, and built to solve real-world problems. Rather than viewing machine learning as a theoretical black box, I focus on turning algorithms into robust, production-ready software that users can rely on every single day.
                </p>
                <p>
                  My work spans across <strong className="text-white">medical computer vision</strong> (such as 96.2% accurate retinal screening and lightweight brain MRI segmentation), <strong className="text-white">financial fraud prevention</strong> with reduced false alarms, and <strong className="text-white">verifiable AI assistants</strong> engineered with multi-model consensus to guarantee accuracy and eliminate hallucinations.
                </p>
                <p>
                  Whether working independently on rapid prototypes or collaborating within agile engineering teams, I prioritize clean architectural patterns, comprehensive testing, and clear user experiences that bridge the gap between machine intelligence and everyday workflows.
                </p>
              </div>

              {/* 4 Core Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {corePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl theme-card-inner border space-y-1.5 hover:border-[var(--border-highlight)] transition-colors"
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
            <div className="theme-surface p-6 sm:p-8 border rounded-2xl space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold theme-text-accent">
                <GraduationCap size={18} />
                <span>Academic Foundation & Degree</span>
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
                Rigorous computer science curriculum emphasizing machine learning foundations, algorithms, distributed software design, computer vision, and mathematical optimization. Combined theoretical excellence with applied semester projects, hackathons, and published open-source tools.
              </p>

              {/* Focus Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="px-3 py-1.5 rounded-lg theme-card-inner border text-slate-300">
                  📚 Deep Learning & Neural Networks
                </span>
                <span className="px-3 py-1.5 rounded-lg theme-card-inner border text-slate-300">
                  🔬 Medical Vision & Diagnostics
                </span>
                <span className="px-3 py-1.5 rounded-lg theme-card-inner border text-slate-300">
                  ⚡ High-Performance Web Architecture
                </span>
                <span className="px-3 py-1.5 rounded-lg theme-card-inner border text-slate-300">
                  🛡️ AI Ethics & Factual Guardrails
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Fast Facts, Collaboration, & Quick Connect (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Visual Photo / Engineering Atmosphere Card */}
            <div className="theme-surface border rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48 w-full theme-card-inner">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                  alt="Modern collaborative workshop and engineering session"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-95" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-semibold theme-text-accent px-2.5 py-1 rounded-md theme-card-inner border backdrop-blur-md inline-block shadow-sm">
                    Open for Full-Time Roles & Projects
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <h4 className="text-base font-bold text-white">
                  Ready to contribute to your team
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Looking for high-impact AI/ML engineering positions, technical consultancy, and product engineering collaborations where practical machine learning drives tangible results.
                </p>

                <div className="space-y-2.5 pt-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl theme-card-inner border">
                    <span className="text-slate-400">Current Role</span>
                    <span className="font-semibold text-white">Applied AI Engineer</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl theme-card-inner border">
                    <span className="text-slate-400">Location</span>
                    <span className="font-semibold text-white">Worldwide · Remote/Hybrid</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl theme-card-inner border">
                    <span className="text-slate-400">Response Time</span>
                    <span className="font-semibold theme-text-accent">Within 24 Hours</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl theme-card-inner border">
                    <span className="text-slate-400">Core Languages</span>
                    <span className="font-semibold text-white">Python, TS, JS</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2 pt-3 border-t border-slate-700/50">
                  {onOpenResume && (
                    <button
                      onClick={onOpenResume}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold theme-surface theme-surface-hover border text-slate-200 transition-all cursor-pointer"
                    >
                      <FileText size={15} className="theme-text-secondary-accent" />
                      <span>View Full Resume / CV</span>
                    </button>
                  )}

                  <button
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold theme-badge-primary transition-all cursor-pointer"
                  >
                    <Mail size={15} />
                    <span>{copied ? "Email Copied!" : "Copy Email Address"}</span>
                  </button>

                  <a
                    href={`https://wa.me/923482991158?text=Hello%20Ahmad,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold theme-card-inner border text-slate-300 hover:text-white transition-all"
                  >
                    <Phone size={15} className="theme-text-accent" />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Interactive AI Guide Callout */}
            {onOpenAssistant && (
              <div className="p-5 rounded-2xl theme-badge-secondary space-y-2.5">
                <div className="flex items-center gap-2 font-bold text-xs">
                  <Sparkles size={15} />
                  <span>Curious about my project details?</span>
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
