import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { signalCur, signalTgt, signalMouse } from '@/lib/signalStore';

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  uniform float uFreq;
  uniform float uDisp;
  uniform vec2  uMouse;
  attribute float aRand;
  varying float vEl;
  varying float vFade;

  void main() {
    vec3 p = position;
    float ripple = distance(p.xy, uMouse * 3.0);
    float w =
      sin(p.x * uFreq + uTime) * cos(p.y * uFreq * 0.8 + uTime * 0.7) +
      0.45 * sin(p.x * uFreq * 2.3 + uTime * 1.3 + p.y * 0.5) +
      0.25 * sin(ripple * 3.0 - uTime * 2.2);
    p.z += w * uAmp;

    // dispersion: scatter points outward as a section "breaks up" the signal
    vec3 scatter = vec3(aRand - 0.5, fract(aRand * 13.13) - 0.5, fract(aRand * 7.7) - 0.5);
    p += scatter * uDisp * 3.4;

    vEl = w;
    vFade = 1.0 - uDisp * 0.45;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (4.0 + aRand * 5.0) * (8.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  uniform vec3 uColor2;
  varying float vEl;
  varying float vFade;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    vec3 col = mix(uColor2, uColor, smoothstep(-1.0, 1.2, vEl));
    gl_FragColor = vec4(col, a * 0.9 * vFade);
  }
`;

interface WaveFieldProps {
  frozen?: boolean;
}

export const WaveField = ({ frozen = false }: WaveFieldProps) => {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, rands, count } = useMemo(() => {
    const SX = 140;
    const SY = 84;
    const count = SX * SY;
    const positions = new Float32Array(count * 3);
    const rands = new Float32Array(count);
    let i = 0;
    for (let y = 0; y < SY; y++) {
      for (let x = 0; x < SX; x++) {
        positions[i * 3] = (x / (SX - 1) - 0.5) * 16;
        positions[i * 3 + 1] = (y / (SY - 1) - 0.5) * 10;
        positions[i * 3 + 2] = 0;
        rands[i] = Math.random();
        i++;
      }
    }
    return { positions, rands, count };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: signalCur.amp },
      uFreq: { value: signalCur.freq },
      uDisp: { value: signalCur.disp },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor: { value: new THREE.Color('#ffc46b') },
      uColor2: { value: new THREE.Color('#5a2c00') },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useFrame((_, delta) => {
    const m = matRef.current;
    if (!m) return;
    const u = m.uniforms;
    if (!frozen) u.uTime.value += Math.min(delta, 0.05);

    // ease current → target (continuous morph between scenes)
    signalCur.amp += (signalTgt.amp - signalCur.amp) * 0.045;
    signalCur.freq += (signalTgt.freq - signalCur.freq) * 0.045;
    signalCur.disp += (signalTgt.disp - signalCur.disp) * 0.045;
    signalCur.camX += (signalTgt.camX - signalCur.camX) * 0.045;
    signalCur.camY += (signalTgt.camY - signalCur.camY) * 0.045;

    u.uAmp.value = signalCur.amp;
    u.uFreq.value = signalCur.freq;
    u.uDisp.value = signalCur.disp;
    u.uMouse.value.x += (signalMouse.x * 3 - u.uMouse.value.x) * 0.05;
    u.uMouse.value.y += (signalMouse.y * 3 - u.uMouse.value.y) * 0.05;
  });

  return (
    <points rotation={[-1.06, 0, 0]} position={[0, -0.6, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aRand" count={count} array={rands} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
