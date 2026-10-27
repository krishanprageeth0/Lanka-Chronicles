'use client';

import React, { useState, useEffect, Suspense, useMemo, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import MapViewer from '@/components/MapViewer';
import TimelineSlider from '@/components/TimelineSlider';
import Monument3DViewer from '@/components/Monument3DViewer';
import PastPresentSlider from '@/components/PastPresentSlider';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_PERIODS } from '@/data/periods';
import { HISTORICAL_SITES } from '@/data/sites';
import { HISTORICAL_JOURNEYS } from '@/data/journeys';
import { HistoricalSite, HistoricalPeriod, HistoricalJourney } from '@/lib/types';
import {
  X,
  Sparkles,
  MapPin,
  Landmark,
  ArrowRight,
  BookOpen,
  Layers,
  Split,
  Compass,
  Search,
  Filter,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Volume2,
  VolumeX,
  Navigation,
  Info,
  Maximize2,
  Feather,
  ShieldAlert,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', labelEn: 'All Sites', labelSi: 'සියලු ස්ථාන' },
  { id: 'religious_shrine', labelEn: 'Stupas & Shrines', labelSi: 'ස්තූප සහ පුදබිම්' },
  { id: 'fortress', labelEn: 'Fortresses & Citadels', labelSi: 'බලකොටු සහ රාජධානි' },
  { id: 'hydraulic_reservoir', labelEn: 'Ancient Irrigation', labelSi: 'වාරි නිර්මාණ' },
  { id: 'monastery', labelEn: 'Monasteries & Caves', labelSi: 'ආරාම සහ ලෙන්' },
  { id: 'colonial_fort', labelEn: 'Colonial Forts', labelSi: 'යටත්විජිත කොටු' }
];

