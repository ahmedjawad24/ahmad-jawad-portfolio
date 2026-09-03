"use client";

import { useState } from "react";
import { Bot, Palette, Sparkles, Cpu, Layers } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectModal from "@/components/ProjectModal";
import SkillsGrid from "@/components/SkillsGrid";
import Philosophy from "@/components/Philosophy";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ResumeModal from "@/components/ResumeModal";
import ChatAssistant from "@/components/ChatAssistant";
import Footer from "@/components/Footer";
import { Project } from "@/data/portfolioData";

export default function Home() {
  const { currentTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantPrompt, setAssistantPrompt] = useState<string>("");
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleAskAboutProject = (project: Project) => {
    setSelectedProject(null);
    setAssistantPrompt(`Tell me about Ahmad's ${project.title} project and its architecture.`);
    setAssistantOpen(true);
  };

  const handleOpenAssistant = (initialPrompt?: string) => {
    if (initialPrompt) {
      setAssistantPrompt(initialPrompt);
    }
    setAssistantOpen(true);
  };

  const isLight = currentTheme === "clean-light";

  return (
    <div className="min-h-screen text-slate-100 flex flex-col relative font-sans">
      {/* Universal Background ambient subtle atmosphere with responsive glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-ambient bg-grid-subtle opacity-90 transition-opacity" />

      {/* Light Mode Specific High-Energy Visual Elements (Rendered ONLY in Clean Light Mode) */}
      {isLight && (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Top-Left Vibrant Emerald Glow Halo */}
          <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-400/35 via-teal-300/20 to-transparent blur-3xl" />
          
          {/* Top-Right Electric Cyan / Sky Glow Halo */}
          <div className="absolute top-12 -right-24 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-sky-400/35 via-cyan-300/20 to-transparent blur-3xl" />
          
          {/* Middle Floating Indigo Accent Halo */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-400/20 via-sky-300/20 to-transparent blur-3xl" />

          {/* Bottom-Left Solar Warm Gold Accent Halo */}
          <div className="absolute top-2/3 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-amber-400/25 via-emerald-300/20 to-transparent blur-3xl" />
          
          {/* Bottom-Right Electric Sky Glow Halo */}
          <div className="absolute bottom-10 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-teal-400/30 via-sky-400/20 to-transparent blur-3xl" />

          {/* Modern Architectural Geometric SVG Wireframe Watermark */}
          <svg className="absolute top-40 right-10 w-96 h-96 opacity-25 text-slate-900" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.8" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          </svg>

          {/* Lower Left Geometric SVG Wireframe Watermark */}
          <svg className="absolute top-2/3 left-8 w-80 h-80 opacity-20 text-slate-900" viewBox="0 0 200 200" fill="none">
            <polygon points="100,20 180,160 20,160" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="100" cy="105" r="45" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        onOpenAssistant={() => handleOpenAssistant()}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01 / Hero Section */}
        <Hero
          onOpenAssistant={() => handleOpenAssistant()}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 02 / Projects & Systems Showcase */}
        <ProjectShowcase
          onSelectProject={(project) => setSelectedProject(project)}
          onAskAboutProject={handleAskAboutProject}
        />

        {/* 03 / Technical Competencies */}
        <SkillsGrid />

        {/* 04 / Engineering Principles */}
        <Philosophy />

        {/* 05 / About Me & Background */}
        <AboutSection
          onOpenResume={() => setResumeOpen(true)}
          onOpenAssistant={() => handleOpenAssistant()}
        />

        {/* 06 / Direct Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Guide Button */}
      {!assistantOpen && (
        <button
          onClick={() => handleOpenAssistant()}
          className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold theme-btn-primary shadow-2xl transition-all active:scale-95 group border border-white/20"
          aria-label="Open AI Portfolio Assistant"
        >
          <Bot size={16} />
          <span>Ask AI Assistant</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-950 status-dot" />
        </button>
      )}

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onAskAboutProject={handleAskAboutProject}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ChatAssistant
        isOpen={assistantOpen}
        onClose={() => {
          setAssistantOpen(false);
          setAssistantPrompt("");
        }}
        initialPrompt={assistantPrompt}
      />
    </div>
  );
}
