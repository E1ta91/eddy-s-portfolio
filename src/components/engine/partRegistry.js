const urlMap = import.meta.glob('../../assets/3d/v6-engine/*.{STL,stl}', {
  eager: true,
  query: '?url',
  import: 'default',
});

function pickMaterial(fileName) {
  const n = fileName.toLowerCase();
  if (n.includes('exhaust')) return 'exhaust';
  if (n.includes('crank')) return 'steel';
  if (n.includes('block') || n.includes('oil-pan') || n.includes('oil_pan')) return 'castIron';
  if (
    n.includes('head') ||
    n.includes('intake') ||
    n.includes('mainfold') ||
    n.includes('manifold') ||
    n.includes('cover')
  ) {
    return 'aluminum';
  }
  if (n.includes('piston') && n.includes('head')) return 'piston';
  if (n.includes('piston') || n.includes('valve') || n.includes('camshaft') || n.includes('cam shaft')) {
    return 'brushed';
  }
  if (n.includes('rocker') || n.includes('spring') || n.includes('pin') || n.includes('bushing') || n.includes('retainer') || n.includes('lock')) {
    return 'steel';
  }
  return 'aluminum';
}

/** Extra explode bias to better match the exploded reference photo. */
function explodeBias(fileName) {
  const n = fileName.toLowerCase();
  if (n.includes('intake') || n.includes('mainfold') || n.includes('manifold')) {
    return { x: 0, y: 1.2, z: 0, mul: 1.35 };
  }
  if (n.includes('oil-pan') || n.includes('oil_pan')) {
    return { x: 0, y: -1.1, z: 0, mul: 1.15 };
  }
  if (n.includes('crank')) {
    return { x: -0.8, y: -0.3, z: 0, mul: 1.4 };
  }
  if (n.includes('exhaust')) {
    return { x: 0, y: -0.2, z: 0, mul: 1.45 };
  }
  if (n.includes('piston')) {
    return { x: 0, y: 0.6, z: 0, mul: 1.25 };
  }
  if (n.includes('cylinder head')) {
    return { x: 0, y: 0.7, z: 0, mul: 1.2 };
  }
  if (n.includes('camshaft') || n.includes('cam shaft')) {
    return { x: 0, y: 0.9, z: 0.3, mul: 1.3 };
  }
  if (n.includes('valve') || n.includes('rocker') || n.includes('spring')) {
    return { x: 0, y: 1.0, z: 0, mul: 1.35 };
  }
  return { x: 0, y: 0, z: 0, mul: 1 };
}

export const ENGINE_SCALE = 0.001; // mm → meters

export function getCadParts() {
  return Object.entries(urlMap)
    .map(([path, url]) => {
      const file = path.split(/[/\\]/).pop();
      return {
        id: file,
        file,
        url,
        material: pickMaterial(file),
        bias: explodeBias(file),
      };
    })
    .sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));
}
