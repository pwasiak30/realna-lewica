import { createFileRoute, Link } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { Shell } from "@/components/shell";
import { INTRO, PARTY } from "@/data/program";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [{ title: "Kim jesteśmy — Realna Lewica" }],
  }),
  component: About,
});

function About() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-red uppercase">{PARTY.label}</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight">
          Silne państwo przy tym, co jest życiem. Twarde tam, gdzie chaos zżera zaufanie.
        </h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 text-lg lg:col-span-7">
            {INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Sprawne między rządem a samorządem. Bez świętych krów w podatkach i bez udawania, że każdy postulat
              da się zrobić w cztery lata.
            </p>
          </div>
          <aside className="bg-ink p-6 text-cream sm:p-8 lg:col-span-5">
            <Mark className="size-16" />
            <h2 className="mt-6 font-display text-3xl">Znak</h2>
            <p className="mt-3 text-cream/80">
              Wznosząca się linia przechodzi w haczyk. Wzrost i potwierdzenie, że coś zostało zrobione — nie tylko
              obiecane na plakacie.
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-t border-cream/15 pt-3">
                <dt>Czerwień</dt>
                <dd className="text-gold">przygaszona, nie krzyk</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-cream/15 pt-3">
                <dt>Grafit</dt>
                <dd className="text-gold">ciężar instytucji</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-cream/15 pt-3">
                <dt>Złoto</dt>
                <dd className="text-gold">haczyk na końcu linii</dd>
              </div>
            </dl>
          </aside>
        </div>

        <section className="mt-16 grid gap-8 border-t border-line pt-10 md:grid-cols-3">
          {[
            {
              t: "Pensja i praca",
              d: "Cztery dni bez utraty płacy, etapami. Minimalna do 75% mediany. Ubezpieczenie od utraty pracy zamiast symbolicznego zasiłku.",
            },
            {
              t: "Ciało",
              d: "Zdrowie do 7% PKB w dwóch kadencjach. Aborcja na żądanie do 12. tygodnia. O końcu życia decyduje chory, nie ustawowy obowiązek cierpienia.",
            },
            {
              t: "Mieszkanie i granica",
              d: "Lokale z daniny, nie z obietnicy. Obrona zostaje na już wysokim poziomie. Azyl ma procedurę, limit i sąd — nie przypadek.",
            },
          ].map((item) => (
            <div key={item.t}>
              <h2 className="font-display text-2xl">{item.t}</h2>
              <p className="mt-3 text-muted">{item.d}</p>
            </div>
          ))}
        </section>

        <p className="mt-12 text-sm text-muted">
          {PARTY.versionNote}: {PARTY.version}. To deklaracja programowa, nie rejestracja komitetu i nie zbiórka
          podpisów.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/program"
            className="inline-flex min-h-11 items-center justify-center bg-red px-5 font-semibold text-cream"
          >
            Przejdź do programu
          </Link>
          <Link
            to="/program/$slug"
            params={{ slug: "nazwa" }}
            className="inline-flex min-h-11 items-center justify-center border border-ink px-5 font-semibold"
          >
            Rozdział o nazwie
          </Link>
        </div>
      </div>
    </Shell>
  );
}
