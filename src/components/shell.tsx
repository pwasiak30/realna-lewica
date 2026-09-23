import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PARTY } from "@/data/program";
import { Mark } from "@/components/mark";

const NAV = [
  { to: "/postulaty", label: "Postulaty" },
  { to: "/program", label: "Program" },
  { to: "/rachunek", label: "Rachunek" },
  { to: "/skala", label: "Skala PIT" },
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
    <div className="min-h-screen">
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
            <p className="hidden sm:block">{PARTY.label}</p>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <Mark />
            <span className="leading-none">
              <span className="block font-display text-xl font-semibold tracking-tight">Realna Lewica</span>
              <span className="mt-1 hidden text-xs tracking-wide text-muted uppercase sm:block">
                {PARTY.label}
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Główne">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={
                  "px-3 py-2 text-sm font-semibold " + (isActive(path, item.to) ? "text-red" : "text-ink hover:text-red")
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
          <nav id="menu-mobilne" className="border-t border-line px-5 py-3 lg:hidden" aria-label="Mobilne">
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
            <div className="flex items-center gap-3">
              <Mark />
              <p className="font-display text-2xl">Realna Lewica</p>
            </div>
            <p className="mt-4 max-w-sm text-cream/80">
              Twoja pensja. Twoje ciało. Twoje mieszkanie. Twoje bezpieczeństwo. Państwo, które słucha — i mówi
              Ci cenę.
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
                  Spis programu
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
                <Link to="/o-nas" className="hover:text-gold">
                  Kim jesteśmy
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs tracking-widest text-gold uppercase">Na pierwszej stronie</p>
            <p className="mt-3 text-cream/80">
              W tej kadencji nie ma daty euro ani skoku obrony do 6% PKB. Pełne 7% PKB na zdrowie to dwie kadencje.
            </p>
            <p className="mt-4 text-sm text-gold">
              {PARTY.versionNote}: {PARTY.version}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
