# Roadmap — Project ATLAS / OVS OS (dev-brandon)

This roadmap was created alongside the adoption of the multi-agent workflow.
ChatGPT owns architecture and milestone specifications; entries here should be
refined by the architect and approved by the founder.

## Process

- [x] Adopt the OVS multi-agent collaboration workflow
      (`docs/workflows/OVS_AGENT_COLLABORATION_STANDARD.md`) — this PR.
- [ ] Founder decision on which repository is canonical for OVS OS
      (this repo, `2025May_Team04`, or a dedicated `OVS-OS` repository).
- [ ] Route all future milestones through `codex/<task-id>-<slug>` branches
      and pull requests; no further direct commits to `main`.

## Product (QuickPhrase Android app)

- [x] Welcome / Login v2 (`0a08bf0`, current `main`).
- [ ] Commit the Gradle wrapper (`gradlew`, `gradle/wrapper/**`) so agents can
      run `./gradlew build test` as the repository validation command.
- [ ] Add a root `.gitignore`; untrack generated/machine-local files currently
      in git (`.gradle/**`, `build/**`, `local.properties`,
      `.idea/workspace.xml`) — `local.properties` embeds a machine-local SDK
      path and should never be tracked.
- [ ] Next feature milestone per architect specification, on a
      `codex/<task-id>-<slug>` branch.
