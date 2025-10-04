'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
const TEXTUREMAP = {
  src: 'https://i.postimg.cc/XYwvXN8D/img-4.png'
};
const DEPTHMAP = {
  src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp'
};

// Ring component - A bold, plain ring geometry
const RingMesh = () => {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame(({
    clock
  }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.3;
    }
  });
  return <mesh ref={ringRef} position={[0, 0, -1]}>
      <ringGeometry args={[1.5, 2, 64]} />
      <meshBasicMaterial color="#ff3333" transparent opacity={0.5} side={THREE.DoubleSide} />
    </mesh>;
};

// Scanning line effect
const ScanLine = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({
    clock
  }) => {
    if (meshRef.current) {
      const progress = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
      meshRef.current.position.y = progress * 4 - 2;
    }
  });
  return <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[10, 0.1]} />
      <meshBasicMaterial color="#ff0000" transparent opacity={0.6} />
    </mesh>;
};

// Image with depth effect
const ImageScene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<THREE.Mesh>(null);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    if (rawMap && depthMap) {
      const timer = setTimeout(() => setOpacity(1), 100);
      return () => clearTimeout(timer);
    }
  }, [rawMap, depthMap]);
  useFrame(state => {
    if (meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, opacity, 0.05);
    }
  });
  return <mesh ref={meshRef} scale={[3, 3, 1]}>
      <planeGeometry />
      <meshBasicMaterial map={rawMap} transparent opacity={0} />
    </mesh>;
};
const Scene = () => {
  return <>
      <ambientLight intensity={0.5} />
      <RingMesh />
      <ScanLine />
      <ImageScene />
    </>;
};
export function BackgroundPaths() {
  const titleWords = 'INTRODUCING THE FUTURE OF TECH'.split(' ');
  const subtitle = 'HUX™';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);
  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);
  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);
  return <div className="h-svh relative">
      <div className="h-svh uppercase items-center w-full absolute z-[60] pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => <div key={index} className={index < visibleWords ? 'fade-in' : ''} style={{
            animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
            opacity: index < visibleWords ? undefined : 0
          }}>
                {word}
              </div>)}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold">
          <div className={subtitleVisible ? 'fade-in-subtitle' : ''} style={{
          animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
          opacity: subtitleVisible ? undefined : 0
        }}>
            {subtitle}
          </div>
        </div>
      </div>

      

      <Canvas camera={{
      position: [0, 0, 5],
      fov: 50
    }}>
        <Scene />
      </Canvas>
    </div>;
}