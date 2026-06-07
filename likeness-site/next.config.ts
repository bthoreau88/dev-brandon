import type { NextConfig } from "next";
import path from "path";

// When deploying under a sub-path (e.g. GitHub Pages at /dev-brandon) the build
// sets NEXT_PUBLIC_BASE_PATH. Locally it is unset, so the site serves from root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a fully static site (HTML/CSS/JS) into `out/` so it can be hosted on
  // any static host, including GitHub Pages — no Node server required.
  output: "export",
  basePath,
  trailingSlash: true,

  // next/image's optimizer needs a server; static export must opt out of it.
  images: { unoptimized: true },

  // Pin the workspace root to this project (avoids picking up unrelated
  // lockfiles in parent directories).
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
