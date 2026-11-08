import { Big_Shoulders, Newsreader, JetBrains_Mono } from "next/font/google";

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

export const fontClasses = `${shoulders.variable} ${newsreader.variable} ${jbmono.variable}`;
