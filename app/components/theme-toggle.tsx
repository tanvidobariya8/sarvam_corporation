"use client";

import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  function toggleTheme() {
    const theme = getCurrentTheme();
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      title="Light / dark theme"
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-orange-100 bg-white text-orange-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 dark:border-slate-700 dark:bg-slate-900 dark:text-orange-200 dark:hover:border-orange-500 dark:hover:bg-slate-800"
    >
      <Moon aria-hidden="true" className="size-5 dark:hidden" strokeWidth={2.2} />
      <Sun aria-hidden="true" className="hidden size-5 dark:block" strokeWidth={2.2} />
    </button>
  );
}
