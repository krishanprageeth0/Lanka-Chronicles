'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { Split } from 'lucide-react';

interface PastPresentSliderProps {
  pastImage: string;
  presentImage: string;
  pastDate?: string;
  pastCredit?: string;
  presentCredit?: string;
  title?: string;
}

export default function PastPresentSlider({
  pastImage,
  presentImage,
  pastDate = 'c. 1890s (Archaeological Survey Archive)',
  pastCredit = 'Joseph Lawton / H.C.P. Bell Glass Plate Negative',
  presentCredit = 'Modern Conservation View (2024)',
  title = 'Archaeological Transformation: Past & Present'
}: PastPresentSliderProps) {
  const { language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="w-full bg-obsidian-900 border border-gold-500/30 rounded-2xl p-4 sm:p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-wider">
            <Split className="w-4 h-4" />
            <span>{language === 'si' ? 'අතීතය සහ වර්තමානය සංසන්දනය' : 'Past & Present Photographic Comparison'}</span>
          </div>
          <h4 className="text-base font-serif text-parchment-100 font-medium mt-0.5">{title}</h4>
        </div>
        <span className="text-xs text-stone-400">
          {language === 'si' ? 'වෙනස බැලීමට රේඛාව දෙපසට අදින්න' : 'Drag slider horizontally to compare'}
        </span>
      </div>

      {/* Slider Interactive Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[320px] sm:h-[420px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-stone-700/60"
      >
        {/* Present Image (Full background layer) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={presentImage}
            alt="Present Day View"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute top-4 right-4 bg-obsidian-950/80 backdrop-blur-md px-3 py-1 rounded-md text-xs text-emerald-400 font-medium border border-emerald-500/30">
            {language === 'si' ? 'වර්තමාන දැක්ම (2024)' : 'Present Day (2024)'}
          </div>
          <div className="absolute bottom-3 right-4 text-[10px] text-stone-300 bg-obsidian-950/70 px-2 py-0.5 rounded">
            {presentCredit}
          </div>
        </div>

        {/* Past Image (Clipped layer by slider percentage) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[700px] sm:min-w-[900px] grayscale sepia-[0.35]">
            <Image
              src={pastImage}
              alt="Historical Archival View"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute top-4 left-4 bg-obsidian-950/85 backdrop-blur-md px-3 py-1 rounded-md text-xs text-gold-400 font-medium border border-gold-500/30">
              {language === 'si' ? `අතීත ලේඛනාගාරය (${pastDate})` : `Archival Plate (${pastDate})`}
            </div>
            <div className="absolute bottom-3 left-4 text-[10px] text-stone-300 bg-obsidian-950/70 px-2 py-0.5 rounded">
              {pastCredit}
            </div>
          </div>
        </div>

        {/* Divider Handle Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold-400 shadow-[0_0_12px_rgba(198,161,91,0.8)] cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-obsidian-900 border-2 border-gold-400 flex items-center justify-center shadow-2xl text-gold-400 text-xs font-bold">
            ↔
          </div>
        </div>
      </div>
    </div>
  );
}
