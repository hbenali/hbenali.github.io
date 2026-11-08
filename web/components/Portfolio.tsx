import { content, type Lang } from "@/lib/content";
import { jsonLd } from "@/lib/meta";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Experience } from "./Experience";
import { CopyEmail } from "./CopyEmail";

function Section({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-[110rem] px-6 sm:px-10">
        <div className="grid gap-x-10 gap-y-10 border-t border-line py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 id={`${id}-title`} className="display text-6xl sm:text-7xl lg:text-8xl">
                {title}
              </h2>
              {note && <p className="mt-4 max-w-[32ch] text-mist">{note}</p>}
            </div>
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function Portfolio({ lang }: { lang: Lang }) {
  const c = content[lang];
  const labels = lang === "en" ? { copy: "Copy address", done: "Copied" } : { copy: "Copier l'adresse", done: "Copié" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a
        href="#experience"
        className="sr-only z-50 bg-sodium px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {c.ui.skip}
      </a>
      <Header c={c} />
      <main>
        <Hero c={c} />

        <Section id="experience" title={c.sections.experience} note={c.sections.experienceNote}>
          <Experience c={c} />
        </Section>

        <Section id="skills" title={c.sections.skills}>
          <dl className="space-y-10">
            {c.skills.map((g) => (
              <div key={g.name} className="grid gap-2 sm:grid-cols-[13rem_1fr] sm:gap-8">
                <dt className="display text-3xl text-sodium">{g.name}</dt>
                <dd>
                  <ul className="text-2xl leading-snug text-bone sm:text-3xl [&>li]:inline [&>li:not(:last-child)]:after:text-mist [&>li:not(:last-child)]:after:content-[',_'] [&>li:last-child]:after:text-mist [&>li:last-child]:after:content-['.']">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
            <div className="grid gap-2 sm:grid-cols-[13rem_1fr] sm:gap-8">
              <dt className="display text-3xl text-sodium">{lang === "en" ? "Languages" : "Langues"}</dt>
              <dd className="text-2xl leading-snug text-bone sm:text-3xl">
                {lang === "en"
                  ? "Arabic (native), French (fluent), English (fluent)."
                  : "Arabe (natif), français (courant), anglais (courant)."}
              </dd>
            </div>
          </dl>
        </Section>

        <Section id="projects" title={c.sections.projects}>
          <ul>
            {c.projects.map((p) => (
              <li
                key={p.name}
                className="grid gap-x-8 gap-y-1 border-t border-line py-6 last:border-b sm:grid-cols-[7rem_1fr_auto]"
              >
                <span className="display text-3xl text-sodium">{p.year}</span>
                <div>
                  <h3 className="text-2xl text-bone sm:text-3xl">{p.name}</h3>
                  <p className="mt-1 max-w-[60ch] text-mist">{p.desc}</p>
                </div>
                <span className="text-mist italic sm:text-right">{p.tech}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="credentials" title={c.sections.credentials}>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h3 className="display text-3xl text-sodium">{c.sections.education}</h3>
              <ul className="mt-6 space-y-8">
                {c.education.map((e) => (
                  <li key={e.dates}>
                    <p className="text-mist">{e.dates}</p>
                    <p className="mt-1 text-2xl leading-snug text-bone">{e.degree}</p>
                    <p className="text-mist italic">{e.school}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="display text-3xl text-sodium">{c.sections.certifications}</h3>
              <ul className="mt-6 space-y-8">
                {c.certs.map((e) => (
                  <li key={e.name}>
                    <p className="text-mist">{e.year}</p>
                    <p className="mt-1 text-2xl leading-snug text-bone">{e.name}</p>
                    <p className="text-mist italic">{e.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title={c.sections.contact}>
          <p className="max-w-[40ch] text-2xl text-bone sm:text-3xl">{c.contact.lead}</p>
          <a
            href={`mailto:${c.contact.email}`}
            className="link display mt-10 inline-block text-[clamp(2.4rem,8vw,6.5rem)] break-all"
          >
            {c.contact.email}
          </a>
          <div className="mt-4">
            <CopyEmail email={c.contact.email} labels={labels} />
          </div>
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xl">
            <li>
              <a className="link" href="mailto:contact+cv@hbenali.ovh">
                {c.contact.cv}
              </a>
            </li>
            <li>
              <a className="link" href="https://github.com/hbenali" target="_blank" rel="noopener">
                GitHub
              </a>
            </li>
            <li>
              <a className="link" href="https://linkedin.com/in/houssembali" target="_blank" rel="noopener">
                LinkedIn
              </a>
            </li>
          </ul>
        </Section>
      </main>
      <footer className="mx-auto max-w-[110rem] px-6 pb-12 text-mist sm:px-10">
        <div className="border-t border-line pt-8">© 2026 Houssem Ben Ali</div>
      </footer>
    </>
  );
}
