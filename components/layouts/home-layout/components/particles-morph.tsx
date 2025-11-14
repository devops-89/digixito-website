"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollParticles() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;

    const count = 9000; // reduced for hero performance
    const spherePositions = new Float32Array(count * 3);
    const textPositions = new Float32Array(count * 3);
    const morph = { t: 0 };

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 22;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(window.innerWidth, window.innerHeight);

      containerRef.current!.appendChild(renderer.domElement);

      createSpherePoints();
      createParticles();
      createText("DIGIXITO");
      setupScroll();
      animate();
    }

    // ────────────────────────────────────────────────
    //   SPHERE
    // ────────────────────────────────────────────────
    function createSpherePoints() {
      for (let i = 0; i < count; i++) {
        const r = 7; // hero-sized sphere
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);

        spherePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        spherePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        spherePositions[i * 3 + 2] = r * Math.cos(phi);
      }
    }

    // ────────────────────────────────────────────────
    //   PARTICLES
    // ────────────────────────────────────────────────
    function createParticles() {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(spherePositions, 3));

      const material = new THREE.PointsMaterial({
        size: 0.06,
        color: "#000",
        transparent: true,
        opacity: 0.9,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);
    }

    // ────────────────────────────────────────────────
    //   TEXT SHAPE
    // ────────────────────────────────────────────────
    function createText(text: string) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const fontSize = 170;

      ctx.font = `900 ${fontSize}px Arial`;
      const metrics = ctx.measureText(text);
      canvas.width = metrics.width + 300;
      canvas.height = fontSize + 300;

      ctx.fillStyle = "black";
      ctx.font = `900 ${fontSize}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const pts = [];

      for (let i = 0; i < data.length; i += 4) {
        if (data[i] > 100 && Math.random() < 0.18) {
          const x = (i / 4) % canvas.width;
          const y = Math.floor(i / 4 / canvas.width);

          pts.push({
            x: (x - canvas.width / 2) / 20,
            y: -(y - canvas.height / 2) / 20,
          });
        }
      }

      for (let i = 0; i < count; i++) {
        if (i < pts.length) {
          textPositions[i * 3] = pts[i].x;
          textPositions[i * 3 + 1] = pts[i].y;
          textPositions[i * 3 + 2] = 0;
        } else {
          textPositions[i * 3] = (Math.random() - 0.5) * 20;
          textPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
          textPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
      }
    }

    // ────────────────────────────────────────────────
    //   SCROLL MORPH (TIED TO HERO SECTION)
    // ────────────────────────────────────────────────
    function setupScroll() {
      gsap.to(morph, {
        t: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom+=300 top",
          scrub: 1,
        },
      });
    }

    // ────────────────────────────────────────────────
    //   ANIMATE LOOP
    // ────────────────────────────────────────────────
    function animate() {
      requestAnimationFrame(animate);

      const pos = particles.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        pos[i3] =
          spherePositions[i3] * (1 - morph.t) + textPositions[i3] * morph.t;
        pos[i3 + 1] =
          spherePositions[i3 + 1] * (1 - morph.t) + textPositions[i3 + 1] * morph.t;
        pos[i3 + 2] =
          spherePositions[i3 + 2] * (1 - morph.t) + textPositions[i3 + 2] * morph.t;
      }

      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }

    init();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
