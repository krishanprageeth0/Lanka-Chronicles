'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import * as THREE from 'three';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Compass,
  MapPin,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Sparkles,
  Layers,
  Eye,
  Info,
  ExternalLink,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import SalalihiniVersesDirectory from './SalalihiniVersesDirectory';
import {
  SALALIHINI_ALL_111_VERSES,
  SALALIHINI_CANTOS,
  SALALIHINI_MAP_LANDMARKS,
  SALALIHINI_SCENERY_LABELS,
  SALALIHINI_TRAJECTORY_NODES,
  SALALIHINI_VERSE_TO_NODE_MAP,
  SalalihiniVerse,
  SalalihiniLandmark,
  SalalihiniCanto
} from '../data/salalihiniVerses';

// Real geographic coordinates for Satellite GIS mode
const GIS_LANDMARK_COORDINATES: Record<string, [number, number]> = {
  kotte: [79.9074, 6.8906],
  dalada: [79.9120, 6.8930],
  palace: [79.9085, 6.8925],
  kovil: [79.9020, 6.9050],
  samanala: [80.4993, 6.8096],
  sea: [79.8450, 6.9300],
  sapumal: [79.8850, 6.9350],
  kitsiri: [79.9180, 6.9500],
  kelani: [79.9200, 6.9530],
  kelaniya: [79.9220, 6.9525],
  devale: [79.9230, 6.9530],
};

const CAMERA_MODES = [
  { id: 'orbit', labelEn: 'Explore', labelSi: 'ගවේෂණය', hintEn: 'Drag to rotate, scroll to zoom', hintSi: 'කරකවන්න ඇදගෙන යන්න, විශාලනයට ස්ක්‍රෝල් කරන්න' },
  { id: 'follow', labelEn: 'Follow the bird', labelSi: 'දූතිය පසුපස', hintEn: 'The camera trails the flying starling', hintSi: 'කැමරාව පියාඹන සැළලිහිණිය පසුපස ගමන් කරයි' },
  { id: 'top', labelEn: 'Map View', labelSi: 'සිතියම', hintEn: 'Looking straight down from above', hintSi: 'ඉහළ සිට සෘජුව බලන සම්ප්‍රදායික සිතියම් දර්ශනය' }
] as const;

type CameraMode = typeof CAMERA_MODES[number]['id'];

// Map verse index to spline parameter u in [0, 1]
function verseToU(verseNum: number): number {
  for (let i = 0; i < SALALIHINI_VERSE_TO_NODE_MAP.length - 1; i++) {
    const [vA, nA] = SALALIHINI_VERSE_TO_NODE_MAP[i];
    const [vB, nB] = SALALIHINI_VERSE_TO_NODE_MAP[i + 1];
    if (verseNum >= vA && verseNum <= vB) {
      const frac = vB === vA ? 0 : (verseNum - vA) / (vB - vA);
      const nodeIndex = nA + (nB - nA) * frac;
      return nodeIndex / (SALALIHINI_TRAJECTORY_NODES.length - 1);
    }
  }
  return 1.0;
}

