'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight, MapPin, Landmark, Crown, Filter } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_PERIODS } from '@/data/periods';
import { HISTORICAL_EVENTS } from '@/data/events';
import { formatHistoricalYear } from '@/lib/utils';

export default function TimelinePage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'ancient' | 'medieval' | 'colonial' | 'modern'>('all');

  const filteredPeriods = HISTORICAL_PERIODS.filter(p => {
    if (activeFilter === 'ancient') return p.endYear <= 1017;
    if (activeFilter === 'medieval') return p.startYear >= 1017 && p.endYear <= 1597;
    if (activeFilter === 'colonial') return p.id === 'kandy' || p.id === 'colonial-maritime';
    if (activeFilter === 'modern') return p.id === 'modern-independence';
    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold font-mono">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'si' ? 'කාලානුක්‍රමික ඉතිහාසය' : 'Chronological Timeline'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {language === 'si' ? 'ශ්‍රී ලංකා ඉතිහාස කාලරාමුව' : 'The Chronology of Sri Lanka'}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            {language === 'si'
              ? 'ක්‍රි.පූ. 38,000 බලංගොඩ මානවයාගේ යුගයේ සිට අනුරාධපුරය, පොළොන්නරුව, මධ්‍යතන රාජධානි සහ නූතන යුගය දක්වා විහිදෙන කාලානුක්‍රමික ගමන්මග.'
              : 'Journey from the prehistoric Balangoda Man (~38,000 BCE) through monumental ancient kingdoms, medieval rock bastions, colonial transformations, and independence.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', labelEn: 'All Epochs', labelSi: 'සියලු යුගයන්' },
              { id: 'ancient', labelEn: 'Ancient (BCE – 1017 CE)', labelSi: 'පුරාණ යුගය' },
              { id: 'medieval', labelEn: 'Medieval (1017 – 1597 CE)', labelSi: 'මධ්‍යතන යුගය' },
              { id: 'colonial', labelEn: 'Kandy & Colonial (1505 – 1948)', labelSi: 'මහනුවර හා යටත්විජිත' },
              { id: 'modern', labelEn: 'Independence & Modern', labelSi: 'නිදහස හා නූතන' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gold-500 text-obsidian-950 font-bold shadow-lg'
                    : 'bg-obsidian-900 border border-stone-800 text-stone-400 hover:text-parchment-100 hover:border-gold-500/40'
                }`}
              >
                {language === 'si' ? filter.labelSi : filter.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Chronology Line */}
        <div className="relative border-l-2 border-gold-500/30 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {filteredPeriods.map((period, idx) => (
            <div key={period.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-gold-400 group-hover:scale-125 group-hover:bg-gold-400 transition-all shadow-md" />

              {/* Time Badge (Desktop Left) */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28 text-xs font-mono text-gold-400 font-bold">
                {t(period.dateDisplay)}
              </div>

              {/* Content Card */}
              <div className="bg-obsidian-900 border border-stone-800 group-hover:border-gold-500/50 rounded-2xl p-6 sm:p-8 shadow-xl transition-all space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <span className="md:hidden text-xs font-mono text-gold-400 font-bold block mb-1">
                      {t(period.dateDisplay)}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-parchment-50">
                      {t(period.name)}
                    </h2>
                  </div>

                  <Link
                    href={`/explore?period=${period.id}`}
                    className="px-3.5 py-1.5 rounded-lg bg-gold-500/20 text-gold-300 hover:bg-gold-500 hover:text-obsidian-950 font-semibold text-xs transition-all self-start sm:self-auto flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{language === 'si' ? 'සිතියමෙන් ගවේෂණය කරන්න' : 'View on Map'}</span>
                  </Link>
                </div>

                {/* Tagline */}
                <p className="text-gold-300/90 italic font-serif text-sm">
                  "{t(period.tagline)}"
                </p>

                {/* Overview */}
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                  {t(period.overview)}
                </p>

                {/* Political Centers & Significance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-obsidian-950/70 p-3 rounded-xl border border-stone-800">
                    <span className="text-gold-400 font-semibold block mb-1">
                      {language === 'si' ? 'ප්‍රධාන පාලන කේන්ද්‍රස්ථාන:' : 'Political Centers:'}
                    </span>
                    <span className="text-stone-300">
                      {period.politicalCenters.map(c => t(c)).join(' • ')}
                    </span>
                  </div>

                  <div className="bg-obsidian-950/70 p-3 rounded-xl border border-stone-800">
                    <span className="text-emerald-400 font-semibold block mb-1">
                      {language === 'si' ? 'ශිෂ්ටාචාරමය වැදගත්කම:' : 'Historical Significance:'}
                    </span>
                    <span className="text-stone-300">
                      {t(period.significance)}
                    </span>
                  </div>
                </div>

                {/* Period References */}
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800 flex items-center justify-between">
                  <span>Sources: {period.sources.join('; ')}</span>
                  <Link
                    href={`/periods/${period.slug}`}
                    className="text-gold-400 hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Read Period Chapter</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
