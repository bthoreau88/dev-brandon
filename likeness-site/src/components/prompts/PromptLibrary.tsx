"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATEGORIES, PROMPTS, toPasteBlock, type Prompt } from "@/lib/prompts";

function CopyButton({ p }: { p: Prompt }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(toPasteBlock(p));
          setDone(true);
          setTimeout(() => setDone(false), 1400);
        } catch {
          setDone(false);
        }
      }}
      className="mono rounded-sm border border-white/15 px-3 py-1.5 text-[10px] tracking-[0.2em] text-muted uppercase transition-colors hover:border-accent/60 hover:text-foreground"
    >
      {done ? "Copied ✓" : "Copy"}
    </button>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className="mt-3">
      <span className="mono block text-[9px] tracking-[0.3em] text-teal">{k}</span>
      <p className="mt-1 text-[13px] leading-relaxed text-muted">{v}</p>
    </div>
  );
}

export function PromptLibrary() {
  const [active, setActive] = useState<string>("ALL");

  const shown = useMemo(
    () => (active === "ALL" ? PROMPTS : PROMPTS.filter((p) => p.cat === active)),
    [active]
  );

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-28 md:px-8">
      {/* header */}
      <Link
        href="/"
        className="mono text-[11px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-foreground"
      >
        ← OVS // LIKENESS
      </Link>
      <span className="mono mt-8 block text-xs tracking-[0.4em] text-accent">
        OVS · TAPE 03 · VOLUME 02
      </span>
      <h1 className="glow-accent mt-3 text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl">
        Master Visual
        <br />
        Prompt Library.
      </h1>
      <p className="mt-5 max-w-[64ch] text-sm leading-relaxed text-muted md:text-base">
        Every image asset across TAPE 03 as a paste-ready shot order in the OVS
        six-part skeleton. Tested across Midjourney v6+, Flux, SDXL, Imagen, Sora
        (still), Nano Banana. Paste sections 2–6 as a single block; the bible is
        the filter. Prompts are shot orders, not mood requests.
      </p>

      {/* category filter */}
      <div className="mt-10 flex flex-wrap gap-2">
        <button
          onClick={() => setActive("ALL")}
          className={`mono rounded-sm px-3.5 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors ${
            active === "ALL"
              ? "bg-accent text-black"
              : "border border-white/15 text-muted hover:text-foreground"
          }`}
        >
          All · {PROMPTS.length}
        </button>
        {CATEGORIES.map((c) => {
          const n = PROMPTS.filter((p) => p.cat === c.id).length;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`mono rounded-sm px-3.5 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors ${
                active === c.id
                  ? "bg-accent text-black"
                  : "border border-white/15 text-muted hover:text-foreground"
              }`}
            >
              {c.id} · {c.title} · {n}
            </button>
          );
        })}
      </div>

      {active !== "ALL" && (
        <p className="mono mt-5 max-w-[60ch] text-xs leading-relaxed tracking-[0.05em] text-muted">
          {CATEGORIES.find((c) => c.id === active)?.blurb}
        </p>
      )}

      {/* grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {shown.map((p) => (
          <article
            key={p.id}
            className="hud-frame glass relative overflow-hidden rounded-md p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="mono text-[10px] tracking-[0.3em] text-teal">
                  {p.id} · {p.label} · {p.ratio}
                </span>
                <h3 className="mt-1 text-base font-bold tracking-tight">
                  {p.title}
                </h3>
              </div>
              <CopyButton p={p} />
            </div>
            <Field k="SCENE" v={p.scene} />
            <Field k="CAMERA" v={p.camera} />
            <Field k="LIGHT & COLOR" v={p.light} />
            <div className="mt-3">
              <span className="mono block text-[9px] tracking-[0.3em] text-accent/80">
                NEGATIVE
              </span>
              <p className="mono mt-1 text-[11px] leading-relaxed text-muted/80">
                {p.negative}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
