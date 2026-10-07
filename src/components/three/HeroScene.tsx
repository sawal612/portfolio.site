"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
    
    // Add simple distortion by moving vertices if geometry is available, but for a simple blob, we can just use wireframe Icosahedron.
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2.5, 1]} />
      <meshStandardMaterial 
        ref={materialRef}
        color="#8b5cf6" 
        wireframe 
        emissive="#8b5cf6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]} // Limit pixel ratio for performance
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <Blob />
      </Canvas>
    </div>
  );
}
