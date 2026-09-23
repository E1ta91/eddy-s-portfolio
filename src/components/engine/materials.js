import * as THREE from 'three';

export const mats = {
  castIron: new THREE.MeshPhysicalMaterial({
    color: '#2a2e33',
    metalness: 0.92,
    roughness: 0.42,
    clearcoat: 0.15,
    clearcoatRoughness: 0.5,
  }),
  aluminum: new THREE.MeshPhysicalMaterial({
    color: '#b8c0c8',
    metalness: 0.95,
    roughness: 0.28,
    clearcoat: 0.35,
    clearcoatRoughness: 0.25,
  }),
  steel: new THREE.MeshPhysicalMaterial({
    color: '#7a828c',
    metalness: 1,
    roughness: 0.22,
    clearcoat: 0.4,
    clearcoatRoughness: 0.2,
  }),
  brushed: new THREE.MeshPhysicalMaterial({
    color: '#9aa3ad',
    metalness: 0.98,
    roughness: 0.35,
    anisotropy: 0.4,
  }),
  piston: new THREE.MeshPhysicalMaterial({
    color: '#d5dde4',
    metalness: 0.9,
    roughness: 0.2,
    clearcoat: 0.5,
    clearcoatRoughness: 0.15,
  }),
  exhaust: new THREE.MeshPhysicalMaterial({
    color: '#6b3a1f',
    metalness: 0.85,
    roughness: 0.4,
    emissive: '#3a1808',
    emissiveIntensity: 0.12,
  }),
  gasket: new THREE.MeshPhysicalMaterial({
    color: '#1f2933',
    metalness: 0.1,
    roughness: 0.85,
  }),
  rubber: new THREE.MeshPhysicalMaterial({
    color: '#151515',
    metalness: 0.05,
    roughness: 0.9,
  }),
};
