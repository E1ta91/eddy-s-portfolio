import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, ContactShadows, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import assemblyUrl from '../../assets/3d/v6-engine/V6_assembly.glb?url';

function EngineModel() {
  const group = useRef();
  const { scene } = useGLTF(assemblyUrl, true);

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
    const scale = 1.35 / maxDim;
    clone.scale.setScalar(scale);
    return clone;
  }, [scene]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={group}>
      <Center>
        <primitive object={prepared} />
      </Center>
    </group>
  );
}

useGLTF.preload(assemblyUrl, true);

const AssembledEnginePreview = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-[#0c1014]">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0.6, 0.45, 2.1], fov: 38, near: 0.01, far: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
        }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[2.5, 3.5, 2]} intensity={1.35} castShadow />
        <directionalLight position={[-2.5, 1.5, -1.5]} intensity={0.45} color="#9eb6ff" />
        <Suspense fallback={null}>
          <EngineModel />
          <Environment preset="warehouse" background={false} environmentIntensity={0.5} />
        </Suspense>
        <ContactShadows position={[0, -0.55, 0]} opacity={0.4} scale={3} blur={2.4} far={2} />
      </Canvas>
    </div>
  );
};

export default AssembledEnginePreview;
