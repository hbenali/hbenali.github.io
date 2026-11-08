"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Content, Job, Role } from "@/lib/content";

function RoleItem({
  role,
  open,
  onToggle,
  ui,
}: {
  role: Role;
  open: boolean;
  onToggle: () => void;
  ui: Content["ui"];
}) {
  const id = useId();
  return (
    <div className="border-t border-line">
      <h4>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-4 text-left"
        >
          <span className="text-xl transition-colors group-hover:text-sodium sm:text-2xl">
            {role.title}
          </span>
          <span className="sr-only">{open ? ui.close : ui.open}</span>
          <span aria-hidden className="relative h-4 w-4 shrink-0">
            <span className="absolute inset-x-0 top-1/2 h-px bg-bone transition-colors group-hover:bg-sodium" />
            <motion.span
              className="absolute inset-y-0 left-1/2 w-px bg-bone transition-colors group-hover:bg-sodium"
              animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
        </button>
      </h4>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="max-w-[68ch] space-y-3 pb-6 text-mist [&>li]:relative [&>li]:pl-5 [&>li]:before:absolute [&>li]:before:top-[0.8em] [&>li]:before:left-0 [&>li]:before:h-px [&>li]:before:w-2.5 [&>li]:before:bg-sodium">
              {role.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {role.tags && (
              <ul className="flex flex-wrap gap-x-5 gap-y-1 pb-6 text-sm text-bone/80">
                {role.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function JobItem({ job, ui, first }: { job: Job; ui: Content["ui"]; first: boolean }) {
  const [openRole, setOpenRole] = useState<number | null>(first ? 0 : null);
  return (
    <article className="relative pb-20 pl-8 last:pb-0 sm:pl-12">
      <span
        aria-hidden
        className="absolute top-[0.9rem] left-0 h-2.5 w-2.5 -translate-x-[calc(50%-0.5px)] rounded-full bg-sodium ring-4 ring-ink"
      />
      <p className="display text-3xl text-sodium sm:text-4xl">{job.date}</p>
      <h3 className="mt-2 text-3xl text-bone sm:text-4xl">
        {job.title}, <span className="italic">{job.company}</span>
      </h3>
      <p className="mt-1 text-mist">{job.place}</p>

      {job.roles && (
        <div className="mt-8 border-b border-line">
          {job.roles.map((r, i) => (
            <RoleItem
              key={r.title}
              role={r}
              ui={ui}
              open={openRole === i}
              onToggle={() => setOpenRole(openRole === i ? null : i)}
            />
          ))}
        </div>
      )}

      {job.points && (
        <ul className="mt-5 max-w-[68ch] space-y-3 text-mist [&>li]:relative [&>li]:pl-5 [&>li]:before:absolute [&>li]:before:top-[0.8em] [&>li]:before:left-0 [&>li]:before:h-px [&>li]:before:w-2.5 [&>li]:before:bg-sodium">
          {job.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function Experience({ c }: { c: Content }) {
  const rail = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  // The timeline rail fills as the reader moves down it: progress, not decoration.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!rail.current || !fill.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(fill.current, { scaleY: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: rail.current, start: "top 60%", end: "bottom 60%", scrub: 0.4 },
        },
      );
    }, rail);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rail} className="relative">
      <div aria-hidden className="absolute top-3 bottom-0 left-0 w-px bg-line">
        <div ref={fill} className="h-full origin-top bg-sodium" style={{ transform: "scaleY(1)" }} />
      </div>
      {c.jobs.map((j, i) => (
        <JobItem key={`${j.company}-${j.date}`} job={j} ui={c.ui} first={i === 0} />
      ))}
    </div>
  );
}
