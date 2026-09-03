"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderCompany, setSenderCompany] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [inquiryType, setInquiryType] = useState("Full-Time Role");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.8, x: 0.3 },
      colors: ["#00f0ff", "#38bdf8", "#f8fafc"],
    });
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiryType}] Connecting with Ahmad Jawad - ${senderName || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Hi Ahmad,\n\n${senderMessage || "I explored your portfolio and would like to connect with you regarding potential opportunities or projects."}\n\nBest regards,\n${senderName || "Name"} (${senderCompany || "Organization/Team"})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 sm:py-20 border-b border-slate-800/80 relative overflow-hidden" id="contact">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Modern open architectural office background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-10 filter blur-[2px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ambient" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-main)] opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold theme-badge-primary mb-2.5">
                <span>06</span>
                <span className="opacity-50">/</span>
                <span>Get in Touch</span>
              </div>
              <h2 className="section-header-title text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Let&apos;s Build Something Great Together.
              </h2>
              <p className="section-header-desc text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                Whether you have an engineering role opening, a project to build, or just want to connect, feel free to reach out anytime.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              
              {/* Email Card */}
              <div className="theme-surface p-4 border flex flex-col justify-between space-y-3 group backdrop-blur-md rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <Mail size={15} className="theme-text-accent" /> Email Address
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-medium theme-text-accent hover:opacity-80 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-slate-100 group-hover:theme-text-accent transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="theme-surface p-4 border flex flex-col justify-between space-y-3 group backdrop-blur-md rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <Phone size={15} className="theme-text-secondary-accent" /> Phone / WhatsApp
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="text-xs font-medium theme-text-secondary-accent hover:opacity-80 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedPhone ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedPhone ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-semibold text-slate-100 group-hover:theme-text-secondary-accent transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* GitHub Card */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="theme-surface p-4 border hover:border-[var(--border-highlight)] transition-all flex items-center justify-between group backdrop-blur-md rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl theme-card-inner border text-slate-200">
                    <Github size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">GitHub Profile</div>
                    <div className="text-sm font-semibold text-white group-hover:theme-text-accent transition-colors">
                      github.com/ahmedjawad24
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:theme-text-accent transition-colors" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="theme-surface p-4 border hover:border-[var(--border-highlight)] transition-all flex items-center justify-between group backdrop-blur-md rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl theme-card-inner border text-slate-200">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-white group-hover:theme-text-secondary-accent transition-colors">
                      Ahmad Jawad
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:theme-text-secondary-accent transition-colors" />
              </a>

            </div>
          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="lg:col-span-6">
            <div className="theme-surface-glass p-6 sm:p-7 border space-y-4 backdrop-blur-xl rounded-2xl shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-3.5">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="theme-text-accent" />
                  <h3 className="text-base font-bold text-white">
                    Send a Quick Message
                  </h3>
                </div>
                <span className="text-xs text-slate-400">Opens your email app</span>
              </div>

              <form onSubmit={handleSendMail} className="space-y-3.5">
                {/* Inquiry Type Chips */}
                <div>
                  <label className="block text-xs text-slate-300 font-medium mb-1.5">
                    What would you like to discuss?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Full-Time Role", "Freelance / Project", "Just Saying Hi!"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`py-2 px-2 rounded-xl text-xs transition-all text-center border font-semibold ${
                          inquiryType === type
                            ? "theme-btn-primary border-transparent shadow-sm"
                            : "theme-card-inner text-slate-300 border hover:border-slate-500"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl theme-card-inner border text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[var(--border-highlight)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={senderCompany}
                      onChange={(e) => setSenderCompany(e.target.value)}
                      placeholder="e.g. Acme Tech"
                      className="w-full px-3.5 py-2.5 rounded-xl theme-card-inner border text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[var(--border-highlight)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={3}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Tell me a bit about your idea, role, or project..."
                    className="w-full px-3.5 py-2.5 rounded-xl theme-card-inner border text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[var(--border-highlight)] resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-sm font-bold theme-btn-primary transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  <span>Send Email to Ahmad</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
