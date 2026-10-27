'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import {
  RotateCw,
  ZoomIn,
  ZoomOut,
  Eye,
  Layers,
  Info,
  Maximize2,
  Minimize2,
  Sparkles,
  HelpCircle,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

export type MonumentModelType =
  | 'stupa'
  | 'sigiriya'
  | 'vatadage'
  | 'yapahuwa'
  | 'temple_of_tooth'
  | 'cave_temple'
  | 'colossal_statue'
  | 'fortress_bastion'
  | 'monastery'
  | 'moonstone';

interface Monument3DViewerProps {
  modelType?: MonumentModelType;
  monumentTitle?: string;
  provenance?: string;
  className?: string;
}

interface Hotspot {
  id: string;
  nameEn: string;
  nameSi: string;
  descEn: string;
  descSi: string;
  pos?: [number, number, number];
}

export default function Monument3DViewer({
  modelType = 'stupa',
  monumentTitle,
  provenance = 'educational_reconstruction',
  className = ''
}: Monument3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);

  // Model-specific Hotspots
  const hotspots: Hotspot[] = React.useMemo(() => {
    switch (modelType) {
      case 'sigiriya':
        return [
          {
            id: 'lion_paws',
            nameEn: 'Lion Staircase Paws',
            nameSi: 'සිංහ පාද ද්වාරය',
            descEn: 'Colossal sculpted brick-and-mortar lion claws guarding the final ascent to the summit palace.',
            descSi: 'පර්වත මුදුනට පිවිසෙන අවසන් පියගැටපෙළ ආරම්භයේ ඇති දැවැන්ත සිංහ පාද මූර්තිය.'
          },
          {
            id: 'summit_palace',
            nameEn: 'Summit Royal Citadel',
            nameSi: 'පර්වත මුදුනේ මාලිගා නටබුන්',
            descEn: 'The 1.5-hectare summit plateau featuring King Kassapa’s royal palace foundations, throne, and rock-cut cistern.',
            descSi: 'හෙක්ටයාර 1.5ක පර්වත මුදුනේ පිහිටි කාශ්‍යප රජුගේ මාලිගා සංකීර්ණය, රජ අසුන සහ කළුගලින් හෑරූ පොකුණ.'
          },
          {
            id: 'mirror_wall',
            nameEn: 'Mirror Wall Gallery',
            nameSi: 'කැටපත් පවුර හා බිතුසිතුවම්',
            descEn: 'Glazed porcelain-like plaster wall preserving 685 ancient Sinhala poetic graffiti verses.',
            descSi: 'බිත්තර සුදුමද හා මීපැණි මිශ්‍ර ඔප දැමූ බදාමයකින් කළ, 6-14 සියවස් වල කුරුටු ගී 685ක් සුරැකි පවුර.'
          },
          {
            id: 'water_gardens',
            nameEn: 'Hydraulic Water Gardens',
            nameSi: 'සමමිතික ජල උද්‍යාන',
            descEn: 'Symmetrical aquatic pleasure pavilions fed by subterranean terracotta pipes and gravity fountains.',
            descSi: 'භූගත මැටි නළ මගින් ක්‍රියාත්මක වූ පෙරදිග පැරණිතම උද්‍යාන වාස්තු විද්‍යාත්මක සැලසුම.'
          }
        ];

      case 'vatadage':
        return [
          {
            id: 'dhyana_buddhas',
            nameEn: 'Four Dhyana Buddhas',
            nameSi: 'සතර දිශා සමාධි බුදුපිළිම',
            descEn: 'Four seated granite Buddhas in Dhyana Mudra facing the cardinal points to radiate spiritual protection.',
            descSi: 'සිව් දිශාවට මුහුණලා ධ්‍යාන මුද්‍රාවෙන් වැඩසිටින කළුගල් බුද්ධ ප්‍රතිමා සතර.'
          },
          {
            id: 'moonstone_entrance',
            nameEn: 'Polonnaruwa Moonstone',
            nameSi: 'පොළොන්නරු සඳකඩපහණ',
            descEn: 'Exquisitely carved semi-circular threshold displaying swans, horses, and elephants without the bull.',
            descSi: 'ශෛව බැතිමතුන්ගේ ගෞරවය උදෙසා ගවයාගේ රූපය ඉවත් කර නෙළන ලද සම්ප්‍රදායික සඳකඩපහණ.'
          },
          {
            id: 'stone_pillars',
            nameEn: 'Concentric Octagonal Pillars',
            nameSi: 'අෂ්ටාස්‍රාකාර ගල් කණු පේළි',
            descEn: 'Tiered concentric rows of octagonal columns that once supported an intricate conical timber domed roof.',
            descSi: 'කේතුකාකාර දැව වහලක් දරා සිටි අලංකාර කැටයම් සහිත අෂ්ටාස්‍රාකාර ශිලා ස්ථම්භ.'
          },
          {
            id: 'central_stupa',
            nameEn: 'Central Relic Stupa',
            nameSi: 'මධ්‍යම ධාතු ස්තූපය',
            descEn: 'The brick-and-lime core stupa enshrining the sacred relics sheltered by the circular sanctuary.',
            descSi: 'වටදාගෙය මධ්‍යයේ පිහිටි සර්වඥ ධාතූන් වහන්සේලා නිදන් කළ පූජනීය චෛත්‍යය.'
          }
        ];

      case 'yapahuwa':
        return [
          {
            id: 'steep_stairway',
            nameEn: '65-Degree Stone Staircase',
            nameSi: 'අංශක 65ක ශෛලමය පියගැටපෙළ',
            descEn: 'Dramatic, near-vertical ornamental stairway ascending the cliff face in three grand ceremonial flights.',
            descSi: 'පර්වත බෑවුම දිගේ ඉහළට විහිදෙන ලක්දිව වාස්තු විද්‍යාවේ විස්මිතම පියගැටපෙළ.'
          },
          {
            id: 'lion_balustrades',
            nameEn: 'Guardian Lion Balustrades',
            nameSi: 'ගජසිංහ සහ සිංහ මුරගල්',
            descEn: 'Stylized stone guardian lions showing Chinese and Cambodian artistic influences of the 13th century.',
            descSi: '13 වන සියවසේ චීන සහ කාම්බෝජ කලා ආභාසය කැටිවූ විශිෂ්ට ගජසිංහ මූර්ති.'
          },
          {
            id: 'portal_entrance',
            nameEn: 'Carved Ornamental Doorway',
            nameSi: 'කැටයම් කළ ශිලා තොරණ දොරටුව',
            descEn: 'Elaborately carved stone entrance frame surmounted by a Makara Torana and celestial dancing apsaras.',
            descSi: 'මකර තොරණකින් සහ දෙවඟනන්ගේ නර්තන කැටයමින් සරසන ලද රාජකීය ශිලා ද්වාරය.'
          },
          {
            id: 'relic_chamber',
            nameEn: 'High Tooth Relic Terrace',
            nameSi: 'දළදා මාලිගා ඉහළ මළුව',
            descEn: 'The fortified platform on the crag where King Bhuvenakabahu I enshrined the Sacred Tooth Relic.',
            descSi: 'පළමුවන බුවනෙකබාහු රජු දළදා වහන්සේ ආරක්ෂිතව තැන්පත් කර තැබූ ඉහළ ශෛලමය මළුව.'
          }
        ];

      case 'temple_of_tooth':
        return [
          {
            id: 'paththirippuwa',
            nameEn: 'Octagonal Paththirippuwa',
            nameSi: 'අෂ්ටාස්‍රාකාර පත්තිරිප්පුව',
            descEn: 'Designed by royal master builder Devendra Mulachari for the King to address the assembly of the people.',
            descSi: 'දේවේන්ද්‍ර මූලාචාරී විසින් ඉදිකළ, රජු ජනතාව ඇමතූ අටපට්ටම් මණ්ඩපය.'
          },
          {
            id: 'ran_viyana',
            nameEn: 'Golden Canopy (Ran Viyana)',
            nameSi: 'රන් වියන',
            descEn: 'Gilded gold canopy constructed over the innermost relic sanctum, visible across the Kandy lake.',
            descSi: 'දන්ත ධාතූන් වහන්සේ වැඩසිටින ප්‍රධාන ගන්ධකුටිය මත ඉදිකරන ලද රන් ආලේපිත වියන.'
          },
          {
            id: 'cloud_wall',
            nameEn: 'Cloud Wall (Walakulu Bamma)',
            nameSi: 'වළාකුළු බැම්ම',
            descEn: 'Perimeter masonry featuring triangular niches for coconut oil lamps (Diyadali Pahan) during the Esala festival.',
            descSi: 'ඇසළ උත්සවයේදී පහන් දැල්වීමට ත්‍රිකෝණාකාර කුහර සහිතව ඉදිකළ සුප්‍රසිද්ධ පවුර.'
          },
          {
            id: 'inner_sanctum',
            nameEn: 'Gandhakuti Chamber',
            nameSi: 'ඇතුළු ගන්ධකුටිය',
            descEn: 'Heavily guarded sanctum housing the seven jewel-encrusted golden caskets (Karanduwa) of the Tooth Relic.',
            descSi: 'සත් රුවන් කරඬු සතක් තුළ දන්ත ධාතූන් වහන්සේ වැඩසිටින පූජනීය ඇතුළු කුටිය.'
          }
        ];

      case 'cave_temple':
        return [
          {
            id: 'rock_overhang',
            nameEn: 'Granite Cliff Overhang',
            nameSi: 'මහා පර්වත කටාරම',
            descEn: '160-meter towering monolithic rock cliff with early Brahmi drip-ledges preventing rainwater from entering.',
            descSi: 'වැසි දිය ගුහාව තුළට ගලා ඒම වළක්වන, බ්‍රාහ්මී අක්ෂර කොටන ලද පුරාණ කටාරම.'
          },
          {
            id: 'reclining_buddha',
            nameEn: '14-Meter Reclining Buddha',
            nameSi: 'මීටර් 14ක සැතපෙන බුද්ධ ප්‍රතිමාව',
            descEn: 'Colossal granite Buddha in Mahaparinirvana posture hewn from the living rock of Cave 1 (Devaraja Lena).',
            descSi: 'දෙව්රජ ලෙනේ ජීවමාන පර්වතයෙන්ම මතුකොට නෙළන ලද දැවැන්ත ශෛලමය ප්‍රතිමාව.'
          },
          {
            id: 'ceiling_frescoes',
            nameEn: '2,100 m² Ceiling Murals',
            nameSi: 'වර්ග මීටර් 2,100ක වියන් බිතුසිතුවම්',
            descEn: 'Continuous painted canvas depicting the victory of King Dutugemunu and the chronicle history of Lanka.',
            descSi: 'දුටුගැමුණු රජුගේ විජයග්‍රහණය හා ලක්දිව වංශකථා සිදුවීම් නිරූපණය වන සිවිලිම් සිතුවම්.'
          },
          {
            id: 'sacred_vessel',
            nameEn: 'Miraculous Drip Vessel',
            nameSi: 'ආශ්චර්යමත් පැන් බඳුන',
            descEn: 'Sacred brass vessel catching pure spring droplets dripping upward against the rock gradient.',
            descSi: 'ගුරුත්වාකර්ෂණයට එරෙහිව පර්වතයෙන් ඉහළට ගලා බිංදු බිංදු වැටෙන ආශ්චර්යමත් පැන් කලස.'
          }
        ];

      case 'colossal_statue':
        return [
          {
            id: 'asisa_mudra',
            nameEn: 'Asisa Mudra (Blessing Gesture)',
            nameSi: 'අසීස මුද්‍රාව',
            descEn: 'Unique posture of reassurance with the right palm angled inwards towards the compassionate face.',
            descSi: 'කරුණාව හා අභයදානය සංකේතවත් කරමින් දකුණු අත්ල මුහුණ දෙසට මඳක් හරවා ඇති අසීස මුද්‍රාව.'
          },
          {
            id: 'robe_pleats',
            nameEn: 'Parallel Robe Pleats',
            nameSi: 'සියුම් සිවුරු රැළි තාක්ෂණය',
            descEn: 'Double-grooved parallel drapery folds cascading vertically with mathematical precision.',
            descSi: 'ස්වාභාවික සළුවක රැළි වැටීම කළුගලෙහි අතිශය තාත්විකව නිරූපණය කළ ශිල්පීය වික්‍රමය.'
          },
          {
            id: 'siraspata',
            nameEn: 'Siraspata (Flame Finial)',
            nameSi: 'සිරස්පත',
            descEn: 'Flamboyant finial crowning the coiled hair curls, symbolizing the attainment of supreme enlightenment.',
            descSi: 'සම්බුදු බුද්ධත්වයේ ප්‍රඥා ප්‍රභා මණ්ඩලය සංකේතවත් කරන ගිනිසිළුව බඳු සිරස්පත.'
          },
          {
            id: 'padmasana',
            nameEn: 'Double Lotus Pedestal',
            nameSi: 'පද්මාසනය (නෙළුම් මල)',
            descEn: 'Individually sculpted double-lotus plinth supporting the entire 12-meter monolithic weight.',
            descSi: 'මීටර් 12ක දැවැන්ත ශිලා ප්‍රතිමාවේ බර දරා සිටින ද්විත්ව පද්මාසනය.'
          }
        ];

      case 'fortress_bastion':
        return [
          {
            id: 'bastion_walls',
            nameEn: 'Coral & Granite Ramparts',
            nameSi: 'කොරල් සහ කළුගල් පවුරු',
            descEn: 'Impregnable sea-facing walls built of compacted coral limestone and laterite kabok blocks.',
            descSi: 'මුහුදු රළ හා කාලතුවක්කු ප්‍රහාර වලට ඔරොත්තු දෙන පරිදි තැනූ ඝන කොරල් හා කළුගල් බැමි.'
          },
          {
            id: 'lighthouse',
            nameEn: 'Point Utrecht Lighthouse',
            nameSi: 'උට්‍රෙක්ට් ප්‍රදීපාගාරය',
            descEn: '26.5-meter historic white masonry lighthouse guiding Indian Ocean navigation since 1848.',
            descSi: 'ඉන්දීය සාගරයේ නාවික මඟ එළිය කළ උට්‍රෙක්ට් බැස්ටියනයේ පිහිටි ප්‍රදීපාගාරය.'
          },
          {
            id: 'embrasures',
            nameEn: 'Artillery Embrasures',
            nameSi: 'කාලතුවක්කු මුරකුටි',
            descEn: 'Carved firing ports designed to protect Galle harbour against rival maritime fleets.',
            descSi: 'ගාල්ල ස්වභාවික වරාය ආක්‍රමණිකයන්ගෙන් ආරක්ෂා කිරීමට සවිකළ ලන්දේසි කාලතුවක්කු.'
          }
        ];

      case 'stupa':
      default:
        return [
          {
            id: 'garbhaya',
            nameEn: 'Hemispherical Dome (Garbhaya)',
            nameSi: 'ධාතු ගර්භය (ගර්භය)',
            descEn: 'Massive brick bubble or paddy-heap shaped vault enshrining the sacred relics of the Buddha.',
            descSi: 'සර්වඥ ධාතූන් වහන්සේලා නිදන් කොට ඇති දිව්‍යමය ගර්භය.'
          },
          {
            id: 'hathares',
            nameEn: 'Square Chamber (Hathares Kotuwa)',
            nameSi: 'හතරැස් කොටුව',
            descEn: 'Cubical enclosure symbolizing the Four Noble Truths of classical Buddhist philosophy.',
            descSi: 'සිව් මහා ආර්ය සත්‍යයන් සංකේතවත් කරන හතරැස් කොටුව.'
          },
          {
            id: 'kotkaerella',
            nameEn: 'Conical Spire (Kot Kærælla)',
            nameSi: 'කොත් කැරැල්ල',
            descEn: 'Concentric stone parasol rings representing the stages of spiritual liberation and transcendence.',
            descSi: 'විමුක්ති මාර්ගයේ පියවර නිරූපණය කරන වළලු පේළි සහිත කොත් කැරැල්ල.'
          },
          {
            id: 'chudamanikya',
            nameEn: 'Pinnacle Crystal (Chudamanikya)',
            nameSi: 'චූඩා මාණික්‍යය',
            descEn: 'Pure crystal jewel absorbing and refracting the radiant golden rays of the tropical sun.',
            descSi: 'සූර්යාලෝකයෙන් බබළන අග්‍රගන්‍ය චූඩා මාණික්‍යය.'
          },
          {
            id: 'pesawalalu',
            nameEn: 'Triple Basal Terraces (Pesavalalu)',
            nameSi: 'තුන්මහල් පේසාවලලු',
            descEn: 'Three stepped circular granite platforms providing structural equilibrium and circumambulation.',
            descSi: 'ස්තූපයේ පාදමට ශක්තිය සපයන සහ ප්‍රදක්ෂිණාව සඳහා වූ තුන්මහල් පේසාවලලු.'
          }
        ];
    }
  }, [modelType]);

  // Three.js Scene Setup & Geometry Construction
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 480;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0b100d');
    scene.fog = new THREE.FogExp2('#0b100d', 0.025);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 10, 24);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    rendererRef.current = renderer;

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    // 2. Lighting Rig
    const ambientLight = new THREE.AmbientLight('#ffe5b4', 1.0);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#fff5e0', 2.4);
    sunLight.position.set(18, 30, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    const goldFill = new THREE.PointLight('#C6A15B', 1.6, 50);
    goldFill.position.set(-14, 10, -8);
    scene.add(goldFill);

    const hemiLight = new THREE.HemisphereLight('#6b9abb', '#172820', 0.6);
    scene.add(hemiLight);

    // 3. Main Model Group
    const group = new THREE.Group();
    groupRef.current = group;
    scene.add(group);

    // Universal Stone Foundation Courtyard (Salapatala Maluwa)
    const floorGeo = new THREE.CylinderGeometry(15, 15.5, 0.6, 40);
    const floorMat = new THREE.MeshStandardMaterial({
      color: '#1b231c',
      roughness: 0.85,
      metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -0.3;
    floor.receiveShadow = true;
    group.add(floor);

    // Materials Palette
    const whiteStuccoMat = new THREE.MeshStandardMaterial({ color: '#f2e8d5', roughness: 0.45, metalness: 0.05 });
    const graniteMat = new THREE.MeshStandardMaterial({ color: '#8a8579', roughness: 0.85, metalness: 0.1 });
    const goldMat = new THREE.MeshStandardMaterial({ color: '#d4af37', roughness: 0.25, metalness: 0.8 });
    const woodMat = new THREE.MeshStandardMaterial({ color: '#4a2f1d', roughness: 0.7 });
    const terracottaMat = new THREE.MeshStandardMaterial({ color: '#9c4832', roughness: 0.65 });
    const rockGneissMat = new THREE.MeshStandardMaterial({ color: '#543d32', roughness: 0.95 });

    // 4. Construct Geometry Depending on Model Type
    if (modelType === 'sigiriya') {
      // Monolithic Gneiss Rock
      const rockGeo = new THREE.CylinderGeometry(5.2, 7.5, 11, 16, 5);
      const rock = new THREE.Mesh(rockGeo, rockGneissMat);
      rock.position.y = 5.5;
      rock.castShadow = true;
      group.add(rock);

      // Palace summit plateau
      const summitGeo = new THREE.CylinderGeometry(5.3, 5.2, 0.5, 16);
      const summit = new THREE.Mesh(summitGeo, terracottaMat);
      summit.position.y = 11.2;
      group.add(summit);

      // Summit Royal Cistern (Bathing Pool)
      const poolGeo = new THREE.BoxGeometry(2.4, 0.3, 3.2);
      const poolMat = new THREE.MeshStandardMaterial({ color: '#164352', roughness: 0.2, metalness: 0.6 });
      const pool = new THREE.Mesh(poolGeo, poolMat);
      pool.position.set(0, 11.4, 0);
      group.add(pool);

      // Lion Staircase Platform (Mid-level Plateau)
      const lionTerrace = new THREE.Mesh(new THREE.BoxGeometry(4.8, 1.2, 3.4), graniteMat);
      lionTerrace.position.set(0, 4.8, 5.2);
      group.add(lionTerrace);

      // Two Sculpted Lion Claws
      const pawGeo = new THREE.BoxGeometry(1.2, 0.8, 1.8);
      const pawL = new THREE.Mesh(pawGeo, terracottaMat);
      pawL.position.set(-1.6, 5.0, 6.4);
      group.add(pawL);
      const pawR = pawL.clone();
      pawR.position.x = 1.6;
      group.add(pawR);

      // Mirror wall corridor
      const mirrorGeo = new THREE.CylinderGeometry(5.4, 5.4, 1.5, 16, 1, true, 0, Math.PI * 0.45);
      const mirrorMat = new THREE.MeshStandardMaterial({ color: '#dfbd75', roughness: 0.15, metalness: 0.5 });
      const mirrorWall = new THREE.Mesh(mirrorGeo, mirrorMat);
      mirrorWall.position.set(0, 7.5, 0);
      group.add(mirrorWall);

    } else if (modelType === 'vatadage') {
      // Circular Vatadage Outer Terrace
      const outerWall = new THREE.Mesh(new THREE.CylinderGeometry(8.5, 8.8, 1.2, 36), graniteMat);
      outerWall.position.y = 0.6;
      group.add(outerWall);

      // Inner Terrace
      const innerWall = new THREE.Mesh(new THREE.CylinderGeometry(6.2, 6.4, 1.0, 36), graniteMat);
      innerWall.position.y = 1.6;
      group.add(innerWall);

      // Concentric Octagonal Pillars
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const pillarGeo = new THREE.CylinderGeometry(0.18, 0.22, 3.8, 8);
        const pillar = new THREE.Mesh(pillarGeo, graniteMat);
        pillar.position.set(Math.cos(angle) * 7.5, 2.5, Math.sin(angle) * 7.5);
        pillar.castShadow = true;
        group.add(pillar);
      }

      // Central Relic Stupa
      const stupaDome = new THREE.Mesh(
        new THREE.SphereGeometry(3.2, 28, 18, 0, Math.PI * 2, 0, Math.PI * 0.55),
        whiteStuccoMat
      );
      stupaDome.position.y = 2.1;
      group.add(stupaDome);

      // Four Cardinal Seated Dhyana Buddhas
      for (let k = 0; k < 4; k++) {
        const theta = (k * Math.PI) / 2;
        const buddhaGroup = new THREE.Group();
        buddhaGroup.position.set(Math.cos(theta) * 4.6, 2.4, Math.sin(theta) * 4.6);
        buddhaGroup.rotation.y = -theta - Math.PI / 2;

        const torso = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.0, 0.5), goldMat);
        torso.position.y = 0.5;
        buddhaGroup.add(torso);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 10), goldMat);
        head.position.y = 1.2;
        buddhaGroup.add(head);

        group.add(buddhaGroup);
      }

    } else if (modelType === 'yapahuwa') {
      // Steep Cliff Background
      const cliff = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 7.0, 14, 12), rockGneissMat);
      cliff.position.set(0, 7, -4);
      group.add(cliff);

      // Steep Stairway Ramp (65 Degrees)
      const stairRamp = new THREE.Mesh(new THREE.BoxGeometry(3.6, 6.0, 6.5), graniteMat);
      stairRamp.position.set(0, 3.2, 1.5);
      stairRamp.rotation.x = 0.45;
      group.add(stairRamp);

      // High Ornamental Portal / Temple Terrace
      const portalTerrace = new THREE.Mesh(new THREE.BoxGeometry(6.0, 1.2, 5.0), graniteMat);
      portalTerrace.position.set(0, 6.5, -0.5);
      group.add(portalTerrace);

      // Portal Doorframe Pillars & Makara Torana
      const colL = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3.5, 0.5), graniteMat);
      colL.position.set(-1.4, 8.5, -0.5);
      group.add(colL);
      const colR = colL.clone();
      colR.position.x = 1.4;
      group.add(colR);

      const lintel = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.7, 0.7), goldMat);
      lintel.position.set(0, 10.3, -0.5);
      group.add(lintel);

      // Guardian Lions on Stairway
      const lionL = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.4, 1.0), goldMat);
      lionL.position.set(-1.8, 6.8, 0.6);
      group.add(lionL);
      const lionR = lionL.clone();
      lionR.position.x = 1.8;
      group.add(lionR);

    } else if (modelType === 'temple_of_tooth') {
      // Octagonal Paththirippuwa Pavilion
      const octGeo = new THREE.CylinderGeometry(4.2, 4.6, 3.0, 8);
      const octMesh = new THREE.Mesh(octGeo, whiteStuccoMat);
      octMesh.position.set(-3.2, 1.8, 2.0);
      group.add(octMesh);

      // Octagonal Roof
      const octRoofGeo = new THREE.ConeGeometry(5.2, 2.4, 8);
      const octRoof = new THREE.Mesh(octRoofGeo, terracottaMat);
      octRoof.position.set(-3.2, 4.4, 2.0);
      group.add(octRoof);

      // Golden Pinnacle atop Paththirippuwa
      const octPin = new THREE.Mesh(new THREE.OctahedronGeometry(0.4), goldMat);
      octPin.position.set(-3.2, 5.8, 2.0);
      group.add(octPin);

      // Inner Two-Storey Royal Palace
      const palaceMain = new THREE.Mesh(new THREE.BoxGeometry(7.0, 4.0, 6.5), whiteStuccoMat);
      palaceMain.position.set(2.0, 2.0, -1.0);
      group.add(palaceMain);

      // Terracotta Hipped Roof for Palace
      const palaceRoof = new THREE.Mesh(new THREE.BoxGeometry(7.6, 1.2, 7.1), terracottaMat);
      palaceRoof.position.set(2.0, 4.4, -1.0);
      group.add(palaceRoof);

      // Golden Canopy (Ran Viyana)
      const canopy = new THREE.Mesh(new THREE.ConeGeometry(2.4, 1.8, 4), goldMat);
      canopy.position.set(2.0, 5.8, -1.0);
      canopy.rotation.y = Math.PI / 4;
      group.add(canopy);

      // Cloud Wall (Walakulu Bamma) Along Perimeter
      const wallGeo = new THREE.TorusGeometry(12, 0.35, 6, 24, Math.PI * 0.7);
      const wall = new THREE.Mesh(wallGeo, whiteStuccoMat);
      wall.rotation.x = Math.PI / 2;
      wall.position.set(0, 0.4, 2);
      group.add(wall);

    } else if (modelType === 'cave_temple') {
      // Colossal Cliff Overhang
      const cliffOverhang = new THREE.Mesh(new THREE.BoxGeometry(16, 7, 7), rockGneissMat);
      cliffOverhang.position.set(0, 7.5, -2);
      cliffOverhang.rotation.x = 0.25;
      group.add(cliffOverhang);

      // Arched White Entrance Verandah
      const portico = new THREE.Mesh(new THREE.BoxGeometry(14, 3.5, 1.5), whiteStuccoMat);
      portico.position.set(0, 1.75, 1.5);
      group.add(portico);

      // 14-Meter Reclining Buddha Statue (Inside Cave)
      const buddhaBolster = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 8.5, 16), goldMat);
      buddhaBolster.rotation.z = Math.PI / 2;
      buddhaBolster.position.set(0, 1.2, -0.8);
      group.add(buddhaBolster);

      const head = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 12), goldMat);
      head.position.set(-4.5, 1.6, -0.8);
      group.add(head);

      // Indented Pillow
      const pillow = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.8, 1.4), terracottaMat);
      pillow.position.set(-4.5, 0.9, -0.8);
      group.add(pillow);

    } else if (modelType === 'colossal_statue') {
      // Backing Rock Monolith
      const backRock = new THREE.Mesh(new THREE.BoxGeometry(3.5, 13, 2.0), rockGneissMat);
      backRock.position.set(0, 6.5, -0.8);
      group.add(backRock);

      // Double Lotus Pedestal (Padmasana)
      const lotus = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.4, 0.8, 24), graniteMat);
      lotus.position.y = 0.4;
      group.add(lotus);

      // Standing Buddha Body (12-meter proportion)
      const body = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.5, 8.0, 16), graniteMat);
      body.position.y = 4.8;
      body.castShadow = true;
      group.add(body);

      // Head with coiled curls
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 14), graniteMat);
      head.position.y = 9.4;
      group.add(head);

      // Flame Finial (Siraspata)
      const siraspata = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.2, 8), goldMat);
      siraspata.position.y = 10.6;
      group.add(siraspata);

      // Raised Right Hand in Asisa Mudra
      const hand = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.0, 0.25), graniteMat);
      hand.position.set(1.4, 7.8, 0.4);
      group.add(hand);

    } else if (modelType === 'fortress_bastion') {
      // Coral & Granite Bastion Platform
      const bastionGeo = new THREE.CylinderGeometry(9, 10, 2.5, 5); // Angled 5-sided bastion
      const bastion = new THREE.Mesh(bastionGeo, graniteMat);
      bastion.position.y = 1.25;
      group.add(bastion);

      // Octagonal White Lighthouse Tower
      const lightTower = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.5, 8.5, 8), whiteStuccoMat);
      lightTower.position.set(-2.5, 6.5, 0);
      group.add(lightTower);

      // Lighthouse Lantern Room & Dome
      const lantern = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 1.0, 8), goldMat);
      lantern.position.set(-2.5, 11.2, 0);
      group.add(lantern);

      // Embrasures & Bronze Cannon
      const cannon = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 2.0, 8), rockGneissMat);
      cannon.rotation.x = Math.PI / 2;
      cannon.position.set(0, 2.8, 5.2);
      group.add(cannon);

      // Ocean Water Surrounding Bastion
      const ocean = new THREE.Mesh(
        new THREE.PlaneGeometry(28, 28),
        new THREE.MeshStandardMaterial({ color: '#164352', roughness: 0.1, metalness: 0.7, transparent: true, opacity: 0.8 })
      );
      ocean.rotateX(-Math.PI / 2);
      ocean.position.y = -0.05;
      group.add(ocean);

    } else {
      // Default: Classical Stupa / Dagoba (Ruwanwelisaya / Jetavanarama / Abhayagiri)
      // 1. Triple Terrace (Tun Mahal Pesavalalu)
      for (let i = 0; i < 3; i++) {
        const ringGeo = new THREE.CylinderGeometry(8.4 - i * 0.6, 9.0 - i * 0.6, 0.5, 36);
        const ring = new THREE.Mesh(ringGeo, graniteMat);
        ring.position.y = 0.25 + i * 0.5;
        ring.castShadow = true;
        group.add(ring);
      }

      // 2. Hemispherical Dome (Garbhaya / Anda)
      const domeGeo = new THREE.SphereGeometry(7.0, 36, 24, 0, Math.PI * 2, 0, Math.PI * 0.52);
      const dome = new THREE.Mesh(domeGeo, whiteStuccoMat);
      dome.position.y = 1.7;
      dome.castShadow = true;
      group.add(dome);

      // 3. Square Chamber (Hathares Kotuwa)
      const boxGeo = new THREE.BoxGeometry(3.6, 2.0, 3.6);
      const box = new THREE.Mesh(boxGeo, goldMat);
      box.position.y = 9.2;
      box.castShadow = true;
      group.add(box);

      // 4. Cylinder of the Gods (Devatha Kotuwa)
      const devGeo = new THREE.CylinderGeometry(1.6, 1.8, 1.8, 24);
      const dev = new THREE.Mesh(devGeo, graniteMat);
      dev.position.y = 11.0;
      dev.castShadow = true;
      group.add(dev);

      // 5. Conical Spire (Kot Kærælla Rings)
      const spireGeo = new THREE.ConeGeometry(1.6, 4.5, 24);
      const spire = new THREE.Mesh(spireGeo, whiteStuccoMat);
      spire.position.y = 14.1;
      spire.castShadow = true;
      group.add(spire);

      // 6. Crystal Pinnacle (Chudamanikya)
      const tipGeo = new THREE.OctahedronGeometry(0.55, 0);
      const tip = new THREE.Mesh(tipGeo, goldMat);
      tip.position.y = 16.6;
      group.add(tip);
    }

    // 5. Interaction Orbit & Touch Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !groupRef.current) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;

      groupRef.current.rotation.y += deltaX * 0.008;
      camera.position.y = Math.max(2, Math.min(24, camera.position.y - deltaY * 0.04));

      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch Support for Mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !groupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;

      groupRef.current.rotation.y += deltaX * 0.01;
      camera.position.y = Math.max(2, Math.min(24, camera.position.y - deltaY * 0.04));

      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 6. Animation Render Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (groupRef.current && autoRotate && !isDragging) {
        groupRef.current.rotation.y += 0.003; // Smooth majestic rotation
      }
      camera.lookAt(0, 5, 0);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 480;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [modelType, autoRotate]);

  // Wireframe toggle
  useEffect(() => {
    if (!groupRef.current) return;
    groupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        child.material.wireframe = isWireframe;
      }
    });
  }, [isWireframe]);

  const resetView = () => {
    if (cameraRef.current && groupRef.current) {
      cameraRef.current.position.set(0, 10, 24);
      groupRef.current.rotation.set(0, 0, 0);
    }
  };

  const zoom = (delta: number) => {
    if (cameraRef.current) {
      const newZ = Math.max(7, Math.min(36, cameraRef.current.position.z + delta));
      cameraRef.current.position.z = newZ;
    }
  };

  const toggleFullscreen = () => {
    if (!wrapperRef.current) return;
    if (!document.fullscreenElement) {
      wrapperRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full rounded-2xl overflow-hidden border border-gold-500/35 bg-[#0b100d] shadow-2xl select-none ${className}`}
    >
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="w-full h-[400px] sm:h-[480px] cursor-grab active:cursor-grabbing" />

      {/* Header Provenance Badge */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
        <div className="bg-[#111512]/90 border border-gold-500/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-xs text-gold-300 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider text-[11px]">
            {language === 'si' ? 'ත්‍රිමාණ පුරාවිද්‍යා ප්‍රතිනිර්මාණය' : 'Evidence-Based 3D Architectural Model'}
          </span>
        </div>
      </div>

      {/* Top Right Toolset: Zoom, Wireframe, Rotate, Reset, Fullscreen */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 bg-[#111512]/90 border border-gold-500/35 backdrop-blur-md p-1.5 rounded-xl shadow-2xl">
        <button
          onClick={() => zoom(-3)}
          className="p-1.5 text-stone-300 hover:text-gold-300 hover:bg-white/10 rounded-lg transition"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => zoom(3)}
          className="p-1.5 text-stone-300 hover:text-gold-300 hover:bg-white/10 rounded-lg transition"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsWireframe(!isWireframe)}
          className={`p-1.5 rounded-lg transition ${
            isWireframe ? 'bg-gold-500/25 text-gold-300 border border-gold-400' : 'text-stone-300 hover:text-gold-300 hover:bg-white/10'
          }`}
          title="Toggle Wireframe Mesh"
        >
          <Layers className="w-4 h-4" />
        </button>
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-1.5 rounded-lg transition ${
            autoRotate ? 'bg-gold-500/20 text-gold-300' : 'text-stone-400 hover:text-white hover:bg-white/10'
          }`}
          title={autoRotate ? 'Pause Auto-Rotation' : 'Resume Auto-Rotation'}
        >
          <Sparkles className="w-4 h-4" />
        </button>
        <button
          onClick={resetView}
          className="p-1.5 text-stone-300 hover:text-gold-300 hover:bg-white/10 rounded-lg transition"
          title="Reset Camera Orientation"
        >
          <RotateCw className="w-4 h-4" />
        </button>
        <button
          onClick={toggleFullscreen}
          className="p-1.5 text-stone-300 hover:text-gold-300 hover:bg-white/10 rounded-lg transition"
          title="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Bottom Bar: Interactive Architectural Hotspots */}
      <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 z-10 flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {hotspots.map((part) => (
            <button
              key={part.id}
              onClick={() => setActiveHotspot(activeHotspot === part.id ? null : part.id)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all backdrop-blur-md shadow-lg ${
                activeHotspot === part.id
                  ? 'bg-gold-500 text-obsidian-950 border-gold-400 shadow-[0_0_15px_rgba(198,161,91,0.6)] font-bold'
                  : 'bg-[#111512]/85 text-stone-300 border-gold-500/25 hover:border-gold-400 hover:text-white'
              }`}
            >
              {language === 'si' ? part.nameSi : part.nameEn}
            </button>
          ))}
        </div>

        <span className="text-[10px] text-stone-400 hidden md:block bg-[#111512]/80 px-2.5 py-1 rounded-full border border-gold-500/15 backdrop-blur-md">
          {language === 'si' ? 'කරකවන්න අදින්න • විශාලනයට ස්ක්‍රෝල් කරන්න' : 'Drag to rotate • Scroll / pinch to zoom'}
        </span>
      </div>

      {/* Floating Active Hotspot Dossier Card */}
      {activeHotspot && (
        <div className="absolute bottom-16 left-3 right-3 sm:left-4 sm:right-auto sm:max-w-md bg-[#111512]/95 border border-gold-500/50 backdrop-blur-xl p-4 rounded-2xl shadow-2xl text-xs animate-fade-in z-20">
          {hotspots
            .filter((p) => p.id === activeHotspot)
            .map((part) => (
              <div key={part.id} className="space-y-1.5">
                <div className="flex items-center justify-between text-gold-400 font-bold border-b border-gold-500/20 pb-1">
                  <span className="font-serif text-sm">{language === 'si' ? part.nameSi : part.nameEn}</span>
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest font-mono">
                    {language === 'si' ? 'වාස්තු විද්‍යාත්මක අංගය' : 'Architectural Component'}
                  </span>
                </div>
                <p className="text-parchment-200 leading-relaxed font-light">
                  {language === 'si' ? part.descSi : part.descEn}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
