# Skills Reconciliation — addyosmani/agent-skills → OVS Build Standard

Curated cherry-pick from [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)
(24 skills reviewed). **License: MIT — license gate: PASS.**

No CLAUDE.md / AGENTS.md exists in this repo, so reconciliation was done against the
fallback OVS Build Standard:

- **Gates:** license, consent, token recolor, de-slop
- **Modes:** BUILD, DECIDE, STRESS-TEST, SCOPE-CUT

**Curation rule applied:** keep execution skills that fill gaps the Build Standard does not
already encode; skip anything that duplicates or competes with the planning modes or gates.
The pack's plugin machinery and its `/spec` `/plan` `/build` `/test` `/review` `/ship`
slash commands were **not** installed — the four modes own that ground.

## Decision table (all 24 skills)

| # | Skill | Decision | Reason | Gate / mode mapping |
|---|-------|----------|--------|---------------------|
| 1 | api-and-interface-design | **skip** | Interface/boundary design is a planning-phase call, not an execution gap | Would overlap DECIDE (design decisions) |
| 2 | browser-testing-with-devtools | **skip** | Requires chrome-devtools MCP; this is an Android/Kotlin codebase, no browser surface | No mapping — environment/stack mismatch |
| 3 | ci-cd-and-automation | **skip** | Real gap in principle, but the skill is Node/GitHub-Actions boilerplate-heavy; revisit if CI matures | Would complement BUILD (unsure — see PR notes) |
| 4 | code-review-and-quality | **KEEP** | Five-axis pre-merge review process the Standard doesn't encode | Complements de-slop gate (review is a different phase than slop-removal); feeds BUILD exit |
| 5 | code-simplification | **skip** | Behavior-preserving simplification is exactly what the de-slop gate already owns | Duplicates de-slop gate |
| 6 | context-engineering | **skip** | Owns rules-file/context configuration — that's the Build Standard's own territory | Competes with the Standard itself (CLAUDE.md ownership) |
| 7 | debugging-and-error-recovery | **KEEP** | Systematic root-cause triage (reproduce → localize → fix → guard) fills a real execution gap | Complements BUILD; no mode owns debugging |
| 8 | deprecation-and-migration | **skip** | What-to-remove decisions belong to SCOPE-CUT; execution half is low-relevance here | Overlaps SCOPE-CUT |
| 9 | documentation-and-adrs | **KEEP** | ADRs are the durable record of decisions — nothing in the Standard captures the *why* | Complements DECIDE (records its outputs) |
| 10 | doubt-driven-development | **skip** | Fresh-context adversarial review of in-flight decisions is STRESS-TEST's job | Duplicates STRESS-TEST mode |
| 11 | frontend-ui-engineering | **skip** | Web-specific (WCAG/CSS); its design-token guidance would collide with the token recolor gate | Competes with token recolor gate; stack mismatch |
| 12 | git-workflow-and-versioning | **KEEP** | Atomic commits, save points, semver discipline — no gate or mode owns version control | Complements BUILD; pairs with incremental-implementation |
| 13 | idea-refine | **skip** | Divergent/convergent idea refinement; even triggers on "stress-test my plan" | Duplicates DECIDE + STRESS-TEST |
| 14 | incremental-implementation | **KEEP** | Thin-vertical-slice execution discipline with built-in scope restraint | Complements BUILD; its scope-discipline rule reinforces SCOPE-CUT |
| 15 | interview-me | **skip** | One-question-at-a-time intent extraction is the consent gate + DECIDE intake ground | Duplicates consent gate / DECIDE |
| 16 | observability-and-instrumentation | **skip** | Production telemetry discipline; no production operations surface in this repo yet | Would complement BUILD — no current gap to fill |
| 17 | performance-optimization | **skip** | Measure-first is sound, but no perf requirements exist here; easy to add later | Would complement BUILD — no current gap to fill |
| 18 | planning-and-task-breakdown | **skip** | Task decomposition is exactly what the planning modes orchestrate | Duplicates BUILD/DECIDE planning ground |
| 19 | security-and-hardening | **KEEP** | OWASP patterns, secrets handling, and a three-tier ask-first boundary system — a genuine gap | Complements BUILD; its "Ask First" tier reinforces the consent gate |
| 20 | shipping-and-launch | **skip** | Launch/rollout checklists back the pack's `/ship` command territory; not applicable here | Adjacent to excluded `/ship` ground |
| 21 | source-driven-development | **skip** | Doc-grounded, citation-heavy coding; useful but changes default agent behavior globally (unsure — see PR notes) | Would complement BUILD |
| 22 | spec-driven-development | **skip** | Spec-before-code is the planning modes' entry point | Duplicates DECIDE (and the excluded `/spec` command) |
| 23 | test-driven-development | **KEEP** | Red/green/refactor plus the Prove-It bug-fix pattern; the Standard has no testing doctrine | Complements BUILD (proof of done) and STRESS-TEST (tests as adversarial probes) |
| 24 | using-agent-skills | **skip** | The pack's meta-skill: wires all 24 skills into its lifecycle phases and commands | Would re-import the full plugin framing the modes replace |

**Kept: 7 / Skipped: 17.**

## Local edits to the kept copies (de-slop / token recolor gates)

Only the kept skill directories were copied — none of the pack's `references/`, `commands/`,
`agents/`, or plugin files. The kept SKILL.md files contained pointers to those non-copied
files and to skipped sibling skills; those dangling pointers were trimmed so nothing in this
repo references a file that isn't here. No substantive guidance was changed:

- `test-driven-development`: removed pointers to `browser-testing-with-devtools` and `references/testing-patterns.md`
- `incremental-implementation`: removed pointer to `references/definition-of-done.md`
- `security-and-hardening`: removed three pointers to `references/security-checklist.md`
- `code-review-and-quality`: removed pointers to `performance-optimization`, `references/security-checklist.md`, `references/performance-checklist.md`
- `git-workflow-and-versioning`: removed pointers to `api-and-interface-design`, `deprecation-and-migration`, `shipping-and-launch`

Source: addyosmani/agent-skills @ shallow clone of default branch, 2026-07-13. MIT License,
Copyright (c) 2025 Addy Osmani.
