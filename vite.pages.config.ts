import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Statyczny build dla GitHub Pages (domena: realna-lewica.wasiakpawel.pl).
 * Każda podstrona jest prerenderowana do własnego pliku HTML (o-nas.html,
 * program/zdrowie.html …), więc GitHub zwraca 200 z pełną treścią zamiast
 * 404 + pustej powłoki. _shell.html zostaje jako 404.html dla nieznanych adresów.
 */
export default defineConfig({
  base: "/",
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Powłoka SPA (→ 404.html) renderowana z osobnego adresu, żeby nie zajęła miejsca strony głównej.
      spa: {
        enabled: true,
        maskPath: "/?spa-shell",
      },
      pages: [{ path: "/" }],
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: false,
        failOnError: true,
        // tylko strony — bez plików z public/ (np. /brand/logo-poziome.png) i kotwic #p-5
        filter: ({ path }) => !/\.[a-z0-9]+$/i.test(path) && !path.includes("#"),
      },
      // sitemap.xml pisze scripts/pages-shell.mjs z listy wygenerowanych stron
      sitemap: { enabled: false },
    }),
    viteReact(),
  ],
});
