"use client";

import { BrainCircuit, Cpu, Database, Layers, Sparkles, Terminal } from "lucide-react";
import { SKILLS } from "@/data/portfolioData";

export default function SkillsGrid() {
  const categoryIcons = [
    <BrainCircuit key="0" size={18} className="theme-text-accent" />,
    <Sparkles key="1" size={18} className="theme-text-secondary-accent" />,
    <Database key="2" size={18} className="theme-text-accent" />,
    <Terminal key="3" size={18} className="theme-text-secondary-accent" />,
  ];

  return (
    <section className="py-16 sm:py-20 border-b border-slate-800/80" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold theme-badge-secondary mb-3">
            <span className="w-2 h-2 rounded-full bg-current status-dot" />
            <span>Skills & Tools</span>
          </div>
          <h2 className="section-header-title text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            Core Skills & Modern Technologies.
          </h2>
          <p className="section-header-desc text-slate-300 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
            Technologies I use daily to build machine learning models, smart assistants, cloud backends, and responsive web applications.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((categoryGroup, index) => {
            return (
              <div
                key={categoryGroup.category}
                className="theme-surface p-6 sm:p-7 border space-y-5 rounded-2xl shadow-sm"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-700/50 pb-4">
                  <div className="p-2 rounded-xl theme-card-inner border">
                    {categoryIcons[index % categoryIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {categoryGroup.category}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {categoryGroup.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {categoryGroup.items.map((skill) => {
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2.5 p-3 rounded-xl theme-card-inner border hover:border-slate-500 hover:scale-[1.01] transition-all group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
