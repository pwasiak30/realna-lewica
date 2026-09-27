import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Shell } from "@/components/shell";
import { ProgramDownload } from "@/components/program-download";
import {
  CHAPTERS,
  chapterCountWord,
  countWord,
  HONEST,
  INTRO,
  LEDGER,
  PARTY,
  PILLARS,
  plural,
  POSTULATES,
} from "@/data/program";
import { CONVERGENCE, SYNTHESIS, UNIQUES } from "@/data/porownanie";
import { Uniques } from "@/components/uniques";
import { ProgramLink, UniqueBadge } from "@/components/program-link";

const BASE = import.meta.env.BASE_URL;

export const Route = createFileRoute("/")({
  component: Home,
});

const POSTULATE_COUNT = POSTULATES.length;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const PILLAR_TONE = [
  "bg-red text-cream",
  "bg-paper text-ink",
  "bg-graphite text-cream",
  "bg-red-soft text-ink",
];

function Home() {
  return (
    <Shell>
      <section className="grid min-h-[calc(100vh-7.5rem)] overflow-x-clip lg:grid-cols-2">
        <CampaignFrame />
        <div className="order-1 flex min-w-0 flex-col justify-center bg-paper px-5 py-12 sm:px-10 lg:order-2 lg:px-14 lg:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-red uppercase">
            Deklaracja programowa
          </p>
          <h1 className="mt-4 max-w-full font-display text-4xl leading-[0.95] font-extrabold sm:text-5xl lg:text-6xl">
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
              className="inline-flex min-h-12 items-center justify-center bg-red px-5 font-semibold text-cream hover:bg-red-deep"
            >
              {countWord(POSTULATE_COUNT)}{" "}
              {plural(POSTULATE_COUNT, "postulat", "postulaty", "postulatów").toLowerCase()}
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/program"
              className="inline-flex min-h-12 items-center justify-center border-2 border-ink px-5 font-semibold hover:bg-ink hover:text-cream"
            >
              Pełny program
            </Link>
            <ProgramDownload tone="line" />
          </div>
          <a
            href="#unikaty"
            className="mt-6 inline-flex items-center gap-3 border-l-4 border-red bg-red-soft px-4 py-3 font-semibold hover:bg-cream"
          >
            <span className="font-display text-3xl leading-none text-red">{UNIQUES.length}</span>
            <span>rzeczy, których w tej formie nie ma żadna partia sejmowa</span>
          </a>
        </div>
      </section>

      <section className="bg-ink text-cream" aria-label="Czego nie obiecujemy datą">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:py-14">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Czego nie obiecujemy datą
            </p>
            <p className="mt-4 text-cream/75">
              Przy 4-dniowym tygodniu i drodze do 7% PKB na zdrowie euro i 6% na armię w tej
              kadencji się nie spina. Mówimy to tutaj, nie w przypisie.
            </p>
          </div>
          <ul className="grid gap-px bg-cream/15 sm:grid-cols-3 lg:col-span-8">
            {HONEST.later.map((item, index) => (
              <li key={item} className="bg-ink p-5">
                <p className="font-display text-sm text-gold">{pad(index + 1)}</p>
                <p className="mt-3 font-display text-2xl leading-snug">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Cztery zobowiązania">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <Link
              key={pillar.id}
              to="/program/$slug"
              params={{ slug: pillar.slug }}
              className={"group flex min-h-64 flex-col justify-between p-6 sm:p-8 " + PILLAR_TONE[index]}
            >
              <p className="font-display text-sm opacity-70">{pad(index + 1)}</p>
              <div>
                <h2 className="font-display text-4xl font-extrabold">{pillar.label}</h2>
                <p className="mt-3 max-w-xs text-sm leading-relaxed opacity-80">{pillar.line}</p>
                <p className="mt-5 text-sm font-semibold tracking-wide uppercase">
                  Rozdział
                  <ArrowRight className="ml-1 inline size-4 transition group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Uniques />

      <section id="spot" className="bg-paper" aria-labelledby="spot-tytul">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-red uppercase">Spoty</p>
          <h2 id="spot-tytul" className="mt-3 max-w-xl font-display text-4xl leading-tight font-extrabold sm:text-5xl">
            Dwa zdania. Bez przypisu na końcu.
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <figure>
              <video
                className="aspect-video w-full bg-ink"
                controls
                playsInline
                preload="metadata"
                poster={`${BASE}spot-wyborczy.jpg`}
              >
                <source src={`${BASE}spot-wyborczy.mp4`} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-sm text-muted">
                <span className="block font-semibold text-ink">Dość obietnic bez ceny.</span>
                41 sekund. Pensja, ciało, mieszkanie, granica — i zdanie, ile to kosztuje.
              </figcaption>
            </figure>
            <figure>
              <video
                className="aspect-video w-full bg-ink"
                controls
                playsInline
                preload="metadata"
                poster={`${BASE}spot-prawa-i-glos.jpg`}
              >
                <source src={`${BASE}spot-prawa-i-glos.mp4`} type="video/mp4" />
              </video>
              <figcaption className="mt-3 text-sm text-muted">
                <span className="block font-semibold text-ink">Prawa i głos.</span>
                Prezydent bez weta. 205 tysięcy podpisów zatrzymuje ustawę. 410 tysięcy zmienia
                konstytucję.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-red uppercase">
                Kadencja, nie życzenia
              </p>
              <h2 className="mt-2 max-w-3xl font-display text-4xl leading-tight font-extrabold sm:text-5xl">
                {countWord(POSTULATE_COUNT)} {plural(POSTULATE_COUNT, "zdanie", "zdania", "zdań")},
                które da się sprawdzić.
              </h2>
            </div>
            <Link to="/postulaty" className="inline-flex min-h-11 items-center font-semibold text-red">
              Otwórz postulaty
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="mt-10 grid gap-px bg-line md:grid-cols-2">
            {POSTULATES.map((item) => (
              <li key={item.n} className="bg-paper">
                <ProgramLink
                  target={item.target}
                  className="grid grid-cols-[2.75rem_1fr] gap-3 px-4 py-5 hover:bg-red-soft sm:px-6"
                >
                  <span className="font-display text-xl text-red">{item.n}</span>
                  <span>
                    <span className="block font-display text-2xl">
                      {item.title}
                      {item.unique && <UniqueBadge />}
                    </span>
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
          <p className="text-xs font-semibold tracking-[0.2em] text-red uppercase">Kim jesteśmy</p>
          <h2 className="mt-3 font-display text-4xl leading-tight font-extrabold">
            Socjaldemokracja, która liczy.
          </h2>
          <p className="mt-4 font-display text-2xl text-red">Paweł Wasiak</p>
          <p className="mt-1 text-sm text-muted">Autor programu · psychologia, AHE w Łodzi</p>
        </div>
        <div className="space-y-4 text-lg lg:col-span-8">
          {INTRO.paragraphs.slice(0, 2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="border-l-4 border-red bg-red-soft px-4 py-3 text-base">{PARTY.project}</p>
          <Link to="/o-nas" className="inline-flex min-h-11 items-center font-semibold text-red">
            Kim jesteśmy i co znaczy znak
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-paper-2" aria-labelledby="sejm-tytul">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-red uppercase">Na tle Sejmu</p>
            <h2 id="sejm-tytul" className="mt-3 font-display text-4xl leading-tight font-extrabold">
              Nie „Nowa Lewica bis”. Nie „Konfederacja od lewej”.
            </h2>
            <p className="mt-4 text-lg">{SYNTHESIS[0].split(". ").slice(1).join(". ")}</p>
            <Link
              to="/porownanie"
              className="mt-6 inline-flex min-h-12 items-center bg-ink px-5 font-semibold text-cream hover:bg-graphite"
            >
              Porównanie ze wszystkimi partiami
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Gdzie stoimy</p>
            <ul className="mt-3 border-t border-line-strong">
              {CONVERGENCE.map((group) => (
                <li key={group.title} className="border-b border-line-strong py-4">
                  <p className="font-display text-xl leading-snug">{group.title}</p>
                  <p className="mt-1 text-sm text-muted">{group.items[0]}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/porownanie"
              hash="mapa"
              className="mt-3 inline-flex min-h-11 items-center font-semibold text-red"
            >
              Mapa zbieżności — cały Sejm
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-red uppercase">Część I i II</p>
              <h2 className="mt-2 font-display text-4xl font-extrabold">
                {chapterCountWord(CHAPTERS.length)} rozdziałów. Żadnego wstępu zamiast treści.
              </h2>
            </div>
            <Link to="/program" className="inline-flex min-h-11 items-center font-semibold text-red">
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
                  className="grid grid-cols-[3rem_1fr] items-baseline gap-4 py-4 hover:bg-red-soft sm:grid-cols-[4rem_11rem_1fr] sm:gap-6 sm:px-3"
                >
                  <span className="font-display text-xl text-red">{pad(chapter.num)}</span>
                  <span className="hidden text-xs tracking-[0.14em] text-muted uppercase sm:block">
                    {chapter.kicker}
                  </span>
                  <span className="font-display text-2xl">{chapter.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-red text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-cream/70 uppercase">
                Aneks kosztów
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight font-extrabold">
                Każdy program obiecuje wszystko za darmo. My nie.
              </h2>
              <p className="mt-4 text-cream/85">{LEDGER.prices}</p>
              <Link
                to="/rachunek"
                className="mt-6 inline-flex min-h-12 items-center bg-ink px-5 font-semibold text-cream hover:bg-graphite"
              >
                Linia po linii
              </Link>
              <p className="mt-4">
                <Link to="/skala" className="font-semibold underline underline-offset-4">
                  Sprawdź skalę PIT przy swoim dochodzie
                </Link>
                <span className="text-cream/80"> — do 300 tys. zł rocznie nic się nie zmienia.</span>
              </p>
            </div>
            <dl className="grid gap-px bg-cream/25 sm:grid-cols-3 lg:col-span-7">
              {[
                { k: "Dodatkowe wydatki, rok 5", v: "~125 mld" },
                { k: "Dziura programu, rok 5", v: "~1% PKB" },
                { k: "Mieszkania z daniny", v: "25–40 tys." },
              ].map((item) => (
                <div key={item.k} className="bg-red p-5">
                  <dt className="text-sm text-cream/75">{item.k}</dt>
                  <dd className="mt-2 font-display text-4xl font-extrabold">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </Shell>
  );
}

type Slide = {
  src: string;
  alt: string;
  caption: string;
  n?: string;
  title?: string;
  line?: string;
};

const PILLAR_FRAMES: Record<
  (typeof PILLARS)[number]["id"],
  { file: string; alt: string }
> = {
  pensja: {
    file: "kadry/pensja.jpg",
    alt: "Pracownicy wychodzą z zakładu po zmianie",
  },
  cialo: {
    file: "kadry/cialo.jpg",
    alt: "Rozmowa w gabinecie publicznej przychodni",
  },
  mieszkanie: {
    file: "kadry/mieszkanie.jpg",
    alt: "Para z kluczami w drzwiach skromnego mieszkania",
  },
  bezpieczenstwo: {
    file: "kadry/bezpieczenstwo.jpg",
    alt: "Spokojna linia granicy o świcie",
  },
};

function CampaignFrame() {
  const slides: Slide[] = [
    {
      src: `${BASE}spot-wyborczy.jpg`,
      alt: "Znak Realnej Lewicy i hasło czterech zobowiązań",
      caption: "Znak",
    },
    ...PILLARS.map((pillar, index) => {
      const frame = PILLAR_FRAMES[pillar.id];
      return {
        src: `${BASE}${frame.file}`,
        alt: frame.alt,
        caption: pillar.label,
        n: pad(index + 1),
        title: pillar.label,
        line: pillar.line,
      };
    }),
    {
      src: `${BASE}spot-prawa-i-glos.jpg`,
      alt: "Pałac Prezydencki o świcie",
      caption: "Prawa i głos",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <div className="relative order-2 min-h-[40rem] min-w-0 overflow-hidden bg-graphite text-cream lg:order-1 lg:min-h-full">
      <img
        src={slide.src}
        alt={slide.alt}
        className="absolute inset-0 size-full object-cover object-[center_38%] lg:object-[center_42%]"
      />
      {slide.line ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink from-20% via-ink/80 via-50% to-transparent px-6 pt-16 pb-16 sm:px-12 sm:pt-24">
          <p className="font-display text-sm tracking-[0.2em] text-cream/70">{slide.n}</p>
          <p className="mt-1 font-display text-4xl leading-none font-extrabold sm:mt-2 sm:text-6xl">{slide.title}</p>
          <p className="mt-2 max-w-md text-sm text-cream/90 sm:mt-3 sm:text-lg">{slide.line}</p>
        </div>
      ) : (
        <p className="absolute bottom-16 left-5 bg-ink/80 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-cream uppercase">
          {slide.caption}
        </p>
      )}
      <div className="absolute right-4 bottom-4 flex items-center gap-2">
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center bg-ink/80 text-cream"
          aria-label="Poprzedni kadr"
          onClick={() => setIndex((value) => (value - 1 + slides.length) % slides.length)}
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center bg-ink/80 text-cream"
          aria-label="Następny kadr"
          onClick={() => setIndex((value) => (value + 1) % slides.length)}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <div className="absolute bottom-5 left-5 flex gap-1.5" aria-hidden="true">
        {slides.map((item, dot) => (
          <span
            key={item.caption}
            className={"h-1 " + (dot === index ? "w-8 bg-gold" : "w-3 bg-cream/50")}
          />
        ))}
      </div>
    </div>
  );
}
