# Portfolio source

Next.js (static export), TypeScript, Tailwind CSS v4, Framer Motion, GSAP and Lenis.

```sh
npm ci
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
```

- Content for all languages lives in `lib/content.ts`.
- English is `/`, French is `/fr/`, Arabic is `/ar/` (right-to-left, own fonts); each has its own root layout so `<html lang>` and `dir` are correct. Use logical Tailwind classes (`ms-`, `ps-`, `start-`, `text-start`) or `rtl:` variants, never `left`/`right`.
- `public/` holds favicons, `CNAME`, `robots.txt`, `sitemap.xml`, `llms.txt` and the `cv/` redirect.
- `public/.nojekyll` is required: GitHub Pages' Jekyll step would otherwise drop `_next/`.
- The CSP is a `<meta>` tag (see `lib/shell.tsx`) because GitHub Pages cannot send headers.
