"use client";

import { useEffect } from "react";

const KEY = "lang";

// Static hosting has no Accept-Language handling, so detection runs in the browser.
// It only moves a visitor from the English home page to /fr/ or /ar/, and only when they
// have not picked a language themselves (see rememberLang in Header).
export function LangRedirect() {
  useEffect(() => {
    try {
      if (localStorage.getItem(KEY)) return;
    } catch {
      // storage blocked: detect anyway
    }
    const prefs = navigator.languages?.length ? navigator.languages : [navigator.language];
    const first = prefs
      .map((l) => l?.toLowerCase().split("-")[0])
      .find((l) => l === "en" || l === "fr" || l === "ar");
    if (first === "fr" || first === "ar") window.location.replace(`/${first}/${window.location.hash}`);
  }, []);
  return null;
}

export function rememberLang(lang: string) {
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    // storage blocked: the choice is just not remembered
  }
}
