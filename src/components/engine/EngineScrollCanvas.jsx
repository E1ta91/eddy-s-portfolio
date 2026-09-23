import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';
import CadV6Engine from './CadV6Engine';
import { useEngineDock } from '../../context/EngineDockContext';
import {
  computeEngineScrollProgress,
  useEngineScrollProgress,
} from '../../hooks/useEngineScrollProgress';

function SceneRig({ mouse, mode }) {
  const group = useRef();
  const engine = useRef();
  const camTarget = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    // Read scroll every frame so assemble speed matches scroll 1:1 (no damp lag)
    const progress = computeEngineScrollProgress();

    if (engine.current?.setProgress) {
      engine.current.setProgress(progress);
    }

    if (!group.current) return;

    const tight = mode === 'carousel';
    const parallaxX = mouse.current.x * (tight ? 0.08 : 0.28);
    const parallaxY = mouse.current.y * (tight ? 0.05 : 0.18);

    if (mode === 'carousel') {
      camTarget.set(0.35 + parallaxX, 0.32 + parallaxY, 1.4);
    } else if (mode === 'contact') {
      camTarget.set(0.25 + parallaxX * 0.6, 0.3 + parallaxY * 0.5, 1.55 - progress * 0.15);
    } else {
      camTarget.set(
        0.4 + parallaxX,
        0.35 + parallaxY + progress * 0.08,
        1.85 - progress * 0.35
      );
    }

    state.camera.position.lerp(camTarget, 0.12);
    state.camera.lookAt(parallaxX * 0.12, 0.12 + parallaxY * 0.06, 0);

    const spinBase = mode === 'contact' ? 0.4 : mode === 'carousel' ? 0.2 : 0.45;
    group.current.rotation.y = -0.55 + spinBase * progress + mouse.current.x * 0.1;
    group.current.rotation.x = -0.22 + mouse.current.y * 0.04;
  });

  return (
    <group ref={group}>
      <Suspense fallback={null}>
        <CadV6Engine ref={engine} />
      </Suspense>
      <ContactShadows
        position={[0, -0.45, 0]}
        opacity={0.45}
        scale={3}
        blur={2.6}
        far={2}
      />
    </group>
  );
}

/**
 * Same scroll-spy rule as the navbar: last section whose top has crossed the
 * focus line owns the engine.
 */
function resolveFocusedSection() {
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');
  if (!projects || !contact) return null;

  const focusY = 120;
  let focused = null;
  if (projects.getBoundingClientRect().top <= focusY) focused = 'projects';
  if (contact.getBoundingClientRect().top <= focusY) focused = 'contact';
  return focused;
}

const EngineScrollCanvas = () => {
  const progress = useEngineScrollProgress();
  const { dockEl, carouselIndex, focusedSection, setFocusedSection } = useEngineDock();
  const mouse = useRef({ x: 0, y: 0 });
  const [activeRect, setActiveRect] = useState(null);
  const reduceMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const mode =
    focusedSection === 'projects' && carouselIndex === 0 && dockEl
      ? 'carousel'
      : focusedSection === 'contact'
        ? 'contact'
        : 'backdrop';

  const docked = mode === 'carousel';

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setFocusedSection(resolveFocusedSection());
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [setFocusedSection]);

  useEffect(() => {
    if (mode !== 'carousel' || !dockEl) {
      setActiveRect(null);
      return undefined;
    }

    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = dockEl.getBoundingClientRect();
      setActiveRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [mode, dockEl, focusedSection, carouselIndex]);

  let opacity = 0.55 + progress * 0.4;
  if (docked && activeRect) {
    opacity = 1;
  } else if (focusedSection === 'projects' && carouselIndex !== 0) {
    opacity = 0;
  } else if (mode === 'contact') {
    opacity = 0.8 + progress * 0.15;
  }

  const style =
    docked && activeRect
      ? {
          position: 'fixed',
          top: activeRect.top,
          left: activeRect.left,
          width: activeRect.width,
          height: activeRect.height,
          zIndex: 40,
          opacity,
          pointerEvents: 'none',
          transition:
            'top 0.45s cubic-bezier(0.22, 1, 0.36, 1), left 0.45s cubic-bezier(0.22, 1, 0.36, 1), width 0.45s cubic-bezier(0.22, 1, 0.36, 1), height 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease',
        }
      : {
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          opacity,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
        };

  if (reduceMotion && !docked) {
    return null;
  }

  return (
    <div aria-hidden="true" className="engine-scroll-canvas" style={style}>
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
        <SceneRig mouse={mouse} mode={mode} />
        <Suspense fallback={null}>
          <Environment preset="warehouse" background={false} environmentIntensity={0.55} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EngineScrollCanvas;
