"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  Cpu,
  FileText,
  Gauge,
  Layers,
  Mail,
  Network,
  Palette,
  Play,
  RefreshCw,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Zap,
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
  const [activeVisualTab, setActiveVisualTab] = useState<"pipeline" | "telemetry" | "matrix">("pipeline");
  const [activeNode, setActiveNode] = useState(1);
  const [benchmarkCount, setBenchmarkCount] = useState(14820);
  const [isBenchmarking, setIsBenchmarking] = useState(false);
  const { currentTheme, setTheme, themes } = useTheme();

  const pipelineStages = [
    {
      id: 0,
      step: "01",
      name: "Take In Data",
      subtitle: "Photos, Documents & Text",
      throughput: "Instant Upload",
      latency: "< 0.01 sec",
      badge: "Step 1: Input",
      desc: "Collects user photos, medical scans, or customer questions safely and gets them clean and ready for the AI to read.",
      specs: ["Clean & Organized", "Privacy First", "Fast File Uploads"],
    },
    {
      id: 1,
      step: "02",
      name: "Smart AI Brain",
      subtitle: "Pattern Recognition & Vision",
      throughput: "2,000+ per second",
      latency: "0.01 sec",
      badge: "Step 2: AI Thinking",
      desc: "Trained AI models scan the photo or text, find key details, and predict the right answers in a fraction of a second.",
      specs: ["High Accuracy", "Spots Key Details", "Real-Time Answers"],
    },
    {
      id: 2,
      step: "03",
      name: "Double-Check Facts",
      subtitle: "Safety & Accuracy Check",
      throughput: "Every Answer",
      latency: "Instant Check",
      badge: "Step 3: Quality Check",
      desc: "Double-checks every answer with safety rules so the AI never makes up false information or gives misleading advice.",
      specs: ["Prevents Mistakes", "Strict Fact-Checking", "Safe & Reliable"],
    },
    {
      id: 3,
      step: "04",
      name: "Show Clear Results",
      subtitle: "Web & Mobile Screens",
      throughput: "Built for Thousands",
      latency: "Instant Display",
      badge: "Step 4: User Screen",
      desc: "Displays simple answers and visual highlights directly on easy-to-use web and phone screens for doctors, clients, and teams.",
      specs: ["Easy to Understand", "Works on Any Device", "Clear Explanations"],
    },
  ];

  const currentNode = pipelineStages[activeNode];

  const runBenchmark = () => {
    if (isBenchmarking) return;
    setIsBenchmarking(true);
    confetti({
      particleCount: 28,
      spread: 45,
      origin: { y: 0.6, x: 0.75 },
      colors: ["#10b981", "#38bdf8", "#6366f1"],
    });
    setTimeout(() => {
      setBenchmarkCount((prev) => prev + Math.floor(Math.random() * 55) + 20);
      setIsBenchmarking(false);
    }, 650);
  };

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
        
        {/* Quick Theme Switcher Pill Bar */}
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

            {/* Headline */}
            <h1 className="hero-title text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2]">
              Building{" "}
              <span className="theme-text-accent underline decoration-2 decoration-current underline-offset-4">
                Smart, Practical AI
              </span>{" "}
              that Solves Real-World Problems.
            </h1>

            {/* Subheading */}
            <p className="hero-subtitle text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I build easy-to-use AI tools, smart assistants, and fast web apps that help businesses save time, automate repetitive work, and get real results.
            </p>

            {/* Everyday Domain Highlights */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="hero-domain-tag px-3 py-1.5 rounded-xl theme-surface backdrop-blur-sm border text-slate-200 font-medium flex items-center gap-1.5">
                <Cpu size={14} className="theme-text-accent" /> Image & Photo AI
              </span>
              <span className="hero-domain-tag px-3 py-1.5 rounded-xl theme-surface backdrop-blur-sm border text-slate-200 font-medium flex items-center gap-1.5">
                <ShieldCheck size={14} className="theme-text-secondary-accent" /> Fact-Checked Chatbots
              </span>
              <span className="hero-domain-tag px-3 py-1.5 rounded-xl theme-surface backdrop-blur-sm border text-slate-200 font-medium flex items-center gap-1.5">
                <Layers size={14} className="theme-text-accent" /> Fraud & Security Alerts
              </span>
              <span className="hero-domain-tag px-3 py-1.5 rounded-xl theme-surface backdrop-blur-sm border text-slate-200 font-medium flex items-center gap-1.5">
                <Bot size={14} className="theme-text-secondary-accent" /> Fast Web Apps
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
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-200 theme-surface theme-surface-hover border transition-all backdrop-blur-sm cursor-pointer"
              >
                <FileText size={15} className="theme-text-secondary-accent" />
                <span>View Summary CV</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-mono text-slate-200 theme-card-inner border hover:border-slate-500 transition-all backdrop-blur-sm cursor-pointer"
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

            {/* Industrial Metrics */}
            <div className="pt-6 border-t border-slate-800/90 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="stat-val-canvas text-2xl font-bold text-white">9+</div>
                <div className="stat-lbl-canvas text-xs text-slate-400 mt-0.5">Finished AI Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold theme-text-accent">100%</div>
                <div className="stat-lbl-canvas text-xs text-slate-400 mt-0.5">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold theme-text-secondary-accent">99.9%</div>
                <div className="stat-lbl-canvas text-xs text-slate-400 mt-0.5">System Reliability</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive AI Demonstration Visualizer */}
          <div className="lg:col-span-5">
            <div className="theme-surface-glass p-5 sm:p-6 border shadow-2xl space-y-5 rounded-2xl backdrop-blur-xl">
              
              {/* Visualizer Header */}
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    See How My AI Works
                  </span>
                </div>
                <span className="text-xs font-semibold theme-badge-primary px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                  <Activity size={12} className="animate-spin text-current" style={{ animationDuration: "3s" }} />
                  <span>Live & Interactive</span>
                </span>
              </div>

              {/* View Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 theme-card-inner rounded-xl border text-xs">
                <button
                  onClick={() => setActiveVisualTab("pipeline")}
                  className={`py-2 px-1 rounded-lg text-center font-semibold transition-all cursor-pointer ${
                    activeVisualTab === "pipeline"
                      ? "theme-btn-primary shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  How It Works
                </button>
                <button
                  onClick={() => setActiveVisualTab("telemetry")}
                  className={`py-2 px-1 rounded-lg text-center font-semibold transition-all cursor-pointer ${
                    activeVisualTab === "telemetry"
                      ? "theme-btn-primary shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Speed & Quality
                </button>
                <button
                  onClick={() => setActiveVisualTab("matrix")}
                  className={`py-2 px-1 rounded-lg text-center font-semibold transition-all cursor-pointer ${
                    activeVisualTab === "matrix"
                      ? "theme-btn-primary shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  What I Build
                </button>
              </div>

              {/* TAB 1: HOW IT WORKS (4-STEP PROCESS) */}
              {activeVisualTab === "pipeline" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  {/* Step Buttons */}
                  <div className="p-3 rounded-xl theme-card-inner border space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-1 border-b border-slate-700/40">
                      <span className="font-mono text-[11px]">THE 4-STEP PROCESS</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Ready to Test
                      </span>
                    </div>

                    {/* 4 Interactive Step Buttons */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {pipelineStages.map((stage) => {
                        const isSelected = stage.id === activeNode;
                        return (
                          <button
                            key={stage.id}
                            onClick={() => setActiveNode(stage.id)}
                            className={`p-2 rounded-lg text-left transition-all border cursor-pointer ${
                              isSelected
                                ? "bg-[var(--accent-primary)]/15 border-[var(--accent-primary)] text-white shadow-sm"
                                : "theme-surface hover:border-slate-500 text-slate-400"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono opacity-75">{stage.step}</span>
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  isSelected ? "bg-[var(--accent-primary)]" : "bg-slate-600"
                                }`}
                              />
                            </div>
                            <p className="text-[11px] font-semibold text-slate-200 mt-1 truncate">
                              {stage.name}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {/* Simple Wave Graphic */}
                    <div className="relative h-6 w-full flex items-center justify-between px-2 overflow-hidden">
                      <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-primary)]/40 to-transparent" />
                      <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-500 z-10">Input</span>
                      <span className="text-[10px] font-mono text-[var(--accent-primary)] z-10 font-bold">AI Brain</span>
                      <span className="text-[10px] font-mono text-slate-500 z-10">Double Check</span>
                      <span className="text-[10px] font-mono text-slate-500 z-10">Result</span>
                    </div>
                  </div>

                  {/* Active Step Details */}
                  <div className="p-4 rounded-xl theme-surface border space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-mono theme-text-accent font-semibold">
                          STAGE {currentNode.step} · {currentNode.badge}
                        </div>
                        <h4 className="text-base font-bold text-white mt-0.5">
                          {currentNode.name}
                        </h4>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono font-bold text-white">{currentNode.latency}</div>
                        <div className="text-[10px] text-slate-400">Response Time</div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentNode.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="p-2 rounded-lg theme-card-inner border text-xs">
                        <span className="text-slate-400 text-[10px] block">Processing Speed</span>
                        <span className="font-semibold text-white font-mono">{currentNode.throughput}</span>
                      </div>
                      <div className="p-2 rounded-lg theme-card-inner border text-xs">
                        <span className="text-slate-400 text-[10px] block">Main Technology</span>
                        <span className="font-semibold theme-text-secondary-accent font-mono truncate block">
                          {currentNode.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {currentNode.specs.map((spec) => (
                        <span
                          key={spec}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md theme-card-inner border text-slate-300 flex items-center gap-1"
                        >
                          <CheckCircle2 size={10} className="theme-text-accent" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: SPEED & QUALITY */}
              {activeVisualTab === "telemetry" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl theme-card-inner border space-y-1">
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>Average Speed</span>
                        <Gauge size={13} className="theme-text-accent" />
                      </div>
                      <div className="text-xl font-bold text-white font-mono">0.01 sec</div>
                      <div className="text-[10px] text-emerald-400 font-semibold">⚡ Instant & Responsive</div>
                    </div>

                    <div className="p-3.5 rounded-xl theme-card-inner border space-y-1">
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>Always Online</span>
                        <Server size={13} className="theme-text-secondary-accent" />
                      </div>
                      <div className="text-xl font-bold text-white font-mono">99.99%</div>
                      <div className="text-[10px] text-sky-400 font-semibold">Rock-Solid Reliability</div>
                    </div>

                    <div className="p-3.5 rounded-xl theme-card-inner border space-y-1">
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>Client Satisfaction</span>
                        <CheckCircle2 size={13} className="theme-text-accent" />
                      </div>
                      <div className="text-xl font-bold text-white font-mono">100%</div>
                      <div className="text-[10px] text-emerald-400 font-semibold">Delivering on Promises</div>
                    </div>

                    <div className="p-3.5 rounded-xl theme-card-inner border space-y-1">
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>Questions Handled</span>
                        <Zap size={13} className="theme-text-secondary-accent" />
                      </div>
                      <div className="text-xl font-bold text-white font-mono">
                        {benchmarkCount.toLocaleString()}+
                      </div>
                      <div className="text-[10px] text-slate-400">Tested Live Inquiries</div>
                    </div>
                  </div>

                  {/* Interactive Speed Test */}
                  <div className="p-4 rounded-xl theme-surface border space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <Terminal size={14} className="theme-text-accent" />
                        <span>Try a Live Speed Test</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">Interactive Demo</span>
                    </div>

                    <p className="text-xs text-slate-300">
                      Click the button below to simulate sending a live query and watch the AI respond in milliseconds.
                    </p>

                    <button
                      onClick={runBenchmark}
                      disabled={isBenchmarking}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold theme-btn-primary flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 transition-all shadow-md active:scale-[0.98]"
                    >
                      {isBenchmarking ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>Testing AI Speed in Real Time...</span>
                        </>
                      ) : (
                        <>
                          <Play size={14} />
                          <span>Run Quick Speed Test</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: WHAT I BUILD */}
              {activeVisualTab === "matrix" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl theme-card-inner border flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg theme-surface border text-emerald-400">
                          <Cpu size={14} />
                        </span>
                        <div>
                          <p className="font-bold text-white">Image & Photo AI</p>
                          <p className="text-[11px] text-slate-400">Detecting objects, scanning eye photos, and analyzing pictures</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded theme-surface text-emerald-400 font-semibold border">
                        READY
                      </span>
                    </div>

                    <div className="p-3 rounded-xl theme-card-inner border flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg theme-surface border text-sky-400">
                          <Bot size={14} />
                        </span>
                        <div>
                          <p className="font-bold text-white">Smart Chatbots & Assistants</p>
                          <p className="text-[11px] text-slate-400">Friendly AI helpers that answer customer questions without making things up</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded theme-surface text-sky-400 font-semibold border">
                        READY
                      </span>
                    </div>

                    <div className="p-3 rounded-xl theme-card-inner border flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg theme-surface border text-amber-400">
                          <ShieldCheck size={14} />
                        </span>
                        <div>
                          <p className="font-bold text-white">Fraud & Security Protection</p>
                          <p className="text-[11px] text-slate-400">Spotting suspicious transactions in bank records to keep users safe</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded theme-surface text-emerald-400 font-semibold border">
                        READY
                      </span>
                    </div>

                    <div className="p-3 rounded-xl theme-card-inner border flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg theme-surface border text-indigo-400">
                          <Network size={14} />
                        </span>
                        <div>
                          <p className="font-bold text-white">Modern Websites & Web Apps</p>
                          <p className="text-[11px] text-slate-400">Clean, lightning-fast web applications that look great on phones and laptops</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded theme-surface text-emerald-400 font-semibold border">
                        READY
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Visualizer Footer Actions */}
              <div className="pt-3.5 border-t border-slate-700/50 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>All 4 steps working together smoothly</span>
                </span>

                <button
                  onClick={onOpenAssistant}
                  className="inline-flex items-center gap-1.5 theme-text-accent hover:opacity-80 font-semibold transition-colors cursor-pointer"
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

