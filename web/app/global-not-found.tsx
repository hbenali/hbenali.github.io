import type { Metadata } from "next";
import { RootShell } from "@/lib/shell";
import { content } from "@/lib/content";
import { CurrentPath } from "@/components/CurrentPath";

export const metadata: Metadata = {
  title: "404 - Houssem Ben Ali",
  robots: { index: false },
};

// The address is unknown here, so the page speaks both languages instead of guessing.
export default function GlobalNotFound() {
  return (
    <RootShell lang="en">
      <main className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24 sm:px-10">
        <div
          aria-hidden
          className="glow pointer-events-none absolute -top-40 -right-40 -z-10 h-[40rem] w-[40rem] max-w-[140vw] rounded-full"
        />
        <p className="display text-[clamp(9rem,34vw,30rem)] text-sodium" aria-hidden>
          404
        </p>

        <div className="grid max-w-5xl gap-12 md:grid-cols-2">
          {(["en", "fr"] as const).map((l) => {
            const c = content[l];
            return (
              <div key={l} lang={l}>
                <h1 className="display text-5xl sm:text-6xl">{c.notFound.title}</h1>
                <p className="mt-4 max-w-[36ch] text-xl text-mist">{c.notFound.body}</p>
                <a href={c.path} className="link mt-6 inline-block text-xl">
                  {c.ui.home}
                </a>
              </div>
            );
          })}
        </div>

        <div
          aria-hidden
          className="mt-16 max-w-3xl overflow-x-auto rounded-sm border border-line bg-slate/60 p-5 font-mono text-sm leading-7"
        >
          <div className="whitespace-pre">
            <span className="text-mist">$ </span>curl -I https://about.hbenali.ovh
            <CurrentPath />
            <br />
            <span className="text-sodium">HTTP/1.1 404 Not Found</span>
          </div>
        </div>
      </main>
    </RootShell>
  );
}
