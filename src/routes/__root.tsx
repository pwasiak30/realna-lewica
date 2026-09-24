import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Realna Lewica";
const BASE = import.meta.env.BASE_URL;
const SITE_URL = "https://realna-lewica.wasiakpawel.pl";
const DESCRIPTION =
  "Deklaracja programowa Realnej Lewicy. Pensja, ciało, mieszkanie i bezpieczeństwo — z jawnym rachunkiem, bez obietnic, których nie da się sfinansować w tej kadencji.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — socjaldemokracja realistyczna` },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#2b3038" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: APP_NAME },
      { property: "og:title", content: `${APP_NAME} — socjaldemokracja realistyczna` },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: `${SITE_URL}/og.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "pl_PL" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: `${BASE}favicon.svg` },
      { rel: "icon", type: "image/png", sizes: "32x32", href: `${BASE}favicon-32.png` },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: `${BASE}manifest.webmanifest` },
      { rel: "apple-touch-icon", href: `${BASE}apple-touch-icon.png` },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
