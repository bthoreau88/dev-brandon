"use client";

import { motion } from "framer-motion";
import { DEVLOG, EXPANSIONS, PHASES } from "@/lib/registry";
import { CompanionShell } from "./CompanionShell";

export function Devlog() {
  return (
    <CompanionShell
      eyebrow="§ DEVLOG // BUILD NOTES"
      title="Production notes."
      intro="What changed, what it didn't touch, and what needs human review. The site is built in expandable milestones, not one-off hacks — every session logged against the shared registry."
    >
      {/* Build log */}
      <div className="mt-12 space-y-px overflow-hidden rounded-md bg-white/5">
        {DEVLOG.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 5) * 0.04 }}
            className="grid grid-cols-1 gap-3 bg-background/80 p-5 sm:grid-cols-[120px_1fr]"
          >
            <span className="mono h-fit w-fit rounded-sm border border-teal/30 px-2.5 py-1 text-[9px] tracking-[0.2em] text-teal">
              {e.tag}
            </span>
            <div>
              <h3 className="text-base font-semibold tracking-tight">{e.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{e.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Phase plan */}
      <div className="mt-16">
        <span className="mono text-xs tracking-[0.4em] text-accent">
          § 14 // PHASE BUILD PLAN
        </span>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((p) => (
            <div
              key={p.n}
              className={`hud-frame rounded-md border p-4 ${
                p.done ? "border-teal/40 bg-teal/[0.04]" : "border-white/10 glass"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="mono text-2xl font-extrabold tracking-tighter text-accent/70">
                  {p.n}
                </span>
                <span
                  className={`mono text-[9px] tracking-[0.2em] ${
                    p.done ? "text-teal" : "text-muted/60"
                  }`}
                >
                  {p.done ? "DONE ✓" : "QUEUED"}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">{p.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expansion modules */}
      <div className="mt-16">
        <span className="mono text-xs tracking-[0.4em] text-accent">
          V002 // EXPANSION MODULES
        </span>
        <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-muted">
          Optional accelerators — they prototype, enrich, test, and market. Per
          the Expansion Law, they never replace the authored story, the locked
          identities, or the shared visual thread.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {EXPANSIONS.map((x) => (
            <div key={x.id} className="glass hud-frame rounded-md p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="mono text-[9px] tracking-[0.25em] text-teal">
                    {x.category}
                  </span>
                  <h3 className="mt-0.5 text-base font-bold tracking-tight">
                    {x.name}
                  </h3>
                </div>
                <span className="mono shrink-0 rounded-sm border border-white/15 px-2 py-1 text-[8px] tracking-[0.15em] text-muted">
                  {x.status}
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">{x.use}</p>
              <p className="mono mt-3 border-t border-white/10 pt-3 text-[10px] leading-relaxed tracking-[0.05em] text-muted/70">
                GATE · {x.gate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CompanionShell>
  );
}
