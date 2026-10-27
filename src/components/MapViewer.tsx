'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
  Layers,
  Compass,
  ZoomIn,
  ZoomOut,
  Sparkles,
  MapPin,
  Eye,
  ArrowRight,
  Maximize2,
  RotateCcw,
  Navigation,
  Check,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { HistoricalSite, HistoricalPeriod, HistoricalJourney, JourneyWaypoint } from '../lib/types';
import { HISTORICAL_SITES } from '../data/sites';
import { HISTORICAL_MAP_LAYERS } from '../data/mapLayers';

// Legitimate public, high-reliability free tile styles
const MAP_STYLES = {
  obsidian: {
    name: 'Obsidian Dark',
    nameSi: 'අඳුරු සිතියම',
    style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
  },
  parchment: {
    name: 'Antique Parchment',
    nameSi: 'පුරාණ පුස්කොළ සිතියම',
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json'
  },
  satellite: {
    name: 'Satellite Terrain',
    nameSi: 'භූමි දර්ශන සිතියම',
    style: {
      version: 8,
      sources: {
        'esri-imagery': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256,
          attribution: 'Tiles &copy; Esri, Maxar, Earthstar Geographics'
        }
      },
      layers: [
        {
          id: 'esri-imagery-layer',
          type: 'raster',
          source: 'esri-imagery',
          minzoom: 0,
          maxzoom: 19
        }
      ]
    }
  }
};

interface MapViewerProps {
  selectedPeriod?: HistoricalPeriod;
  onSelectSite?: (site: HistoricalSite) => void;
  selectedSiteId?: string;
  className?: string;
  initialCenter?: [number, number]; // [lat, lng]
  initialZoom?: number;
  initialPitch?: number;
  initialBearing?: number;
  activeJourney?: HistoricalJourney | null;
  activeWaypointIndex?: number;
  onSelectWaypoint?: (index: number) => void;
  filterCategory?: string;
  searchQuery?: string;
  isCinematicOrbit?: boolean;
  onToggleCinematicOrbit?: () => void;
  onResetIslandView?: () => void;
}

