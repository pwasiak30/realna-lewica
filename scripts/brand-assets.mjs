/**
 * Generuje pliki znaku z danych w src/components/brand.ts:
 *   public/favicon.svg, public/favicon-32.png
 *   public/brand/znak.svg, public/brand/znak-ciemny.svg
 *   public/apple-touch-icon.png, public/icon-192.png, public/icon-512.png, public/icon-maskable-512.png
 *   public/og.jpg (1200×630, podgląd linku w social mediach)
 *
 * Uruchomienie (Node 22.18+ ma type stripping domyślnie):
 *   node scripts/brand-assets.mjs
 * Wymaga Playwright z Chromium (jest w devDependencies).
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";
import { badgeSvg, COLORS, squareSvg, tickSvg } from "../src/components/brand.ts";
import { PARTY } from "../src/data/program.ts";

mkdirSync("public/brand", { recursive: true });

writeFileSync("public/favicon.svg", badgeSvg());
writeFileSync("public/brand/znak.svg", tickSvg("light"));
writeFileSync("public/brand/znak-ciemny.svg", badgeSvg());

const dataUri = (svg) => `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

// Domyślna przeglądarka Playwrighta; CHROMIUM_PATH pozwala wskazać własną (np. /usr/bin/chromium).
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage();

async function renderPng(svg, size, out, transparent = true) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(
    `<html><body style="margin:0;background:transparent"><img src="${dataUri(svg)}" width="${size}" height="${size}" style="display:block"></body></html>`,
  );
  await page.locator("img").screenshot({ path: out, omitBackground: transparent });
}

await renderPng(badgeSvg(), 32, "public/favicon-32.png");
await renderPng(badgeSvg(), 192, "public/icon-192.png");
await renderPng(badgeSvg(), 512, "public/icon-512.png");
await renderPng(squareSvg(0.72), 180, "public/apple-touch-icon.png", false);
await renderPng(squareSvg(0.62), 512, "public/icon-maskable-512.png", false);

// og.jpg — logo poziome + hasło, na papierze
const logo = readFileSync("public/brand/logo-poziome.png").toString("base64");
await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(`<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500&family=Source+Sans+3:wght@600&display=swap" rel="stylesheet">
<style>
  body{margin:0;width:1200px;height:630px;background:${COLORS.paper};display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;padding:72px 80px;font-family:"Source Sans 3",sans-serif;color:${COLORS.slate}}
  img{height:130px;width:auto;display:block;align-self:flex-start}
  h1{font-family:Newsreader,Georgia,serif;font-weight:500;font-size:52px;line-height:1.08;margin:0;letter-spacing:-0.01em}
  h1 span{color:${COLORS.burgundy}}
  p{margin:0;font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:#5f616a;display:flex;justify-content:space-between}
  .bar{position:absolute;left:0;right:0;bottom:0;height:12px;background:linear-gradient(90deg,${COLORS.burgundy},${COLORS.gold})}
</style></head><body>
<img src="data:image/png;base64,${logo}" alt="">
<h1>${PARTY.slogan[0]} ${PARTY.slogan[1]}<br>${PARTY.slogan[2]} <span>${PARTY.slogan[3]}</span></h1>
<p><span>${PARTY.label}</span><span>realna-lewica.wasiakpawel.pl</span></p>
<div class="bar"></div>
</body></html>`);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: "public/og.jpg", type: "jpeg", quality: 88 });

await browser.close();
console.log("Znak: wygenerowano favicon, ikony PWA i og.jpg");
