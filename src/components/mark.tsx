import { useId } from "react";
import { AXIS, BADGE_TICK_TRANSFORM, COLORS, STOPS_DARK, STOPS_LIGHT, TICK_PATH, TICK_VIEWBOX } from "@/components/brand";

/*
  Znak Realnej Lewicy — ptaszek (znak wyboru) z gradientem bordo → złoto.
  Dane kształtu i kolorów: src/components/brand.ts.
*/

type Tone = "light" | "dark";

function Gradient({ id, tone }: { id: string; tone: Tone }) {
  const stops = tone === "dark" ? STOPS_DARK : STOPS_LIGHT;
  return (
    <linearGradient id={id} gradientUnits="userSpaceOnUse" {...AXIS}>
      {stops.map(([offset, color]) => (
        <stop key={offset} offset={offset} stopColor={color} />
      ))}
    </linearGradient>
  );
}

/**
 * Sam ptaszek, bez tła. `tone="dark"` na ciemnym tle.
 * Proporcje ~5:4 — ustaw szerokość i wysokość klasą (np. "h-8 w-10").
 */
export function Mark({
  className = "h-8 w-10",
  tone = "light",
  title,
}: {
  className?: string;
  tone?: Tone;
  title?: string;
}) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      viewBox={TICK_VIEWBOX}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <Gradient id={`g${id}`} tone={tone} />
      </defs>
      <path d={TICK_PATH} fill={`url(#g${id})`} />
    </svg>
  );
}

/** Znak w okrągłej grafitowej plakietce — wersja „ikona / awatar”. */
export function Badge({ className = "size-16", title }: { className?: string; title?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <Gradient id={`b${id}`} tone="dark" />
      </defs>
      <circle cx="400" cy="400" r="396" fill={COLORS.slate} />
      <circle cx="400" cy="400" r="362" fill="none" stroke={COLORS.slateRing} strokeWidth="3" />
      <g transform={BADGE_TICK_TRANSFORM}>
        <path d={TICK_PATH} fill={`url(#b${id})`} />
      </g>
    </svg>
  );
}

/** Logo poziome: znak + dwuwierszowy napis REALNA / LEWICA. */
export function Wordmark({
  tone = "light",
  size = "md",
}: {
  tone?: Tone;
  size?: "md" | "lg";
}) {
  const big = size === "lg";
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark tone={tone} className={big ? "h-12 w-15" : "h-8 w-10"} />
      <span
        className={
          "font-display leading-[0.92] font-bold tracking-[0.04em] uppercase " + (big ? "text-2xl" : "text-[1.05rem]")
        }
      >
        <span className={"block " + (tone === "dark" ? "text-cream" : "text-ink")}>Realna</span>
        <span className={"block " + (tone === "dark" ? "text-gold" : "text-red")}>Lewica</span>
      </span>
    </span>
  );
}
