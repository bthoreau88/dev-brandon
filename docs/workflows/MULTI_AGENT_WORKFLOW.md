# OVS Multi-Agent Workflow — Full Lifecycle Guide

This document explains, end to end, how a milestone moves from specification
to merged, documented code under the OVS agent collaboration standard.
Normative rules live in `OVS_AGENT_COLLABORATION_STANDARD.md` and
`BRANCH_AND_WORKTREE_POLICY.md`; this guide explains how they compose.

## Ownership

| Actor | Owns |
|---|---|
| ChatGPT | Architecture, milestone specifications, acceptance review |
| Codex | Primary implementation branches (`codex/<task-id>-<slug>`) |
| Claude Code (Fable 5) | Independent review; narrowly scoped enhancement branches (`claude/enhance-*`) |
| GitHub | Canonical source of truth |
| Brandon Thoreau Kelly | Final approval |

Fable 5 is the model Claude Code runs on; it is not a separate repository
actor. Claude Code is the repository actor.

## Hard rules (enforced at every stage)

- No direct edits to `main`.
- No force pushes.
- No destructive resets.
- No rewriting another agent's published history.
- No agent edits another agent's active branch.
- One milestone per branch.
- Integration happens only through pull requests.
- Every handoff states explicit allowed paths and forbidden paths.

## Lifecycle

`SPECIFIED → CODEX_IMPLEMENTING → CODEX_PR_OPEN → CLAUDE_REVIEWING →
CLAUDE_ENHANCEMENT_PR → ARCHITECT_REVIEW → FOUNDER_APPROVAL → MERGED →
DOCUMENTED` (see `WORKFLOW_STATE.json`).

### 1. Codex implementation

ChatGPT writes the milestone specification. Codex records the task ID, branch,
allowed paths, forbidden paths, acceptance criteria, validation commands, and
founder approval boundaries — then implements on `codex/<task-id>-<slug>`,
pushes regularly, and opens a PR. No unrelated cleanup on the branch.

### 2. Claude review (default mode: REVIEW)

Claude Code reviews the Codex branch or PR without editing it. The review is
initiated with an explicit contract:

```
MODE: REVIEW
SOURCE BRANCH: codex/<task-id>-<slug>
SOURCE SHA: <exact sha>
PR: <url>
ALLOWED: read, test, analyze, comment
FORBIDDEN: edit source branch, push to source branch, merge, force-push
```

Claude runs validation, compares against acceptance criteria, and returns
findings ranked **BLOCKER / HIGH / MEDIUM / LOW / NOTE**, each with exact file
paths and line references. Use the `ovs-pr-reviewer` subagent for this; it is
read-only by construction.

### 3. Claude enhancement PR (only on explicit handoff)

Claude Code enters ENHANCE mode only when a handoff (see
`templates/AGENT_HANDOFF.md`) provides all of: source branch, source SHA,
target branch, allowed paths, forbidden paths, acceptance criteria, and
validation commands. Claude then:

1. Creates `claude/enhance-<task-id>-<slug>` based on the exact Codex SHA.
2. Changes only what is necessary inside the allowed paths.
3. Preserves Codex work unless fixing a documented defect.
4. Adds tests.
5. Opens a PR into the Codex branch or assigned integration branch — not
   `main` unless explicitly instructed.

Use the `ovs-enhancement-engineer` subagent, which refuses to edit unless the
branch begins with `claude/enhance-` and write scope is explicit.

### 4. ChatGPT architecture review

After validation passes on the combined work, ChatGPT reviews the PR for
architectural coherence with the roadmap and the milestone specification.

### 5. Founder approval

Brandon Thoreau Kelly gives final approval. Anything touching approval
boundaries recorded at task start waits here; no agent merges automatically.

### 6. Merge and documentation update

The PR is merged into `main` through GitHub. The merging session then updates
`CHANGELOG.md`, `ROADMAP.md`, and — if a material architectural decision was
accepted — `DECISIONS.md`, and closes the handoff record. The milestone state
becomes DOCUMENTED.

## Conflict handling

Resolve conflicts file by file, never with a destructive reset. Preserve
attribution in commits and PRs. If ownership or scope is unclear at any point,
stop and escalate to the founder rather than guessing.
