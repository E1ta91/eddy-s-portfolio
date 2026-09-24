import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import phoneUrl from '../../assets/3d/glbs/pixel6.glb?url';
import caseUrl from '../../assets/3d/glbs/case1.glb?url';
import assembledUrl from '../../assets/3d/glbs/pixel_6.1.glb?url';

const ASSEMBLY_MS = 8000;
const HANDOFF_MS = 1000;

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function prepareModel(scene, targetSize = 1.45) {
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
  clone.scale.setScalar(targetSize / maxDim);
  return clone;
}

function PartModel({ url, targetSize }) {
  const { scene } = useGLTF(url, true);
  const prepared = useMemo(() => prepareModel(scene, targetSize), [scene, targetSize]);
  return (
    <Center>
      <primitive object={prepared} />
    </Center>
  );
}

function AssemblyScene({ progress }) {
  const phone = useRef();
  const casePart = useRef();
  const eased = easeInOutCubic(progress);

  useFrame(() => {
    if (phone.current) {
      phone.current.position.set(
        THREE.MathUtils.lerp(-0.85, 0, eased),
        THREE.MathUtils.lerp(0.35, 0.04, eased),
        THREE.MathUtils.lerp(0.15, 0, eased)
      );
      phone.current.rotation.set(
        THREE.MathUtils.lerp(0.35, 0.12, eased),
        THREE.MathUtils.lerp(-0.65, -0.35, eased),
        THREE.MathUtils.lerp(0.15, 0, eased)
      );
    }
    if (casePart.current) {
      casePart.current.position.set(
        THREE.MathUtils.lerp(0.9, 0, eased),
        THREE.MathUtils.lerp(-0.55, -0.02, eased),
        THREE.MathUtils.lerp(-0.2, 0, eased)
      );
      casePart.current.rotation.set(
        THREE.MathUtils.lerp(-0.25, 0.12, eased),
        THREE.MathUtils.lerp(0.7, -0.35, eased),
        THREE.MathUtils.lerp(-0.2, 0, eased)
      );
    }
  });

  return (
    <group>
      <group ref={phone}>
        <PartModel url={phoneUrl} targetSize={1.35} />
      </group>
      <group ref={casePart}>
        <PartModel url={caseUrl} targetSize={1.45} />
      </group>
      <ContactShadows position={[0, -0.75, 0]} opacity={0.35} scale={3.4} blur={2.6} far={2.4} />
    </group>
  );
}

function InteractiveModel({ mouse, isDragging }) {
  const parallax = useRef();
  const { scene } = useGLTF(assembledUrl, true);
  const prepared = useMemo(() => prepareModel(scene, 1.55), [scene]);

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

useGLTF.preload(phoneUrl, true);
useGLTF.preload(caseUrl, true);
useGLTF.preload(assembledUrl, true);

function SharedLights() {
  return (
    <>
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
        <Environment preset="warehouse" background={false} environmentIntensity={0.52} />
      </Suspense>
    </>
  );
}

const PixelCaseHeroCanvas = () => {
  const [assemblyProgress, setAssemblyProgress] = useState(0);
  const [handoff, setHandoff] = useState(0);
  const [phase, setPhase] = useState('assemble'); // assemble | handoff | interactive
  const mouse = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const reduceMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  useEffect(() => {
    if (reduceMotion) {
      setAssemblyProgress(1);
      setHandoff(1);
      setPhase('interactive');
      return undefined;
    }

    const start = performance.now();
    let frame = 0;

    const tick = (now) => {
      const elapsed = now - start;
      if (elapsed <= ASSEMBLY_MS) {
        setAssemblyProgress(Math.min(1, elapsed / ASSEMBLY_MS));
        frame = requestAnimationFrame(tick);
        return;
      }

      setAssemblyProgress(1);
      const handoffElapsed = elapsed - ASSEMBLY_MS;
      if (handoffElapsed < HANDOFF_MS) {
        setPhase('handoff');
        setHandoff(easeInOutCubic(Math.min(1, handoffElapsed / HANDOFF_MS)));
        frame = requestAnimationFrame(tick);
        return;
      }

      setHandoff(1);
      setPhase('interactive');
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  const showAssembly = phase !== 'interactive';
  const interactiveReady = phase === 'handoff' || phase === 'interactive';
  const controlsEnabled = phase === 'interactive';

  return (
    <div className="absolute inset-0 h-full w-full touch-none">
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: 1 - handoff,
          pointerEvents: showAssembly ? 'auto' : 'none',
          visibility: handoff >= 1 ? 'hidden' : 'visible',
        }}
      >
        <Canvas
          shadows
          dpr={[1, 1.75]}
          camera={{ position: [0.85, 0.45, 2.4], fov: 36, near: 0.01, far: 50 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
          frameloop={handoff >= 1 ? 'never' : 'always'}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.08;
          }}
        >
          <SharedLights />
          <Suspense fallback={null}>
            <AssemblyScene progress={assemblyProgress} />
          </Suspense>
        </Canvas>
      </div>

      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: handoff,
          pointerEvents: controlsEnabled ? 'auto' : 'none',
          visibility: interactiveReady ? 'visible' : 'hidden',
        }}
      >
        {interactiveReady && (
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
            <SharedLights />
            <Suspense fallback={null}>
              <InteractiveModel mouse={mouse} isDragging={isDragging} />
            </Suspense>
            <OrbitControls
              makeDefault
              enabled={controlsEnabled}
              enablePan={false}
              enableZoom={!reduceMotion}
              enableRotate={controlsEnabled}
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
        )}
      </div>

      <p className="pointer-events-none absolute bottom-4 left-1/2 z-10 w-max -translate-x-1/2 text-panel text-center font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
        {phase === 'interactive'
          ? 'Move to tilt · Drag to rotate · Scroll to zoom'
          : phase === 'handoff'
            ? 'Handing off to interactive model…'
            : `Assembling case · ${Math.round(assemblyProgress * 8)}s / 8s`}
      </p>
    </div>
  );
};

export default PixelCaseHeroCanvas;
