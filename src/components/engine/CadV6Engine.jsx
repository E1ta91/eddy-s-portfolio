import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import * as THREE from 'three';
import { mats } from './materials';
import { ENGINE_SCALE, getCadParts } from './partRegistry';

const matMap = {
  castIron: mats.castIron,
  aluminum: mats.aluminum,
  steel: mats.steel,
  brushed: mats.brushed,
  piston: mats.piston,
  exhaust: mats.exhaust,
  gasket: mats.gasket,
  rubber: mats.rubber,
};

/**
 * Real SolidWorks STL assembly (assembly coordinates, mm, Y-up).
 * Parent scales mm→m and centers the model; explode offsets are applied in mm.
 */
const CadV6Engine = forwardRef(function CadV6Engine(_, ref) {
  const parts = useMemo(() => getCadParts(), []);
  const urls = useMemo(() => parts.map((p) => p.url), [parts]);
  const loaded = useLoader(STLLoader, urls);
  const geometries = useMemo(
    () => (Array.isArray(loaded) ? loaded : [loaded]),
    [loaded]
  );

  const progressLocal = useRef(0);
  const groupRefs = useRef([]);

  const meta = useMemo(() => {
    const centers = [];
    const sizes = [];

    geometries.forEach((geo) => {
      geo.computeVertexNormals();
      geo.computeBoundingBox();
      const c = new THREE.Vector3();
      const s = new THREE.Vector3();
      geo.boundingBox.getCenter(c);
      geo.boundingBox.getSize(s);
      centers.push(c);
      sizes.push(s);
    });

    const unionBox = new THREE.Box3();
    centers.forEach((c, i) => {
      const half = sizes[i].clone().multiplyScalar(0.5);
      unionBox.expandByPoint(c.clone().sub(half));
      unionBox.expandByPoint(c.clone().add(half));
    });

    const origin = unionBox.getCenter(new THREE.Vector3());
    const unionSize = unionBox.getSize(new THREE.Vector3());
    const centerSpread = new THREE.Box3().setFromPoints(centers).getSize(new THREE.Vector3()).length();
    const assemblyCoordsOk = centerSpread > unionSize.length() * 0.15;

    // Explode vectors in native mm — large enough that parts start off-screen left/right
    const explode = centers.map((center, i) => {
      const local = center.clone().sub(origin);
      const bias = parts[i].bias;
      const dir = local.clone();
      if (dir.lengthSq() < 1e-6) dir.set(bias.x || 0, bias.y || 1, bias.z || 0);
      else dir.normalize();
      // Emphasize horizontal entry: weight bias.x harder before normalize
      dir.x += bias.x * 1.8;
      dir.y += bias.y * 0.55;
      dir.z += bias.z * 0.55;
      dir.normalize();
      const partDiag = sizes[i].length();
      const dist = (280 + partDiag * 0.85) * bias.mul; // mm — wide side entry
      return dir.multiplyScalar(dist);
    });

    if (!assemblyCoordsOk) {
      console.error(
        '[CadV6Engine] STL part centers look collapsed — expected assembly coordinates.'
      );
    } else {
      console.info(
        `[CadV6Engine] Loaded ${parts.length} STL parts (assembly coords OK). Union ~${(unionSize.x * ENGINE_SCALE).toFixed(2)}m`
      );
    }

    return {
      origin,
      explode,
      assemblyCoordsOk,
      partCount: parts.length,
      unionSizeMeters: unionSize.clone().multiplyScalar(ENGINE_SCALE),
    };
  }, [geometries, parts]);

  useImperativeHandle(ref, () => ({
    setProgress: (value) => {
      progressLocal.current = value;
    },
    getMeta: () => ({
      source: 'stl',
      partCount: meta.partCount,
      assemblyCoordsOk: meta.assemblyCoordsOk,
      unionSize: meta.unionSizeMeters,
    }),
  }));

  useFrame(() => {
    const t = 1 - progressLocal.current;
    const refs = groupRefs.current;
    const explode = meta.explode;
    for (let i = 0; i < refs.length; i += 1) {
      const g = refs[i];
      if (!g || !explode[i]) continue;
      g.position.set(explode[i].x * t, explode[i].y * t, explode[i].z * t);
    }
  });

  const { origin } = meta;

  return (
    <group
      scale={ENGINE_SCALE}
      position={[
        -origin.x * ENGINE_SCALE,
        -origin.y * ENGINE_SCALE,
        -origin.z * ENGINE_SCALE,
      ]}
    >
      {geometries.map((geo, i) => {
        const part = parts[i];
        const material = matMap[part.material] || mats.aluminum;
        return (
          <group
            key={part.id}
            ref={(node) => {
              groupRefs.current[i] = node;
            }}
          >
            <mesh geometry={geo} material={material} castShadow receiveShadow />
          </group>
        );
      })}
    </group>
  );
});

export default CadV6Engine;
