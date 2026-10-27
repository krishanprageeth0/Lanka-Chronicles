'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Feather, ArrowRight, Compass, Navigation, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_JOURNEYS } from '@/data/journeys';

export default function JourneysDirectoryPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold">
            <Feather className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'si' ? 'ත්‍රිමාණ ගවේෂණ ගමන් මං' : 'Guided 3D Fly-Through Journeys'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {language === 'si' ? 'කාලය හරහා ගුවන් චාරිකාව' : 'Journeys Through Time'}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            {language === 'si'
              ? 'සැළලිහිණි සන්දේශයේ කාව්‍යමය ගුවන් මග, දන්ත ධාතූන් වහන්සේගේ වැඩමවීම සහ මහා වාරි ශිෂ්ටාචාරය ඔස්සේ ත්‍රිමාණ කැමරා පියාසැරියකින් ලක්දිව ඉතිහාසය අත්විඳින්න.'
              : 'Experience curated historical trails through smooth 3D camera fly-throughs, elevation profiles, classical literature, and atmospheric island soundscapes.'}
          </p>
        </div>

        {/* Journeys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HISTORICAL_JOURNEYS.map((journey) => (
            <div
              key={journey.id}
              className="group bg-obsidian-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-gold-400 transition-all hover:scale-102"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={journey.heroImage}
                    alt={journey.title.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-obsidian-950/85 backdrop-blur-md px-3 py-1 rounded-md text-xs text-gold-400 font-mono border border-gold-500/30">
                    {journey.totalDistanceKm} km • {journey.waypoints.length} Stops
                  </div>

                  <div className="absolute top-3 right-3 bg-gold-500 text-obsidian-950 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                    3D Flight
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] text-stone-400 font-mono uppercase tracking-wider block">
                    {t(journey.dateDisplay)}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-parchment-50 group-hover:text-gold-300 transition-colors">
                    {t(journey.title)}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light">
                    {t(journey.description)}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-800/80 mt-4 flex items-center justify-between">
                <span className="text-xs text-stone-400 font-mono">
                  Audio: {journey.audioTrackName}
                </span>

                <Link
                  href={`/journeys/${journey.slug}`}
                  className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>{language === 'si' ? 'ගමන අරඹන්න' : 'Fly Journey'}</span>
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