export default function SalalihiniInteractiveMap() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language, toggleLanguage } = useLanguage();

  // Read initial verse from ?v= param
  const vParam = Number(searchParams.get('v'));
  const initialVerse = Number.isInteger(vParam) && vParam >= 1 && vParam <= 111 ? vParam : 1;

  const [currentVerseNum, setCurrentVerseNum] = useState<number>(initialVerse);
  const [cameraMode, setCameraMode] = useState<CameraMode>('orbit');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'3d' | 'gis'>('3d');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [focusedLandmarkId, setFocusedLandmarkId] = useState<string | null>('kotte');
  const [asideOpen, setAsideOpen] = useState<boolean>(true);
  const [versesModalOpen, setVersesModalOpen] = useState<boolean>(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState<boolean>(false);

  // Canvas and 3D refs
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const maplibreContainerRef = useRef<HTMLDivElement>(null);
  const labelElementsRef = useRef<Record<string, HTMLButtonElement | HTMLSpanElement | null>>({});
  const audioCtxRef = useRef<AudioContext | null>(null);
  const windGainRef = useRef<GainNode | null>(null);

  // Three.js instances ref
  const threeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    curve: THREE.CatmullRomCurve3;
    birdGroup: THREE.Group;
    wingL: THREE.Group;
    wingR: THREE.Group;
    pathLine: THREE.Line;
    trajectoryMesh: THREE.Line;
    disposed: boolean;
    targetCamPos: THREE.Vector3;
    targetLookAt: THREE.Vector3;
    curLookAt: THREE.Vector3;
    orbitAngles: { theta: number; phi: number; radius: number };
    isDragging: boolean;
    prevMouse: { x: number; y: number };
  } | null>(null);

  // Sync URL query when verse changes
  useEffect(() => {
    window.history.replaceState(null, '', `?v=${currentVerseNum}`);
  }, [currentVerseNum]);

  // Current active verse & canto
  const currentVerse: SalalihiniVerse = useMemo(() => {
    return (
      SALALIHINI_ALL_111_VERSES.find(v => v.n === currentVerseNum) ||
      SALALIHINI_ALL_111_VERSES[0]
    );
  }, [currentVerseNum]);

  const currentCanto: SalalihiniCanto = useMemo(() => {
    return (
      SALALIHINI_CANTOS.find(c => currentVerseNum >= c.from && currentVerseNum <= c.to) ||
      SALALIHINI_CANTOS[0]
    );
  }, [currentVerseNum]);

  // Find active landmark by verse
  const activeLandmark: SalalihiniLandmark = useMemo(() => {
    if (focusedLandmarkId) {
      const match = SALALIHINI_MAP_LANDMARKS.find(l => l.id === focusedLandmarkId);
      if (match) return match;
    }
    const matchVerse = SALALIHINI_MAP_LANDMARKS.find(
      l => currentVerseNum >= l.verses[0] && currentVerseNum <= l.verses[1]
    );
    return matchVerse || SALALIHINI_MAP_LANDMARKS[0];
  }, [focusedLandmarkId, currentVerseNum]);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const intervalTime = Math.max(700, 1600 / playbackSpeed);
    const interval = window.setInterval(() => {
      setCurrentVerseNum(prev => {
        if (prev >= 111) {
          setIsPlaying(false);
          return 111;
        }
        return prev + 1;
      });
    }, intervalTime);
    return () => window.clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  // Handle Audio Synthesis (Breeze and Temple Chime)
  useEffect(() => {
    if (!soundEnabled) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      return;
    }

    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioCtxRef.current = ctx;

      // Soft white-pink noise for coastal wind
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99 * b0 + white * 0.05;
        b1 = 0.95 * b1 + white * 0.05;
        b2 = 0.85 * b2 + white * 0.05;
        output[i] = (b0 + b1 + b2) * 0.15;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      windGainRef.current = gain;

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      whiteNoise.start(0);

      // Distant bell sound function
      const playBell = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const osc = ctx.createOscillator();
        const bellGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880 + Math.random() * 200, ctx.currentTime);
        bellGain.gain.setValueAtTime(0.03, ctx.currentTime);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);
        osc.connect(bellGain);
        bellGain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 3.6);
      };

      const bellTimer = window.setInterval(() => {
        if (Math.random() > 0.4) playBell();
      }, 7000);

      return () => {
        window.clearInterval(bellTimer);
        ctx.close().catch(() => {});
      };
    } catch (e) {
      console.warn('AudioContext not supported or blocked:', e);
    }
  }, [soundEnabled]);

  // Jump to specific landmark
  const selectLandmark = useCallback((landmarkId: string) => {
    setFocusedLandmarkId(landmarkId);
    setAsideOpen(true);
    const landmark = SALALIHINI_MAP_LANDMARKS.find(l => l.id === landmarkId);
    if (landmark && landmark.verses) {
      setCurrentVerseNum(landmark.verses[0]);
    }
    setIsPlaying(false);
  }, []);

  // -------------------------------------------------------------
  // THREE.JS 3D SCENE INITIALIZATION & RENDERING
  // -------------------------------------------------------------
  useEffect(() => {
    if (viewMode !== '3d' || !canvasContainerRef.current) return;

    const container = canvasContainerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0a1118');
    scene.fog = new THREE.FogExp2('#0d1a24', 0.016);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 18, 16);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight('#a9c5db', 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#ffe8b6', 2.2);
    sunLight.position.set(-20, 30, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    const hemiLight = new THREE.HemisphereLight('#679ec5', '#243b23', 0.8);
    scene.add(hemiLight);

    // 3. Terrain Heightfield & Topography
    // Modeled from Western Sri Lanka coastal plain to Adam's Peak
    const terrainGeo = new THREE.PlaneGeometry(70, 50, 180, 140);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const colorAttr = new THREE.BufferAttribute(colors, 3);
    terrainGeo.setAttribute('color', colorAttr);

    // Colors
    const colWater = new THREE.Color('#163c4d');
    const colSand = new THREE.Color('#d4be88');
    const colLush = new THREE.Color('#39682e');
    const colForest = new THREE.Color('#21451e');
    const colPeak = new THREE.Color('#33415c');

    // Height calculation function
    function getElevation(x: number, z: number): number {
      // Coastline boundary at x = -7.5 with smooth curve
      const coastX = -7.5 + Math.sin(z * 0.15) * 1.8;
      const distFromCoast = x - coastX;

      if (distFromCoast < 0) {
        // Ocean bed
        return -0.8 + Math.sin(x * 0.5) * 0.2;
      }

      // Base alluvial plain elevation
      let h = 0.2 + (distFromCoast / 30) * 1.5;

      // Samanala Kanda / Adam's Peak mountain mass at x=29, z=6
      const peakDistSq = Math.pow(x - 29, 2) + Math.pow(z - 6, 2);
      h += 9.5 * Math.exp(-peakDistSq / 40);

      // Kelani River canyon depression: flowing from inland to coast at z=-7
      const riverZ = -7.0 + Math.sin(x * 0.2) * 1.5;
      const distRiver = Math.abs(z - riverZ);
      if (distRiver < 1.4 && distFromCoast > 0.5) {
        h -= (1.4 - distRiver) * 0.35;
      }

      // Diyawanna lake basin around Kotte at x=0, z=5
      const kotteDist = Math.hypot(x, z - 5);
      if (kotteDist < 2.5 && kotteDist > 0.8) {
        h -= (1.8 - Math.abs(kotteDist - 1.6)) * 0.25;
      }

      // Smooth rolling micro-hills
      h += Math.sin(x * 0.4) * Math.cos(z * 0.4) * 0.25;
      return h;
    }

    const tmpCol = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i);
      const pz = pos.getZ(i);
      const py = getElevation(px, pz);
      pos.setY(i, py);

      if (py < 0) {
        // Water
        tmpCol.lerpColors(colWater, colSand, Math.max(0, 1 + py * 1.5));
      } else if (py < 0.35) {
        // Coastal sand / riverbank
        tmpCol.lerpColors(colSand, colLush, py / 0.35);
      } else if (py < 2.5) {
        // Lush agricultural & wet zone foliage
        tmpCol.lerpColors(colLush, colForest, (py - 0.35) / 2.15);
      } else {
        // Mountain peak rock
        tmpCol.lerpColors(colForest, colPeak, Math.min(1, (py - 2.5) / 6.0));
      }
      colorAttr.setXYZ(i, tmpCol.r, tmpCol.g, tmpCol.b);
    }
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: false,
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    terrainMesh.receiveShadow = true;
    scene.add(terrainMesh);

    // 4. Sparkling Water Mesh (Kelani River & Indian Ocean)
    const waterGeo = new THREE.PlaneGeometry(70, 50);
    waterGeo.rotateX(-Math.PI / 2);
    const waterMat = new THREE.MeshStandardMaterial({
      color: '#1a4e66',
      roughness: 0.15,
      metalness: 0.6,
      transparent: true,
      opacity: 0.75,
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.position.y = -0.05;
    scene.add(waterMesh);

    // 5. Procedural Architectural Models & Monuments
    // A. Kelaniya Raja Maha Vihara Stupa (at x: -1, z: -7)
    const stupaGroup = new THREE.Group();
    stupaGroup.position.set(-1, getElevation(-1, -7) + 0.1, -7);

    // Terrace base
    const baseGeo = new THREE.CylinderGeometry(1.4, 1.6, 0.3, 24);
    const whiteStoneMat = new THREE.MeshStandardMaterial({ color: '#f0ede6', roughness: 0.4 });
    const stupaBase = new THREE.Mesh(baseGeo, whiteStoneMat);
    stupaBase.position.y = 0.15;
    stupaGroup.add(stupaBase);

    // Bubble Dome (Gharbha)
    const domeGeo = new THREE.SphereGeometry(0.9, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const dome = new THREE.Mesh(domeGeo, whiteStoneMat);
    dome.position.y = 0.3;
    stupaGroup.add(dome);

    // Square Harmika & Spire
    const harmikaGeo = new THREE.BoxGeometry(0.35, 0.25, 0.35);
    const goldMat = new THREE.MeshStandardMaterial({ color: '#d9a74a', roughness: 0.3, metalness: 0.7 });
    const harmika = new THREE.Mesh(harmikaGeo, whiteStoneMat);
    harmika.position.y = 1.2;
    stupaGroup.add(harmika);

    const spireGeo = new THREE.ConeGeometry(0.18, 0.7, 16);
    const spire = new THREE.Mesh(spireGeo, goldMat);
    spire.position.y = 1.65;
    stupaGroup.add(spire);

    scene.add(stupaGroup);

    // B. Kitsirimevan Stupa (at x: -1, z: -4.2)
    const kitsiriGroup = stupaGroup.clone();
    kitsiriGroup.scale.set(0.65, 0.65, 0.65);
    kitsiriGroup.position.set(-1, getElevation(-1, -4.2) + 0.1, -4.2);
    scene.add(kitsiriGroup);

    // C. Kotte Royal Palace & Dalada Maligawa Complex (at x: 0, z: 5)
    const palaceGroup = new THREE.Group();
    palaceGroup.position.set(0, getElevation(0, 5) + 0.1, 5);

    const wallGeo = new THREE.BoxGeometry(2.4, 0.4, 2.0);
    const wallMat = new THREE.MeshStandardMaterial({ color: '#b56d4b', roughness: 0.7 }); // Laterite Kabok stone
    const palaceWalls = new THREE.Mesh(wallGeo, wallMat);
    palaceGroup.add(palaceWalls);

    // 3-Tiered Dalada Shrine Roof
    for (let r = 0; r < 3; r++) {
      const roofGeo = new THREE.ConeGeometry(1.2 - r * 0.3, 0.3, 4);
      roofGeo.rotateY(Math.PI / 4);
      const terracottaMat = new THREE.MeshStandardMaterial({ color: '#8f3d2a', roughness: 0.6 });
      const roofMesh = new THREE.Mesh(roofGeo, terracottaMat);
      roofMesh.position.y = 0.35 + r * 0.35;
      palaceGroup.add(roofMesh);
    }
    scene.add(palaceGroup);

    // D. Vibhishana Devale (at x: 0.9, z: -6.2)
    const devaleGroup = new THREE.Group();
    devaleGroup.position.set(0.9, getElevation(0.9, -6.2) + 0.1, -6.2);
    const shrineBase = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.9), new THREE.MeshStandardMaterial({ color: '#e6ded3', roughness: 0.5 }));
    shrineBase.position.y = 0.25;
    devaleGroup.add(shrineBase);
    const shrineDome = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 12), goldMat);
    shrineDome.position.y = 0.65;
    devaleGroup.add(shrineDome);
    scene.add(devaleGroup);

    // 6. Tropical Coconut Palms & Kitul Trees
    const palmGroup = new THREE.Group();
    const trunkGeo = new THREE.CylinderGeometry(0.04, 0.07, 0.8, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#574230', roughness: 0.9 });
    const frondGeo = new THREE.ConeGeometry(0.35, 0.45, 7);
    const frondMat = new THREE.MeshStandardMaterial({ color: '#2f6323', roughness: 0.8 });

    // Plant 60 trees along scenic spots
    const treePositions = [
      [-0.4, 4.8], [0.5, 4.4], [-0.8, 3.8], [0.8, 5.2], [-1.2, 5.5],
      [-0.2, 2.2], [-0.9, 1.8], [-1.4, 0.5], [-0.5, -0.2], [-1.8, -1.2],
      [-1.1, -2.4], [-1.7, -2.8], [-0.6, -3.5], [-1.4, -4.8], [-0.5, -5.2],
      [-1.8, -6.5], [-2.2, -7.4], [-0.2, -6.8], [1.2, -5.8], [0.4, -7.2]
    ];

    treePositions.forEach(([tx, tz]) => {
      for (let k = 0; k < 3; k++) {
        const ox = tx + (Math.random() - 0.5) * 0.7;
        const oz = tz + (Math.random() - 0.5) * 0.7;
        const oy = getElevation(ox, oz);
        if (oy > 0.05) {
          const tree = new THREE.Group();
          tree.position.set(ox, oy, oz);
          const trunk = new THREE.Mesh(trunkGeo, trunkMat);
          trunk.position.y = 0.4;
          trunk.rotation.z = (Math.random() - 0.5) * 0.15;
          tree.add(trunk);
          const fronds = new THREE.Mesh(frondGeo, frondMat);
          fronds.position.y = 0.75;
          tree.add(fronds);
          palmGroup.add(tree);
        }
      }
    });
    scene.add(palmGroup);

    // 7. Catmull-Rom Spline Trajectory & Glowing Path
    const splinePoints = SALALIHINI_TRAJECTORY_NODES.map(n => {
      const ey = Math.max(0.3, getElevation(n.x, n.z)) + 0.85;
      return new THREE.Vector3(n.x, ey, n.z);
    });
    const curve = new THREE.CatmullRomCurve3(splinePoints, false, 'centripetal');

    // Path geometry line
    const pathSamples = curve.getPoints(200);
    const pathGeo = new THREE.BufferGeometry().setFromPoints(pathSamples);
    const pathMat = new THREE.LineBasicMaterial({ color: '#f2c46d', linewidth: 2, transparent: true, opacity: 0.7 });
    const pathLine = new THREE.Line(pathGeo, pathMat);
    scene.add(pathLine);

    // 8. 3D Animated Flying Salalihini Bird Model
    const bird = new THREE.Group();
    // Body (sleek, iridescent blue-black)
    const birdMat = new THREE.MeshStandardMaterial({ color: '#161924', roughness: 0.3, metalness: 0.4 });
    const saffronMat = new THREE.MeshStandardMaterial({ color: '#f59e0b', roughness: 0.3, metalness: 0.2 }); // Saffron beak
    const goldFootMat = new THREE.MeshStandardMaterial({ color: '#eab308', roughness: 0.2, metalness: 0.6 }); // Golden pollen feet

    const bodyGeo = new THREE.ConeGeometry(0.12, 0.48, 12);
    bodyGeo.rotateX(-Math.PI / 2);
    const bodyMesh = new THREE.Mesh(bodyGeo, birdMat);
    bird.add(bodyMesh);

    // Head
    const headGeo = new THREE.SphereGeometry(0.1, 12, 10);
    const headMesh = new THREE.Mesh(headGeo, birdMat);
    headMesh.position.set(0, 0.05, 0.24);
    bird.add(headMesh);

    // Beak
    const beakGeo = new THREE.ConeGeometry(0.035, 0.14, 8);
    beakGeo.rotateX(Math.PI / 2);
    const beakMesh = new THREE.Mesh(beakGeo, saffronMat);
    beakMesh.position.set(0, 0.04, 0.36);
    bird.add(beakMesh);

    // Golden Feet
    const footL = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.12), goldFootMat);
    footL.position.set(-0.04, -0.1, 0.02);
    bird.add(footL);
    const footR = footL.clone();
    footR.position.x = 0.04;
    bird.add(footR);

    // Left Wing
    const wingL = new THREE.Group();
    wingL.position.set(-0.08, 0.02, 0.05);
    const wingShapeL = new THREE.BoxGeometry(0.42, 0.015, 0.18);
    const wingMeshL = new THREE.Mesh(wingShapeL, birdMat);
    wingMeshL.position.x = -0.21;
    wingL.add(wingMeshL);
    bird.add(wingL);

    // Right Wing
    const wingR = new THREE.Group();
    wingR.position.set(0.08, 0.02, 0.05);
    const wingShapeR = new THREE.BoxGeometry(0.42, 0.015, 0.18);
    const wingMeshR = new THREE.Mesh(wingShapeR, birdMat);
    wingMeshR.position.x = 0.21;
    wingR.add(wingMeshR);
    bird.add(wingR);

    // Golden Flight Aura / Particle Trail
    const trailGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const trailMat = new THREE.MeshBasicMaterial({ color: '#fcd34d', transparent: true, opacity: 0.6 });
    const trailAura = new THREE.Mesh(trailGeo, trailMat);
    trailAura.position.z = -0.25;
    bird.add(trailAura);

    bird.scale.set(1.4, 1.4, 1.4);
    scene.add(bird);

    // Position bird at initial verse
    const initU = verseToU(initialVerse);
    const initPt = curve.getPointAt(initU);
    bird.position.copy(initPt);

    // Camera targets
    const targetCamPos = new THREE.Vector3().copy(camera.position);
    const targetLookAt = new THREE.Vector3().copy(initPt);
    const curLookAt = new THREE.Vector3().copy(initPt);

    const orbitAngles = { theta: 0, phi: 0.65, radius: 12 };

    threeRef.current = {
      scene,
      camera,
      renderer,
      curve,
      birdGroup: bird,
      wingL,
      wingR,
      pathLine,
      trajectoryMesh: pathLine,
      disposed: false,
      targetCamPos,
      targetLookAt,
      curLookAt,
      orbitAngles,
      isDragging: false,
      prevMouse: { x: 0, y: 0 }
    };

    // -----------------------------------------------------------
    // MOUSE & TOUCH CONTROLS FOR ORBIT MODE
    // -----------------------------------------------------------
    const onMouseDown = (e: MouseEvent) => {
      if (threeRef.current) {
        threeRef.current.isDragging = true;
        threeRef.current.prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!threeRef.current || !threeRef.current.isDragging) return;
      const dx = e.clientX - threeRef.current.prevMouse.x;
      const dy = e.clientY - threeRef.current.prevMouse.y;
      threeRef.current.prevMouse = { x: e.clientX, y: e.clientY };

      threeRef.current.orbitAngles.theta -= dx * 0.006;
      threeRef.current.orbitAngles.phi = Math.max(
        0.1,
        Math.min(Math.PI / 2 - 0.05, threeRef.current.orbitAngles.phi - dy * 0.006)
      );
    };

    const onMouseUp = () => {
      if (threeRef.current) threeRef.current.isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      if (!threeRef.current) return;
      e.preventDefault();
      threeRef.current.orbitAngles.radius = Math.max(
        4,
        Math.min(28, threeRef.current.orbitAngles.radius + e.deltaY * 0.015)
      );
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // -----------------------------------------------------------
    // ANIMATION & PROJECTION LOOP
    // -----------------------------------------------------------
    let reqId = 0;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (!threeRef.current || threeRef.current.disposed) return;

      const elapsed = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Wing flapping animation
      const flapAngle = Math.sin(elapsed * 18) * 0.55;
      wingL.rotation.z = flapAngle;
      wingR.rotation.z = -flapAngle;

      // Project landmark 3D positions to 2D screen pills
      const tempVec = new THREE.Vector3();
      const hw = container.clientWidth / 2;
      const hh = container.clientHeight / 2;

      SALALIHINI_MAP_LANDMARKS.forEach(lm => {
        const el = labelElementsRef.current[lm.id];
        if (el) {
          const elev = getElevation(lm.x, lm.z);
          tempVec.set(lm.x, elev + 0.8, lm.z);
          tempVec.project(camera);

          // Check if behind camera
          if (tempVec.z > 1) {
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';
          } else {
            const screenX = tempVec.x * hw + hw;
            const screenY = -tempVec.y * hh + hh;
            el.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -50%)`;
            el.style.opacity = '1';
            el.style.pointerEvents = 'auto';
          }
        }
      });

      // Smooth camera interpolation
      curLookAt.lerp(targetLookAt, 0.05);
      camera.position.lerp(targetCamPos, 0.05);
      camera.lookAt(curLookAt);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !threeRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      if (threeRef.current) {
        threeRef.current.disposed = true;
        renderer.dispose();
      }
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [viewMode]);

  // Update bird position, orientation, and camera targets when verse or mode changes
  useEffect(() => {
    if (!threeRef.current || viewMode !== '3d') return;

    const { curve, birdGroup, targetCamPos, targetLookAt, orbitAngles } = threeRef.current;
    const u = verseToU(currentVerseNum);
    const pt = curve.getPointAt(u);
    const nextPt = curve.getPointAt(Math.min(1, u + 0.02));

    // Position bird
    birdGroup.position.copy(pt);
    birdGroup.lookAt(nextPt);

    if (cameraMode === 'follow') {
      // Third-person chase camera trailing behind the bird
      const forward = new THREE.Vector3().subVectors(nextPt, pt).normalize();
      const behind = new THREE.Vector3().copy(forward).multiplyScalar(-3.8);
      targetCamPos.copy(pt).add(behind).add(new THREE.Vector3(0, 1.8, 0));
      targetLookAt.copy(pt).add(forward.multiplyScalar(2.0));
    } else if (cameraMode === 'top') {
      // Top-down ancient map view
      targetCamPos.set(pt.x, 22, pt.z + 0.1);
      targetLookAt.set(pt.x, 0, pt.z);
    } else {
      // Orbit mode around active landmark or bird
      let center = pt;
      if (focusedLandmarkId) {
        const lm = SALALIHINI_MAP_LANDMARKS.find(l => l.id === focusedLandmarkId);
        if (lm) {
          center = new THREE.Vector3(lm.x, 0.5, lm.z);
        }
      }
      targetLookAt.copy(center);
      const cx = center.x + orbitAngles.radius * Math.sin(orbitAngles.phi) * Math.sin(orbitAngles.theta);
      const cy = center.y + orbitAngles.radius * Math.cos(orbitAngles.phi);
      const cz = center.z + orbitAngles.radius * Math.sin(orbitAngles.phi) * Math.cos(orbitAngles.theta);
      targetCamPos.set(cx, Math.max(1.5, cy), cz);
    }
  }, [currentVerseNum, cameraMode, focusedLandmarkId, viewMode]);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-obsidian-950 text-parchment-100 select-none font-sans">
      
      {/* 1. TOP HEADER & NAVIGATION BAR */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-3 py-2 sm:px-6 sm:py-3 bg-gradient-to-b from-obsidian-950/95 via-obsidian-950/75 to-transparent backdrop-blur-md border-b border-gold-500/15">
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/journeys"
            className="flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-full bg-obsidian-900/80 border border-gold-500/30 text-xs text-gold-400 hover:text-gold-300 hover:border-gold-400/60 transition backdrop-blur-md"
            title={language === 'si' ? 'ගමන් වෙත' : 'Back to Journeys'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{language === 'si' ? 'ගමන් වෙත' : 'Journeys'}</span>
          </Link>

          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <h1 className="font-serif font-black tracking-wide text-xs sm:text-base lg:text-lg bg-gradient-to-r from-parchment-50 via-gold-300 to-amber-200 bg-clip-text text-transparent">
                <span className="sm:hidden">{language === 'si' ? 'සැළලිහිණි සිතියම' : 'Salalihini Map'}</span>
                <span className="hidden sm:inline">{language === 'si' ? 'සැළලිහිණි සංදේශය — ඓතිහාසික සිතියම' : 'Salalihini Sandeshaya — 3D Flight Map'}</span>
              </h1>
              <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 font-medium">
                1450 CE
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-parchment-400 hidden md:block">
              {language === 'si'
                ? 'ජයවර්ධනපුර කෝට්ටේ සිට කැලණිය විභීෂණ දේවාලය දක්වා සම්ප්‍රදායික කාව්‍ය මඟ'
                : 'The sacred 15th-century flight path from Kotte royal court to Kelaniya Vibhishana Shrine'}
            </p>
          </div>
        </div>

        {/* Controls: All 111 Verses, Camera Mode, GIS/3D Toggle, Sound, Language */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* All 111 Verses Modal Trigger */}
          <button
            onClick={() => setVersesModalOpen(true)}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-gold-500/25 to-amber-600/30 border border-gold-400/50 text-gold-300 text-[11px] sm:text-xs font-semibold hover:border-gold-300 hover:scale-105 transition shadow-lg shrink-0"
            title="Browse all 111 classical verses"
          >
            <BookOpen className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>{language === 'si' ? 'කවි 111' : '111 Verses'}</span>
          </button>

          {/* View Mode Toggle: 3D vs Satellite GIS */}
          <div className="flex rounded-full bg-obsidian-900/80 border border-gold-500/25 p-0.5 text-[10px] sm:text-xs">
            <button
              onClick={() => setViewMode('3d')}
              className={`px-2 sm:px-3 py-1 rounded-full font-medium transition ${
                viewMode === '3d' ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-parchment-300 hover:text-white'
              }`}
            >
              3D
            </button>
            <button
              onClick={() => setViewMode('gis')}
              className={`px-2 sm:px-3 py-1 rounded-full font-medium transition ${
                viewMode === 'gis' ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-parchment-300 hover:text-white'
              }`}
            >
              GIS
            </button>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(prev => !prev)}
            title={soundEnabled ? 'Mute ambient sound' : 'Enable ambient sound'}
            className={`p-1.5 sm:p-2 rounded-full border transition shrink-0 ${
              soundEnabled
                ? 'bg-gold-500/20 border-gold-400 text-gold-300 shadow-[0_0_12px_rgba(234,179,8,0.3)]'
                : 'bg-obsidian-900/80 border-gold-500/20 text-parchment-400 hover:text-white'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-2 sm:px-2.5 py-1 rounded-full bg-obsidian-900/80 border border-gold-500/25 text-[10px] sm:text-xs text-gold-400 font-semibold hover:border-gold-400 transition shrink-0"
          >
            {language === 'si' ? 'EN' : 'සිං'}
          </button>
        </div>
      </header>

      {/* 2. CAMERA MODE SELECTOR (Top Right under Header) */}
      {viewMode === '3d' && (
        <div className="absolute top-13 sm:top-16 right-2 sm:right-6 z-20 flex flex-col items-end gap-1 scale-90 sm:scale-100 origin-top-right">
          <div
            role="tablist"
            className="flex rounded-full border border-gold-500/30 bg-obsidian-950/85 p-0.5 sm:p-1 text-[11px] sm:text-xs backdrop-blur-md shadow-xl"
          >
            {CAMERA_MODES.map(mode => (
              <button
                key={mode.id}
                role="tab"
                aria-selected={cameraMode === mode.id}
                onClick={() => setCameraMode(mode.id)}
                className={`rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 transition-all ${
                  cameraMode === mode.id
                    ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 font-bold shadow-md'
                    : 'text-parchment-300 hover:text-white'
                }`}
              >
                {language === 'si' ? mode.labelSi : mode.labelEn}
              </button>
            ))}
          </div>
          <span className="text-[9px] sm:text-[10px] text-parchment-400 bg-obsidian-950/80 border border-gold-500/10 px-2 py-0.5 rounded-full backdrop-blur hidden xs:inline-block">
            {language === 'si'
              ? CAMERA_MODES.find(m => m.id === cameraMode)?.hintSi
              : CAMERA_MODES.find(m => m.id === cameraMode)?.hintEn}
          </span>
        </div>
      )}

      {/* 3. MAIN MAP CANVASES */}
      {viewMode === '3d' ? (
        <div ref={canvasContainerRef} className="absolute inset-0 z-0 w-full h-full cursor-grab active:cursor-grabbing" />
      ) : (
        /* SATELLITE GIS MODE (MapLibre GL Container) */
        <div className="absolute inset-0 z-0 w-full h-full flex flex-col items-center justify-center bg-obsidian-950">
          <div className="max-w-2xl text-center p-8 rounded-3xl bg-obsidian-900/90 border border-gold-500/30 backdrop-blur-xl shadow-2xl">
            <Compass className="w-12 h-12 text-gold-400 mx-auto mb-4 animate-spin-slow" />
            <h3 className="font-serif text-2xl text-gold-300 font-bold mb-2">
              {language === 'si' ? 'සැටලයිට් ජී.අයි.එස්. සිතියම් දර්ශනය' : 'Geographic Satellite GIS Explorer'}
            </h3>
            <p className="text-sm text-parchment-300 leading-relaxed mb-6">
              {language === 'si'
                ? 'කෝට්ටේ අගනුවර (6.8906° N, 79.9074° E) සිට ඓතිහාසික කැලණි රජමහා විහාරය (6.9525° N, 79.9220° E) දක්වා සැබෑ භූගෝලීය ඛණ්ඩාංක සහ චන්ද්‍රිකා සිතියම.'
                : 'Real geographical coordinates from Kotte royal capital (6.8906° N, 79.9074° E) to Kelaniya Temple (6.9525° N, 79.9220° E) with authentic satellite topography.'}
            </p>
            <div className="grid grid-cols-2 gap-3 text-left mb-6 max-h-48 overflow-y-auto pr-2">
              {SALALIHINI_MAP_LANDMARKS.map(lm => (
                <button
                  key={lm.id}
                  onClick={() => {
                    selectLandmark(lm.id);
                    setViewMode('3d');
                  }}
                  className="p-2.5 rounded-xl bg-obsidian-800/80 border border-gold-500/20 hover:border-gold-400 text-xs transition flex items-center justify-between"
                >
                  <span className="font-medium text-parchment-200">{language === 'si' ? lm.si : lm.en}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setViewMode('3d')}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-amber-600 text-obsidian-950 font-bold text-sm shadow-lg hover:shadow-gold-500/25 transition"
            >
              {language === 'si' ? 'ත්‍රිමාණ සිතියමට යන්න' : 'Switch back to 3D Map'}
            </button>
          </div>
        </div>
      )}

      {/* 4. PROJECTED 3D LANDMARK PILLS (Active in 3D Mode) */}
      {viewMode === '3d' && (
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          {SALALIHINI_MAP_LANDMARKS.map(lm => {
            const isActive = activeLandmark.id === lm.id;
            return (
              <button
                key={lm.id}
                ref={el => {
                  labelElementsRef.current[lm.id] = el;
                }}
                type="button"
                onClick={() => selectLandmark(lm.id)}
                className={`absolute left-0 top-0 whitespace-nowrap rounded-full border px-3 py-1 text-left text-[0.72rem] leading-tight backdrop-blur-md transition-all will-change-transform shadow-lg ${
                  isActive
                    ? 'border-gold-400 bg-obsidian-950/90 text-gold-300 ring-2 ring-gold-400/50 scale-105 shadow-[0_0_20px_rgba(242,196,109,0.7)]'
                    : 'border-gold-500/30 bg-obsidian-950/70 text-parchment-300 hover:border-gold-400 hover:text-white'
                }`}
                style={{ opacity: 0 }}
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className={`w-3 h-3 ${isActive ? 'text-gold-400' : 'text-gold-500/70'}`} />
                  <span className="font-semibold">{language === 'si' ? lm.si : lm.en}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* 5. FLOATING ASIDE LANDMARK CARD (Left Panel) */}
      {activeLandmark && asideOpen && (
        <aside className="absolute left-4 top-16 z-20 hidden md:block w-80 rounded-3xl p-5 bg-obsidian-950/85 border border-gold-500/30 backdrop-blur-xl shadow-2xl animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-gold-500/15">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
              {activeLandmark.verses
                ? `${language === 'si' ? 'කවි' : 'VERSES'} ${activeLandmark.verses[0]}–${activeLandmark.verses[1]}`
                : 'SCENERY'}
            </span>
            <button
              onClick={() => setAsideOpen(false)}
              className="text-parchment-400 hover:text-white text-xs px-2 py-0.5 rounded-full hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <h2 className="mt-3 font-serif text-xl font-bold text-parchment-50 leading-tight">
            {language === 'si' ? activeLandmark.si : activeLandmark.en}
          </h2>
          <p className="text-xs text-gold-400/90 font-medium">
            {language === 'si' ? activeLandmark.en : activeLandmark.si}
          </p>

          <p className="mt-3 text-xs leading-relaxed text-parchment-300">
            {language === 'si' ? activeLandmark.blurbSi : activeLandmark.blurbEn}
          </p>

          {activeLandmark.verses && (
            <div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center justify-between">
              <button
                onClick={() => {
                  setCurrentVerseNum(activeLandmark.verses[0]);
                  setIsPlaying(false);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold hover:bg-gold-500/30 transition"
              >
                <span>{language === 'si' ? 'මෙම කවිය බලන්න' : 'Fly to Verse'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] text-parchment-500">
                {activeLandmark.verses[1] - activeLandmark.verses[0] + 1} {language === 'si' ? 'කවි' : 'verses'}
              </span>
            </div>
          )}
        </aside>
      )}

      {/* 6. FLOATING BOTTOM VERSE SCRUBBER & PLAYER */}
      <section
        aria-label="Verse controller"
        className={`absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 z-30 mx-auto max-w-4xl rounded-2xl sm:rounded-3xl p-3 sm:p-5 bg-obsidian-950/95 border border-gold-500/35 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.9)] transition-all duration-300 ${
          isMobileExpanded ? 'max-h-[82vh] overflow-y-auto' : ''
        }`}
      >
        <div className="flex items-start gap-2.5 sm:gap-4">
          
          {/* Big Play / Pause Button */}
          <button
            type="button"
            onClick={() => setIsPlaying(prev => !prev)}
            aria-label={isPlaying ? 'Pause the flight' : 'Play the flight'}
            className="mt-0.5 sm:mt-1 grid size-10 sm:size-12 shrink-0 place-items-center rounded-xl sm:rounded-2xl border border-gold-400/80 bg-gradient-to-br from-gold-400/25 to-amber-600/30 text-gold-300 hover:scale-105 active:scale-95 transition shadow-lg shadow-gold-500/20"
          >
            {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-gold-400" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-gold-400 ml-0.5" />}
          </button>

          {/* Verse Content */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs mb-1">
              <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                <span className="font-mono font-bold text-gold-400 text-xs sm:text-sm">
                  {language === 'si' ? `කවිය ${currentVerseNum} / 111` : `Verse ${currentVerseNum} / 111`}
                </span>
                <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-gold-500/15 text-parchment-300 border border-gold-500/20 truncate max-w-[130px] sm:max-w-none">
                  {language === 'si' ? currentCanto.si : currentCanto.en}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Mobile Expand / Collapse Toggle Button */}
                <button
                  onClick={() => setIsMobileExpanded(prev => !prev)}
                  className="md:hidden inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-[10px] text-gold-300 font-medium active:scale-95"
                >
                  <span>{isMobileExpanded ? (language === 'si' ? 'හකුළන්න ▼' : 'Less ▼') : (language === 'si' ? 'විස්තර ▲' : 'Details ▲')}</span>
                </button>

                {/* All 111 Verses Modal Trigger */}
                <button
                  onClick={() => setVersesModalOpen(true)}
                  className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-[10px] sm:text-[11px] text-gold-300 font-medium hover:bg-gold-500/30 transition"
                >
                  <BookOpen className="w-3 h-3 text-gold-400" />
                  <span className="hidden xs:inline">{language === 'si' ? 'සියලු කවි' : 'All 111'}</span>
                </button>
              </div>
            </div>

            {/* Authentic Classical Poetic Stanza (සිව්පද / පද්‍ය පංති) */}
            <div className="space-y-0.5 my-1.5 sm:my-2 p-2 sm:p-2.5 rounded-xl bg-obsidian-900/80 border border-gold-500/20">
              {currentVerse.lines && currentVerse.lines.length > 0 ? (
                currentVerse.lines.map((line, idx) => (
                  <p
                    key={idx}
                    lang="si"
                    className="font-serif text-xs sm:text-base leading-snug sm:leading-relaxed text-gold-300 font-semibold tracking-wide"
                  >
                    {line}
                  </p>
                ))
              ) : (
                <p lang="si" className="font-serif text-xs sm:text-base text-gold-300 font-semibold">
                  {currentVerse.si}
                </p>
              )}
            </div>

            {/* Plain Sinhala Meaning & English (Expanded on mobile, always visible on desktop) */}
            <div className={`${isMobileExpanded ? 'block' : 'hidden md:block'} space-y-2 mt-2 pt-2 border-t border-gold-500/10 animate-fade-in`}>
              {/* Sinhala Meaning */}
              <div className="text-xs sm:text-sm text-parchment-200 leading-relaxed pl-2.5 border-l-2 border-gold-400/40">
                <span className="text-[10px] uppercase tracking-wider font-bold text-gold-400 block">
                  {language === 'si' ? 'සරල අර්ථය:' : 'Meaning:'}
                </span>
                <p>{currentVerse.si}</p>
              </div>

              {/* Poetic English Translation */}
              <div className="text-xs text-parchment-400 italic leading-relaxed pl-2.5 border-l-2 border-stone-600">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 block not-italic">
                  English Translation:
                </span>
                <p>"{currentVerse.en}"</p>
              </div>

              {/* Historical Footnote / Commentary (if available) */}
              {currentVerse.note && (
                <div className="p-2 rounded-xl bg-obsidian-900/60 border border-gold-500/15 text-[11px] text-parchment-400">
                  <span className="font-semibold text-gold-400">
                    {language === 'si' ? 'ඓතිහාසික සටහන: ' : 'Historical Note: '}
                  </span>
                  {language === 'si' ? currentVerse.note.si : currentVerse.note.en}
                </div>
              )}
            </div>
          </div>

          {/* Speed Toggle (Desktop) */}
          <div className="hidden sm:flex flex-col items-center gap-1">
            <span className="text-[9px] uppercase tracking-wider text-parchment-500">Speed</span>
            <button
              onClick={() => setPlaybackSpeed(s => (s === 1 ? 1.5 : s === 1.5 ? 2 : 1))}
              className="px-2 py-1 rounded-lg bg-obsidian-800/80 border border-gold-500/20 text-xs font-mono text-gold-400 hover:border-gold-400"
            >
              {playbackSpeed}x
            </button>
          </div>
        </div>

        {/* 7. SLIDER SCRUBBER TIMELINE */}
        <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gold-500/15 flex items-center gap-2 sm:gap-3">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentVerseNum(prev => Math.max(1, prev - 1))}
            disabled={currentVerseNum <= 1}
            className="p-1 sm:p-1.5 rounded-full hover:bg-gold-500/20 text-parchment-300 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent min-w-[32px] min-h-[32px] flex items-center justify-center"
            title="Previous Verse"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Range Slider Track */}
          <div className="relative flex-1 flex items-center">
            <input
              type="range"
              min={1}
              max={111}
              value={currentVerseNum}
              onChange={e => {
                setCurrentVerseNum(Number(e.target.value));
                setIsPlaying(false);
              }}
              className="w-full h-2 bg-obsidian-800 rounded-lg appearance-none cursor-pointer accent-gold-400 focus:outline-none"
            />
            {/* Landmark Markers along Scrubber */}
            <div className="pointer-events-none absolute inset-x-0 -top-2 flex justify-between px-1">
              {SALALIHINI_MAP_LANDMARKS.filter(lm => lm.verses).map(lm => {
                const pct = ((lm.verses[0] - 1) / 110) * 100;
                return (
                  <div
                    key={lm.id}
                    style={{ left: `${pct}%` }}
                    className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-gold-400/60"
                    title={lm.en}
                  />
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentVerseNum(prev => Math.min(111, prev + 1))}
            disabled={currentVerseNum >= 111}
            className="p-1 sm:p-1.5 rounded-full hover:bg-gold-500/20 text-parchment-300 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent min-w-[32px] min-h-[32px] flex items-center justify-center"
            title="Next Verse"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Creator Attribution */}
        <div className="mt-2 text-center text-[10px] sm:text-[11px] text-stone-400/80 font-sans">
          <span>{language === 'si' ? 'නිර්මාණය කළේ: ' : 'Crafted by '}</span>
          <span className="text-gold-400 font-semibold tracking-wide">Knexa System (Krishan Prageeth)</span>
        </div>
      </section>

      {/* 8. ALL 111 VERSES DIRECTORY MODAL */}
      <SalalihiniVersesDirectory
        isModal={true}
        isOpen={versesModalOpen}
        onClose={() => setVersesModalOpen(false)}
        initialVerse={currentVerseNum}
        onSelectVerse={vNum => {
          setCurrentVerseNum(vNum);
          setIsPlaying(false);
        }}
      />
    </main>
  );
}
