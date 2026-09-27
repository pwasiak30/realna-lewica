import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CHAPTERS, PARTY, PILLARS } from "@/data/program";
import { Wordmark } from "@/components/mark";
import { ProgramDownload } from "@/components/program-download";
import { PortfolioLink, SocialLinks } from "@/components/social";

const NAV = [
  { to: "/postulaty", label: "Postulaty" },
  { to: "/program", label: "Program", mega: true },
  { to: "/rachunek", label: "Aneks kosztów" },
  { to: "/skala", label: "Skala PIT" },
  { to: "/porownanie", label: "Na tle Sejmu" },
  { to: "/o-nas", label: "Kim jesteśmy" },
] as const;

function isActive(path: string, to: (typeof NAV)[number]["to"]) {
  if (to === "/program") return path === "/program" || path.startsWith("/program/");
  return path === to;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 8);
      setProgress(height > 0 ? Math.min(100, (top / height) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setMega(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const partOne = CHAPTERS.filter((chapter) => chapter.part === "I");
  const partTwo = CHAPTERS.filter((chapter) => chapter.part === "II");

  return (
    <div className="min-h-screen">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-3 focus:py-2"
      >
        Przejdź do treści
      </a>
      <header
        className={
          "sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur " +
          (scrolled ? "shadow-[0_8px_24px_rgba(28,23,26,0.08)]" : "")
        }
      >
        <div className="bg-ink text-cream">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-1.5 sm:px-8">
            <p className="text-xs tracking-widest uppercase">
              {PARTY.versionNote} · {PARTY.version}
            </p>
            <div className="hidden md:block">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <Link to="/" className="shrink-0" aria-label="Realna Lewica — strona główna">
            <Wordmark />
          </Link>
          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Główne">
            {NAV.map((item) =>
              "mega" in item && item.mega ? (
                <button
                  key={item.to}
                  type="button"
                  className={
                    "inline-flex min-h-11 items-center gap-1 px-3 text-sm font-semibold " +
                    (isActive(path, item.to) || mega ? "text-red" : "text-ink hover:text-red")
                  }
                  aria-expanded={mega}
                  aria-controls="menu-program"
                  onClick={() => setMega((value) => !value)}
                >
                  {item.label}
                  <ChevronDown className={"size-4 transition " + (mega ? "rotate-180" : "")} />
                </button>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    "inline-flex min-h-11 items-center px-3 text-sm font-semibold " +
                    (isActive(path, item.to) ? "text-red" : "text-ink hover:text-red")
                  }
                  aria-current={isActive(path, item.to) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/program"
              className="hidden min-h-11 items-center gap-2 bg-red px-4 text-sm font-semibold text-cream hover:bg-red-deep sm:inline-flex"
            >
              <Search className="size-4" aria-hidden="true" />
              Szukaj w programie
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-line xl:hidden"
              aria-expanded={open}
              aria-controls="menu-mobilne"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Zamknij menu" : "Otwórz menu"}</span>
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {mega ? (
          <div id="menu-program" className="hidden border-t border-line bg-paper xl:block">
            <div className="mx-auto grid max-w-6xl gap-8 px-8 py-6 lg:grid-cols-2">
              <ChapterColumn title="Część I · polityka" chapters={partOne} />
              <ChapterColumn title="Część II · ustrój" chapters={partTwo} />
            </div>
          </div>
        ) : null}
      </header>

      {open ? (
        <div id="menu-mobilne" className="fixed inset-0 z-50 flex flex-col bg-graphite text-cream xl:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <Wordmark tone="dark" />
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-cream/20"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Zamknij menu</span>
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-auto px-5 pb-10" aria-label="Mobilne">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-14 items-center border-b border-cream/15 font-display text-3xl font-bold"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8">
              <SocialLinks />
            </div>
          </nav>
        </div>
      ) : null}

      <main id="tresc">{children}</main>

      <footer className="mt-0 bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Wordmark tone="dark" size="lg" />
            <p className="mt-3 text-xs tracking-[0.18em] text-cream/60 uppercase">{PARTY.label}</p>
            <p className="mt-4 max-w-sm text-cream/80">
              {PARTY.slogan.join(" ")} Państwo, które słucha — i mówi Ci cenę.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.18em] text-gold uppercase">Deklaracja</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/postulaty" className="hover:text-gold">
                  Postulaty
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-gold">
                  Program
                </Link>
              </li>
              <li>
                <Link to="/rachunek" className="hover:text-gold">
                  Aneks kosztów
                </Link>
              </li>
              <li>
                <Link to="/skala" className="hover:text-gold">
                  Skala PIT
                </Link>
              </li>
              <li>
                <Link to="/porownanie" className="hover:text-gold">
                  Na tle Sejmu
                </Link>
              </li>
              <li>
                <Link to="/" hash="spot" className="hover:text-gold">
                  Spoty
                </Link>
              </li>
              <li>
                <Link to="/program" hash="ustawy" className="hover:text-gold">
                  Projekty ustaw
                </Link>
              </li>
              <li>
                <ProgramDownload tone="footer" />
              </li>
              <li>
                <Link to="/o-nas" className="hover:text-gold">
                  Kim jesteśmy
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.18em] text-gold uppercase">Cztery zobowiązania</p>
            <ul className="mt-3 grid grid-cols-2 gap-3">
              {PILLARS.map((pillar, index) => (
                <li key={pillar.id}>
                  <Link to="/program/$slug" params={{ slug: pillar.slug }} className="group block">
                    <span className="font-display text-sm text-gold">{pad(index + 1)}</span>
                    <span className="mt-1 block font-display text-xl group-hover:text-gold">
                      {pillar.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-cream/70">
              W tej kadencji nie ma daty euro ani skoku obrony do 6% PKB. Pełne 7% PKB na zdrowie to
              cel na dwie kadencje.
            </p>
          </div>
        </div>
        <div className="border-t border-cream/15">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-cream/70 sm:px-8 md:flex-row md:items-center md:justify-between">
            <SocialLinks />
            <p>
              © {new Date().getFullYear()} Paweł Wasiak · {PARTY.versionNote}
            </p>
            <p className="max-w-xl md:text-right">
              {PARTY.project}{" "}
              <PortfolioLink className="font-semibold text-gold underline underline-offset-4 hover:text-cream" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ChapterColumn({
  title,
  chapters,
}: {
  title: string;
  chapters: typeof CHAPTERS;
}) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">{title}</p>
      <ul className="mt-3">
        {chapters.map((chapter) => (
          <li key={chapter.slug}>
            <Link
              to="/program/$slug"
              params={{ slug: chapter.slug }}
              className="flex min-h-11 items-baseline gap-3 border-b border-line py-2 text-sm hover:text-red"
            >
              <span className="w-6 shrink-0 font-display text-red">{pad(chapter.num)}</span>
              <span className="font-semibold">{chapter.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
