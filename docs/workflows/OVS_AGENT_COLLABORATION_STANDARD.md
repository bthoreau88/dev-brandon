# OVS Agent Collaboration Standard

## Roles

- Founder: Brandon Thoreau Kelly — final approval.
- ChatGPT — architecture, specifications, PR review, roadmap coherence.
- Codex — primary implementation, branches, commits, tests, pull requests.
- Claude Code / Fable 5 — independent review and narrowly scoped enhancement.
- GitHub — canonical source of truth.

Fable 5 is the Claude model used inside Claude Code, not a separate repository actor.

## Workflow states

SPECIFIED → CODEX_IMPLEMENTING → CODEX_PR_OPEN → CLAUDE_REVIEWING → CLAUDE_ENHANCEMENT_PR → ARCHITECT_REVIEW → FOUNDER_APPROVAL → MERGED → DOCUMENTED

## Non-destructive guarantees

- Never force-push shared branches.
- Never rewrite another agent's commit history.
- Never use destructive reset on uncommitted work.
- Never edit another agent's active branch.
- Never merge directly into main.
- Never combine unrelated milestones.
- Resolve conflicts file by file.
- Preserve attribution in commits and PRs.
