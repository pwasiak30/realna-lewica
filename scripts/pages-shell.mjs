import { copyFileSync, existsSync, readdirSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const OUT = "dist/client";
const HOST = "https://realna-lewica.wasiakpawel.pl";

// Podstrony są prerenderowane (vite.pages.config.ts). Powłoka SPA obsługuje tylko nieznane adresy.
if (!existsSync(join(OUT, "index.html"))) {
  copyFileSync(join(OUT, "_shell.html"), join(OUT, "index.html"));
}
copyFileSync(join(OUT, "_shell.html"), join(OUT, "404.html"));
writeFileSync(join(OUT, ".nojekyll"), "");

// sitemap.xml z faktycznie wygenerowanych stron
function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === "assets" ? [] : htmlFiles(path);
    return entry.name.endsWith(".html") ? [relative(OUT, path)] : [];
  });
}

const urls = [
  ...new Set(
    htmlFiles(OUT)
      .filter((file) => !["404.html", "_shell.html"].includes(file))
      .map((file) => "/" + file.replace(/(^|\/)index\.html$/, "").replace(/\.html$/, ""))
      .map((path) => (path.length > 1 ? path.replace(/\/$/, "") : path)),
  ),
].sort((a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b));

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${HOST}${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`,
);
writeFileSync(join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${HOST}/sitemap.xml\n`);
console.log(`pages: ${urls.length} stron w sitemap.xml`);
