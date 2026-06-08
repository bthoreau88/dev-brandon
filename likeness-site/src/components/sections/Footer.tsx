export function Footer() {
  return (
    <footer
      id="intake"
      className="grain relative border-t border-white/10 px-6 py-20 md:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <span className="mono text-xs tracking-[0.4em] text-accent">
          OVS // CLOSE
        </span>
        <h2 className="glow-accent mt-4 max-w-[16ch] text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-8xl">
          You take the record back.
        </h2>
        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-[46ch] text-sm text-muted">
            Bad games answer. Good games haunt. TAPE-03 does not explain itself —
            it repeats, delays, reflects, withholds, and preserves. You finish
            the runtime carrying a question, not an answer.
          </p>
          <span className="mono inline-flex items-center gap-2.5 rounded-sm border border-teal/40 px-5 py-3 text-[11px] font-semibold tracking-[0.2em] text-teal uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            In Development
          </span>
        </div>
        <div className="mono mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] tracking-[0.2em] text-muted md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Omnia Vanitas Studios — LIKENESS // TAPE-03</span>
          <span>THE ROOM REMEMBERS WHAT THE PLAYER FORGETS</span>
        </div>
      </div>
    </footer>
  );
}
