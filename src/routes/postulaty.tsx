import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Shell } from "@/components/shell";
import { PARTY, POSTULATES } from "@/data/program";

export const Route = createFileRoute("/postulaty")({
  head: () => ({
    meta: [{ title: "Postulaty — Realna Lewica" }],
  }),
  component: Postulaty,
});

function Postulaty() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-red uppercase">Front programu</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight">
          Dwanaście zdań. Każde ma rozdział, w którym da się je sprawdzić.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          To nie skrót zamiast programu. To wejście. Reszta — podatki, szkoła, granica, ustrój — jest w deklaracji,
          rozdział po rozdziale.
        </p>

        <ol className="mt-10 border-t border-line">
          {POSTULATES.map((item) => (
            <li key={item.n} id={item.n} className="scroll-mt-36 border-b border-line">
              <Link
                to="/program/$slug"
                params={{ slug: item.slug }}
                hash={item.hash}
                className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="font-display text-3xl text-red">{item.n}</span>
                <span>
                  <span className="block font-display text-3xl">{item.title}</span>
                  <span className="mt-2 block max-w-3xl text-muted">{item.line}</span>
                </span>
                <span className="inline-flex min-h-11 items-center text-sm font-semibold text-red">
                  W programie
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-sm text-muted">
          {PARTY.versionNote}: {PARTY.version}. {PARTY.disclaimer}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/program"
            className="inline-flex min-h-11 items-center justify-center bg-red px-5 font-semibold text-cream hover:bg-red-deep"
          >
            Pełny program
          </Link>
          <Link
            to="/skala"
            className="inline-flex min-h-11 items-center justify-center border border-ink px-5 font-semibold hover:bg-ink hover:text-cream"
          >
            Sprawdź skalę PIT
          </Link>
        </div>
      </div>
    </Shell>
  );
}
