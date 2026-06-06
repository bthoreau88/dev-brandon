"use client";

import { useEffect, useRef, useState } from "react";
import { HERO } from "@/lib/frames";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);
  const currentFrameRef = useRef(0);

  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Preload every frame before the animation starts.
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];
    const done = () => {
      loadedCount++;
      setLoadProgress(loadedCount / HERO.count);
      if (loadedCount === HERO.count) setLoaded(true);
    };
    for (let i = 1; i <= HERO.count; i++) {
      const img = new Image();
      img.src = HERO.path(i);
      img.onload = done;
      img.onerror = done;
      imgs.push(img);
    }
    framesRef.current = imgs;
  }, []);

  // Scroll-driven canvas engine (RAF + ticking ref, DPR-aware, cover-fit).
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
        HERO.count - 1,
        Math.floor(progress * HERO.count)
      );
      currentFrameRef.current = frameIndex;
      drawFrame(frameIndex);
      if (heroTextRef.current) {
        heroTextRef.current.style.opacity = String(
          Math.max(0, 1 - progress / 0.08)
        );
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
        <canvas ref={canvasRef} className="block h-full w-full" />

        {/* cinematic vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />

        {/* hero headline (fades out over first 8% of scroll) */}
        <div
          ref={heroTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <span className="mb-5 font-mono text-xs tracking-[0.45em] text-accent">
            IDENTITY&nbsp;WARFARE
          </span>
          <h1 className="glow-cyan text-[18vw] font-extrabold leading-[0.85] tracking-tighter md:text-[12vw]">
            LIKENESS
          </h1>
          <p className="mt-4 max-w-[24ch] text-balance text-sm text-muted md:text-base">
            Become anyone. Answer to no one. Scroll to enter the forge.
          </p>
          <div className="mt-10 flex flex-col items-center gap-2 text-muted">
            <span className="font-mono text-[10px] tracking-[0.3em]">
              SCROLL
            </span>
            <span className="h-10 w-px animate-pulse bg-gradient-to-b from-accent to-transparent" />
          </div>
        </div>

        {/* preload overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background">
            <span className="mb-6 font-mono text-xs tracking-[0.4em] text-accent">
              CALIBRATING&nbsp;LIKENESS
            </span>
            <div className="h-px w-56 overflow-hidden bg-white/10">
              <div
                className="h-full bg-accent transition-[width] duration-150"
                style={{ width: `${Math.round(loadProgress * 100)}%` }}
              />
            </div>
            <span className="mt-4 font-mono text-[10px] text-muted">
              {Math.round(loadProgress * 100)}%
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
