import { useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { WaveField } from './hero/WaveField';
import { signalCur, signalMouse } from '@/lib/signalStore';
import { prefersReducedMotion } from '@/lib/anim';

const Rig = () => {
  useFrame((state) => {
    state.camera.position.x += (signalCur.camX + signalMouse.x * 0.8 - state.camera.position.x) * 0.04;
    state.camera.position.y += (signalCur.camY - signalMouse.y * 0.5 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

/** The one persistent signal field behind the whole page. It morphs as sections
 *  push new targets into the shared store while you scroll. */
export const SignalBackground = () => {
  const reduced = prefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      signalMouse.x = e.clientX / window.innerWidth - 0.5;
      signalMouse.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        frameloop={reduced ? 'demand' : 'always'}
        camera={{ position: [0, 1, 7], fov: 55 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <WaveField frozen={reduced} />
        <Rig />
        <EffectComposer>
          <Bloom intensity={0.8} luminanceThreshold={0.05} luminanceSmoothing={0.5} mipmapBlur />
        </EffectComposer>
      </Canvas>
      {/* legibility scrim — keeps type readable over the live field */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_45%,hsl(30_13%_4%/0.25)_0%,hsl(30_13%_4%/0.55)_100%)]" />
    </div>
  );
};
