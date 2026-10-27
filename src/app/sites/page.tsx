'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Landmark, MapPin, ArrowRight, Sparkles, Split } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_SITES } from '@/data/sites';

export default function SitesDirectoryPage() {
  const { language, t } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredSites = HISTORICAL_SITES.filter(s => {
    if (filterCategory === 'all') return true;
    return s.category === filterCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold font-mono">
            <Landmark className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'si' ? 'පුරාවිද්‍යා හා උරුම ස්ථාන' : 'Archaeological & Heritage Sites'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {language === 'si' ? 'ලක්දිව පුරාවිද්‍යා නාමාවලිය' : 'Sanctuaries of Stone & Water'}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            {language === 'si'
              ? 'අනුරාධපුරයේ මහා දාගැබ්, සීගිරි පර්වත අහස් මාලිගය, පොළොන්නරු වටදාගෙය, යාපහුවේ සිංහ පියගැටපෙළ සහ ගාලු ලන්දේසි කොටුව දක්වා විහිදෙන පුරාවිද්‍යා උරුමය.'
              : 'Explore the monumental stupas, rock citadels, circular vatadages, and coastal ramparts that testify to ancient Sri Lankan architectural mastery.'}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { id: 'all', labelEn: 'All Sites', labelSi: 'සියලු ස්ථාන' },
              { id: 'religious_shrine', labelEn: 'Religious Shrines & Stupas', labelSi: 'වෙහෙර විහාර' },
              { id: 'fortress', labelEn: 'Rock Fortresses & Citadels', labelSi: 'ගිරිදුර්ග' },
              { id: 'colonial_fort', labelEn: 'Colonial Maritime Forts', labelSi: 'සාගර බලකොටු' },
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

        {/* Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site) => (
            <div
              key={site.id}
              className="bg-obsidian-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-gold-400 transition-all hover:scale-102 group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={site.image}
                    alt={site.name.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-obsidian-950/85 backdrop-blur-md px-3 py-1 rounded-md text-xs text-gold-400 font-mono border border-gold-500/30">
                    {site.coordinates[0]}° N, {site.coordinates[1]}° E
                  </div>

                  {site.threeDModelAvailable && (
                    <div className="absolute top-3 right-3 bg-emerald-500/90 text-obsidian-950 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                      <Sparkles className="w-3 h-3" />
                      <span>3D Model</span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[11px] text-stone-400 font-mono uppercase tracking-wider block capitalize">
                      {site.category.replace('_', ' ')} • Elev: {site.elevation}m
                    </span>
                    <h3 className="text-xl font-serif font-bold text-parchment-50 group-hover:text-gold-300 transition-colors">
                      {t(site.name)}
                    </h3>
                  </div>

                  <p className="text-stone-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light">
                    {t(site.significance)}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-800/80 mt-4 flex items-center justify-between">
                <Link
                  href={`/explore?site=${site.id}`}
                  className="text-xs text-stone-400 hover:text-gold-400 transition-colors flex items-center gap-1 font-mono"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Locate on Map</span>
                </Link>

                <Link
                  href={`/sites/${site.slug}`}
                  className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>{language === 'si' ? 'ගවේෂණය' : 'Explore'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
