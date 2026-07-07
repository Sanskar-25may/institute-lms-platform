"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // On mount, read from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("aushutosh-theme") as Theme | null;
    if (stored === "dark" || stored === "light") {
      applyTheme(stored);
      setThemeState(stored);
    } else {
      // Default to dark for tech-forward feel
      applyTheme("dark");
      setThemeState("dark");
    }
    setMounted(true);
  }, []);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", t);
    // Add transition class, then remove after transition completes
    root.classList.add("theme-transition");
    setTimeout(() => root.classList.remove("theme-transition"), 350);
  };

  const setTheme = useCallback((t: Theme) => {
    applyTheme(t);
    setThemeState(t);
    localStorage.setItem("aushutosh-theme", t);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Prevent hydration mismatch — render nothing until mounted
  if (!mounted) {
    return (
      <div data-theme="dark" style={{ visibility: "hidden" }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
