export function Footer() {
  return (
    <footer
      id="play"
      className="relative border-t border-white/10 px-6 py-20 md:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <h2 className="glow-cyan max-w-[16ch] text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">
          Become anyone.
        </h2>
        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-[40ch] text-sm text-muted">
            LIKENESS is in closed beta. Claim your slot and get a face that
            isn&apos;t yours.
          </p>
          <a
            href="#"
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Request Access
          </a>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-[11px] tracking-[0.2em] text-muted md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} LIKENESS — THE GAME</span>
          <span>IDENTITY WARFARE · ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}
