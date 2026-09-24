import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import modelUrl from '../../assets/3d/glbs/ec.glb?url';

function StoveModel({ mouse, isDragging }) {
  const parallax = useRef();
  const { scene } = useGLTF(modelUrl, true);

  const prepared = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = 1.55 / maxDim;
    clone.scale.setScalar(scale);
    return clone;
  }, [scene]);

  useFrame(() => {
    if (!parallax.current) return;
    const damp = isDragging.current ? 0.04 : 0.1;
    const targetX = isDragging.current ? 0 : mouse.current.x * 0.12;
    const targetY = isDragging.current ? 0 : mouse.current.y * 0.08;
    parallax.current.position.x = THREE.MathUtils.lerp(
      parallax.current.position.x,
      targetX,
      damp
    );
    parallax.current.position.y = THREE.MathUtils.lerp(
      parallax.current.position.y,
      targetY,
      damp
    );
    parallax.current.rotation.y = THREE.MathUtils.lerp(
      parallax.current.rotation.y,
      isDragging.current ? 0 : mouse.current.x * 0.15,
      damp
    );
    parallax.current.rotation.x = THREE.MathUtils.lerp(
      parallax.current.rotation.x,
      isDragging.current ? 0 : -mouse.current.y * 0.1,
      damp
    );
  });

  return (
    <group ref={parallax}>
      <Center>
        <primitive object={prepared} />
      </Center>
      <ContactShadows position={[0, -0.65, 0]} opacity={0.42} scale={3.2} blur={2.5} far={2.2} />
    </group>
  );
}

useGLTF.preload(modelUrl, true);

const EcoStoveHeroCanvas = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
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

  return (
    <div className="absolute inset-0 h-full w-full touch-none">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0.75, 0.4, 2.35], fov: 36, near: 0.01, far: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.08;
        }}
      >
        <ambientLight intensity={0.42} />
        <directionalLight
          castShadow
          position={[2.4, 3.8, 2.2]}
          intensity={1.45}
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-2.8, 1.8, -1.6]} intensity={0.48} color="#9eb6ff" />
        <spotLight position={[0, 3.2, 1.2]} intensity={0.65} angle={0.48} penumbra={0.55} />
        <hemisphereLight intensity={0.26} color="#f0f3f7" groundColor="#1a1e23" />

        <Suspense fallback={null}>
          <StoveModel mouse={mouse} isDragging={isDragging} />
          <Environment preset="warehouse" background={false} environmentIntensity={0.52} />
        </Suspense>

        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={!reduceMotion}
          enableRotate
          zoomSpeed={0.65}
          rotateSpeed={0.85}
          minDistance={1.4}
          maxDistance={4.2}
          minPolarAngle={Math.PI * 0.15}
          maxPolarAngle={Math.PI * 0.82}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.DOLLY,
          }}
          touches={{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY,
          }}
          onStart={() => {
            isDragging.current = true;
          }}
          onEnd={() => {
            isDragging.current = false;
          }}
        />
      </Canvas>
    </div>
  );
};

export default EcoStoveHeroCanvas;
