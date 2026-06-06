"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "The Forge", href: "#forge" },
  { label: "Reveal", href: "#reveal" },
  { label: "Systems", href: "#systems" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
        style={{ width: "calc(100% - 2rem)" }}
      >
        <a
          href="#top"
          className="font-mono text-sm font-bold tracking-[0.3em] text-foreground"
        >
          LIKENESS<span className="text-accent">_</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#play"
          className="rounded-full bg-accent px-5 py-2 text-xs font-semibold text-black transition-transform hover:scale-105"
        >
          Enter Beta
        </a>
      </nav>
    </header>
  );
}
