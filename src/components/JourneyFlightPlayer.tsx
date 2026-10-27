'use client';

import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Play, Pause, ChevronLeft, ChevronRight, RotateCcw, Volume2, Compass, Feather, MapPin, Sparkles, Navigation } from 'lucide-react';
import { HistoricalJourney, JourneyWaypoint } from '../lib/types';
import { useLanguage } from './LanguageContext';
import AudioAmbience from './AudioAmbience';

interface JourneyFlightPlayerProps {
  journey: HistoricalJourney;
  onExit?: () => void;
}

export default function JourneyFlightPlayer({ journey, onExit }: JourneyFlightPlayerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);
  const { language, t } = useLanguage();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const activeWaypoint: JourneyWaypoint = journey.waypoints[currentStepIndex] || journey.waypoints[0];

  // Initialize MapLibre GL for the 3D Flight
  useEffect(() => {
    if (!mapContainerRef.current) return;

    const initial = journey.waypoints[0];
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: [initial.coordinates[1], initial.coordinates[0]],
      zoom: initial.zoom,
      pitch: initial.cameraPitch,
      bearing: initial.cameraBearing
    });

    mapRef.current = map;

    map.on('load', () => {
      setMapLoaded(true);

      // Add whole flight trajectory as a glowing golden LineString
      const lineCoordinates = journey.waypoints.map(w => [w.coordinates[1], w.coordinates[0]]);

      map.addSource('flight-path', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: lineCoordinates
          }
        }
      });

      // Outer glow
      map.addLayer({
        id: 'flight-path-glow',
        type: 'line',
        source: 'flight-path',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: {
          'line-color': '#dfbd75',
          'line-width': 8,
          'line-opacity': 0.35,
          'line-blur': 4
        }
      });

      // Inner golden line
      map.addLayer({
        id: 'flight-path-core',
        type: 'line',
        source: 'flight-path',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: {
          'line-color': '#c6a15b',
          'line-width': 3,
          'line-opacity': 0.95,
          'line-dasharray': [2, 1]
        }
      });

      // Add waypoint markers
      journey.waypoints.forEach((wp, idx) => {
        const el = document.createElement('div');
        el.className = 'cursor-pointer';
        el.innerHTML = `
          <div class="w-8 h-8 rounded-full bg-obsidian-950/90 border-2 border-gold-400 text-gold-300 font-bold text-xs flex items-center justify-center shadow-2xl hover:scale-125 transition-transform">
            ${idx + 1}
          </div>
        `;
        el.addEventListener('click', () => {
          setCurrentStepIndex(idx);
        });

        new maplibregl.Marker({ element: el })
          .setLngLat([wp.coordinates[1], wp.coordinates[0]])
          .addTo(map);
      });
    });

    return () => {
      map.remove();
    };
  }, [journey]);

  // Cinematic 3D Camera Fly-To when active waypoint changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;

    map.flyTo({
      center: [activeWaypoint.coordinates[1], activeWaypoint.coordinates[0]],
      zoom: activeWaypoint.zoom,
      pitch: activeWaypoint.cameraPitch,
      bearing: activeWaypoint.cameraBearing,
      speed: 0.65, // Elegant cinematic smooth curve
      curve: 1.42,
      essential: true
    });
  }, [currentStepIndex, activeWaypoint, mapLoaded]);

  // Autoplay timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex(prev => {
          if (prev < journey.waypoints.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 9500); // 9.5s per stop allowing time to read verses and admire 3D terrain
    }
    return () => clearInterval(timer);
  }, [isPlaying, journey.waypoints.length]);

  const handleNext = () => {
    if (currentStepIndex < journey.waypoints.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full h-screen bg-obsidian-950 overflow-hidden select-none">
      {/* Fullscreen 3D Map Viewport */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Top Header Bar */}
      <div className="absolute top-4 left-4 right-4 z-30 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="flex items-center gap-3 bg-obsidian-950/90 border border-gold-500/40 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-2xl pointer-events-auto">
          <div className="w-9 h-9 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400">
            <Feather className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">
                {language === 'si' ? 'ත්‍රිමාණ ගවේෂණ චාරිකාව' : '3D Journey Flight'}
              </span>
              <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded font-mono">
                {t(journey.dateDisplay)}
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-serif font-bold text-parchment-100">
              {t(journey.title)}
            </h2>
          </div>
        </div>

        {/* Ambient Soundscape & Exit Controls */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <AudioAmbience theme={journey.audioTrackTheme} />
          {onExit && (
            <button
              onClick={onExit}
              className="bg-obsidian-950/90 hover:bg-obsidian-900 border border-stone-700 text-stone-300 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md transition-colors"
            >
              {language === 'si' ? 'සංචාරයෙන් ඉවත් වන්න' : 'Exit Journey'}
            </button>
          )}
        </div>
      </div>

      {/* Bottom Main Waypoint Card (Salalihini Stanza & Historical Context) */}
      <div className="absolute bottom-6 left-4 right-4 md:left-8 md:right-auto md:max-w-xl z-30 pointer-events-auto">
        <div className="bg-obsidian-950/95 border border-gold-500/40 backdrop-blur-2xl p-5 md:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-4">
          
          {/* Milestone Step Header */}
          <div className="flex items-center justify-between border-b border-gold-500/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-gold-500 text-obsidian-950 text-xs font-bold font-mono">
                {currentStepIndex + 1} / {journey.waypoints.length}
              </span>
              <span className="text-xs text-stone-400 flex items-center gap-1 font-mono">
                <Navigation className="w-3 h-3 text-gold-400" />
                Alt: {activeWaypoint.altitudeMeters}m • Pitch: {activeWaypoint.cameraPitch}°
              </span>
            </div>

            {/* Playback Buttons */}
            <div className="flex items-center gap-1 bg-obsidian-900 p-1 rounded-xl border border-stone-800">
              <button
                onClick={handlePrev}
                disabled={currentStepIndex === 0}
                className="p-1.5 text-stone-400 hover:text-gold-400 disabled:opacity-30 transition-colors"
                title="Previous Stop"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1 bg-gold-500 text-obsidian-950 font-bold rounded-lg flex items-center gap-1 text-xs hover:bg-gold-400 transition-all shadow"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlaying ? 'Pause' : 'Autoplay'}</span>
              </button>

              <button
                onClick={handleNext}
                disabled={currentStepIndex === journey.waypoints.length - 1}
                className="p-1.5 text-stone-400 hover:text-gold-400 disabled:opacity-30 transition-colors"
                title="Next Stop"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="p-1.5 text-stone-400 hover:text-stone-200 transition-colors"
                title="Restart Flight"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-serif font-bold text-gold-300">
            {t(activeWaypoint.title)}
          </h3>

          {/* Sinhala Classical Stanza (If Available e.g. Salalihini Sandeshaya) */}
          {activeWaypoint.sinhalaStanza && (
            <div className="p-3.5 rounded-xl bg-forest-900/40 border border-gold-500/30 text-parchment-100 font-serif leading-relaxed text-xs sm:text-sm whitespace-pre-line text-center italic shadow-inner">
              "{activeWaypoint.sinhalaStanza}"
              {activeWaypoint.stanzaMeaning && (
                <p className="mt-2 text-xs text-stone-300 not-italic border-t border-gold-500/20 pt-2 font-sans text-left">
                  {t(activeWaypoint.stanzaMeaning)}
                </p>
              )}
            </div>
          )}

          {/* Waypoint Narrative */}
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
            {t(activeWaypoint.narrative)}
          </p>

          {/* Highlights & Archaeological Evidence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-stone-800 text-[11px]">
            <div className="bg-obsidian-900/60 p-2 rounded-lg border border-stone-800">
              <span className="text-gold-400 font-semibold block mb-0.5">
                {language === 'si' ? 'ඓතිහාසික පසුබිම' : 'Historical Context'}
              </span>
              <span className="text-stone-300 leading-tight block">
                {t(activeWaypoint.historicalContext)}
              </span>
            </div>
            <div className="bg-obsidian-900/60 p-2 rounded-lg border border-stone-800">
              <span className="text-emerald-400 font-semibold block mb-0.5">
                {language === 'si' ? 'පුරාවිද්‍යාත්මක සාධක' : 'Archaeological Evidence'}
              </span>
              <span className="text-stone-300 leading-tight block">
                {t(activeWaypoint.archaeologicalHighlight)}
              </span>
            </div>
          </div>

          {/* Ruler Association Tag */}
          {activeWaypoint.rulerAssociation && (
            <div className="text-[11px] text-stone-400 flex items-center justify-between">
              <span>{language === 'si' ? 'සම්බන්ධිත රජවරුන්:' : 'Associated Monarch:'}</span>
              <span className="text-gold-400 font-medium">{t(activeWaypoint.rulerAssociation)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Floating Right Waypoint Navigator Pills */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-20">
        {journey.waypoints.map((wp, idx) => (
          <button
            key={wp.id}
            onClick={() => setCurrentStepIndex(idx)}
            className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs transition-all backdrop-blur-md ${
              idx === currentStepIndex
                ? 'bg-gold-500 text-obsidian-950 font-bold shadow-lg scale-105'
                : 'bg-obsidian-950/80 text-stone-400 border border-stone-800 hover:text-stone-200 hover:border-gold-500/40'
            }`}
          >
            <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] bg-obsidian-900 text-gold-400">
              {idx + 1}
            </span>
            <span className="truncate max-w-[150px]">
              {language === 'si' ? wp.title.si.split(':')[1] || wp.title.si : wp.title.en.split(':')[1] || wp.title.en}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
