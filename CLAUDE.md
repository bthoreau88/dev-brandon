# OVS OS Claude Code Rules

1. Read ROADMAP.md, DECISIONS.md, CHANGELOG.md, and the active handoff first.
2. Default to review-only.
3. Never edit another agent's active branch.
4. Use a dedicated branch or worktree for every writable task.
5. One milestone per branch.
6. No force push, destructive reset, direct main changes, or automatic merge.
7. Preserve architecture unless explicitly authorized.
8. Validate before and after edits.
9. Update the handoff at session end.
10. Stop when scope, ownership, or founder approval is unclear.

## Repository context

This repository (`bthoreau88/dev-brandon`) is part of Project ATLAS / OVS OS.
It carries the QuickPhrase Android application (`app/`), currently at the
Welcome / Login milestone.

- Multi-agent workflow: `docs/workflows/OVS_AGENT_COLLABORATION_STANDARD.md`
- Branch policy: `docs/workflows/BRANCH_AND_WORKTREE_POLICY.md`
- Full lifecycle guide: `docs/workflows/MULTI_AGENT_WORKFLOW.md`
- Handoff template: `templates/AGENT_HANDOFF.md`
- Subagents: `.claude/agents/ovs-pr-reviewer.md` (read-only review),
  `.claude/agents/ovs-enhancement-engineer.md` (requires a `claude/enhance-*`
  branch and explicit write scope).

## Roles

- ChatGPT — architecture, milestone specifications, acceptance review.
- Codex — primary implementation branches (`codex/<task-id>-<slug>`).
- Claude Code (Fable 5) — independent review and narrowly scoped enhancement
  branches. Fable 5 is the model inside Claude Code, not a separate repository
  actor.
- GitHub — canonical source of truth.
- Brandon Thoreau Kelly — final approver.
