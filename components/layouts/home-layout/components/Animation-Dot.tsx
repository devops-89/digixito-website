"use client";

import { useEffect, useRef } from "react";

export default function AnimatedDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dotSize = 2;
    const spacing = 42; // distance between dots
    const animationSpeed = 0.002;

    // Store particles
    const dots: {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      offset: number;
    }[] = [];

    // Create Grid of Dots
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        dots.push({
          x,
          y,
          baseX: x,
          baseY: y,
          offset: Math.random() * 100,
        });
      }
    }

    function animate(t: number) {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; // black semi-opacity dots

      dots.forEach((dot) => {
        const dx = Math.sin(t * animationSpeed + dot.offset) * 1.2;
        const dy = Math.cos(t * animationSpeed + dot.offset) * 1.2;

        ctx.beginPath();
        ctx.arc(dot.baseX + dx, dot.baseY + dy, dotSize, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate(0);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
