"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const anchors = [
  { label: "Subjects", href: "#subjects" },
  { label: "Visual DNA", href: "#visual-dna" },
  { label: "Scenes", href: "#scenes" },
];

const routes = [
  { label: "Universe", href: "/universe" },
  { label: "Characters", href: "/characters" },
  { label: "Room Testifies", href: "/room-testifies" },
  { label: "Prompts", href: "/prompts" },
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
        className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-md px-5 py-2.5 transition-all duration-300 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
        style={{ width: "calc(100% - 2rem)" }}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-6 w-6 place-items-center rounded-sm bg-accent text-[11px] font-bold text-black">
            ◊
          </span>
          <span className="mono text-sm font-bold tracking-[0.35em]">
            OVS
          </span>
          <span className="mono hidden text-[10px] tracking-[0.3em] text-muted sm:inline">
            // TAPE-03
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {anchors.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          {routes.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="mono text-xs tracking-[0.2em] text-teal/80 uppercase transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/prompts"
          className="mono rounded-sm bg-accent px-5 py-2 text-[11px] font-semibold tracking-[0.15em] text-black uppercase transition-transform hover:scale-105"
        >
          Prompt Library
        </Link>
      </nav>
    </header>
  );
}
