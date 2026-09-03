"use client";

import { useEffect } from "react";
import {
  ArrowDownToLine,
  CheckCircle2,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { PERSONAL_INFO, RESUME_DATA } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto theme-surface border shadow-2xl p-6 sm:p-8 space-y-6 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-700/50 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold theme-badge-primary px-2.5 py-0.5 rounded-full">
                Curriculum Vitae Brief
              </span>
              <span className="text-xs text-slate-400">v2.0</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-sm font-medium theme-text-accent mt-0.5">
              {PERSONAL_INFO.role}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl theme-card-inner text-slate-300 hover:text-white border transition-all"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 rounded-xl theme-card-inner border text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Mail size={14} className="theme-text-accent" />
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white truncate">
              {PERSONAL_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="theme-text-secondary-accent" />
            <span>{PERSONAL_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="theme-text-accent" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider theme-text-accent">
            Professional Summary
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed">
            {RESUME_DATA.executiveSummary}
          </p>
        </div>

        {/* Core Pillars */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider theme-text-secondary-accent">
            Core Engineering Pillars
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RESUME_DATA.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-4 rounded-xl theme-card-inner border space-y-1"
              >
                <div className="text-sm font-bold text-white">{pillar.title}</div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Education
          </h4>
          <div className="p-4 rounded-xl theme-card-inner border">
            <div className="text-sm font-bold text-white">
              {PERSONAL_INFO.education.degree}
            </div>
            <div className="text-xs theme-text-accent mt-0.5">
              {PERSONAL_INFO.education.institution}
            </div>
            <div className="text-xs text-slate-300 mt-1">
              {PERSONAL_INFO.education.focus}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Request for Full Official PDF Resume - Ahmad Jawad`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold theme-btn-primary transition-all shadow-md cursor-pointer"
          >
            <Mail size={14} />
            <span>Request Full PDF CV by Email</span>
          </a>

          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
