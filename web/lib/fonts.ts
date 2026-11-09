import { Big_Shoulders, Newsreader, JetBrains_Mono, Noto_Naskh_Arabic, Noto_Kufi_Arabic } from "next/font/google";

// Self-hosted at build time by next/font, so the CSP needs no external font origin.
export const shoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["600", "800", "900"],
  variable: "--font-shoulders",
  display: "swap",
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});

// Arabic faces are only attached to the Arabic page, so the other pages never preload them.
export const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-naskh",
  display: "swap",
});

export const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["600", "800"],
  variable: "--font-kufi",
  display: "swap",
});

const latin = `${shoulders.variable} ${newsreader.variable} ${jbmono.variable}`;
export const fontClasses = latin;
export const arabicFontClasses = `${latin} ${naskh.variable} ${kufi.variable}`;
