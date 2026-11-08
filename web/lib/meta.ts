import type { Metadata, Viewport } from "next";
import type { Lang } from "./content";

const SITE = "https://about.hbenali.ovh";

const copy = {
  en: {
    title: "Houssem Ben Ali - DevOps & SecOps Engineer",
    description:
      "Houssem Ben Ali - DevOps & SecOps Engineer specializing in CI/CD, Release Engineering, Cloud Infrastructure, and Security. Based in Tunisia/France.",
    locale: "en_US",
    alt: "fr_FR",
  },
  fr: {
    title: "Houssem Ben Ali - Ingénieur DevOps & SecOps",
    description:
      "Houssem Ben Ali - Ingénieur DevOps & SecOps spécialisé en CI/CD, release engineering, infrastructure cloud et sécurité. Basé en Tunisie/France.",
    locale: "fr_FR",
    alt: "en_US",
  },
} as const;

export function pageMetadata(lang: Lang): Metadata {
  const c = copy[lang];
  const url = lang === "en" ? `${SITE}/` : `${SITE}/fr/`;
  return {
    metadataBase: new URL(SITE),
    title: c.title,
    description: c.description,
    keywords:
      "DevOps, SecOps, Cloud, Docker, Jenkins, CI/CD, Release Engineering, Puppet, Ansible, Infrastructure, Security",
    authors: [{ name: "Houssem Ben Ali" }],
    referrer: "strict-origin-when-cross-origin",
    manifest: "/site.webmanifest",
    alternates: {
      canonical: url,
      languages: { en: `${SITE}/`, fr: `${SITE}/fr/`, "x-default": `${SITE}/` },
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    },
    openGraph: {
      type: "profile",
      title: c.title,
      description: c.description,
      url,
      siteName: "Houssem Ben Ali",
      locale: c.locale,
      alternateLocale: c.alt,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: ["/og-image.png"],
    },
  };
}

export const viewport: Viewport = { themeColor: "#0c1218", colorScheme: "dark" };

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Houssem Ben Ali",
  jobTitle: "DevOps & SecOps Engineer",
  url: `${SITE}/`,
  image: `${SITE}/logo.png`,
  sameAs: ["https://linkedin.com/in/houssembali", "https://github.com/hbenali"],
  knowsAbout: [
    "DevOps", "SecOps", "Cloud Infrastructure", "Docker", "Jenkins", "CI/CD",
    "Release Engineering", "Puppet", "Ansible", "Security",
  ],
};
