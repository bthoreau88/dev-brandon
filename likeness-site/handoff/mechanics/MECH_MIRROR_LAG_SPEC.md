# Mirror Lag — Design Spec (MECH_MIRROR_LAG_001)

**For sign-off before I write the C++ component.** Keyed to the registry:
`MECH_MIRROR_LAG_001` · beat `BEAT_MIRROR_LAG_001` ("The Mirror Answers Late") · prop
`PROP_MIRROR_001` · double `CHR_DARK_THOREAU_001` · room state `STATE_02_MIRROR_LAG` ·
web `MirrorLagScene.tsx` / `/tapes/mirror-lag`.

> **OVS law for this mechanic:** Camera is a witness. Room is the antagonist. The reflection
> answers late. The double is THOREAU with **wrong timing / posture / gaze only** — never
> gore. `PROP_MIRROR_001` QC: *"Reflection lag must read clearly — no cheap jump scare."*

---

## 1 · What the player experiences

You stand at the bathroom mirror. At first it's an ordinary mirror. Then it stops agreeing
with you — your reflection blinks a beat late, keeps looking at you after you look away,
holds a pose you're not in. Eventually the figure in the glass is you, but *not now* — the
double, standing too still. No sting, no jump. The dread is that it was wrong the whole time
and you only just noticed.

