# ROOM 14 THRESHOLD CASE — CANON INTEGRATION V.003

## Role in LIKENESS

The Room 14 Threshold Case is the canonical diegetic entrance mechanism into the Witness Terminal. It is not a generic menu, loot container, or decorative prop. The visitor encounters a physical evidence case whose state changes according to attention, interruption, refusal, departure, and return.

## Source of truth

Implementation authority lives in `bthoreau88/ovs-likeness-room14`.

Current implementation branch during development: `codex/room14-threshold-case-v001`.

Current envelope schema: `ROOM14-WITNESS-V003`.

## Canon rules

- Sequence: `SEALED -> WITNESS PRESENT -> ARCHIVE EXPOSED`.
- PALIMPSEST is the procedural-memory/body-control mechanism associated with the threshold handshake.
- Room 14 acts as archive, witness, and antagonist.
- Evidence observation changes the witness record.
- Duplicate observation does not manufacture additional memory/contamination.
- Refusal must remain a valid authored action.
- Persistence must be explicitly chosen and remains local by default.
- Entry into Room 14 requires at least one observed evidence record plus a persistence/refusal decision.
- Room 14 receives a serialized witness envelope and may alter its opening response according to memory, contamination, persistence decision, and observed evidence.
- Return visits may recognize prior local witness state only when explicitly persisted.
- No biometric inference, face capture, voice cloning, or involuntary public persistence.
- Visual language must remain original to OVS/LIKENESS; external CSS-object references are technique references only.

## Canonical evidence IDs

- `BRASS_KEY_14`
- `BLACK_DEVICE`
- `VOICE_GAP`
- `LOCKET_TINTYPE`
- `MOTEL_LEDGER_14`

## Narrative handoff

Threshold Case -> `ROOM14-WITNESS-V003` envelope -> `/room/14` -> Witness Terminal response state.

Downstream systems may react to the witness envelope but must not silently redefine its evidence IDs, record semantics, persistence rules, or invent observations that did not occur.
