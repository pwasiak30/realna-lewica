# Realna Lewica

Strona deklaracji programowej. Socjaldemokracja realistyczna.

Twoja pensja. Twoje ciało. Twoje mieszkanie. Twoje bezpieczeństwo.

Wersja złożona: 23 września 2026.

## Uruchomienie

```bash
npm install
npm run dev
```

Potem otwórz `http://localhost:8080`.

W środku: postulaty, pełny program z wyszukiwarką, aneks kosztów i kalkulator skali PIT.

## Znak i logo

Dane znaku (kształt ptaszka, gradient bordo → złoto, kolory) są w `src/components/brand.ts`.
Komponenty: `Mark`, `Badge`, `Wordmark` w `src/components/mark.tsx`.
Favicon, ikony PWA i `og.jpg` generuje:

```bash
npm run brand
```

Oryginalne pliki logo: `public/brand/`.

## Publikacja (GitHub Pages)

`npm run build:pages` prerenderuje każdą podstronę do osobnego pliku HTML
(`o-nas.html`, `program/zdrowie.html` …) i pisze `sitemap.xml` oraz `robots.txt`.
Nieznane adresy obsługuje `404.html` (powłoka SPA).
