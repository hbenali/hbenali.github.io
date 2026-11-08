/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: GitHub Pages serves the generated `out/` directory.
  output: "export",
  // /fr/ must be fr/index.html: GitHub Pages does not map a trailing slash to fr.html.
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // Lets the unmatched-URL 404 render its own root layout (needed with several root layouts).
  experimental: { globalNotFound: true },
};
export default nextConfig;
