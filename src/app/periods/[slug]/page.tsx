'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, MapPin, Landmark, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { HISTORICAL_PERIODS } from '@/data/periods';

export default function PeriodDetailPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const slug = params?.slug as string;

  const period = HISTORICAL_PERIODS.find(p => p.slug === slug) || HISTORICAL_PERIODS[2];

  return (
    <div className="min-h-screen pt-20 pb-20 bg-obsidian-950 text-parchment-100">
      
      {/* Top Banner */}
      <div className="relative h-80 sm:h-[420px] w-full overflow-hidden border-b border-gold-500/20">
        <Image
          src={period.image}
          alt={period.name.en}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        
        <div className="absolute top-6 left-4 sm:left-8 z-10">
          <Link
            href="/timeline"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950/80 border border-stone-800 text-stone-300 hover:text-gold-300 text-xs backdrop-blur-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Timeline</span>
          </Link>
        </div>

        <div className="absolute bottom-8 left-4 sm:left-8 right-4 sm:right-8 max-w-5xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400 font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>{t(period.dateDisplay)} • Precision: {period.datePrecision}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-parchment-50 leading-tight">
            {t(period.name)}
          </h1>
          <p className="text-sm sm:text-base text-gold-300/90 font-serif italic">
            "{t(period.tagline)}"
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-serif font-bold text-gold-400">
                {language === 'si' ? 'යුගයේ ඓතිහාසික සමාලෝචනය' : 'Historical Overview of the Epoch'}
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {t(period.overview)}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-stone-800">
              <h3 className="text-lg font-serif font-bold text-gold-400">
                {language === 'si' ? 'ශිෂ්ටාචාරමය සලකුණ' : 'Civilizational Legacy & Significance'}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                {t(period.significance)}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-stone-800">
              <h3 className="text-lg font-serif font-bold text-gold-400">
                {language === 'si' ? 'ප්‍රධාන පාලන කේන්ද්‍රස්ථාන' : 'Principal Administrative & Spiritual Centers'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {period.politicalCenters.map((pc, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-obsidian-900 border border-stone-800 text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    <span className="font-semibold text-stone-200">{t(pc)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-obsidian-900 border border-gold-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
              <h3 className="font-serif font-bold text-base text-parchment-100 border-b border-stone-800 pb-2">
                Period Profile
              </h3>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Chronological Dates:
                </span>
                <span className="text-xs font-mono font-semibold text-gold-300">
                  {t(period.dateDisplay)}
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-mono">
                  Dating Precision:
                </span>
                <span className="text-xs text-stone-300 capitalize">
                  {period.datePrecision} attribution
                </span>
              </div>

              <div className="pt-2 border-t border-stone-800">
                <Link
                  href={`/explore?period=${period.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{language === 'si' ? 'සිතියමෙන් ගවේෂණය' : 'Explore on Map'}</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
