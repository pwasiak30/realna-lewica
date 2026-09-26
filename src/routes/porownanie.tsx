import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";
import {
  BlocLegend,
  type BlocFilter,
  BlocSwitch,
  CompareTable,
  sectionAnchor,
  sectionTitle,
  Verdict,
} from "@/components/compare";
import { Shell } from "@/components/shell";
import { ProgramLink } from "@/components/program-link";
import { targetLabel } from "@/data/program";
import {
  ANTIMODELS,
  BLOCS,
  COMPARE,
  COMPARE_LEDGER,
  COMPARE_SECTIONS,
  CONVERGENCE,
  POSITIONING,
  SYNTHESIS,
  UNIQUES,
} from "@/data/porownanie";

export const Route = createFileRoute("/porownanie")({
  head: () => ({
    meta: [
      { title: "Na tle Sejmu — porównanie programów — Realna Lewica" },
      {
        name: "description",
        content:
          "Każdy rozdział deklaracji Realnej Lewicy zestawiony z programami Nowej Lewicy, Razem, KO, PSL, Polski 2050, PiS, Rozwoju Plus, Konfederacji i KKP.",
      },
    ],
  }),
  component: Porownanie,
});

const BASE = import.meta.env.BASE_URL;

function Porownanie() {
  const [filter, setFilter] = useState<BlocFilter>("all");

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-red uppercase">Na tle Sejmu</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight sm:text-5xl">
          {COMPARE.title}
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-graphite">{COMPARE.subtitle}</p>
        <p className="mt-6 max-w-3xl text-lg">{COMPARE.lead}</p>

        <div className="mt-6 max-w-4xl border-l-4 border-gold bg-gold-soft px-5 py-4">
          <p className="text-xs font-semibold tracking-widest text-gold-ink uppercase">
            Aktualizacja do deklaracji v10
          </p>
          <p className="mt-2">{COMPARE.update.text}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {COMPARE.update.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`${BASE}${COMPARE.pdf.href}`}
            download={COMPARE.pdf.filename}
            className="inline-flex min-h-11 items-center justify-center bg-red px-5 font-semibold text-cream hover:bg-red-deep"
          >
            <Download className="mr-2 size-4" aria-hidden="true" />
            {COMPARE.pdf.label}
          </a>
          <p className="text-sm text-muted">Opracowanie analityczne, {COMPARE.date}.</p>
        </div>

        <details className="mt-8 max-w-4xl border border-line bg-cream p-5">
          <summary className="cursor-pointer font-semibold">Źródła i uwaga metodologiczna</summary>
          <p className="mt-4 text-sm text-graphite">
            <span className="font-semibold text-ink">Źródła. </span>
            {COMPARE.sources}
          </p>
          <p className="mt-3 text-sm text-graphite">
            <span className="font-semibold text-ink">Uwaga metodologiczna. </span>
            {COMPARE.method}
          </p>
        </details>

        <div className="mt-10">
          <BlocLegend />
        </div>

        <nav className="mt-10 border-y border-line py-4" aria-label="Spis porównania">
          <ol className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <a href="#pozycjonowanie" className="hover:text-red">
                <span className="font-semibold text-red">0. </span>Pozycjonowanie ideowe
              </a>
            </li>
            {COMPARE_SECTIONS.map((section) => (
              <li key={section.id}>
                <a href={`#${sectionAnchor(section)}`} className="hover:text-red">
                  {sectionTitle(section)}
                </a>
              </li>
            ))}
            <li>
              <a href="#aneks" className="hover:text-red">
                Aneks kosztów
              </a>
            </li>
            <li>
              <a href="#mapa" className="hover:text-red">
                Mapa zbieżności i unikaty
              </a>
            </li>
            <li>
              <a href="#ocena" className="hover:text-red">
                Ocena syntetyczna
              </a>
            </li>
          </ol>
        </nav>

        {/* Pasek wyboru bloku — trzyma się pod nagłówkiem strony przy przewijaniu tabel. */}
        <div className="z-30 -mx-5 mt-8 lg:sticky lg:top-[98px] border-b border-line bg-paper/95 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm font-semibold">Porównaj Realną Lewicę z:</p>
            <BlocSwitch value={filter} onChange={setFilter} />
          </div>
        </div>

        <section
          id="pozycjonowanie"
          className="mt-10 scroll-mt-28 lg:scroll-mt-48"
          aria-labelledby="pozycjonowanie-tytul"
        >
          <h2 id="pozycjonowanie-tytul" className="font-display text-3xl">
            0. Pozycjonowanie ideowe
          </h2>
          <div className="mt-6">
            <CompareTable rows={POSITIONING} filter={filter} topicLabel="Oś" />
          </div>
        </section>

        {COMPARE_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={sectionAnchor(section)}
            className="mt-16 scroll-mt-28 lg:scroll-mt-48"
            aria-labelledby={`${sectionAnchor(section)}-tytul`}
          >
            <h2
              id={`${sectionAnchor(section)}-tytul`}
              className="font-display text-3xl leading-tight"
            >
              {sectionTitle(section)}
            </h2>
            {section.subtitle ? (
              <p className="mt-1 font-display text-xl text-red">{section.subtitle}</p>
            ) : null}
            {section.intro ? <p className="mt-4 max-w-4xl text-lg">{section.intro}</p> : null}
            <div className="mt-6">
              <CompareTable rows={section.rows} filter={filter} />
            </div>
            {section.verdict ? (
              <div className="mt-6">
                <Verdict text={section.verdict} />
              </div>
            ) : null}
            <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {section.chapters.map((slug) => (
                <Link
                  key={slug}
                  to="/program/$slug"
                  params={{ slug }}
                  className="font-semibold text-red"
                >
                  Rozdział w programie:{" "}
                  {sectionTitle({ ...section, chapters: [slug], title: undefined })}
                </Link>
              ))}
            </p>
          </section>
        ))}

        <section
          id="aneks"
          className="mt-16 scroll-mt-28 lg:scroll-mt-48"
          aria-labelledby="aneks-tytul"
        >
          <h2 id="aneks-tytul" className="font-display text-3xl">
            Aneks kosztów — RL ma, reszta Sejmu nie w tej formie
          </h2>
          <p className="mt-4 max-w-4xl text-lg">{COMPARE_LEDGER.intro}</p>
          <div className="mt-6 overflow-x-auto border border-line">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead>
                <tr className="bg-ink text-cream">
                  <th scope="col" className="p-3 font-semibold">
                    Pozycja (ceny 2026)
                  </th>
                  <th scope="col" className="p-3 font-semibold">
                    Rok 1
                  </th>
                  <th scope="col" className="p-3 font-semibold">
                    Rok 5
                  </th>
                  <th scope="col" className="p-3 font-semibold">
                    Komentarz na tle Sejmu
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_LEDGER.rows.map((row) => (
                  <tr key={row.item} className="border-b border-line align-top">
                    <th scope="row" className="bg-paper-2 p-3 font-semibold">
                      {row.item}
                    </th>
                    <td className="bg-red-soft p-3 font-display text-lg whitespace-nowrap">
                      {row.y1}
                    </td>
                    <td className="bg-red-soft p-3 font-display text-lg">{row.y5}</td>
                    <td className="bg-cream p-3 text-graphite">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 max-w-4xl space-y-3 text-graphite">
            {COMPARE_LEDGER.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
          <Link
            to="/rachunek"
            className="mt-4 inline-flex min-h-11 items-center font-semibold text-red"
          >
            Cały aneks kosztów
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </Link>
        </section>

        <section
          id="mapa"
          className="mt-16 scroll-mt-28 lg:scroll-mt-48"
          aria-labelledby="mapa-tytul"
        >
          <h2 id="mapa-tytul" className="font-display text-3xl">
            Mapa zbieżności i rozjazdów — cały Sejm
          </h2>
          <div className="mt-6 grid gap-px bg-line lg:grid-cols-3">
            {CONVERGENCE.map((group) => (
              <div key={group.title} className="bg-cream p-6">
                <h3 className="font-display text-2xl leading-tight">{group.title}</h3>
                <ul className="mt-4 space-y-3 border-l-2 border-gold pl-4">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-ink p-6 text-cream sm:p-8">
            <h3 className="font-display text-3xl">Unikaty Realnej Lewicy</h3>
            <p className="mt-2 text-cream/75">Nie ma ich w tej formie u żadnej partii sejmowej.</p>
            <ol className="mt-6 grid gap-x-10 md:grid-cols-2">
              {UNIQUES.map((item, index) => (
                <li
                  key={item.text}
                  className="grid grid-cols-[2.25rem_1fr] gap-2 border-t border-cream/15 py-3"
                >
                  <span className="font-display text-xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block">{item.text}</span>
                    <ProgramLink
                      target={item.target}
                      className="mt-1 inline-flex min-h-11 items-center text-sm font-semibold text-gold underline-offset-4 hover:text-cream hover:underline"
                    >
                      {targetLabel(item.target)}
                      <ArrowRight className="ml-1.5 size-3.5 shrink-0" aria-hidden="true" />
                    </ProgramLink>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <h3 className="mt-12 font-display text-3xl">
            Antymodele — co która partia zrobiłaby odwrotnie
          </h3>
          <dl className="mt-6 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {ANTIMODELS.map((model) => (
              <div key={model.party} className="bg-cream p-5">
                <dt className="font-display text-xl">{model.party}</dt>
                <dd className="mt-1 text-xs font-semibold tracking-widest text-muted uppercase">
                  {BLOCS.find((bloc) => bloc.id === model.bloc)?.short}
                </dd>
                <dd className="mt-3 text-graphite">{model.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          id="ocena"
          className="mt-16 scroll-mt-28 lg:scroll-mt-48 border-t-2 border-ink pt-10"
          aria-labelledby="ocena-tytul"
        >
          <h2 id="ocena-tytul" className="font-display text-3xl">
            Ocena syntetyczna
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-lg">
            {SYNTHESIS.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "font-display text-2xl leading-snug" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-10 max-w-4xl border-t border-line pt-4 text-sm text-muted">
            {COMPARE.footnote}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/program"
              className="inline-flex min-h-11 items-center justify-center bg-red px-5 font-semibold text-cream hover:bg-red-deep"
            >
              Przejdź do programu
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
            <a
              href={`${BASE}${COMPARE.pdf.href}`}
              download={COMPARE.pdf.filename}
              className="inline-flex min-h-11 items-center justify-center border border-ink px-5 font-semibold hover:bg-ink hover:text-cream"
            >
              <Download className="mr-2 size-4" aria-hidden="true" />
              {COMPARE.pdf.label}
            </a>
          </div>
        </section>
      </div>
    </Shell>
  );
}
