import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Ring = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group>
      {/* Main Ring */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.3, 16, 100]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Inner Ring Glow */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.7, 0.05, 8, 50]} />
        <meshBasicMaterial 
          color="#9B30FF"
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* LED Indicators */}
      <mesh position={[1.8, 0.2, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#9B30FF" />
      </mesh>
      
      <mesh position={[1.8, -0.2, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#00FFFF" />
      </mesh>
      
      {/* Ambient Lighting */}
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#9B30FF" />
    </group>
  );
};

const RotatingRing: React.FC = () => {
  return (
    <div className="w-full h-96 md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Environment preset="city" />
        
        <Ring />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1}
          minDistance={5}
          maxDistance={12}
        />
      </Canvas>
    </div>
  );
};

export default RotatingRing;