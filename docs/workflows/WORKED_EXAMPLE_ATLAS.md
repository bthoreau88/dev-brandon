# Worked Example — Current Project ATLAS Milestone

This example applies the OVS multi-agent workflow to a real, current milestone
in this repository **without modifying that milestone's implementation**. It
exists so every agent can see the contracts filled in with real values.

## The milestone

- **Milestone:** QuickPhrase Welcome / Login v2
- **Commit:** `0a08bf057d410b68167603aaace601a576e97f66` (tip of `main`)
- **Key files:** `app/src/main/java/com/quickphrase/login/WelcomeActivity.java`,
  `app/src/main/java/com/quickphrase/register/CreateAccountActivity.java`,
  `app/src/main/res/layout/activity_welcome.xml`,
  `app/src/main/res/layout/activity_create_account.xml`

Historical note: this milestone predates the adoption of this standard and was
committed directly to `main` (with one revert/redo cycle: `e32be1d` →
`fb14846` → `0a08bf0`). Under the standard, that sequence is exactly what the
rules prevent — the milestone would have lived on `codex/<task-id>-welcome-login`
and reached `main` through a reviewed PR, and the revert would have been a
review finding instead of published history churn. The implementation itself
is not modified by this example.

## Stage 1 — Implementation (how it runs under the standard)

Codex implements on `codex/<task-id>-welcome-login`, pushes regularly, opens a
PR into `main`, and records allowed paths (`app/src/main/**`), acceptance
criteria, and validation commands before starting.

## Stage 2 — Review contract (filled in with real values)

```
MODE: REVIEW
SOURCE BRANCH: main            # historical milestone; normally codex/<task-id>-welcome-login
SOURCE SHA: 0a08bf057d410b68167603aaace601a576e97f66
ALLOWED: read, test, analyze, comment
FORBIDDEN: edit source branch, push to source branch, merge, force-push
REVIEW: acceptance criteria, regressions, missing tests, architecture, docs
OUTPUT: severity-ranked findings with exact paths and lines
```

The reviewer works in an isolated worktree:

```bash
git fetch origin
git worktree add ../dev-brandon-claude-review 0a08bf057d410b68167603aaace601a576e97f66
```

Findings come back as BLOCKER / HIGH / MEDIUM / LOW / NOTE with exact paths,
e.g. `app/src/main/java/com/quickphrase/login/WelcomeActivity.java:1`. Nothing
on the source is edited.

## Stage 3 — Enhancement handoff (hypothetical, filled in for illustration)

If review found, say, no instrumented test around the login flow, the founder
or architect would issue a handoff before any Claude write occurs:

```
Task ID: ATLAS-QP-001
Mode: ENHANCE
Source branch: codex/<task-id>-welcome-login
Source SHA: 0a08bf057d410b68167603aaace601a576e97f66
Target branch: claude/enhance-atlas-qp-001-login-tests
Allowed paths: app/src/androidTest/**, app/src/test/**
Forbidden paths: app/src/main/**, build files
Acceptance criteria: welcome→create-account navigation covered; app behavior unchanged
Validation commands: ./gradlew test connectedAndroidTest (requires the Gradle wrapper, not yet committed)
```

The enhancement branch is based on the exact SHA above, and its PR targets the
implementation branch — not `main`.

## Stages 4–6 — Architecture review, founder approval, merge

ChatGPT reviews the combined PR against the ATLAS roadmap; Brandon Thoreau
Kelly approves; the PR merges into `main` via GitHub; `CHANGELOG.md` and
`ROADMAP.md` are updated and the handoff is closed.

Nothing in this example changes the Welcome / Login implementation.
