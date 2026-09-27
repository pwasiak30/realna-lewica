import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Realna Lewica";
const BASE = import.meta.env.BASE_URL;
const DESCRIPTION =
  "Deklaracja programowa Realnej Lewicy. Pensja, ciało, mieszkanie i bezpieczeństwo — z jawnym rachunkiem, bez obietnic, których nie da się sfinansować w tej kadencji.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — socjaldemokracja realistyczna` },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#870f57" },
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
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
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
