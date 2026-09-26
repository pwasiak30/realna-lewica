import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Shell } from "@/components/shell";
import { ProgramDownload } from "@/components/program-download";
import { ProgramLink } from "@/components/program-link";
import {
  CHAPTERS,
  chapterCountWord,
  HONEST,
  INTRO,
  LEDGER,
  PILLARS,
  POSTULATES,
} from "@/data/program";

const BASE = import.meta.env.BASE_URL;

export const Route = createFileRoute("/program/routes-index")({
  component: Home,
});

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Home() {
  return (
    <Shell>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:items-end lg:py-20">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-widest text-red uppercase">
              Deklaracja programowa
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none font-medium tracking-tight text-ink sm:text-7xl">
              Twoja pensja.
              <br />
              Twoje ciało.
              <br />
              Twoje mieszkanie.
              <br />
              <span className="text-red">Twoje bezpieczeństwo.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-graphite">{INTRO.paragraphs[2]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/postulaty"
                className="inline-flex min-h-11 items-center justify-center bg-red px-5 font-semibold text-cream hover:bg-red-deep"
              >
                Dwanaście postulatów
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
              <ProgramDownload tone="line" />
              <Link
                to="/program"
                className="inline-flex min-h-11 items-center justify-center border border-ink px-5 font-semibold hover:bg-ink hover:text-cream"
              >
                Pełny program
              </Link>
              <a
                href="#spot"
                className="inline-flex min-h-11 items-center justify-center px-1 font-semibold text-red"
              >
                Spoty
              </a>
            </div>
          </div>
          <aside className="bg-graphite p-6 text-cream sm:p-8 lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">
              Czego nie obiecujemy datą
            </p>
            <ul className="mt-4 space-y-3">
              {HONEST.later.map((item) => (
                <li key={item} className="border-t border-cream/15 pt-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-cream/70">
              Przy 4-dniowym tygodniu i drodze do 7% PKB na zdrowie euro i 6% na armię w tej
              kadencji się nie spina. Mówimy to tutaj, nie w przypisie.
            </p>
          </aside>
        </div>
      </section>

      <section
        id="spot"
        className="border-b border-line bg-ink text-cream"
        aria-labelledby="spot-tytul"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-16">
          <p className="text-xs font-semibold tracking-widest text-gold uppercase">Spoty</p>
          <h2 id="spot-tytul" className="mt-3 max-w-xl font-display text-4xl leading-tight">
            Dwa zdania. Bez przypisu na końcu.
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <figure>
              <video
                className="aspect-video w-full bg-black"
                controls
                playsInline
                preload="metadata"
                poster={`${BASE}spot-wyborczy.jpg`}
              >
                <source src={`${BASE}spot-wyborczy.mp4`} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-sm text-cream/70">
                <span className="block font-semibold text-cream">Dość obietnic bez ceny.</span>
                41 sekund. Pensja, ciało, mieszkanie, granica — i zdanie, ile to kosztuje.
              </figcaption>
            </figure>
            <figure>
              <video
                className="aspect-video w-full bg-black"
                controls
                playsInline
                preload="metadata"
                poster={`${BASE}spot-prawa-i-glos.jpg`}
              >
                <source src={`${BASE}spot-prawa-i-glos.mp4`} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-sm text-cream/70">
                <span className="block font-semibold text-cream">Prawa i głos.</span>
                Prezydent bez weta. 205 tysięcy podpisów zatrzymuje ustawę. 410 tysięcy zmienia
                konstytucję.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-line" aria-label="Cztery zobowiązania">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <Link
              key={pillar.id}
              to="/program/$slug"
              params={{ slug: pillar.slug }}
              className="group border-b border-line px-5 py-8 sm:px-8 lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <p className="font-display text-sm text-gold-ink">{pad(index + 1)}</p>
              <h2 className="mt-3 font-display text-3xl">{pillar.label}</h2>
              <p className="mt-3 text-muted">{pillar.line}</p>
              <p className="mt-4 text-sm font-semibold text-red">Rozdział</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-red uppercase">
                Kadencja, nie życzenia
              </p>
              <h2 className="mt-2 max-w-3xl font-display text-4xl leading-tight">
                Dwanaście zdań, które da się sprawdzić.
              </h2>
            </div>
            <Link to="/postulaty" className="inline-flex min-h-11 items-center font-semibold">
              Otwórz postulaty
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="mt-10 grid border-t border-line md:grid-cols-2 md:gap-x-12">
            {POSTULATES.map((item) => (
              <li key={item.n} className="border-b border-line">
                <ProgramLink
                  target={item.target}
                  className="grid grid-cols-[2.75rem_1fr] gap-3 py-4"
                >
                  <span className="font-display text-xl text-red">{item.n}</span>
                  <span>
                    <span className="block font-display text-2xl">{item.title}</span>
                    <span className="mt-1 block text-muted">{item.line}</span>
                  </span>
                </ProgramLink>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold tracking-widest text-red uppercase">Kim jesteśmy</p>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Socjaldemokracja, która liczy.
          </h2>
        </div>
        <div className="space-y-4 text-lg lg:col-span-8">
          {INTRO.paragraphs.slice(0, 2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link to="/o-nas" className="inline-flex min-h-11 items-center font-semibold text-red">
            Kim jesteśmy i co znaczy znak
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-red uppercase">
                Część I i II
              </p>
              <h2 className="mt-2 font-display text-4xl">
                {chapterCountWord(CHAPTERS.length)} rozdziałów. Żadnego wstępu zamiast treści.
              </h2>
            </div>
            <Link to="/program" className="inline-flex min-h-11 items-center font-semibold">
              Otwórz spis
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="mt-10 border-t border-line">
            {CHAPTERS.map((chapter) => (
              <li key={chapter.slug} className="border-b border-line">
                <Link
                  to="/program/$slug"
                  params={{ slug: chapter.slug }}
                  className="grid grid-cols-[3rem_1fr] items-baseline gap-4 py-4 hover:bg-paper sm:grid-cols-[4rem_10rem_1fr] sm:gap-6"
                >
                  <span className="font-display text-xl text-red">{pad(chapter.num)}</span>
                  <span className="hidden text-sm tracking-wide text-muted uppercase sm:block">
                    {chapter.kicker}
                  </span>
                  <span className="font-display text-2xl">{chapter.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest text-red uppercase">
              Aneks kosztów
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight">
              Każdy program obiecuje wszystko za darmo. My nie.
            </h2>
            <p className="mt-4 text-muted">{LEDGER.prices}</p>
            <Link
              to="/rachunek"
              className="mt-6 inline-flex min-h-11 items-center bg-ink px-5 font-semibold text-cream hover:bg-graphite"
            >
              Linia po linii
            </Link>
            <p className="mt-4">
              <Link to="/skala" className="font-semibold text-red">
                Sprawdź skalę PIT przy swoim dochodzie
              </Link>
              <span className="text-muted"> — do 300 tys. zł rocznie nic się nie zmienia.</span>
            </p>
          </div>
          <dl className="grid gap-px bg-line sm:grid-cols-3 lg:col-span-7">
            {[
              { k: "Dodatkowe wydatki, rok 5", v: "~125 mld" },
              { k: "Dziura programu, rok 5", v: "~1% PKB" },
              { k: "Mieszkania z daniny", v: "25–40 tys." },
            ].map((item) => (
              <div key={item.k} className="bg-paper p-5">
                <dt className="text-sm text-muted">{item.k}</dt>
                <dd className="mt-2 font-display text-4xl">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </Shell>
  );
}
