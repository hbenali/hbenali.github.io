# Portfolio source

Next.js (static export), TypeScript, Tailwind CSS v4, Framer Motion, GSAP and Lenis.

```sh
npm ci
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
```

- Content for both languages lives in `lib/content.ts`.
- English is `/`, French is `/fr/`; each has its own root layout so `<html lang>` is correct.
- `public/` holds favicons, `CNAME`, `robots.txt`, `sitemap.xml`, `llms.txt` and the `cv/` redirect.
- `public/.nojekyll` is required: GitHub Pages' Jekyll step would otherwise drop `_next/`.
- The CSP is a `<meta>` tag (see `lib/shell.tsx`) because GitHub Pages cannot send headers.
