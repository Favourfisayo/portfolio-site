"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative">
      <div className="flex items-center gap-1 rounded-full ring-1 ring-black/10 dark:ring-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-1 py-1">
        <button
          aria-label="Use light theme"
          onClick={() => setTheme("light")}
          className={`p-2 rounded-full transition-colors ${current === "light" ? "bg-white text-yellow-500 shadow-sm" : "text-neutral-600 dark:text-neutral-300 hover:bg-white/60 dark:hover:bg-neutral-800"}`}
        >
          <Sun size={16} />
        </button>
        <button
          aria-label="Use system theme"
          onClick={() => setTheme("system")}
          className={`p-2 rounded-full transition-colors ${theme === "system" ? "bg-white text-blue-600 shadow-sm" : "text-neutral-600 dark:text-neutral-300 hover:bg-white/60 dark:hover:bg-neutral-800"}`}
        >
          <Laptop size={16} />
        </button>
        <button
          aria-label="Use dark theme"
          onClick={() => setTheme("dark")}
          className={`p-2 rounded-full transition-colors ${current === "dark" && theme !== "system" ? "bg-white text-purple-600 shadow-sm" : "text-neutral-600 dark:text-neutral-300 hover:bg-white/60 dark:hover:bg-neutral-800"}`}
        >
          <Moon size={16} />
        </button>
      </div>
    </div>
  );
}


