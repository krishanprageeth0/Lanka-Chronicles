'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Bookmark, Feather, MapPin, Compass, Globe, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_SITES } from '@/data/sites';
import { HISTORICAL_JOURNEYS } from '@/data/journeys';

export default function DashboardPage() {
  const { language, t } = useLanguage();

  const [bookmarkedSites, setBookmarkedSites] = useState([
    HISTORICAL_SITES[0], // Ruwanwelisaya
    HISTORICAL_SITES[1], // Sigiriya
    HISTORICAL_SITES[4], // Yapahuwa
  ]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-obsidian-950 text-parchment-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* User Header Profile */}
        <div className="bg-obsidian-900 border border-gold-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-2xl">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-700 flex items-center justify-center text-obsidian-950 font-serif font-black text-2xl shadow-xl">
            LK
          </div>
          <div className="space-y-1 text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-mono">
                Historical Explorer Account
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">
                Active Member
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-parchment-50">
              Explorer of Lanka
            </h1>
            <p className="text-xs text-stone-400">
              Signed in as a researcher • Preferred Language: {language === 'si' ? 'සිංහල' : 'English'}
            </p>
          </div>

          <Link
            href="/explore"
            className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow"
          >
            <Compass className="w-4 h-4" />
            <span>Open Map Explorer</span>
          </Link>
        </div>

        {/* Saved Discoveries & Bookmarked Locations */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-parchment-50 flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-gold-400" />
              <span>Saved Archaeological Sites ({bookmarkedSites.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bookmarkedSites.map((site) => (
              <div
                key={site.id}
                className="bg-obsidian-900 border border-stone-800 hover:border-gold-500/40 rounded-2xl p-5 shadow-xl transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gold-400 font-mono block">
                    {site.category.replace('_', ' ')}
                  </span>
                  <h3 className="font-serif font-bold text-base text-parchment-100 mt-0.5">
                    {t(site.name)}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mt-1 leading-relaxed font-light">
                    {t(site.significance)}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                  <Link
                    href={`/explore?site=${site.id}`}
                    className="text-xs text-stone-400 hover:text-gold-400 flex items-center gap-1 font-mono"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>View Map</span>
                  </Link>
                  <Link
                    href={`/sites/${site.slug}`}
                    className="text-xs text-gold-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite 3D Journeys */}
        <div className="space-y-4 pt-4 border-t border-stone-800">
          <h2 className="text-xl font-serif font-bold text-parchment-50 flex items-center gap-2">
            <Feather className="w-5 h-5 text-gold-400" />
            <span>Completed & Recommended 3D Flights</span>
          </h2>

          <div className="p-6 rounded-2xl bg-obsidian-900 border border-gold-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <span className="text-[10px] bg-gold-500/20 text-gold-400 px-2 py-0.5 rounded font-mono font-bold">
                15th Century Literary Route
              </span>
              <h3 className="font-serif font-bold text-lg text-parchment-100">
                {t(HISTORICAL_JOURNEYS[0].title)}
              </h3>
              <p className="text-xs text-stone-400 max-w-xl font-light">
                {t(HISTORICAL_JOURNEYS[0].description)}
              </p>
            </div>

            <Link
              href={`/journeys/${HISTORICAL_JOURNEYS[0].slug}`}
              className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow flex-shrink-0"
            >
              <span>Resume Flight</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
