export function Footer() {
  return (
    <footer
      id="intake"
      className="grain relative border-t border-white/10 px-6 py-20 md:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <span className="mono text-xs tracking-[0.4em] text-accent">
          OVS // INTAKE
        </span>
        <h2 className="glow-accent mt-4 max-w-[14ch] text-5xl font-extrabold leading-[0.92] tracking-tighter md:text-8xl">
          Become the likeness.
        </h2>
        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-[44ch] text-sm text-muted">
            TAPE-03 intake is open. Submit for a subject slot and receive your
            first face. What you do with it is logged.
          </p>
          <a
            href="#"
            className="mono rounded-sm bg-accent px-8 py-3 text-xs font-semibold tracking-[0.15em] text-black uppercase transition-transform hover:scale-105"
          >
            Request Intake
          </a>
        </div>
        <div className="mono mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] tracking-[0.2em] text-muted md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} OVS — LIKENESS // TAPE-03</span>
          <span>ARCHIVE SYS-7 · ALL SUBJECTS LOGGED</span>
        </div>
      </div>
    </footer>
  );
}
