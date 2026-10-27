'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, FastForward, Clock } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { HISTORICAL_PERIODS } from '../data/periods';
import { HistoricalPeriod } from '../lib/types';
import { formatHistoricalYear } from '../lib/utils';

interface TimelineSliderProps {
  selectedPeriodId?: string | null;
  onPeriodChange: (period: HistoricalPeriod | null) => void;
  className?: string;
}

export default function TimelineSlider({ selectedPeriodId, onPeriodChange, className = '' }: TimelineSliderProps) {
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(3500); // 3.5s per period

  const isAllEras = !selectedPeriodId || selectedPeriodId === 'all';
  const currentIndex = HISTORICAL_PERIODS.findIndex(p => p.id === selectedPeriodId);
  const activeIndex = currentIndex !== -1 ? currentIndex : 2; // Default to Anuradhapura
  const currentPeriod = HISTORICAL_PERIODS[activeIndex];

  // Playback loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        const nextIndex = (activeIndex + 1) % HISTORICAL_PERIODS.length;
        onPeriodChange(HISTORICAL_PERIODS[nextIndex]);
      }, playbackSpeed);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeIndex, playbackSpeed, onPeriodChange]);

  const handleNext = () => {
    if (activeIndex < HISTORICAL_PERIODS.length - 1) {
      onPeriodChange(HISTORICAL_PERIODS[activeIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      onPeriodChange(HISTORICAL_PERIODS[activeIndex - 1]);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    onPeriodChange(null);
  };

  return (
    <div className={`bg-obsidian-900/90 border border-gold-500/30 backdrop-blur-xl rounded-2xl p-4 md:p-5 shadow-2xl text-parchment-100 ${className}`}>
      {/* Top Bar: Current Period Info & Playback Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-gold-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                {language === 'si' ? 'කාල තරණය' : 'Time Travel Epoch'}
              </span>
              <span className="text-xs bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded font-mono">
                {isAllEras
                  ? language === 'si' ? 'සියලු යුග සක්‍රියයි' : 'All Eras Island-Wide'
                  : t(currentPeriod.dateDisplay)}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-serif font-bold text-parchment-50">
              {isAllEras
                ? language === 'si' ? 'සම්පූර්ණ ශ්‍රී ලංකා ඉතිහාසය (වසර 2,500+)' : 'Comprehensive History of Sri Lanka (2,500+ Years)'
                : t(currentPeriod.name)}
            </h3>
          </div>
        </div>

        {/* Playback Button Group & All Eras Toggle */}
        <div className="flex items-center gap-1.5 self-start md:self-auto bg-obsidian-950/80 p-1 rounded-xl border border-stone-800">
          <button
            onClick={() => {
              setIsPlaying(false);
              onPeriodChange(null);
            }}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              isAllEras
                ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md'
                : 'text-stone-300 hover:text-gold-300'
            }`}
            title={language === 'si' ? 'සියලු යුග සිතියම මත පෙන්වන්න' : 'Show All Eras Across Sri Lanka'}
          >
            {language === 'si' ? 'සියල්ල' : 'All'}
          </button>

          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="p-2 text-stone-400 hover:text-gold-400 disabled:opacity-30 disabled:hover:text-stone-400 transition-colors"
            title="Previous Era"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3 py-1.5 bg-gold-500 text-obsidian-950 font-semibold rounded-lg flex items-center gap-1.5 hover:bg-gold-400 transition-all text-xs shadow-md"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>{language === 'si' ? 'විරාමය' : 'Pause'}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{language === 'si' ? 'ධාවනය' : 'Play Timeline'}</span>
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === HISTORICAL_PERIODS.length - 1}
            className="p-2 text-stone-400 hover:text-gold-400 disabled:opacity-30 disabled:hover:text-stone-400 transition-colors"
            title="Next Era"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleReset}
            className="p-2 text-stone-400 hover:text-stone-200 transition-colors"
            title="Reset to All"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrub Bar & Period Nodes */}
      <div className="relative pt-2 pb-1">
        {/* Progress Background Track */}
        <div className="relative w-full h-2 bg-obsidian-950 rounded-full overflow-hidden border border-stone-800">
          <div
            className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-amber-300 transition-all duration-500 rounded-full"
            style={{ width: `${((activeIndex + 1) / HISTORICAL_PERIODS.length) * 100}%` }}
          />
        </div>

        {/* Scrollable / Clickable Period Markers */}
        <div className="flex justify-between items-center mt-3 overflow-x-auto pb-2 scrollbar-none gap-2">
          {HISTORICAL_PERIODS.map((period, idx) => {
            const isSelected = period.id === selectedPeriodId;
            return (
              <button
                key={period.id}
                onClick={() => {
                  setIsPlaying(false);
                  onPeriodChange(period);
                }}
                className={`flex flex-col items-center flex-shrink-0 text-left transition-all px-2.5 py-1.5 rounded-lg ${
                  isSelected
                    ? 'bg-gold-500/20 border border-gold-500/60 shadow-lg'
                    : 'hover:bg-obsidian-800/60 text-stone-400'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full mb-1 transition-all ${
                    isSelected ? 'bg-gold-400 ring-4 ring-gold-400/20 scale-125' : 'bg-stone-600'
                  }`}
                />
                <span className={`text-[11px] font-medium whitespace-nowrap ${isSelected ? 'text-gold-300 font-bold' : 'text-stone-400'}`}>
                  {language === 'si' ? period.name.si.split(' ')[0] : period.name.en.split(' ')[0]}
                </span>
                <span className="text-[9px] text-stone-400 font-mono">
                  {formatHistoricalYear(period.startYear, language)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Historical Era Context Banner */}
      <div className="mt-2 pt-2 border-t border-stone-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-stone-300">
        <p className="line-clamp-1 italic text-parchment-200">
          "{t(currentPeriod.tagline)}"
        </p>
        <div className="flex items-center gap-2 flex-shrink-0 text-stone-400">
          <span>{language === 'si' ? 'කේන්ද්‍රස්ථාන:' : 'Centers:'}</span>
          <span className="text-gold-400 font-medium">
            {currentPeriod.politicalCenters.map(c => t(c)).slice(0, 2).join(' • ')}
          </span>
        </div>
      </div>
    </div>
  );
}
