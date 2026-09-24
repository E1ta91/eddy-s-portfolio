import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';
import CadV6Engine from './CadV6Engine';

function SceneRig({ mouse }) {
  const group = useRef();
  const engine = useRef();
  const camTarget = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (engine.current?.setProgress) {
      engine.current.setProgress(1);
    }

    if (!group.current) return;

    const parallaxX = mouse.current.x * 0.28;
    const parallaxY = mouse.current.y * 0.18;

    camTarget.set(0.4 + parallaxX, 0.35 + parallaxY, 1.5);
    state.camera.position.lerp(camTarget, 0.14);
    state.camera.lookAt(parallaxX * 0.08, 0.1 + parallaxY * 0.05, 0);

    group.current.rotation.y = -0.55 + 0.45 + mouse.current.x * 0.08;
    group.current.rotation.x = -0.22 + mouse.current.y * 0.04;
  });

  return (
    <group ref={group}>
      <Suspense fallback={null}>
        <CadV6Engine ref={engine} />
      </Suspense>
      <ContactShadows position={[0, -0.45, 0]} opacity={0.45} scale={3} blur={2.6} far={2} />
    </group>
  );
}

const V6ParallaxBackdrop = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const reduceMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  if (reduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ opacity: 0.72 }}
    >
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0.5, 0.4, 1.8], fov: 40, near: 0.01, far: 50 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          position={[2, 4, 3]}
          intensity={1.5}
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#9eb6ff" />
        <spotLight position={[0, 3, 1]} intensity={0.7} angle={0.5} penumbra={0.6} />
        <hemisphereLight intensity={0.28} color="#f0f3f7" groundColor="#1a1e23" />
        <SceneRig mouse={mouse} />
        <Suspense fallback={null}>
          <Environment preset="warehouse" background={false} environmentIntensity={0.55} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default V6ParallaxBackdrop;
