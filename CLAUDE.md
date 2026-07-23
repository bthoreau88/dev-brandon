# CLAUDE.md — OVS Tooling Layer Boundary

Project guidance for Claude Code. This file records the OVS OS tooling-layer
policy so the two layers of the stack do not compete.

> **Scope note (read this first):** This is a **policy record and guidance
> layer**, not runtime enforcement. Claude Code reads `CLAUDE.md`, so the
> precedence rules below shape behavior — but a `CLAUDE.md` line **cannot**
> disable an auto-triggering skill or set an install-time env var. The
> config-level suppressions in the last section require the Superpowers
> install they refer to; that install is **not present in this repo/session**,
> so those items are documented as intent, not applied here.

## The two layers

OVS OS runs a two-layer stack. Keep them in their lanes.

### Strategic layer — owned by OVS modes (manual, paste-triggered)
`BUILD`, `DECIDE`, `STRESS-TEST`, `SCOPE-CUT` decide **what** gets built,
**whether** it should be, and what to cut. This is the thinking layer and
always sits above code.

### Execution layer — owned by Superpowers (auto-triggered)
TDD, git worktrees, code review, planning, branch-finishing, subagents, and
debugging govern **how** code gets built once the strategic layer has cleared
the work.

## Rule of precedence

The strategic layer is upstream. Superpowers does not begin execution
scaffolding until scope is locked by `BUILD` (or the task is explicitly
mechanical). If Superpowers' brainstorming fires at the **start** of work, it
is out of lane — `BUILD` owns scope-lock.

## Session boundary

- Superpowers owns **execution-start** (worktree, TDD setup).
- OVS `SESSION START` / `SESSION END` paste-blocks own **context handoff**
  (`CLAUDE.md` / `PROGRESS.md`, commit cadence).
- These are **not** the same event — keep both.

## Config-level suppressions (intent — apply where Superpowers is installed)

These must be enforced at config, not by this doc alone. They target a
Superpowers install; enforce them in that environment:

1. **Superpowers `brainstorming` skill — DISABLED.** `BUILD` owns pre-draft
   scope questioning. Remove/disable the skill folder in the Superpowers
   install (a doc line will not stop its auto-trigger).
2. **Debugging — single path.** Superpowers' 4-phase RCA is the one debug
   path. Stand down the `engineering:debug` plugin skill so the two do not
   claim the same triggers.
3. **Telemetry consent gate.** Set `SUPERPOWERS_DISABLE_TELEMETRY` on install.
   No phone-home.

> **Status in this environment:** none of items 1–3 are applied here —
> Superpowers is not installed, the `brainstorming` skill folder does not
> exist on disk, no `engineering:debug` skill is enabled, and there is no
> harness settings file to hold the env var. Reapply items 1–3 in the actual
> Superpowers install to make them effective.
