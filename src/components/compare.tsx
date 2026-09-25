import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { chapterBySlug } from "@/data/program";
import {
  BLOCS,
  type BlocId,
  type CompareCells,
  type CompareSection,
  compareRowsFor,
  compareSectionFor,
} from "@/data/porownanie";

/* Porównanie z partiami sejmowymi: tabela (szeroki ekran), karty (telefon, rozdział programu). */

export type BlocFilter = "all" | Exclude<BlocId, "rl">;

type Row = CompareCells & { topic: string };

function blocsFor(filter: BlocFilter) {
  return BLOCS.filter((bloc) => bloc.id === "rl" || filter === "all" || bloc.id === filter);
}

/** Tytuł sekcji z numerami i nazwami rozdziałów programu, np. „9. Nauka · 10. Szkoła równych szans”. */
export function sectionTitle(section: CompareSection) {
  const chapters = section.chapters
    .map((slug) => chapterBySlug(slug))
    .filter((c) => c !== undefined);
  if (section.title && chapters.length > 0) {
    const first = chapters[0].num;
    const last = chapters[chapters.length - 1].num;
    return `${first === last ? first : `${first}–${last}`}. ${section.title}`;
  }
  return chapters.map((c) => `${c.num}. ${c.title}`).join(" · ");
}

export function sectionAnchor(section: CompareSection) {
  return `s-${section.id}`;
}

