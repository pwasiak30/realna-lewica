import { createFileRoute, Link } from "@tanstack/react-router";
import { LedgerChart } from "@/components/ledger-chart";
import { Shell } from "@/components/shell";
import { HONEST, LEDGER } from "@/data/program";
import { COMPARE_LEDGER } from "@/data/porownanie";

export const Route = createFileRoute("/rachunek")({
  head: () => ({
    meta: [{ title: "Aneks kosztów — Realna Lewica" }],
  }),
  component: Rachunek,
});

function Rachunek() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-red uppercase">
          Część III · aneks
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight">
          Rachunek, linia po linii. Bez owijania w bawełnę.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          {LEDGER.prices} Środek szacunku, nie ustawa budżetowa.
        </p>

        <section className="mt-10 border border-line bg-cream p-5 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl">Wydatki i wpływy programu</h2>
            <p className="text-sm text-muted">Miliardy złotych, środek przedziału</p>
          </div>
          <div className="mt-6">
            <LedgerChart />
          </div>
          <div className="mt-2 flex gap-6 text-sm">
            <p>
              <span className="mr-2 inline-block size-3 bg-red align-middle" />
              Wydatki dodatkowe
            </p>
            <p>
              <span className="mr-2 inline-block size-3 bg-gold align-middle" />
              Wpływy ogólne
            </p>
          </div>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left">
              <thead>
                <tr className="border-b border-line text-xs tracking-widest text-muted uppercase">
                  <th className="py-3 font-semibold">Pozycja</th>
                  <th className="py-3 font-semibold">Rok 1</th>
                  <th className="py-3 font-semibold">Rok 5</th>
                </tr>
              </thead>
              <tbody>
                {LEDGER.rows.map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <th className="py-4 pr-4 font-medium">
                      {row.label}
                      <span className="mt-1 block text-sm font-normal text-muted">{row.note}</span>
                    </th>
                    <td className="py-4 font-display text-2xl">~{row.y1} mld</td>
                    <td className="py-4 font-display text-2xl">~{row.y5} mld</td>
                  </tr>
                ))}
                <tr>
                  <th className="py-4 font-medium">Deficyt po programie, bez cięcia reszty</th>
                  <td className="py-4 font-display text-2xl">{LEDGER.deficit.y1}</td>
                  <td className="py-4 font-display text-2xl">{LEDGER.deficit.y5}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-px bg-line md:grid-cols-2">
          <div className="bg-paper p-6 sm:p-8">
            <h2 className="font-display text-2xl">Najgrubsze nowe wydatki w 5. roku</h2>
            <ul className="mt-4">
              {LEDGER.spends.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3"
                >
                  <span>{item.name}</span>
                  <span className="shrink-0 font-semibold text-red">{item.range}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Przy 4-dniowym tygodniu albo mniej godzin przy tej samej pensji i presja na kadry —
              albo uczciwe dopisanie etatów. Nie udajemy, że to koszt zerowy.
            </p>
          </div>
          <div className="bg-paper p-6 sm:p-8">
            <h2 className="font-display text-2xl">Największe nowe dochody poza skalą PIT</h2>
            <ul className="mt-4">
              {LEDGER.revenues.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3"
                >
                  <span>{item.name}</span>
                  <span className="shrink-0 font-semibold text-gold-ink">{item.range}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">{LEDGER.save}</p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="bg-graphite p-6 text-cream sm:p-8">
            <h2 className="font-display text-3xl">Kadencja pierwsza zostaje</h2>
            <ul className="mt-4 space-y-2">
              {HONEST.stays.map((item) => (
                <li key={item} className="border-t border-cream/15 pt-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line p-6 sm:p-8">
            <h2 className="font-display text-3xl">Czego ta kadencja nie domyka</h2>
            <ul className="mt-4 space-y-2">
              {HONEST.later.map((item) => (
                <li key={item} className="border-t border-line pt-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted">{LEDGER.housing}</p>
          </div>
        </section>

        <section
          className="mt-8 border-l-4 border-gold bg-gold-soft px-5 py-5 sm:px-8"
          aria-labelledby="aneks-sejm"
        >
          <p className="text-xs font-semibold tracking-widest text-gold-ink uppercase">
            Na tle Sejmu
          </p>
          <h2 id="aneks-sejm" className="mt-2 font-display text-2xl">
            Reszta Sejmu nie liczy w tej formie
          </h2>
          <p className="mt-3 max-w-3xl">{COMPARE_LEDGER.intro}</p>
          <Link
            to="/porownanie"
            hash="aneks"
            className="mt-3 inline-flex min-h-11 items-center font-semibold text-red"
          >
            Aneks na tle innych partii
          </Link>
        </section>

        <section className="mt-8 border-t border-line pt-8">
          <h2 className="font-display text-3xl">Stan wyjścia</h2>
          <dl className="mt-4 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {LEDGER.baseline.map((item) => (
              <div key={item.k} className="bg-paper p-4">
                <dt className="text-sm text-muted">{item.k}</dt>
                <dd className="mt-1 font-display text-2xl">{item.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 max-w-3xl space-y-4 text-lg">
            <p>{LEDGER.spread}</p>
            {LEDGER.added.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>{LEDGER.atom}</p>
            <p>{LEDGER.excise}</p>
          </div>
          <p className="mt-8">
            <Link to="/program" className="font-semibold text-red">
              Wróć do programu
            </Link>
          </p>
        </section>
      </div>
    </Shell>
  );
}
