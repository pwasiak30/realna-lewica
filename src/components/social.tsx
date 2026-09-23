/* ============================================================
   SOCIAL — profile autora strony
   Dwa warianty tego samego zestawu linków:
   - <SocialFab />    stały pasek: ≥768px pionowa kolumna w lewym dolnym
                      rogu, <768px pozioma pigułka na dole ekranu.
                      Statyczny, bez JS do rozwijania.
   - <SocialLinks />  rząd ikon w stopce (ciemne tło).
   - <PortfolioLink /> link tekstowy do portfolio.
   Lista i kolejność zgodne z design systemem (X · LinkedIn · YouTube ·
   Instagram · Facebook · GitHub · Linktree (akcent) · Mastodon).
   Zmiana adresu = edycja tablicy SOCIAL poniżej.
============================================================= */

type SocialId =
  "x" | "linkedin" | "youtube" | "instagram" | "facebook" | "github" | "linktree" | "mastodon";

type Social = { id: SocialId; label: string; href: string; accent?: boolean };

// ---- 1. Linki ----
const SOCIAL: readonly Social[] = [
  { id: "x", label: "X (Twitter)", href: "https://x.com/panserhjertet" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/pwasiak30/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@WasiakYT" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/psychologia.wasiak/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/psychologia.wasiak" },
  { id: "github", label: "GitHub", href: "https://github.com/pwasiak30" },
  { id: "linktree", label: "Linktree", href: "https://linktree.wasiakpawel.pl/", accent: true },
  { id: "mastodon", label: "Mastodon", href: "https://mastodon.social/@s3in610" },
];

const PORTFOLIO_URL = "https://wasiakpawel.pl";

// ---- 2. Ikony (linie, currentColor — kolor dziedziczony z klasy) ----
const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
} as const;

function Icon({ id, size }: { id: SocialId; size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false">
      {id === "x" && <path d="M4 4l16 16M20 4L4 20" {...stroke} />}
      {id === "linkedin" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3" {...stroke} />
          <path
            d="M7.5 10v7M12 10v7M12 17v-4.2c0-1.6 1-2.6 2.4-2.6 1.3 0 2.1 1 2.1 2.6V17"
            {...stroke}
          />
          <circle cx="7.5" cy="6.7" r="0.9" fill="currentColor" />
        </>
      )}
      {id === "youtube" && (
        <>
          <rect x="2.5" y="6" width="19" height="12" rx="4" {...stroke} />
          <path d="M10.5 9.7l5 2.3-5 2.3z" {...stroke} />
        </>
      )}
      {id === "instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" {...stroke} />
          <circle cx="12" cy="12" r="4" {...stroke} />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
        </>
      )}
      {id === "facebook" && (
        <path
          d="M15 21v-7h2.5l0.5-3H15V9c0-0.9 0.3-1.5 1.6-1.5H18V4.8C17.6 4.7 16.6 4.6 15.5 4.6c-2.3 0-3.9 1.4-3.9 4V11H9v3h2.6v7"
          {...stroke}
        />
      )}
      {id === "github" && (
        <path
          d="M12 3c-4.9 0-8.9 4-8.9 9 0 3.9 2.5 7.2 6 8.4 0.3 0.1 0.5-0.1 0.5-0.4v-1.6c-2.5 0.5-3-1.1-3-1.1-0.4-1-1-1.3-1-1.3-0.8-0.5 0.1-0.5 0.1-0.5 0.9 0.1 1.4 0.9 1.4 0.9 0.8 1.4 2.1 1 2.6 0.7 0.1-0.6 0.3-1 0.6-1.3-2-0.2-4.1-1-4.1-4.4 0-1 0.3-1.8 0.9-2.4-0.1-0.2-0.4-1.1 0.1-2.4 0 0 0.8-0.2 2.5 0.9 0.7-0.2 1.5-0.3 2.3-0.3 0.8 0 1.6 0.1 2.3 0.3 1.7-1.1 2.5-0.9 2.5-0.9 0.5 1.3 0.2 2.2 0.1 2.4 0.6 0.6 0.9 1.4 0.9 2.4 0 3.4-2.1 4.2-4.1 4.4 0.3 0.3 0.6 0.9 0.6 1.7v2.5c0 0.3 0.2 0.5 0.5 0.4 3.5-1.2 6-4.5 6-8.4 0-5-4-9-8.9-9z"
          fill="currentColor"
        />
      )}
      {id === "linktree" && (
        <>
          <path d="M12 21V10M12 13L6 7M12 13l6-6M12 10L8 6M12 10l4-4" {...stroke} />
          <circle cx="12" cy="4.5" r="1.4" fill="currentColor" />
        </>
      )}
      {id === "mastodon" && (
        <path
          d="M6 8.5c0-2.5 1.8-4 6-4s6 1.5 6 4v4c0 2.7-2 4.3-4.6 4.3-1 0-1.9-0.3-2.6-0.9l1-1.6c0.4 0.3 0.9 0.5 1.5 0.5 1.2 0 2-0.7 2-1.9v-0.6c-0.6 0.4-1.4 0.6-2.3 0.6-2.6 0-4.3-1.5-4.3-3.9M6 8.5v5.5c0 2.7 1.9 4.8 6 4.8"
          {...stroke}
        />
      )}
    </svg>
  );
}

// ---- 3. Pasek stały (FAB) ----
export function SocialFab() {
  return (
    <nav
      aria-label="Profile społecznościowe autora"
      className="fixed bottom-3 left-1/2 z-40 flex max-w-[calc(100%-2rem)] -translate-x-1/2 gap-1 overflow-x-auto rounded-full border border-line bg-cream/90 p-1.5 shadow-[0_6px_24px_rgba(26,23,20,0.12)] backdrop-blur-md md:bottom-5 md:left-5 md:translate-x-0 md:flex-col"
    >
      {SOCIAL.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener me"
          aria-label={s.label}
          className={
            "grid size-[38px] min-w-[38px] place-items-center rounded-full transition-colors hover:bg-paper-2 " +
            (s.accent ? "text-red" : "text-muted hover:text-ink")
          }
        >
          <Icon id={s.id} size={18} />
        </a>
      ))}
    </nav>
  );
}

// ---- 4. Link tekstowy do portfolio (stopka) ----
export function PortfolioLink({ className }: { className?: string }) {
  return (
    <a href={PORTFOLIO_URL} target="_blank" rel="noopener" className={className}>
      wasiakpawel.pl
    </a>
  );
}

// ---- 5. Rząd ikon w stopce (na ciemnym tle) ----
export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Profile społecznościowe autora">
      {SOCIAL.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener me"
          aria-label={s.label}
          className={
            "grid size-8 place-items-center rounded-full transition-colors hover:bg-cream/10 " +
            (s.accent ? "text-gold" : "text-cream/75 hover:text-cream")
          }
        >
          <Icon id={s.id} size={16} />
        </a>
      ))}
    </div>
  );
}
