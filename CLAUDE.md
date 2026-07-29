# CLAUDE.md — Skill Automation Rules

This file wires two general-purpose skills for this Android/Gradle project. It is **additive** — it
adds skill-automation only and does **not** change how the app is built, structured, or styled.
The skills live in `.claude/skills/`.

## Auto-invoke rules

1. **Requirements first — `grill-me`.** Before starting any non-trivial feature, screen, or design
   decision, invoke the `grill-me` skill to interview the user and checkpoint answers to a
   `brainstorms/` file. Skip for trivial edits or when the user says to skip.

2. **Wrap-up — `session-handoff`.** Before the user runs `/clear`, or whenever they ask to "wrap up"
   or "hand off", invoke the `session-handoff` skill and produce the chat-only handoff. Offer it
   proactively when context is getting large.

## Not wired here

- **`frontend-design`** is a web/UI-design skill and is intentionally **not** auto-invoked in this
  Android repo. If you want it available, copy it from the directory repo's
  `.claude/skills/frontend-design/` and add a rule.

## Notes

- These rules are read on every fresh clone, so they also apply inside cloud **Routines**.
- The `.claude/settings.json` SessionStart hook prints `.claude/skill-policy.md` at session start.
- The full skills directory and the per-skill rationale (why these are automated) live in the
  companion **`2025May_Team04`** repo (`AUTOMATION.md`).
