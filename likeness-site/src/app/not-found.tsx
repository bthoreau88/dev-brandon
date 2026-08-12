import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signal Lost // LIKENESS Universe — OVS",
  description: "This room isn't on the record.",
};

export default function NotFound() {
  return (
    <main className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 38%, rgba(224,83,31,0.12), transparent 70%)",
        }}
      />
      <span className="mono relative text-xs tracking-[0.5em] text-accent">
        OVS // STATE_404
      </span>
      <h1 className="glow-accent relative mt-4 text-[30vw] font-extrabold leading-none tracking-tighter md:text-[16vw]">
        404
      </h1>
      <p className="mono relative mt-1 text-[11px] tracking-[0.35em] text-teal uppercase">
        Signal lost · the tape is blank
      </p>
      <p className="relative mt-6 max-w-[46ch] text-sm leading-relaxed text-muted md:text-base">
        This room isn&rsquo;t on the record. Either it was edited out, or it
        never happened — the universe keeps both stories.
      </p>
      <div className="relative mt-9 flex flex-wrap items-center justify-center gap-2.5">
        <Link
          href="/"
          className="mono rounded-sm bg-accent px-6 py-3 text-[11px] font-semibold tracking-[0.2em] text-black uppercase transition-transform hover:scale-105"
        >
          Back to the top
        </Link>
        <Link
          href="/universe"
          className="mono rounded-sm border border-teal/40 px-6 py-3 text-[11px] font-semibold tracking-[0.2em] text-teal uppercase transition-colors hover:text-foreground"
        >
          Enter the archive
        </Link>
      </div>
      <span className="mono absolute bottom-8 text-[10px] tracking-[0.3em] text-muted">
        THE ROOM REMEMBERS WHAT THE PATH FORGETS
      </span>
    </main>
  );
}
