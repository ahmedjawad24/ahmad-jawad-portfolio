"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeName = "classic-emerald" | "clean-light" | "cyber-blue" | "solar-amber";

export interface ThemeOption {
  id: ThemeName;
  name: string;
  shortName: string;
  description: string;
  isLight?: boolean;
  palettePreview: {
    bg: string;
    card: string;
    accent: string;
    secondary: string;
  };
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "classic-emerald",
    name: "Classic Emerald & Slate (Default)",
    shortName: "Classic Emerald",
    description: "High-contrast dark obsidian with crisp emerald & cyan accents",
    isLight: false,
    palettePreview: {
      bg: "#020617",
      card: "#0f172a",
      accent: "#10b981",
      secondary: "#38bdf8",
    },
  },
  {
    id: "clean-light",
    name: "Clean Minimal Light Mode",
    shortName: "Clean Light",
    description: "Crisp white & soft slate with high-contrast text and vibrant accents",
    isLight: true,
    palettePreview: {
      bg: "#f8fafc",
      card: "#ffffff",
      accent: "#059669",
      secondary: "#0284c7",
    },
  },
  {
    id: "cyber-blue",
    name: "Cyber Midnight Blue",
    shortName: "Cyber Blue",
    description: "Deep oceanic navy with electric cyan & cobalt accents",
    isLight: false,
    palettePreview: {
      bg: "#030712",
      card: "#0b132b",
      accent: "#00f0ff",
      secondary: "#60a5fa",
    },
  },
  {
    id: "solar-amber",
    name: "Deep Space & Solar Gold",
    shortName: "Solar Gold",
    description: "Deep dark navy with high-visibility gold & sky blue",
    isLight: false,
    palettePreview: {
      bg: "#060913",
      card: "#0f172a",
      accent: "#fbbf24",
      secondary: "#38bdf8",
    },
  },
];

interface ThemeContextType {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "classic-emerald",
  setTheme: () => {},
  themes: THEME_OPTIONS,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentThemeState] = useState<ThemeName>("classic-emerald");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ahmad_portfolio_theme") as ThemeName;
      if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
        setCurrentThemeState(saved);
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        document.documentElement.setAttribute("data-theme", "classic-emerald");
      }
    } catch {
      document.documentElement.setAttribute("data-theme", "classic-emerald");
    }
  }, []);

  const setTheme = (theme: ThemeName) => {
    setCurrentThemeState(theme);
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("ahmad_portfolio_theme", theme);
    } catch {
      // ignore
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes: THEME_OPTIONS }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
