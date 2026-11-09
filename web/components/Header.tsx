"use client";

import { useEffect, useState } from "react";
import type { Content } from "@/lib/content";
import { rememberLang } from "./LangRedirect";
import { LampToggle } from "./LampToggle";

export function Header({ c }: { c: Content }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const targets = c.nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    const onTop = () => window.scrollY < 200 && setActive("");
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [c]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[110rem] flex-wrap items-center justify-between gap-x-6 px-6 py-2 sm:flex-nowrap sm:px-10 sm:py-3">
        <a href={c.path} aria-label={c.ui.home} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
        </a>

        <nav aria-label="Sections" className="order-last -mx-2 w-full overflow-x-auto [scrollbar-width:none] sm:order-none sm:w-auto sm:flex-none">
          <ul className="flex items-center gap-1 whitespace-nowrap sm:gap-3">
            {c.nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className="group relative block px-2 py-2 text-base text-mist transition-colors hover:text-bone aria-[current=true]:text-bone"
                >
                  {n.label}
                  <span
                    aria-hidden
                    className="absolute inset-x-2 bottom-1 h-px origin-left rtl:origin-right scale-x-0 bg-sodium transition-transform duration-500 ease-out group-aria-[current=true]:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <ul className="flex shrink-0 items-center gap-4">
            {c.alts.map((a) => (
              <li key={a.lang}>
                <a
                  href={a.path}
                  hrefLang={a.lang}
                  lang={a.lang}
                  onClick={() => rememberLang(a.lang)}
                  className="link text-base"
                >
                  {a.name}
                </a>
              </li>
            ))}
          </ul>
          <LampToggle labels={{ light: c.ui.light, dark: c.ui.dark }} />
        </div>
      </div>
    </header>
  );
}
