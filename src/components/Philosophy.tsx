"use client";

import Image from "next/image";
import {
  CheckCircle2,
  Code2,
  GitBranch,
  MessageSquare,
  Shield,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { METHODOLOGIES } from "@/data/portfolioData";

export default function Philosophy() {
  const icons = [
    <Sparkles key="0" size={18} className="theme-text-accent" />,
    <CheckCircle2 key="1" size={18} className="theme-text-secondary-accent" />,
    <Shield key="2" size={18} className="theme-text-accent" />,
    <Zap key="3" size={18} className="theme-text-secondary-accent" />,
  ];

  const collaborationPoints = [
    {
      icon: <Users size={16} className="theme-text-accent" />,
      title: "Active Team Collaboration",
      desc: "Regular syncs, pair programming, and cross-functional alignment with designers and product managers.",
    },
    {
      icon: <GitBranch size={16} className="theme-text-secondary-accent" />,
      title: "Clean Code & Thorough Reviews",
      desc: "Detailed pull requests, clear documentation, and test-driven development to ensure high reliability.",
    },
    {
      icon: <Workflow size={16} className="theme-text-accent" />,
      title: "Fast Iteration to Production",
      desc: "Rapid prototyping that transforms theoretical models into user-facing web tools in record time.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-b border-slate-800/80 relative" id="philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold theme-badge-primary mb-2.5">
            <span>04</span>
            <span className="opacity-50">/</span>
            <span>Values & Vision</span>
          </div>
          <h2 className="section-header-title text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Purpose-Driven Engineering & Team Standards.
          </h2>
          <p className="section-header-desc text-slate-300 text-sm sm:text-base max-w-2xl mt-1.5 leading-relaxed">
            Creating sustainable, high-impact AI products through transparent communication, rigorous standards, and continuous iteration.
          </p>
        </div>

        {/* Methodology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {METHODOLOGIES.map((item, index) => {
            return (
              <div
                key={item.number}
                className="theme-surface p-6 border flex flex-col justify-between hover:border-[var(--border-highlight)] transition-all rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold theme-text-accent theme-card-inner px-2.5 py-1 rounded-lg border">
                      {item.number}
                    </span>
                    <div className="p-2 rounded-xl theme-card-inner border">
                      {icons[index % icons.length]}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Work Culture & Team Collaboration Showcase */}
        <div className="theme-surface-glass border rounded-2xl overflow-hidden p-6 sm:p-8 shadow-xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Collaboration Philosophy & Execution */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold theme-badge-secondary">
                <Users size={13} />
                <span>Collaborative Engineering & Agile Culture</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Thriving in Collaborative Teams & Fast-Paced Environments.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Great software is never built in a silo. I prioritize transparent communication, clean architectural diagrams, and continuous feedback loops with teammates and stakeholders to turn complex AI research into intuitive products.
              </p>

              <div className="space-y-3 pt-2">
                {collaborationPoints.map((point) => (
                  <div
                    key={point.title}
                    className="flex items-start gap-3 p-3.5 rounded-xl theme-card-inner border"
                  >
                    <div className="p-2 rounded-xl theme-surface border shrink-0 mt-0.5">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {point.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Workspace & Team Discussion Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Image 1: Modern Tech Team Collaboration */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-700/80 group">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Diverse engineering team of women and men collaborating on architecture in a modern workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card-inner)] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-md theme-card-inner border backdrop-blur-md inline-block shadow-sm">
                    Team Sprints & Brainstorming
                  </span>
                </div>
              </div>

              {/* Image 2: Modern Workstation & Code Crafting */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-700/80 group">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Modern clean workstation with code and development tools"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card-inner)] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-semibold theme-text-accent px-2.5 py-1 rounded-md theme-card-inner border backdrop-blur-md inline-block shadow-sm">
                    Focused Execution & Prototyping
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
