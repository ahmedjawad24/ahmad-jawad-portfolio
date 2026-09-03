"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Cpu,
  Github,
  Lock,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onAskAboutProject: (project: Project) => void;
}

export default function ProjectModal({
  project,
  onClose,
  onAskAboutProject,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto theme-surface border shadow-2xl rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Image Banner */}
        {project.imageUrl && (
          <div className="relative h-48 sm:h-56 w-full theme-card-inner">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-95" />
            
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full theme-card-inner text-slate-300 hover:text-white border backdrop-blur-md transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Badges on Top Image */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center gap-2">
              <span className="text-xs font-semibold theme-badge-primary backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                {project.category}
              </span>
              {project.private ? (
                <span className="text-xs font-semibold text-amber-300 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 shadow-sm flex items-center gap-1">
                  <Lock size={11} /> Case Study
                </span>
              ) : (
                <span className="text-xs font-semibold theme-badge-secondary backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                  {project.signal}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-700/50 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{project.subtitle}</p>
            </div>

            {!project.imageUrl && (
              <button
                onClick={onClose}
                className="p-2 rounded-xl theme-card-inner text-slate-300 hover:text-white border transition-all"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* What this does */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider theme-text-accent flex items-center gap-1.5">
              <Zap size={14} /> What this project does
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl theme-card-inner border">
            {project.keyMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-xs text-slate-400">{metric.label}</div>
                <div className="text-sm sm:text-base font-bold text-white mt-1">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* How it was built */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider theme-text-secondary-accent flex items-center gap-1.5">
              <Cpu size={14} /> How it was built & key features
            </h4>
            <div className="space-y-2">
              {project.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-slate-300 p-3 rounded-xl theme-card-inner border"
                >
                  <CheckCircle2 size={16} className="theme-text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies used */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-200 theme-card-inner border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-700/50 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {!project.private && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold theme-btn-primary transition-all shadow-md active:scale-95"
                >
                  <Github size={15} />
                  <span>View Repository on GitHub</span>
                </a>
              )}
            </div>

            <button
              onClick={() => onAskAboutProject(project)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold theme-badge-primary hover:opacity-90 transition-all cursor-pointer"
            >
              <Bot size={15} />
              <span>Ask AI Guide About This</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
