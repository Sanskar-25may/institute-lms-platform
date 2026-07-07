"use client";

import { useTheme } from "@/lib/ThemeContext";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
        isDark
          ? "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-amber-300"
          : "bg-violet-100 border border-violet-200 hover:bg-violet-200 text-violet-700"
      } ${className}`}
    >
      {/* Dark → show Sun icon */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
        }`}
      >
        {/* Sun */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      </span>

      {/* Light → show Moon icon */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          !isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
        }`}
      >
        {/* Moon */}
        <svg className="w-4.5 h-4.5 w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </span>
    </button>
  );
}
