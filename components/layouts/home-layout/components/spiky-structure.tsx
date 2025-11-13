"use client";

import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

interface SpikyStructureProps {
  coreNodes?: number;
  outerNodes?: number;
  color?: string;
  metalness?: number;
  roughness?: number;
}

function createRod(p1: THREE.Vector3, p2: THREE.Vector3, mat: THREE.Material) {
  const dir = new THREE.Vector3().subVectors(p2, p1);
  const len = dir.length();
  const geometry = new THREE.CylinderGeometry(0.8, 0.8, len, 12, 1, true);
  const mesh = new THREE.Mesh(geometry, mat);
  const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
  mesh.position.copy(mid);
  mesh.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    dir.clone().normalize()
  );
  return mesh;
}

const SpikyMesh: React.FC<SpikyStructureProps> = ({
  coreNodes = 30,
  outerNodes = 60,
  color = "#0b0b0b",
  metalness = 0.5,
  roughness = 0.25,
}) => {
  const groupRef = useRef<THREE.Group>(null!);

  const { nodes, rods } = useMemo(() => {
    const nodes: { pos: THREE.Vector3; size: number }[] = [];
    const coreRadius = 12;
    const outerRadius = 42;

    // Core nodes
    for (let i = 0; i < coreNodes; i++) {
      const r = coreRadius * Math.cbrt(Math.random()) * 0.75;
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);
      nodes.push({
        pos: new THREE.Vector3(x, y, z),
        size: 3 + Math.random() * 1.5,
      });
    }

    // Outer nodes
    for (let i = 0; i < outerNodes; i++) {
      const r = outerRadius * (0.85 + 0.25 * Math.random());
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);
      nodes.push({
        pos: new THREE.Vector3(x, y, z),
        size: 4 + Math.random() * 1.2,
      });
    }

    const rods: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      const connections = Math.floor(2 + Math.random() * 3);
      for (let c = 0; c < connections; c++) {
        let j = Math.floor(Math.random() * coreNodes);
        if (j === i) j = (j + 1) % nodes.length;
        rods.push([nodes[i].pos, nodes[j].pos]);
      }
    }
    return { nodes, rods };
  }, [coreNodes, outerNodes]);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color,
        metalness,
        roughness,
      }),
    [color, metalness, roughness]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3;
      const scale = 1 + Math.sin(t * 0.9) * 0.02;
      groupRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => (
        <mesh
          key={`node-${i}`}
          position={n.pos}
          geometry={new THREE.SphereGeometry(n.size, 24, 16)}
          material={material}
        />
      ))}
      {rods.map(([p1, p2], i) => {
        const rod = createRod(p1, p2, material);
        return <primitive key={`rod-${i}`} object={rod} />;
      })}
    </group>
  );
};

// ---- Wrapper ----
const SceneContent = React.forwardRef<THREE.Scene>((_props, ref) => {
  const { scene } = useThree();
  React.useImperativeHandle(ref, () => scene, [scene]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[50, 80, 40]} intensity={1.2} />
      <SpikyMesh />
      <OrbitControls
        enableDamping
        minDistance={10}
        maxDistance={2000}
        zoomSpeed={0}
        enableZoom={false}
      />
    </>
  );
});
SceneContent.displayName = "SceneContent";

export const SpikyStructure: React.FC = () => {
  const sceneRef = useRef<THREE.Scene>(null);

  const handleExport = () => {
    if (!sceneRef.current) {
      alert("Scene not ready for export");
      return;
    }
    const exporter = new GLTFExporter();
    exporter.parse(
      sceneRef.current,
      (result: ArrayBuffer | object) => {
        if (result instanceof ArrayBuffer) {
          const blob = new Blob([result], { type: "application/octet-stream" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "spiky-structure.glb";
          link.click();
        } else {
          const json = JSON.stringify(result, null, 2);
          const blob = new Blob([json], { type: "application/json" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "spiky-structure.gltf";
          link.click();
        }
      },
      { binary: true }
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: "transparent",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 120], fov: 45, near: 0.01, far: 5000 }}
        gl={{ alpha: true, logarithmicDepthBuffer: true }}
      >
        <SceneContent ref={sceneRef} />
      </Canvas>

      {/* <button
        onClick={handleExport}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid #333",
          background: "#111",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Export GLB
      </button> */}
    </div>
  );
};
