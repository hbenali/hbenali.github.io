import type { ReactNode } from "react";
import { arabicFontClasses, fontClasses } from "./fonts";
import { SmoothScroll } from "@/components/SmoothScroll";
import "@/app/globals.css";

// Static hosting cannot send response headers, so the CSP is a <meta> tag.
// Next's static export inlines hydration scripts, hence 'unsafe-inline' for scripts.
export const CSP_BASE =
  "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'";

// Applies a stored light/dark choice before first paint, so there is no flash.
const THEME_SCRIPT = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export function RootShell({
  lang,
  dir = "ltr",
  connect = "'self'",
  children,
}: {
  lang: string;
  dir?: "ltr" | "rtl";
  connect?: string;
  children: ReactNode;
}) {
  return (
    <html lang={lang} dir={dir} suppressHydrationWarning className={lang === "ar" ? arabicFontClasses : fontClasses}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <meta httpEquiv="Content-Security-Policy" content={`${CSP_BASE}; connect-src ${connect}`} />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
