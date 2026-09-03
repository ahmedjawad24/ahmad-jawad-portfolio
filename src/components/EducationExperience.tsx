"use client";

import Image from "next/image";
import { Award, BookOpen, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function EducationExperience() {
  return (
    <section className="py-16 sm:py-20 border-b border-slate-800/80 relative" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold theme-badge-secondary mb-2.5">
            <span>05</span>
            <span className="opacity-50">/</span>
            <span>Education & Background</span>
          </div>
          <h2 className="section-header-title text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Academic Background & Hands-on Focus.
          </h2>
          <p className="section-header-desc text-slate-300 text-sm sm:text-base max-w-2xl mt-1.5 leading-relaxed">
            Strong foundation in computer science combined with hands-on experience building real AI applications.
          </p>
        </div>

        {/* Education & Focus Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Institution Card */}
          <div className="lg:col-span-8 theme-surface p-6 sm:p-8 border space-y-5 rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/50 pb-5">
              <div>
                <span className="text-xs theme-text-accent font-semibold uppercase tracking-wider">
                  Degree Program
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {PERSONAL_INFO.education.degree}
                </h3>
                <p className="text-sm font-medium text-slate-300 mt-0.5">
                  {PERSONAL_INFO.education.institution}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold theme-badge-secondary">
                  PAF-IAST
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Focused on applied artificial intelligence, computer vision, data analysis, and modern web software. Built multiple hands-on projects including medical scan analyzers, fraud detection systems, and helpful AI chatbots with verification guardrails.
            </p>

            {/* Specialization Tracks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-xl theme-card-inner border">
                <span className="text-slate-400 block text-[11px]">Primary Focus</span>
                <span className="theme-text-accent font-semibold mt-1 block">Applied AI & Vision</span>
              </div>
              <div className="p-3.5 rounded-xl theme-card-inner border">
                <span className="text-slate-400 block text-[11px]">Deployment</span>
                <span className="theme-text-secondary-accent font-semibold mt-1 block">Fast APIs & Web Apps</span>
              </div>
              <div className="p-3.5 rounded-xl theme-card-inner border">
                <span className="text-slate-400 block text-[11px]">AI Safety</span>
                <span className="theme-text-accent font-semibold mt-1 block">Accuracy Verification</span>
              </div>
            </div>
          </div>

          {/* Opportunities / Visual Side Card */}
          <div className="lg:col-span-4 theme-surface border flex flex-col justify-between overflow-hidden rounded-2xl">
            {/* Visual Thumbnail */}
            <div className="relative h-36 w-full theme-card-inner">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="Modern collaborative workshop and engineering session"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-95" />
              <div className="absolute bottom-2.5 left-4 right-4">
                <span className="text-[11px] font-semibold theme-text-accent px-2.5 py-0.5 rounded-md theme-card-inner border backdrop-blur-sm">
                  Global Availability · Remote / Hybrid
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold theme-text-secondary-accent mb-1.5">
                  <Award size={15} /> Opportunities & Roles
                </div>
                <h4 className="text-base font-bold text-white">
                  Available for High-Impact Projects
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Looking for full-time engineering roles, consulting projects, or collaborations where practical AI and clean user experience matter.
                </p>
              </div>

              <div className="p-3 rounded-xl theme-badge-primary space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold">
                  <Sparkles size={13} /> Open for Collaboration
                </div>
                <p className="text-[11px] opacity-90 leading-relaxed">
                  Full-Time Engineering · AI & ML Applications · Web Development
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
