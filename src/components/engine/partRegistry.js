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

/**
 * Side-entry explode bias: strong ±X so parts fly in from left/right of the frame.
 * Vertical bias kept light so the motion reads as horizontal assembly.
 */
function explodeBias(fileName) {
  const n = fileName.toLowerCase();
  // Alternate bank / side by filename hash-ish for variety when no natural side
  const leftish =
    n.includes('1') ||
    n.includes('3') ||
    n.includes('5') ||
    n.includes('crank') ||
    n.includes('oil-pan') ||
    n.includes('oil_pan') ||
    n.includes('exhaust') ||
    n.includes('-1') ||
    n.includes('-2');

  if (n.includes('intake') || n.includes('mainfold') || n.includes('manifold')) {
    return { x: 0.15, y: 1.4, z: 0, mul: 2.4 };
  }
  if (n.includes('oil-pan') || n.includes('oil_pan')) {
    return { x: -1.8, y: -0.9, z: 0, mul: 2.2 };
  }
  if (n.includes('crank')) {
    return { x: -2.2, y: -0.2, z: 0.2, mul: 2.6 };
  }
  if (n.includes('exhaust')) {
    return { x: 2.0, y: -0.15, z: 0.1, mul: 2.5 };
  }
  if (n.includes('block')) {
    return { x: -1.6, y: 0, z: -0.3, mul: 2.0 };
  }
  if (n.includes('cylinder head')) {
    return { x: n.includes('-1') ? -1.9 : 1.9, y: 0.5, z: 0, mul: 2.3 };
  }
  if (n.includes('piston')) {
    const side = leftish ? -1 : 1;
    return { x: side * 2.1, y: 0.4, z: 0.15, mul: 2.4 };
  }
  if (n.includes('camshaft') || n.includes('cam shaft') || n.includes('camshaft bushing') || n.includes('retainer')) {
    return { x: leftish ? -1.7 : 1.7, y: 0.7, z: 0.4, mul: 2.3 };
  }
  if (n.includes('valve') || n.includes('rocker') || n.includes('spring')) {
    return { x: leftish ? -2.0 : 2.0, y: 0.85, z: 0, mul: 2.5 };
  }
  return { x: leftish ? -1.8 : 1.8, y: 0.1, z: 0, mul: 2.2 };
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
