import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const RotatingRingImage = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, '/lovable-uploads/51bd4a63-8d7e-4ee9-a0bd-8f1b88aec749.png');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial 
          map={texture}
          transparent
          alphaTest={0.1}
        />
      </mesh>
      
      {/* Ambient lighting for better visibility */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
    </group>
  );
};

const RotatingRing: React.FC = () => {
  return (
    <div className="w-full h-96 md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <RotatingRingImage />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={2}
          minDistance={8}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
};

export default RotatingRing;