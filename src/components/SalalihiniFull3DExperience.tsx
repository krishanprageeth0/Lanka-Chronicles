'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  MapPin,
  Compass,
  Feather,
  BookOpen,
  Volume2,
  VolumeX,
  Layers,
  Eye,
  Sliders,
  Maximize2
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { SALALIHINI_ALL_111_VERSES, SALALIHINI_CANTOS, SalalihiniVerse, SalalihiniCanto } from '../data/salalihiniVerses';
import JourneyFlightPlayer from './JourneyFlightPlayer';
import { HISTORICAL_JOURNEYS } from '../data/journeys';

export default function SalalihiniFull3DExperience() {
  const { language, t } = useLanguage();
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const [activeVerseNum, setActiveVerseNum] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playSpeed, setPlaySpeed] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'3d_bird' | 'gis_map'>('3d_bird');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [showVerseDrawer, setShowVerseDrawer] = useState<boolean>(true);

  const currentVerse: SalalihiniVerse = SALALIHINI_ALL_111_VERSES.find(v => v.n === activeVerseNum) || SALALIHINI_ALL_111_VERSES[0];
  const currentCanto: SalalihiniCanto = SALALIHINI_CANTOS.find(c => activeVerseNum >= c.from && activeVerseNum <= c.to) || SALALIHINI_CANTOS[0];

  // Ref to pass values into Three.js animation loop without re-instantiating scene
  const animStateRef = useRef({
    progress: (activeVerseNum - 1) / 110,
    targetProgress: (activeVerseNum - 1) / 110,
    theme: currentCanto.theme,
    mouseX: 0,
    mouseY: 0
  });

  useEffect(() => {
    animStateRef.current.targetProgress = (activeVerseNum - 1) / 110;
    animStateRef.current.theme = currentCanto.theme;
  }, [activeVerseNum, currentCanto.theme]);

  // Audio ambience setup
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const initAudio = () => {
    if (audioContextRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const gain = ctx.createGain();
      gain.gain.value = soundEnabled ? 0.08 : 0;
      gain.connect(ctx.destination);
      gainNodeRef.current = gain;

      // Soft natural breeze synthesis
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(gain);
      whiteNoise.start();
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const toggleSound = () => {
    if (!audioContextRef.current) {
      initAudio();
    }
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.setValueAtTime(next ? 0.08 : 0, audioContextRef.current.currentTime);
    }
  };

  // Auto-play progress
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveVerseNum(prev => {
        if (prev >= 111) {
          setIsPlaying(false);
          return 111;
        }
        return prev + 1;
      });
    }, 4500 / playSpeed);
    return () => clearInterval(interval);
  }, [isPlaying, playSpeed]);

  // Track mouse coordinates for bird subtle banking
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    animStateRef.current.mouseX = x;
    animStateRef.current.mouseY = y;
  };

  // -------------------------------------------------------------
  // THREE.JS 3D PROCEDURAL SCENE (Bird, Stupas, Palms, River)
  // -------------------------------------------------------------
  useEffect(() => {
    if (viewMode !== '3d_bird' || !canvasContainerRef.current) return;

    const container = canvasContainerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e1726, 0.015);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 7.5);
    camera.lookAt(0, 1.2, -10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 2. Lighting (Sun & Hemisphere)
    const hemiLight = new THREE.HemisphereLight(0xffecd2, 0x223344, 1.4);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff1dc, 2.8);
    sunLight.position.set(8, 14, 10);
    sunLight.castShadow = true;
    scene.add(sunLight);

    // 3. Procedural Sky Dome
    const skyGeo = new THREE.SphereGeometry(60, 32, 16);
    const skyMat = new THREE.MeshBasicMaterial({ color: 0x16243b, side: THREE.BackSide });
    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    scene.add(skyMesh);

    // -------------------------------------------------------------
    // PROCEDURAL FLYING SALALIHINI BIRD
    // -------------------------------------------------------------
    const birdGroup = new THREE.Group();
    scene.add(birdGroup);
    birdGroup.position.set(0, 1.5, 3.5);

    // Feathers & Anatomy Materials
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x7a4b2a, roughness: 0.7, metalness: 0.1 });
    const wingMat = new THREE.MeshStandardMaterial({ color: 0x5a341a, roughness: 0.8, side: THREE.DoubleSide });
    const beakMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3, metalness: 0.3 }); // Saffron-orange beak
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.1 });
    const legMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4 });

    // Bird Torso
    const bodyGeo = new THREE.ConeGeometry(0.32, 1.2, 12);
    bodyGeo.rotateX(Math.PI / 2);
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    birdGroup.add(bodyMesh);

    // Bird Head
    const headGeo = new THREE.SphereGeometry(0.24, 12, 12);
    const headMesh = new THREE.Mesh(headGeo, bodyMat);
    headMesh.position.set(0, 0.18, 0.58);
    birdGroup.add(headMesh);

    // Beak
    const beakGeo = new THREE.ConeGeometry(0.08, 0.35, 8);
    beakGeo.rotateX(Math.PI / 2);
    const beakMesh = new THREE.Mesh(beakGeo, beakMat);
    beakMesh.position.set(0, 0.14, 0.82);
    birdGroup.add(beakMesh);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(0.14, 0.22, 0.65);
    birdGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(-0.14, 0.22, 0.65);
    birdGroup.add(rightEye);

    // Tail Feathers
    const tailGeo = new THREE.BoxGeometry(0.38, 0.03, 0.75);
    const tailMesh = new THREE.Mesh(tailGeo, wingMat);
    tailMesh.position.set(0, -0.05, -0.75);
    birdGroup.add(tailMesh);

    // Articulated Wings (Left & Right)
    const leftWingRoot = new THREE.Group();
    leftWingRoot.position.set(0.22, 0.08, 0.12);
    birdGroup.add(leftWingRoot);

    const leftWingGeo = new THREE.BoxGeometry(1.2, 0.025, 0.45);
    leftWingGeo.translate(0.6, 0, 0);
    const leftWingMesh = new THREE.Mesh(leftWingGeo, wingMat);
    leftWingRoot.add(leftWingMesh);

    const rightWingRoot = new THREE.Group();
    rightWingRoot.position.set(-0.22, 0.08, 0.12);
    birdGroup.add(rightWingRoot);

    const rightWingGeo = new THREE.BoxGeometry(1.2, 0.025, 0.45);
    rightWingGeo.translate(-0.6, 0, 0);
    const rightWingMesh = new THREE.Mesh(rightWingGeo, wingMat);
    rightWingRoot.add(rightWingMesh);

    // -------------------------------------------------------------
    // PROCEDURAL TERRAIN & SCENIC TILES (River, Stupas, Trees)
    // -------------------------------------------------------------
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // Materials
    const terrainMat = new THREE.MeshStandardMaterial({ color: 0x1d3625, roughness: 0.9 });
    const riverMat = new THREE.MeshStandardMaterial({ color: 0x1e3a5f, roughness: 0.1, metalness: 0.6 });
    const stupaWhiteMat = new THREE.MeshStandardMaterial({ color: 0xede9e1, roughness: 0.5 });
    const stupaGoldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.2 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a2e1e, roughness: 0.9 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x155e2d, roughness: 0.85 });
    const palaceMat = new THREE.MeshStandardMaterial({ color: 0x8b3a2a, roughness: 0.7 });

    // Function to create an authentic Sri Lankan Stupa (Bubble dome + Hataras Kotuwa + Kotha)
    const createStupa = (scale = 1) => {
      const g = new THREE.Group();
      // Triple Berms (Pesavas)
      const baseMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.4 * scale, 1.6 * scale, 0.4 * scale, 16), stupaWhiteMat);
      baseMesh.position.y = 0.2 * scale;
      g.add(baseMesh);

      // Bell Dome (Garbhaya)
      const domeMesh = new THREE.Mesh(new THREE.SphereGeometry(1.2 * scale, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), stupaWhiteMat);
      domeMesh.position.y = 0.4 * scale;
      g.add(domeMesh);

      // Square Chamber (Hataras Kotuwa)
      const squareMesh = new THREE.Mesh(new THREE.BoxGeometry(0.6 * scale, 0.4 * scale, 0.6 * scale), stupaWhiteMat);
      squareMesh.position.y = (0.4 + 1.2 + 0.2) * scale;
      g.add(squareMesh);

      // Spire (Kot Kerella & Chuda Manikya)
      const spireMesh = new THREE.Mesh(new THREE.ConeGeometry(0.3 * scale, 0.9 * scale, 12), stupaGoldMat);
      spireMesh.position.y = (0.4 + 1.2 + 0.4 + 0.45) * scale;
      g.add(spireMesh);

      return g;
    };

    // Function to create a Coconut / Kitul Palm Tree
    const createPalmTree = (scale = 1) => {
      const g = new THREE.Group();
      const trunkMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08 * scale, 0.12 * scale, 2.2 * scale, 6), trunkMat);
      trunkMesh.position.y = 1.1 * scale;
      trunkMesh.rotation.z = (Math.random() - 0.5) * 0.15;
      g.add(trunkMesh);

      // Crown fronds
      for (let i = 0; i < 7; i++) {
        const angle = (i / 7) * Math.PI * 2;
        const frondMesh = new THREE.Mesh(new THREE.BoxGeometry(0.18 * scale, 0.02 * scale, 1.1 * scale), foliageMat);
        frondMesh.position.set(0, 2.2 * scale, 0);
        frondMesh.rotation.y = angle;
        frondMesh.rotation.x = 0.45 + Math.random() * 0.2;
        g.add(frondMesh);
      }
      return g;
    };

    // Function to create a broadleaf rainforest tree
    const createForestTree = (scale = 1) => {
      const g = new THREE.Group();
      const trunkMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * scale, 0.16 * scale, 1.4 * scale, 6), trunkMat);
      trunkMesh.position.y = 0.7 * scale;
      g.add(trunkMesh);

      const leafMesh = new THREE.Mesh(new THREE.SphereGeometry(0.9 * scale, 8, 8), foliageMat);
      leafMesh.position.y = 1.8 * scale;
      g.add(leafMesh);
      return g;
    };

    // Terrain grid tiles
    const groundGeo = new THREE.PlaneGeometry(80, 140, 40, 60);
    groundGeo.rotateX(-Math.PI / 2);

    // Apply river depression and rolling hills
    const posAttr = groundGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);
      // River path: x = sin(z * 0.08) * 6
      const riverCenter = Math.sin(z * 0.08) * 6;
      const distFromRiver = Math.abs(x - riverCenter);

      let y = Math.sin(x * 0.12) * Math.cos(z * 0.07) * 1.8;
      if (distFromRiver < 4) {
        y = -0.6 - (1 - distFromRiver / 4) * 0.8;
      }
      posAttr.setY(i, y);
    }
    groundGeo.computeVertexNormals();

    const groundMesh = new THREE.Mesh(groundGeo, terrainMat);
    groundMesh.receiveShadow = true;
    worldGroup.add(groundMesh);

    // River water surface
    const riverGeo = new THREE.PlaneGeometry(7.5, 140, 16, 60);
    riverGeo.rotateX(-Math.PI / 2);
    const riverMesh = new THREE.Mesh(riverGeo, riverMat);
    riverMesh.position.y = -0.55;
    worldGroup.add(riverMesh);

    // Scatter Landmark Stupas along the landscape
    const stupaPositions = [
      { x: -12, z: -15, s: 1.8 }, // Kotte initial shrine
      { x: 14, z: -35, s: 1.4 },
      { x: -9, z: -60, s: 1.2 },
      { x: 6, z: -85, s: 2.2 },  // Kelaniya Raja Maha Vihara
      { x: -16, z: -110, s: 1.5 }
    ];

    stupaPositions.forEach(p => {
      const stupa = createStupa(p.s);
      stupa.position.set(p.x, 0.2, p.z);
      worldGroup.add(stupa);
    });

    // Scatter Palm trees & Rainforest trees
    for (let i = 0; i < 90; i++) {
      const z = -5 - Math.random() * 125;
      const xSign = Math.random() > 0.5 ? 1 : -1;
      const x = (Math.sin(z * 0.08) * 6) + xSign * (5 + Math.random() * 26);
      const palm = createPalmTree(0.7 + Math.random() * 0.6);
      palm.position.set(x, 0, z);
      worldGroup.add(palm);
    }

    for (let i = 0; i < 75; i++) {
      const z = -5 - Math.random() * 125;
      const xSign = Math.random() > 0.5 ? 1 : -1;
      const x = (Math.sin(z * 0.08) * 6) + xSign * (6 + Math.random() * 28);
      const tree = createForestTree(0.8 + Math.random() * 0.7);
      tree.position.set(x, 0, z);
      worldGroup.add(tree);
    }

    // -------------------------------------------------------------
    // ANIMATION & RENDER LOOP
    // -------------------------------------------------------------
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const time = clock.getElapsedTime();

      // Smooth progress lerp
      animStateRef.current.progress += (animStateRef.current.targetProgress - animStateRef.current.progress) * 0.05;
      const prog = animStateRef.current.progress;

      // 1. Move world backward beneath bird to simulate forward flight
      // World shifts along Z: 0 to 110 maps to Z translation
      const baseZ = prog * 105;
      worldGroup.position.z = baseZ % 70;

      // 2. Bird flapping dynamics & wing oscillation
      const flapFrequency = 6.8;
      const flapAngle = Math.sin(time * flapFrequency) * 0.55;

      leftWingRoot.rotation.z = flapAngle;
      rightWingRoot.rotation.z = -flapAngle;

      // Subtle bird bobbing
      birdGroup.position.y = 1.5 + Math.sin(time * flapFrequency) * 0.08;

      // Subtle banking based on mouse movement
      const targetBank = -animStateRef.current.mouseX * 0.45;
      const targetPitch = animStateRef.current.mouseY * 0.25;
      birdGroup.rotation.z += (targetBank - birdGroup.rotation.z) * 0.08;
      birdGroup.rotation.x += (targetPitch - birdGroup.rotation.x) * 0.08;
      birdGroup.position.x += (animStateRef.current.mouseX * 1.5 - birdGroup.position.x) * 0.05;

      // 3. Sky & Atmosphere Color Modulation by Canto Theme
      const theme = animStateRef.current.theme;
      if (theme === 'dawn' || theme === 'morning') {
        scene.fog?.color.setHex(0xd6a16d);
        skyMat.color.setHex(0xffbc7d);
        sunLight.color.setHex(0xffd5a0);
        sunLight.intensity = 2.4;
      } else if (theme === 'court' || theme === 'sacred') {
        scene.fog?.color.setHex(0x1a2e3b);
        skyMat.color.setHex(0x1e3a5f);
        sunLight.color.setHex(0xfff1dc);
        sunLight.intensity = 3.0;
      } else if (theme === 'sunset' || theme === 'dusk') {
        scene.fog?.color.setHex(0x542638);
        skyMat.color.setHex(0x8a3848);
        sunLight.color.setHex(0xff7755);
        sunLight.intensity = 2.0;
      } else if (theme === 'night' || theme === 'moonlit') {
        scene.fog?.color.setHex(0x090f1d);
        skyMat.color.setHex(0x0c1527);
        sunLight.color.setHex(0x99bbff);
        sunLight.intensity = 1.1;
      } else {
        scene.fog?.color.setHex(0x13271d);
        skyMat.color.setHex(0x2d5a45);
        sunLight.color.setHex(0xfff5e6);
        sunLight.intensity = 2.8;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!canvasContainerRef.current) return;
      const w = canvasContainerRef.current.clientWidth;
      const h = canvasContainerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [viewMode]);

  return (
    <div className="relative w-full h-[calc(100vh-65px)] mt-[65px] bg-obsidian-950 overflow-hidden flex flex-col select-none">
      
      {/* TOP HUD: Title, Chapter Banner & Controls */}
      <header className="absolute top-0 left-0 right-0 z-30 p-3 sm:p-4 bg-gradient-to-b from-obsidian-950/95 via-obsidian-950/80 to-transparent flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/50 flex items-center justify-center text-gold-400 shadow-lg">
            <Feather className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs uppercase font-mono font-bold tracking-widest text-gold-400">
                15th-Century Classical Poetic Journey
              </span>
              <span className="bg-gold-500/20 text-gold-300 border border-gold-500/40 font-mono text-[10px] px-2 py-0.2 rounded-full">
                111 Verses
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-serif font-black text-parchment-100 flex items-center gap-2">
              <span>{language === 'si' ? 'සැළලිහිණි සංදේශය 3D පියාසැරිය' : 'Salalihini Sandeshaya: 3D Flight of the Starling'}</span>
            </h1>
          </div>
        </div>

        {/* View Mode & Audio Controls */}
        <div className="flex items-center gap-2">
          {/* Dual Mode Switcher (3D Bird vs Real Geographic Map) */}
          <div className="bg-obsidian-900/90 border border-gold-500/30 rounded-xl p-1 flex items-center text-xs backdrop-blur-md">
            <button
              onClick={() => setViewMode('3d_bird')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                viewMode === '3d_bird'
                  ? 'bg-gold-500 text-obsidian-950 shadow'
                  : 'text-stone-300 hover:text-parchment-100'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">3D Flight Scenery</span>
            </button>
            <button
              onClick={() => setViewMode('gis_map')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                viewMode === 'gis_map'
                  ? 'bg-gold-500 text-obsidian-950 shadow'
                  : 'text-stone-300 hover:text-parchment-100'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GIS Geographic Map</span>
            </button>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`p-2.5 rounded-xl border backdrop-blur-md transition-all ${
              soundEnabled
                ? 'bg-gold-500/20 border-gold-500/60 text-gold-300 shadow-lg shadow-gold-500/20'
                : 'bg-obsidian-900/80 border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
            title={soundEnabled ? 'Mute Ambience' : 'Unmute Natural Ambience'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* MAIN VIEWPORT: Either Three.js 3D Procedural Canvas or MapLibre Satellite Flight */}
      <div
        className="relative flex-1 w-full h-full"
        onMouseMove={handleMouseMove}
      >
        {viewMode === '3d_bird' ? (
          <div ref={canvasContainerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
        ) : (
          <JourneyFlightPlayer journey={HISTORICAL_JOURNEYS[0]} />
        )}
      </div>

      {/* FLOATING VERSE & FLIGHT DRAWER (All 111 Verses) */}
      <div className="absolute bottom-4 left-4 right-4 z-30 pointer-events-none flex justify-center">
        <div className="w-full max-w-4xl bg-obsidian-950/92 border border-gold-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-2xl pointer-events-auto space-y-4">
          
          {/* Canto / Chapter Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
                {language === 'si' ? currentCanto.si : currentCanto.en} (කවි {currentCanto.from} – {currentCanto.to})
              </span>
              <span className="text-stone-500 text-xs hidden sm:inline">•</span>
              <span className="text-[11px] text-stone-400 hidden sm:inline">
                {language === 'si' ? currentCanto.descSi : currentCanto.descEn}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-gold-400">
              <span className="font-bold text-parchment-100">කවිය {currentVerse.n}</span>
              <span className="text-stone-500">/ 111</span>
            </div>
          </div>

          {/* Classical Sinhala Verse & Meaning Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Sinhala Text & English Interpretation */}
            <div className="md:col-span-8 space-y-2">
              <p className="font-serif text-sm sm:text-base text-parchment-50 leading-relaxed font-medium">
                {language === 'si' ? currentVerse.si : currentVerse.en}
              </p>
              {language === 'si' && currentVerse.en && (
                <p className="text-xs text-stone-400 font-sans italic line-clamp-2">
                  &ldquo;{currentVerse.en}&rdquo;
                </p>
              )}
              {currentVerse.note && (
                <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-[11px] text-gold-300/90">
                  <span className="font-bold font-mono">විශේෂ සටහන: </span>
                  {language === 'si' ? currentVerse.note.si : currentVerse.note.en}
                </div>
              )}
            </div>

            {/* Flight Telemetry & Fast Scrub */}
            <div className="md:col-span-4 p-3 rounded-2xl bg-obsidian-900 border border-gold-500/30 space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between text-stone-400 text-[11px]">
                <span>FLIGHT PROGRESS</span>
                <span className="text-gold-400 font-bold">{Math.round((activeVerseNum / 111) * 100)}%</span>
              </div>
              <div className="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-gold-500 to-amber-400 h-full transition-all duration-300"
                  style={{ width: `${(activeVerseNum / 111) * 100}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-stone-400 pt-1">
                <span>කෝට්ටේ මාලිගය</span>
                <span>කැලණි මහා විහාරය</span>
              </div>
            </div>
          </div>

          {/* Interactive Playback & 111-Verse Scrubber Bar */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-800/80">
            
            {/* Left Controls: Prev, Play/Pause, Next */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveVerseNum(prev => Math.max(1, prev - 1))}
                disabled={activeVerseNum <= 1}
                className="p-2 rounded-xl bg-obsidian-900 border border-stone-800 text-stone-300 hover:text-parchment-100 hover:border-gold-500 disabled:opacity-40 transition-colors"
                title="Previous Verse"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  initAudio();
                  setIsPlaying(!isPlaying);
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Fly Along Verses</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setActiveVerseNum(prev => Math.min(111, prev + 1))}
                disabled={activeVerseNum >= 111}
                className="p-2 rounded-xl bg-obsidian-900 border border-stone-800 text-stone-300 hover:text-parchment-100 hover:border-gold-500 disabled:opacity-40 transition-colors"
                title="Next Verse"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveVerseNum(1);
                  setIsPlaying(false);
                }}
                className="p-2 rounded-xl bg-obsidian-900 border border-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
                title="Restart Journey"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Middle: 111 Verse Direct Slider */}
            <div className="flex-1 max-w-sm flex items-center gap-3">
              <span className="text-[10px] font-mono text-stone-400">V.1</span>
              <input
                type="range"
                min={1}
                max={111}
                value={activeVerseNum}
                onChange={e => setActiveVerseNum(Number(e.target.value))}
                className="w-full accent-gold-500 h-1.5 bg-stone-800 rounded-lg cursor-pointer"
              />
              <span className="text-[10px] font-mono text-stone-400">V.111</span>
            </div>

            {/* Right: Flight Speed Toggle */}
            <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
              <span>Speed:</span>
              {[1, 1.5, 2].map(speed => (
                <button
                  key={speed}
                  onClick={() => setPlaySpeed(speed)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    playSpeed === speed ? 'bg-gold-500/20 text-gold-400 border border-gold-500/50' : 'hover:text-stone-200'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
