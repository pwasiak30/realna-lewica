import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { UNIQUES } from "@/data/porownanie";

/**
 * Unikaty Realnej Lewicy — rzeczy, których w tej formie nie ma żadna partia sejmowa.
 * Źródło: porównanie programów (src/data/porownanie.ts).
 * `band` — pełna szerokość (strona główna), `box` — blok w kolumnie treści (postulaty).
 */
export function Uniques({
  variant = "band",
  id = "unikaty",
}: {
  variant?: "band" | "box";
  id?: string;
}) {
  const body = (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-widest text-gold uppercase">
            Unikaty Realnej Lewicy
          </p>
          <h2 id={`${id}-tytul`} className="mt-3 max-w-3xl font-display text-4xl leading-tight">
            Nie ma ich w tej formie u żadnej partii sejmowej.
          </h2>
        </div>
        <p className="font-display text-6xl leading-none text-gold" aria-hidden="true">
          {UNIQUES.length}
        </p>
      </div>
      <ol className="mt-8 grid gap-x-10 md:grid-cols-2">
        {UNIQUES.map((item, index) => (
          <li
            key={item}
            className="grid grid-cols-[2.5rem_1fr] gap-2 border-t border-cream/15 py-3"
          >
            <span className="font-display text-xl text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
      <Link
        to="/porownanie"
        hash="mapa"
        className="mt-6 inline-flex min-h-11 items-center font-semibold text-gold hover:text-cream"
      >
        Skąd to wiemy — porównanie ze wszystkimi partiami
        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
      </Link>
    </>
  );

  if (variant === "box") {
    return (
      <section
        id={id}
        className="scroll-mt-28 bg-red-deep p-6 text-cream sm:p-8"
        aria-labelledby={`${id}-tytul`}
      >
        {body}
      </section>
    );
  }

  return (
    <section
      id={id}
      className="scroll-mt-28 bg-red-deep text-cream"
      aria-labelledby={`${id}-tytul`}
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-16">{body}</div>
    </section>
  );
}
