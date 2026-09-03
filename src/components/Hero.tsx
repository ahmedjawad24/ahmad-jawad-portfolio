"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  Check,
  Cpu,
  FileText,
  Github,
  Layers,
  Mail,
  Moon,
  Palette,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

interface HeroProps {
  onOpenAssistant: () => void;
  onOpenResume: () => void;
}

export default function Hero({ onOpenAssistant, onOpenResume }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [activeSystemIndex, setActiveSystemIndex] = useState(0);
  const { currentTheme, setTheme, themes } = useTheme();

  const featuredSystems = [
    {
      title: "AI Trust Verifier",
      subtitle: "Proof of Trust",
      category: "AI & Accuracy",
      badge: "Open Source Project",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      imageAlt: "AI verification analytics dashboard",
      highlight: "Double-checks AI answers with multiple models to prevent false or made-up information.",
      benefits: [
        { label: "Verification Speed", value: "Under 0.5 sec" },
        { label: "Accuracy Check", value: "Multi-Model Consensus" },
        { label: "Audit Proof", value: "Tamper-Proof Record" },
      ],
      stack: ["Next.js", "TypeScript", "AI Models", "Web App"],
      github: "https://github.com/ahmedjawad24/proof-of-trust",
    },
    {
      title: "Eye Disease Detection AI",
      subtitle: "Explainable Retinal AI",
      category: "Healthcare & Vision",
      badge: "Clinical Project",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Ophthalmic retinal examination scan and visual diagnostics",
      highlight: "Scans eye photos to spot conditions and highlights the exact problem areas for doctors to review.",
      benefits: [
        { label: "Diagnostic Accuracy", value: "96.2%" },
        { label: "Photo Scan Time", value: "0.12 seconds" },
        { label: "Visual Heatmaps", value: "Included for Doctors" },
      ],
      stack: ["PyTorch", "Computer Vision", "FastAPI", "Python"],
      github: "https://github.com/ahmedjawad24/Explainable-retinal-disease-detection",
    },
    {
      title: "Smart Fraud Detector",
      subtitle: "FraudLens",
      category: "Financial Safety",
      badge: "Real-World Pipeline",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Financial security and risk detection monitor",
      highlight: "Spots fraudulent transactions while preventing annoying false alarms for genuine customers.",
      benefits: [
        { label: "Fewer False Alarms", value: "-34% Reduction" },
        { label: "Processing Speed", value: "10,000 tx/second" },
        { label: "Analyst Dashboard", value: "Interactive Control" },
      ],
      stack: ["Python", "Machine Learning", "Streamlit", "Risk Scoring"],
      github: "https://github.com/ahmedjawad24/credit-card-fraud-detection",
    },
  ];

  const currentSystem = featuredSystems[activeSystemIndex];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.35, x: 0.5 },
      colors: ["#00f0ff", "#38bdf8", "#f8fafc"],
    });
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-800/80 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          alt="Engineering team collaboration and workspace background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-10 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        {/* Responsive Gradient overlay that uses the current theme colors */}
        <div className="absolute inset-0 bg-ambient" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-main)] opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Theme Switcher Pill Bar (Convenient quick preview of color combos) */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-2 rounded-2xl theme-surface-glass border shadow-sm">
          <div className="flex items-center gap-2 pl-2">
            <Palette size={14} className="theme-text-accent" />
            <span className="text-xs font-semibold text-slate-200">
              Active Atmosphere & Theme:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {themes.map((theme) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  onClick={() => setTheme(theme.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                    isSelected
                      ? "theme-btn-primary border-transparent shadow-md scale-[1.02]"
                      : "theme-card-inner text-slate-300 hover:text-white border-transparent hover:border-slate-600"
                  }`}
                >
                  {theme.isLight ? (
                    <Sun size={11} className={isSelected ? "text-slate-900" : "text-amber-400"} />
                  ) : (
                    <span
                      className="w-2 h-2 rounded-full ring-1 ring-slate-900"
                      style={{ backgroundColor: theme.palettePreview.accent }}
                    />
                  )}
                  <span>{theme.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium theme-badge-primary shadow-sm backdrop-blur-sm hero-pill-canvas">
              <span className="w-2 h-2 rounded-full bg-current status-dot" />
              <span className="font-semibold text-white">Ahmad Jawad</span>
              <span className="opacity-50">·</span>
              <span className="text-slate-200">Applied AI & Machine Learning Engineer</span>
            </div>

            {/* Headline - Title Case & high visual appeal with theme accent */}
            <h1 className="hero-title text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2]">
              Building{" "}
              <span className="theme-text-accent underline decoration-2 decoration-current underline-offset-4">
                Smart, Practical AI
              </span>{" "}
              that Solves Real-World Problems.
            </h1>

            {/* Subheading */}
            <p className="hero-subtitle text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I design and build machine learning systems, helpful AI assistants, and computer vision tools—focusing on clean user experience, speed, and real-world usefulness.
            </p>

            {/* Everyday Domain Highlights */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="hero-domain-tag px-3 py-1.5 rounded-xl theme-surface backdrop-blur-sm border text-slate-200 font-medium flex items-center gap-1.5">
                <Cpu size={14} className="theme-text-accent" /> Computer Vision & Image AI
              </span>
              <span className="hero-domain-tag px-3 py-1.5 rounded-xl theme-surface backdrop-blur-sm border text-slate-200 font-medium flex items-center gap-1.5">
                <ShieldCheck size={14} className="theme-text-secondary-accent" /> Clear & Explainable AI
              </span>
              <span className="hero-domain-tag px-3 py-1.5 rounded-xl theme-surface backdrop-blur-sm border text-slate-200 font-medium flex items-center gap-1.5">
                <Layers size={14} className="theme-text-accent" /> Fraud & Anomaly Detection
              </span>
              <span className="hero-domain-tag px-3 py-1.5 rounded-xl theme-surface backdrop-blur-sm border text-slate-200 font-medium flex items-center gap-1.5">
                <Bot size={14} className="theme-text-secondary-accent" /> Smart Chatbots & Assistants
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold theme-btn-primary transition-all shadow-md active:scale-[0.98]"
              >
                <span>Browse Selected Work</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-200 theme-surface theme-surface-hover border transition-all backdrop-blur-sm"
              >
                <FileText size={15} className="theme-text-secondary-accent" />
                <span>View Summary CV</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-mono text-slate-200 theme-card-inner border hover:border-slate-500 transition-all backdrop-blur-sm"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check size={15} className="theme-text-accent" />
                    <span className="theme-text-accent font-sans font-medium">Copied To Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Mail size={15} className="text-slate-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Stats */}
            <div className="pt-6 border-t border-slate-800/90 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="stat-val-canvas text-2xl font-bold text-white">9+</div>
                <div className="stat-lbl-canvas text-xs text-slate-400 mt-0.5">Finished AI Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold theme-text-accent">96%</div>
                <div className="stat-lbl-canvas text-xs text-slate-400 mt-0.5">Medical AI Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold theme-text-secondary-accent">34%</div>
                <div className="stat-lbl-canvas text-xs text-slate-400 mt-0.5">Fewer False Alarms</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Featured Project Spotlight */}
          <div className="lg:col-span-5">
            <div className="theme-surface-glass p-5 sm:p-6 border shadow-2xl space-y-5 rounded-2xl backdrop-blur-xl">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full theme-btn-primary" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Interactive Project Spotlight
                  </span>
                </div>
                <span className="text-xs font-medium theme-badge-primary px-2.5 py-0.5 rounded-full">
                  {currentSystem.badge}
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 theme-card-inner rounded-xl border text-xs">
                {featuredSystems.map((sys, idx) => (
                  <button
                    key={sys.title}
                    onClick={() => setActiveSystemIndex(idx)}
                    className={`py-2 px-1 rounded-lg text-center font-semibold transition-all ${
                      activeSystemIndex === idx
                        ? "theme-btn-primary shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {idx === 0 ? "AI Verifier" : idx === 1 ? "Eye Care AI" : "Fraud Check"}
                  </button>
                ))}
              </div>

              {/* Visual Preview Image Banner */}
              <div className="relative h-36 w-full rounded-xl overflow-hidden border border-slate-700/70 group">
                <Image
                  src={currentSystem.image}
                  alt={currentSystem.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card-inner)] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-white px-2 py-0.5 rounded-md theme-card-inner border backdrop-blur-sm">
                    {currentSystem.category}
                  </span>
                  <span className="text-[11px] font-medium theme-badge-primary px-2 py-0.5 rounded-md backdrop-blur-sm">
                    {currentSystem.subtitle}
                  </span>
                </div>
              </div>

              {/* Active System Details */}
              <div className="space-y-4 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {currentSystem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {currentSystem.highlight}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-1.5 pt-0.5">
                  {currentSystem.benefits.map((b) => (
                    <div
                      key={b.label}
                      className="flex items-center justify-between p-2.5 rounded-xl theme-card-inner border text-xs"
                    >
                      <span className="text-slate-400">{b.label}</span>
                      <span className="font-semibold text-slate-100">{b.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {currentSystem.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-md theme-card-inner text-slate-300 border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-3.5 border-t border-slate-700/50 flex items-center justify-between text-xs">
                <a
                  href={currentSystem.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-200 hover:theme-text-accent font-medium transition-colors"
                >
                  <Github size={14} />
                  <span>View on GitHub</span>
                </a>

                <button
                  onClick={onOpenAssistant}
                  className="inline-flex items-center gap-1.5 theme-text-accent hover:opacity-80 font-semibold transition-colors"
                >
                  <Bot size={14} />
                  <span>Ask AI Guide</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
