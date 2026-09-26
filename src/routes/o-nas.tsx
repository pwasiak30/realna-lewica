import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { Mark, Wordmark } from "@/components/mark";
import { Shell } from "@/components/shell";
import { BRAND_COLORS, chapterBySlug, INTRO, PARTY, PILLARS } from "@/data/program";
import { CONVERGENCE, SYNTHESIS } from "@/data/porownanie";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [{ title: "Kim jesteśmy — Realna Lewica" }],
  }),
  component: About,
});

const BASE = import.meta.env.BASE_URL;

const FILES = [
  { href: `${BASE}brand/logo-poziome.png`, label: "Logo poziome", fmt: "PNG" },
  { href: `${BASE}brand/znak.svg`, label: "Znak na jasne tło", fmt: "SVG" },
  { href: `${BASE}brand/znak-ciemny.svg`, label: "Znak w plakietce", fmt: "SVG" },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function About() {
  const symbolika = chapterBySlug("nazwa");
  const point = (title: string) => symbolika?.points.find((p) => p.title === title)?.body ?? "";

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-red uppercase">{INTRO.title}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          Silne państwo przy tym, co jest życiem. Twarde tam, gdzie chaos zżera zaufanie.
        </h1>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 text-lg lg:col-span-7">
            {INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Bez świętych krów w podatkach i bez udawania, że każdy postulat da się zrobić w cztery
              lata.
            </p>
          </div>

          <aside className="bg-ink p-6 text-cream sm:p-8 lg:col-span-5" aria-labelledby="znak">
            <div className="flex items-center gap-5">
              <Mark tone="dark" className="h-16 w-20 shrink-0" />
              <div>
                <p className="text-xs tracking-widest text-gold uppercase">{PARTY.label}</p>
                <h2 id="znak" className="mt-1 font-display text-3xl">
                  Znak
                </h2>
              </div>
            </div>
            <p className="mt-5 text-cream/85">{point("Znak")}</p>
            <dl className="mt-6 space-y-3 text-sm">
              {BRAND_COLORS.map((color) => (
                <div
                  key={color.name}
                  className="flex items-center justify-between gap-4 border-t border-cream/15 pt-3"
                >
                  <dt className="flex items-center gap-3">
                    <span
                      className="inline-block size-4 rounded-full ring-1 ring-cream/60"
                      style={{ background: color.hex }}
                      aria-hidden="true"
                    />
                    {color.name}
                  </dt>
                  <dd className="text-gold">{color.role}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <section className="mt-16 border-t border-line pt-10" aria-labelledby="cztery">
          <h2 id="cztery" className="font-display text-3xl">
            Cztery zobowiązania
          </h2>
          <div className="mt-6 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, index) => (
              <Link
                key={pillar.id}
                to="/program/$slug"
                params={{ slug: pillar.slug }}
                className="group bg-paper p-5 hover:bg-cream"
              >
                <p className="font-display text-sm text-gold-ink">{pad(index + 1)}</p>
                <h3 className="mt-2 font-display text-2xl">
                  {PARTY.slogan[index]?.replace(/\.$/, "") ?? pillar.label}
                </h3>
                <p className="mt-2 text-muted">{pillar.line}</p>
                <p className="mt-3 text-sm font-semibold text-red group-hover:underline">
                  Rozdział
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-line pt-10" aria-labelledby="gdzie-stoimy">
          <h2 id="gdzie-stoimy" className="font-display text-3xl">
            Gdzie stoimy w Sejmie
          </h2>
          <p className="mt-4 max-w-3xl text-lg">{SYNTHESIS[3]}</p>
          <ul className="mt-6 grid gap-px bg-line md:grid-cols-3">
            {CONVERGENCE.map((group) => (
              <li key={group.title} className="bg-cream p-5">
                <p className="font-display text-xl leading-snug">{group.title}</p>
                <p className="mt-2 text-sm text-muted">{group.items[0]}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/porownanie"
            className="mt-4 inline-flex min-h-11 items-center font-semibold text-red"
          >
            Porównanie ze wszystkimi partiami
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </Link>
        </section>

        <section className="mt-16 border-t border-line pt-10" aria-labelledby="logo">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="logo" className="font-display text-3xl">
                Logo
              </h2>
              <p className="mt-2 max-w-2xl text-muted">{point("Kolory")}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-px bg-line md:grid-cols-2">
            <div className="grid min-h-40 place-items-center bg-cream p-8">
              <Wordmark size="lg" />
            </div>
            <div className="grid min-h-40 place-items-center bg-ink p-8">
              <Wordmark size="lg" tone="dark" />
            </div>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {FILES.map((file) => (
              <li key={file.href}>
                <a
                  href={file.href}
                  download
                  className="inline-flex min-h-11 items-center gap-2 border border-line-strong bg-cream px-4 text-sm font-semibold hover:border-ink"
                >
                  <Download className="size-4" aria-hidden="true" />
                  {file.label}
                  <span className="text-muted">{file.fmt}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="projekt"
          className="mt-16 scroll-mt-28 border-l-4 border-gold bg-gold-soft px-5 py-5 sm:px-8"
          aria-labelledby="projekt-tytul"
        >
          <p className="text-xs font-semibold tracking-widest text-gold-ink uppercase">
            Skąd jest ten program
          </p>
          <h2 id="projekt-tytul" className="mt-2 font-display text-2xl">
            Psychologia na AHE w Łodzi, nie komitet wyborczy
          </h2>
          <p className="mt-3 max-w-3xl">{PARTY.project}</p>
        </section>

        <p className="mt-12 text-sm text-muted">
          {PARTY.versionNote} · {PARTY.version}. {PARTY.disclaimer}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/program"
            className="inline-flex min-h-11 items-center justify-center bg-red px-5 font-semibold text-cream hover:bg-red-deep"
          >
            Przejdź do programu
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </Link>
          <Link
            to="/program/$slug"
            params={{ slug: "nazwa" }}
            className="inline-flex min-h-11 items-center justify-center border border-ink px-5 font-semibold hover:bg-ink hover:text-cream"
          >
            Rozdział {symbolika?.num}: {symbolika?.title}
          </Link>
        </div>
      </div>
    </Shell>
  );
}
