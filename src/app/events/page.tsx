'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, MapPin, Flame, Shield, BookOpen, Layers } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_EVENTS } from '@/data/events';

export default function EventsDirectoryPage() {
  const { language, t } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredEvents = HISTORICAL_EVENTS.filter(e => {
    if (filterCategory === 'all') return true;
    return e.category === filterCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold font-mono">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'si' ? 'ඓතිහාසික සිදුවීම් පුවරුව' : 'Historical Events & Turning Points'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {language === 'si' ? 'ලක් ඉතිහාසයේ සන්ධිස්ථාන' : 'Chronicle of Milestones'}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            {language === 'si'
              ? 'මිහිඳු හිමියන්ගේ ලංකාගමනයේ සිට ත්‍රිපිටකය ග්‍රන්ථාරූඪ කිරීම, මුල්ලේරියා සටන, කෝට්ටේ සැළලිහිණි සන්දේශය සහ 1948 නිදහස දක්වා වැදගත් සිදුවීම්.'
              : 'Discover decisive battles, religious councils, architectural triumphs, peace pacts, and colonial transformations recorded in Sri Lankan annals.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { id: 'all', labelEn: 'All Events', labelSi: 'සියලු සිදුවීම්' },
              { id: 'religious', labelEn: 'Religious Foundations', labelSi: 'ශාසනික සිදුවීම්' },
              { id: 'battle', labelEn: 'Battles & Military', labelSi: 'යුධ සටන්' },
              { id: 'cultural', labelEn: 'Literature & Culture', labelSi: 'සාහිත්‍යය හා කලාව' },
              { id: 'treaty', labelEn: 'Treaties & Politics', labelSi: 'ගිවිසුම් හා දේශපාලන' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilterCategory(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filterCategory === f.id
                    ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md'
                    : 'bg-obsidian-900 border border-stone-800 text-stone-400 hover:text-stone-200 hover:border-gold-500/40'
                }`}
              >
                {language === 'si' ? f.labelSi : f.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-obsidian-900 border border-stone-800 hover:border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gold-500/20 text-gold-300 px-2.5 py-0.5 rounded font-mono font-bold">
                    {t(event.dateDisplay)}
                  </span>
                  <span className="text-xs text-stone-400 capitalize font-mono">
                    {event.category} • {t(event.location)}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-parchment-50">
                  {t(event.title)}
                </h3>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                  {t(event.overview)}
                </p>

                <div className="pt-2 text-xs text-stone-400">
                  <strong className="text-gold-400 font-medium">Historical Consequences: </strong>
                  <span>{t(event.consequences)}</span>
                </div>
              </div>

              <div className="flex md:flex-col items-center gap-2 flex-shrink-0 self-end md:self-auto">
                <Link
                  href={`/events/${event.slug}`}
                  className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>{language === 'si' ? 'විස්තරය' : 'Inspect'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {event.coordinates && (
                  <Link
                    href={`/explore?event=${event.id}`}
                    className="text-xs text-stone-400 hover:text-gold-400 p-2 transition-colors flex items-center gap-1"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">Map</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
