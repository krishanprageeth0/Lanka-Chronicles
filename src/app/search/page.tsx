'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search as SearchIcon, X, Crown, Landmark, Shield, Calendar, BookOpen, Clock, ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_PERIODS } from '@/data/periods';
import { KINGDOMS } from '@/data/kingdoms';
import { HISTORICAL_RULERS } from '@/data/rulers';
import { HISTORICAL_SITES } from '@/data/sites';
import { HISTORICAL_EVENTS } from '@/data/events';
import { HISTORICAL_STORIES } from '@/data/stories';

export default function SearchPage() {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'periods' | 'kingdoms' | 'rulers' | 'sites' | 'events' | 'stories'>('all');

  const results = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];

    const matches: {
      type: 'period' | 'kingdom' | 'ruler' | 'site' | 'event' | 'story';
      title: string;
      subtitle: string;
      link: string;
      meta?: string;
    }[] = [];

    // Search Periods
    if (selectedCategory === 'all' || selectedCategory === 'periods') {
      HISTORICAL_PERIODS.forEach(p => {
        if (
          p.name.en.toLowerCase().includes(q) ||
          p.name.si.toLowerCase().includes(q) ||
          p.overview.en.toLowerCase().includes(q) ||
          p.overview.si.toLowerCase().includes(q)
        ) {
          matches.push({
            type: 'period',
            title: t(p.name),
            subtitle: t(p.tagline),
            link: `/timeline`,
            meta: t(p.dateDisplay)
          });
        }
      });
    }

    // Search Kingdoms
    if (selectedCategory === 'all' || selectedCategory === 'kingdoms') {
      KINGDOMS.forEach(k => {
        if (
          k.name.en.toLowerCase().includes(q) ||
          k.name.si.toLowerCase().includes(q) ||
          k.overview.en.toLowerCase().includes(q) ||
          k.overview.si.toLowerCase().includes(q)
        ) {
          matches.push({
            type: 'kingdom',
            title: t(k.name),
            subtitle: t(k.overview),
            link: `/kingdoms/${k.slug}`,
            meta: t(k.dateDisplay)
          });
        }
      });
    }

    // Search Rulers
    if (selectedCategory === 'all' || selectedCategory === 'rulers') {
      HISTORICAL_RULERS.forEach(r => {
        if (
          r.name.en.toLowerCase().includes(q) ||
          r.name.si.toLowerCase().includes(q) ||
          r.biography.en.toLowerCase().includes(q) ||
          r.biography.si.toLowerCase().includes(q)
        ) {
          matches.push({
            type: 'ruler',
            title: t(r.name),
            subtitle: t(r.biography),
            link: `/rulers/${r.slug}`,
            meta: t(r.reignPeriod)
          });
        }
      });
    }

    // Search Sites
    if (selectedCategory === 'all' || selectedCategory === 'sites') {
      HISTORICAL_SITES.forEach(s => {
        if (
          s.name.en.toLowerCase().includes(q) ||
          s.name.si.toLowerCase().includes(q) ||
          s.description.en.toLowerCase().includes(q) ||
          s.description.si.toLowerCase().includes(q) ||
          s.significance.en.toLowerCase().includes(q)
        ) {
          matches.push({
            type: 'site',
            title: t(s.name),
            subtitle: t(s.significance),
            link: `/sites/${s.slug}`,
            meta: s.category.replace('_', ' ')
          });
        }
      });
    }

    // Search Events
    if (selectedCategory === 'all' || selectedCategory === 'events') {
      HISTORICAL_EVENTS.forEach(e => {
        if (
          e.title.en.toLowerCase().includes(q) ||
          e.title.si.toLowerCase().includes(q) ||
          e.overview.en.toLowerCase().includes(q) ||
          e.overview.si.toLowerCase().includes(q)
        ) {
          matches.push({
            type: 'event',
            title: t(e.title),
            subtitle: t(e.overview),
            link: `/events/${e.slug}`,
            meta: t(e.dateDisplay)
          });
        }
      });
    }

    // Search Stories
    if (selectedCategory === 'all' || selectedCategory === 'stories') {
      HISTORICAL_STORIES.forEach(st => {
        if (
          st.title.en.toLowerCase().includes(q) ||
          st.title.si.toLowerCase().includes(q) ||
          st.summary.en.toLowerCase().includes(q) ||
          st.summary.si.toLowerCase().includes(q)
        ) {
          matches.push({
            type: 'story',
            title: t(st.title),
            subtitle: t(st.summary),
            link: `/stories/${st.slug}`,
            meta: st.readTime
          });
        }
      });
    }

    return matches;
  }, [searchTerm, selectedCategory, language]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title */}
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-parchment-50">
            {language === 'si' ? 'සර්ව සම්පූර්ණ ඓතිහාසික සෙවුම' : 'Global Historical Search'}
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm font-light">
            {language === 'si'
              ? 'රාජධානි, පාලකයන්, පුරාවිද්‍යා ස්ථාන, වාරි පද්ධති සහ ඓතිහාසික සිදුවීම් සිංහලෙන් හෝ ඉංග්‍රීසියෙන් සොයන්න.'
              : 'Search seamlessly across kingdoms, rulers, ancient monuments, irrigation systems, and historical milestones.'}
          </p>
        </div>

        {/* Input Form */}
        <div className="relative">
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-4 w-5 h-5 text-gold-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                language === 'si'
                  ? 'උදා: අනුරාධපුර, සීගිරිය, පැරකුම්බා, සැළලිහිණි, යෝධ ඇළ...'
                  : 'Search by place, ruler, battle, or artifact (e.g., Sigiriya, Parakramabahu, Salalihini, Yoda Ela)...'
              }
              className="w-full bg-obsidian-900 border-2 border-gold-500/40 focus:border-gold-400 rounded-2xl pl-12 pr-10 py-4 text-sm sm:text-base text-parchment-100 placeholder-stone-500 shadow-2xl focus:outline-none transition-colors"
              autoFocus
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 p-1 text-stone-400 hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {[
              { id: 'all', label: 'All' },
              { id: 'periods', label: 'Periods' },
              { id: 'kingdoms', label: 'Kingdoms' },
              { id: 'rulers', label: 'Rulers' },
              { id: 'sites', label: 'Sites' },
              { id: 'events', label: 'Events' },
              { id: 'stories', label: 'Stories' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as typeof selectedCategory)}
                className={`px-3 py-1 rounded-full text-xs transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gold-500 text-obsidian-950 font-bold'
                    : 'bg-obsidian-900 border border-stone-800 text-stone-400 hover:border-gold-500/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-4 pt-4">
          {searchTerm.trim() ? (
            results.length > 0 ? (
              <>
                <div className="text-xs text-stone-400 font-mono">
                  {results.length} historical record{results.length > 1 ? 's' : ''} matched:
                </div>
                {results.map((res, i) => (
                  <Link
                    key={i}
                    href={res.link}
                    className="block p-5 rounded-2xl bg-obsidian-900 border border-stone-800 hover:border-gold-500/50 transition-all hover:bg-obsidian-850 shadow-md group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wider bg-gold-500/20 text-gold-400 px-2 py-0.5 rounded font-mono font-bold">
                            {res.type}
                          </span>
                          {res.meta && (
                            <span className="text-xs text-stone-400 font-mono">
                              {res.meta}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-serif font-bold text-parchment-50 group-hover:text-gold-300 transition-colors">
                          {res.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed font-light">
                          {res.subtitle}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-gold-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <div className="text-center py-12 space-y-2 bg-obsidian-900/50 rounded-2xl border border-stone-800">
                <p className="text-parchment-200 font-serif text-lg">No matching records found.</p>
                <p className="text-xs text-stone-400">
                  Try searching for keywords like "Anuradhapura", "Sigiriya", "Kotte", "Parakramabahu", or "Minneriya".
                </p>
              </div>
            )
          ) : (
            <div className="p-8 text-center text-xs text-stone-500 space-y-2">
              <p>Type a historical name, place, or term above to begin searching.</p>
              <div className="flex justify-center gap-2 pt-2">
                {['Sigiriya', 'Salalihini', 'Dutugemunu', 'Parakrama Samudra', 'Galle Fort'].map(term => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="text-stone-400 hover:text-gold-400 underline"
                  >
                    "{term}"
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