**Trigger (canonical):** inspect `PROP_MIRROR_001` → room state advances to
`STATE_02_MIRROR_LAG` → the mirror begins to diverge. (Chains cleanly off the inspect
system you're finishing now.)

---

## 2 · Divergence stages (driven by room state / data, not scripting)

| Stage | Reads as | How |
|---|---|---|
| **0 · Sync** | a normal mirror | reflection mirrors the player 1:1 |
| **1 · Micro-lag** | blink/turn answers ~0.15–0.35 s late | player head/eye transform replayed to the reflection on a delay |
| **2 · Gaze desync** | you look away; the reflection keeps watching you | reflection head/eyes stay locked to the player after you break eye line |
| **3 · Pose contradiction** | reflection holds a pose you're not in (eyes closed, mid-word) | short authored clip `ANIM_DarkThoreau_*` on the reflection proxy |
| **4 · Presence** | it's the double, standing too still where your reflection should be | swap proxy → `MH_Dark_Thoreau`; hold stillness |

Stages are **data-driven** and gated by `STATE_02_MIRROR_LAG` from the Room State system —
not hard-coded triggers. Change a number, change the behavior.

---

## 3 · Technical approach (UE 5.8)

A real planar reflection can't *contradict* the player — it's always accurate. So we render
a controllable reflection instead:

- **`AOVSMirrorActor`** — a mirror plane mesh + `USceneCaptureComponent2D` → `RenderTarget`,
  shown on the glass via a material (`MI_Mirror_RT`). The capture views a **reflection
  proxy**, not the real player, so the reflection can be driven independently.
- **`UOVSMirrorLagComponent`** — the brain. Each tick it records the player's camera/head/eye
  transform into a **ring buffer**, and drives the reflection proxy from that buffer:
  - Stage 0: replay at 0 s offset (accurate mirror).
  - Stage 1: replay N seconds behind (the lag).
  - Stage 2: override head/eye aim to keep tracking the player.
  - Stage 3: play the contradiction anim instead of replaying.
  - Stage 4: swap proxy mesh to the double, hold pose.
- **Reflection proxy** — a skeletal mesh posed by the component. Greybox baseline = a
  mannequin/placeholder; final = `MH_Thoreau` for stages 0–3 and `MH_Dark_Thoreau` for
  stage 4 (built via the DRYA-style MetaHuman pipeline, applied to Thoreau's double).

**"Answers late" = a transform ring buffer.** That's the whole trick, and it's clean,
tunable, and testable.

---

## 4 · Data schema (registry-first)

New DataTable `DT_MirrorLag` at `/Content/OVS_LIKENESS/09_Data` (row key = stage id):

```
stage_id, lag_seconds, gaze_lock, pose_anim, proxy_mesh, audio_cue, room_state_required
STATE_00_NORMAL,      0.0, false, ,                    MH_Thoreau,      ,                  STATE_00_NORMAL
STAGE_MICRO_LAG,      0.25,false, ,                    MH_Thoreau,      cue_mirror_low,    STATE_02_MIRROR_LAG
STAGE_GAZE_DESYNC,    0.25,true,  ,                    MH_Thoreau,      cue_mirror_low,    STATE_02_MIRROR_LAG
STAGE_POSE_CONTRA,    0.0, true,  ANIM_DarkThoreau_MirrorHold_01, MH_Thoreau, cue_mirror_wrong, STATE_02_MIRROR_LAG
STAGE_PRESENCE,       0.0, true,  ANIM_DarkThoreau_Stillness_01,  MH_Dark_Thoreau, cue_mirror_wrong, STATE_02_MIRROR_LAG
```

Add matching rows/updates to canon: `mechanics_registry.unreal_class` → set to the built
class (`AOVSMirrorActor` / `UOVSMirrorLagComponent`) on build; `asset_manifest` rows for the
proxy meshes + anims. (Registry-first: add the row before the asset exists in engine.)

**Audio** — "Sound is the trespass alarm": `cue_mirror_low` = a low wrong-room tone on
divergence; `cue_mirror_wrong` = a colder shift. **No jump-scare sting.**

---

## 5 · Dependency & build order

Mirror-lag consumes a **room-state signal**, so:

1. **Minimal Room State first** — an enum (`STATE_00_NORMAL … STATE_02_MIRROR_LAG …`) + a
   tiny `UOVSRoomStateComponent`/subsystem that holds current state and broadcasts changes.
   The inspect-on-mirror sets `STATE_02_MIRROR_LAG`. (This is the seed of the full
   `MECH_ROOM_STATE_001` controller — build the minimal version now, expand later.)
2. **Then mirror-lag** consumes that state to pick the stage from `DT_MirrorLag`.

So the next two components I'd write, in order: **(a) minimal Room State**, **(b) Mirror
Lag**. Both C++ components, same clean pattern as the inspector.

---

## 6 · Performance (SceneCapture is expensive — gate it)

- Only tick the capture when the player is **within range of and facing** the mirror.
- Cap capture at a reduced framerate; render the RT at **low resolution + grain** (hides it,
  and fits the analog/VHS aesthetic on purpose).
- Disable the capture entirely outside `STATE_02_MIRROR_LAG` in the bathroom.
- Include a hitch check (per the UE 5.8 QC gate) when the mirror first activates.

---

## 7 · QC gates (from the bible + registry)

- **Reads clearly** — the lag/contradiction is legible at a natural viewing distance; not a
  subliminal frame.
- **No cheap jump scare** — divergence is posture/timing/gaze/audio, never a sting or gore.
- **Identity holds** — the double *is* Thoreau; wrong only in timing/posture/gaze
  (`CHR_DARK_THOREAU_001` lock).
- **Performance** — no hitch on activation; capture gated by proximity.
- **Data-driven** — changing `DT_MirrorLag` changes behavior with no recompile.

---

## 8 · Acceptance (PIE)

1. Bathroom mirror in `STATE_00_NORMAL` → reflection syncs (reads as a normal mirror).
2. Inspect `PROP_MIRROR_001` → room state → `STATE_02_MIRROR_LAG` → Stage 1 micro-lag is
   visibly late.
3. Edit `lag_seconds` in `DT_MirrorLag`, re-import → the lag changes (data-driven proof).
4. Advance stages → gaze desync → pose contradiction → Dark Thoreau presence, all via
   posture/timing/gaze, **zero gore**.
5. Screenshot: the mirror mid-divergence (reflection out of sync with the player).

---

## 9 · Web parity (later, not blocking)

The companion gets `MirrorLagScene.tsx` at `/tapes/mirror-lag` (per `mechanics_registry` +
`BEAT_MIRROR_LAG_001.web_unlock`) — a Three.js/scroll piece echoing the lag as a canonical
"tape." Same IDs, so game and web stay in lockstep. Separate task from the game component.

---

## Sign-off

If this direction is right, say **"build it"** and I'll write, in order: (1) the minimal
`UOVSRoomStateComponent`, then (2) `AOVSMirrorActor` + `UOVSMirrorLagComponent` + the
`DT_MirrorLag` schema — staged in the repo like the inspect component, ready to build +
attach. Placeholder mannequin proxy for the greybox; `MH_Dark_Thoreau` swaps in later.
Flag any change to the stage list, the trigger, or the "no gore / no sting" rule now.