export default function MapViewer({
  selectedPeriod,
  onSelectSite,
  selectedSiteId,
  className = '',
  initialCenter = [7.8731, 80.7718], // Geographic center of Sri Lanka
  initialZoom = 7.5,
  initialPitch = 35,
  initialBearing = 0,
  activeJourney = null,
  activeWaypointIndex = 0,
  onSelectWaypoint,
  filterCategory = 'all',
  searchQuery = '',
  isCinematicOrbit = false,
  onToggleCinematicOrbit,
  onResetIslandView
}: MapViewerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);
  const journeyMarkersRef = useRef<maplibregl.Marker[]>([]);
  const { language, t } = useLanguage();

  const [currentStyleKey, setCurrentStyleKey] = useState<keyof typeof MAP_STYLES>('obsidian');
  const [activeLayers, setActiveLayers] = useState<Record<string, boolean>>({
    'layer-kingdom-anuradhapura': true,
    'layer-ancient-irrigation': true,
    'layer-historical-trade-routes': true,
    'layer-colonial-forts': false,
  });
  const [showLayerMenu, setShowLayerMenu] = useState(false);
  const [pitchValue, setPitchValue] = useState(initialPitch);
  const [bearingValue, setBearingValue] = useState(initialBearing);

  // Filter sites according to category and search query (all sites across Sri Lanka remain discoverable)
  const filteredSites = useMemo(() => {
    return HISTORICAL_SITES.filter(site => {
      // Category filter
      if (filterCategory !== 'all' && site.category !== filterCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesEn = site.name.en.toLowerCase().includes(query);
        const matchesSi = site.name.si.includes(query);
        const matchesCat = site.category.toLowerCase().includes(query);
        if (!matchesEn && !matchesSi && !matchesCat) return false;
      }
      return true;
    });
  }, [filterCategory, searchQuery]);

  // Synchronize GeoJSON historical layers dynamically with selected period
  useEffect(() => {
    if (!selectedPeriod) return;

    setActiveLayers(prev => {
      const next = { ...prev };
      if (selectedPeriod.id === 'anuradhapura') {
        next['layer-kingdom-anuradhapura'] = true;
        next['layer-kingdom-polonnaruwa'] = false;
        next['layer-ancient-irrigation'] = true;
        next['layer-historical-trade-routes'] = true;
        next['layer-colonial-forts'] = false;
      } else if (selectedPeriod.id === 'polonnaruwa') {
        next['layer-kingdom-anuradhapura'] = false;
        next['layer-kingdom-polonnaruwa'] = true;
        next['layer-ancient-irrigation'] = true;
        next['layer-historical-trade-routes'] = true;
        next['layer-colonial-forts'] = false;
      } else if (selectedPeriod.id === 'colonial-maritime' || selectedPeriod.id === 'british-colonial') {
        next['layer-kingdom-anuradhapura'] = false;
        next['layer-kingdom-polonnaruwa'] = false;
        next['layer-ancient-irrigation'] = false;
        next['layer-historical-trade-routes'] = false;
        next['layer-colonial-forts'] = true;
      } else {
        next['layer-kingdom-anuradhapura'] = false;
        next['layer-kingdom-polonnaruwa'] = false;
        next['layer-colonial-forts'] = selectedPeriod.id === 'kandyan' || selectedPeriod.id === 'kotte';
        next['layer-ancient-irrigation'] = true;
        next['layer-historical-trade-routes'] = true;
      }
      return next;
    });
  }, [selectedPeriod]);

  // Initialize MapLibre GL
  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: MAP_STYLES[currentStyleKey].style as string | maplibregl.StyleSpecification,
      center: [initialCenter[1], initialCenter[0]], // MapLibre takes [lng, lat]
      zoom: initialZoom,
      pitch: initialPitch,
      bearing: initialBearing,
      maxBounds: [
        [77.5, 4.5], // Southwest bounds around Sri Lanka
        [83.8, 11.2]  // Northeast bounds
      ]
    });

    mapRef.current = map;

    map.on('pitch', () => {
      setPitchValue(Math.round(map.getPitch()));
    });

    map.on('rotate', () => {
      setBearingValue(Math.round(map.getBearing()));
    });

    map.on('load', () => {
      loadGeoJsonLayers(map);
      updateJourneyRoute(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  // Update map style when changed
  const handleStyleChange = (styleKey: keyof typeof MAP_STYLES) => {
    setCurrentStyleKey(styleKey);
    if (!mapRef.current) return;
    mapRef.current.setStyle(MAP_STYLES[styleKey].style as string | maplibregl.StyleSpecification);
    mapRef.current.once('style.load', () => {
      if (mapRef.current) {
        loadGeoJsonLayers(mapRef.current);
        updateJourneyRoute(mapRef.current);
      }
    });
  };

  // Add GeoJSON Layers for ancient canals, kingdom zones, and routes
  const loadGeoJsonLayers = (map: maplibregl.Map) => {
    HISTORICAL_MAP_LAYERS.forEach(layerConfig => {
      const sourceId = `source-${layerConfig.id}`;

      if (!map.getSource(sourceId)) {
        map.addSource(sourceId, {
          type: 'geojson',
          data: layerConfig.features
        });
      }

      // Polygons (Kingdom Realms)
      if (!map.getLayer(`poly-${layerConfig.id}`)) {
        map.addLayer({
          id: `poly-${layerConfig.id}`,
          type: 'fill',
          source: sourceId,
          filter: ['==', '$type', 'Polygon'],
          paint: {
            'fill-color': layerConfig.color,
            'fill-opacity': activeLayers[layerConfig.id] ? 0.22 : 0,
            'fill-outline-color': layerConfig.color
          }
        });
      }

      // Lines (e.g., Jaya Ganga, trade routes)
      if (!map.getLayer(`line-${layerConfig.id}`)) {
        map.addLayer({
          id: `line-${layerConfig.id}`,
          type: 'line',
          source: sourceId,
          filter: ['==', '$type', 'LineString'],
          paint: {
            'line-color': layerConfig.color,
            'line-width': 3,
            'line-opacity': activeLayers[layerConfig.id] ? 0.85 : 0,
            'line-dasharray': layerConfig.category === 'routes' ? [2, 2] : [1]
          }
        });
      }

      // Points (e.g., coastal fortresses)
      if (!map.getLayer(`point-${layerConfig.id}`)) {
        map.addLayer({
          id: `point-${layerConfig.id}`,
          type: 'circle',
          source: sourceId,
          filter: ['==', '$type', 'Point'],
          paint: {
            'circle-color': layerConfig.color,
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff',
            'circle-opacity': activeLayers[layerConfig.id] ? 0.9 : 0,
            'circle-stroke-opacity': activeLayers[layerConfig.id] ? 0.9 : 0
          }
        });
      }
    });
  };

  // Sync active layers visibility with map
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.isStyleLoaded()) return;

    HISTORICAL_MAP_LAYERS.forEach(layerConfig => {
      const isVisible = !!activeLayers[layerConfig.id];

      if (map.getLayer(`poly-${layerConfig.id}`)) {
        map.setPaintProperty(`poly-${layerConfig.id}`, 'fill-opacity', isVisible ? 0.22 : 0);
      }
      if (map.getLayer(`line-${layerConfig.id}`)) {
        map.setPaintProperty(`line-${layerConfig.id}`, 'line-opacity', isVisible ? 0.85 : 0);
      }
      if (map.getLayer(`point-${layerConfig.id}`)) {
        map.setPaintProperty(`point-${layerConfig.id}`, 'circle-opacity', isVisible ? 0.9 : 0);
        map.setPaintProperty(`point-${layerConfig.id}`, 'circle-stroke-opacity', isVisible ? 0.9 : 0);
      }
    });
  }, [activeLayers]);

  // Update Journey Route Layer & Line
  const updateJourneyRoute = useCallback((map: maplibregl.Map) => {
    const sourceId = 'source-active-journey-route';
    const layerId = 'line-active-journey-route';
    const glowLayerId = 'glow-active-journey-route';

    if (!activeJourney || activeJourney.waypoints.length < 2) {
      if (map.getLayer(glowLayerId)) map.removeLayer(glowLayerId);
      if (map.getLayer(layerId)) map.removeLayer(layerId);
      if (map.getSource(sourceId)) map.removeSource(sourceId);
      return;
    }

    const routeCoordinates = activeJourney.waypoints.map(w => [w.coordinates[1], w.coordinates[0]]);
    const geojsonData: GeoJSON.Feature<GeoJSON.LineString> = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: routeCoordinates
      }
    };

    if (map.getSource(sourceId)) {
      (map.getSource(sourceId) as maplibregl.GeoJSONSource).setData(geojsonData);
    } else {
      map.addSource(sourceId, {
        type: 'geojson',
        data: geojsonData
      });

      // Outer glow line
      map.addLayer({
        id: glowLayerId,
        type: 'line',
        source: sourceId,
        paint: {
          'line-color': '#C6A15B',
          'line-width': 8,
          'line-opacity': 0.35,
          'line-blur': 4
        }
      });

      // Core sharp golden line
      map.addLayer({
        id: layerId,
        type: 'line',
        source: sourceId,
        paint: {
          'line-color': '#F2E8D5',
          'line-width': 3,
          'line-opacity': 0.95,
          'line-dasharray': [2, 1]
        }
      });
    }
  }, [activeJourney]);

  useEffect(() => {
    const map = mapRef.current;
    if (map && map.isStyleLoaded()) {
      updateJourneyRoute(map);
    }
  }, [activeJourney, updateJourneyRoute]);

  // Handle Journey Waypoint Fly-to & Markers
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear old journey markers
    journeyMarkersRef.current.forEach(m => m.remove());
    journeyMarkersRef.current = [];

    if (!activeJourney) return;

    // Add journey waypoint pins
    activeJourney.waypoints.forEach((wp, idx) => {
      const isCurrent = idx === activeWaypointIndex;
      const el = document.createElement('div');
      el.className = 'cursor-pointer relative transition-transform duration-300';
      el.innerHTML = `
        <div class="flex items-center justify-center w-8 h-8 rounded-full border-2 ${
          isCurrent
            ? 'bg-gold-500 border-parchment-100 text-obsidian-950 font-black scale-125 shadow-[0_0_20px_rgba(242,196,109,0.9)] ring-4 ring-gold-400/40'
            : 'bg-obsidian-950/90 border-gold-500/60 text-gold-400 font-bold hover:scale-110 hover:border-gold-300'
        } text-xs shadow-xl">
          ${idx + 1}
        </div>
      `;

      el.addEventListener('click', () => {
        if (onSelectWaypoint) onSelectWaypoint(idx);
      });

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([wp.coordinates[1], wp.coordinates[0]])
        .addTo(map);

      journeyMarkersRef.current.push(marker);
    });

    // Fly camera smoothly to current waypoint
    const currentWp = activeJourney.waypoints[activeWaypointIndex];
    if (currentWp) {
      map.flyTo({
        center: [currentWp.coordinates[1], currentWp.coordinates[0]],
        zoom: currentWp.zoom || 14.5,
        pitch: currentWp.cameraPitch || 50,
        bearing: currentWp.cameraBearing || 0,
        speed: 0.8,
        curve: 1.42,
        essential: true
      });
    }
  }, [activeJourney, activeWaypointIndex, onSelectWaypoint]);

  // Update Markers when filtered sites change (when NOT in journey mode)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear old site markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    // If journey mode is active, site markers can be subtle or hidden
    if (activeJourney) return;

    // Render site markers across all regions of Sri Lanka
    filteredSites.forEach(site => {
      const isSelected = site.id === selectedSiteId;
      const isPeriodMatch = !selectedPeriod || selectedPeriod.id === 'all' || site.periodIds.includes(selectedPeriod.id);

      // Color coding based on category
      let badgeColor = 'bg-gold-500 text-obsidian-950';
      let ringColor = 'ring-gold-400/50';
      if (site.category === 'fortress' || site.category === 'colonial_fort') {
        badgeColor = 'bg-[#754238] text-parchment-100'; // Deep Earth Red
        ringColor = 'ring-red-400/50';
      } else if (site.category === 'hydraulic_reservoir') {
        badgeColor = 'bg-[#1b4d63] text-parchment-100'; // Water Blue
        ringColor = 'ring-cyan-400/50';
      } else if (site.category === 'monastery') {
        badgeColor = 'bg-[#172820] text-gold-300'; // Forest Green
        ringColor = 'ring-emerald-400/50';
      }

      // Custom HTML Marker element
      const el = document.createElement('div');
      el.className = `group cursor-pointer relative ${isPeriodMatch ? 'z-20' : 'z-10'}`;

      const pin = document.createElement('div');
      if (isPeriodMatch) {
        pin.className = `w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${
          isSelected
            ? `${badgeColor} scale-125 ring-4 ${ringColor} z-30 shadow-[0_0_20px_rgba(198,161,91,0.9)]`
            : `${badgeColor} border-2 border-white/70 hover:scale-120 hover:border-white hover:text-white shadow-md`
        }`;
      } else {
        pin.className = `w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 bg-[#111512]/90 border border-gold-500/40 text-stone-400 hover:scale-120 hover:text-gold-300 hover:border-gold-300 hover:bg-[#111512] shadow-sm opacity-85 hover:opacity-100 ${
          isSelected ? 'ring-2 ring-gold-400 scale-115 text-gold-300 opacity-100' : ''
        }`;
      }

      pin.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${isPeriodMatch ? 13 : 11}" height="${isPeriodMatch ? 13 : 11}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      `;

      // Hover Tooltip
      const tooltip = document.createElement('div');
      tooltip.className = 'absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#111512]/95 border border-gold-500/40 text-parchment-100 text-[11px] font-medium px-2.5 py-1 rounded-md shadow-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 flex items-center gap-1.5';
      const periodBadge = isPeriodMatch && selectedPeriod && selectedPeriod.id !== 'all'
        ? `<span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>`
        : '';
      tooltip.innerHTML = `${periodBadge}<span>${language === 'si' ? site.name.si : site.name.en}</span>`;

      el.appendChild(tooltip);
      el.appendChild(pin);

      el.addEventListener('click', () => {
        if (onSelectSite) onSelectSite(site);
        const targetZoom = site.mapCamera?.zoom || 15.2;
        const targetPitch = site.mapCamera?.pitch || 55;
        const targetBearing = site.mapCamera?.bearing || 0;

        map.flyTo({
          center: [site.coordinates[1], site.coordinates[0]],
          zoom: targetZoom,
          pitch: targetPitch,
          bearing: targetBearing,
          speed: 0.85,
          curve: 1.42,
          essential: true
        });
      });

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([site.coordinates[1], site.coordinates[0]])
        .addTo(map);

      markersRef.current.push(marker);
    });
  }, [filteredSites, selectedSiteId, language, onSelectSite, activeJourney, selectedPeriod]);

  // Handle external selected site changes (fly camera to bespoke site camera)
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedSiteId || activeJourney) return;

    const site = HISTORICAL_SITES.find(s => s.id === selectedSiteId);
    if (!site) return;

    const targetZoom = site.mapCamera?.zoom || 15.2;
    const targetPitch = site.mapCamera?.pitch || 55;
    const targetBearing = site.mapCamera?.bearing || 0;

    map.flyTo({
      center: [site.coordinates[1], site.coordinates[0]],
      zoom: targetZoom,
      pitch: targetPitch,
      bearing: targetBearing,
      speed: 0.85,
      curve: 1.42,
      essential: true
    });
  }, [selectedSiteId, activeJourney]);

  // Handle Cinematic 3D Orbiting around selected site
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isCinematicOrbit || !selectedSiteId) return;

    let reqId: number;
    const orbit = () => {
      if (!mapRef.current) return;
      const currentBearing = mapRef.current.getBearing();
      mapRef.current.setBearing((currentBearing + 0.15) % 360);
      reqId = requestAnimationFrame(orbit);
    };
    reqId = requestAnimationFrame(orbit);

    return () => cancelAnimationFrame(reqId);
  }, [isCinematicOrbit, selectedSiteId]);

  // 3D Tilt toggle
  const toggle3DTilt = () => {
    if (!mapRef.current) return;
    const targetPitch = pitchValue > 20 ? 0 : 55;
    mapRef.current.easeTo({ pitch: targetPitch, duration: 900 });
  };

  // Reset North & Bearing
  const resetNorth = () => {
    if (!mapRef.current) return;
    mapRef.current.easeTo({ bearing: 0, pitch: 0, duration: 800 });
  };

  const zoomIn = () => mapRef.current?.zoomIn({ duration: 400 });
  const zoomOut = () => mapRef.current?.zoomOut({ duration: 400 });

  const resetIslandView = () => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: [80.7718, 7.8731],
      zoom: 7.4,
      pitch: 0,
      bearing: 0,
      duration: 1800,
      essential: true
    });
    if (onResetIslandView) onResetIslandView();
  };

  const toggleLayer = (layerId: string) => {
    setActiveLayers(prev => ({ ...prev, [layerId]: !prev[layerId] }));
  };

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#111512] ${className}`}>
      
      {/* Map Canvas */}
      <div ref={mapContainerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Left: Style Selector & 3D Perspective Badge */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
        <div className="bg-[#111512]/90 border border-gold-500/30 backdrop-blur-md p-1 rounded-xl flex items-center gap-1 shadow-2xl">
          {(Object.keys(MAP_STYLES) as (keyof typeof MAP_STYLES)[]).map((key) => (
            <button
              key={key}
              onClick={() => handleStyleChange(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentStyleKey === key
                  ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 font-bold shadow-md'
                  : 'text-stone-300 hover:text-gold-300 hover:bg-white/5'
              }`}
            >
              {language === 'si' ? MAP_STYLES[key].nameSi : MAP_STYLES[key].name}
            </button>
          ))}
        </div>

        {/* 3D Tilt Badge */}
        <button
          onClick={toggle3DTilt}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md border transition-all flex items-center gap-1.5 shadow-xl ${
            pitchValue > 20
              ? 'bg-gold-500 text-obsidian-950 border-gold-400 font-bold shadow-[0_0_15px_rgba(198,161,91,0.5)]'
              : 'bg-[#111512]/90 text-stone-300 border-gold-500/30 hover:border-gold-400 hover:text-white'
          }`}
          title="Toggle 3D Cinematic Perspective"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{pitchValue > 20 ? `3D: ${pitchValue}°` : '2D Map'}</span>
        </button>
      </div>

      {/* Top Right: Layer Manager & Camera Navigation Tools */}
      <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
        
        {/* Layer Manager Modal Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowLayerMenu(!showLayerMenu)}
            className={`p-2.5 rounded-xl border backdrop-blur-md transition-all flex items-center gap-2 shadow-2xl ${
              showLayerMenu
                ? 'bg-gold-500 text-obsidian-950 border-gold-400 font-bold'
                : 'bg-[#111512]/90 text-gold-400 border-gold-500/30 hover:border-gold-400 hover:text-white'
            }`}
            title="Historical Layers & Overlays"
          >
            <Layers className="w-4 h-4" />
            <span className="text-xs font-semibold hidden sm:inline">
              {language === 'si' ? 'ස්ථර පාලකය' : 'Layers'}
            </span>
          </button>

          {/* Layer Menu Dropdown */}
          {showLayerMenu && (
            <div className="absolute right-0 top-12 w-80 bg-[#111512]/95 border border-gold-500/40 rounded-2xl shadow-2xl p-4 backdrop-blur-xl z-50 animate-fade-in text-parchment-100">
              <div className="flex items-center justify-between pb-2 border-b border-gold-500/20 mb-3">
                <span className="text-xs font-mono font-bold tracking-widest text-gold-400 uppercase">
                  {language === 'si' ? 'ඓතිහාසික සිතියම් ස්ථර' : 'Historical Cartography Layers'}
                </span>
                <button
                  onClick={() => setShowLayerMenu(false)}
                  className="text-stone-400 hover:text-white text-xs px-1.5 py-0.5 rounded hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2.5 text-xs max-h-72 overflow-y-auto pr-1">
                {HISTORICAL_MAP_LAYERS.map(layer => (
                  <label
                    key={layer.id}
                    className="flex items-start gap-2.5 p-2 rounded-xl bg-black/40 hover:bg-black/60 cursor-pointer border border-gold-500/10 hover:border-gold-500/30 transition"
                  >
                    <input
                      type="checkbox"
                      checked={!!activeLayers[layer.id]}
                      onChange={() => toggleLayer(layer.id)}
                      className="mt-0.5 rounded border-gold-500 text-gold-500 focus:ring-gold-400 accent-gold-500 cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 font-medium text-parchment-200">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block shrink-0 shadow"
                          style={{ backgroundColor: layer.color }}
                        />
                        <span>{language === 'si' ? layer.name.si : layer.name.en}</span>
                      </div>
                      <p className="text-[10px] text-stone-400 mt-1 italic leading-tight">
                        {language === 'si' ? layer.uncertaintyDisclaimer.si : layer.uncertaintyDisclaimer.en}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-3 pt-2 border-t border-gold-500/15 flex items-center gap-1.5 text-[10px] text-gold-400/80">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{language === 'si' ? 'දේශසීමා සෙල්ලිපි හා සාධක මත ආසන්නව දක්වා ඇත.' : 'Boundaries reflect scholarly approximations.'}</span>
              </div>
            </div>
          )}
        </div>

        {/* Camera Navigation Widget */}
        <div className="bg-[#111512]/90 border border-gold-500/30 backdrop-blur-md rounded-xl p-1 flex flex-col items-center gap-1 shadow-2xl">
          {/* Reset Full Island View */}
          <button
            onClick={resetIslandView}
            className="p-2 text-stone-300 hover:text-gold-400 hover:bg-white/5 rounded-lg transition"
            title="Reset to Full Sri Lanka Map View"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Cinematic 3D Orbit Flyover (when site is selected) */}
          {selectedSiteId && onToggleCinematicOrbit && (
            <button
              onClick={onToggleCinematicOrbit}
              className={`p-2 rounded-lg transition ${
                isCinematicOrbit
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow-[0_0_12px_rgba(198,161,91,0.6)]'
                  : 'text-stone-300 hover:text-gold-400 hover:bg-white/5'
              }`}
              title={isCinematicOrbit ? 'Stop 3D Orbit Flyover' : 'Start 3D Orbit Flyover around Site'}
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}

          {/* Compass / Reset Bearing */}
          <button
            onClick={resetNorth}
            className="p-2 text-stone-300 hover:text-gold-400 rounded-lg hover:bg-white/5 transition"
            title="Reset North orientation"
          >
            <Compass
              className="w-4 h-4 transition-transform duration-300"
              style={{ transform: `rotate(${-bearingValue}deg)` }}
            />
          </button>

          {/* Zoom In */}
          <button
            onClick={zoomIn}
            className="p-2 text-stone-300 hover:text-gold-400 rounded-lg hover:bg-white/5 transition"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={zoomOut}
            className="p-2 text-stone-300 hover:text-gold-400 rounded-lg hover:bg-white/5 transition"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Center: Coordinates & Cartographic Scale info */}
      <div className="absolute bottom-2 left-4 z-10 hidden sm:flex items-center gap-3 text-[10px] font-mono text-stone-400 bg-[#111512]/80 px-3 py-1 rounded-full border border-gold-500/15 backdrop-blur-md">
        <span>SRI LANKA (CEYLON)</span>
        <span>•</span>
        <span>DATUM: WGS 84</span>
        <span>•</span>
        <span>PITCH: {pitchValue}°</span>
        <span>•</span>
        <span>BEARING: {bearingValue}°</span>
        <span>•</span>
        <span className="text-gold-400 font-sans font-semibold">Knexa System (Krishan Prageeth)</span>
      </div>

    </div>
  );
}
