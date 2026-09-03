"use client";

import { ArrowUp, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 theme-surface py-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left info */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-lg theme-card-inner border flex items-center justify-center font-bold text-[10px] theme-text-accent">
            AJ
          </div>
          <span className="text-slate-300">© 2026 Ahmad Jawad · Applied AI & Software Engineer</span>
        </div>

        {/* Center telemetry */}
        <div className="flex items-center gap-2 text-slate-400 text-xs">
          <span className="w-2 h-2 rounded-full bg-current theme-text-accent status-dot" />
          <span>Available for Roles & Projects</span>
          <span className="text-slate-700">•</span>
          <span>Remote / Global</span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:theme-text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-slate-400 hover:theme-text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:theme-text-accent transition-colors p-1.5 rounded-lg theme-card-inner border cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
