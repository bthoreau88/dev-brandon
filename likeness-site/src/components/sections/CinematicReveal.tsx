"use client";

import { useEffect, useRef, useState } from "react";
import { BEATS, CINE } from "@/lib/frames";

export function CinematicReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const tickingRef = useRef(false);
  const currentFrameRef = useRef(0);
  const prevVisibleRef = useRef("");

  // Direct-DOM refs for hot updates (no React state churn on scroll).
  const introRef = useRef<HTMLDivElement>(null);
  const outroRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLSpanElement>(null);

  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState<string[]>([]);

  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];
    const done = () => {
      loadedCount++;
      if (loadedCount === CINE.count) setLoaded(true);
    };
    for (let i = 1; i <= CINE.count; i++) {
      const img = new Image();
      img.src = CINE.path(i);
      img.onload = done;
      img.onerror = done;
      imgs.push(img);
    }
    framesRef.current = imgs;
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = (index: number) => {
      const img = framesRef.current[index];
      if (!img) return;
      const cw = window.innerWidth;
      const ch = window.innerHeight;
      ctx.fillStyle = "#050507";
      ctx.fillRect(0, 0, cw, ch);
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = cw / ch;
      let drawW: number;
      let drawH: number;
      if (canvasRatio > imgRatio) {
        drawW = cw;
        drawH = cw / imgRatio;
      } else {
        drawH = ch;
        drawW = ch * imgRatio;
      }
      if (cw <= 768) {
        drawW *= 1.3;
        drawH *= 1.3;
      }
      ctx.drawImage(img, (cw - drawW) / 2, (ch - drawH) / 2, drawW, drawH);
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame(currentFrameRef.current);
    };

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const frameIndex = Math.min(
        CINE.count - 1,
        Math.floor(progress * CINE.count)
      );
      currentFrameRef.current = frameIndex;
      drawFrame(frameIndex);

      // intro headline fades out over first 6%
      if (introRef.current) {
        introRef.current.style.opacity = String(
          Math.max(0, 1 - progress / 0.06)
        );
      }
      // outro CTA fades in after 86%
      if (outroRef.current) {
        outroRef.current.style.opacity = progress >= 0.86 ? "1" : "0";
        outroRef.current.style.pointerEvents =
          progress >= 0.86 ? "auto" : "none";
      }
      // progress bar + sequence readout
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      if (seqRef.current) {
        seqRef.current.textContent = `SEQ ${String(frameIndex + 1).padStart(
          3,
          "0"
        )} / ${CINE.count}`;
      }

      // beat cards — only setState when the visible set actually changes
      const nowVisible = BEATS.filter(
        (b) => progress >= b.show && progress < b.hide
      ).map((b) => b.id);
      const key = nowVisible.join(",");
      if (key !== prevVisibleRef.current) {
        prevVisibleRef.current = key;
        setVisible(nowVisible);
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        update();
        tickingRef.current = false;
      });
    };

    resize();
    update();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [loaded]);

  return (
    <section ref={sectionRef} className="scroll-animation relative">
      <div className="grain sticky top-0 h-screen overflow-hidden bg-background">
        {/* NOTE: placeholder footage, graded to the OVS look. Replace
            /public/frames2 with a DRYA / THOREAU turntable or biomech-sync clip
            (see README) and the grade can be eased back. */}
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
          style={{ filter: "grayscale(0.7) contrast(1.06) brightness(0.82)" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85" />

        {/* intro headline */}
        <div
          ref={introRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <span className="mb-4 font-mono text-xs tracking-[0.4em] text-accent">
            OVS&nbsp;//&nbsp;TAPE-03
          </span>
          <h2 className="max-w-[18ch] text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            When the likeness takes hold, who is left underneath?
          </h2>
        </div>

        {/* beat cards */}
        {BEATS.map((b) => {
          const isVisible = visible.includes(b.id);
          return (
            <div
              key={b.id}
              className={`absolute left-6 top-1/2 max-w-sm -translate-y-1/2 transition-all duration-500 md:left-16 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
            >
              <div className="glass rounded-[20px] p-7">
                <span className="font-mono text-xs tracking-[0.3em] text-accent">
                  {b.index} — {b.title}
                </span>
                <p className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">
                  “{b.quote}”
                </p>
                <span className="mt-5 block font-mono text-[10px] tracking-[0.25em] text-muted">
                  {b.source}
                </span>
              </div>
            </div>
          );
        })}

        {/* outro CTA */}
        <div
          ref={outroRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 transition-opacity duration-500"
        >
          <span className="mono mb-3 text-xs tracking-[0.4em] text-teal">
            SUBJECT STATUS
          </span>
          <h2 className="glow-accent text-5xl font-extrabold tracking-tight md:text-7xl">
            COMBINE.
          </h2>
          <a
            href="#intake"
            className="mono mt-8 rounded-sm bg-accent px-8 py-3 text-xs font-semibold tracking-[0.15em] text-black uppercase transition-transform hover:scale-105"
          >
            Request Intake
          </a>
        </div>

        {/* HUD: sequence readout + progress bar */}
        <div className="pointer-events-none absolute bottom-6 left-0 right-0 px-6 md:px-16">
          <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] text-muted">
            <span ref={seqRef}>SEQ 001 / {CINE.count}</span>
            <span>OVS BIOMECH ENGINE · LIVE</span>
          </div>
          <div className="h-px w-full bg-white/10">
            <div
              ref={barRef}
              className="h-full origin-left bg-accent"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
