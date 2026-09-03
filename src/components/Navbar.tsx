"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ThemeSelector from "./ThemeSelector";
import TechLogoAJ from "./TechLogoAJ";

interface NavbarProps {
  onOpenAssistant: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenAssistant, onOpenResume }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["contact", "about", "philosophy", "skills", "projects"];
      const scrollPosition = window.scrollY + 220;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.1, x: 0.8 },
      colors: ["#10b981", "#38bdf8", "#f8fafc"],
    });
    setTimeout(() => setCopied(false), 2200);
  };

  const navLinks = [
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "SKILLS", href: "#skills", id: "skills" },
    { label: "VALUES & VISION", href: "#philosophy", id: "philosophy" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full theme-surface-glass border-b transition-all backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <a href="#top" className="flex items-center gap-3 group shrink-0">
          <TechLogoAJ size="md" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100 text-sm sm:text-base tracking-tight group-hover:theme-text-accent transition-colors">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block leading-none mt-0.5">
              Applied AI & ML Engineer
            </p>
          </div>
        </a>

        {/* Center: Clean Navigation Links with Active State Highlighting */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3 text-xs sm:text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`py-1.5 px-3 rounded-xl transition-all duration-200 relative group flex items-center gap-1.5 ${
                  isActive
                    ? "theme-card-inner theme-text-accent font-semibold shadow-sm border border-[var(--accent-primary)]/30"
                    : "hover:theme-text-accent hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Minimal, Balanced Toolbar */}
        <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 shrink-0">
          {/* Live Theme / Color Combo Selector */}
          <ThemeSelector />

          {/* CV / Resume Summary */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 theme-surface theme-surface-hover border transition-all cursor-pointer"
            title="View Resume Summary"
          >
            <FileText size={13} className="theme-text-secondary-accent" />
            <span>CV</span>
          </button>

          {/* AI Guide CTA */}
          <button
            onClick={onOpenAssistant}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold theme-btn-primary transition-all shadow-md cursor-pointer"
          >
            <Bot size={13} />
            <span>AI Guide</span>
          </button>

          {/* Divider */}
          <div className="h-4 w-[1px] bg-slate-700/50 mx-0.5" />

          {/* Social Links */}
          <div className="flex items-center gap-1">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white theme-surface-hover rounded-xl transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:theme-text-accent theme-surface-hover rounded-xl transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Compact Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSelector compact />

          <button
            onClick={onOpenAssistant}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold theme-btn-primary"
            aria-label="Open AI Assistant"
          >
            <Bot size={13} />
            <span>AI</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white theme-surface rounded-xl border cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b theme-surface px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:theme-card-inner hover:theme-text-accent rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-700/50 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 theme-card-inner border"
            >
              <FileText size={14} className="theme-text-secondary-accent" />
              <span>Summary CV</span>
            </button>

            <button
              onClick={() => {
                handleCopyEmail();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold theme-badge-primary"
            >
              {copied ? <Check size={14} /> : <Mail size={14} />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-5 pt-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white flex items-center gap-1.5 text-xs"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:theme-text-accent flex items-center gap-1.5 text-xs"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
