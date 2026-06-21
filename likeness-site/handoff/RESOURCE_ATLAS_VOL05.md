# Resource Atlas — build a AAA-feeling LIKENESS solo, ~free (VOL 05 condensed)

The actionable essence of the AAA Resource & Gap Bible. Tool-agnostic to the story, so it
serves both LIKENESS : THE GAME (motel) and TAPE 03 (apartment). **Strategic read: the
real AAA gap is not tools — it's time and iteration. Answer = tighter scope at higher
fidelity. One location, a few rooms, two characters. Own that fully.**

## Gap analysis (AAA capability → your free equivalent → status)
| Capability | Free / low-cost equivalent | Gap |
|---|---|---|
| Facial scanning | KIRI Engine / RealityScan + phone (Polycam $8/mo) | 90% closeable |
| Facial animation | Live Link Face (iPhone) + MetaHuman Identity | **closed** |
| Body mocap | Move.ai ($15/mo) / Rokoko | 85% closeable |
| Env materials | Quixel Megascans (free w/ UE5) + Fab free | **closed** |
| Lighting | UE5 Lumen + HDRI Haven | **closed** |
| Props / hard-surface | Fab · Sketchfab · Meshy AI | 80% closeable |
| Sound design | Freesound · ZapSplat · BBC SFX | 75% closeable |
| Music score | LMMS / GarageBand + Splice stems | 70% closeable |
| QA | UE5 Automation + your SQA skills | **closed** |
| Cinematics | UE5 Sequencer + Seedance prompts | 80% closeable |
| Narrative/script | **already written — done** | done |
| UI/UX | Figma free · Rive free · custom CSS | 85% closeable |

## The $0 stack (Tier 1 — a fully functional complete game)
UE5 · MetaHuman Creator + Live Link · Quixel Megascans + Fab · Blender · KIRI Engine ·
Mixamo · Cascadeur · Reaper (60-day) · Wwise indie · Freesound + ZapSplat + BBC · Figma ·
Git + GitHub · DaVinci Resolve. **Total: $0.**

## Budget tiers
- **Tier 1 — $0:** complete, shippable game.
- **Tier 2 — ~$235:** Reaper license, Move.ai 3mo, Polycam Pro 2mo, USB condenser mic, Nomad Sculpt. Significantly elevated.
- **Tier 3 — ~$520–1,100:** + likeness-refinement artist ($150–300), original score ($200–400), hero camcorder prop, **Steam capsule art ($80–200)**, 1 UE5 tech consult.
- **Highest-ROI spend if selling:** likeness refinement + Steam capsule art. Everything else is optional.

## Pipelines worth pinning
- **Character:** Photograph (phone, overcast) → KIRI → Blender cleanup → MetaHuman Mesh-to-MH → Marvelous Designer cloth → Live Link Face. **Golden rule: match the eyes first** (eye shape/depth/iris = 70% of recognition). Limbal ring 0.4–0.6. Strand hair + secondary motion (Groom physics ~0.7).
- **Environment:** greybox at exact real-world scale first → hero room full fidelity → build the Study *wrong on purpose* (alien-but-plausible skyline HDRI, window +20cm).
- **Audio:** Reaper + ReaPlugs chain (ReaEQ→ReaComp→ReaVerbate→-14 LUFS). The Other = same take, pitch −2st + ring mod (0.08) + bitcrush(16-bit) + reversed reverb tail. Record audio with every Live Link take (becomes ADR ref).
- **VFX (all free/built-in):** UE5 Post Process Volume + Niagara. Reflection lag = Scene Capture 2D + 2-frame delay buffer. Rooms rearrange = actor visibility toggle on FOV check. **Horror principle: every shift must be deniable** — chromatic aberration 0.003 baseline (spikes 0.008), never obvious.
- **UI:** fully diegetic — main menu is a CRT, pause is an ejected tape, tape HUD is the camcorder viewfinder. UMG + the CRT material = $0.

## The polish that reads as AAA ($0, 1–4 hrs each)
Bounced light from walls · subsurface on lampshades · dust in light shafts · eyelid micro-
movement · breathing cycle · eye-tracks-on-approach · strand hair physics on head turns ·
footstep material zones · room reverb by size · fingerprints on glass · worn edge darkening ·
DOF on close-ups · chromatic aberration baseline. **Single most important item: footstep
audio variety** — 8 samples/material, ±4% pitch — ~30% of the "feels real" impression.

## 26-week action plan (one primary goal/week)
- **Wks 1–6 Foundation:** UE5 setup + greybox living room → player + interaction + tape trigger → script/prop lock → Brandon face scan → MetaHuman likeness V1 → full greybox apartment.
- **Wks 7–16 Production:** hero room AAA pass → remaining rooms → all hero props → Live Link dialogue → body mocap → retarget → tape playback + CRT shader → reality-shift system → The Other stealth AI → scenes 01–04 playable.
- **Wks 17–26 Polish & Ship:** scenes 05–08 → Wwise audio → lighting final → §10 polish pass → playtest → bug sprint → optimize (60fps) → trailer → Steam page → **ship**.

## The five-volume library (where this fits)
VOL 01 Production Bible · VOL 02 Prompt Library · VOL 03 Week 1 Tutorial · VOL 04
Architecture Reference · **VOL 05 Resource Atlas (this).** "The tools are free. The stack is
documented. The script is written. The architecture is specified. The only remaining
variable is the work."

> Note for the web side: the diegetic-UI and VFX rules here (CRT menu, tape HUD, deniable
> shifts, footstep/atmosphere detail) are the same language our companion site already
> speaks — keep them matched as the game build progresses.
