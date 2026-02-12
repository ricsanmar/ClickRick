"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let x = -1000;
    let y = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      glow.style.opacity = "1";
    };

    const onMouseLeave = () => {
      glow.style.opacity = "0";
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      currentX = lerp(currentX, x, 0.08);
      currentY = lerp(currentY, y, 0.08);
      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;
      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    tick();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow hidden md:block"
      style={{ opacity: 0 }}
      aria-hidden="true"
    />
  );
}
