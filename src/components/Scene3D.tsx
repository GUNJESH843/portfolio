import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[3, 0, -2]}>
        <MeshDistortMaterial
          color="#f5a623"
          roughness={0.1}
          metalness={0.8}
          distort={0.4}
          speed={2}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <Torus ref={meshRef} args={[1, 0.4, 32, 64]} position={[-3, -1, -3]}>
        <meshStandardMaterial
          color="#00d9a5"
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.5}
        />
      </Torus>
    </Float>
  );
};

const FloatingRing = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 2, -4]}>
      <torusGeometry args={[2, 0.05, 16, 100]} />
      <meshStandardMaterial color="#f5a623" emissive="#f5a623" emissiveIntensity={0.5} />
    </mesh>
  );
};

const Particles = () => {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#f5a623" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d9a5" />
        
        <AnimatedSphere />
        <AnimatedTorus />
        <FloatingRing />
        <Particles />
      </Canvas>
    </div>
  );
};
