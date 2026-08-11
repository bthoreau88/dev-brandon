// When the site is hosted under a sub-path (e.g. GitHub Pages at
// /dev-brandon), every manually-referenced public asset (images loaded via
// next/image `src` or `new Image()`) must be prefixed with that base path.
// In local dev the env var is unset, so this is a no-op and assets resolve
// from the root as usual.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (p: string) => `${BASE_PATH}${p}`;

// Production origin for GitHub Pages (user pages). Combined with BASE_PATH it
// yields the absolute URLs Open Graph / Twitter cards require.
export const SITE_ORIGIN = "https://bthoreau88.github.io";

// Absolute URL for a public asset, e.g. ogImage("/og/street.jpg").
export const ogImage = (p: string) => `${SITE_ORIGIN}${BASE_PATH}${p}`;

// Open Graph + Twitter card metadata for a route, pointing at /og/<slug>.jpg.
// Spread into a page's `metadata` export. Type-only import, erased at build.
import type { Metadata } from "next";
export function socialCard(
  slug: string,
  title: string,
  description: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const img = ogImage(`/og/${slug}.jpg`);
  return {
    openGraph: {
      title,
      description,
      siteName: "LIKENESS Universe — OVS",
      type: "article",
      images: [{ url: img, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img],
    },
  };
}
