'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  BookOpen,
  MapPin,
  Sparkles,
  ChevronRight,
  Filter,
  Copy,
  Check,
  Compass,
  ArrowRight,
  Volume2,
  VolumeX,
  Share2,
  X
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import {
  SALALIHINI_ALL_111_VERSES,
  SALALIHINI_CANTOS,
  SALALIHINI_MAP_LANDMARKS,
  SalalihiniVerse,
  SalalihiniCanto,
  SalalihiniLandmark
} from '../data/salalihiniVerses';

interface SalalihiniVersesDirectoryProps {
  isModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  onSelectVerse?: (verseNum: number) => void;
  initialVerse?: number;
}

export default function SalalihiniVersesDirectory({
  isModal = false,
  isOpen = true,
  onClose,
  onSelectVerse,
  initialVerse = 1
}: SalalihiniVersesDirectoryProps) {
  const router = useRouter();
  const { language } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCantoId, setSelectedCantoId] = useState<string>('all');
  const [copiedVerseNum, setCopiedVerseNum] = useState<number | null>(null);
  const [viewDensity, setViewDensity] = useState<'detailed' | 'compact'>('detailed');

  // Filtered verses based on search and canto selection
  const filteredVerses = useMemo(() => {
    return SALALIHINI_ALL_111_VERSES.filter((v: SalalihiniVerse) => {
      // 1. Canto filter
      if (selectedCantoId !== 'all') {
        const canto = SALALIHINI_CANTOS.find(c => c.id === selectedCantoId);
        if (canto && (v.n < canto.from || v.n > canto.to)) {
          return false;
        }
      }

      // 2. Search query filter
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const numMatch = v.n.toString() === q;
      if (numMatch) return true;

      const linesMatch = v.lines?.some(l => l.toLowerCase().includes(q));
      const siMatch = v.si?.toLowerCase().includes(q);
      const enMatch = v.en?.toLowerCase().includes(q);
      const noteMatch = v.note?.si?.toLowerCase().includes(q) || v.note?.en?.toLowerCase().includes(q);

      return linesMatch || siMatch || enMatch || noteMatch;
    });
  }, [searchQuery, selectedCantoId]);

  const handleCopy = (verse: SalalihiniVerse) => {
    const linesText = verse.lines && verse.lines.length > 0 ? verse.lines.join('\n') : verse.si;
    const fullText = `[සැළලිහිණි සන්දේශය - කවිය ${verse.n}]\n${linesText}\n\nතේරුම:\n${verse.si}\n\n- Lanka Chronicles (lankachronicles.org)`;
    navigator.clipboard.writeText(fullText);
    setCopiedVerseNum(verse.n);
    setTimeout(() => setCopiedVerseNum(null), 2500);
  };

  const handleVerseAction = (verseNum: number) => {
    if (onSelectVerse) {
      onSelectVerse(verseNum);
      if (onClose) onClose();
    } else {
      router.push(`/map?v=${verseNum}`);
    }
  };

  if (isModal && !isOpen) return null;

  const content = (
    <div className="flex flex-col h-full bg-obsidian-950 text-parchment-100 font-sans">
      {/* 1. Header Banner */}
      <div className="border-b border-gold-500/20 bg-gradient-to-b from-obsidian-900 to-obsidian-950/95 p-3.5 sm:p-6 backdrop-blur-xl shrink-0">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
              <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-400 text-[10px] sm:text-xs font-mono font-semibold tracking-wider uppercase">
                {language === 'si' ? 'ක්‍රි.ව. 1450 • කෝට්ටේ යුගය' : 'c. 1450 CE • Kingdom of Kotte'}
              </span>
              <span className="text-[10px] sm:text-xs text-parchment-400">
                • {language === 'si' ? 'සම්පූර්ණ කවි 111' : 'Complete 111 Verses'}
              </span>
            </div>
            <h1 className="font-serif text-lg sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-parchment-50 via-gold-300 to-amber-200 bg-clip-text text-transparent leading-tight">
              {language === 'si'
                ? 'සැළලිහිණි සන්දේශය — පූර්ණ කාව්‍ය සංග්‍රහය'
                : 'Salalihini Sandeshaya — Complete Classical Anthology'}
            </h1>
            <p className="text-[11px] sm:text-xs md:text-sm text-parchment-300 mt-1 max-w-3xl leading-relaxed line-clamp-2 sm:line-clamp-none">
              {language === 'si'
                ? 'ෂඩ්භාෂා පරමේශ්වර තොටගමුවේ ශ්‍රී රාහුල හිමියන් විසින් හයවන පරාක්‍රමබාහු රජුගේ උලකුඩය දේවියට පුත් රුවනක් පතා කැලණියේ විභීෂණ දෙවියන් වෙත යැවූ අව්‍යාජ පද්‍ය 111 සහ අර්ථ විවරණය.'
                : 'Penned by Ven. Totagamuwe Sri Rahula Thera, sending a starling messenger from Jayawardhanapura Kotte to Lord Vibhishana at Kelaniya, with authentic 4-line stanzas, Sinhala meanings, and English translations.'}
            </p>
          </div>

          {/* Action buttons (Modal Close or Map Link) */}
          <div className="flex items-center gap-2 shrink-0">
            {!isModal && (
              <Link
                href="/map?v=1"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 text-xs font-bold shadow-lg hover:shadow-gold-500/25 transition"
              >
                <Compass className="w-4 h-4" />
                <span>{language === 'si' ? 'ත්‍රිමාණ සිතියමට' : 'Launch 3D Map'}</span>
              </Link>
            )}

            {isModal && onClose && (
              <button
                onClick={onClose}
                aria-label="Close Verses Modal"
                className="p-2 sm:p-2.5 rounded-full bg-obsidian-800/80 border border-gold-500/30 text-parchment-300 hover:text-white hover:border-gold-400 transition min-w-[38px] min-h-[38px] flex items-center justify-center"
              >
                <X className="w-5 h-5 text-gold-400" />
              </button>
            )}
          </div>
        </div>

        {/* 2. Search & Filter Bar */}
        <div className="mt-3.5 sm:mt-5 flex flex-col md:flex-row gap-2.5 sm:gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={
                language === 'si'
                  ? 'කවි අංකයෙන් (උදා: 1 හෝ 111) හෝ වචනයෙන් සොයන්න (උදා: රජකුල, කැලණි, දළදා)...'
                  : 'Search by verse # (e.g. 1, 111) or words (e.g. Kelaniya, starling, Kotte)...'
              }
              className="w-full pl-10 pr-8 py-2.5 sm:py-3 rounded-2xl bg-obsidian-900/90 border border-gold-500/30 text-parchment-100 placeholder-parchment-500 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-parchment-400 hover:text-white text-xs px-1.5 py-0.5 rounded"
              >
                ✕
              </button>
            )}
          </div>

          {/* Density Toggle */}
          <div className="flex items-center gap-1.5 self-end md:self-auto bg-obsidian-900/80 border border-gold-500/25 p-1 rounded-2xl text-xs">
            <button
              onClick={() => setViewDensity('detailed')}
              className={`px-3 py-1.5 rounded-xl font-medium transition ${
                viewDensity === 'detailed'
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow'
                  : 'text-parchment-300 hover:text-white'
              }`}
            >
              {language === 'si' ? 'සම්පූර්ණ විස්තර' : 'Full Meaning'}
            </button>
            <button
              onClick={() => setViewDensity('compact')}
              className={`px-3 py-1.5 rounded-xl font-medium transition ${
                viewDensity === 'compact'
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow'
                  : 'text-parchment-300 hover:text-white'
              }`}
            >
              {language === 'si' ? 'කවි පද පමණක්' : 'Verses Only'}
            </button>
          </div>
        </div>

        {/* 3. Canto Category Horizontal Carousel / Tabs */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <button
            onClick={() => setSelectedCantoId('all')}
            className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition ${
              selectedCantoId === 'all'
                ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 shadow-md'
                : 'bg-obsidian-900 border border-gold-500/20 text-parchment-300 hover:border-gold-400'
            }`}
          >
            {language === 'si' ? 'සියලු කවි (111)' : 'All Verses (111)'}
          </button>

          {SALALIHINI_CANTOS.map(c => {
            const isSelected = selectedCantoId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCantoId(c.id)}
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 font-bold shadow-md'
                    : 'bg-obsidian-900/80 border border-gold-500/20 text-parchment-300 hover:border-gold-400/60'
                }`}
              >
                <span>{language === 'si' ? c.si : c.en}</span>
                <span className={`text-[10px] ${isSelected ? 'text-obsidian-950' : 'text-gold-400/80'}`}>
                  ({c.from}–{c.to})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Results Info Bar */}
      <div className="px-4 sm:px-6 py-2.5 bg-obsidian-900/50 border-b border-gold-500/10 flex items-center justify-between text-xs text-parchment-400">
        <span>
          {language === 'si'
            ? `කවි ${filteredVerses.length} ක් සොයා ගැනිණි`
            : `Showing ${filteredVerses.length} of 111 classical verses`}
        </span>
        {selectedCantoId !== 'all' && (
          <button
            onClick={() => setSelectedCantoId('all')}
            className="text-gold-400 hover:underline text-[11px]"
          >
            {language === 'si' ? 'සියලු කවි පෙන්වන්න' : 'Show all verses'}
          </button>
        )}
      </div>

      {/* 5. Verses Grid / List */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {filteredVerses.length === 0 ? (
          <div className="text-center py-16 bg-obsidian-900/40 rounded-3xl border border-gold-500/20 max-w-md mx-auto">
            <BookOpen className="w-10 h-10 text-gold-400 mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-lg text-parchment-100 font-bold">
              {language === 'si' ? 'කවි හමු නොවීය' : 'No verses found'}
            </h3>
            <p className="text-xs text-parchment-400 mt-1 mb-4">
              {language === 'si'
                ? 'කරුණාකර වෙනත් වචනයක් හෝ කවි අංකයක් සොයන්න.'
                : 'Try adjusting your search query or reset the canto filters.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCantoId('all');
              }}
              className="px-4 py-2 rounded-full bg-gold-500/20 border border-gold-400 text-gold-300 text-xs font-semibold hover:bg-gold-500/30 transition"
            >
              {language === 'si' ? 'සොඳුරු පෙරහන් යළි සකසන්න' : 'Reset Search'}
            </button>
          </div>
        ) : (
          filteredVerses.map(verse => {
            const canto = SALALIHINI_CANTOS.find(c => verse.n >= c.from && verse.n <= c.to);
            const landmark = SALALIHINI_MAP_LANDMARKS.find(
              lm => verse.n >= lm.verses[0] && verse.n <= lm.verses[1]
            );

            return (
              <article
                key={verse.n}
                id={`verse-${verse.n}`}
                className="p-5 sm:p-6 rounded-3xl bg-obsidian-900/70 border border-gold-500/25 hover:border-gold-400/60 backdrop-blur-md transition-all shadow-xl hover:shadow-gold-500/10 group"
              >
                {/* Verse Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gold-500/15 gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Verse Number Badge */}
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-gold-500/25 to-amber-600/30 border border-gold-400/50 font-mono font-bold text-xs sm:text-sm text-gold-300">
                      {language === 'si' ? `කවිය ${verse.n} / 111` : `Verse ${verse.n} / 111`}
                    </span>

                    {/* Canto Badge */}
                    {canto && (
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-obsidian-800 border border-gold-500/20 text-parchment-300">
                        {language === 'si' ? canto.si : canto.en}
                      </span>
                    )}

                    {/* Landmark Badge (if applicable) */}
                    {landmark && (
                      <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        <span>{language === 'si' ? landmark.si : landmark.en}</span>
                      </span>
                    )}
                  </div>

                  {/* Actions: Copy & Jump to 3D Map */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(verse)}
                      title="Copy verse and meaning"
                      className="p-1.5 rounded-xl bg-obsidian-800/80 border border-gold-500/20 text-parchment-400 hover:text-gold-300 hover:border-gold-400 transition text-xs flex items-center gap-1"
                    >
                      {copiedVerseNum === verse.n ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] text-emerald-400 pr-1">
                            {language === 'si' ? 'පිටපත් විය' : 'Copied'}
                          </span>
                        </>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <button
                      onClick={() => handleVerseAction(verse.n)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/50 text-gold-300 hover:bg-gold-500/35 hover:scale-105 transition text-xs font-semibold"
                    >
                      <Compass className="w-3.5 h-3.5 text-gold-400" />
                      <span className="hidden sm:inline">
                        {language === 'si' ? 'සිතියමෙන් බලන්න' : 'Fly on Map'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Classical Authentic Poetic Lines (පද්‍ය පංති) */}
                <div className="my-4 p-4 rounded-2xl bg-obsidian-950/80 border border-gold-500/20 text-center sm:text-left">
                  <div className="space-y-1.5">
                    {verse.lines && verse.lines.length > 0 ? (
                      verse.lines.map((line, idx) => (
                        <p
                          key={idx}
                          lang="si"
                          className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-wide bg-gradient-to-r from-parchment-50 via-gold-200 to-amber-100 bg-clip-text text-transparent leading-relaxed"
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p
                        lang="si"
                        className="font-serif text-base sm:text-lg font-bold text-gold-300"
                      >
                        {verse.si}
                      </p>
                    )}
                  </div>
                </div>

                {/* Meaning & Translation (Shown in Detailed Mode) */}
                {viewDensity === 'detailed' && (
                  <div className="space-y-3 mt-3 pt-3 border-t border-gold-500/10">
                    {/* Sinhala Meaning */}
                    <div className="pl-3 border-l-2 border-gold-400/50">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-gold-400 block mb-1">
                        {language === 'si' ? 'කවියේ සරල අර්ථය' : 'Sinhala Meaning'}
                      </span>
                      <p
                        lang="si"
                        className="text-xs sm:text-sm text-parchment-200 leading-relaxed font-sans"
                      >
                        {verse.si}
                      </p>
                    </div>

                    {/* Poetic English Translation */}
                    <div className="pl-3 border-l-2 border-stone-600/60">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 block mb-1">
                        English Translation
                      </span>
                      <p className="text-xs sm:text-sm text-parchment-300/90 italic leading-relaxed">
                        "{verse.en}"
                      </p>
                    </div>

                    {/* Historical Footnote (if available) */}
                    {verse.note && (
                      <div className="p-3 rounded-2xl bg-obsidian-950/60 border border-gold-500/15 text-[11px] leading-relaxed text-parchment-400 flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-gold-400">
                            {language === 'si' ? 'ඓතිහාසික සටහන: ' : 'Historical Note: '}
                          </span>
                          <span>{language === 'si' ? verse.note.si : verse.note.en}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>

      {/* Creator Attribution */}
      <div className="py-3 sm:py-4 px-4 text-center border-t border-gold-500/15 text-xs text-stone-400 shrink-0 bg-obsidian-950/80">
        <span>{language === 'si' ? 'නිර්මාණය කළේ: ' : 'Crafted by '}</span>
        <span className="text-gold-400 font-bold tracking-wide">Knexa System (Krishan Prageeth)</span>
        <span className="text-stone-600 mx-2">•</span>
        <span className="text-stone-500">Lanka Chronicles</span>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 bg-obsidian-950/90 backdrop-blur-xl animate-fade-in">
        <div className="relative w-full max-w-5xl h-full sm:h-[90vh] rounded-none sm:rounded-3xl border-0 sm:border border-gold-500/40 shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden">
          {content}
        </div>
      </div>
    );
  }

  return <div className="w-full min-h-screen bg-obsidian-950">{content}</div>;
}
