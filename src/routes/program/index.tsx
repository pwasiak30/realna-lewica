import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Shell } from "@/components/shell";
import { CHAPTERS, chapterCountWord, fold, type PartId } from "@/data/program";

export const Route = createFileRoute("/program/")({
  head: () => ({
    meta: [{ title: "Program — Realna Lewica" }],
  }),
  component: ProgramIndex,
});

type Filter = "all" | PartId;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Polska odmiana: 1 rozdział, 2–4 rozdziały, 5+ rozdziałów (ale 12–14 rozdziałów). */
function chapterWord(n: number) {
  if (n === 1) return "rozdział";
  const last = n % 10;
  const lastTwo = n % 100;
  return last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14) ? "rozdziały" : "rozdziałów";
}

function ProgramIndex() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const needle = fold(query.trim());

  const results = useMemo(() => {
    return CHAPTERS.filter((chapter) => filter === "all" || chapter.part === filter)
      .map((chapter) => {
        const hits = needle
          ? chapter.points.filter((point) => fold(`${point.title ?? ""} ${point.body}`).includes(needle))
          : [];
        const leadHit = needle ? fold(`${chapter.title} ${chapter.lead} ${chapter.kicker}`).includes(needle) : true;
        const visible = !needle || leadHit || hits.length > 0;
        return { chapter, hits, visible };
      })
      .filter((row) => row.visible);
  }, [filter, needle]);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "Całość" },
    { id: "I", label: "Część I · polityka" },
    { id: "II", label: "Część II · ustrój" },
  ];

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-red uppercase">Deklaracja</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight">Program, rozdział po rozdziale.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          {chapterCountWord(CHAPTERS.length)} rozdziałów polityki i ustroju. Szukaj po haśle — płaca, aborcja, atom, euro, mieszkanie — bez
          zgadywania, w którym akapicie to jest.
        </p>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full max-w-xl">
            <span className="sr-only">Szukaj w programie</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Szukaj: 4 dni, PIT, aborcja, euro…"
              className="min-h-11 w-full border border-line-strong bg-cream pr-4 pl-10 text-ink placeholder:text-muted"
            />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtr części">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={
                  "min-h-11 px-4 text-sm font-semibold " +
                  (filter === item.id ? "bg-ink text-cream" : "border border-line-strong bg-cream")
                }
                aria-pressed={filter === item.id}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted">
          {results.length === CHAPTERS.length && !needle
            ? `${CHAPTERS.length} rozdziałów`
            : `${results.length} ${chapterWord(results.length)}`}
          {needle ? ` dla „${query.trim()}”` : ""}
        </p>

        {results.length === 0 ? (
          <p className="mt-10 border border-line bg-cream p-6">
            Nic nie pasuje. Spróbuj innego słowa — na przykład „danina”, „KRUS” albo „weto”.
          </p>
        ) : (
          <ol className="mt-4 border-t border-line">
            {results.map(({ chapter, hits }) => (
              <li key={chapter.slug} className="border-b border-line py-6">
                <Link
                  to="/program/$slug"
                  params={{ slug: chapter.slug }}
                  className="grid gap-2 sm:grid-cols-[4rem_1fr] sm:gap-6"
                >
                  <span className="font-display text-2xl text-red">{pad(chapter.num)}</span>
                  <span>
                    <span className="text-xs tracking-widest text-muted uppercase">
                      Część {chapter.part} · {chapter.kicker}
                    </span>
                    <span className="mt-1 block font-display text-3xl">{chapter.title}</span>
                    <span className="mt-2 block max-w-3xl text-muted">{chapter.lead}</span>
                  </span>
                </Link>
                {needle && hits.length > 0 ? (
                  <ul className="mt-4 space-y-2 sm:pl-20">
                    {hits.slice(0, 3).map((point) => (
                      <li key={point.n}>
                        <Link
                          to="/program/$slug"
                          params={{ slug: chapter.slug }}
                          hash={`p-${point.n.replace(".", "-")}`}
                          className="text-sm hover:text-red"
                        >
                          <span className="font-semibold text-red">{point.n}. </span>
                          {point.title ? `${point.title}. ` : ""}
                          {point.body.replace(/\n+/g, " ").slice(0, 180)}
                          {point.body.length > 180 ? "…" : ""}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        )}
      </div>
    </Shell>
  );
}