function ExploreContent() {
  const searchParams = useSearchParams();
  const { language, t, toggleLanguage } = useLanguage();

  // Selected period and site state (defaulting to full island view across all historical eras)
  const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod | null>(null);
  const [selectedSite, setSelectedSite] = useState<HistoricalSite | null>(null);
  const [detailDrawerOpen, setDetailDrawerOpen] = useState<boolean>(false);
  const [catalogueDrawerOpen, setCatalogueDrawerOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | '3d' | 'comparison'>('overview');

  // Search & Category Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isCinematicOrbit, setIsCinematicOrbit] = useState<boolean>(false);

  // Historical Time Journey Mode State
  const [isJourneyMode, setIsJourneyMode] = useState<boolean>(false);
  const [activeJourney, setActiveJourney] = useState<HistoricalJourney>(HISTORICAL_JOURNEYS[0]);
  const [activeWaypointIndex, setActiveWaypointIndex] = useState<number>(0);
  const [isJourneyPlaying, setIsJourneyPlaying] = useState<boolean>(false);
  const [journeyAudioEnabled, setJourneyAudioEnabled] = useState<boolean>(false);

  // Audio Context Ref for Ambient Sound
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Handle URL query parameters (e.g., `?site=ruwanwelisaya` or `?journey=salalihini-sandeshaya`)
  useEffect(() => {
    const siteParam = searchParams.get('site');
    if (siteParam) {
      const foundSite = HISTORICAL_SITES.find(s => s.id === siteParam || s.slug === siteParam);
      if (foundSite) {
        setSelectedSite(foundSite);
        setDetailDrawerOpen(true);
        setIsJourneyMode(false);
      }
    }

    const journeyParam = searchParams.get('journey');
    if (journeyParam) {
      const foundJourney = HISTORICAL_JOURNEYS.find(j => j.id === journeyParam || j.slug === journeyParam);
      if (foundJourney) {
        setActiveJourney(foundJourney);
        setActiveWaypointIndex(0);
        setIsJourneyMode(true);
        setDetailDrawerOpen(false);
      }
    }
  }, [searchParams]);

  // Handle Journey Auto-Play
  useEffect(() => {
    if (!isJourneyMode || !isJourneyPlaying) return;

    const timer = window.setInterval(() => {
      setActiveWaypointIndex(prev => {
        if (prev >= activeJourney.waypoints.length - 1) {
          setIsJourneyPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 6500); // 6.5s per waypoint

    return () => window.clearInterval(timer);
  }, [isJourneyMode, isJourneyPlaying, activeJourney]);

  // Ambient Audio Generator for Journey Mode
  useEffect(() => {
    if (!journeyAudioEnabled) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      return;
    }

    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioCtxRef.current = ctx;

      // Soft tropical wind / water drone
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.98 * b0 + white * 0.04;
        b1 = 0.94 * b1 + white * 0.04;
        b2 = 0.85 * b2 + white * 0.04;
        output[i] = (b0 + b1 + b2) * 0.12;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(340, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.06, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      whiteNoise.start(0);

      return () => {
        ctx.close().catch(() => {});
      };
    } catch (e) {
      console.warn('AudioContext blocked:', e);
    }
  }, [journeyAudioEnabled]);

  const handlePeriodChange = (period: HistoricalPeriod | null) => {
    setSelectedPeriod(period);
  };

  const handleSelectSite = (site: HistoricalSite) => {
    setSelectedSite(site);
    setDetailDrawerOpen(true);
    setActiveTab('overview');
    if (isJourneyMode) {
      setIsJourneyMode(false);
      setIsJourneyPlaying(false);
    }
  };

  const handleStartJourney = (journey: HistoricalJourney) => {
    setActiveJourney(journey);
    setActiveWaypointIndex(0);
    setIsJourneyMode(true);
    setIsJourneyPlaying(false);
    setDetailDrawerOpen(false);
    setCatalogueDrawerOpen(false);
  };

  const currentWaypoint = isJourneyMode && activeJourney ? activeJourney.waypoints[activeWaypointIndex] : null;

  return (
    <main className="relative w-full h-[calc(100vh-68px)] mt-[68px] bg-[#111512] text-[#F2E8D5] overflow-hidden select-none font-sans">
      
      {/* 1. TOP FLOATING CONTROL BAR */}
      <header className="absolute top-4 inset-x-3 sm:top-5 sm:inset-x-5 z-20 flex items-center justify-between pointer-events-none gap-3">
        
        {/* Left: Brand / Dossier Button & Search Bar */}
        <div className="flex items-center gap-2 pointer-events-auto flex-wrap">
          {/* Toggle Catalogue Drawer */}
          <button
            onClick={() => {
              setCatalogueDrawerOpen(prev => !prev);
              if (!catalogueDrawerOpen && detailDrawerOpen) setDetailDrawerOpen(false);
            }}
            className={`px-3.5 py-2 rounded-xl border backdrop-blur-xl flex items-center gap-2 text-xs font-semibold shadow-2xl transition-all ${
              catalogueDrawerOpen
                ? 'bg-gold-500 text-obsidian-950 border-gold-400 font-bold shadow-[0_0_20px_rgba(198,161,91,0.5)]'
                : 'bg-obsidian-950/90 text-gold-300 border-gold-500/40 hover:border-gold-300 hover:text-white hover:bg-obsidian-900'
            }`}
          >
            <Compass className="w-4 h-4 text-gold-400" />
            <span className="font-medium">
              {language === 'si' ? 'ස්ථාන නාමාවලිය' : 'Site Catalogue'}
            </span>
          </button>

          {/* Full Island View Button */}
          <button
            onClick={() => {
              setSelectedSite(null);
              setSelectedPeriod(null);
              setSelectedCategory('all');
              setSearchQuery('');
              setIsCinematicOrbit(false);
            }}
            title={language === 'si' ? 'සම්පූර්ණ ශ්‍රී ලංකා සිතියම' : 'Full Sri Lanka Island Map'}
            className="px-3.5 py-2 rounded-xl border bg-obsidian-950/90 border-gold-500/40 hover:border-gold-300 text-stone-300 hover:text-white backdrop-blur-xl flex items-center gap-1.5 text-xs font-semibold shadow-2xl transition-all hover:bg-obsidian-900"
          >
            <RotateCcw className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline">
              {language === 'si' ? 'සම්පූර්ණ සිතියම' : 'Full Map'}
            </span>
          </button>

          {/* Quick Search Input */}
          <div className="relative hidden md:flex items-center">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={language === 'si' ? 'ඓතිහාසික ස්ථාන සොයන්න...' : 'Search verified heritage sites...'}
              className="pl-8 pr-7 py-2 rounded-xl bg-obsidian-950/90 border border-gold-500/40 text-xs text-parchment-100 placeholder-stone-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50 w-52 lg:w-64 shadow-2xl backdrop-blur-xl transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 text-stone-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills (Desktop) */}
          <div className="hidden xl:flex items-center gap-1 bg-obsidian-950/90 border border-gold-500/40 backdrop-blur-xl p-1 rounded-xl shadow-2xl">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold shadow-md shadow-gold-500/20'
                    : 'text-stone-300 hover:text-gold-300 hover:bg-white/5'
                }`}
              >
                {language === 'si' ? cat.labelSi : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Time Journey Mode Trigger & Language */}
        <div className="flex items-center gap-2 pointer-events-auto">
          
          {/* Time Journey Mode Button */}
          <button
            onClick={() => {
              if (isJourneyMode) {
                setIsJourneyMode(false);
                setIsJourneyPlaying(false);
              } else {
                handleStartJourney(HISTORICAL_JOURNEYS[0]);
              }
            }}
            className={`px-3.5 py-2 rounded-xl border backdrop-blur-xl flex items-center gap-2 text-xs font-bold shadow-2xl transition-all ${
              isJourneyMode
                ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 border-gold-400 ring-2 ring-gold-400/50 shadow-[0_0_20px_rgba(198,161,91,0.7)]'
                : 'bg-obsidian-950/90 text-gold-400 border-gold-500/40 hover:border-gold-300 hover:bg-gold-500/10'
            }`}
          >
            <Sparkles className="w-4 h-4 animate-pulse-subtle" />
            <span>
              {isJourneyMode
                ? language === 'si' ? 'ගමන නවතන්න' : 'Exit Journey'
                : language === 'si' ? 'ඓතිහාසික චාරිකා' : 'Time Journeys'}
            </span>
          </button>

          {/* Salalihini 3D Flight Direct Link */}
          <Link
            href="/map?v=1"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-obsidian-950/90 border border-gold-500/40 hover:border-gold-300 text-gold-400 text-xs font-semibold backdrop-blur-xl transition shadow-2xl"
          >
            <Feather className="w-3.5 h-3.5" />
            <span>{language === 'si' ? 'සැළලිහිණි සිතියම' : 'Salalihini 3D'}</span>
          </Link>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-xl bg-obsidian-950/90 border border-gold-500/40 text-xs font-bold text-gold-400 hover:border-gold-300 transition backdrop-blur-xl shadow-2xl"
          >
            {language === 'si' ? 'ENG' : 'සිංහල'}
          </button>
        </div>
      </header>

      {/* 2. MAIN MAP CANVAS AREA */}
      <div className="relative w-full h-full">
        <MapViewer
          selectedPeriod={selectedPeriod || undefined}
          onSelectSite={handleSelectSite}
          selectedSiteId={selectedSite?.id}
          activeJourney={isJourneyMode ? activeJourney : null}
          activeWaypointIndex={activeWaypointIndex}
          onSelectWaypoint={idx => setActiveWaypointIndex(idx)}
          filterCategory={selectedCategory}
          searchQuery={searchQuery}
          isCinematicOrbit={isCinematicOrbit}
          onToggleCinematicOrbit={() => setIsCinematicOrbit(prev => !prev)}
          onResetIslandView={() => {
            setSelectedSite(null);
            setSelectedPeriod(null);
            setSelectedCategory('all');
            setSearchQuery('');
            setIsCinematicOrbit(false);
          }}
          className="w-full h-full"
        />

        {/* Floating Historical Timeline Slider at Bottom (When NOT in Journey Mode) */}
        {!isJourneyMode && (
          <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-2xl z-20 pointer-events-auto">
            <TimelineSlider
              selectedPeriodId={selectedPeriod ? selectedPeriod.id : 'all'}
              onPeriodChange={handlePeriodChange}
            />
          </div>
        )}

        {/* 3. TIME JOURNEY CONTROLLER (When in Journey Mode) */}
        {isJourneyMode && activeJourney && currentWaypoint && (
          <section
            aria-label="Time Journey Navigation"
            className="absolute bottom-3 inset-x-3 sm:bottom-5 sm:inset-x-6 z-30 mx-auto max-w-4xl rounded-3xl p-4 sm:p-5 bg-[#111512]/95 border border-gold-500/40 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.85)] animate-fade-in"
          >
            {/* Journey Header & Selector */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gold-500/15">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-ping" />
                <span className="font-mono text-xs uppercase tracking-wider text-gold-400 font-bold">
                  {language === 'si' ? 'කාල චාරිකාව' : 'Time Journey'}
                </span>
                <span className="text-stone-400">•</span>
                <span className="text-xs font-semibold text-parchment-100">
                  {language === 'si' ? activeJourney.title.si : activeJourney.title.en}
                </span>
              </div>

              {/* Journey Switcher Dropdown */}
              <div className="flex items-center gap-2">
                <select
                  value={activeJourney.id}
                  onChange={e => {
                    const next = HISTORICAL_JOURNEYS.find(j => j.id === e.target.value);
                    if (next) {
                      setActiveJourney(next);
                      setActiveWaypointIndex(0);
                      setIsJourneyPlaying(false);
                    }
                  }}
                  className="bg-black/60 border border-gold-500/30 text-xs text-gold-300 rounded-lg px-2.5 py-1 focus:outline-none focus:border-gold-400 cursor-pointer"
                >
                  {HISTORICAL_JOURNEYS.map(j => (
                    <option key={j.id} value={j.id}>
                      {language === 'si' ? j.title.si : j.title.en}
                    </option>
                  ))}
                </select>

                {/* Sound Toggle */}
                <button
                  onClick={() => setJourneyAudioEnabled(prev => !prev)}
                  className={`p-1.5 rounded-lg border transition ${
                    journeyAudioEnabled
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300 shadow-[0_0_10px_rgba(198,161,91,0.4)]'
                      : 'bg-black/40 border-gold-500/20 text-stone-400 hover:text-white'
                  }`}
                  title={journeyAudioEnabled ? 'Mute ambient sound' : 'Enable ambient sound'}
                >
                  {journeyAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Exit Journey */}
                <button
                  onClick={() => {
                    setIsJourneyMode(false);
                    setIsJourneyPlaying(false);
                  }}
                  className="text-stone-400 hover:text-white text-xs px-2 py-1 rounded hover:bg-white/10"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Waypoint Player & Narrative */}
            <div className="mt-3 flex items-start gap-4">
              
              {/* Play / Pause Auto-Fly Button */}
              <button
                type="button"
                onClick={() => setIsJourneyPlaying(prev => !prev)}
                className="mt-1 grid size-12 shrink-0 place-items-center rounded-2xl border border-gold-400/80 bg-gradient-to-br from-gold-400/25 to-amber-600/30 text-gold-300 hover:scale-105 hover:bg-gold-500/40 transition shadow-lg shadow-gold-500/20"
                title={isJourneyPlaying ? 'Pause automatic flight' : 'Play automatic fly-through'}
              >
                {isJourneyPlaying ? <Pause className="w-6 h-6 fill-gold-400" /> : <Play className="w-6 h-6 fill-gold-400 ml-0.5" />}
              </button>

              {/* Waypoint Details */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 text-xs mb-1">
                  <span className="font-mono font-bold text-gold-400 text-sm">
                    {language === 'si'
                      ? `නැවතුම ${activeWaypointIndex + 1} / ${activeJourney.waypoints.length}`
                      : `Waypoint ${activeWaypointIndex + 1} of ${activeJourney.waypoints.length}`}
                  </span>
                  <span className="text-[11px] text-stone-400 font-serif">
                    {language === 'si' ? currentWaypoint.title.si : currentWaypoint.title.en}
                  </span>
                  {currentWaypoint.rulerAssociation && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/20 font-medium">
                      {language === 'si' ? currentWaypoint.rulerAssociation.si : currentWaypoint.rulerAssociation.en}
                    </span>
                  )}
                </div>

                {/* Narrative Text */}
                <p className="text-xs sm:text-sm text-parchment-200 leading-relaxed font-light">
                  {language === 'si' ? currentWaypoint.narrative.si : currentWaypoint.narrative.en}
                </p>

                {/* Classical Stanza / Inscription Quote (if available) */}
                {currentWaypoint.sinhalaStanza && (
                  <div className="mt-2 p-2.5 rounded-xl bg-black/40 border border-gold-500/20 text-xs font-serif text-gold-300 italic">
                    "{currentWaypoint.sinhalaStanza}"
                    <span className="block mt-1 text-[10px] font-mono text-stone-400 not-italic">
                      — {currentWaypoint.stanzaAttribution}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Stepper & Waypoint Dots */}
            <div className="mt-3 pt-3 border-t border-gold-500/15 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveWaypointIndex(prev => Math.max(0, prev - 1))}
                disabled={activeWaypointIndex <= 0}
                className="px-3 py-1.5 rounded-xl border border-gold-500/30 text-xs font-semibold text-gold-400 hover:border-gold-400 disabled:opacity-30 disabled:hover:border-gold-500/30 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'si' ? 'පෙර නැවතුම' : 'Previous'}</span>
              </button>

              {/* Waypoint clickable dots */}
              <div className="flex items-center gap-1.5">
                {activeJourney.waypoints.map((wp, idx) => (
                  <button
                    key={wp.id}
                    onClick={() => {
                      setActiveWaypointIndex(idx);
                      setIsJourneyPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeWaypointIndex
                        ? 'w-6 bg-gold-400 shadow-[0_0_10px_rgba(198,161,91,0.8)]'
                        : 'w-2 bg-stone-700 hover:bg-gold-500/50'
                    }`}
                    title={language === 'si' ? wp.title.si : wp.title.en}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveWaypointIndex(prev => Math.min(activeJourney.waypoints.length - 1, prev + 1))}
                disabled={activeWaypointIndex >= activeJourney.waypoints.length - 1}
                className="px-3 py-1.5 rounded-xl border border-gold-500/30 text-xs font-semibold text-gold-400 hover:border-gold-400 disabled:opacity-30 disabled:hover:border-gold-500/30 flex items-center gap-1"
              >
                <span>{language === 'si' ? 'ඊළඟ නැවතුම' : 'Next'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        )}
      </div>

      {/* 4. COLLAPSIBLE LEFT SITE CATALOGUE DRAWER */}
      {catalogueDrawerOpen && (
        <aside className="absolute inset-x-3 sm:inset-x-auto sm:left-5 top-[72px] sm:top-[80px] bottom-3 sm:bottom-6 z-30 w-auto sm:w-80 lg:w-96 rounded-2xl sm:rounded-3xl bg-[#111512]/98 border border-gold-500/35 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-right">
          {/* Header */}
          <div className="p-4 border-b border-gold-500/20 bg-black/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold-400" />
              <h2 className="font-serif text-sm font-bold text-parchment-100 tracking-wider">
                {language === 'si' ? 'ලංකා උරුම ස්ථාන නාමාවලිය' : 'Heritage Sites Directory'}
              </h2>
            </div>
            <button
              onClick={() => setCatalogueDrawerOpen(false)}
              className="p-1 text-stone-400 hover:text-white rounded hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Filter Info */}
          <div className="p-3 bg-black/20 border-b border-gold-500/10 text-xs flex items-center justify-between text-stone-400">
            <span>
              {language === 'si'
                ? `ස්ථාන ${HISTORICAL_SITES.length} න් පෙරූ ප්‍රතිඵල`
                : `Showing ${HISTORICAL_SITES.length} verified sites`}
            </span>
            <span className="text-gold-400 font-mono text-[11px]">WGS-84 Verified</span>
          </div>

          {/* Site Cards List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
            {HISTORICAL_SITES.map(site => {
              const isSelected = selectedSite?.id === site.id;
              return (
                <div
                  key={site.id}
                  onClick={() => handleSelectSite(site)}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all flex gap-3 ${
                    isSelected
                      ? 'bg-gold-500/15 border-gold-400 shadow-[0_0_15px_rgba(198,161,91,0.3)] ring-1 ring-gold-400/40'
                      : 'bg-black/40 border-gold-500/15 hover:border-gold-400/60 hover:bg-black/60'
                  }`}
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gold-500/20">
                    <img
                      src={site.image}
                      alt={site.name.en}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs font-serif font-bold text-parchment-100 truncate">
                      {language === 'si' ? site.name.si : site.name.en}
                    </h3>
                    <p className="text-[11px] text-gold-400/90 font-mono mt-0.5">
                      {site.historicalPeriod}
                    </p>
                    <p className="text-[10px] text-stone-400 line-clamp-1 mt-1 font-light">
                      {t(site.significance)}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 text-[9px] text-stone-500 font-mono">
                      <span>{site.coordinates[0].toFixed(3)}°N</span>
                      <span>•</span>
                      <span>{site.coordinates[1].toFixed(3)}°E</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      )}

      {/* 5. CONTEXTUAL LOCATION DETAIL DRAWER (RIGHT PANEL) */}
      {selectedSite && detailDrawerOpen && (
        <aside className="absolute inset-x-3 sm:inset-x-auto sm:right-5 top-[72px] sm:top-[80px] bottom-3 sm:bottom-6 z-30 w-auto sm:w-[440px] lg:w-[480px] rounded-2xl sm:rounded-3xl bg-[#111512]/98 border border-gold-500/35 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-left">
          
          {/* Drawer Header */}
          <div className="p-4 border-b border-gold-500/20 bg-black/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(198,161,91,0.8)]" />
              <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold font-mono">
                {language === 'si' ? 'පුරාවිද්‍යා තොරතුරු ලිපිගොනුව' : 'Archaeological Dossier'}
              </span>
            </div>
            <button
              onClick={() => setDetailDrawerOpen(false)}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Navigation Tabs: Overview, 3D Model, Past vs Present */}
          <div className="flex items-center border-b border-gold-500/15 bg-black/20 px-4 pt-2 gap-2 text-xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 px-3 font-semibold transition-all border-b-2 ${
                activeTab === 'overview'
                  ? 'border-gold-400 text-gold-300'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              {language === 'si' ? 'සාරාංශය' : 'Overview'}
            </button>

            {selectedSite.threeDModelAvailable && (
              <button
                onClick={() => setActiveTab('3d')}
                className={`pb-2.5 px-3 font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
                  activeTab === '3d'
                    ? 'border-gold-400 text-gold-300'
                    : 'border-transparent text-stone-400 hover:text-stone-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>{language === 'si' ? 'ත්‍රිමාණ ආකෘතිය' : '3D Model'}</span>
              </button>
            )}

            {selectedSite.pastImage && (
              <button
                onClick={() => setActiveTab('comparison')}
                className={`pb-2.5 px-3 font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
                  activeTab === 'comparison'
                    ? 'border-gold-400 text-gold-300'
                    : 'border-transparent text-stone-400 hover:text-stone-200'
                }`}
              >
                <Split className="w-3.5 h-3.5 text-gold-400" />
                <span>{language === 'si' ? 'අතීතය හා වර්තමානය' : 'Past & Present'}</span>
              </button>
            )}
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 text-stone-200 text-xs sm:text-sm">
            
            {activeTab === 'overview' && (
              <div className="space-y-4">
                {/* Title & Coordinates */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif font-black text-parchment-50 leading-tight">
                    {language === 'si' ? selectedSite.name.si : selectedSite.name.en}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gold-400/90 mt-1.5 font-mono">
                    <span>{selectedSite.historicalPeriod}</span>
                    <span>•</span>
                    <span>{selectedSite.coordinates[0].toFixed(4)}°N, {selectedSite.coordinates[1].toFixed(4)}°E</span>
                    <span>•</span>
                    <span>Alt: {selectedSite.elevation || 100}m</span>
                  </div>
                </div>

                {/* 3D Action Controls & Map Orbit */}
                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <button
                    onClick={() => setIsCinematicOrbit(prev => !prev)}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                      isCinematicOrbit
                        ? 'bg-gold-500 text-obsidian-950 border-gold-400 font-bold shadow-[0_0_15px_rgba(198,161,91,0.5)] animate-pulse-subtle'
                        : 'bg-black/50 border-gold-500/30 text-gold-300 hover:border-gold-400 hover:bg-gold-500/10'
                    }`}
                  >
                    <Compass className={`w-3.5 h-3.5 ${isCinematicOrbit ? 'animate-spin' : 'text-gold-400'}`} />
                    <span>
                      {isCinematicOrbit
                        ? (language === 'si' ? 'කක්ෂ කැරකැවුම නවත්වන්න' : 'Stop 3D Orbit')
                        : (language === 'si' ? '3D සිතියම් කක්ෂය' : '3D Map Flyover')}
                    </span>
                  </button>

                  {selectedSite.threeDModelAvailable && (
                    <button
                      onClick={() => setActiveTab('3d')}
                      className="py-2 px-3 rounded-xl border bg-gradient-to-r from-gold-500/20 to-amber-500/20 border-gold-400/50 hover:border-gold-300 text-gold-200 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold shadow-md transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      <span>{language === 'si' ? '3D ආකෘතිය නරඹන්න' : 'Inspect 3D Model'}</span>
                    </button>
                  )}
                </div>

                {/* Camera Spatial Telemetry & Coordinates */}
                <div className="px-3 py-2 rounded-xl bg-black/40 border border-gold-500/20 flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono text-stone-300">
                  <span className="text-gold-400/90 flex items-center gap-1">
                    <Navigation className="w-3 h-3" />
                    <span>Pitch: {selectedSite.mapCamera?.pitch || 55}°</span>
                  </span>
                  <span>Bearing: {selectedSite.mapCamera?.bearing || 0}°</span>
                  <span>Zoom: {selectedSite.mapCamera?.zoom || 15.2}x</span>
                  <span className="text-stone-400">GPS: {selectedSite.coordinatePrecision || 'gps_surveyed'}</span>
                </div>

                {/* Authenticated Photograph */}
                <div className="relative h-52 w-full rounded-2xl overflow-hidden border border-gold-500/25 shadow-xl">
                  <img
                    src={selectedSite.image}
                    alt={selectedSite.name.en}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-3 right-3 text-[10px] text-stone-300 leading-tight flex items-center justify-between">
                    <span>{selectedSite.imageCaption ? t(selectedSite.imageCaption) : ''}</span>
                    <span className="text-gold-400/90 font-mono shrink-0 ml-2">{selectedSite.imageLicense}</span>
                  </div>
                </div>

                {/* Historical Significance */}
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-bold block font-mono">
                    {language === 'si' ? 'ඓතිහාසික වැදගත්කම' : 'Historical Significance'}
                  </span>
                  <p className="text-parchment-200 leading-relaxed font-light">
                    {t(selectedSite.significance)}
                  </p>
                </div>

                {/* Archaeological Context */}
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-bold block font-mono">
                    {language === 'si' ? 'පුරාවිද්‍යාත්මක විස්තරය' : 'Archaeological Context'}
                  </span>
                  <p className="text-parchment-300 leading-relaxed font-light">
                    {t(selectedSite.description)}
                  </p>
                </div>

                {/* Architectural Highlights */}
                <div className="p-4 rounded-2xl bg-black/40 border border-gold-500/20 space-y-2">
                  <span className="text-xs font-semibold text-gold-300 block font-serif">
                    {language === 'si' ? 'වාස්තු විද්‍යාත්මක විශේෂතා' : 'Architectural Highlights'}
                  </span>
                  <ul className="space-y-2 text-xs text-parchment-200">
                    {selectedSite.architecturalHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                        <span>{t(hl)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lithic & Epigraphical Evidence */}
                {selectedSite.archaeologicalEvidence && (
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block font-mono">
                      {language === 'si' ? 'පුරාවිද්‍යාත්මක හා ශිලා ලේඛන සාධක' : 'Epigraphical & Archaeological Evidence'}
                    </span>
                    <p className="text-stone-300 leading-relaxed text-xs">
                      {t(selectedSite.archaeologicalEvidence)}
                    </p>
                  </div>
                )}

                {/* Conservation & UNESCO Legal Status */}
                <div className="p-3.5 rounded-2xl bg-[#172820]/60 border border-emerald-500/30 space-y-1 text-xs">
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block font-mono">
                    {language === 'si' ? 'නීත්‍යානුකූල සංරක්ෂණ තත්ත්වය' : 'Conservation & UNESCO Status'}
                  </span>
                  <p className="text-emerald-200/90 leading-relaxed">
                    {t(selectedSite.conservationStatus)}
                  </p>
                </div>

                {/* Academic Citations */}
                <div className="pt-2 border-t border-gold-500/15 text-[11px] text-stone-400 space-y-1">
                  <span className="font-semibold text-stone-300 block">
                    {language === 'si' ? 'ශාස්ත්‍රීය මූලාශ්‍ර හා ලේඛන:' : 'Scholarly Citations & Sources:'}
                  </span>
                  <ul className="list-disc list-inside space-y-0.5 font-light">
                    {selectedSite.sources.map((src, i) => (
                      <li key={i}>{src}</li>
                    ))}
                  </ul>
                </div>

                {/* Related Historical Sites */}
                {selectedSite.relatedSites && selectedSite.relatedSites.length > 0 && (
                  <div className="pt-3 border-t border-gold-500/15 space-y-2">
                    <span className="text-xs uppercase tracking-wider text-gold-400 font-bold block font-mono">
                      {language === 'si' ? 'සම්බන්ධිත ඓතිහාසික ස්ථාන' : 'Related Historical Sites'}
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedSite.relatedSites.map(relId => {
                        const relSite = HISTORICAL_SITES.find(s => s.id === relId || s.slug === relId);
                        if (!relSite) return null;
                        return (
                          <button
                            key={relId}
                            onClick={() => handleSelectSite(relSite)}
                            className="p-2.5 rounded-xl bg-black/50 border border-gold-500/20 hover:border-gold-400 hover:bg-gold-500/10 text-left transition flex items-center gap-3 group"
                          >
                            <img
                              src={relSite.image}
                              alt={relSite.name.en}
                              className="w-10 h-10 rounded-lg object-cover border border-gold-500/20 shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-serif font-bold text-parchment-100 group-hover:text-gold-300 truncate">
                                {language === 'si' ? relSite.name.si : relSite.name.en}
                              </p>
                              <p className="text-[10px] text-gold-400/80 font-mono truncate">
                                {relSite.historicalPeriod}
                              </p>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-gold-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 3D Reconstruction Model Tab */}
            {activeTab === '3d' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs pb-1">
                  <span className="font-mono text-gold-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {selectedSite.threeDModelProvenance === 'educational_reconstruction'
                        ? (language === 'si' ? 'අධ්‍යාපනික ත්‍රිමාණ ප්‍රතිනිර්මාණය' : 'Educational 3D Reconstruction')
                        : (language === 'si' ? 'පුරාවිද්‍යා මැනුම් ආකෘතිය' : 'Architectural Survey Model')}
                    </span>
                  </span>
                  <button
                    onClick={() => setActiveTab('overview')}
                    className="text-[11px] text-stone-400 hover:text-gold-300 underline"
                  >
                    {language === 'si' ? 'ලිපිගොනුවට ආපසු' : 'Back to Dossier'}
                  </button>
                </div>
                <div className="h-80 w-full rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl relative">
                  <Monument3DViewer
                    modelType={selectedSite.threeDType || 'stupa'}
                    monumentTitle={t(selectedSite.name)}
                  />
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-gold-500/15 text-[11px] text-stone-400">
                  <p className="italic">
                    {language === 'si'
                      ? 'මධ්‍යම සංස්කෘතික අරමුදල සහ පුරාවිද්‍යා දෙපාර්තමේන්තුවේ මැනුම් සටහන් මත පදනම්ව ගොඩනගන ලද පරිමාණානුකූල ත්‍රිමාණ ආකෘතියකි. ව්‍යුහාත්මක විස්තර සඳහා හොට්ස්පොට් (Hotspots) මත ක්ලික් කරන්න.'
                      : 'Scale-accurate 3D reconstruction based on Central Cultural Fund & Dept of Archaeology survey records. Click numbered hotspots to inspect architectural elements.'}
                  </p>
                </div>
              </div>
            )}

            {/* Past vs Present Photographic Comparison Tab */}
            {activeTab === 'comparison' && selectedSite.pastImage && (
              <div className="space-y-3">
                <PastPresentSlider
                  pastImage={selectedSite.pastImage}
                  presentImage={selectedSite.image}
                  pastDate={selectedSite.pastImageDate}
                  pastCredit={selectedSite.pastImageCredit}
                  presentCredit={selectedSite.presentImageCredit}
                  title={t(selectedSite.name)}
                />
              </div>
            )}
          </div>

          {/* Drawer Footer CTA */}
          <div className="p-4 border-t border-gold-500/20 bg-black/60 flex items-center gap-3">
            <Link
              href={`/sites/${selectedSite.slug}`}
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-amber-600 hover:from-gold-300 hover:to-amber-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
            >
              <span>{language === 'si' ? 'සම්පූර්ණ පර්යේෂණ ලිපිය' : 'Read Full Monograph'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      )}

      {/* Floating Toggle Pill when Detail Drawer is Closed */}
      {selectedSite && !detailDrawerOpen && !isJourneyMode && (
        <button
          onClick={() => setDetailDrawerOpen(true)}
          className="absolute top-16 right-4 z-20 bg-[#111512]/90 border border-gold-500/40 backdrop-blur-xl px-4 py-2 rounded-2xl text-xs font-semibold text-gold-400 hover:text-white hover:border-gold-300 shadow-2xl flex items-center gap-2 transition"
        >
          <Landmark className="w-4 h-4 text-gold-400" />
          <span>{language === 'si' ? 'ස්ථාන ලිපිගොනුව බලන්න' : 'Open Site Dossier'}</span>
        </button>
      )}

    </main>
  );
}

export default function ExplorePage() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen bg-[#111512] flex flex-col items-center justify-center text-gold-400 font-serif">
          <div className="w-12 h-12 border-2 border-gold-400 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="tracking-widest text-sm">UNFOLDING LANKA HISTORICAL EXPLORER...</p>
        </div>
      }
    >
      <ExploreContent />
    </Suspense>
  );
}
