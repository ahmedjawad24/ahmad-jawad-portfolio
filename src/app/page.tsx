"use client";

import { useState } from "react";
import { Bot, Palette } from "lucide-react";
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

  return (
    <div className="min-h-screen text-slate-100 flex flex-col relative font-sans">
      {/* Background ambient subtle atmosphere with responsive glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-ambient bg-grid-subtle opacity-60" />

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
