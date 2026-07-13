# OVS Build Standard

This file is the source of truth for how agents work in this repo. Skills in
`.claude/skills/` guide execution; **this file owns planning and the gates.** When
a skill and this file disagree, this file wins.

## The Four Gates

Every change clears these before it lands. A gate is a hard check, not a preference.

1. **License** — Any dependency, imported code, or vendored material must carry a
   permissive license (MIT, BSD, Apache-2.0). Copyleft or unclear licensing stops
   the work and gets raised, not worked around. Record the license of anything
   brought in from outside.

2. **Consent** — Don't silently fill an ambiguous requirement. If intent is
   underspecified, surface the gap and get a decision before building. Destructive
   or outward-facing actions (deleting, force-pushing, publishing, anything a user
   would want to approve) need explicit go-ahead. Approval in one context does not
   carry to the next.

3. **Token recolor** — Material imported from an external source must be recolored
   to this project's own identity before it lands: strip source-specific branding,
   naming, palette, and design tokens; replace them with ours. Nothing ships still
   wearing the upstream's colors.

4. **De-slop** — Remove filler before it lands: dead cross-references, pointers to
   files that weren't copied, restated-obvious comments, hedge text, and
   AI-generated bloat. What lands is what a careful author would have written, not
   what a generator emitted.

## The Four Modes

These are the planning vocabulary. Name the mode you're in; don't improvise a
parallel process on top of them.

- **BUILD** — Execution. Write the change in thin vertical slices, each leaving the
  system working and tested. This is where the `.claude/skills/` execution skills
  apply.

- **DECIDE** — Choosing among options: which approach, which design, which
  dependency, what to keep. Produces a decision with a stated reason. Durable
  decisions get recorded (see the documentation-and-adrs skill).

- **STRESS-TEST** — Adversarial review of an in-flight decision before it stands.
  Bias to disprove, not approve. Cheaper here than after it ships.

- **SCOPE-CUT** — Deciding what *not* to build, what to remove, what to defer.
  Code is a liability; less surface is a feature. Owns removal and deprecation
  calls.

## Skills

The `.claude/skills/` set was cherry-picked from
[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) (MIT) to fill
execution gaps this Standard does not encode — testing, incremental delivery,
debugging, security, review, git, and ADRs. They are **subordinate to the modes**:
skills tell you how to execute inside BUILD; they do not replace DECIDE,
STRESS-TEST, or SCOPE-CUT. The pack's own `/spec /plan /build /test /review /ship`
lifecycle commands were deliberately **not** installed — the four modes own that
ground. See `.claude/skills/SKILLS-RECONCILIATION.md` for the full keep/skip
rationale.
