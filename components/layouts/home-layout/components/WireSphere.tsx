"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WireSphereText() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const scanRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ---------------------------
    // SCENE + CAMERA + RENDERER
    // ---------------------------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ---------------------------
    // GEOMETRIC WIREFRAME SPHERE
    // ---------------------------
    const geometry = new THREE.IcosahedronGeometry(12, 3);
    const wireframe = new THREE.WireframeGeometry(geometry);

    const material = new THREE.LineBasicMaterial({
      color: "#000000",
      opacity: 0.45,
      transparent: true,
    });

    const sphere = new THREE.LineSegments(wireframe, material);
    scene.add(sphere);

    // ---------------------------
    // MOUSE-BASED ROTATION
    // ---------------------------
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) * 0.0007;
      targetY = (e.clientY - window.innerHeight / 2) * 0.0007;
    };

    window.addEventListener("mousemove", onMouseMove);

    // ---------------------------
    // ANIMATION LOOP
    // ---------------------------
    const animate = () => {
      requestAnimationFrame(animate);

      // smooth easing
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      sphere.rotation.y = currentX * 2.8;
      sphere.rotation.x = currentY * 2.8;

      renderer.render(scene, camera);
    };
    animate();

    // ---------------------------
    // SCAN REVEAL TEXT ANIMATION
    // ---------------------------
    const text = textRef.current!;
    const scan = scanRef.current!;

    // Start hidden
    text.style.opacity = "0";

    setTimeout(() => {
      // fade text in subtly
      text.style.transition = "opacity 1.2s ease-out 0.4s";
      text.style.opacity = "1";

      // scan bar animation
      scan.animate(
        [
          { transform: "translateX(-120%)", opacity: 0 },
          { transform: "translateX(0%)", opacity: 1 },
          { transform: "translateX(120%)", opacity: 0 }
        ],
        {
          duration: 1400,
          easing: "cubic-bezier(0.4, 0.2, 0.1, 1)",
          fill: "forwards",
        }
      );
    }, 400);

    // ---------------------------
    // RESIZE HANDLER
    // ---------------------------
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      {/* TEXT */}
      <div
        ref={textRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "90px",
          fontWeight: "900",
          letterSpacing: "12px",
          color: "#000",
          zIndex: 10,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          fontFamily: "Inter, sans-serif",
        }}
      >
        DIGIXITO
      </div>

      {/* SCAN EFFECT BAR */}
      <div
        ref={scanRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "500px",
          height: "140px",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(90deg, transparent, white 60%, transparent)",
          opacity: 0,
          filter: "blur(20px)",
          zIndex: 11,
        }}
      />
    </div>
  );
}
