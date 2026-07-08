"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollmationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frameCount, setFrameCount] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // In dev we extract frames to /frames/, but Vercel might handle differently.
    // We assume the ffmpeg script created 176 frames or however many it generated.
    // For a dynamic frame count, we try to load frames until we get a 404, but to avoid 404 spam in console,
    // it's best to rely on a fixed framecount or an API. The user specified 120 frames in the Blender script.
    const TOTAL_FRAMES = 176;
    setFrameCount(TOTAL_FRAMES);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Match widescreen architecture
    canvas.width = 1920;
    canvas.height = 1080;

    const currentFrame = (index: number) =>
      `/frames/frame_${(index + 1).toString().padStart(4, "0")}.webp`;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Load images
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    const platform = { frame: 0 };

    const render = () => {
      if (images[platform.frame] && images[platform.frame].complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[platform.frame], 0, 0, canvas.width, canvas.height);
      }
    };

    // Draw first frame immediately when it loads
    if (images[0]) {
      images[0].onload = render;
    }

    // GSAP ScrollTrigger
    const trigger = gsap.to(platform, {
      frame: TOTAL_FRAMES - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: "main.lms-content", // Must wrap content in <main className="lms-content">
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: render,
      },
    });

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-black pointer-events-none">
      <canvas
        ref={canvasRef}
        id="lms-background"
        className="w-full h-full object-cover opacity-80"
      />
      {/* Fallback gradient if images aren't loaded or JS fails */}
      {!imagesLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] to-[#0f172a] -z-10" />
      )}
    </div>
  );
}
