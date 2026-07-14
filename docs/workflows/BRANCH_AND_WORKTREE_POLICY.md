# Branch and Worktree Policy

## Branches

- main
- codex/<task-id>-<slug>
- claude/review-<pr-number>
- claude/enhance-<task-id>-<slug>
- integration/<task-id>

## Claude isolated review

```bash
git fetch origin
git worktree add ../dev-brandon-claude-review origin/codex/<task-id>-<slug>
cd ../dev-brandon-claude-review
```

Review worktrees are read-only by policy.

## Claude enhancement

```bash
git switch -c claude/enhance-<task-id>-<slug>
```

Claude opens a PR into the Codex branch or integration branch, not main, unless explicitly instructed.

## Merge order

1. Codex opens implementation PR.
2. Claude reviews.
3. Codex fixes review findings, or Claude opens a narrow enhancement PR.
4. Complete validation passes.
5. ChatGPT performs architecture review.
6. Founder approves if required.
7. Merge into main.
