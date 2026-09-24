/*
  Dane znaku Realnej Lewicy — jedno źródło dla komponentów React (mark.tsx)
  i dla generatora plików (scripts/brand-assets.mjs → favicon, ikony, og.jpg).
  Kształt: ptaszek wektoryzowany z pliku źródłowego logo (układ 800×800).
*/

export const TICK_PATH =
  "M671.2 133.9c-6.2 2.2-6.5 2.3-28.2 19.7c-80.5 64.4-191.5 170.4-242.8 231.7c-40.4 48.3-67.9 91.3-91.8 143.5c-1.9 4.3-1.9 4.3-47.4-46.5c-25-27.9-48.7-54.1-52.7-58.1c-18.8-18.9-42.8-20.1-61.1-2.8c-5.4 5-13.2 15.7-13.2 18.1c0 0.6 26.2 26.1 58.2 56.6c32 30.5 66.6 63.6 76.8 73.5c22.2 21.6 28.6 25.4 42.9 25.4c18.2-0.1 28-7 45.8-32.6c78.9-113.6 194.7-240.4 306.3-335.4c8.5-7.2 19.4-16.5 24.1-20.5c20.1-17.1 27.7-31.5 24.9-47.3c-3.6-20.6-22.5-32-41.8-25.3z";

/** Ciasny kadr samego ptaszka (x y szer wys) w układzie TICK_PATH. */
export const TICK_VIEWBOX = "126 124 596 478";

/** Oś gradientu w układzie TICK_PATH: od dolnego ramienia do górnego końca. */
export const AXIS = { x1: 300, y1: 520, x2: 713, y2: 140 } as const;

/** Gradient na jasnym tle (papier, biel). */
export const STOPS_LIGHT: readonly (readonly [number, string])[] = [
  [0, "#6D1B37"],
  [0.3, "#82283C"],
  [0.6, "#A04F3E"],
  [0.85, "#BE823D"],
  [1, "#D4A63C"],
];

/** Gradient na ciemnym tle (grafit) — jaśniejszy, żeby znak nie ginął. */
export const STOPS_DARK: readonly (readonly [number, string])[] = [
  [0, "#8E3A3C"],
  [0.3, "#AB633F"],
  [0.6, "#CE9750"],
  [1, "#E8C062"],
];

export const COLORS = {
  slate: "#2B3038",
  slateRing: "#3D4450",
  burgundy: "#7A1E3C",
  gold: "#D4A63C",
  paper: "#F4EFE6",
} as const;

/** Ptaszek w plakietce 800×800: skala i przesunięcie jak w pliku źródłowym. */
export const BADGE_TICK_TRANSFORM = "translate(175.9 127.3) scale(0.672)";

function stopsXml(stops: readonly (readonly [number, string])[]) {
  return stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join("");
}

function gradientXml(id: string, tone: "light" | "dark") {
  const { x1, y1, x2, y2 } = AXIS;
  return `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stopsXml(
    tone === "dark" ? STOPS_DARK : STOPS_LIGHT,
  )}</linearGradient>`;
}

/** Samodzielny plik SVG: sam ptaszek na przezroczystym tle. */
export function tickSvg(tone: "light" | "dark" = "light") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${TICK_VIEWBOX}" role="img" aria-label="Realna Lewica"><defs>${gradientXml(
    "g",
    tone,
  )}</defs><path d="${TICK_PATH}" fill="url(#g)"/></svg>\n`;
}

/** Samodzielny plik SVG: okrągła grafitowa plakietka z ptaszkiem. */
export function badgeSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" role="img" aria-label="Realna Lewica"><defs>${gradientXml(
    "g",
    "dark",
  )}</defs><circle cx="400" cy="400" r="396" fill="${COLORS.slate}"/><circle cx="400" cy="400" r="362" fill="none" stroke="${
    COLORS.slateRing
  }" stroke-width="3"/><g transform="${BADGE_TICK_TRANSFORM}"><path d="${TICK_PATH}" fill="url(#g)"/></g></svg>\n`;
}

/** Kwadrat z grafitowym tłem na całą powierzchnię (apple-touch-icon, ikona maskowalna). */
export function squareSvg(tickScale = 0.6) {
  // środek ptaszka w układzie 800×800 ≈ (424, 363); przeskaluj i wyśrodkuj
  const s = tickScale;
  const tx = 400 - 424 * s;
  const ty = 400 - 363 * s;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><defs>${gradientXml(
    "g",
    "dark",
  )}</defs><rect width="800" height="800" fill="${COLORS.slate}"/><g transform="translate(${tx.toFixed(1)} ${ty.toFixed(
    1,
  )}) scale(${s})"><path d="${TICK_PATH}" fill="url(#g)"/></g></svg>\n`;
}