/** Legenda: kto jest w którym bloku. */
export function BlocLegend() {
  return (
    <dl className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
      {BLOCS.map((bloc) => (
        <div key={bloc.id} className={"p-4 " + (bloc.id === "rl" ? "bg-red-soft" : "bg-cream")}>
          <dt
            className={
              "text-xs font-semibold tracking-widest uppercase " +
              (bloc.id === "rl" ? "text-red" : "text-muted")
            }
          >
            {bloc.short}
          </dt>
          <dd className="mt-1 text-sm">{bloc.parties.join(" · ")}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Wybór bloku do porównania 1:1 z Realną Lewicą. */
export function BlocSwitch({
  value,
  onChange,
}: {
  value: BlocFilter;
  onChange: (next: BlocFilter) => void;
}) {
  const options: { id: BlocFilter; label: string }[] = [
    { id: "all", label: "Wszyscy" },
    ...BLOCS.filter((bloc) => bloc.id !== "rl").map((bloc) => ({
      id: bloc.id as BlocFilter,
      label: bloc.short,
    })),
  ];
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Porównaj Realną Lewicę z">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onChange(option.id)}
          aria-pressed={value === option.id}
          className={
            "min-h-11 px-4 text-sm font-semibold " +
            (value === option.id
              ? "bg-ink text-cream"
              : "border border-line-strong bg-cream hover:border-ink")
          }
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

/** Tekst komórki: prefiksy partii („NL:”, „Razem:”) pogrubione, żeby było widać, kto co mówi. */
const PARTY_LABEL =
  /(^|[.;)—”] )((?:NL\/Razem|NL(?: 20\d\d)?|Razem(?: 20\d\d)?|KO\/PSL\/2050|KO\/PSL|KO\/2050|KO(?: 20\d\d)?|PSL|2050(?:\/UC)?|UC IX 2026|PiS\/R\+|PiS|R\+|Konf\.\/KKP|Konf\.|KKP):)/g;

function splitLabels(text: string) {
  const parts: { text: string; label: boolean }[] = [];
  let last = 0;
  for (const match of text.matchAll(PARTY_LABEL)) {
    const start = (match.index ?? 0) + match[1].length;
    if (start > last) parts.push({ text: text.slice(last, start), label: false });
    parts.push({ text: match[2], label: true });
    last = start + match[2].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last), label: false });
  return parts;
}

function Cell({ text }: { text: string }) {
  return (
    <>
      {splitLabels(text).map((part, index) =>
        part.label ? (
          <strong key={index} className="font-semibold text-ink">
            {part.text}
          </strong>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </>
  );
}

/** Tabela na szerokim ekranie (lg+). */
function WideTable({
  rows,
  filter,
  topicLabel,
}: {
  rows: Row[];
  filter: BlocFilter;
  topicLabel: string;
}) {
  const blocs = blocsFor(filter);
  return (
    <div className="hidden lg:block">
      <table className="w-full table-fixed border-collapse text-left text-sm">
        <thead>
          <tr className="bg-ink text-cream">
            <th scope="col" className="w-36 p-3 font-semibold">
              {topicLabel}
            </th>
            {blocs.map((bloc) => (
              <th
                key={bloc.id}
                scope="col"
                className={"p-3 font-semibold " + (bloc.id === "rl" ? "text-gold" : "")}
              >
                {bloc.short}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.topic} className="border-b border-line align-top">
              <th scope="row" className="bg-paper-2 p-3 font-semibold">
                {row.topic}
              </th>
              {blocs.map((bloc) => (
                <td
                  key={bloc.id}
                  className={
                    "p-3 leading-snug " +
                    (bloc.id === "rl" ? "bg-red-soft text-ink" : "bg-cream text-graphite")
                  }
                >
                  <Cell text={row[bloc.id]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Karty: jeden temat = jedna karta. Na telefonie zawsze, w rozdziale programu na każdej szerokości. */
function Cards({ rows, filter, always }: { rows: Row[]; filter: BlocFilter; always?: boolean }) {
  const blocs = blocsFor(filter);
  const others = blocs.filter((bloc) => bloc.id !== "rl");
  return (
    <ul className={"space-y-4 " + (always ? "" : "lg:hidden")}>
      {rows.map((row) => (
        <li key={row.topic} className="border border-line bg-cream">
          <p className="border-b border-line bg-paper-2 px-4 py-2 font-display text-xl">
            {row.topic}
          </p>
          <div className="border-b border-line bg-red-soft px-4 py-3">
            <p className="text-xs font-semibold tracking-widest text-red uppercase">
              Realna Lewica
            </p>
            <p className="mt-1">{row.rl}</p>
          </div>
          <dl className={"grid gap-px bg-line " + (others.length > 1 ? "sm:grid-cols-2" : "")}>
            {others.map((bloc) => (
              <div key={bloc.id} className="bg-cream px-4 py-3">
                <dt className="text-xs font-semibold tracking-widest text-muted uppercase">
                  {bloc.short}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-graphite">
                  <Cell text={row[bloc.id]} />
                </dd>
              </div>
            ))}
          </dl>
        </li>
      ))}
    </ul>
  );
}

export function CompareTable({
  rows,
  filter = "all",
  topicLabel = "Punkt RL",
}: {
  rows: Row[];
  filter?: BlocFilter;
  topicLabel?: string;
}) {
  return (
    <>
      <WideTable rows={rows} filter={filter} topicLabel={topicLabel} />
      <Cards rows={rows} filter={filter} />
    </>
  );
}

export function Verdict({ text }: { text: string }) {
  return (
    <div className="border-l-4 border-gold bg-gold-soft px-5 py-4">
      <p className="text-xs font-semibold tracking-widest text-gold-ink uppercase">Werdykt</p>
      <p className="mt-2 max-w-4xl">{text}</p>
    </div>
  );
}

/** Blok „Na tle Sejmu” pod rozdziałem programu. Nic nie rysuje, jeśli rozdział nie ma porównania. */
export function ChapterCompare({ slug }: { slug: string }) {
  const rows = compareRowsFor(slug);
  const section = compareSectionFor(slug);
  if (rows.length === 0 || !section) return null;
  const single = section.chapters.filter((s) => compareRowsFor(s).length > 0).length === 1;

  return (
    <section className="mt-12 border-t-2 border-ink pt-8" aria-labelledby="na-tle-sejmu">
      <p className="text-xs font-semibold tracking-widest text-red uppercase">Na tle Sejmu</p>
      <h2 id="na-tle-sejmu" className="mt-2 font-display text-3xl">
        Co w tych sprawach mówią inni
      </h2>
      <p className="mt-2 max-w-3xl text-muted">
        Nowa Lewica i Razem, KO z PSL i Polską 2050, PiS z Rozwojem Plus, Konfederacja z KKP — punkt
        po punkcie.
      </p>
      {section.intro && single ? <p className="mt-4 max-w-3xl">{section.intro}</p> : null}
      <div className="mt-6">
        <Cards rows={rows} filter="all" always />
      </div>
      {section.verdict && single ? (
        <div className="mt-6">
          <Verdict text={section.verdict} />
        </div>
      ) : null}
      <Link
        to="/porownanie"
        hash={sectionAnchor(section)}
        className="mt-6 inline-flex min-h-11 items-center font-semibold text-red"
      >
        Pełne porównanie wszystkich partii
        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
      </Link>
    </section>
  );
}
