"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeGalaxy() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import(
        "three/examples/jsm/controls/OrbitControls.js"
      );

      if (!mountRef.current) return;

      const container = mountRef.current;

      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#000000");
      const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
      camera.position.set(0, 2, 20);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enableZoom = false;
      controls.enablePan = false;

      let gu = { time: { value: 0 } };

      const sizes: number[] = [];
      const shift: number[] = [];

      const pushShift = () => {
        shift.push(
          Math.random() * Math.PI,
          Math.random() * Math.PI * 2,
          (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
          Math.random() * 0.9 + 0.1
        );
      };

      const pts: THREE.Vector3[] = new Array(20000).fill(null).map(() => {
        sizes.push(Math.random() * 1.2 + 0.4);
        pushShift();
        return new THREE.Vector3()
          .randomDirection()
          .multiplyScalar(Math.random() * 0.8 + 5);
      });

      for (let i = 0; i < 40000; i++) {
        let inner = 4;
        let outer = 13;
        let rand = Math.pow(Math.random(), 1.5);
        let radius = Math.sqrt(
          outer * outer * rand + (1 - rand) * inner * inner
        );

        pts.push(
          new THREE.Vector3().setFromCylindricalCoords(
            radius,
            Math.random() * Math.PI * 2,
            (Math.random() - 0.5) * 2
          )
        );

        sizes.push(Math.random() * 1.3 + 0.3);
        pushShift();
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(pts);
      geometry.setAttribute(
        "sizes",
        new THREE.Float32BufferAttribute(sizes, 1)
      );
      geometry.setAttribute(
        "shift",
        new THREE.Float32BufferAttribute(shift, 4)
      );

      const material = new THREE.PointsMaterial({
        size: 0.11,
        transparent: true,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      });

      material.onBeforeCompile = (shader) => {
        shader.uniforms.time = gu.time;

        shader.vertexShader =
          `
          uniform float time;
          attribute float sizes;
          attribute vec4 shift;
          varying vec3 vColor;
          const float PI2 = 6.283185307179586;
        ` + shader.vertexShader;

        shader.vertexShader = shader.vertexShader
          .replace("gl_PointSize = size;", "gl_PointSize = size * sizes;")
          .replace(
            "#include <color_vertex>",
            `#include <color_vertex>
               float d = length(abs(position) / vec3(13., 4., 13.));
               d = clamp(d, 0., 1.);
               vColor = mix(vec3(227.,155.,0.), vec3(100.,50.,255.), d) / 255.;
            `
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
              float t = time;
              float moveT = mod(shift.x + shift.z * t, PI2);
              float moveS = mod(shift.y + shift.z * t, PI2);
              transformed += vec3(
                cos(moveS) * sin(moveT),
                cos(moveT),
                sin(moveS) * sin(moveT)
              ) * shift.w * 0.6;
            `
          );

        shader.fragmentShader =
          `varying vec3 vColor;
        ` + shader.fragmentShader;

        shader.fragmentShader = shader.fragmentShader.replace(
          /vec4\s+diffuseColor\s*=\s*vec4\s*\(\s*diffuse\s*,\s*opacity\s*\)\s*;/,
          `vec4 diffuseColor = vec4(vColor, opacity);`
        );
      };

      const points = new THREE.Points(geometry, material);
      points.scale.set(1.20, 1.20, 1.20);
      scene.add(points);

      const clock = new THREE.Clock();
      let rafId = 0;

      const animate = () => {
        controls.update();
        gu.time.value = clock.getElapsedTime() * Math.PI * 0.5;

        points.rotation.y = clock.getElapsedTime() * 0.12;

        renderer.render(scene, camera);
        rafId = requestAnimationFrame(animate);
      };

      animate();

      const onResize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };

      window.addEventListener("resize", onResize);

      cleanup = () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", onResize);

        controls.dispose();
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      };
    })();

    return () => cleanup();
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        // overflow: "hidden",
        background: "#000",
        // paddingTop: 20,
        // paddingBottom: 20,
      }}
    />
  );
}
