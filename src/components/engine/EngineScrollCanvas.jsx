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

const LG_MQ = '(min-width: 1024px)';

function SceneRig({ mouse, mode }) {
  const group = useRef();
  const engine = useRef();
  const camTarget = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const progress = computeEngineScrollProgress();

    if (engine.current?.setProgress) {
      engine.current.setProgress(progress);
    }

    if (!group.current) return;

    const docked = mode === 'contact-dock';
    const mobileContact = mode === 'contact';
    const parallaxX = mouse.current.x * (docked ? 0.04 : mobileContact ? 0.18 : 0.28);
    const parallaxY = mouse.current.y * (docked ? 0.03 : mobileContact ? 0.12 : 0.18);

    // Only shrink when docked under the email; Contact backdrop stays full size
    const scaleGoal = docked ? 0.72 : 1;
    const s = THREE.MathUtils.lerp(group.current.scale.x, scaleGoal, 0.12);
    group.current.scale.setScalar(s);

    if (docked) {
      camTarget.set(0.15 + parallaxX, 0.22 + parallaxY, 2.15);
    } else if (mobileContact) {
      camTarget.set(0.25 + parallaxX * 0.6, 0.3 + parallaxY * 0.5, 1.55 - progress * 0.1);
    } else {
      camTarget.set(
        0.4 + parallaxX,
        0.35 + parallaxY + progress * 0.08,
        1.85 - progress * 0.35
      );
    }

    state.camera.position.lerp(camTarget, 0.14);
    state.camera.lookAt(parallaxX * 0.08, 0.1 + parallaxY * 0.05, 0);

    const spinBase = docked ? 0.25 : mobileContact ? 0.35 : 0.45;
    group.current.rotation.y = -0.55 + spinBase * progress + mouse.current.x * 0.08;
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

function resolveFocusedSection() {
  const ids = ['about', 'experience', 'skills', 'projects', 'contact'];
  const focusY = 120;
  let focused = null;
  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= focusY) focused = id;
  }
  return focused;
}

function measureDock(el) {
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  if (rect.width < 8 || rect.height < 8) return null;
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  };
}

const EngineScrollCanvas = () => {
  const progress = useEngineScrollProgress();
  const { contactDockEl, focusedSection, setFocusedSection } = useEngineDock();
  const mouse = useRef({ x: 0, y: 0 });
  const [activeRect, setActiveRect] = useState(null);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(LG_MQ).matches : false
  );
  const reduceMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const inAssembleRange =
    focusedSection === 'about' ||
    focusedSection === 'experience' ||
    focusedSection === 'skills' ||
    focusedSection === 'projects' ||
    focusedSection === 'contact' ||
    progress > 0.02;

  const canDock =
    focusedSection === 'contact' && isDesktop && Boolean(contactDockEl) && Boolean(activeRect);

  const mode = canDock
    ? 'contact-dock'
    : focusedSection === 'contact'
      ? 'contact'
      : 'backdrop';

  const docked = mode === 'contact-dock';

  useEffect(() => {
    const mq = window.matchMedia(LG_MQ);
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

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
    if (focusedSection !== 'contact' || !isDesktop || !contactDockEl) {
      setActiveRect(null);
      return undefined;
    }

    let frame = 0;
    const measure = () => {
      frame = 0;
      setActiveRect(measureDock(contactDockEl));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onScroll) : null;
    ro?.observe(contactDockEl);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      ro?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [focusedSection, isDesktop, contactDockEl]);

  const heroClean = !inAssembleRange && progress < 0.02;

  let opacity = 0;
  if (heroClean) {
    opacity = 0;
  } else if (docked) {
    opacity = 1;
  } else if (mode === 'contact') {
    opacity = 0.75 + progress * 0.2;
  } else {
    opacity = 0.5 + progress * 0.45;
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
          visibility: 'visible',
          pointerEvents: 'none',
          transition:
            'top 0.4s cubic-bezier(0.22, 1, 0.36, 1), left 0.4s cubic-bezier(0.22, 1, 0.36, 1), width 0.4s cubic-bezier(0.22, 1, 0.36, 1), height 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease',
        }
      : {
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          opacity,
          visibility: heroClean ? 'hidden' : 'visible',
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
        frameloop={heroClean ? 'never' : 'always'}
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
