"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { SERVICES } from "@/data/portfolioData";

interface TechItem {
  name: string;
  category: string;
  desc: string;
}

const CORE_TECH: TechItem[] = [
  { name: "Python", category: "AI / ML", desc: "Core ML, NumPy & Scikit-Learn" },
  { name: "PyTorch", category: "Deep Learning", desc: "Model Training & Custom Architectures" },
  { name: "OpenCV", category: "Vision", desc: "Image Processing & Video Pipelines" },
  { name: "Next.js & React", category: "Frontend", desc: "Modern App Router & Interactive UI" },
  { name: "TypeScript", category: "Full-Stack", desc: "Strict Type Safety & Enterprise Code" },
  { name: "FastAPI", category: "Backend", desc: "High-Performance Asynchronous APIs" },
  { name: "Google Gemini", category: "LLM / RAG", desc: "Multimodal AI, Embeddings & Agents" },
  { name: "Docker", category: "DevOps", desc: "Containerized & Cloud Deployments" },
  { name: "PostgreSQL", category: "Database", desc: "Relational Schemas & Vector Storage" },
  { name: "Tailwind CSS", category: "UI / UX", desc: "Modern, Adaptive Design Systems" },
];

export default function ServicesSection() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("custom-ai-vision");

  const serviceIcons: Record<string, React.ReactNode> = {
    "custom-ai-vision": <Cpu size={20} className="theme-text-accent" />,
    "smart-assistants-rag": <Bot size={20} className="theme-text-secondary-accent" />,
    "fullstack-ai-apps": <Layers size={20} className="theme-text-accent" />,
    "ai-audit-optimization": <Zap size={20} className="theme-text-secondary-accent" />,
  };

  return (
    <section className="py-16 sm:py-20 border-b border-slate-800/80 relative" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold theme-badge-primary mb-2.5">
            <span className="w-2 h-2 rounded-full bg-current status-dot" />
            <span>Services & Capabilities</span>
          </div>
          <h2 className="section-header-title text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            Services & Expertise
          </h2>
          <p className="section-header-desc text-slate-300 text-sm sm:text-base max-w-2xl mt-1.5 leading-relaxed">
            Practical AI engineering, custom computer vision models, and full-stack software built for production reliability.
          </p>
        </div>

        {/* 4 Primary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`theme-surface p-6 sm:p-7 border rounded-2xl transition-all relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "border-[var(--accent-primary)] shadow-md shadow-[var(--accent-primary)]/10"
                    : "hover:border-slate-500"
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl theme-card-inner border">
                        {serviceIcons[service.id] || <Sparkles size={20} className="theme-text-accent" />}
                      </div>
                      <span className="text-xs font-mono font-bold theme-text-accent theme-card-inner px-2 py-0.5 rounded-md border">
                        {service.number}
                      </span>
                    </div>

                    <span className="text-[11px] font-semibold theme-badge-secondary px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-1.5 mb-4">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Deliverables:
                    </p>
                    <ul className="space-y-1">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2
                            size={13}
                            className="theme-text-accent shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Footer & Action */}
                <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between gap-3 text-xs">
                  <div className="text-slate-400 truncate">
                    <span className="font-semibold text-slate-300">Ideal for: </span>
                    <span>{service.idealFor}</span>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-semibold theme-text-accent hover:underline shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <span>Discuss</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Production Stack Integrated into Services & Expertise */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase theme-text-accent mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot" />
                <span>Core Production Stack</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                The core frameworks, libraries, and infrastructure powering these service deliverables.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 font-medium hidden sm:inline">
              Deployed in Real-World Systems
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CORE_TECH.map((tech) => (
              <div
                key={tech.name}
                className="theme-card-inner border rounded-xl p-3 sm:p-3.5 transition-all hover:border-[var(--accent-primary)] group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-bold text-white group-hover:theme-text-accent transition-colors truncate">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono theme-badge-secondary px-1.5 py-0.5 rounded shrink-0">
                    {tech.category}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 leading-snug">
                  {tech.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
