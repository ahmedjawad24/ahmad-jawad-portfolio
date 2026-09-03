"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Eye,
  Github,
  Lock,
  Search,
  Sparkles,
} from "lucide-react";
import { Project, PROJECTS } from "@/data/portfolioData";

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
  onAskAboutProject: (project: Project) => void;
}

export default function ProjectShowcase({
  onSelectProject,
  onAskAboutProject,
}: ProjectShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { label: "All", count: PROJECTS.length },
    {
      label: "AI Assistants & Agents",
      count: PROJECTS.filter((p) => p.category === "AI Assistants & Agents").length,
    },
    {
      label: "Computer Vision",
      count: PROJECTS.filter((p) => p.category === "Computer Vision").length,
    },
    {
      label: "Fraud & Detection",
      count: PROJECTS.filter((p) => p.category === "Fraud & Detection").length,
    },
    {
      label: "Data Analytics",
      count: PROJECTS.filter((p) => p.category === "Data Analytics").length,
    },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        project.signal.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-16 sm:py-20 border-b border-slate-800/80 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold theme-badge-primary mb-2.5">
              <span>02</span>
              <span className="opacity-50">/</span>
              <span>Selected Projects</span>
            </div>
            <h2 className="section-header-title text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Practical Software & AI Applications.
            </h2>
            <p className="section-header-desc text-slate-300 text-sm sm:text-base max-w-2xl mt-1.5 leading-relaxed">
              Explore hands-on applications built for real-world scenarios—from healthcare screening and fraud protection to helpful AI assistants and data analytics.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-80 relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, skill, or project name..."
              className="w-full pl-10 pr-12 py-2.5 rounded-xl theme-card-inner border text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[var(--border-highlight)] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? "theme-btn-primary border-transparent shadow-md"
                    : "theme-surface text-slate-300 hover:text-white border"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.2 rounded-full font-bold ${
                    isActive
                      ? "bg-slate-950/40 text-current"
                      : "theme-card-inner text-slate-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="theme-surface p-12 text-center border my-8 rounded-2xl">
            <p className="text-white font-medium text-base">No projects match your current search.</p>
            <p className="text-sm text-slate-400 mt-1">
              Try clearing your search query or choosing another category above.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold theme-btn-primary"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="theme-surface theme-surface-hover border flex flex-col justify-between group overflow-hidden rounded-2xl"
                >
                  {/* Card Top: Image Banner */}
                  <div>
                    {project.imageUrl && (
                      <div className="relative h-44 w-full overflow-hidden theme-card-inner">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-95" />
                        
                        {/* Badges on Image */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold theme-badge-primary backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            {project.category}
                          </span>
                          {project.private ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium text-amber-300 bg-slate-950/80 backdrop-blur-md border border-amber-500/40 shadow-sm">
                              <Lock size={11} /> Case Study
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium theme-badge-secondary backdrop-blur-md shadow-sm">
                              {project.signal}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="p-5 sm:p-6 pb-2">
                      {/* Title and Subtitle */}
                      <h3 className="text-lg font-bold text-white group-hover:theme-text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {project.subtitle}
                      </p>

                      {/* Clear Description */}
                      <p className="text-sm text-slate-300 mt-3 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="mt-4 pt-3 border-t border-slate-700/50 grid grid-cols-2 gap-2">
                        {project.keyMetrics.slice(0, 2).map((metric) => (
                          <div key={metric.label} className="theme-card-inner p-2.5 rounded-xl border">
                            <div className="text-[11px] text-slate-400">{metric.label}</div>
                            <div className="text-xs font-bold text-white mt-0.5">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Tech Tags & Direct Actions */}
                  <div className="p-5 sm:p-6 pt-0 mt-3 space-y-3.5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-700/50">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-xs text-slate-300 theme-card-inner border"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md text-xs text-slate-400 theme-card-inner">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 theme-surface theme-surface-hover border transition-all"
                      >
                        <Eye size={14} className="text-slate-400" />
                        <span>Project Overview</span>
                      </button>

                      {project.private ? (
                        <button
                          onClick={() => onAskAboutProject(project)}
                          className="p-2 rounded-xl text-xs font-medium theme-badge-primary transition-all"
                          title="Ask AI Assistant about this project"
                        >
                          <Bot size={16} />
                        </button>
                      ) : (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl text-xs font-medium text-slate-300 theme-surface hover:theme-text-accent border transition-all"
                          title="View on GitHub"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
