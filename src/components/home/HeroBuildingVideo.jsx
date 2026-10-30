import React, { useRef, useState, useEffect } from "react";

export function HeroBuildingVideo() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    let isCancelled = false;
    let animId = null;

    const processFrame = () => {
      if (isCancelled) return;

      if (video.readyState >= 2) {
        const w = canvas.width;
        const h = canvas.height;
        ctx.drawImage(video, 0, 0, w, h);

        const imgData = ctx.getImageData(0, 0, w, h);
        const d = imgData.data;
        const len = d.length;

        // High-performance real-time luma/chroma transparency key:
        // Sets normalized canvas white background to 100% transparent alpha (0).
        for (let i = 0; i < len; i += 4) {
          const r = d[i];
          const g = d[i + 1];
          const b = d[i + 2];
          const min = r < g ? (r < b ? r : b) : (g < b ? g : b);

          if (min > 235) {
            // Smooth feather between 235 and 250
            const a = (250 - min) / 15;
            d[i + 3] = a <= 0 ? 0 : (a >= 1 ? 255 : (a * 255) | 0);
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setIsLoaded(true);
      }

      if ("requestVideoFrameCallback" in video) {
        video.requestVideoFrameCallback(processFrame);
      } else {
        animId = requestAnimationFrame(processFrame);
      }
    };

    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});

    if ("requestVideoFrameCallback" in video) {
      video.requestVideoFrameCallback(processFrame);
    } else {
      animId = requestAnimationFrame(processFrame);
    }

    return () => {
      isCancelled = true;
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center select-none py-2">
      {/* ── Soft Warm Under-Glow for 3D Architectural Grounding (expanded for 35% larger scale) ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[85%] rounded-full bg-gradient-to-br from-[#3A4F99]/[0.08] via-[#B2CEE2]/[0.12] to-transparent blur-3xl pointer-events-none" />

      {/* 
        ── True Transparent 3D Architectural Canvas (Expanded ~35% from 580px to 800px) ──
        The canvas width/height is set to native 960x720 for crisp, high-definition lines.
      */}
      <div className="relative w-full max-w-[780px] lg:max-w-[820px] xl:max-w-[860px] aspect-[4/3] flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={960}
          height={720}
          className={`w-full h-full object-contain pointer-events-none transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Hidden video source stream */}
        <video
          ref={videoRef}
          className="hidden"
          src="/videos/surya_building_sketch_3d.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}

export default HeroBuildingVideo;
