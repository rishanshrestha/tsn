"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Line, Torus } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 120 points across 3 depth layers
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 120; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      const speed = i < 40 ? 0.003 : i < 80 ? 0.006 : 0.009;
      const size = i < 40 ? 0.012 : i < 80 ? 0.018 : 0.028;
      const opacity = i < 40 ? 0.2 : i < 80 ? 0.4 : 0.7;
      temp.push({ x, y, z, speed, size, opacity });
    }
    return temp;
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(particles.length * 3);
    particles.forEach((p, i) => {
      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = p.z;
    });
    return pos;
  }, [particles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    // Rotate system based on mouse position
    const targetRotationX = mouse.y * 0.08;
    const targetRotationY = mouse.x * 0.08;
    
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetRotationX, 0.04);
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetRotationY, 0.04);

    // Particle drift
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particles.length; i++) {
      positions[i * 3 + 2] += particles[i].speed;
      if (positions[i * 3 + 2] > 5) positions[i * 3 + 2] = -5;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0047E1"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function Scene() {
  const gridRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const { mouse, camera } = useThree();

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.001;
      torusRef.current.rotation.x += 0.0005;
    }
    if (gridRef.current) {
      gridRef.current.position.z += 0.005;
      if (gridRef.current.position.z > 2) gridRef.current.position.z = -2;
    }
    
    // Parallax effect: Subtle camera drift based on mouse
    const targetX = mouse.x * 0.5;
    const targetY = mouse.y * 0.5;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <Particles />
      
      {/* Wireframe Torus */}
      <Torus ref={torusRef} args={[2.4, 0.004, 6, 80]} position={[0, 0, -2]}>
        <meshBasicMaterial color="#0047E1" transparent opacity={0.08} depthWrite={false} />
      </Torus>

      {/* Perspective Grid Plane */}
      <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <planeGeometry args={[40, 40, 28, 28]} />
        <meshBasicMaterial color="#0047E1" wireframe transparent opacity={0.04} depthWrite={false} />
      </mesh>
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-void">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
