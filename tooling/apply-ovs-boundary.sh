#!/usr/bin/env bash
#
# apply-ovs-boundary.sh
# -----------------------------------------------------------------------------
# Enforces the three OVS tooling-layer suppressions in a Superpowers install.
# Run this in the environment where Superpowers is actually installed (NOT in
# the ephemeral Claude-Code-on-the-web session, which has no Superpowers).
#
# Suppressions applied:
#   1. Superpowers `brainstorming` skill  -> DISABLED (folder renamed .disabled)
#   2. engineering:debug plugin skill     -> STOOD DOWN (folder renamed .disabled)
#   3. SUPERPOWERS_DISABLE_TELEMETRY       -> set in ~/.claude/settings.json env
#
# Idempotent: safe to run repeatedly. It only reports what it changes/skips.
# Nothing is deleted — disabled folders are renamed to *.disabled so you can
# revert with a simple `mv`.
# -----------------------------------------------------------------------------
set -euo pipefail

# --- Configurable locations (override via env before running) ----------------
CLAUDE_HOME="${CLAUDE_HOME:-$HOME/.claude}"
SETTINGS_FILE="${SETTINGS_FILE:-$CLAUDE_HOME/settings.json}"
# Roots under which we search for skill folders. Add your Superpowers root here
# if it lives elsewhere (e.g. export SEARCH_ROOTS="$HOME/.claude $HOME/dev/superpowers").
SEARCH_ROOTS="${SEARCH_ROOTS:-$CLAUDE_HOME $HOME/.config/superpowers ./.claude}"

say()  { printf '  %s\n' "$*"; }
head() { printf '\n=== %s ===\n' "$*"; }

disable_skill_dir() {
  # $1 = human label, $2 = skill folder name to match
  local label="$1" name="$2" found=0
  for root in $SEARCH_ROOTS; do
    [ -d "$root" ] || continue
    while IFS= read -r dir; do
      found=1
      if [ -e "${dir}.disabled" ]; then
        say "already disabled: $dir (.disabled exists) — skipping"
      else
        mv "$dir" "${dir}.disabled"
        say "DISABLED: $dir -> ${dir}.disabled"
      fi
    done < <(find "$root" -type d -name "$name" 2>/dev/null)
  done
  if [ "$found" -eq 0 ]; then
    say "no '$name' skill folder found under: $SEARCH_ROOTS (nothing to do)"
  fi
}

# --- 1. Superpowers brainstorming skill --------------------------------------
head "1. Superpowers 'brainstorming' skill -> DISABLED"
disable_skill_dir "brainstorming" "brainstorming"

# --- 2. engineering:debug plugin skill ---------------------------------------
head "2. engineering:debug plugin skill -> STAND DOWN"
# Local plugin install case: disable the debug skill folder under the
# engineering plugin. If the plugin is a claude.ai account plugin (no local
# folder), this reports 'nothing to do' and you must disable it in the UI:
#   claude.ai -> Settings -> Plugins -> engineering -> disable the 'debug' skill
#   (or disable the whole 'engineering' plugin if you don't use its other skills).
disable_skill_dir "engineering:debug" "debug"
say "NOTE: if the above found nothing, engineering is an account-level plugin —"
say "      disable engineering:debug in claude.ai plugin settings (no CLI hook)."

# --- 3. SUPERPOWERS_DISABLE_TELEMETRY ----------------------------------------
head "3. SUPERPOWERS_DISABLE_TELEMETRY -> set in $SETTINGS_FILE"
mkdir -p "$(dirname "$SETTINGS_FILE")"
[ -f "$SETTINGS_FILE" ] || echo '{}' > "$SETTINGS_FILE"
python3 - "$SETTINGS_FILE" <<'PY'
import json, sys
path = sys.argv[1]
try:
    with open(path) as f:
        data = json.load(f) or {}
except (json.JSONDecodeError, FileNotFoundError):
    data = {}
env = data.setdefault("env", {})
if env.get("SUPERPOWERS_DISABLE_TELEMETRY") == "1":
    print("  already set: env.SUPERPOWERS_DISABLE_TELEMETRY=1 — skipping")
else:
    env["SUPERPOWERS_DISABLE_TELEMETRY"] = "1"
    with open(path, "w") as f:
        json.dump(data, f, indent=2)
        f.write("\n")
    print(f"  SET: env.SUPERPOWERS_DISABLE_TELEMETRY=1 in {path}")
PY

head "Done"
say "Restart Claude Code so it re-reads settings and skill folders."
say "Revert any suppression with:  mv <folder>.disabled <folder>"
