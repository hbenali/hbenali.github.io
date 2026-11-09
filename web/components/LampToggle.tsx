"use client";

import { useEffect, useState } from "react";

const KEY = "theme";

type Theme = "light" | "dark";

const systemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

// Pull-cord lamp: lamp on = light theme, lamp off = dark theme. The choice is stored,
// and until it is made the page follows the system setting (see the head script in shell.tsx).
export function LampToggle({ labels }: { labels: { light: string; dark: string } }) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [pulls, setPulls] = useState(0);

  useEffect(() => {
    const read = () => {
      const set = document.documentElement.dataset.theme;
      setTheme(set === "light" || set === "dark" ? set : systemTheme());
    };
    read();
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // storage blocked: the choice lasts for this page only
    }
    setPulls((n) => n + 1);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !document.startViewTransition) {
      apply();
      return;
    }
    const root = document.documentElement;
    root.classList.add("theme-vt");
    document.startViewTransition(apply).finished.finally(() => root.classList.remove("theme-vt"));
  };

  const on = theme === "light";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={on ? labels.dark : labels.light}
      data-on={theme === null ? undefined : on}
      className="lamp relative block h-9 w-11 shrink-0"
    >
      <svg
        aria-hidden
        viewBox="0 0 44 84"
        className="pointer-events-none absolute -top-2 left-0 z-10 h-[5.25rem] w-11 overflow-visible sm:-top-3"
      >
        <defs>
          <linearGradient id="lamp-cone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--c-sodium)" stopOpacity="0.38" />
            <stop offset="1" stopColor="var(--c-sodium)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* key restarts the one-shot swing and pull each time the cord is used */}
        <g key={pulls} className={pulls ? "lamp-swing" : undefined}>
          <polygon className="lamp-cone" points="13,38 31,38 42,80 2,80" fill="url(#lamp-cone)" />
          <line x1="22" y1="0" x2="22" y2="14" stroke="var(--c-mist)" strokeWidth="1.2" />
          <circle className="lamp-halo" cx="22" cy="36" r="13" fill="var(--c-sodium)" />
          <path
            d="M10 32 C10 20 15 14 22 14 C29 14 34 20 34 32 Z"
            fill="var(--c-slate)"
            stroke="var(--c-bone)"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle className="lamp-bulb" cx="22" cy="36" r="4.5" />
          <g className={pulls ? "lamp-pull" : undefined}>
            <line x1="33" y1="31" x2="33" y2="58" stroke="var(--c-mist)" strokeWidth="1" />
            <circle cx="33" cy="60" r="2.6" fill="var(--c-sodium)" />
          </g>
        </g>
      </svg>
    </button>
  );
}
