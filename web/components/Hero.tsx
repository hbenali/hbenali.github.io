"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { Content } from "@/lib/content";

// The hero's single orchestrated moment: the name rises out of its mask, then a
// release runs through the stages of the pipeline and ends signed.
export function Hero({ c }: { c: Content }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const cmd = el.querySelector<HTMLElement>("[data-cmd]")!;
      const caret = el.querySelector<HTMLElement>("[data-caret]")!;
      const rows = gsap.utils.toArray<HTMLElement>("[data-row]", el);
      const done = el.querySelector<HTMLElement>("[data-done]")!;

      if (reduced) {
        el.classList.remove("hero-pre");
        cmd.textContent = c.logCommand;
        caret.style.display = "none";
        return;
      }

      const typed = { n: 0 };
      cmd.textContent = "";
      gsap.set(rows, { autoAlpha: 0, y: 6 });
      gsap.set(done, { autoAlpha: 0, y: 6 });
      gsap.set("[data-line] > span", { yPercent: 108 });
      gsap.set("[data-fade]", { autoAlpha: 0, y: 14 });
      el.classList.remove("hero-pre");

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to("[data-line] > span", { yPercent: 0, duration: 1.15, stagger: 0.14 })
        .to("[data-fade]", { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .to(
          typed,
          {
            n: c.logCommand.length,
            duration: 0.9,
            ease: "none",
            onUpdate: () => {
              cmd.textContent = c.logCommand.slice(0, Math.round(typed.n));
            },
          },
          "-=0.2",
        );
      rows.forEach((row) => {
        tl.to(row, { autoAlpha: 1, y: 0, duration: 0.35 }, "+=0.28");
        const status = row.querySelector<HTMLElement>("[data-status]");
        if (status) tl.to(status, { autoAlpha: 1, duration: 0.2 }, "+=0.35");
      });
      tl.to(done, { autoAlpha: 1, y: 0, duration: 0.5 }, "+=0.3").to(
        caret,
        { autoAlpha: 0, duration: 0.2 },
        "<",
      );
      rows.forEach((row) => {
        const status = row.querySelector<HTMLElement>("[data-status]");
        if (status) gsap.set(status, { autoAlpha: 0 });
      });
    }, el);
    return () => ctx.revert();
  }, [c]);

  return (
    <section
      ref={root}
      className="hero-pre relative isolate overflow-hidden pt-28 pb-24 lg:pt-32"
      aria-labelledby="top-title"
    >
      <noscript>
        <style>{`.hero-pre [data-line] > span, .hero-pre [data-fade], .hero-pre [data-row], .hero-pre [data-done]{visibility:visible!important;transform:none!important}`}</style>
      </noscript>
      <style>{`.hero-pre [data-line] > span, .hero-pre [data-fade], .hero-pre [data-row], .hero-pre [data-done]{visibility:hidden}`}</style>

      <div
        aria-hidden
        className="glow pointer-events-none absolute -top-40 -end-40 -z-10 h-[46rem] w-[46rem] max-w-[140vw] rounded-full"
      />

      <div className="mx-auto max-w-[110rem] px-6 sm:px-10">
      <h1
        id="top-title"
        className="display -ms-[0.04em] text-[clamp(5rem,17.5vw,17rem)] uppercase"
        aria-label="Houssem Ben Ali"
      >
        <span data-line className="block overflow-hidden pb-[0.04em]" aria-hidden>
          <span className="block">Houssem</span>
        </span>
        <span data-line className="block overflow-hidden pb-[0.04em]" aria-hidden>
          <span className="block">Ben Ali</span>
        </span>
      </h1>

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-5">
          <p data-fade className="display text-4xl text-sodium sm:text-5xl">
            {c.role}
          </p>
          <p data-fade className="mt-6 max-w-[34ch] text-xl text-bone/90 sm:text-2xl">
            {c.intro}
          </p>
          <p data-fade className="mt-6 text-mist">
            {c.places}
          </p>
        </div>

        <div className="min-w-0 lg:col-span-6 lg:col-start-7">
          <p className="sr-only" lang={c.logLang} dir="ltr">
            {c.log.map((l) => `${l.stage}: ${l.tools}, ${l.status}.`).join(" ")} {c.logDone}.
          </p>
          <div
            aria-hidden
            dir="ltr"
            lang={c.logLang}
            className="rounded-sm border border-line bg-slate/60 p-5 font-mono text-[0.8125rem] leading-7 sm:p-7 sm:text-sm"
          >
            <div>
              <div>
                <span className="text-mist">$ </span>
                <span data-cmd />
                <span data-caret className="ml-0.5 inline-block h-[1.1em] w-[0.55ch] translate-y-[0.2em] animate-pulse bg-sodium" />
              </div>
              {c.log.map((l) => (
                <div data-row key={l.stage} className="grid grid-cols-[5.5rem_1fr_auto] gap-x-3 sm:grid-cols-[6.5rem_1fr_auto] sm:gap-x-4">
                  <span className="text-mist">{l.stage}</span>
                  <span>{l.tools}</span>
                  <span data-status className="text-verdigris">
                    {l.status}
                  </span>
                </div>
              ))}
              <div data-done className="mt-2 text-verdigris">
                {c.logDone}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
