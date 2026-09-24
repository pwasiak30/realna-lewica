import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/shell";
import { chapterBySlug } from "@/data/program";
import { compareIncome, formatEffective, formatPct, formatPln, REDUCTION, SLIDER_MAX } from "@/lib/pit";

export const Route = createFileRoute("/skala")({
  head: () => ({
    meta: [{ title: "Skala PIT — Realna Lewica" }],
  }),
  component: Skala,
});

const PRESETS = [60_000, 120_000, 150_000, 180_000, 300_000, 500_000, 1_000_000, 2_500_000];

function Skala() {
  const [income, setIncome] = useState(150_000);
  const result = useMemo(() => compareIncome(income), [income]);

  const verdict =
    result.delta === 0
      ? "Przy tym dochodzie skala z deklaracji daje ten sam podatek co dziś."
      : `Rocznie więcej o ${formatPln(result.delta)} — około ${formatPln(result.delta / 12)} miesięcznie. Wyższa stawka liczy się tylko od nadwyżki nad progiem.`;

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-red uppercase">
          Rozdział {chapterBySlug("gospodarka")?.num} · punkt 1
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight">Skala, nie hasło. Wpisz dochód.</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Do 300 tysięcy złotych rocznie progi zostają: 12% i 32%. Powyżej stawka rośnie, ale tylko od nadwyżki.
          Danina solidarnościowa 4% od dochodu ponad 1 milion zostaje — stąd realnie 60% i 75% na samej górze.
        </p>

        <section className="mt-10 border border-line bg-cream p-5 sm:p-8">
          <label className="block" htmlFor="dochod">
            <span className="text-sm font-semibold">Roczny dochód do opodatkowania</span>
            <p className="mt-2 font-display text-4xl sm:text-5xl">{formatPln(result.income)}</p>
            <input
              id="dochod"
              inputMode="numeric"
              min={0}
              step={1000}
              type="number"
              value={income}
              onChange={(event) => {
                const next = Number(event.target.value);
                setIncome(Number.isFinite(next) ? Math.max(0, Math.round(next)) : 0);
              }}
              className="mt-3 min-h-11 w-full border border-line-strong bg-paper px-3 text-lg"
            />
          </label>
          <input
            aria-label="Suwak dochodu"
            className="mt-5 w-full"
            max={SLIDER_MAX}
            min={0}
            step={5000}
            type="range"
            value={Math.min(income, SLIDER_MAX)}
            onChange={(event) => setIncome(Number(event.target.value))}
          />
          <p className="mt-2 text-sm text-muted">Suwak dochodzi do miliona. Wyżej wpisz kwotę w polu.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setIncome(preset)}
                className={
                  "min-h-11 px-3 text-sm font-semibold " +
                  (income === preset ? "bg-ink text-cream" : "border border-line-strong bg-paper")
                }
                aria-pressed={income === preset}
              >
                {formatPln(preset)}
              </button>
            ))}
          </div>

          <dl className="mt-8 grid gap-px bg-line sm:grid-cols-3">
            <div className="bg-paper p-4">
              <dt className="text-sm text-muted">Podatek dziś</dt>
              <dd className="mt-1 font-display text-4xl">{formatPln(result.today)}</dd>
              <dd className="mt-1 text-sm text-muted">Stawka krańcowa {formatPct(result.marginalToday)}</dd>
            </div>
            <div className="bg-paper p-4">
              <dt className="text-sm text-muted">W programie</dt>
              <dd className="mt-1 font-display text-4xl">{formatPln(result.program)}</dd>
              <dd className="mt-1 text-sm text-muted">Stawka krańcowa {formatPct(result.marginalProgram)}</dd>
            </div>
            <div className="bg-ink p-4 text-cream">
              <dt className="text-sm text-cream/70">Różnica</dt>
              <dd className="mt-1 font-display text-4xl">{result.delta === 0 ? "0 zł" : `+${formatPln(result.delta)}`}</dd>
              <dd className="mt-1 text-sm text-gold">
                {result.income === 0 ? "brak dochodu" : `efektywnie ${formatEffective(result.program, result.income)}`}
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-lg">{verdict}</p>
        </section>

        <section className="mt-8 overflow-x-auto border border-line">
          <table className="w-full min-w-xl text-left">
            <caption className="border-b border-line px-4 py-4 text-left font-display text-2xl">
              Z czego składa się ten podatek
            </caption>
            <thead>
              <tr className="border-b border-line text-xs tracking-widest text-muted uppercase">
                <th className="px-4 py-3 font-semibold">Część dochodu</th>
                <th className="px-4 py-3 font-semibold">Dziś</th>
                <th className="px-4 py-3 font-semibold">Program</th>
                <th className="px-4 py-3 font-semibold">Podatek dziś</th>
                <th className="px-4 py-3 font-semibold">Podatek w programie</th>
              </tr>
            </thead>
            <tbody>
              {result.rows.length === 0 ? (
                <tr>
                  <td className="px-4 py-4 text-muted" colSpan={5}>
                    Wpisz dochód większy od zera.
                  </td>
                </tr>
              ) : (
                result.rows.map((row) => (
                  <tr key={`${row.from}-${row.to}`} className="border-b border-line">
                    <th className="px-4 py-4 font-medium">
                      {formatPln(row.from)} – {formatPln(row.to)}
                    </th>
                    <td className="px-4 py-4">{formatPct(row.rateToday)}</td>
                    <td className={"px-4 py-4 " + (row.rateProgram > row.rateToday ? "font-semibold text-red" : "")}>
                      {formatPct(row.rateProgram)}
                    </td>
                    <td className="px-4 py-4">{formatPln(row.taxToday)}</td>
                    <td className="px-4 py-4">{formatPln(row.taxProgram)}</td>
                  </tr>
                ))
              )}
              <tr>
                <th className="px-4 py-4 font-medium">Kwota zmniejszająca</th>
                <td className="px-4 py-4" colSpan={4}>
                  −{formatPln(REDUCTION)}, nie więcej niż podatek ze skali. Program jej nie rusza.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="border border-line p-6">
            <h2 className="font-display text-2xl">Progi deklaracji</h2>
            <ul className="mt-4">
              {[
                ["do 120 tys.", "12%", "bez zmian"],
                ["120–300 tys.", "32%", "bez zmian"],
                ["300–800 tys.", "48%", "nowy próg"],
                ["800 tys.–1 mln", "56%", "nowy próg"],
                ["1–2 mln", "60%", "56% + danina 4%"],
                ["powyżej 2 mln", "75%", "71% + danina 4%"],
              ].map(([band, rate, note]) => (
                <li key={band} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <span>
                    {band}
                    <span className="mt-1 block text-sm text-muted">{note}</span>
                  </span>
                  <span className="font-display text-2xl">{rate}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-graphite p-6 text-cream">
            <h2 className="font-display text-2xl">Czego ten rachunek nie robi</h2>
            <ul className="mt-4 space-y-3 text-cream/80">
              <li className="border-t border-cream/15 pt-3">
                Nie jest zeznaniem. Nie ma składek ZUS, ulg, kosztów, małżonka ani dochodów z kapitału.
              </li>
              <li className="border-t border-cream/15 pt-3">
                Zerowy PIT do 26. roku życia i dla pracujących seniorów deklaracja likwiduje. Ulga na dzieci dostaje
                próg dochodowy. Ulga na powrót zostaje tylko dla zawodów deficytowych i pracy w Polsce. Tego tu nie
                widać.
              </li>
              <li className="border-t border-cream/15 pt-3">
                Danina solidarnościowa jest doliczona do tego samego dochodu. W zeznaniu baza bywa szersza.
              </li>
              <li className="border-t border-cream/15 pt-3">Kwota wolna zostaje dzisiejsza: 30 tysięcy złotych.</li>
            </ul>
            <Link to="/program/$slug" params={{ slug: "gospodarka" }} hash="p-1" className="mt-6 inline-flex min-h-11 items-center font-semibold text-gold">
              Pełny punkt w programie
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  );
}
