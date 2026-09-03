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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold theme-badge-secondary mb-2.5">
            <span>03</span>
            <span className="opacity-50">/</span>
            <span>Skills & Tools</span>
          </div>
          <h2 className="section-header-title text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Core Skills & Modern Technologies.
          </h2>
          <p className="section-header-desc text-slate-300 text-sm sm:text-base max-w-2xl mt-1.5 leading-relaxed">
            Technologies I use daily to build machine learning models, smart assistants, cloud backends, and responsive web applications.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((categoryGroup, index) => {
            return (
              <div
                key={categoryGroup.category}
                className="theme-surface p-6 sm:p-7 border space-y-5 rounded-2xl"
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
                    const isExpert = skill.level === "Expert";
                    const isAdvanced = skill.level === "Advanced";

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-xl theme-card-inner border hover:border-slate-500 transition-colors"
                      >
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                            isExpert
                              ? "theme-badge-primary"
                              : isAdvanced
                              ? "theme-badge-secondary"
                              : "theme-card-inner text-slate-300 border"
                          }`}
                        >
                          {skill.level}
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
