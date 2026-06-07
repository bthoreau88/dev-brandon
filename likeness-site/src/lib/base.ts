// When the site is hosted under a sub-path (e.g. GitHub Pages at
// /dev-brandon), every manually-referenced public asset (images loaded via
// next/image `src` or `new Image()`) must be prefixed with that base path.
// In local dev the env var is unset, so this is a no-op and assets resolve
// from the root as usual.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (p: string) => `${BASE_PATH}${p}`;
