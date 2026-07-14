# Decisions — Project ATLAS / OVS OS (dev-brandon)

Material architectural and process decisions. A decision becomes **Accepted**
only with founder approval.

## ADR-0001 — Adopt the OVS multi-agent collaboration workflow

- **Status:** Proposed (pending founder approval of the integration PR)
- **Date:** 2026-07-14
- **Deciders:** Brandon Thoreau Kelly (final approver)

### Context

Multiple agents (ChatGPT, Codex, Claude Code running Fable 5) collaborate on
this codebase. Without explicit ownership and branch rules, agents can
overwrite each other's work — this repository's own history shows direct
commits to `main` and a revert/redo cycle that branch-and-PR discipline would
have prevented.

### Decision

Adopt the non-destructive collaboration standard in
`docs/workflows/OVS_AGENT_COLLABORATION_STANDARD.md`:

- ChatGPT owns architecture, milestone specifications, and acceptance review.
- Codex owns primary implementation branches.
- Claude Code (Fable 5) owns independent review and narrowly scoped
  enhancement branches; default mode is review-only.
- GitHub is the source of truth; integration is pull-request-only.
- Brandon Thoreau Kelly is the final approver.
- No direct `main` edits, no force pushes, no destructive resets, no rewriting
  another agent's published history, one milestone per branch, and explicit
  allowed/forbidden paths in every handoff.

### Consequences

- Every milestone gets its own branch and PR; `main` only moves by merge.
- Review findings are severity-ranked (BLOCKER/HIGH/MEDIUM/LOW/NOTE) with
  exact paths and lines.
- Slightly more ceremony per change, traded for zero destructive interference
  between agents.
