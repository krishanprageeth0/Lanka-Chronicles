'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Crown, MapPin, ArrowRight, Landmark, Layers, Droplets, Calendar } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { KINGDOMS } from '@/data/kingdoms';

export default function KingdomsPage() {
  const { language, t } = useLanguage();
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    if (selectedForCompare.includes(id)) {
      setSelectedForCompare(selectedForCompare.filter(x => x !== id));
    } else {
      if (selectedForCompare.length < 2) {
        setSelectedForCompare([...selectedForCompare, id]);
      } else {
        setSelectedForCompare([selectedForCompare[1], id]);
      }
    }
  };

  const comparedKingdoms = KINGDOMS.filter(k => selectedForCompare.includes(k.id));

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold font-mono">
            <Crown className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'si' ? 'රාජධානි ගවේෂකය' : 'Kingdoms & Political Realms'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {language === 'si' ? 'ලක්දිව රාජධානි සහ පාලන කේන්ද්‍ර' : 'Kingdoms of Sri Lanka'}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            {language === 'si'
              ? 'අනුරාධපුරයේ ස්වර්ණමය යුගයේ සිට පොළොන්නරුව, දඹදෙණිය, යාපහුව, කෝට්ටේ, සීතාවක සහ සෙංකඩගල මහා රාජධානිය දක්වා දේශපාලන කේන්ද්‍ර විතැන් වූ ආකාරය ගවේෂණය කරන්න.'
              : 'Discover how sovereign seats, dynasties, defense strategies, and hydraulic civilization transformed as the capital shifted across the island across fourteen centuries.'}
          </p>
        </div>

        {/* Comparison Banner if user selected 2 kingdoms */}
        {comparedKingdoms.length === 2 && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-obsidian-900 to-forest-900 border border-gold-500/50 shadow-2xl animate-fadeIn space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-mono">
                {language === 'si' ? 'රාජධානි යුග සංසන්දනය' : 'Comparative Historical Analysis'}
              </span>
              <button
                onClick={() => setSelectedForCompare([])}
                className="text-xs text-stone-400 hover:text-stone-200 underline"
              >
                Clear Comparison
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              {comparedKingdoms.map((k) => (
                <div key={k.id} className="p-4 rounded-xl bg-obsidian-950/80 border border-stone-800 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-gold-300">{t(k.name)}</h3>
                  <div className="font-mono text-stone-400 text-xs">{t(k.dateDisplay)}</div>
                  <p className="text-stone-300 leading-relaxed">{t(k.overview)}</p>
                  <div className="pt-2 text-stone-400">
                    <strong className="text-parchment-100">Key Monuments: </strong>
                    {k.majorMonuments.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Kingdoms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KINGDOMS.map((kingdom) => (
            <div
              key={kingdom.id}
              className="bg-obsidian-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-gold-400 transition-all hover:scale-102 group"
            >
              <div>
                <div className="relative h-56 w-full">
                  <Image
                    src={kingdom.image}
                    alt={kingdom.name.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-obsidian-950/85 backdrop-blur-md px-3 py-1 rounded-md text-xs text-gold-400 font-mono border border-gold-500/30">
                    {t(kingdom.dateDisplay)}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-parchment-50 group-hover:text-gold-300 transition-colors">
                    {t(kingdom.name)}
                  </h3>
                  
                  <p className="text-stone-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light">
                    {t(kingdom.overview)}
                  </p>

                  {/* Prominent Rulers */}
                  <div className="pt-2 border-t border-stone-800 space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold block font-mono">
                      {language === 'si' ? 'ප්‍රමුඛ රජවරුන්:' : 'Prominent Monarchs:'}
                    </span>
                    <div className="flex flex-wrap gap-1 text-xs text-stone-300">
                      {kingdom.prominentRulers.slice(0, 3).map((r, i) => (
                        <span key={i} className="bg-obsidian-950 px-2 py-0.5 rounded border border-stone-800">
                          {t(r.name)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => toggleCompare(kingdom.id)}
                  className={`text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                    selectedForCompare.includes(kingdom.id)
                      ? 'bg-gold-500/20 text-gold-300 border-gold-400 font-semibold'
                      : 'border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {selectedForCompare.includes(kingdom.id) ? 'Selected for Compare' : '+ Compare'}
                </button>

                <Link
                  href={`/kingdoms/${kingdom.slug}`}
                  className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>{language === 'si' ? 'විස්තරය' : 'View Realm'}</span>
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
