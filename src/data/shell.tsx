import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PARTY } from "@/data/program";
import { Wordmark } from "@/components/mark";
import { ProgramDownload } from "@/components/program-download";
import { PortfolioLink, SocialFab, SocialLinks } from "@/components/social";

const NAV = [
  { to: "/postulaty", label: "Postulaty" },
  { to: "/program", label: "Program" },
  { to: "/rachunek", label: "Aneks kosztów" },
  { to: "/skala", label: "Skala PIT" },
  { to: "/porownanie", label: "Na tle Sejmu" },
  { to: "/o-nas", label: "Kim jesteśmy" },
] as const;

function isActive(path: string, to: (typeof NAV)[number]["to"]) {
  if (to === "/program") return path === "/program" || path.startsWith("/program/");
  return path === to;
}

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-3 focus:py-2"
      >
        Przejdź do treści
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <div className="border-b border-line">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-xs tracking-wide text-muted uppercase sm:px-8">
            <p>
              {PARTY.versionNote} · {PARTY.version}
            </p>
            <p className="max-w-[14rem] text-right sm:max-w-none">
              <Link to="/o-nas" hash="projekt" className="hover:text-ink">
                {PARTY.projectShort}
              </Link>
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link to="/" className="shrink-0" aria-label="Realna Lewica — strona główna">
            <Wordmark />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Główne">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={
                  "px-3 py-2 text-sm font-semibold " +
                  (isActive(path, item.to) ? "text-red" : "text-ink hover:text-red")
                }
                aria-current={isActive(path, item.to) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobilne"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Zamknij menu" : "Otwórz menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open ? (
          <nav
            id="menu-mobilne"
            className="border-t border-line px-5 py-3 lg:hidden"
            aria-label="Mobilne"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-11 items-center border-b border-line text-lg font-semibold last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <main id="tresc">{children}</main>
      <footer className="mt-20 border-t border-ink bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark tone="dark" size="lg" />
            <p className="mt-3 text-xs tracking-widest text-cream/60 uppercase">{PARTY.label}</p>
            <p className="mt-4 max-w-sm text-cream/80">
              {PARTY.slogan.join(" ")} Państwo, które słucha — i mówi Ci cenę.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs tracking-widest text-gold uppercase">Deklaracja</p>
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
          <div className="md:col-span-4">
            <p className="text-xs tracking-widest text-gold uppercase">Na pierwszej stronie</p>
            <p className="mt-3 text-cream/80">
              W tej kadencji nie ma daty euro ani skoku obrony do 6% PKB. Pełne 7% PKB na zdrowie to
              cel na dwie kadencje.
            </p>
            <p className="mt-4 text-sm text-gold">
              {PARTY.versionNote} · {PARTY.version}
            </p>
          </div>
        </div>
        {/* Profile autora + portfolio */}
        <div className="border-t border-cream/15">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-cream/70 sm:px-8 md:flex-row md:items-center md:justify-between">
            <SocialLinks />
            <div className="md:text-right">
              <p>© {new Date().getFullYear()} Paweł Wasiak</p>
              <p className="max-w-md md:ml-auto">{PARTY.project}</p>
              <p>
                Zobacz więcej projektów na{" "}
                <PortfolioLink className="font-semibold text-gold underline underline-offset-4 hover:text-cream" />
              </p>
            </div>
          </div>
        </div>
      </footer>
      <SocialFab />
    </div>
  );
}
