"use client";

import { useState, useRef, useEffect } from "react";
import { Palette, Check, Sparkles, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme, ThemeName, THEME_OPTIONS } from "@/context/ThemeContext";

interface ThemeSelectorProps {
  compact?: boolean;
}

export default function ThemeSelector({ compact = false }: ThemeSelectorProps) {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeThemeObj = themes.find((t) => t.id === currentTheme) || themes[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold theme-surface theme-surface-hover transition-all text-slate-200 border cursor-pointer"
        title="Change Color Theme / Atmosphere"
        aria-label="Change color theme"
      >
        <div className="flex items-center -space-x-1">
          <span
            className="w-2.5 h-2.5 rounded-full ring-1 ring-slate-900 shadow-sm"
            style={{ backgroundColor: activeThemeObj.palettePreview.accent }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full ring-1 ring-slate-900 shadow-sm"
            style={{ backgroundColor: activeThemeObj.palettePreview.secondary }}
          />
        </div>
        
        <span className="hidden sm:inline-flex items-center gap-1">
          {activeThemeObj.isLight ? <Sun size={12} className="text-amber-500" /> : <Moon size={12} className="theme-text-secondary-accent" />}
          <span>{compact ? activeThemeObj.shortName : activeThemeObj.shortName}</span>
        </span>
        
        <ChevronDown
          size={13}
          className={`text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 p-2 rounded-2xl theme-surface-glass border shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
          <div className="px-3 py-2 border-b border-slate-700/50 mb-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
              <Palette size={14} className="theme-text-accent" />
              <span>Theme & Atmosphere</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400">
              Instant Switch
            </span>
          </div>

          <div className="space-y-1">
            {themes.map((theme) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between group border cursor-pointer ${
                    isSelected
                      ? "theme-card-inner border-slate-600 shadow-md"
                      : "hover:bg-slate-800/60 border-transparent text-slate-300 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Palette Circle Pair */}
                    <div className="flex items-center -space-x-1.5 shrink-0">
                      <span
                        className="w-4 h-4 rounded-full ring-2 ring-slate-900 shadow-sm"
                        style={{ backgroundColor: theme.palettePreview.bg }}
                      />
                      <span
                        className="w-4 h-4 rounded-full ring-2 ring-slate-900 shadow-sm"
                        style={{ backgroundColor: theme.palettePreview.card }}
                      />
                      <span
                        className="w-4 h-4 rounded-full ring-2 ring-slate-900 shadow-sm"
                        style={{ backgroundColor: theme.palettePreview.accent }}
                      />
                    </div>

                    <div>
                      <div className="font-bold flex items-center gap-1.5 text-slate-100">
                        {theme.isLight ? <Sun size={13} className="text-amber-500" /> : <Moon size={13} className="theme-text-secondary-accent" />}
                        <span>{theme.name}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        {theme.description}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-5 h-5 rounded-full theme-btn-primary flex items-center justify-center shrink-0 ml-2">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
